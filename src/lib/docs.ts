export interface DocHeading {
  depth: number;
  slug: string;
  text: string;
}

export interface DocFrontmatter {
  title?: string;
  description?: string;
  status?: string;
  created?: string;
  updated?: string;
  author?: string;
  scribe?: string;
  tags?: string[];
  npmPackage?: string;
  githubRepo?: string;
  version?: string;
  installSnippet?: string;
  [key: string]: any;
}

export interface DocItem {
  slug: string;
  path: string;
  title: string;
  description: string;
  section: string;
  order: number;
  frontmatter: DocFrontmatter;
  Content: any;
  getHeadings: () => DocHeading[];
}

export interface DocSection {
  title: string;
  description?: string;
  items: DocItem[];
}

/**
 * Load all markdown documentation files from /docs using Vite's eager glob.
 */
export function getAllDocs(): DocItem[] {
  const docModules = import.meta.glob('../../docs/**/*.md', { eager: true });
  const items: DocItem[] = [];

  for (const [filepath, mod] of Object.entries(docModules)) {
    const m = mod as any;
    // Normalized relative path, e.g. "packages/form-builder-engine.md"
    const relPath = filepath.replace(/^.*?\/docs\//, '').replace(/\.md$/, '');
    
    // Skip old or archived docs if any
    if (relPath.includes('old_docs')) continue;

    const frontmatter: DocFrontmatter = m.frontmatter || {};
    const title = frontmatter.title || relPath.split('/').pop() || 'Untitled';
    const description = frontmatter.description || '';

    // Determine section and display ordering
    let section = 'Guides & Standards';
    let order = 100;

    if (relPath.startsWith('packages/')) {
      section = 'Core Packages (@intuitui-labs)';
      order = 10;
    } else if (relPath.startsWith('tools/')) {
      section = 'Developer Tools & Telemetry';
      order = 20;
    } else if (relPath.startsWith('initiatives/')) {
      section = 'Studio Initiatives & Sanctuaries';
      order = 25;
    } else if (relPath.startsWith('architecture/')) {
      section = 'Architecture & Blueprints';
      order = 30;
    } else if (relPath.startsWith('Core/')) {
      section = 'Studio Philosophy & Foundation';
      order = 40;
    } else if (relPath === 'docs-sop' || relPath === 'INDEX') {
      section = 'Documentation Standards';
      order = 5;
    }

    // Slug for routing
    const slug = relPath.toLowerCase();

    items.push({
      slug,
      path: relPath,
      title,
      description,
      section,
      order,
      frontmatter,
      Content: m.Content,
      getHeadings: m.getHeadings || (() => []),
    });
  }

  return items.sort((a, b) => {
    if (a.order !== b.order) return a.order - b.order;
    return a.title.localeCompare(b.title);
  });
}

/**
 * Group docs into structured sections for sidebar navigation.
 */
export function getDocSections(): DocSection[] {
  const docs = getAllDocs();
  const sectionMap = new Map<string, DocItem[]>();

  const sectionOrder = [
    'Core Packages (@intuitui-labs)',
    'Developer Tools & Telemetry',
    'Studio Initiatives & Sanctuaries',
    'Architecture & Blueprints',
    'Documentation Standards',
    'Studio Philosophy & Foundation',
  ];

  for (const doc of docs) {
    if (!sectionMap.has(doc.section)) {
      sectionMap.set(doc.section, []);
    }
    sectionMap.get(doc.section)!.push(doc);
  }

  const sections: DocSection[] = [];
  for (const secTitle of sectionOrder) {
    if (sectionMap.has(secTitle)) {
      sections.push({
        title: secTitle,
        items: sectionMap.get(secTitle)!,
      });
      sectionMap.delete(secTitle);
    }
  }

  // Any remaining sections
  for (const [secTitle, items] of sectionMap.entries()) {
    sections.push({ title: secTitle, items });
  }

  return sections;
}

export function getDocBySlug(slug: string): DocItem | undefined {
  const docs = getAllDocs();
  const normalized = slug.toLowerCase().replace(/\/$/, '');
  return docs.find((d) => d.slug === normalized);
}
