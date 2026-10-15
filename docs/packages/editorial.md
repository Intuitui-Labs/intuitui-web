---
title: "Editorial Engine (@intuitui-labs/editorial)"
description: "Provider-neutral editorial publishing contracts, page metadata schemas, and distribution ledger."
status: "active"
created: 2026-10-11
updated: 2026-10-11
author: "Intuitui Labs Systems Team"
tags: [editorial, publishing, headless, provenance, markdown]
npmPackage: "@intuitui-labs/editorial"
githubRepo: "https://github.com/intuitui-labs/editorial"
version: "0.1.1"
---

# Editorial Engine (`@intuitui-labs/editorial`)

> **Provider-neutral editorial publishing contracts, page metadata schemas, multi-format markdown/JSON ingestion, and git-grounded distribution ledgers.**

---

## 🌟 Key Capabilities

* 📜 **Content Sovereignty**: Decouples writing, editorial attribution, and document provenance from centralized hosting platforms.
* 🛡️ **Cryptographic & Git Provenance**: Maintains a transparent ledger tracking author, revision date, review sign-off, and canonical URI.
* 📦 **Multi-Format Ingestion**: Ingests markdown with frontmatter, structured JSON-LD schemas, and Plaintext editorial drafts into standardized AST nodes.

---

## 📦 Installation

```bash
pnpm add @intuitui-labs/editorial
```

---

## 🚀 Usage

```typescript
import { createEditorialLedger, validateMetadataSchema } from '@intuitui-labs/editorial';

const articleMetadata = {
  title: 'On Systems Clarity and Residuality in Civic Infrastructure',
  author: 'Intuitui Labs Systems Team',
  publishedAt: '2026-09-17T08:30:00Z',
  canonicalUrl: 'https://intuituilabs.studio/essays/systems-clarity',
  license: 'CC-BY-4.0',
};

const validation = validateMetadataSchema(articleMetadata);
if (validation.valid) {
  const ledger = createEditorialLedger(articleMetadata);
  console.log('Ledger Entry Hash:', ledger.contentHash);
}
```
