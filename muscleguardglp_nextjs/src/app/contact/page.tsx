import type { Metadata } from 'next';
import { SITE } from '@/lib/site';
import { BreadcrumbSchema } from '@/components/schema/BreadcrumbList';
import { JsonLd } from '@/components/schema/JsonLd';

export const metadata: Metadata = {
  title: 'Contact — Muscle Guard',
  description: 'Get in touch with Muscle Guard. Support, research, and privacy contacts.',
  alternates: { canonical: `${SITE.url}/contact/` },
};

const channels = [
  { label: 'General support', email: SITE.emails.support, purpose: 'App help, billing, bug reports. Response in one working day.' },
  { label: 'Research & editorial', email: SITE.emails.research, purpose: 'Citations, study suggestions, factual corrections to research articles.' },
  { label: 'Privacy & data requests', email: SITE.emails.privacy, purpose: 'Data access, deletion, POPIA/GDPR/CCPA inquiries.' },
];

export default function ContactPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', path: '/' }, { name: 'Contact', path: '/contact/' }]} />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          url: `${SITE.url}/contact/`,
          publisher: {
            '@type': 'Organization',
            name: SITE.legalName,
            contactPoint: channels.map((c) => ({
              '@type': 'ContactPoint',
              email: c.email,
              contactType: c.label,
            })),
          },
        }}
      />

      <section className="py-16">
        <div className="wrap mx-auto max-w-prose">
          <div className="eyebrow eyebrow-green mb-3">Contact</div>
          <h1 className="mb-4">Get in touch</h1>
          <p className="mb-10 text-[17px] text-muted">
            Three channels. Pick the right one and we&apos;ll get back faster.
          </p>

          {channels.map((c) => (
            <div key={c.email} className="mb-6 rounded-card border border-rule bg-white p-6">
              <h3 className="mb-2 text-[18px]">{c.label}</h3>
              <p className="mb-3 text-[14px] text-muted">{c.purpose}</p>
              <a href={`mailto:${c.email}`} className="text-brand-green">{c.email}</a>
            </div>
          ))}

          <p className="mt-8 text-[14px] text-muted">
            {SITE.legalName} · {SITE.legalCity}, South Africa
          </p>
        </div>
      </section>
    </>
  );
}
