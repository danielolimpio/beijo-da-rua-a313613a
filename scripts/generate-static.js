#!/usr/bin/env node

/**
 * Static Site Generator Script
 * 
 * This script generates static HTML files for all routes after the Vite build.
 * It uses Puppeteer to render each page and extract the full HTML content.
 * 
 * Usage: node scripts/generate-static.js
 * 
 * Prerequisites:
 * - Run `npm run build` first to generate the dist/ folder
 * - Puppeteer must be installed
 */

import puppeteer from 'puppeteer';
import { spawn, execSync } from 'child_process';
import { mkdir, writeFile, readFile, access } from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import http from 'http';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Configuration
const PORT = 5173;
const BASE_URL = `http://localhost:${PORT}`;
const DIST_DIR = join(__dirname, '..', 'dist');
const SITE_URL = 'https://beijodarua.com.br';

// Load routes from JSON file
async function loadRoutes() {
  const routesPath = join(__dirname, 'routes.json');
  const data = await readFile(routesPath, 'utf-8');
  return JSON.parse(data).routes;
}

// Check if dist directory exists
async function checkDistExists() {
  try {
    await access(DIST_DIR);
    return true;
  } catch {
    return false;
  }
}

// Wait for server to be ready by polling
function waitForServer(maxAttempts = 30) {
  return new Promise((resolve, reject) => {
    let attempts = 0;
    
    const checkServer = () => {
      attempts++;
      console.log(`  Checking server (attempt ${attempts}/${maxAttempts})...`);
      
      const req = http.get(BASE_URL, (res) => {
        if (res.statusCode === 200) {
          console.log('  ✓ Server is ready!');
          resolve(true);
        } else {
          retry();
        }
      });
      
      req.on('error', () => {
        retry();
      });
      
      req.setTimeout(1000, () => {
        req.destroy();
        retry();
      });
    };
    
    const retry = () => {
      if (attempts >= maxAttempts) {
        reject(new Error('Server did not become ready in time'));
      } else {
        setTimeout(checkServer, 1000);
      }
    };
    
    checkServer();
  });
}

// Start a local server to serve the built files
function startServer() {
  return new Promise((resolve, reject) => {
    console.log(`  Starting server on port ${PORT}...`);
    
    // Kill any process using the port first
    try {
      execSync(`lsof -ti:${PORT} | xargs kill -9 2>/dev/null || true`, { stdio: 'ignore' });
    } catch (e) {
      // Ignore errors - port might not be in use
    }
    
    const server = spawn('npx', ['serve', DIST_DIR, '-p', PORT.toString(), '-s', '--no-clipboard'], {
      stdio: ['pipe', 'pipe', 'pipe'],
      shell: true,
      detached: false
    });

    server.stdout.on('data', (data) => {
      const output = data.toString().trim();
      if (output) console.log(`  [serve] ${output}`);
    });

    server.stderr.on('data', (data) => {
      const output = data.toString().trim();
      if (output && !output.includes('WARN')) console.error(`  [serve error] ${output}`);
    });

    server.on('error', (err) => {
      reject(err);
    });

    // Give server 2 seconds to start, then we'll poll for readiness
    setTimeout(() => resolve(server), 2000);
  });
}

// Generate the output path for a route
function getOutputPath(route) {
  if (route === '/') {
    return join(DIST_DIR, 'index.html');
  }
  // Remove leading slash and create folder structure
  const cleanRoute = route.replace(/^\//, '').replace(/\/$/, '');
  return join(DIST_DIR, cleanRoute, 'index.html');
}

// Process HTML to update canonical URLs and ensure proper structure
function processHtml(html, route) {
  // Ensure canonical URL is correct for this route (with trailing slash)
  const canonicalUrl = route === '/' 
    ? `${SITE_URL}/` 
    : `${SITE_URL}${route}/`;
  
  // Remove existing canonical links
  html = html.replace(/<link[^>]*rel="canonical"[^>]*>/gi, '');
  
  // Add correct canonical link before </head>
  html = html.replace(
    '</head>',
    `<link rel="canonical" href="${canonicalUrl}">\n</head>`
  );

  // Ensure lang="pt-BR" is set correctly
  html = html.replace(
    /<html([^>]*)>/i,
    (match, attrs) => {
      // Remove any existing lang attribute
      const cleanAttrs = attrs.replace(/\s*lang="[^"]*"/gi, '');
      return `<html lang="pt-BR"${cleanAttrs}>`;
    }
  );

  return html;
}

// Render a single route and save the HTML
async function renderRoute(browser, route) {
  const page = await browser.newPage();
  
  try {
    const url = `${BASE_URL}${route}`;
    console.log(`  Rendering: ${route}`);
    
    // Set viewport for consistent rendering
    await page.setViewport({ width: 1280, height: 800 });
    
    // Navigate to the page
    await page.goto(url, { 
      waitUntil: 'networkidle0',
      timeout: 60000 
    });

    // Wait for React to fully render - look for actual content
    await page.waitForSelector('body', { timeout: 10000 });
    
    // Wait for specific content indicators (header, main content)
    try {
      await page.waitForSelector('header, main, .min-h-screen', { timeout: 5000 });
    } catch (e) {
      console.log(`    ⚠ No header/main found for ${route}, continuing...`);
    }
    
    // Additional wait for dynamic content and images
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Get the full HTML content
    let html = await page.content();
    
    // Verify content was rendered
    const bodyContent = await page.evaluate(() => document.body.innerText.length);
    if (bodyContent < 100) {
      console.warn(`    ⚠ Warning: Very little content rendered for ${route} (${bodyContent} chars)`);
    } else {
      console.log(`    Content: ${bodyContent} characters`);
    }
    
    // Process the HTML
    html = processHtml(html, route);

    // Create directory structure and save file
    const outputPath = getOutputPath(route);
    await mkdir(dirname(outputPath), { recursive: true });
    await writeFile(outputPath, html, 'utf-8');
    
    console.log(`    ✓ Saved: ${outputPath.replace(DIST_DIR, 'dist')}`);
    
    return true;
  } catch (error) {
    console.error(`    ✗ Failed to render ${route}: ${error.message}`);
    return false;
  } finally {
    await page.close();
  }
}

// Main function
async function main() {
  console.log('\n🚀 Starting Static Site Generation...\n');
  
  // Check if dist exists
  const distExists = await checkDistExists();
  if (!distExists) {
    console.error('❌ Error: dist/ directory not found. Run "npm run build" first.');
    process.exit(1);
  }
  console.log('✓ dist/ directory found\n');
  
  // Load routes
  const routes = await loadRoutes();
  console.log(`📋 Found ${routes.length} routes to render\n`);

  // Start local server
  console.log('🖥️  Starting local server...');
  const server = await startServer();
  
  // Wait for server to be ready
  try {
    await waitForServer(30);
  } catch (e) {
    console.error('❌ Server failed to start:', e.message);
    server.kill();
    process.exit(1);
  }

  // Launch browser
  console.log('\n🌐 Launching browser...');
  const browser = await puppeteer.launch({
    headless: 'new',
    args: [
      '--no-sandbox', 
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-gpu'
    ]
  });
  console.log('✓ Browser launched\n');

  console.log('📄 Rendering pages...\n');

  // Track results
  let success = 0;
  let failed = 0;

  // Render each route (with concurrency limit for stability)
  const CONCURRENCY = 3;
  for (let i = 0; i < routes.length; i += CONCURRENCY) {
    const batch = routes.slice(i, i + CONCURRENCY);
    const results = await Promise.all(batch.map(route => renderRoute(browser, route)));
    results.forEach(result => result ? success++ : failed++);
  }

  // Cleanup
  console.log('\n🧹 Cleaning up...');
  await browser.close();
  
  try {
    server.kill('SIGTERM');
  } catch (e) {
    // Server might already be dead
  }

  console.log('\n' + '='.repeat(50));
  console.log(`✅ Static Site Generation Complete!`);
  console.log(`   Success: ${success}/${routes.length}`);
  if (failed > 0) {
    console.log(`   Failed: ${failed}/${routes.length}`);
  }
  console.log(`📁 Output directory: ${DIST_DIR}`);
  console.log('='.repeat(50) + '\n');
  
  if (failed > 0) {
    process.exit(1);
  }
}

// Run the script
main().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
