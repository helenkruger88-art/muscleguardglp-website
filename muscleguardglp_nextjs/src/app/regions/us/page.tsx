import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE } from '@/lib/site';
import { BreadcrumbSchema } from '@/components/schema/BreadcrumbList';
import { StoreButtons } from '@/components/StoreButtons';
import { FAQPageSchema } from '@/components/schema/FAQPage';

export const metadata: Metadata = {
  title: 'Muscle Guard US — GLP-1 muscle preservation tracker',
  description:
    'The GLP-1 companion built around muscle preservation. $5.99/month, $54.99/year, 7-day free trial. Built for Wegovy, Zepbound, Mounjaro, Ozempic, plus compounded preparations.',
  alternates: {
    canonical: `${SITE.url}/regions/us/`,
    languages: {
      'en-za': `${SITE.url}/regions/za/`,
      'en-us': `${SITE.url}/regions/us/`,
      en: `${SITE.url}/regions/eu/`,
      'x-default': SITE.url,
    },
  },
};

const regionFaq = [
  {
    q: 'Does Muscle Guard work with HSA or FSA?',
    a: 'Muscle Guard subscriptions are billed through the App Store or Google Play and are not currently HSA/FSA-eligible. Many third-party HSA admins will accept them as wellness expenses — check your plan.',
  },
  {
    q: 'Does Muscle Guard track Wegovy, Zepbound, Mounjaro, and Ozempic?',
    a: 'Yes — all four are first-class. The app knows the standard titration schedule for each. Compounded semaglutide and tirzepatide are also supported with custom dose schedules.',
  },
  {
    q: 'How much is Muscle Guard Pro in USD?',
    a: '$5.99 per month or $54.99 per year. 7-day free trial, no card needed.',
  },
];

export default function RegionUSPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', path: '/' }, { name: 'United States', path: '/regions/us/' }]} />
      <FAQPageSchema items={regionFaq} />

      <section className="py-16" style={{ background: 'linear-gradient(180deg, var(--brand-green-bg) 0%, white 100%)' }}>
        <div className="wrap">
          <div className="eyebrow eyebrow-green mb-3">United States</div>
          <h1 className="mb-4">{SITE.hero.h1Part1} <span className="text-brand-green">{SITE.hero.h1Part2}</span></h1>
          <p className="mb-6 max-w-[60ch] text-[17px] text-muted">
            GLP-1 medications burn fat. Without intervention, 25 to 40 percent of what you lose can be lean muscle, not fat. Muscle Guard tracks the protein-and-training playbook that drops that figure substantially — across every GLP-1 approved in the US, including compounded preparations.
          </p>
          <p className="mb-6 text-[14px] text-muted">
            <strong>Built for:</strong> Wegovy, Zepbound, Mounjaro and Ozempic, plus Rybelsus, Saxenda and compounded preparations.
          </p>
          <p className="mb-6 text-[14px] font-medium">
            $5.99/month · $54.99/year · 7-day free trial, no card needed · Cancel anytime
          </p>
          <StoreButtons />
        </div>
      </section>

      <section className="py-16">
        <div className="wrap mx-auto max-w-prose">
          <h2 className="mb-4">US FAQ</h2>
          {regionFaq.map((item) => (
            <details key={item.q} className="border-b border-rule py-4">
              <summary className="cursor-pointer text-[17px] font-medium">{item.q}</summary>
              <p className="mt-3 text-muted">{item.a}</p>
            </details>
          ))}
          <p className="mt-10 text-center">
            <Link className="btn" href="/research/">Read the research →</Link>
          </p>
        </div>
      </section>
    </>
  );
}
