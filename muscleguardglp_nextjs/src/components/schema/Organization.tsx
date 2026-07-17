import { JsonLd } from './JsonLd';
import { SITE } from '@/lib/site';

export function OrganizationSchema() {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: SITE.name,
        legalName: SITE.legalName,
        url: SITE.url,
        logo: `${SITE.url}/logo.png`,
        address: {
          '@type': 'PostalAddress',
          addressLocality: SITE.legalCity,
          addressCountry: SITE.legalCountry,
        },
        contactPoint: [
          { '@type': 'ContactPoint', email: SITE.emails.support, contactType: 'customer support' },
          { '@type': 'ContactPoint', email: SITE.emails.research, contactType: 'research' },
          { '@type': 'ContactPoint', email: SITE.emails.privacy, contactType: 'privacy' },
        ],
      }}
    />
  );
}

export function WebSiteSchema() {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: SITE.name,
        url: SITE.url,
        description: SITE.description,
        publisher: { '@type': 'Organization', name: SITE.legalName },
      }}
    />
  );
}
