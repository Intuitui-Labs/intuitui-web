---
title: "LK Edu Geo (@intuitui-labs/lk-edu-geo)"
description: "Sri Lanka educational zones, divisions, schools, districts, provinces, and Grama Niladhari boundary open dataset and validation engine."
status: "active"
created: 2026-10-11
updated: 2026-10-11
author: "Intuitui Labs Systems Team"
tags: [open-data, sri-lanka, education, geo, administrative-boundaries]
npmPackage: "@intuitui-labs/lk-edu-geo"
githubRepo: "https://github.com/intuitui-labs/lk-edu-geo"
version: "0.1.0"
---

# LK Edu Geo (`@intuitui-labs/lk-edu-geo`)

> **Sri Lanka educational zones, divisions, schools, districts, provinces, and GN divisions open dataset and validation engine.**

---

## 🌟 Key Capabilities

* 🏛️ **Hierarchical Administrative Topology**: Complete hierarchy from 9 Provinces &rarr; 25 Districts &rarr; Educational Zones &rarr; Educational Divisions.
* 🏫 **School Registry & Census Codes**: Validates against official national school census IDs, medium of instruction, school category, and division mapping.
* 📦 **Zero-Config Tree-Shaking**: Light, highly optimized JSON indices packaged as native ESM and CJS for zero overhead on mobile runtimes.
* 🔍 **Fast Fuzzy Search**: In-memory prefix and substring search across Sinhala, Tamil, and English institutional names.

---

## 📦 Installation

```bash
pnpm add @intuitui-labs/lk-edu-geo
```

---

## 🚀 Usage Examples

### 1. Traversing Administrative Boundaries
```typescript
import {
  getProvinces,
  getDistrictsByProvince,
  getEducationalZonesByDistrict,
  getEducationalDivisionsByZone,
} from '@intuitui-labs/lk-edu-geo';

// 1. Fetch Western Province
const provinces = getProvinces();
const western = provinces.find((p) => p.code === 'WP');

// 2. Fetch Districts (Colombo, Gampaha, Kalutara)
const districts = getDistrictsByProvince('WP');

// 3. Fetch Educational Zones under Colombo District
const zones = getEducationalZonesByDistrict('COL');
console.log('Colombo Zones:', zones.map((z) => z.name));
// Output: ['Colombo', 'Homagama', 'Piliyandala']
```

### 2. Searching and Validating Schools
```typescript
import { searchSchools, getSchoolByCensusNo } from '@intuitui-labs/lk-edu-geo';

// Search by query
const results = searchSchools('Royal College');
console.log('Found:', results[0].name, 'Census #:', results[0].censusNo);

// Direct lookup by National Census Code
const school = getSchoolByCensusNo('01001');
if (school) {
  console.log(`School: ${school.name}, Zone: ${school.zone}, Category: ${school.type}`);
}
```

---

## 📐 Data Grounding

Grounding Sri Lankan civic and educational workflows in accurate structural geography ensures data integrity across forms, field research, and public administration dashboards without fragile manual entry.
