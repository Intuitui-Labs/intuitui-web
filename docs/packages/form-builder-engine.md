---
title: "Form Builder Engine (@intuitui-labs/form-builder-engine)"
description: "Headless, schema-driven form evaluation, dynamic branching, offline-first persistence, and cognitive progress engine for React Native, Expo, and Web."
status: "active"
created: 2026-10-11
updated: 2026-10-11
author: "Intuitui Labs Systems Team"
tags: [form-builder, mobile, expo, react-native, tanstack-form, zod]
npmPackage: "@intuitui-labs/form-builder-engine"
githubRepo: "https://github.com/intuitui-labs/form-builder"
version: "0.1.0"
---

# Form Builder Engine (`@intuitui-labs/form-builder-engine`)

> **Enterprise headless form evaluation, dynamic branching, offline-first outbox persistence, and cognitive progress engine built on TanStack Form and Hexagonal Architecture.**

---

## 🌟 Key Capabilities

* ⚡ **Zero-Dependency Core (0 kB bundle overhead)**: Pure TypeScript condition evaluator and default schema validator (`PureSchemaAdapter`).
* 🔀 **Conditional Branching & Reactive Visibility**: Deterministic field `visibleIf` rules and dynamic page `jumpRules` with non-linear history rewinding.
* 📦 **Offline-First Persistence & Outbox Sync**: Hexagonal storage ports (`IStoragePort`, `INetworkStatusPort`), debounced draft auto-saving, and durable offline FIFO outbox queue with 14-day TTL and auto-reconnection flush.
* 🎯 **Cognitive Progress Weighting**: Cognitive effort weighting (`WeightedFieldProgressAdapter`), velocity estimation, and reciprocal value unlocks (`PeerBenchmarkInsightAdapter`).
* 🔌 **Hexagonal Validation Architecture**: Swappable schema validators via `ISchemaValidator` supporting Standard Schema v1 (Valibot, ArkType), Zod v4, and Pure TypeScript.
* 📱 **Native-First & Multi-Version Verified**: Tested across parallel **Expo SDK 57** (React Native 0.86) and **Expo SDK 58** (React Native 0.88) matrix fixtures.

---

## 📦 Installation & Setup

Install the published package and its peer dependencies (`@tanstack/form-core` and optional `zod`):

```bash
# React Native / Expo projects:
pnpm add @intuitui-labs/form-builder-engine @tanstack/form-core zod @react-native-async-storage/async-storage @react-native-community/netinfo

# Web / Node projects:
pnpm add @intuitui-labs/form-builder-engine @tanstack/form-core zod
```

---

## 🚀 Quickstart: Instantiating the Engine

```typescript
import {
  createFormEngine,
  ZodSchemaValidator,
  InMemoryStorageAdapter,
  BrowserNetworkStatusAdapter,
  WeightedFieldProgressAdapter,
} from '@intuitui-labs/form-builder-engine';
import { z } from 'zod';

const schema = {
  id: 'teacher-wellbeing-survey',
  version: '1.0.0',
  pages: [
    {
      id: 'step-1',
      title: 'Teaching Environment',
      fields: [
        {
          id: 'schoolType',
          type: 'select',
          label: 'School Category',
          options: [
            { label: 'Government National School', value: 'national' },
            { label: 'Provincial School', value: 'provincial' },
            { label: 'Private / Independent', value: 'private' },
          ],
          validation: z.string().min(1, 'Selection required'),
        },
        {
          id: 'studentCount',
          type: 'number',
          label: 'Approximate Students in Classroom',
          validation: z.number().min(1).max(100),
          visibleIf: { field: 'schoolType', op: 'in', value: ['national', 'provincial'] },
        },
      ],
    },
  ],
};

const engine = createFormEngine({
  schema,
  validator: new ZodSchemaValidator(),
  storage: new InMemoryStorageAdapter(),
  network: new BrowserNetworkStatusAdapter(),
  progress: new WeightedFieldProgressAdapter(),
});

await engine.initialize();
console.log('Engine ready. Current page:', engine.getCurrentPage().id);
```

---

## 📐 Architecture: Hexagonal Storage & Outbox

```
┌────────────────────────────────────────────────────────┐
│                   Core Form Engine                     │
│  (Condition Evaluator, Branching, Progress Calculator) │
└──────────────┬──────────────────────────┬──────────────┘
               │                          │
        [Storage Port]              [Network Port]
               │                          │
   ┌───────────┴────────────┐     ┌───────┴──────────────┐
   │ AsyncStorage (Native)  │     │ NetInfo (Native)     │
   │ LocalStorage (Web)     │     │ Navigator (Web)      │
   │ IndexedDB (Web)        │     │ Polling Socket (IoT) │
   └────────────────────────┘     └──────────────────────┘
```

The engine guarantees data preservation even when network drops unexpectedly or apps are backgrounded mid-survey.
