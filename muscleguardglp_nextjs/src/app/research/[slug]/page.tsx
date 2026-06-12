import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import { getArticleBySlug, getArticleSlugs, getAllArticles } from '@/lib/articles';
import { MedicalWebPageSchema } from '@/components/schema/MedicalWebPage';
import { BreadcrumbSchema } from '@/components/schema/BreadcrumbList';
import { ArticleSchema } from '@/components/schema/Article';
import { HowToSchema } from '@/components/schema/HowTo';
import { SITE } from '@/lib/site';

// The muscle-preservation prevention plan — extracted as HowTo schema for the cornerstone article.
// Source: Phase-3 GLP-1 body-composition substudies; structured-intervention arms.
const PRESERVATION_HOWTO = {
  name: 'How to preserve muscle on a GLP-1',
  description: 'The four-pillar prevention plan that drops lean-mass-loss share on GLP-1 medications.',
  totalTime: 'P12W',
  steps: [
    { name: 'Hit a daily protein floor', text: 'Aim for 1.2 to 1.6 g of protein per kg of body weight per day — about 90 to 120 g for many adults.' },
    { name: 'Resistance train 2–4× per week', text: 'Hit each major movement pattern (squat, hinge, push, pull, core) at least once a week.' },
    { name: 'Avoid extreme calorie restriction', text: 'A moderate deficit preserves lean mass. Below 1,200 kcal accelerates muscle loss.' },
    { name: 'Track strength and body composition', text: 'Weight alone hides the loss. Track waist, hip, neck, training volume, and weekly photos.' },
  ],
};

export async function generateStaticParams() {
  return getArticleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: `${SITE.url}/research/${article.slug}/` },
    openGraph: {
      type: 'article',
      url: `${SITE.url}/research/${article.slug}/`,
      title: article.title,
      description: article.description,
      publishedTime: article.datePublished,
      modifiedTime: article.dateModified,
    },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  // Related articles — siblings from the same branch, capped at 3.
  const related = getAllArticles()
    .filter((a) => a.slug !== article.slug && a.branch === article.branch)
    .slice(0, 3);

  return (
    <>
      <MedicalWebPageSchema
        headline={article.title}
        description={article.description}
        url={`${SITE.url}/research/${article.slug}/`}
        datePublished={article.datePublished}
        dateModified={article.dateModified}
        citations={article.citations}
      />
      <ArticleSchema
        headline={article.title}
        description={article.description}
        url={`${SITE.url}/research/${article.slug}/`}
        datePublished={article.datePublished}
        dateModified={article.dateModified}
        speakableSelectors={['h1', '.article-prose p:first-of-type', '.article-prose h2 + p']}
      />
      {article.slug === 'glp1-and-muscle-loss' && (
        <HowToSchema
          name={PRESERVATION_HOWTO.name}
          description={PRESERVATION_HOWTO.description}
          totalTime={PRESERVATION_HOWTO.totalTime}
          steps={PRESERVATION_HOWTO.steps}
        />
      )}
      <BreadcrumbSchema
        items={[
          { name: 'Home', path: '/' },
          { name: 'Research', path: '/research/' },
          { name: article.title, path: `/research/${article.slug}/` },
        ]}
      />

      <section
        className="py-12"
        style={{ background: 'linear-gradient(180deg, var(--brand-green-bg) 0%, white 100%)' }}
      >
        <div className="wrap">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-4 text-[13px] text-muted">
            <Link href="/" className="text-muted no-underline hover:text-brand-green">Home</Link>
            {' › '}
            <Link href="/research/" className="text-muted no-underline hover:text-brand-green">Research</Link>
            {' › '}
            <span>{article.title}</span>
          </nav>

          <h1 className="mb-4 max-w-[34ch]">{article.title}</h1>
          <p className="mb-4 max-w-[60ch] text-[18px] text-muted">{article.description}</p>
          <p className="text-[13px] text-muted">
            By the Muscle Guard research team · Published {article.datePublished} · Last updated{' '}
            <strong>{article.dateModified}</strong>
          </p>
        </div>
      </section>

      <article className="article-prose px-6 py-12">
        {article.status === 'stub' && (
          <div className="mb-8 rounded-lg border-l-4 border-gold bg-gold-bg px-5 py-4 text-[14px]">
            <strong>This article is in preparation.</strong> A draft summary is below. The full cited version
            will publish soon. Subscribe at <a href={`mailto:${SITE.emails.research}`}>{SITE.emails.research}</a> to be told when it ships.
          </div>
        )}

        <MDXRemote
          source={article.content}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkGfm],
              rehypePlugins: [rehypeSlug],
            },
          }}
        />

        {/* Citations */}
        {article.citations && article.citations.length > 0 && (
          <section className="mt-12 border-t border-rule pt-8">
            <h2 className="mb-4 text-[22px]">Citations</h2>
            <ol className="text-[14px]">
              {article.citations.map((c) => (
                <li key={c.id} id={`cite-${c.id}`} className="mb-3">
                  {c.label}
                  {c.doi && (
                    <>
                      {' '}
                      <a href={`https://doi.org/${c.doi}`} target="_blank" rel="noopener noreferrer">
                        doi.org/{c.doi}
                      </a>
                    </>
                  )}
                  {c.url && !c.doi && (
                    <>
                      {' '}
                      <a href={c.url} target="_blank" rel="noopener noreferrer">{c.url}</a>
                    </>
                  )}
                </li>
              ))}
            </ol>
          </section>
        )}

        {/* Related */}
        {related.length > 0 && (
          <section className="mt-12 border-t border-rule pt-8">
            <h2 className="mb-4 text-[22px]">Related articles</h2>
            <div className="grid gap-4 md:grid-cols-3">
              {related.map((a) => (
                <Link
                  key={a.slug}
                  href={`/research/${a.slug}/`}
                  className="block rounded-card border border-rule bg-white p-5 no-underline hover:border-brand-green"
                >
                  <h3 className="mb-1 text-[16px] text-ink">{a.title}</h3>
                  <p className="text-[13px] text-muted">{a.description}</p>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Article CTA */}
        <section className="mt-12 rounded-card border border-rule bg-brand-green-bg p-8 text-center">
          <h3 className="mb-3">Track this with Muscle Guard</h3>
          <p className="mb-5 text-[14px] text-muted">
            The free app that puts muscle preservation in the headline. 7-day Pro trial, no card needed.
          </p>
          <Link className="btn" href="/#download">
            Get the app →
          </Link>
        </section>

        {/* Boundary statement, verbatim per build brief §2 */}
        <p className="mt-12 text-center text-[13px] italic text-muted">{SITE.disclaimer}</p>
      </article>
    </>
  );
}
