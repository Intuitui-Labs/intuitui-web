import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';
import { runMobileAuditSuite } from '@intuitui-labs/a11y-gate';

// Load compiled production pages from dist/
const distDir = path.resolve(process.cwd(), 'dist');
const pages = ['index.html', 'about/index.html', 'projects/index.html', 'studio/index.html'];

const htmlPages = pages
  .map((p) => {
    const fullPath = path.join(distDir, p);
    if (fs.existsSync(fullPath)) {
      return { path: p, html: fs.readFileSync(fullPath, 'utf-8') };
    }
    return null;
  })
  .filter(Boolean) as { path: string; html: string }[];

// Read global CSS
const cssPath = path.resolve(process.cwd(), 'src', 'styles', 'global.css');
const cssContent = fs.existsSync(cssPath) ? fs.readFileSync(cssPath, 'utf-8') : '';

// Execute dedicated Mobile Visual & Ergonomics Suite
runMobileAuditSuite(
  {
    name: 'Intuitui Labs Mobile Production Suite',
    htmlPages,
    cssContent,
    strictTargetSizePx: 48,
    minimumMicroPx: 14,
  },
  { describe, it, expect }
);
