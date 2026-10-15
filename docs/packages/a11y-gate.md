---
title: "A11y Gate (@intuitui-labs/a11y-gate)"
description: "Mathematical accessibility, W3C APCA 0.98G lightness contrast, Color Vision Deficiency (CVD) simulation, and 8px spatial harmony CI gate for design systems."
status: "active"
created: 2026-10-11
updated: 2026-10-11
author: "Intuitui Labs Systems Team"
tags: [accessibility, a11y, apca, cvd, design-systems, wcag]
npmPackage: "@intuitui-labs/a11y-gate"
githubRepo: "https://github.com/NeevSK/a11y-gate"
version: "0.2.0"
---

# A11y Gate (`@intuitui-labs/a11y-gate`)

> **Mathematical accessibility, W3C APCA 0.98G contrast, Color Vision Deficiency (CVD) simulation, spatial harmony, tactile motion architecture, and mobile ergonomics CI gate for design systems.**

---

## 🌟 Key Capabilities

### 👁️ Mathematical Contrast & Perceptual Color Optics
- **WCAG 2.1 / 2.2 Relative Luminance & Contrast Ratio**: Standard ISO 9241-306 contrast calculations.
- **W3C APCA 0.98G (WCAG 3 Candidate)**: Perceptually uniform lightness contrast ($L_c$) with dynamic font-weight/font-size lookup matrix.
- **Color Vision Deficiency (CVD) Simulation**: Full Brettel-Viénot / Machado LMS cone transformation for Deuteranopia, Protanopia, Tritanopia, and Achromatopsia.

### 📐 Spatial Rhythm & Typographic Geometry
- **Utopia Fluid Clamp Formulas**: Generates exact CSS `clamp(min, preferred, max)` interpolation strings.
- **Base-8 Quantum Grid Multiples**: Validates padding, margin, and layout intervals against 4px / 8px baselines.
- **Touch Target Geometry**: Validates minimum interactive dimensions ($\ge 44\text{px}$ / $48\text{px}$).

---

## 📦 Installation

```bash
# Using pnpm
pnpm add -D @intuitui-labs/a11y-gate

# Using npm
npm install --save-dev @intuitui-labs/a11y-gate
```

---

## 🚀 Usage Examples

### 1. Perceptual Lightness Contrast ($L_c$) via APCA
```typescript
import { calculateAPCA, apcaPassesLevel } from '@intuitui-labs/a11y-gate';

// Text on background (#1e293b on #faf8f5)
const textHex = '#1e293b';
const bgHex = '#faf8f5';

const lc = calculateAPCA(textHex, bgHex);
console.log('Lightness Contrast Lc:', lc); // e.g. -84.2 Lc

// Verify readability at 16px body copy (font-weight 400)
const passes = apcaPassesLevel(lc, { fontSize: 16, fontWeight: 400, level: 'content' });
console.log('Passes APCA Content Gate:', passes);
```

### 2. Color Vision Deficiency (CVD) Cone Transformation
```typescript
import { simulateCVD } from '@intuitui-labs/a11y-gate';

// Simulate Deuteranopia (green-blindness)
const deuteranopiaHex = simulateCVD('#22c55e', 'deuteranopia');
console.log('Simulated Deuteranopia Color:', deuteranopiaHex);
```

### 3. Touch Target Verification
```typescript
import { validateTouchTarget } from '@intuitui-labs/a11y-gate';

const result = validateTouchTarget({ width: 48, height: 44 });
if (!result.valid) {
  throw new Error(`Accessibility Gate Failed: ${result.reason}`);
}
```
