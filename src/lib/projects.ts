import { PUBLIC_URLS } from './site';

export type ProjectStatus = 'seeing' | 'sensemaking' | 'active' | 'incubating' | 'archived';

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
  accent: 'sky' | 'leaf' | 'ink';
  href?: string;
  links?: ProjectLink[];
  featured?: boolean;
  visible: boolean;
}

/**
 * Public showcase inventory. Keep unready or internal work out of this list
 * until it has an approved public story.
 */
export const projects: Project[] = [
  {
    slug: 'gurudevi',
    name: 'Gurudevi',
    eyebrow: 'Education ecology support system',
    description:
      'A sanctuary for teachers and learners, built to mend the teaching-learning impedance match through care, philosophy, and technology.',
    status: 'active',
    statusLabel: 'Live project',
    stageNote: 'A living platform being shaped with teachers, learners, and the wider EdLove constellation.',
    relation: 'First project in the EdLove constellation',
    category: 'Education · Care · Technology',
    accent: 'sky',
    href: PUBLIC_URLS.gurudevi,
    links: [
      { label: 'Visit Gurudevi', href: PUBLIC_URLS.gurudevi, external: true },
      { label: 'Explore EdLove', href: PUBLIC_URLS.edlove, external: true },
    ],
    featured: true,
    visible: true,
  },
  {
    slug: 'rn-terrain',
    name: 'RN Terrain',
    eyebrow: 'Developer ecosystem intelligence',
    description:
      'A live intelligence layer for understanding the health, movement, and uncertainty of the React Native ecosystem.',
    status: 'seeing',
    statusLabel: 'Seeing',
    stageNote: 'We are observing the ecosystem, its signals, and the forms of intelligence developers need next.',
    relation: 'Making software ecosystems more legible',
    category: 'Open source · Data · Developer tools',
    accent: 'sky',
    visible: true,
  },
  {
    slug: 'anavaratha',
    name: 'Anavaratha',
    eyebrow: 'Material cycles and ecological continuity',
    description:
      'A Sri Lanka-focused practice of tracing how materials, institutions, people, and ecosystems preserve or lose capability through cycles of use, residuality, and regeneration.',
    status: 'sensemaking',
    statusLabel: 'Sensemaking',
    stageNote: 'The questions, boundaries, and evidence are being formed carefully before any claim of readiness to act.',
    relation: 'Understanding how life buys time under pressure',
    category: 'Ecology · Material systems · Evidence',
    accent: 'leaf',
    visible: true,
  },
  {
    slug: 'sme-systems',
    name: 'SME Systems',
    eyebrow: 'Local business infrastructure',
    description:
      'Exploring mobile-first, locally fitted tools that help Sri Lankan small businesses see their operations and act with more confidence.',
    status: 'seeing',
    statusLabel: 'Seeing',
    stageNote: 'We are looking closely at the everyday realities of small businesses before deciding what the system should become.',
    relation: 'Complexity in the engine, dignity at the surface',
    category: 'SME · Operations · Humane technology',
    accent: 'ink',
    visible: true,
  },
  {
    slug: 'divergent-club',
    name: 'Divergent Club',
    eyebrow: 'A space for exploratory thought',
    description:
      'An emerging space for ideas that do not yet belong to a single discipline, product, or institutional shape.',
    status: 'seeing',
    statusLabel: 'Seeing',
    stageNote: 'An open edge for ideas, conversations, and experiments that are still finding their natural shape.',
    relation: 'Keeping possibility open long enough to learn from it',
    category: 'Culture · Ideas · Community',
    accent: 'ink',
    visible: true,
  },
];

export const publicProjects = projects.filter((project) => project.visible);
