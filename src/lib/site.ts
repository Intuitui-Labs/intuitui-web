export const SITE_URL = 'https://intuituilabs.edlove.org';
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
  gurudevi: 'https://gurudevi.edlove.org',
  edlove: 'https://edlove.org',
  neevsk: 'https://neevsk.edlove.org',
  neevskLinkedIn: 'https://www.linkedin.com/in/neevsk',
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

