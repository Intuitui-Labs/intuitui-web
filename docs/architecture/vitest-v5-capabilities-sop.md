---
title: "Vitest v5 & Vite 8 Capabilities, Test Architectures & Standard Operating Procedure"
status: "active"
created: 2026-09-03
updated: 2026-09-03
author: "Naveen"
scribe: "Antigravity"
tags: [vitest, vite, testing, sop, architecture, a11y]
---

# Vitest v5 & Vite 8 Capabilities, Testing Architectures & SOP

**Standard Operating Procedure (SOP):** SOP-TEST-005  
**Governing Runtimes:** Vitest v5.0.0+, Vite 8.2.2+, Node.js 24+  
**Target Projects:** `intuitui-web`, `neevsk-web`, `@intuitui-labs/a11y-gate`

---

## 1. Executive Overview

With the arrival of **Vitest v5** and its native coupling to the **Vite 8** ecosystem, our monorepo testing paradigm shifts from isolated script checks into a high-performance, deterministic verification engine.

This document serves as the formal **Standard Operating Procedure (SOP)** detailing **15 advanced capabilities** in Vitest v5/Vite 8, complete with operational syntax, monorepo use cases, and concrete code implementations tailored to Intuitui Labs' mathematical accessibility, spatial harmony, and frontend architectures.

---

## 2. Fifteen Advanced Vitest v5 / Vite 8 Capabilities

### Capability 1: Native TSConfig Paths Engine (`resolve.tsconfigPaths`)
- **Mechanism**: Replaces legacy third-party plugins (`vite-tsconfig-paths`) with Vite's core resolver. Eliminates external overhead and deprecation warnings.
- **Monorepo Application**: Maps `@intuitui-labs/a11y-gate` directly to `../packages/a11y-gate/src/index.ts` in dev/test without requiring a rebuild of dist.
- **SOP Pattern**:
  ```ts
  // vitest.config.ts
  export default defineConfig({
    resolve: { tsconfigPaths: true },
  });
  ```

---

### Capability 2: Test Tags & Boolean Filter Expressions (`test.tag`, `--tagsFilter`)
- **Mechanism**: First-class tag metadata on test suites and test cases, queried via boolean CLI operators (`&&`, `||`, `!`).
- **Monorepo Application**: Separates ultra-fast pure math tests (e.g. APCA, CVD) from disk-intensive HTML landmark audits.
- **SOP Pattern**:
  ```ts
  describe('Mathematical Proofs', () => {
    it('APCA contrast theorem', { tags: ['math', 'fast', 'unit'] }, () => {
      expect(Math.abs(calculateApca('#000', '#fff'))).toBeGreaterThan(100);
    });

    it('Compiled Dist DOM Audit', { tags: ['dom', 'dist', 'integration'] }, () => {
      // reads compiled dist/index.html
    });
  });
  ```
- **CLI Commands**:
  - `pnpm exec vitest run --tagsFilter "math && !dom"` (Runs only sub-millisecond math proofs)
  - `pnpm exec vitest run --tagsFilter "dist"` (Runs CI gate before deployment)

---

### Capability 3: Disk-Persistent Module FileSystem Cache (`fsModuleCache`)
- **Mechanism**: Persists transformed ASTs and transpiled modules to disk (`node_modules/.vitest-cache`).
- **Monorepo Application**: Accelerates warm test execution for large TypeScript and Astro component trees by over 40%.
- **SOP Pattern**:
  ```ts
  export default defineConfig({
    test: {
      fsModuleCache: true,
      fsModuleCachePath: 'node_modules/.vitest-cache',
    },
  });
  ```

---

### Capability 4: Asynchronous Resource & Handle Leak Detection (`detectAsyncLeaks`)
- **Mechanism**: Analyzes Node.js active handles (`AsyncLocalStorage`, timers, unclosed file descriptors, or dangling event emitters).
- **Monorepo Application**: Guarantees our filesystem watchers, async audit suites, and DOM parsers clean up cleanly in CI.
- **SOP Pattern**:
  ```powershell
  pnpm exec vitest run --detectAsyncLeaks
  ```

---

### Capability 5: High-Precision Parameterized Matrices (`test.each` with Record Tables)
- **Mechanism**: Strongly-typed table syntax with format string interpolation (`$name`, `$expectedWcagMin`) providing granular test output per iteration.
- **Monorepo Application**: Evaluates every design token pair against 3 simulated Color Vision Deficiencies (Deuteranopia, Protanopia, Tritanopia).
- **SOP Pattern**:
  ```ts
  test.each(CERTIFIED_TOKEN_PAIRS)(
    '[$id] $name preserves contrast ratio under color vision deficiency',
    (token) => {
      const cvdFg = simulateCvd(token.fg, 'deuteranopia');
      const cvdBg = simulateCvd(token.bg, 'deuteranopia');
      const ratio = getWcagContrastRatio(cvdFg, cvdBg);
      expect(ratio).toBeGreaterThanOrEqual(token.expectedWcagMin * 0.7);
    }
  );
  ```

---

### Capability 6: Unified In-Runner Typechecking (`--typecheck`)
- **Mechanism**: Runs TypeScript compiler diagnostics (`tsc`) directly inside the Vitest execution graph without spinning up detached `tsc` processes.
- **Monorepo Application**: One-shot validation ensuring design token types and component props are strictly typed during the test run.
- **SOP Pattern**:
  ```ts
  export default defineConfig({
    test: {
      typecheck: {
        enabled: true,
        checker: 'tsc',
        include: ['src/**/*.test.ts'],
      },
    },
  });
  ```

---

### Capability 7: Rich Diagnostic Context & Artifact Attachments (`context.annotate`)
- **Mechanism**: Allows test cases to attach dynamic metadata, JSON payloads, or generated SVGs directly to Vitest UI and HTML test reports.
- **Monorepo Application**: When an APCA or CVD contrast test fails or falls close to the threshold, it attaches an exact spectral diagnostic breakdown for design review.
- **SOP Pattern**:
  ```ts
  it('measures fluid typography step clamp limits', async ({ annotate }) => {
    const clamp = generateFluidClamp({ minSizePx: 18, maxSizePx: 24 });
    annotate({
      title: 'Generated CSS Clamp Spec',
      description: 'Fluid typography clamp formula for body copy',
      data: { clamp, min: 18, max: 24 },
    });
    expect(clamp).toContain('clamp(');
  });
  ```

---

### Capability 8: Vitest Multi-Project Workspaces (`vitest.workspace.ts`)
- **Mechanism**: Replaces fragmented subproject test invocations with a top-level workspace orchestrator.
- **Monorepo Application**: Allows running `vitest run` from `c:/projects` to execute `intuitui-web`, `neevsk-web`, and `packages/a11y-gate` in coordinated worker pools.
- **SOP Pattern**:
  ```ts
  // c:/projects/vitest.workspace.ts
  import { defineWorkspace } from 'vitest/config';

  export default defineWorkspace([
    'intuitui-web/vitest.config.ts',
    'neevsk-web/vitest.config.ts',
    'packages/a11y-gate/vitest.config.ts',
  ]);
  ```

---

### Capability 9: Shared Vite Dev Server Reuse (`sharedViteServer`)
- **Mechanism**: Multiple test projects or suites share the same underlying Vite server instance, avoiding multiple Vite boots.
- **Monorepo Application**: Massively conserves system memory and cold-start latency when testing monorepo workspaces.
- **SOP Pattern**:
  ```ts
  export default defineConfig({
    test: {
      sharedViteServer: true,
    },
  });
  ```

---

### Capability 10: Chai 6 Assertion Modernization & Custom Matchers
- **Mechanism**: Upgraded assertion core supporting modern deep-equality algorithms, symmetric diffing, and type-inferred custom domain matchers.
- **Monorepo Application**: Create domain-specific matchers like `expect(colorPair).toPassWcagAaa()` or `expect(clamp).toSatisfyFluidScale()`.
- **SOP Pattern**:
  ```ts
  expect.extend({
    toPassWcagAaa(receivedPair: TokenPair) {
      const ratio = getWcagContrastRatio(receivedPair.fg, receivedPair.bg);
      const pass = ratio >= 7.0;
      return {
        pass,
        message: () => `Expected ${receivedPair.name} (${ratio.toFixed(2)}:1) to satisfy WCAG AAA (>= 7.0:1)`,
      };
    },
  });
  ```

---

### Capability 11: Granular Heap Usage & Memory Diagnostics (`--logHeapUsage`, `--vmMemoryLimit`)
- **Mechanism**: Emits heap allocation metrics per test file and bounds Node VM memory limits to prevent runaway leaks.
- **Monorepo Application**: Profiling memory footprint during heavy SVG/CVD matrix generation and Astro HTML string parses.
- **SOP Pattern**:
  ```powershell
  pnpm exec vitest run --logHeapUsage
  ```

---

### Capability 12: Sharding & Distributed CI Parallelism (`--shard`)
- **Mechanism**: Splits the entire test execution across parallel runner nodes (e.g. `--shard=1/3`, `--shard=2/3`, `--shard=3/3`).
- **Monorepo Application**: Enables GitHub Actions or local parallel agents to divide massive design token permutations and regression tests into parallel slices.
- **SOP Pattern**:
  ```powershell
  pnpm exec vitest run --shard=1/2
  ```

---

### Capability 13: Failure Bailing & Retry Engineering (`--bail`, `--retry`, `--repeats`)
- **Mechanism**: Configures instant termination on the first failing gate (`bail: 1`) in strict CI, or repeats tests $N$ times to verify zero flakiness in spring physics animations.
- **Monorepo Application**: Validating deterministic tactile spring interpolations:
  ```ts
  it('spring compression is deterministic across 10 repeats', { repeats: 5 }, () => {
    const motion = getInterpolatedMotion(0.5);
    expect(motion.activeScale).toBeCloseTo(0.979, 3);
  });
  ```

---

### Capability 14: Blob Test Reports & Distributed Merging (`--mergeReports`)
- **Mechanism**: Emits machine-readable blob chunks in multi-worker or sharded environments, subsequently merged into a unified report without re-running tests.
- **Monorepo Application**: Unifies design token audits from web, mobile, and native packages into a single cohesive HTML/JSON provenance colophon.

---

### Capability 15: Isolated Standalone & Interactive Watch Engine (`--standalone`)
- **Mechanism**: Boots the Vitest daemon without eagerly executing tests until file changes occur or browser test targets are dispatched.
- **Monorepo Application**: Ideal for background pairing sessions and instant TDD while modifying design tokens in `src/styles/global.css` or `design-tokens.ts`.
- **SOP Pattern**:
  ```powershell
  pnpm exec vitest --standalone
  ```

---

## 3. Monorepo Implementation Matrix

| Project | Config File | Key Capabilities Enabled |
|---|---|---|
| `intuitui-web` | `vitest.config.ts` | `resolve.tsconfigPaths`, `fsModuleCache`, `tagsFilter`, `test.each` CVD suites |
| `neevsk-web` | `vitest.config.ts` | `resolve.tsconfigPaths`, `fsModuleCache`, `tagsFilter`, Playwright/Vitest alignment |
| `@intuitui-labs/a11y-gate` | `package.json` | Peer dependency `vitest: ">=1.0.0"` (satisfied by v5) |
| Root Monorepo | `vitest.workspace.ts` | Unified multi-project orchestration |

---

## 4. Operational Commands Reference

```powershell
# Fast Math Proofs only
pnpm -C intuitui-web exec vitest run --tagsFilter "math"

# Full Production CI Gate with Heap & Leak Detection
pnpm -C intuitui-web exec vitest run --detectAsyncLeaks --logHeapUsage

# Run Interactive UI with Persistent Cache
pnpm -C intuitui-web test:ui
```
