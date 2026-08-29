# Intuitui Labs website

The public home of Intuitui Labs: a philosophy-led studio for understanding and shaping complex human systems through sensemaking, design, and technology.

The brand foundation for public language and visual decisions is documented in [Core/intuitui-brand-foundation.md](../Core/intuitui-brand-foundation.md). The website should express the tagline “Brevity, clarity, levity” through concise copy, clear hierarchy, and small moments of human playfulness.

## Public relationship model

Intuitui Labs is the philosophical, systems, and technology arm behind a constellation of initiatives. EdLove is the broader educational transformation ecosystem; Gurudevi is its first public project. Intuitui can later present independent products, experiments, and collaborations without changing the core identity.

Only explicitly approved work should be made public. Internal projects and exploratory documents may inform the site's philosophy and design, but should not be listed until they have a public story.

## Reusable project showcase

Public showcase entries live in `src/lib/projects.ts`. Each entry has a stable `slug`, name, eyebrow, description, status, relationship, category, accent, optional external links, and a `visible` flag. The Projects page renders `publicProjects`, so adding a project requires adding one content object and setting `visible: true`; layout and navigation do not need to be rewritten.

The model supports maturity stages (`seeing`, `sensemaking`, `active`, `incubating`, and `archived`) and links per project. A stage describes the current mode of attention, not a marketing claim: seeing means observing and discovering; sensemaking means forming a more coherent understanding. Keep social profiles and other shared external links in configuration rather than hardcoding them into individual page templates.

Public team profiles live in `src/lib/team.ts`. The `/about/team` page renders `publicTeam`, so adding a person requires adding a profile object with a short brief, role, optional handle, optional note, optional image, and typed profile links, then setting `visible: true`. Keep profile copy concise and publish only people with an approved public story. Shared public destinations live in `src/lib/site.ts` under `PUBLIC_URLS`; templates and content should reference those constants instead of repeating URLs.

## Current routes

- `/` — philosophy and orientation
- `/about` — philosophy, practice, and context
- `/about/team` — reusable public team directory
- `/projects` — reusable public project showcase
- `/projects/[slug]` — generated project detail page from the same showcase data
- `/studio` — studio practice and contact

## Forward plan

1. Establish the shared visual system: `;p` mark, typography, colour, spacing, link/button language, and motion rules.
2. Refine the homepage and About page around the brand foundation rather than consultancy language.
3. Continue evolving the configurable project showcase, with Gurudevi featured and maturity stages visible.
4. Add configurable social and external-link data shared across the shell and project entries.
5. Enrich project detail routes only when a project has enough evidence and narrative to support more depth.
6. Test every important page at mobile widths and on slower Android-like conditions before desktop polish.
