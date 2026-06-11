import { JsonLd } from './JsonLd';
import { SITE } from '@/lib/site';

type Item = { name: string; path: string };

export function BreadcrumbSchema({ items }: { items: Item[] }) {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: item.name,
          item: `${SITE.url}${item.path}`,
        })),
      }}
    />
  );
}
