import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE } from '@/lib/site';
import { BreadcrumbSchema } from '@/components/schema/BreadcrumbList';
import { JsonLd } from '@/components/schema/JsonLd';

export const metadata: Metadata = {
  title: 'Our story — Muscle Guard',
  description:
    'Why Muscle Guard was built in Johannesburg, and why muscle preservation became the headline. A short founder note from HK Brand Expert (Pty) Ltd.',
  alternates: { canonical: `${SITE.url}/story/` },
};

export default function StoryPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', path: '/' }, { name: 'Story', path: '/story/' }]} />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          headline: 'Our story — Muscle Guard',
          publisher: { '@type': 'Organization', name: SITE.legalName },
        }}
      />

      <section className="py-16">
        <div className="wrap mx-auto max-w-prose">
          <div className="eyebrow eyebrow-green mb-3">Story</div>
          <h1 className="mb-6">Why we built Muscle Guard.</h1>

          <p className="my-4 text-[17px] text-muted">
            Built in Johannesburg by HK Brand Expert (Pty) Ltd. Helen Kruger, founder.
          </p>

          <h2 className="mt-10">The moment</h2>
          <p>
            South Africa's GLP-1 conversation was almost entirely about weight loss. Almost nobody was talking about
            what users were keeping — or losing — alongside the fat. Twenty-five to forty percent of GLP-1 weight loss
            is lean muscle, without intervention. That figure changes lives at 50 and 60.
          </p>

          <h2 className="mt-10">Why Johannesburg</h2>
          <p>
            Compounded semaglutide and tirzepatide are how most South Africans actually access GLP-1s. ZAR pricing is
            the only honest framing. The tools available to track these journeys were built for US insurance markets
            and US pharmacy supply chains. None of them had ZAR. None of them had compounded sema as first-class. None
            of them put muscle preservation in the headline.
          </p>

          <h2 className="mt-10">Why muscle preservation as the headline</h2>
          <p>
            Because nobody else does, and the evidence supports it. Without intervention, lean mass loss accounts for
            roughly 25 to 40 percent of total weight loss on a GLP-1. With adequate protein and resistance training,
            that figure drops below 10. The plan is well-established. The tracking — until Muscle Guard — was not.
          </p>

          <h2 className="mt-10">What Muscle Guard will never be</h2>
          <ul>
            <li>A clinical tool. The boundary is real and load-bearing — we are a self-tracking companion and coach, not a medical device.</li>
            <li>A telehealth front-end. We don&apos;t sell the drug. We don&apos;t take affiliate revenue from anyone who does.</li>
            <li>A data broker. No third-party trackers. Delete your account in one tap. POPIA, GDPR, CCPA-native.</li>
          </ul>

          <h2 className="mt-10">Get in touch</h2>
          <p>
            Email <a href={`mailto:${SITE.emails.support}`}>{SITE.emails.support}</a> for product. Research questions go to{' '}
            <a href={`mailto:${SITE.emails.research}`}>{SITE.emails.research}</a>. Privacy questions to{' '}
            <a href={`mailto:${SITE.emails.privacy}`}>{SITE.emails.privacy}</a>.
          </p>

          <p className="mt-12 text-center">
            <Link className="btn" href="/research/">Read the research →</Link>
          </p>

          <p className="mt-12 text-center text-[13px] italic text-muted">{SITE.disclaimer}</p>
        </div>
      </section>
    </>
  );
}
