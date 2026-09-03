# Human Judgment & Systems Quality Gate Protocol

**Status:** Active Protocol  
**Companion Route:** `/a11y` (Interactive Laboratory)  
**Author:** Intuitui Labs Quality Architecture

---

## 1. Rationale

Algorithms can verify that a contrast ratio equals $7.2:1$ or that a button has a dimension of $44\text{px} \times 44\text{px}$. However, algorithms cannot evaluate:
- Whether the page's visual hierarchy guides the eye with emotional clarity or causes cognitive exhaustion.
- Whether a screen reader announcement sounds natural and human or stiff and repetitive.
- Whether the voice and tone preserve the studio promise: **Brevity, Clarity, Levity**.

The **Human Judgment Quality Gate** serves as the necessary human counterpart to the automated math gate.

---

## 2. 7-Point Inspection Rubric

Before any release or public showcase update, a reviewer must verify each of the following 7 criteria:

### Criterion 1: Semantic Landmark Tree & Heading Hierarchy
- Ensure each page possesses exactly one `<h1>`.
- Ensure headings strictly descend ($h1 \rightarrow h2 \rightarrow h3$) without arbitrary jumps.
- Verify landmark roles: `<header role="banner">`, `<nav aria-label="...">`, `<main id="main-content">`, and `<footer role="contentinfo">`.

### Criterion 2: Keyboard Traversal & Non-Visual Model
- Press `Tab` upon initial page load: the **Skip to main content** link must appear immediately with high visibility.
- Pressing `Enter` on the skip link must move focus directly to `<main id="main-content">`.
- Focus indicators must be prominent on all interactive elements with $\ge 3:1$ contrast against adjacent pixels.
- On mobile widths, the navigation drawer must open and close smoothly, trap focus when open, and close immediately upon pressing `Escape`.

### Criterion 3: Screen Reader Speech Output
- Walk through the page using macOS VoiceOver (`Cmd + F5`) or Windows NVDA/Narrator.
- Verify that every icon button (e.g. GitHub, LinkedIn, Menu) announces a descriptive label.
- Verify that links with external arrows (`↗`) do not read raw Unicode glyphs clumsily, or have appropriate screen reader text.

### Criterion 4: 400% Zoom & Dynamic Type Reflow
- Zoom the browser viewport to 400% (equivalent to a 320 CSS pixel width).
- Confirm zero two-dimensional (horizontal) scrollbars are induced.
- Confirm all buttons, text blocks, and cards wrap naturally without clipping.

### Criterion 5: Vestibular Safety & Reduced Motion
- Toggle `prefers-reduced-motion: reduce` in system preferences.
- Confirm that scroll parallax, background floaters, and hover animations resolve instantly ($\le 0.01\text{ms}$).

### Criterion 6: Gestalt Spatial Harmony & The Squint Test
- Step back and squint at the screen:
  - Is the dominant thesis immediately identifiable within 2 seconds?
  - Do related elements naturally group together by proximity (Gestalt Law of Proximity)?
  - Is the negative whitespace generous enough to allow breathing room between sections?

### Criterion 7: Cognitive Load & Voice Alignment
- Review all textual copy:
  - Does it fulfill **Brevity** (say only what matters)?
  - Does it fulfill **Clarity** (illuminate complexity without flattening)?
  - Does it preserve **Levity** (curiosity, warmth, and the `;p` spirit)?

---

## 3. Interactive Review Tool

Reviewers can access the live inspection dashboard at:
```text
http://127.0.0.1:4321/a11y
```
This dashboard allows reviewers to check off the 7 criteria, toggle the 8px baseline grid, and record sign-off.
