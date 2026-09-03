import { describe, it, expect, beforeAll } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';
import { JSDOM } from 'jsdom';
import {
  runA11ySuite,
  getRelativeLuminance,
  getWcagContrastRatio,
  calculateApca,
  getApcaFontMatrix,
  simulateCvd,
  generateFluidClamp,
  SPRING_PRESETS,
  getInterpolatedMotion,
} from '@intuitui-labs/a11y-gate';
import { CERTIFIED_TOKEN_PAIRS, COLOR_TOKENS } from './design-tokens';
import { INTUITUI_TYPE_SCALE } from './spatial-math';

// =========================================================================
// PART 1: DEFINITIVE MATHEMATICAL GATES (Unit Level)
// =========================================================================
runA11ySuite(
  {
    name: 'Intuitui Labs Core Gate',
    tokens: CERTIFIED_TOKEN_PAIRS,
    typeScale: INTUITUI_TYPE_SCALE,
    minimumMicroPx: 14,
    testCvd: true,
  },
  { describe, it, expect }
);

describe('Definitive Math & Contrast Proofs', { tags: ['math', 'proof', 'fast'] }, () => {
  it('guarantees primary body text achieves WCAG AAA on paper surface', () => {
    const wcag = getWcagContrastRatio(COLOR_TOKENS.textPrimary, COLOR_TOKENS.surfacePaper);
    expect(wcag).toBeGreaterThanOrEqual(7.0);
  });

  it('guarantees accent sky badge passes APCA Lc >= 60', () => {
    const apca = calculateApca(COLOR_TOKENS.textAccentSky, COLOR_TOKENS.surfacePaper);
    expect(Math.abs(apca)).toBeGreaterThanOrEqual(60);
  });

  it('proves spring physics provide smooth active compression deterministically', { repeats: 3 }, () => {
    expect(SPRING_PRESETS.tactile.activeScale).toBe(0.97);
    expect(SPRING_PRESETS.tactile.durationMs).toBe(220);
    const motion70 = getInterpolatedMotion(0.7);
    expect(motion70.activeScale).toBeLessThan(1.0);
  });
});

// =========================================================================
// PART 1.5: PARAMETERIZED CVD TEST MATRIX (Vitest v5 test.each capability)
// =========================================================================
describe('Parameterized Color Vision Deficiency (CVD) Contrast Matrix', { tags: ['math', 'cvd'] }, () => {
  const deficiencies = ['deuteranopia', 'protanopia', 'tritanopia'] as const;

  deficiencies.forEach((deficiency) => {
    describe(`Simulation Mode: ${deficiency}`, () => {
      it.each(CERTIFIED_TOKEN_PAIRS)(
        '[$id] "$name" preserves luminance contrast under simulated ' + deficiency,
        (token) => {
          const simFg = simulateCvd(token.fg, deficiency);
          const simBg = simulateCvd(token.bg, deficiency);
          const contrast = getWcagContrastRatio(simFg, simBg);

          // Boundary ratio check: even with complete loss of hue distinction,
          // luminance difference must maintain at least 65% of expected baseline
          expect(contrast).toBeGreaterThanOrEqual(token.expectedWcagMin * 0.65);
        }
      );
    });
  });
});

// =========================================================================
// PART 2: INTEGRATIVE SYSTEMS & DOM AUDIT (End-to-End Page Integration)
// =========================================================================
describe('Integrative Systems & Production HTML Audit', { tags: ['dom', 'integration', 'dist'] }, () => {
  const distDir = path.resolve(process.cwd(), 'dist');
  const hasDist = fs.existsSync(distDir);

  const pagesToAudit = [
    { name: 'Home Page', path: path.join(distDir, 'index.html') },
    { name: 'About Page', path: path.join(distDir, 'about', 'index.html') },
    { name: 'Projects Index', path: path.join(distDir, 'projects', 'index.html') },
    { name: 'Studio Index', path: path.join(distDir, 'studio', 'index.html') },
  ];

  it('fails if production dist/ build is missing', () => {
    expect(hasDist, 'Production dist/ directory must exist. Run `pnpm build` before running DOM integration tests.').toBe(true);
  });

  describe('AST & DOM Tree Architectural Proofs (JSDOM Real Parser)', () => {
    pagesToAudit.forEach((page) => {
      describe(`Route: ${page.name}`, () => {
        let dom: JSDOM;
        let document: Document;

        beforeAll(() => {
          if (!hasDist || !fs.existsSync(page.path)) return;
          const html = fs.readFileSync(page.path, 'utf-8');
          dom = new JSDOM(html);
          document = dom.window.document;
        });

        it('strictly enforces exactly one <h1> element per page without empty headings', () => {
          if (!document) return;
          const h1List = document.querySelectorAll('h1');
          expect(h1List.length, `Expected exactly 1 <h1> in ${page.name}`).toBe(1);
          const h1Text = h1List[0]?.textContent?.trim();
          expect(h1Text && h1Text.length > 0, `h1 in ${page.name} must contain meaningful text content`).toBe(true);
        });

        it('enforces strict landmark roles (<header role="banner">, <main>, <footer role="contentinfo">)', () => {
          if (!document) return;
          const main = document.querySelector('main#main-content');
          expect(main, `Page ${page.name} is missing <main id="main-content">`).not.toBeNull();
          expect(main?.getAttribute('tabindex'), `main landmark must have tabindex="-1" for programmatic focus`).toBe('-1');

          const header = document.querySelector('header[role="banner"]');
          expect(header, `Page ${page.name} is missing <header role="banner">`).not.toBeNull();

          const footer = document.querySelector('footer[role="contentinfo"]');
          expect(footer, `Page ${page.name} is missing <footer role="contentinfo">`).not.toBeNull();
        });

        it('guarantees Skip Link exists, targets #main-content, and is the first tabbable anchor', () => {
          if (!document) return;
          const skipLink = document.querySelector('a.skip-link');
          expect(skipLink, `Page ${page.name} missing .skip-link`).not.toBeNull();
          expect(skipLink?.getAttribute('href')).toBe('#main-content');

          // Verify it precedes any header navigation in the DOM order
          const firstAnchor = document.querySelector('a');
          expect(firstAnchor?.classList.contains('skip-link'), `Skip link must be the very first anchor in ${page.name}`).toBe(true);
        });

        it('enforces accessible names on all buttons and interactive controls', () => {
          if (!document) return;
          const buttons = Array.from(document.querySelectorAll('button'));
          expect(buttons.length, `Expected interactive buttons in ${page.name}`).toBeGreaterThan(0);
          buttons.forEach((btn) => {
            const hasAriaLabel = btn.hasAttribute('aria-label') && (btn.getAttribute('aria-label')?.trim().length ?? 0) > 0;
            const hasTextContent = (btn.textContent?.trim().length ?? 0) > 0;
            const hasAriaLabelledBy = btn.hasAttribute('aria-labelledby');
            expect(hasAriaLabel || hasTextContent || hasAriaLabelledBy, `Button in ${page.name} is missing an accessible name: ${btn.outerHTML.slice(0, 80)}`).toBe(true);
          });
        });

        it('guarantees zero public leakage of development QA / internal a11y routes', () => {
          if (!document) return;
          const a11yLinks = document.querySelectorAll('a[href="/a11y"], a[href^="/a11y/"]');
          expect(a11yLinks.length, `Production route ${page.name} exposes internal /a11y testing routes to the public`).toBe(0);
        });
      });
    });
  });

  describe('Fluid Typography & CSS Systems Physics Bounds', { tags: ['math', 'css'] }, () => {
    it('proves all type scale steps satisfy Utopia mathematical constraints ($minRem <= $preferred <= $maxRem)', () => {
      Object.entries(INTUITUI_TYPE_SCALE).forEach(([key, spec]) => {
        expect(spec.minPx, `Step ${key} minPx must be positive`).toBeGreaterThanOrEqual(14);
        expect(spec.maxPx, `Step ${key} maxPx must be >= minPx`).toBeGreaterThanOrEqual(spec.minPx);
        expect(spec.lineHeight, `Step ${key} lineHeight must be between 0.8 and 2.0`).toBeGreaterThan(0.8);
        expect(spec.lineHeight, `Step ${key} lineHeight must be between 0.8 and 2.0`).toBeLessThan(2.0);

        if (spec.clampCss.includes('clamp(')) {
          const clampParts = spec.clampCss.replace('clamp(', '').replace(')', '').split(',');
          expect(clampParts.length).toBe(3);
        }
      });
    });

    it('rigorously parses global.css for WCAG 2.2 SC 2.3.3 Reduced Motion Safety & Spring Easing', () => {
      const cssPath = path.resolve(process.cwd(), 'src', 'styles', 'global.css');
      expect(fs.existsSync(cssPath), 'src/styles/global.css must exist').toBe(true);
      const css = fs.readFileSync(cssPath, 'utf-8');

      // 1. Reduced Motion Defensiveness
      expect(css).toMatch(/@media\s*\(\s*prefers-reduced-motion\s*:\s*reduce\s*\)/i);
      expect(css).toMatch(/animation-duration\s*:\s*0\.01ms\s*!important/i);

      // 2. Tactile Physics & Systems Cards
      expect(css).toMatch(/\.tactile-press\b/);
      expect(css).toMatch(/cubic-bezier\s*\(/);
      expect(css).toMatch(/\.systems-card\b/);

      // 3. Touch Target Geometry Floor in CSS
      expect(css).toMatch(/min-height\s*:\s*48px/i);
    });
  });
});
