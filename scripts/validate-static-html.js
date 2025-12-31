#!/usr/bin/env node

/**
 * Validate Static HTML Quality
 * 
 * Checks each generated index.html for:
 * - H1 tag presence
 * - Canonical URL with trailing slash
 * - Sufficient visible text content (not empty React shell)
 */

import { readFile } from 'fs/promises';
import { glob } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const DIST_DIR = join(__dirname, '..', 'dist');
const SITE_URL = 'https://beijodarua.com.br';
const MIN_TEXT_LENGTH = 500;

// Find all index.html files
function findIndexFiles() {
  try {
    const result = execSync(`find ${DIST_DIR} -name "index.html"`, { encoding: 'utf-8' });
    return result.trim().split('\n').filter(Boolean);
  } catch (e) {
    console.error('Error finding files:', e.message);
    return [];
  }
}

// Extract visible text from HTML (strip tags)
function extractText(html) {
  // Remove script and style content
  let text = html.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '');
  text = text.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '');
  // Remove all tags
  text = text.replace(/<[^>]+>/g, ' ');
  // Normalize whitespace
  text = text.replace(/\s+/g, ' ').trim();
  return text;
}

// Validate a single HTML file
async function validateFile(filePath) {
  const route = filePath.replace(DIST_DIR, '').replace('/index.html', '') || '/';
  const errors = [];
  const warnings = [];
  
  try {
    const html = await readFile(filePath, 'utf-8');
    
    // Check 1: H1 tag exists
    const h1Match = html.match(/<h1[^>]*>/gi);
    const h1Count = h1Match ? h1Match.length : 0;
    if (h1Count === 0) {
      errors.push('Missing H1 tag');
    }
    
    // Check 2: Canonical URL with trailing slash
    const canonicalMatch = html.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["'][^>]*>/i) ||
                          html.match(/<link[^>]*href=["']([^"']+)["'][^>]*rel=["']canonical["'][^>]*>/i);
    
    if (!canonicalMatch) {
      warnings.push('Missing canonical tag');
    } else {
      const canonicalUrl = canonicalMatch[1];
      if (!canonicalUrl.endsWith('/')) {
        warnings.push('Canonical missing trailing slash');
      }
      if (canonicalUrl.includes(' ')) {
        warnings.push('Canonical has extra spaces');
      }
      if (!canonicalUrl.startsWith(SITE_URL)) {
        warnings.push(`Canonical wrong domain: ${canonicalUrl}`);
      }
    }
    
    // Check 3: Sufficient visible content
    const visibleText = extractText(html);
    const textLength = visibleText.length;
    
    if (textLength < MIN_TEXT_LENGTH) {
      errors.push(`Insufficient content (${textLength} chars)`);
    }
    
    // Check 4: Not just empty React shell
    if (html.includes('<div id="root"></div>') && textLength < 100) {
      errors.push('Empty React shell (div#root without content)');
    }
    
    return {
      route,
      h1Count,
      textLength,
      errors,
      warnings,
      valid: errors.length === 0
    };
    
  } catch (e) {
    return {
      route,
      h1Count: 0,
      textLength: 0,
      errors: [`File read error: ${e.message}`],
      warnings: [],
      valid: false
    };
  }
}

// Main function
async function main() {
  console.log('🔍 Validating static HTML quality...\n');
  
  const files = findIndexFiles();
  
  if (files.length === 0) {
    console.error('❌ No index.html files found in dist/');
    process.exit(1);
  }
  
  const results = [];
  
  for (const file of files) {
    const result = await validateFile(file);
    results.push(result);
    
    if (result.errors.length > 0) {
      console.log(`❌ ${result.route} - ${result.errors.join(', ')}`);
    } else if (result.warnings.length > 0) {
      console.log(`⚠️  ${result.route} - ${result.warnings.join(', ')} (H1: ${result.h1Count}, ${result.textLength}c)`);
    } else {
      console.log(`✅ ${result.route} - OK (H1: ${result.h1Count}, ${result.textLength}c)`);
    }
  }
  
  const total = results.length;
  const valid = results.filter(r => r.valid).length;
  const errors = total - valid;
  const withWarnings = results.filter(r => r.warnings.length > 0).length;
  
  console.log('\n════════════════════════════════════════');
  console.log('📊 VALIDATION SUMMARY');
  console.log('════════════════════════════════════════');
  console.log(`   Total pages: ${total}`);
  console.log(`   ✅ Valid: ${valid}`);
  console.log(`   ❌ Errors: ${errors}`);
  console.log(`   ⚠️  Warnings: ${withWarnings}`);
  console.log('════════════════════════════════════════');
  
  if (errors > 0) {
    console.log(`\n❌ BUILD FAILED: ${errors} pages have critical SEO issues`);
    process.exit(1);
  }
  
  console.log('\n✅ All pages passed validation!');
}

main().catch(e => {
  console.error('Fatal error:', e);
  process.exit(1);
});
