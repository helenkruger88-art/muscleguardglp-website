import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export type ArticleFrontmatter = {
  title: string;
  slug: string;
  description: string;
  branch: 'what-glp1s-do' | 'how-to-protect-muscle' | 'research-updated';
  datePublished: string; // ISO date
  dateModified: string; // ISO date
  status: 'live' | 'stub'; // stub = TODO content
  citations?: Array<{ id: number; label: string; url?: string; doi?: string }>;
  related?: string[]; // slugs
};

export type Article = ArticleFrontmatter & {
  content: string;
};

const CONTENT_DIR = path.join(process.cwd(), 'src', 'content', 'research');

export function getAllArticles(): Article[] {
  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith('.mdx'));
  return files
    .map((file) => {
      const raw = fs.readFileSync(path.join(CONTENT_DIR, file), 'utf8');
      const { data, content } = matter(raw);
      return { ...(data as ArticleFrontmatter), content };
    })
    .sort((a, b) => (a.dateModified < b.dateModified ? 1 : -1));
}

export function getArticleBySlug(slug: string): Article | null {
  const file = path.join(CONTENT_DIR, `${slug}.mdx`);
  if (!fs.existsSync(file)) return null;
  const raw = fs.readFileSync(file, 'utf8');
  const { data, content } = matter(raw);
  return { ...(data as ArticleFrontmatter), content };
}

export function getArticleSlugs(): string[] {
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace(/\.mdx$/, ''));
}

export function getArticlesByBranch(branch: ArticleFrontmatter['branch']): Article[] {
  return getAllArticles().filter((a) => a.branch === branch);
}

export function getLiveArticles(): Article[] {
  return getAllArticles().filter((a) => a.status === 'live');
}
