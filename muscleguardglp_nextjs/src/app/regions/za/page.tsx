import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE } from '@/lib/site';
import { BreadcrumbSchema } from '@/components/schema/BreadcrumbList';
import { StoreButtons } from '@/components/StoreButtons';
import { FAQPageSchema } from '@/components/schema/FAQPage';

export const metadata: Metadata = {
  title: 'Muscle Guard South Africa — GLP-1 tracker in ZAR',
  description:
    'The GLP-1 companion built around muscle preservation. Built in Johannesburg. R99/month, R899/year, 7-day free trial. First-class support for compounded semaglutide and tirzepatide.',
  alternates: {
    canonical: `${SITE.url}/regions/za/`,
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
    q: 'Does Muscle Guard work with compounded semaglutide and tirzepatide in South Africa?',
    a: 'Yes — first-class. The app knows the standard titration schedules for compounded sema and tirz, and lets you log custom dose schedules from your pharmacy.',
  },
  {
    q: 'Can I claim Muscle Guard on medical aid?',
    a: 'Muscle Guard is a self-funded R99/month or R899/year app — not a medical service. Most SA medical aids do not yet cover tracking apps. Check with your scheme.',
  },
  {
    q: 'How much is Muscle Guard Pro in ZAR?',
    a: 'R99 per month or R899 per year (save 24%). 7-day free trial, no card needed.',
  },
];

export default function RegionZAPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', path: '/' }, { name: 'South Africa', path: '/regions/za/' }]} />
      <FAQPageSchema items={regionFaq} />

      <section className="py-16" style={{ background: 'linear-gradient(180deg, var(--brand-green-bg) 0%, white 100%)' }}>
        <div className="wrap">
          <div className="eyebrow eyebrow-green mb-3">South Africa</div>
          <h1 className="mb-4">Built in Johannesburg, for the GLP-1 you can actually get.</h1>
          <p className="mb-6 max-w-[60ch] text-[17px] text-muted">{SITE.hero.body}</p>
          <p className="mb-6 text-[14px] text-muted">
            <strong>Built for:</strong> Compounded semaglutide and tirzepatide, plus Ozempic, Wegovy, Mounjaro, Zepbound, Rybelsus and Saxenda.
          </p>
          <p className="mb-6 text-[14px] font-medium">
            R99/month · R899/year (save 24%) · 7-day free trial, no card needed
          </p>
          <StoreButtons />
        </div>
      </section>

      <section className="py-16">
        <div className="wrap mx-auto max-w-prose">
          <h2 className="mb-4">South Africa FAQ</h2>
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
