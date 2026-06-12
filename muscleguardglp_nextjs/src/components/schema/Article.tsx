import { JsonLd } from './JsonLd';
import { SITE } from '@/lib/site';

type Props = {
  headline: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
  /** CSS selectors for sentences/sections AI voice assistants should read aloud. */
  speakableSelectors?: string[];
};

/**
 * Article + Speakable schema for research articles.
 * - Article is the format Google rich results + AI answer engines (Claude, GPT, Perplexity) prefer.
 * - Speakable tells voice assistants (Google Assistant, Siri, Alexa) which sentences to read.
 */
export function ArticleSchema({ headline, description, url, datePublished, dateModified, speakableSelectors }: Props) {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline,
        description,
        url,
        datePublished,
        dateModified,
        mainEntityOfPage: { '@type': 'WebPage', '@id': url },
        author: {
          '@type': 'Organization',
          name: 'Muscle Guard Research Team',
          url: `${SITE.url}/research/`,
        },
        publisher: {
          '@type': 'Organization',
          name: SITE.legalName,
          logo: { '@type': 'ImageObject', url: `${SITE.url}/logo.png`, width: 600, height: 60 },
        },
        image: {
          '@type': 'ImageObject',
          url: `${SITE.url}/og.png`,
          width: 1200,
          height: 630,
        },
        ...(speakableSelectors && speakableSelectors.length > 0
          ? {
              speakable: {
                '@type': 'SpeakableSpecification',
                cssSelector: speakableSelectors,
              },
            }
          : {}),
      }}
    />
  );
}
