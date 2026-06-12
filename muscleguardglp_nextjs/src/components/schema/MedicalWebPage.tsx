import { JsonLd } from './JsonLd';
import { SITE } from '@/lib/site';

type Props = {
  headline: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
  citations?: Array<{ url?: string; doi?: string; label: string }>;
};

export function MedicalWebPageSchema({ headline, description, url, datePublished, dateModified, citations }: Props) {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'MedicalWebPage',
        headline,
        description,
        url,
        datePublished,
        dateModified,
        author: {
          '@type': 'Organization',
          name: 'Muscle Guard Research Hub',
          url: `${SITE.url}/research/`,
        },
        publisher: {
          '@type': 'Organization',
          name: SITE.legalName,
          logo: { '@type': 'ImageObject', url: `${SITE.url}/logo.png` },
        },
        citation: (citations ?? [])
          .map((c) => c.doi ? `https://doi.org/${c.doi}` : c.url)
          .filter(Boolean),
        about: {
          '@type': 'MedicalCondition',
          name: 'Sarcopenia',
        },
      }}
    />
  );
}
