import { PUBLIC_URLS } from './site';

export type ProfileIcon = 'linkedin' | 'github' | 'instagram' | 'x' | 'website' | 'email';

export interface ProfileLink { label: string; href: string; icon: ProfileIcon; }

export interface TeamMember {
  slug: string;
  name: string;
  handle?: string;
  role: string;
  brief: string;
  note?: string;
  initials: string;
  image?: string;
  links?: ProfileLink[];
  visible: boolean;
  order: number;
}

/** Public team directory. Keep profiles short, human, and easy to extend. */
export const team: TeamMember[] = [
  {
    slug: 'neev',
    name: 'Naveen',
    handle: 'NeevSK',
    role: 'Founder · Systems Lead',
    brief: 'Builds the philosophical and systems foundation of Intuitui Labs.',
    note: 'Philosophy, sensemaking, and making things that can survive contact with reality.',
    initials: 'N',
    links: [
      { label: 'Website', href: PUBLIC_URLS.neevsk, icon: 'website' },
      { label: 'LinkedIn', href: PUBLIC_URLS.neevskLinkedIn, icon: 'linkedin' },
    ],
    visible: true,
    order: 1,
  },
];

export const publicTeam = team.filter((member) => member.visible).sort((a, b) => a.order - b.order);
