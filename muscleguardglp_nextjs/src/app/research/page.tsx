import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllArticles, getArticlesByBranch } from '@/lib/articles';
import { RESEARCH_BRANCHES, SITE } from '@/lib/site';
import { BreadcrumbSchema } from '@/components/schema/BreadcrumbList';
import { JsonLd } from '@/components/schema/JsonLd';

export const metadata: Metadata = {
  title: 'Research Hub — GLP-1, muscle loss, and how to protect what you keep',
  description:
    'A free, cited library of evidence on GLP-1 medications and lean mass. 14 articles, peer-reviewed sources, updated monthly. Built by Muscle Guard.',
  alternates: { canonical: `${SITE.url}/research/` },
};

export default function ResearchHubPage() {
  // Only show live articles publicly. Stubs are tracked in the codebase
  // but hidden from the Hub until their content + citations are finished.
  const liveArticles = getAllArticles().filter((a) => a.status === 'live');
  const liveCount = liveArticles.length;
  const lastUpdated = liveArticles[0]?.dateModified ?? '2026-06-10';

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', path: '/' },
          { name: 'Research', path: '/research/' },
        ]}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          itemListElement: liveArticles.map((a, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            url: `${SITE.url}/research/${a.slug}/`,
            name: a.title,
          })),
        }}
      />

      <section
        className="py-16"
        style={{ background: 'linear-gradient(180deg, var(--brand-green-bg) 0%, white 100%)' }}
      >
        <div className="wrap">
          <div className="eyebrow eyebrow-green mb-3">The Muscle Guard Research Hub</div>
          <h1 className="mb-4 max-w-[24ch]">The science on GLP-1s, muscle, and how to protect what you keep.</h1>
          <p className="mb-6 max-w-[60ch] text-[18px] text-muted">
            In plain English. Cited. Updated when the science updates. Free to read, free to share.
          </p>
          <p className="mb-6 text-[14px] text-muted">
            {liveCount} articles · cited · last updated {lastUpdated}
          </p>
          <div className="flex flex-wrap gap-3">
            <Link className="btn" href="/research/glp1-and-muscle-loss/">
              Read the cornerstone: GLP-1 and muscle loss
            </Link>
            <Link className="btn btn-outline" href="#branches">
              Browse the library →
            </Link>
          </div>
        </div>
      </section>

      <section id="branches" className="py-16">
        <div className="wrap">
          {RESEARCH_BRANCHES.map((branch) => {
            const branchArticles = getArticlesByBranch(branch.slug).filter((a) => a.status === 'live');
            if (branchArticles.length === 0) return null;
            return (
              <div key={branch.slug} className="mb-16">
                <h2 className="mb-3">{branch.title}</h2>
                <p className="mb-6 max-w-prose text-[17px] text-muted">{branch.summary}</p>
                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                  {branchArticles.map((a) => (
                    <Link
                      key={a.slug}
                      href={`/research/${a.slug}/`}
                      className="block rounded-card border border-rule bg-white p-6 no-underline transition hover:border-brand-green"
                    >
                      <h3 className="mb-2 text-[18px] text-ink">{a.title}</h3>
                      <p className="text-[14px] text-muted">{a.description}</p>
                      <div className="mt-4 text-[12px] uppercase tracking-[1px] text-muted">
                        {a.dateModified}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-brand-green-bg py-12">
        <div className="wrap mx-auto max-w-prose text-center">
          <h3 className="mb-3">Sources, cited and dated</h3>
          <p className="text-[14px] text-muted">
            Every claim in the Research Hub links to its peer-reviewed source. We change anything we get wrong. Email{' '}
            <a href={`mailto:${SITE.emails.research}`}>{SITE.emails.research}</a> if you spot an error or have a study to flag.
          </p>
        </div>
      </section>
    </>
  );
}
