import type { Metadata } from 'next';
import { SITE } from '@/lib/site';
import { BreadcrumbSchema } from '@/components/schema/BreadcrumbList';

export const metadata: Metadata = {
  title: 'Terms of Service — Muscle Guard',
  description: 'Muscle Guard terms of service. Self-tracking companion app for people on GLP-1 medications.',
  alternates: { canonical: `${SITE.url}/terms/` },
};

export default function TermsPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', path: '/' }, { name: 'Terms', path: '/terms/' }]} />
      <section className="py-16">
        <div className="article-prose px-6">
          <div className="eyebrow eyebrow-green mb-3">Terms</div>
          <h1 className="mb-6">Terms of service</h1>
          <p className="text-muted">Last updated: 2026-06-10</p>

          <h2 className="mt-10">What Muscle Guard is</h2>
          <p>{SITE.disclaimer}</p>

          <h2 className="mt-10">Your account</h2>
          <p>
            You are responsible for keeping your account credentials secure. You may delete your account at any time
            from within the app — all associated data is removed within 7 days.
          </p>

          <h2 className="mt-10">Pro subscriptions</h2>
          <p>
            Pro subscriptions are billed monthly or annually through the Apple App Store or Google Play. Cancel at any
            time through your store subscription settings. Cancellation takes effect at the end of the current billing
            period.
          </p>
          <p>
            The 7-day free trial requires no card. After the trial, you can choose to subscribe or continue with the
            free tier.
          </p>

          <h2 className="mt-10">Acceptable use</h2>
          <p>
            Use Muscle Guard for personal self-tracking only. Do not attempt to reverse-engineer, scrape, or resell the
            app or any data within it.
          </p>

          <h2 className="mt-10">Limitation of liability</h2>
          <p>
            Muscle Guard is provided &ldquo;as is.&rdquo; The information in the app and on this site is for informational and
            tracking purposes only. {SITE.legalName} is not liable for any health outcome related to the use of GLP-1
            medications or the use of this app. Always consult your healthcare provider for medical decisions.
          </p>

          <h2 className="mt-10">Governing law</h2>
          <p>
            These terms are governed by the laws of the Republic of South Africa. Disputes are resolved in the courts
            of Johannesburg, unless local law requires otherwise.
          </p>

          <h2 className="mt-10">Contact</h2>
          <p>
            Questions: <a href={`mailto:${SITE.emails.support}`}>{SITE.emails.support}</a>.
          </p>
        </div>
      </section>
    </>
  );
}
