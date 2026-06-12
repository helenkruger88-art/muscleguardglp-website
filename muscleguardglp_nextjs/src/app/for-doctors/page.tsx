import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE } from '@/lib/site';
import { BreadcrumbSchema } from '@/components/schema/BreadcrumbList';
import { JsonLd } from '@/components/schema/JsonLd';

// Per build brief §0: /for-doctors is a footer-only secondary page. Demoted from primary nav.
// Per Article schema rule (Build Spec v2 §5): use generic Audience, not MedicalAudience —
// keeps the brand outside Google's YMYL/medical-device handling.

export const metadata: Metadata = {
  title: 'For doctors — context on Muscle Guard',
  description:
    'A short explainer for doctors whose patients use Muscle Guard. The app is a self-tracking companion and coach — not a medical device. This page exists so you have context.',
  alternates: { canonical: `${SITE.url}/for-doctors/` },
  robots: { index: true, follow: true },
};

export default function ForDoctorsPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', path: '/' }, { name: 'For doctors', path: '/for-doctors/' }]} />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'For doctors — Muscle Guard',
          audience: { '@type': 'Audience', audienceType: 'healthcare provider' },
          url: `${SITE.url}/for-doctors/`,
        }}
      />

      <section className="py-16">
        <div className="wrap mx-auto max-w-prose">
          <div className="eyebrow mb-3">For doctors</div>
          <h1 className="mb-6">Context on the app your patient is using.</h1>

          <div className="my-8 rounded-lg border-l-4 border-brand-green bg-brand-green-bg px-5 py-4">
            <strong>You&apos;re probably here</strong> because a patient mentioned this app. Muscle Guard is a
            self-tracking companion and coach — not a medical device, not a diagnostic tool, and not affiliated with
            any prescriber. This page exists so you have context.
          </div>

          <h2 className="mt-10">What the app tracks</h2>
          <p>
            Muscle Guard is a daily companion for people on GLP-1 medications. It tracks injections and oral doses
            (including Rybelsus, compounded semaglutide, and compounded tirzepatide), logs meals via AI plate scan,
            tracks strength training, monitors body composition (waist, hip, neck, body-fat estimate, visceral-fat
            rating), and combines all of this into a single weekly Muscle Guard Score.
          </p>

          <h2 className="mt-10">The Clinical Report your patient may hand you</h2>
          <p>
            The app generates a one-page PDF the patient can share with you at a visit. It contains:
          </p>
          <ul>
            <li>Medication log — drug, dose, escalation schedule, missed shots flagged</li>
            <li>Weight and body composition trend — 12-week line chart with milestone markers</li>
            <li>Side-effect timeline — colour-coded by severity, clustered by week</li>
            <li>Protein adherence and training frequency — the lean-mass-preservation signal</li>
            <li>Muscle Guard Score — a single composite metric</li>
            <li>Patient-volunteered notes — what the patient wants you to know</li>
          </ul>
          <p>
            The patient generates it. The patient shares it. We never communicate with you directly or store identifying
            information about you. The report is shaped for a 60-second read.
          </p>

          <h2 className="mt-10">What Muscle Guard is not</h2>
          <p className="font-medium">
            {SITE.disclaimer}
          </p>
          <p>
            We do not provide diagnostic information, do not recommend dose changes, and do not substitute for clinical
            judgement. The Clinical Report is a structured record of what the patient is doing between visits — formatted
            for your eye, but generated and owned entirely by them.
          </p>

          <h2 className="mt-10">Privacy posture</h2>
          <ul>
            <li>POPIA-compliant (South Africa), GDPR-compliant (EU), CCPA-compliant (California).</li>
            <li>No selling of patient data. No third-party advertising trackers.</li>
            <li>Patient can delete their account and all associated data in one tap.</li>
            <li>The Clinical Report is generated on-device and shared at the patient&apos;s discretion only.</li>
          </ul>

          <h2 className="mt-10">Questions?</h2>
          <p>
            Email <a href={`mailto:${SITE.emails.support}`}>{SITE.emails.support}</a> for product questions or{' '}
            <a href={`mailto:${SITE.emails.research}`}>{SITE.emails.research}</a> for editorial / research questions.
          </p>

          <p className="mt-12">
            <Link className="btn btn-outline" href="/research/">Read the underlying research →</Link>
          </p>
        </div>
      </section>
    </>
  );
}
