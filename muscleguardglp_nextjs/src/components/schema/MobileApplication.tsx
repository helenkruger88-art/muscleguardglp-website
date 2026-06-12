import { JsonLd } from './JsonLd';
import { SITE } from '@/lib/site';

// Per build brief §C1: MobileApplication on homepage.
// Regional offers each declare priceCurrency + eligibleRegion so AI engines
// can pick the right price by visitor locale.
export function MobileApplicationSchema() {
  const plans = SITE.pricing.plans;
  const offers = [
    { region: 'ZA', currency: 'ZAR', price: plans.ZAR.monthlyAmount },
    { region: 'US', currency: 'USD', price: plans.USD.monthlyAmount },
    { region: ['DE', 'FR', 'ES', 'IT', 'NL', 'BE', 'IE', 'AT', 'PT'], currency: 'EUR', price: plans.EUR.monthlyAmount },
    { region: 'GB', currency: 'GBP', price: plans.GBP.monthlyAmount },
  ];

  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'MobileApplication',
        name: SITE.name,
        applicationCategory: 'HealthApplication',
        operatingSystem: 'iOS, Android',
        description: SITE.description,
        offers: offers.map((o) => ({
          '@type': 'Offer',
          price: o.price,
          priceCurrency: o.currency,
          eligibleRegion: o.region,
        })),
        publisher: {
          '@type': 'Organization',
          name: SITE.legalName,
          address: {
            '@type': 'PostalAddress',
            addressLocality: SITE.legalCity,
            addressCountry: SITE.legalCountry,
          },
        },
        // Per build brief §3.9: only add AggregateRating once real ratings exist.
        // TODO: enable when ratings are real.
      }}
    />
  );
}
