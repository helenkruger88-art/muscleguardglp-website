import type { Metadata } from 'next';
import { SITE } from '@/lib/site';
import { BreadcrumbSchema } from '@/components/schema/BreadcrumbList';

export const metadata: Metadata = {
  title: 'Privacy Policy — Muscle Guard',
  description:
    'How Muscle Guard collects, uses, and protects user information. POPIA, GDPR, and CCPA compliant.',
  alternates: { canonical: `${SITE.url}/privacy/` },
};

export default function PrivacyPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', path: '/' },
          { name: 'Privacy Policy', path: '/privacy/' },
        ]}
      />

      <section className="py-16">
        <div className="wrap mx-auto max-w-prose">
          <div className="mb-10">
            <div className="eyebrow eyebrow-green mb-3">Privacy Policy</div>
            <h1 className="mb-4">Privacy Policy</h1>
            <p className="text-[17px] text-muted">
              How Muscle Guard collects, uses, and protects your information. POPIA, GDPR, and CCPA compliant. Updated 19 May 2026.
            </p>
            <p className="mt-3 text-[13px] uppercase tracking-[1px] text-muted">
              By the Muscle Guard research team · Last reviewed 2026-06-04
            </p>
          </div>

          <div className="article-prose">
            <p>
              This Privacy Policy describes how {SITE.legalName} (&ldquo;we&rdquo;) collects, uses, and protects the information of users of the Muscle Guard mobile application and muscleguardglp.com (collectively, &ldquo;Muscle Guard&rdquo;). We comply with POPIA (South Africa), GDPR (European Union), and CCPA (California).
            </p>

            <h2>1. What information we collect</h2>
            <p><strong>Account information you provide</strong> — email, optional name, age range, gender, height, and weight goal.</p>
            <p><strong>Health information you log</strong> — medication name and dose, injection / tablet timing, weight, body measurements, photos, mood, side effects, training sessions, and meal data.</p>
            <p><strong>Device data</strong> — device type, OS version, app version, and anonymised crash logs.</p>

            <h2>2. AI processing disclosure</h2>
            <p>When you use AI plate scan, the meal image is sent to Google Gemini for ingredient and macronutrient detection. The image is processed transiently and not retained for AI training. Open Food Facts (an open database) is queried for packaged-food information. These integrations are documented in our Terms of Service section 7.</p>

            <h2>3. How we use your information</h2>
            <p>To provide the app&apos;s features. To generate the Clinical Report at your request. To respond to support inquiries. To improve the app via aggregated, anonymised metrics. <strong>We never sell your data. We do not use it for third-party advertising.</strong></p>

            <h2>4. Where your data lives</h2>
            <p>On your device first. Backed up to encrypted cloud storage (Firebase Cloud Firestore, EU region). Clinical Reports are generated on-device.</p>

            <h2>5. Your rights</h2>
            <ul>
              <li><strong>Access</strong> — request a copy of your data.</li>
              <li><strong>Correction</strong> — fix inaccuracies.</li>
              <li><strong>Deletion</strong> — delete your account in-app (Profile → Delete Account) or email <a href={`mailto:${SITE.emails.support}`}>{SITE.emails.support}</a>.</li>
              <li><strong>Portability</strong> — export your data in a machine-readable format.</li>
              <li><strong>Restriction</strong> — limit processing.</li>
              <li><strong>Objection</strong> — to certain types of processing.</li>
            </ul>

            <h2>6. Data retention</h2>
            <p>Active account: as long as you use the app. Deleted account: all personal data removed within 7 days; anonymised analytics may be retained longer for app improvement.</p>

            <h2>7. Children</h2>
            <p>Muscle Guard is not intended for users under 18. We do not knowingly collect information from minors.</p>

            <h2>8. Contact us</h2>
            <p>Privacy or data requests: <a href={`mailto:${SITE.emails.privacy}`}>{SITE.emails.privacy}</a>. GDPR / POPIA / CCPA rights are available to all users regardless of residence.</p>

            <h2>9. Changes to this policy</h2>
            <p>We will notify users via the app of material changes. Last updated: 19 May 2026.</p>
          </div>

          <p className="mt-12 text-center text-[13px] italic text-muted">{SITE.disclaimer}</p>
        </div>
      </section>
    </>
  );
}
