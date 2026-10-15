---
title: "RN Terrain & TCDI Engine"
description: "React Native developer ecosystem intelligence, Temporal Convolutional Dependency Intelligence (TCDI), Tree-sitter AST diffing, and AI agent protocols."
status: "active"
created: 2026-10-11
updated: 2026-10-11
author: "Intuitui Labs Systems Team"
tags: [rn-terrain, tcdi, react-native, dependency-intelligence, mcp, ast-grep]
npmPackage: "@intuitui-labs/rn-terrain-core"
githubRepo: "https://github.com/intuitui-labs/rn-terrain"
version: "0.1.0"
---

# RN Terrain & TCDI Engine

> **A live intelligence layer and dependency telemetry engine for the React Native ecosystem.**

---

## 🌟 Key Capabilities

* 🧠 **TCDI (Temporal Convolutional Dependency Intelligence)**: Multi-layer timeline matrix correlating React Native releases, New Architecture (TurboModules & Fabric) breaking changes, and cross-package version incompatibilities.
* 🌲 **Tree-sitter AST Diff Verification**: AST-level code inspections identifying deprecated API patterns, non-Fabric bridge calls, and unsafe native invocations before compilation.
* 🤖 **Model Context Protocol (MCP) Server**: Provides specialized AI coding assistants (Claude, Cursor, Antigravity) with live ecosystem grounding, removing version hallucinations.
* 📡 **Terminal Radar CLI**: Instant CLI diagnostics (`rn-terrain check`, `rn-eval`) inspecting lockfiles, native manifests, and Cocoapods configurations in seconds.

---

## 📦 Tooling Suite

| Tool | Scope | Capabilities |
| :--- | :--- | :--- |
| **`@intuitui-labs/rn-terrain-core`** | Library | Scoring algorithms, chronology registry, telemetry queries. |
| **`@intuitui-labs/rn-terrain-cli`** | Binary | Terminal radar, migration planner, dependency audit. |
| **`@intuitui-labs/rn-terrain-mcp`** | Agent Protocol | Tooling bridge for AI pair programmers. |
| **`@intuitui-labs/rn-terrain-vscode`** | IDE Extension | In-editor hover hints and package health tooltips. |

---

## 🚀 Quickstart: CLI Installation

```bash
# Global terminal installation
pnpm add -g @intuitui-labs/rn-terrain-cli

# Run live audit on any React Native project
cd my-react-native-app
rn-terrain audit
```
