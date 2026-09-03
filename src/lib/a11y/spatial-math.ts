/**
 * @intuitui/a11y-gate - Spatial Harmony & Typographic Geometry Engine
 * Implements:
 * 1. Fluid responsive clamp CSS generator (Utopia math)
 * 2. 4px / 8px Spatial quantum interval verification
 * 3. WCAG 2.2 Target Size evaluation (SC 2.5.5 AAA / 2.5.8 AA)
 * 4. Cognitive Reading Measure bounds (45 - 75ch)
 */

import type { TypeScaleSpec } from './token-types';

export interface FluidClampConfig {
  minSizePx: number;
  maxSizePx: number;
  minViewportPx?: number;
  maxViewportPx?: number;
}

export function generateFluidClamp(config: FluidClampConfig): string {
  const minVp = config.minViewportPx ?? 360;
  const maxVp = config.maxViewportPx ?? 1280;

  const minRem = (config.minSizePx / 16).toFixed(4).replace(/\.?0+$/, '') + 'rem';
  const maxRem = (config.maxSizePx / 16).toFixed(4).replace(/\.?0+$/, '') + 'rem';

  const slope = (config.maxSizePx - config.minSizePx) / (maxVp - minVp);
  const slopeVw = (slope * 100).toFixed(4).replace(/\.?0+$/, '') + 'vw';

  const yIntersectionPx = config.minSizePx - slope * minVp;
  const yIntersectionRem = (yIntersectionPx / 16).toFixed(4).replace(/\.?0+$/, '') + 'rem';

  const preferred =
    yIntersectionPx === 0
      ? slopeVw
      : yIntersectionPx > 0
      ? `${yIntersectionRem} + ${slopeVw}`
      : `${slopeVw} - ${Math.abs(yIntersectionPx / 16).toFixed(4)}rem`;

  return `clamp(${minRem}, ${preferred}, ${maxRem})`;
}

export function getModularStep(step: number, baseSizePx = 18, ratio = 1.25): number {
  return Math.round(baseSizePx * Math.pow(ratio, step) * 100) / 100;
}

export const SPATIAL_INTERVALS = [4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128] as const;

export function isValidSpatialQuantum(px: number): boolean {
  return px % 4 === 0;
}

export const TOUCH_TARGET_STANDARDS = {
  WCAG_AA_MIN_PX: 24,
  WCAG_AAA_TARGET_PX: 44,
  RECOMMENDED_TOUCH_PX: 48,
};

export function evaluateTargetSize(widthPx: number, heightPx: number): {
  passesAa: boolean;
  passesAaa: boolean;
  minDimension: number;
} {
  const minDim = Math.min(widthPx, heightPx);
  return {
    passesAa: minDim >= TOUCH_TARGET_STANDARDS.WCAG_AA_MIN_PX,
    passesAaa: minDim >= TOUCH_TARGET_STANDARDS.WCAG_AAA_TARGET_PX,
    minDimension: minDim,
  };
}

export function evaluateReadingMeasure(charCount: number): {
  charCount: number;
  isOptimal: boolean;
  isTooNarrow: boolean;
  isTooWide: boolean;
} {
  return {
    charCount,
    isOptimal: charCount >= 45 && charCount <= 75,
    isTooNarrow: charCount < 40,
    isTooWide: charCount > 85,
  };
}

export type IntuituiTypeScaleKey = 'micro' | 'meta' | 'body' | 'subhead' | 'section' | 'display';

export const INTUITUI_TYPE_SCALE: Record<IntuituiTypeScaleKey, TypeScaleSpec> = {
  micro: {
    name: 'Micro / Eyebrow',
    step: -1,
    minPx: 14,
    maxPx: 14,
    clampCss: '0.875rem',
    lineHeight: 1.4,
    letterSpacingEm: 0.12,
    recommendedMeasureCh: 35,
  },
  meta: {
    name: 'Meta / Caption',
    step: 0,
    minPx: 15,
    maxPx: 16,
    clampCss: generateFluidClamp({ minSizePx: 15, maxSizePx: 16 }),
    lineHeight: 1.45,
    letterSpacingEm: 0.02,
    recommendedMeasureCh: 45,
  },
  body: {
    name: 'Body Text',
    step: 1,
    minPx: 18,
    maxPx: 20,
    clampCss: generateFluidClamp({ minSizePx: 18, maxSizePx: 20 }),
    lineHeight: 1.65,
    letterSpacingEm: -0.01,
    recommendedMeasureCh: 65,
  },
  subhead: {
    name: 'Subheading / H3',
    step: 2,
    minPx: 22,
    maxPx: 28,
    clampCss: generateFluidClamp({ minSizePx: 22, maxSizePx: 28 }),
    lineHeight: 1.3,
    letterSpacingEm: -0.02,
    recommendedMeasureCh: 50,
  },
  section: {
    name: 'Section Heading / H2',
    step: 3,
    minPx: 32,
    maxPx: 46,
    clampCss: generateFluidClamp({ minSizePx: 32, maxSizePx: 46 }),
    lineHeight: 1.15,
    letterSpacingEm: -0.03,
    recommendedMeasureCh: 40,
  },
  display: {
    name: 'Display / Hero H1',
    step: 4,
    minPx: 48,
    maxPx: 84,
    clampCss: generateFluidClamp({ minSizePx: 48, maxSizePx: 84 }),
    lineHeight: 0.92,
    letterSpacingEm: -0.045,
    recommendedMeasureCh: 30,
  },
};
