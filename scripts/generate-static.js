#!/usr/bin/env node

/**
 * Static Site Generator Script for Beijo da Rua
 * 
 * Generates static HTML files for all routes after Vite build.
 * Uses Puppeteer to render each page and extract full HTML content.
 * 
 * Usage: node scripts/generate-static.js
 */

import puppeteer from 'puppeteer';
import { spawn } from 'child_process';
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
function waitForServer(maxAttempts = 60) {
  return new Promise((resolve, reject) => {
    let attempts = 0;
    
    const checkServer = () => {
      attempts++;
      
      const req = http.get(BASE_URL, (res) => {
        if (res.statusCode === 200 || res.statusCode === 304) {
          console.log(`  ✓ Server ready after ${attempts} attempts`);
          resolve(true);
        } else {
          retry();
        }
      });
      
      req.on('error', () => {
        retry();
      });
      
      req.setTimeout(2000, () => {
        req.destroy();
        retry();
      });
    };
    
    const retry = () => {
      if (attempts >= maxAttempts) {
        reject(new Error(`Server did not respond after ${maxAttempts} attempts`));
      } else {
        setTimeout(checkServer, 1000);
      }
    };
    
    // Start checking
    console.log('  Waiting for server to be ready...');
    setTimeout(checkServer, 2000);
  });
}

// Generate the output path for a route
function getOutputPath(route) {
  if (route === '/') {
    return join(DIST_DIR, 'index.html');
  }
  const cleanRoute = route.replace(/^\//, '').replace(/\/$/, '');
  return join(DIST_DIR, cleanRoute, 'index.html');
}

// Process HTML to fix canonical URLs and ensure proper structure
function processHtml(html, route) {
  // Build canonical URL with trailing slash (NO extra spaces)
  const canonicalUrl = route === '/' 
    ? `${SITE_URL}/` 
    : `${SITE_URL}${route}/`;
  
  // Remove ALL existing canonical links
  html = html.replace(/<link[^>]*rel=["']canonical["'][^>]*>/gi, '');
  
  // Add correct canonical link before </head>
  html = html.replace(
    '</head>',
    `<link rel="canonical" href="${canonicalUrl}">\n</head>`
  );

  // Ensure lang="pt-BR" is set correctly on <html> tag
  html = html.replace(
    /<html([^>]*)>/i,
    (match, attrs) => {
      const cleanAttrs = attrs.replace(/\s*lang=["'][^"']*["']/gi, '');
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
    
    // Set viewport
    await page.setViewport({ width: 1280, height: 900 });
    
    // Navigate to the page with extended timeout
    await page.goto(url, { 
      waitUntil: 'networkidle2',
      timeout: 90000 
    });

    // Wait for body to be present
    await page.waitForSelector('body', { timeout: 15000 });
    
    // Wait for React to render content
    try {
      await page.waitForFunction(
        () => document.body.innerText.length > 200,
        { timeout: 10000 }
      );
    } catch (e) {
      console.log(`    ⚠ Limited content for ${route}, continuing...`);
    }
    
    // Additional wait for images and async content
    await new Promise(resolve => setTimeout(resolve, 3000));

    // Get the full HTML content
    let html = await page.content();
    
    // Verify content was rendered
    const stats = await page.evaluate(() => ({
      textLength: document.body.innerText.length,
      h1Count: document.querySelectorAll('h1').length,
      h2Count: document.querySelectorAll('h2').length,
      linkCount: document.querySelectorAll('a[href]').length
    }));
    
    console.log(`  ${route}`);
    console.log(`    Text: ${stats.textLength} chars | H1: ${stats.h1Count} | H2: ${stats.h2Count} | Links: ${stats.linkCount}`);
    
    // Process the HTML (fix canonical, lang)
    html = processHtml(html, route);

    // Create directory structure and save file
    const outputPath = getOutputPath(route);
    await mkdir(dirname(outputPath), { recursive: true });
    await writeFile(outputPath, html, 'utf-8');
    
    console.log(`    ✓ Saved: ${outputPath.replace(DIST_DIR, 'dist')}`);
    
    return { success: true, route, stats };
  } catch (error) {
    console.error(`  ✗ ${route}: ${error.message}`);
    return { success: false, route, error: error.message };
  } finally {
    await page.close();
  }
}

// Main function
async function main() {
  console.log('\n' + '='.repeat(60));
  console.log('🚀 BEIJO DA RUA - Static Site Generation');
  console.log('='.repeat(60) + '\n');
  
  // Check if dist exists
  const distExists = await checkDistExists();
  if (!distExists) {
    console.error('❌ dist/ directory not found. Run "npm run build" first.');
    process.exit(1);
  }
  console.log('✓ dist/ directory found\n');
  
  // Load routes
  const routes = await loadRoutes();
  console.log(`📋 ${routes.length} routes to render\n`);

  // Wait for server to be ready (assumes server is already started externally in CI)
  console.log('🖥️  Connecting to local server...');
  try {
    await waitForServer(60);
  } catch (e) {
    console.error('❌ Could not connect to server:', e.message);
    console.log('   Make sure "npx serve -s dist -l 5173" is running');
    process.exit(1);
  }

  // Launch browser with CI-friendly options
  console.log('\n🌐 Launching browser...');
  const browser = await puppeteer.launch({
    headless: 'new',
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-gpu',
      '--disable-extensions',
      '--disable-background-networking',
      '--disable-sync',
      '--no-first-run',
      '--single-process'
    ]
  });
  console.log('✓ Browser launched\n');

  console.log('📄 Rendering pages:\n');

  // Track results
  const results = [];

  // Render routes sequentially for stability in CI
  for (const route of routes) {
    const result = await renderRoute(browser, route);
    results.push(result);
  }

  // Cleanup
  console.log('\n🧹 Cleaning up...');
  await browser.close();

  // Summary
  const successful = results.filter(r => r.success).length;
  const failed = results.filter(r => !r.success).length;

  console.log('\n' + '='.repeat(60));
  console.log('📊 SUMMARY');
  console.log('='.repeat(60));
  console.log(`   ✅ Success: ${successful}/${routes.length}`);
  if (failed > 0) {
    console.log(`   ❌ Failed: ${failed}/${routes.length}`);
    console.log('\nFailed routes:');
    results.filter(r => !r.success).forEach(r => {
      console.log(`   - ${r.route}: ${r.error}`);
    });
  }
  console.log(`\n📁 Output: ${DIST_DIR}`);
  console.log('='.repeat(60) + '\n');
  
  // Exit with error if any failed
  if (failed > 0) {
    process.exit(1);
  }
}

// Run
main().catch(error => {
  console.error('\n❌ FATAL ERROR:', error);
  process.exit(1);
});
