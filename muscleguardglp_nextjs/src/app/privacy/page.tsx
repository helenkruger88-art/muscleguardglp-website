import type { Metadata } from 'next';
import { SITE } from '@/lib/site';
import { BreadcrumbSchema } from '@/components/schema/BreadcrumbList';

export const metadata: Metadata = {
  title: 'Privacy Policy — Muscle Guard',
  description: 'Muscle Guard privacy policy. No third-party trackers, one-tap delete, POPIA/GDPR/CCPA compliant.',
  alternates: { canonical: `${SITE.url}/privacy/` },
};

export default function PrivacyPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', path: '/' }, { name: 'Privacy', path: '/privacy/' }]} />
      <section className="py-16">
        <div className="article-prose px-6">
          <div className="eyebrow eyebrow-green mb-3">Privacy</div>
          <h1 className="mb-6">Privacy policy</h1>
          <p className="text-muted">Last updated: 2026-06-10</p>

          <h2 className="mt-10">Our promise</h2>
          <p>
            We never sell your data. We do not run third-party advertising trackers. We use privacy-friendly, cookieless
            analytics (Plausible) only to count page views by region. You can delete your account and all associated
            data in one tap.
          </p>

          <h2 className="mt-10">What we collect</h2>
          <ul>
            <li>Account: email, region (for currency).</li>
            <li>App usage: medications you log, meals scanned (image processed and discarded), training sessions, body composition entries, weight, mood, symptoms.</li>
            <li>Site usage: cookieless page-view counts (no IP, no fingerprinting, no cross-site tracking).</li>
          </ul>

          <h2 className="mt-10">Where data lives</h2>
          <p>
            EU users are routed to EU-region storage. South African users are routed to the nearest compliant region.
            US users are routed to US-region storage. We do not transfer personal data outside the region of origin.
          </p>

          <h2 className="mt-10">Your rights</h2>
          <p>Under POPIA (South Africa), GDPR (EU), and CCPA (California):</p>
          <ul>
            <li>Right to access — request a copy of your data.</li>
            <li>Right to delete — one-tap deletion in the app, full removal within 7 days.</li>
            <li>Right to correct — edit any entry from within the app.</li>
            <li>Right to portability — export your full history as JSON or CSV.</li>
          </ul>
          <p>
            Email <a href={`mailto:${SITE.emails.privacy}`}>{SITE.emails.privacy}</a> to exercise any of these rights.
          </p>

          <h2 className="mt-10">Third parties</h2>
          <p>
            Plate scan macro detection runs through Google Gemini. The image is not stored after processing. Packaged
            food lookups use Open Food Facts (an open community dataset). No advertising or marketing trackers, ever.
          </p>

          <h2 className="mt-10">Changes</h2>
          <p>
            Material changes to this policy are announced in-app at least 30 days before they take effect.
          </p>

          <p className="mt-12 text-[13px] italic text-muted">{SITE.disclaimer}</p>
        </div>
      </section>
    </>
  );
}
