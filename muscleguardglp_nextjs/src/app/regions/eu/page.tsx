import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE } from '@/lib/site';
import { BreadcrumbSchema } from '@/components/schema/BreadcrumbList';
import { StoreButtons } from '@/components/StoreButtons';
import { FAQPageSchema } from '@/components/schema/FAQPage';

export const metadata: Metadata = {
  title: 'Muscle Guard EU — GDPR-native GLP-1 tracker',
  description:
    'The GLP-1 companion built around muscle preservation. €5.99/month. GDPR-native by architecture. EU-region data hosting. Built for Wegovy, Mounjaro, Ozempic, plus compounded preparations.',
  alternates: {
    canonical: `${SITE.url}/regions/eu/`,
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
    q: 'Is Muscle Guard GDPR-compliant?',
    a: 'Yes — GDPR-native by architecture. EU-region data hosting for European users. One-tap account deletion. No third-party advertising trackers. Read the full privacy policy for details.',
  },
  {
    q: 'Where is my data stored?',
    a: 'EU users are routed to EU-region storage. Personal data is not transferred outside the EU without your explicit consent.',
  },
  {
    q: 'How much is Muscle Guard Pro in EUR?',
    a: '€5.99 per month or €59.99 per year. 7-day free trial, no card needed.',
  },
  {
    q: 'Does Muscle Guard support Rybelsus and oral semaglutide?',
    a: 'Yes — oral semaglutide tracking is first-class. The app knows the standard daily Rybelsus titration schedule.',
  },
];

export default function RegionEUPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', path: '/' }, { name: 'European Union', path: '/regions/eu/' }]} />
      <FAQPageSchema items={regionFaq} />

      <section className="py-16" style={{ background: 'linear-gradient(180deg, var(--brand-green-bg) 0%, white 100%)' }}>
        <div className="wrap">
          <div className="eyebrow eyebrow-green mb-3">European Union</div>
          <h1 className="mb-4">A GLP-1 app that&apos;s quiet about you.</h1>
          <p className="mb-6 max-w-[60ch] text-[17px] text-muted">
            GDPR-native by architecture. EU-region data hosting. No third-party trackers. Delete your account in one tap. Track your GLP-1 journey and protect your muscle, on every approved drug — including compounded preparations.
          </p>
          <p className="mb-6 text-[14px] text-muted">
            <strong>Built for:</strong> Wegovy, Rybelsus, Saxenda and Mounjaro, plus Ozempic and compounded preparations. Oral semaglutide-ready.
          </p>
          <p className="mb-6 text-[14px] font-medium">
            €5.99/month · €59.99/year · 7-day free trial, no card needed · GDPR-native, EU-hosted
          </p>
          <StoreButtons />
        </div>
      </section>

      <section className="py-16">
        <div className="wrap mx-auto max-w-prose">
          <h2 className="mb-4">EU FAQ</h2>
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
