---
title: "OpenEval Platform (@intuitui-labs/openeval)"
description: "Transparent, participatory evaluation, trade-off analysis, and recommendation framework grounded in Conceptual Topology."
status: "active"
created: 2026-10-11
updated: 2026-10-11
author: "Intuitui Labs Systems Team"
tags: [openeval, decision-engine, trade-offs, algorithms, recommendations]
npmPackage: "@intuitui-labs/openeval"
githubRepo: "https://github.com/intuitui-labs/openeval"
version: "0.1.0"
---

# OpenEval Platform (`@intuitui-labs/openeval`)

> **Transparent, participatory evaluation, trade-off analysis, and recommendation framework grounded in Conceptual Topology.**

---

## 🌟 Key Capabilities

* 🎯 **Goal-Weighted Evaluation**: Pure mathematical decision functions that weigh competing constraints without hidden algorithmic bias.
* 🔗 **Shareable Decision Topology**: Encodes and decodes multi-criteria user profiles into lightweight, URL-safe base64 state hashes (`encodeShareState`, `decodeShareState`).
* 📊 **Multi-Source Ingestion**: Ingests vendor offers, developer packages, or civic programs into reproducible comparison matrices.

---

## 📦 Installation

```bash
pnpm add @intuitui-labs/openeval
```

---

## 🚀 Usage

```typescript
import { evaluateOffers, encodeShareState } from '@intuitui-labs/openeval';

const candidateOptions = [
  { id: 'solution-a', cost: 12, performance: 90, maintenance: 80 },
  { id: 'solution-b', cost: 45, performance: 95, maintenance: 95 },
];

const userPriorities = {
  budgetSensitivity: 0.8,
  performanceNeed: 0.5,
  maintenanceTolerance: 0.9,
};

const evaluation = evaluateOffers(candidateOptions, userPriorities);
console.log('Top Recommendation:', evaluation.ranked[0].id);

const stateHash = encodeShareState(userPriorities);
console.log('Shareable State Token:', stateHash);
```
