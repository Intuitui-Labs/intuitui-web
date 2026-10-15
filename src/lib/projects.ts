import { PUBLIC_URLS } from './site';

export type ProjectStatus = 'seeing' | 'sensemaking' | 'active' | 'incubating' | 'archived';
export type ProjectPillar = 'developer-oss' | 'collaborative-products' | 'studio-initiatives';

export interface ProjectLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface Project {
  slug: string;
  name: string;
  eyebrow: string;
  description: string;
  status: ProjectStatus;
  statusLabel: string;
  stageNote: string;
  relation: string;
  category: string;
  pillar: ProjectPillar;
  accent: 'sky' | 'leaf' | 'ink';
  href?: string;
  links?: ProjectLink[];
  featured?: boolean;
  visible: boolean;
  npmPackage?: string;
  githubRepo?: string;
  docsHref?: string;
  subdomain?: string;
  installSnippet?: string;
  collaborationPartner?: string;
}

/**
 * Master showcase inventory across the 3 strategic pillars:
 * 1. Developer & Open Source Program (@intuitui-labs/* packages, rn-terrain, TCDI)
 * 2. Collaborative Products (Gurudevi, EdLife with EdLove)
 * 3. Autonomous Studio Initiatives (Anavaratha, SME Systems, Divergent Club, Peace Valley)
 */
export const projects: Project[] = [
  // ─────────────────────────────────────────────────────────────
  // PILLAR 1: DEVELOPER & OPEN SOURCE PROGRAM
  // ─────────────────────────────────────────────────────────────
  {
    slug: 'rn-terrain',
    name: 'RN Terrain & TCDI',
    eyebrow: 'Developer ecosystem intelligence & dependency telemetry',
    description:
      'A live intelligence engine and dependency chronology system for the React Native ecosystem. Employs Temporal Convolutional Dependency Intelligence (TCDI), Tree-sitter AST diffing, migration planning, and Model Context Protocol (MCP) servers for AI coding agents.',
    status: 'active',
    statusLabel: 'Active Engine',
    stageNote: 'Live dependency intelligence, CLI radar, AST migration tools, and agent MCP servers actively powering production teams.',
    relation: 'Making complex software ecosystems legible and predictable',
    category: 'Developer Tools · Ecosystem Telemetry · Agent Protocols',
    pillar: 'developer-oss',
    accent: 'sky',
    docsHref: '/docs/tools/rn-terrain',
    githubRepo: `${PUBLIC_URLS.githubOrg}/rn-terrain`,
    npmPackage: '@intuitui-labs/rn-terrain-core',
    installSnippet: 'pnpm add -g @intuitui-labs/rn-terrain-cli',
    links: [
      { label: 'Read Documentation', href: '/docs/tools/rn-terrain' },
      { label: 'GitHub Repository', href: `${PUBLIC_URLS.githubOrg}/rn-terrain`, external: true },
    ],
    featured: true,
    visible: true,
  },
  {
    slug: 'form-builder-engine',
    name: 'Form Builder Engine',
    eyebrow: 'Headless mobile & web form evaluation kernel',
    description:
      'Enterprise headless form evaluation, dynamic branching, offline-first outbox synchronization, and cognitive progress engine built on TanStack Form and Zod for React Native, Expo, and Web.',
    status: 'active',
    statusLabel: 'Active Package',
    stageNote: 'Published on npm with 100% matrix test coverage across Expo SDK 57 (RN 0.86) and Expo SDK 58 (RN 0.88).',
    relation: 'Dignity and resilience at the boundary of data collection',
    category: 'Mobile & Web · TanStack Form · Hexagonal Architecture',
    pillar: 'developer-oss',
    accent: 'sky',
    docsHref: '/docs/packages/form-builder-engine',
    githubRepo: `${PUBLIC_URLS.githubOrg}/form-builder`,
    npmPackage: '@intuitui-labs/form-builder-engine',
    installSnippet: 'pnpm add @intuitui-labs/form-builder-engine @tanstack/form-core zod',
    links: [
      { label: 'Package Documentation', href: '/docs/packages/form-builder-engine' },
      { label: 'npm Registry', href: 'https://www.npmjs.com/package/@intuitui-labs/form-builder-engine', external: true },
      { label: 'GitHub Repository', href: `${PUBLIC_URLS.githubOrg}/form-builder`, external: true },
    ],
    visible: true,
  },
  {
    slug: 'lk-edu-geo',
    name: 'LK Edu Geo',
    eyebrow: 'Sri Lanka educational zones & boundaries open dataset',
    description:
      'The authoritative open dataset and validation engine for Sri Lanka educational zones, divisions, schools, districts, provinces, and Grama Niladhari boundaries.',
    status: 'active',
    statusLabel: 'Active Package',
    stageNote: 'Open-access package published on npm with tree-shakable lookups and school census verification.',
    relation: 'Grounding national education workflows in precise administrative geography',
    category: 'Open Data · Administrative Topology · Civic Tech',
    pillar: 'developer-oss',
    accent: 'leaf',
    docsHref: '/docs/packages/lk-edu-geo',
    githubRepo: `${PUBLIC_URLS.githubOrg}/lk-edu-geo`,
    npmPackage: '@intuitui-labs/lk-edu-geo',
    installSnippet: 'pnpm add @intuitui-labs/lk-edu-geo',
    links: [
      { label: 'Package Documentation', href: '/docs/packages/lk-edu-geo' },
      { label: 'npm Registry', href: 'https://www.npmjs.com/package/@intuitui-labs/lk-edu-geo', external: true },
      { label: 'GitHub Repository', href: `${PUBLIC_URLS.githubOrg}/lk-edu-geo`, external: true },
    ],
    visible: true,
  },
  {
    slug: 'a11y-gate',
    name: 'A11y Gate',
    eyebrow: 'Mathematical accessibility & APCA contrast CI gate',
    description:
      'Quantitative accessibility CI gate enforcing W3C APCA 0.98G lightness contrast, Brettel-Machado Color Vision Deficiency (CVD) simulation, 8px spatial harmony, and mobile ergonomics.',
    status: 'active',
    statusLabel: 'Active Package',
    stageNote: 'Published on npm (v0.2.0) with automated mathematical test verification for design systems.',
    relation: 'Sensory justice guaranteed through mathematical rigor',
    category: 'Design Systems · APCA 0.98G · Spatial Math',
    pillar: 'developer-oss',
    accent: 'sky',
    docsHref: '/docs/packages/a11y-gate',
    githubRepo: 'https://github.com/NeevSK/a11y-gate',
    npmPackage: '@intuitui-labs/a11y-gate',
    installSnippet: 'pnpm add -D @intuitui-labs/a11y-gate',
    links: [
      { label: 'Package Documentation', href: '/docs/packages/a11y-gate' },
      { label: 'npm Registry', href: 'https://www.npmjs.com/package/@intuitui-labs/a11y-gate', external: true },
      { label: 'GitHub Repository', href: 'https://github.com/NeevSK/a11y-gate', external: true },
    ],
    visible: true,
  },
  {
    slug: 'editorial',
    name: 'Editorial Engine',
    eyebrow: 'Provider-neutral headless publishing ledger',
    description:
      'Provider-neutral editorial publishing contracts, page metadata schemas, multi-format markdown/JSON ingestion, and git-grounded distribution ledgers.',
    status: 'active',
    statusLabel: 'Active Package',
    stageNote: 'Published on npm (v0.1.1) powering resilient headless publication pipelines.',
    relation: 'Separating content sovereignty from platform capture',
    category: 'Publishing Infrastructure · Schemas · Git Provenance',
    pillar: 'developer-oss',
    accent: 'ink',
    docsHref: '/docs/packages/editorial',
    githubRepo: `${PUBLIC_URLS.githubOrg}/editorial`,
    npmPackage: '@intuitui-labs/editorial',
    installSnippet: 'pnpm add @intuitui-labs/editorial',
    links: [
      { label: 'Package Documentation', href: '/docs/packages/editorial' },
      { label: 'npm Registry', href: 'https://www.npmjs.com/package/@intuitui-labs/editorial', external: true },
    ],
    visible: true,
  },
  {
    slug: 'openeval',
    name: 'OpenEval Platform',
    eyebrow: 'Transparent participatory trade-off evaluation framework',
    description:
      'Decision and recommendation engine grounded in Conceptual Topology. Evaluates trade-offs, goal-weighted algorithms, and reproducible multi-source recommendation ledgers.',
    status: 'active',
    statusLabel: 'Active Engine',
    stageNote: 'Standalone repository and core decision engine powering interactive ecosystem decision atlases.',
    relation: 'Bringing transparency and mathematical clarity to complex choices',
    category: 'Decision Theory · Topology · Algorithmic Transparency',
    pillar: 'developer-oss',
    accent: 'sky',
    docsHref: '/docs/packages/openeval',
    githubRepo: `${PUBLIC_URLS.githubOrg}/openeval`,
    npmPackage: '@intuitui-labs/openeval',
    installSnippet: 'pnpm add @intuitui-labs/openeval',
    links: [
      { label: 'Platform Documentation', href: '/docs/packages/openeval' },
      { label: 'GitHub Repository', href: `${PUBLIC_URLS.githubOrg}/openeval`, external: true },
    ],
    visible: true,
  },
  {
    slug: 'trube-art',
    name: 'Trube Art',
    eyebrow: 'Living light surfaces for React Native & Skia',
    description:
      'Living light surfaces, tactile shaders, and generative aesthetics for high-craft mobile interfaces powered by React Native and Skia Nitro modules.',
    status: 'incubating',
    statusLabel: 'Incubating Engine',
    stageNote: 'Shader exploration and tactile living surfaces under active research.',
    relation: 'Computational beauty and organic light in digital spaces',
    category: 'Graphics · Skia · Tactile Surfaces',
    pillar: 'developer-oss',
    accent: 'ink',
    docsHref: '/docs/packages/trube-art',
    githubRepo: `${PUBLIC_URLS.githubOrg}/trube-art`,
    npmPackage: '@intuitui-labs/trube-art',
    visible: true,
  },

  // ─────────────────────────────────────────────────────────────
  // PILLAR 2: COLLABORATIVE PRODUCTS (WITH EDLOVE)
  // ─────────────────────────────────────────────────────────────
  {
    slug: 'gurudevi',
    name: 'Gurudevi',
    eyebrow: 'Education ecology support system & teacher sanctuary',
    description:
      'A holistic sanctuary for teachers and learners, incubated in collaboration with EdLove. Features nervous system regulation, classroom transformation, and pedagogical care, hosted at gurudevi.app with the Sanctuary application at sanctuary.gurudevi.app and national gateway gurudevi.lk.',
    status: 'active',
    statusLabel: 'Live Platform',
    stageNote: 'Public marketing home at gurudevi.app, authenticated application at sanctuary.gurudevi.app, and national gateway at gurudevi.lk.',
    relation: 'Educator Sanctuary created in collaboration with EdLove',
    category: 'Education · Care · Humane Technology',
    pillar: 'collaborative-products',
    accent: 'sky',
    href: PUBLIC_URLS.gurudevi,
    subdomain: 'gurudevi.app',
    collaborationPartner: 'EdLove',
    links: [
      { label: 'Visit Gurudevi (Marketing)', href: PUBLIC_URLS.gurudevi, external: true },
      { label: 'Enter Sanctuary App', href: PUBLIC_URLS.gurudeviSanctuary, external: true },
      { label: 'General Exploration', href: PUBLIC_URLS.gurudeviExplore, external: true },
      { label: 'National Gateway (gurudevi.lk)', href: PUBLIC_URLS.gurudeviLk, external: true },
      { label: 'In Collaboration with EdLove', href: PUBLIC_URLS.edlove, external: true },
    ],
    featured: true,
    visible: true,
  },
  {
    slug: 'edlife',
    name: 'EdLife',
    eyebrow: 'Lifelong learning & agency initiative',
    description:
      'The lifelong learning and agency initiative under the EdLove umbrella — focusing on self-learning tools, somatic regulation, and real-life learning maps.',
    status: 'incubating',
    statusLabel: 'Incubating Initiative',
    stageNote: 'Developing self-learning pathways, agency toolkits, and pressure education with EdLove.',
    relation: 'Lifelong Learning Initiative created in collaboration with EdLove',
    category: 'Learning · Agency · Lifelong Education',
    pillar: 'collaborative-products',
    accent: 'sky',
    href: PUBLIC_URLS.edlove,
    subdomain: 'edlife.edlove.org',
    collaborationPartner: 'EdLove',
    links: [
      { label: 'Explore EdLove Ecosystem', href: PUBLIC_URLS.edlove, external: true },
    ],
    visible: true,
  },

  // ─────────────────────────────────────────────────────────────
  // PILLAR 3: AUTONOMOUS STUDIO INITIATIVES
  // ─────────────────────────────────────────────────────────────
  {
    slug: 'anavaratha',
    name: 'Anavaratha',
    eyebrow: 'Material cycles and ecological continuity',
    description:
      'A Sri Lanka-focused practice of unbroken continuity holding three linked domains: Freedom from Waste, Material Afterlives, and Ecological Flourishing. Studies how materials, soil, water basins, and institutions preserve or lose capability under systemic pressure through disciplined desk-first research.',
    status: 'sensemaking',
    statusLabel: 'Sensemaking Practice',
    stageNote: 'Holding the discipline of desk research, relationship mapping, and soil/water/climate evidence before claims of readiness to act.',
    relation: 'Understanding how biological and material life buys time under pressure',
    category: 'Ecology · Material Cycles · Soil & Climate',
    pillar: 'studio-initiatives',
    accent: 'leaf',
    docsHref: '/docs/initiatives/anavaratha',
    subdomain: 'anavaratha.intuituilabs.studio',
    links: [
      { label: 'Read Project Charter & Methodology', href: '/docs/initiatives/anavaratha' },
      { label: 'National Gateway (anavaratha.lk)', href: PUBLIC_URLS.anavarathaLk, external: true },
    ],
    visible: true,
  },
  {
    slug: 'urumaya',
    name: 'Urumaya',
    eyebrow: 'Civic-epistemic infrastructure & public knowledge commons for Sri Lanka',
    description:
      'A foundational civic-epistemic infrastructure initiative empowering Sri Lanka’s citizens, youth, educators, and community builders with dignified, localized knowledge systems. Combines a living public knowledge hub, modular civic API toolkit, and Devneevma pressure-aware frameworks.',
    status: 'sensemaking',
    statusLabel: 'Civic Infrastructure',
    stageNote: 'Foundation phase: building the MVP of the Civic Knowledge Hub and prototyping the open civic API base layer.',
    relation: 'A sanctuary of understanding, a civic root system, and an offering for future Sri Lanka',
    category: 'Civic Tech · Epistemic Justice · Knowledge Commons',
    pillar: 'studio-initiatives',
    accent: 'leaf',
    docsHref: '/docs/initiatives/urumaya',
    subdomain: 'urumaya.intuituilabs.studio',
    links: [
      { label: 'Read Strategic Report & Dossier', href: '/docs/initiatives/urumaya' },
      { label: 'National Gateway (urumaya.lk)', href: PUBLIC_URLS.urumayaLk, external: true },
    ],
    visible: true,
  },
  {
    slug: 'sme-systems',
    name: 'SME Systems (Digital Mudalali)',
    eyebrow: 'Designing Systems That Breathe for Sri Lankan Enterprise',
    description:
      'Designing native business intelligence for the Sri Lankan SME owner in Piliyandala, Moratuwa, and Kandy. Complexity belongs in the engine; dignity belongs at the surface. Contextual fidelity modeling volatile macroeconomic cycles, Avurudu demand spikes, SVAT, and WhatsApp workflows without foreign SaaS friction.',
    status: 'seeing',
    statusLabel: 'Seeing & Field Research',
    stageNote: 'Observing everyday operational realities of local merchants, workshops, and distributor networks.',
    relation: 'Complexity in the engine, dignity at the surface',
    category: 'SME · Contextual Systems · Operations',
    pillar: 'studio-initiatives',
    accent: 'ink',
    docsHref: '/docs/initiatives/sme-systems',
    subdomain: 'sme.intuituilabs.studio',
    links: [
      { label: 'Read Vision & Architecture Philosophy', href: '/docs/initiatives/sme-systems' },
      { label: 'National Gateway (smesystems.lk)', href: PUBLIC_URLS.smeLk, external: true },
    ],
    visible: true,
  },
  {
    slug: 'divergent-club',
    name: 'Divergent Club',
    eyebrow: 'A relational container and somatic sanctuary for exploratory thought',
    description:
      'Direct inheritance of the Cocoon sanctuary lineage — a non-performative container and community for neurodivergent and non-linear minds to feel seen, safe, and regulated while exploring unconstrained ideas without masking.',
    status: 'seeing',
    statusLabel: 'Sanctuary Community',
    stageNote: 'Holding quiet salons, asynchronous reflection notes, and somatic regulation circles.',
    relation: 'Direct inheritance of the Cocoon sanctuary architecture',
    category: 'Culture · Neurodivergence · Somatic Sanctuary',
    pillar: 'studio-initiatives',
    accent: 'ink',
    docsHref: '/docs/initiatives/divergent-club',
    subdomain: 'divergent.club',
    links: [
      { label: 'Read Sanctuary Charter & Manifesto', href: '/docs/initiatives/divergent-club' },
      { label: 'Divergent Community Portal', href: PUBLIC_URLS.divergent, external: true },
    ],
    visible: true,
  },
  {
    slug: 'peace-valley',
    name: 'Peace Valley',
    eyebrow: 'Soul-rooted economic ecosystem',
    description:
      'The underlying venture and economic engine behind Intuitui Labs — a space where divergent builders channel service into dignified, viable, and ecologically balanced enterprise.',
    status: 'sensemaking',
    statusLabel: 'Venture Sensemaking',
    stageNote: 'The economic principles, cooperative models, and ethical capitalism frameworks powering Intuitui Labs.',
    relation: 'The underlying economic venture engine powering Intuitui Labs',
    category: 'Venture · Soul Economy · Regeneration',
    pillar: 'studio-initiatives',
    accent: 'leaf',
    visible: true,
  },
];

export const publicProjects = projects.filter((project) => project.visible);

export const developerProjects = projects.filter(
  (project) => project.visible && project.pillar === 'developer-oss'
);

export const productProjects = projects.filter(
  (project) => project.visible && project.pillar === 'collaborative-products'
);

export const initiativeProjects = projects.filter(
  (project) => project.visible && project.pillar === 'studio-initiatives'
);
