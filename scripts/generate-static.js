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
 * - Puppeteer and serve must be installed
 */

import puppeteer from 'puppeteer';
import { spawn } from 'child_process';
import { mkdir, writeFile, readFile } from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

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

// Start a local server to serve the built files
function startServer() {
  return new Promise((resolve, reject) => {
    const server = spawn('npx', ['serve', DIST_DIR, '-p', PORT.toString(), '-s'], {
      stdio: ['pipe', 'pipe', 'pipe'],
      shell: true
    });

    let started = false;

    server.stdout.on('data', (data) => {
      const output = data.toString();
      console.log(`[Server] ${output}`);
      if (!started && (output.includes('Accepting connections') || output.includes('Local:'))) {
        started = true;
        // Give the server a moment to fully initialize
        setTimeout(() => resolve(server), 1000);
      }
    });

    server.stderr.on('data', (data) => {
      console.error(`[Server Error] ${data}`);
    });

    server.on('error', (err) => {
      reject(err);
    });

    // Fallback timeout - assume server is ready after 5 seconds
    setTimeout(() => {
      if (!started) {
        started = true;
        resolve(server);
      }
    }, 5000);
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
  // Ensure canonical URL is correct for this route
  const canonicalUrl = route === '/' 
    ? `${SITE_URL}/` 
    : `${SITE_URL}${route}/`;
  
  // Update or add canonical link
  if (html.includes('rel="canonical"')) {
    html = html.replace(
      /<link[^>]*rel="canonical"[^>]*>/gi,
      `<link rel="canonical" href="${canonicalUrl}">`
    );
  } else {
    html = html.replace(
      '</head>',
      `<link rel="canonical" href="${canonicalUrl}">\n</head>`
    );
  }

  // Ensure lang="pt-BR" is set
  html = html.replace(
    /<html([^>]*)>/i,
    '<html lang="pt-BR"$1>'
  );

  // Remove duplicate lang attributes if any
  html = html.replace(/lang="[^"]*"\s*lang="pt-BR"/gi, 'lang="pt-BR"');

  return html;
}

// Render a single route and save the HTML
async function renderRoute(browser, route) {
  const page = await browser.newPage();
  
  try {
    const url = `${BASE_URL}${route}`;
    console.log(`  Rendering: ${route}`);
    
    // Navigate to the page
    await page.goto(url, { 
      waitUntil: 'networkidle0',
      timeout: 30000 
    });

    // Wait for React to fully render
    await page.waitForSelector('body', { timeout: 10000 });
    
    // Additional wait for dynamic content
    await new Promise(resolve => setTimeout(resolve, 500));

    // Get the full HTML content
    let html = await page.content();
    
    // Process the HTML
    html = processHtml(html, route);

    // Create directory structure and save file
    const outputPath = getOutputPath(route);
    await mkdir(dirname(outputPath), { recursive: true });
    await writeFile(outputPath, html, 'utf-8');
    
    console.log(`  ✓ Saved: ${outputPath.replace(DIST_DIR, 'dist')}`);
    
  } catch (error) {
    console.error(`  ✗ Failed to render ${route}: ${error.message}`);
  } finally {
    await page.close();
  }
}

// Main function
async function main() {
  console.log('\n🚀 Starting Static Site Generation...\n');
  
  // Load routes
  const routes = await loadRoutes();
  console.log(`📋 Found ${routes.length} routes to render\n`);

  // Start local server
  console.log('🖥️  Starting local server...');
  const server = await startServer();
  console.log(`✓ Server running on port ${PORT}\n`);

  // Launch browser
  console.log('🌐 Launching browser...');
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  console.log('✓ Browser launched\n');

  console.log('📄 Rendering pages...\n');

  // Render each route (with concurrency limit)
  const CONCURRENCY = 4;
  for (let i = 0; i < routes.length; i += CONCURRENCY) {
    const batch = routes.slice(i, i + CONCURRENCY);
    await Promise.all(batch.map(route => renderRoute(browser, route)));
  }

  // Cleanup
  console.log('\n🧹 Cleaning up...');
  await browser.close();
  server.kill();

  console.log('\n✅ Static Site Generation Complete!');
  console.log(`📁 Output directory: ${DIST_DIR}\n`);
}

// Run the script
main().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
