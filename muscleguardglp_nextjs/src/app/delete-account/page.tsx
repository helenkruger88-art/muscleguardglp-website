import type { Metadata } from 'next';
import { SITE } from '@/lib/site';
import { BreadcrumbSchema } from '@/components/schema/BreadcrumbList';

export const metadata: Metadata = {
  title: 'Delete my account — Muscle Guard',
  description: 'How to delete your Muscle Guard account and all associated data.',
  alternates: { canonical: `${SITE.url}/delete-account/` },
};

export default function DeleteAccountPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', path: '/' }, { name: 'Delete account', path: '/delete-account/' }]} />
      <section className="py-16">
        <div className="article-prose px-6">
          <div className="eyebrow eyebrow-green mb-3">Account deletion</div>
          <h1 className="mb-6">Delete your Muscle Guard account</h1>

          <h2 className="mt-10">In the app</h2>
          <ol>
            <li>Open Muscle Guard.</li>
            <li>Tap <strong>Profile</strong> in the bottom navigation.</li>
            <li>Scroll to <strong>Settings → Delete Account</strong>.</li>
            <li>Confirm twice. Your account and all associated data are removed within 7 days.</li>
          </ol>

          <h2 className="mt-10">Via email</h2>
          <p>
            If you cannot access the app, email{' '}
            <a href={`mailto:${SITE.emails.privacy}`}>{SITE.emails.privacy}</a> from the address associated with your
            account with the subject line &ldquo;Delete my account.&rdquo; We confirm within 1 working day and complete
            the deletion within 7 days.
          </p>

          <h2 className="mt-10">What gets deleted</h2>
          <ul>
            <li>Account credentials (email, region).</li>
            <li>All medication, meal, training, body composition, weight, mood, and symptom entries.</li>
            <li>Progress photos.</li>
            <li>Generated Clinical Report PDFs.</li>
          </ul>

          <p>
            No retention beyond 7 days. No backup recovery. No exception.
          </p>
        </div>
      </section>
    </>
  );
}
