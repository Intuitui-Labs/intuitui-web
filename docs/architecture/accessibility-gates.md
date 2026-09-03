# Accessibility & Spatial Harmony Gates (Quantitative Mathematical Architecture)

**Status:** Active System Standard  
**Governing Authorities:** W3C WCAG 2.2 (AAA / AA), W3C Silver / APCA (0.98G), ISO 9241-306

---

## 1. Executive Summary

In Intuitui Labs, accessibility and spatial harmony are not treated as subjective aesthetic post-processing; they are treated as **hard mathematical gate criteria**.

We structure our quality assurance in two tiers:
1. **Gate 1 (Automated Quantitative Mathematical Gate)**: Executed in CI (`pnpm test` via Vitest). Calculates perceptual contrast, relative luminance, touch target geometry, modular scale, and spatial grid conformance. Zero failures allowed.
2. **Gate 2 (Human Judgment & Systems Quality Gate)**: Executed before staging/release using the interactive `/a11y` laboratory. Audits semantic tree integrity, keyboard navigation flow, screen reader speech models, 400% zoom reflow, and cognitive load ("Brevity, Clarity, Levity").

---

## 2. Gate 1: Mathematical Formulations

### 2.1 WCAG 2.2 Relative Luminance ($L$)
Relative luminance is the relative brightness of any point in a colorspace, normalized to 0 for darkest black and 1 for lightest white.

Given an 8-bit sRGB channel $C \in [0, 255]$:

$$C_{sRGB} = \frac{C}{255}$$

$$C_{linear} = \begin{cases} \frac{C_{sRGB}}{12.92} & \text{if } C_{sRGB} \le 0.04045 \\ \left(\frac{C_{sRGB} + 0.055}{1.055}\right)^{2.4} & \text{otherwise} \end{cases}$$

$$L = 0.2126 \cdot R_{linear} + 0.7152 \cdot G_{linear} + 0.0722 \cdot B_{linear}$$

### 2.2 WCAG 2.2 Contrast Ratio ($CR$)

$$CR = \frac{\max(L_1, L_2) + 0.05}{\min(L_1, L_2) + 0.05}$$

- **WCAG AA Normal Text**: $CR \ge 4.5:1$
- **WCAG AA Large Text / UI Components**: $CR \ge 3.0:1$
- **WCAG AAA Normal Text**: $CR \ge 7.0:1$
- **WCAG AAA Large Text**: $CR \ge 4.5:1$

---

### 2.3 W3C APCA (Accessible Perceptual Contrast Algorithm)
APCA models human spatial frequency and non-linear photoreceptor response:

1. **Linearization**: $Y = 0.2126729 \cdot R^{2.4} + 0.7151522 \cdot G^{2.4} + 0.0721750 \cdot B^{2.4}$
2. **Soft-clipping threshold** ($blkThrs = 0.022$):
   $$\text{if } Y \le 0.022 \implies Y \leftarrow Y + (0.022 - Y)^{1.414}$$
3. **Power Curve Weighting**:
   - **Dark on Light (Black on White)**:
     $$S_{apc} = (Y_{bg}^{0.56} - Y_{txt}^{0.57}) \cdot 1.14$$
   - **Light on Dark (White on Black)**:
     $$S_{apc} = (Y_{bg}^{0.65} - Y_{txt}^{0.62}) \cdot 1.14$$
4. **Scoring Gates**:
   - $|L_c| \ge 75$: Certified for body text ($\ge 15\text{px}$).
   - $|L_c| \ge 60$: Certified for headings / bold links ($\ge 24\text{px}$ regular, $\ge 18\text{px}$ bold).
   - $|L_c| \ge 90$: Certified for micro text ($\le 14\text{px}$).

---

### 2.4 Fluid Typography & Spatial Clamp Math
To ensure spatial harmony across all devices without breakpoint layout shifts, typography scales continuously between viewport $W_{\min} = 360\text{px}$ and $W_{\max} = 1280\text{px}$:

$$\text{slope} = \frac{V_{\max} - V_{\min}}{W_{\max} - W_{\min}}$$

$$y_{intersection} = V_{\min} - \text{slope} \cdot W_{\min}$$

$$\text{clamp}(V_{\min}\text{rem}, y_{intersection}\text{rem} + (\text{slope} \cdot 100)\text{vw}, V_{\max}\text{rem})$$

### 2.5 8px Base Spatial Quantum
All structural gutters, card paddings, and vertical rhythm must align with the base-8 grid ($8, 16, 24, 32, 40, 48, 64, 80, 96, 128\text{px}$).

### 2.6 Touch Target Dimensions
- **WCAG 2.2 AA (SC 2.5.8 Target Size Minimum)**: Minimum $24\text{px} \times 24\text{px}$.
- **WCAG AAA (SC 2.5.5 Target Size Enhanced)**: Target $44\text{px} \times 44\text{px}$.

---

## 3. Automated CI Enforcement

Run the automated mathematical gate:
```bash
pnpm test
```
The suite verifies all certified token pairs, fluid clamps, target geometries, and reading measure limits. If any token fails its mathematical threshold, the build fails.
