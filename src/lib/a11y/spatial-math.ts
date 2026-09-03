/**
 * Spatial Harmony & Fluid Typographic Architecture for Intuitui Labs
 * Re-exports common math engines from @intuitui/a11y-gate
 */

import { generateFluidClamp, type TypeScaleSpec } from '@intuitui-labs/a11y-gate';

export * from '@intuitui-labs/a11y-gate';

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
