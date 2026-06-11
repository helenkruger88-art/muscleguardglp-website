import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE } from '@/lib/site';
import { FAQPageSchema } from '@/components/schema/FAQPage';
import { BreadcrumbSchema } from '@/components/schema/BreadcrumbList';

export const metadata: Metadata = {
  title: 'FAQ — Muscle Guard',
  description:
    'Common questions about Muscle Guard — the app, pricing, supported GLP-1 medications, privacy, and data deletion.',
  alternates: { canonical: `${SITE.url}/faq/` },
};

const sections = [
  {
    heading: 'About Muscle Guard',
    items: [
      {
        q: 'What is Muscle Guard?',
        a: 'Muscle Guard is the GLP-1 companion app built around muscle preservation. It tracks injections and tablets, scans plates with AI, monitors body composition, and helps you protect lean mass while you lose fat on every approved GLP-1 — including compounded preparations.',
      },
      {
        q: 'Is Muscle Guard a medical device?',
        a: 'No. Muscle Guard is a self-tracking companion and coach. It is not a medical device, does not provide diagnostic information, does not recommend dose changes, and does not substitute for clinical judgement. Always consult your healthcare provider for medical decisions.',
      },
      {
        q: 'How is Muscle Guard different from other GLP-1 trackers?',
        a: 'Muscle Guard is the only one built around muscle preservation as the headline. We are the only one with a free, cited research library on lean mass loss, and the only one whose hero metric (the Muscle Guard Score) combines protein adherence, training frequency, and body composition into a single weekly read.',
      },
      {
        q: 'Which GLP-1 medications does Muscle Guard support?',
        a: 'Ozempic and Wegovy (semaglutide), Mounjaro and Zepbound (tirzepatide), Rybelsus (oral semaglutide), Saxenda (liraglutide), plus compounded semaglutide and tirzepatide preparations. The app knows the standard titration schedule for each.',
      },
      {
        q: 'Where is Muscle Guard built?',
        a: 'In Johannesburg, by HK Brand Expert (Pty) Ltd. Read more on our story page.',
      },
    ],
  },
  {
    heading: 'Using the app',
    items: [
      {
        q: 'How much does Muscle Guard cost?',
        a: 'Free forever for the basics. Pro is R99 per month or R899 per year (approximately USD 5.99, EUR 5.99, GBP 4.99 in equivalent regions), with a 7-day free trial. No card needed to start.',
      },
      {
        q: 'How do I cancel Pro?',
        a: 'Through your App Store or Google Play subscription settings. Your Pro access continues until the end of the current billing period.',
      },
      {
        q: 'Does it work with Apple Watch, Whoop, or Oura?',
        a: 'Yes — HealthKit and Health Connect integration is available in v1.0. Strength sessions, weight, and step counts sync automatically.',
      },
      {
        q: 'Where is the AI plate scan data sent?',
        a: 'Macro detection runs through Google Gemini. The image is not stored after processing. Packaged-food lookups use Open Food Facts. Both are disclosed transparently in-app.',
      },
      {
        q: 'Is Muscle Guard available in my country?',
        a: 'Available worldwide on the App Store and Google Play. ZAR is the default; toggle USD, EUR, or GBP on the pricing strip.',
      },
      {
        q: 'Can I use Muscle Guard with compounded semaglutide or tirzepatide?',
        a: 'Yes. First-class support, with custom dose schedules.',
      },
      {
        q: 'My GLP-1 has stopped working — what does Muscle Guard show me?',
        a: 'Plateaus and tachyphylaxis are common. The app activates a 14-day Plateau Breaker protocol that adjusts macros and training, and tracks the change in your weekly Muscle Guard Score. You can also export a Clinical Report to share with your healthcare provider at your next visit.',
      },
    ],
  },
  {
    heading: 'Privacy and data',
    items: [
      {
        q: 'How do I delete my account?',
        a: 'In the app: Profile → Delete Account → confirm twice. All data is removed within 7 days. No retention, no recovery period beyond that.',
      },
      {
        q: 'What about my data privacy?',
        a: 'We never sell your data. No third-party advertising trackers. POPIA, GDPR, and CCPA compliant. Read our full privacy policy.',
      },
      {
        q: 'Do you use third-party trackers?',
        a: 'No advertising or marketing trackers. We use privacy-friendly, cookieless analytics (Plausible) only to count page views by region — no personal data, no fingerprinting.',
      },
      {
        q: 'Where is my data stored?',
        a: 'EU-region data hosting for European users. South African and US users are routed to the nearest compliant region. Full data residency breakdown in the privacy policy.',
      },
    ],
  },
];

export default function FAQPage() {
  const allItems = sections.flatMap((s) => s.items);
  return (
    <>
      <FAQPageSchema items={allItems} />
      <BreadcrumbSchema items={[{ name: 'Home', path: '/' }, { name: 'FAQ', path: '/faq/' }]} />

      <section className="py-16">
        <div className="wrap mx-auto max-w-prose">
          <div className="mb-12 text-center">
            <div className="eyebrow eyebrow-green mb-3">Frequently asked questions</div>
            <h1 className="mb-4">Common questions about Muscle Guard</h1>
            <p className="text-[17px] text-muted">
              Can&apos;t find what you need? Email{' '}
              <a href={`mailto:${SITE.emails.support}`}>{SITE.emails.support}</a>.
            </p>
          </div>

          {sections.map((section) => (
            <div key={section.heading} className="mb-12">
              <h2 className="mb-4 text-[22px]">{section.heading}</h2>
              {section.items.map((item) => (
                <details key={item.q} className="border-b border-rule py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between text-[17px] font-medium">
                    {item.q}
                    <span className="ml-4 text-[24px] text-brand-green">+</span>
                  </summary>
                  <p className="mt-3 text-muted">{item.a}</p>
                </details>
              ))}
            </div>
          ))}

          <p className="mt-16 text-center text-[13px] italic text-muted">{SITE.disclaimer}</p>

          <div className="mt-8 text-center">
            <Link className="btn" href="/research/">
              Read the research →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
