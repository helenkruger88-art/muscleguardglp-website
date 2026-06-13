import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE } from '@/lib/site';
import { BreadcrumbSchema } from '@/components/schema/BreadcrumbList';

export const metadata: Metadata = {
  title: 'Terms of Service — Muscle Guard',
  description: 'Terms governing your use of the Muscle Guard mobile application.',
  alternates: { canonical: `${SITE.url}/terms/` },
};

const SUPPORT = `mailto:${SITE.emails.support}`;

export default function TermsPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', path: '/' },
          { name: 'Terms of Service', path: '/terms/' },
        ]}
      />

      <section className="py-16">
        <div className="wrap mx-auto max-w-prose">
          <div className="mb-10">
            <div className="eyebrow eyebrow-green mb-3">Terms of Service</div>
            <h1 className="mb-4">Terms of Service</h1>
            <p className="text-[15px] text-muted">Last updated: 19 May 2026</p>
          </div>

          <div className="article-prose">
            <p>
              These Terms of Service (&ldquo;Terms&rdquo;) govern your use of the Muscle Guard mobile application (&ldquo;Muscle Guard&rdquo;, &ldquo;the app&rdquo;). By creating an account or using Muscle Guard you agree to these Terms. If you do not agree, do not use the app.
            </p>
            <p>
              Muscle Guard is operated by <strong>Brand Expert (Pty) Ltd</strong> (&ldquo;the Company&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;).
            </p>

            <h2>1. What Muscle Guard is — and is not</h2>
            <p>
              Muscle Guard is a self-tracking app for people taking GLP-1 receptor agonist medications. It helps you log your dose, weight, body measurements, food, training, symptoms and progress photos, and produces summaries you can share with your prescribing physician.
            </p>
            <p>
              Muscle Guard is <strong>not</strong> a medical device, does not diagnose disease, and does not replace professional medical advice. <strong>Always consult your prescribing physician before making changes to your medication, diet or training regimen.</strong> Information provided in the app — including drug references, &ldquo;what to expect&rdquo; content and Coach AI insights — is for general educational purposes only and may not reflect your individual situation.
            </p>
            <p>
              The app references medications by their FDA-approved brand names (Mounjaro, Ozempic, Wegovy, Zepbound, Rybelsus, Saxenda) and pharmacologically equivalent compounded products. The Company has no affiliation with Eli Lilly, Novo Nordisk, or any compounding pharmacy. We do not sell, supply or recommend any specific source for these medications.
            </p>

            <h2>2. Eligibility</h2>
            <p>
              You must be at least 18 years old to use Muscle Guard. By creating an account you represent that you are 18+.
            </p>

            <h2>3. Your account</h2>
            <p>
              You are responsible for keeping your sign-in credentials confidential and for all activity that occurs under your account. Notify us immediately at <a href={SUPPORT}>{SITE.emails.support}</a> if you suspect unauthorised access.
            </p>
            <p>You agree not to:</p>
            <ul>
              <li>Use Muscle Guard for any unlawful purpose.</li>
              <li>Attempt to gain unauthorised access to other users&rsquo; accounts or our backend systems.</li>
              <li>Reverse-engineer, decompile, or otherwise tamper with the app, except as permitted by applicable law.</li>
              <li>Use automated means to scrape or extract data from the app.</li>
              <li>Submit content via the AI features that is harmful, abusive, sexual, or that solicits unsafe medical advice.</li>
            </ul>
            <p>We reserve the right to suspend or terminate accounts that violate these rules.</p>

            <h2>4. Subscriptions</h2>
            <p>
              The app offers a free tier and a paid &ldquo;Pro&rdquo; subscription. Pro is offered as a monthly or annual subscription billed through Apple&rsquo;s App Store or Google Play. The current price and any introductory trial offer are shown on the in-app paywall before purchase.
            </p>
            <p>
              <strong>Renewal.</strong> Subscriptions auto-renew at the end of each billing cycle unless cancelled at least 24 hours before the next renewal date. You can cancel any time via <em>Settings → Apple ID → Subscriptions</em> (iOS) or <em>Google Play → Subscriptions</em> (Android), or via <em>Profile → Manage Subscription</em> in-app.
            </p>
            <p>
              <strong>Refunds.</strong> All refunds are handled by Apple or Google according to their own policies. We do not process refunds directly.
            </p>
            <p>
              <strong>Free trial.</strong> If a free-trial offer is shown on the paywall, you will be billed at the standard price when the trial ends unless you cancel before the trial period elapses.
            </p>
            <p>
              <strong>Price changes.</strong> We may change subscription prices with at least 30 days&rsquo; notice via in-app message and email. Changes will not affect the current billing cycle.
            </p>

            <h2>5. AI features</h2>
            <p>
              Some features (Smart AI, Plate Scan, Coach AI) use Google&rsquo;s Gemini large-language model. Outputs are AI-generated estimates and may be inaccurate. Do not rely on AI outputs for clinical decisions. Your inputs are processed transiently for the request and are not used to train models. See the <Link href="/privacy/">Privacy Policy</Link> for details.
            </p>

            <h2>6. Data</h2>
            <p>
              Your data is yours. You can delete your account and all associated data from inside the app at any time (<em>Profile → Delete Account</em>). For everything else regarding data handling, see our <Link href="/privacy/">Privacy Policy</Link>.
            </p>

            <h2>7. Disclaimer of warranties</h2>
            <p>
              Muscle Guard is provided &ldquo;as is&rdquo;, without warranty of any kind. To the maximum extent permitted by applicable law, we disclaim all warranties, express or implied, including fitness for a particular purpose, merchantability, and non-infringement.
            </p>
            <p>
              We do not warrant that the app will be uninterrupted, error-free, or that any data you log will be retained indefinitely. You are responsible for keeping your own backups of anything important (including exporting your Clinical Summary PDF periodically if you want a long-term record).
            </p>

            <h2>8. Limitation of liability</h2>
            <p>
              To the maximum extent permitted by applicable law, the Company shall not be liable for any indirect, incidental, consequential, special, or exemplary damages arising out of or in connection with your use of Muscle Guard, including (but not limited to) any reliance you place on AI-generated estimates, drug references, or pattern detection.
            </p>
            <p>
              Our total cumulative liability to you for any claim arising from these Terms or your use of the app shall not exceed the greater of (a) the amount you paid us for subscription services in the 12 months preceding the claim, or (b) ZAR 1 000.
            </p>
            <p>
              Nothing in these Terms excludes liability for death or personal injury caused by our gross negligence, fraud, or any other liability that cannot be excluded under applicable law.
            </p>

            <h2>9. Intellectual property</h2>
            <p>
              The Muscle Guard name, logo, and app design are the property of Brand Expert (Pty) Ltd. Drug brand names referenced in the app remain the property of their respective trademark holders.
            </p>
            <p>
              You retain ownership of any data, photos and content you submit. By submitting content you grant us a non-exclusive licence to store, display and process that content solely to provide the app&rsquo;s features to you.
            </p>

            <h2>10. Termination</h2>
            <p>
              You may stop using the app at any time. We may suspend or terminate your access if you breach these Terms or use the app in a way that creates risk for us or for other users.
            </p>
            <p>
              On termination, your right to use the app ends immediately. Sections covering data, disclaimers, limitation of liability, and governing law survive termination.
            </p>

            <h2>11. Governing law</h2>
            <p>
              These Terms are governed by the laws of the Republic of South Africa, without regard to conflict-of-laws principles. Any dispute will be heard in the courts of Johannesburg, South Africa, except where mandatory consumer-protection laws in your country of residence require otherwise.
            </p>

            <h2>12. Changes</h2>
            <p>
              We may update these Terms from time to time. Material changes will be notified in-app and via email at least 14 days before they take effect. Continued use of the app after that date constitutes acceptance.
            </p>

            <h2>13. Contact</h2>
            <p>
              <strong>Brand Expert (Pty) Ltd</strong> — <a href={SUPPORT}>{SITE.emails.support}</a>
            </p>
          </div>

          <p className="mt-12 text-center text-[13px] italic text-muted">{SITE.disclaimer}</p>
        </div>
      </section>
    </>
  );
}
