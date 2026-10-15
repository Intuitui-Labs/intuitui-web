export const SITE_URL = 'https://intuituilabs.studio';
export const SITE_NAME = 'Intuitui Labs';
export const SITE_TITLE = 'Intuitui Labs | Systems Intelligence';
export const SITE_DESCRIPTION =
  'Intuitui Labs is a systems intelligence and humane innovation studio focused on Sri Lankan workflows, research, sensemaking, and applied technology.';
export const SITE_KEYWORDS = [
  'Intuitui Labs',
  'systems intelligence',
  'humane technology',
  'Sri Lanka',
  'innovation studio',
  'workflow design',
];

export const BRAND_MARK = ';p';
export const BRAND_TAGLINE = 'Brevity, Clarity, Levity';
export const BRAND_EMOJI_TAGLINE = '⚡ · 💡 · 😜';

/** Public destinations used across the site. Keep URL changes in one place. */
export const PUBLIC_URLS = {
  // Gurudevi Ecosystem
  gurudevi: 'https://gurudevi.app',
  gurudeviSanctuary: 'https://sanctuary.gurudevi.app',
  gurudeviExplore: 'https://explore.gurudevi.app',
  gurudeviLk: 'https://gurudevi.lk',
  gurudeviLegacy: 'https://gurudevi.edlove.org',

  // EdLove Ecosystem
  edlove: 'https://edlove.org',

  // Personal Archive
  neevsk: 'https://neevsk.edlove.org',
  neevskLinkedIn: 'https://www.linkedin.com/in/neevsk',

  // Intuitui Labs Platforms
  intuituilabs: 'https://intuituilabs.studio',
  intuituilabsLk: 'https://intuituilabs.lk',
  docs: 'https://docs.intuituilabs.studio',
  githubOrg: 'https://github.com/intuitui-labs',
  npmOrg: 'https://www.npmjs.com/org/intuitui-labs',

  // Autonomous Studio Initiatives
  anavaratha: 'https://anavaratha.intuituilabs.studio',
  anavarathaLk: 'https://anavaratha.lk',
  urumaya: 'https://urumaya.intuituilabs.studio',
  urumayaLk: 'https://urumaya.lk',
  sme: 'https://sme.intuituilabs.studio',
  smeLk: 'https://smesystems.lk',
  divergent: 'https://divergent.club',
  divergentSub: 'https://divergent.intuituilabs.studio',
} as const;

export const SOCIAL_LINKS: Array<{ label: string; href: string }> = [
  // Add approved profiles here when they are confirmed.
];

export const ORGANIZATION = {
  name: SITE_NAME,
  url: SITE_URL,
  description: SITE_DESCRIPTION,
};

export function absoluteUrl(pathname: string) {
  return new URL(pathname, SITE_URL).toString();
}

export function defaultOgImage(pathname = '/') {
  return absoluteUrl(`/og${pathname === '/' ? '' : pathname}.png`);
}

