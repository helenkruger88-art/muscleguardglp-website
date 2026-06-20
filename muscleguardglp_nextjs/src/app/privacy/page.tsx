import type { Metadata } from 'next';
import { SITE } from '@/lib/site';
import { BreadcrumbSchema } from '@/components/schema/BreadcrumbList';

export const metadata: Metadata = {
  title: 'Privacy Policy — Muscle Guard',
  description:
    'How Muscle Guard collects, uses, stores and protects your information. POPIA, GDPR, and CCPA compliant.',
  alternates: { canonical: `${SITE.url}/privacy/` },
};

const SUPPORT = `mailto:${SITE.emails.support}`;

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
            <p className="text-[15px] text-muted">Last updated: 20 June 2026</p>
          </div>

          <div className="article-prose">
            <p>
              This Privacy Policy explains how <strong>Muscle Guard</strong> (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;, &ldquo;the app&rdquo;) collects, uses, stores, shares, and protects your information when you use the Muscle Guard mobile application and related services.
            </p>
            <p>
              Muscle Guard is operated by <strong>Brand Expert (Pty) Ltd</strong> (&ldquo;the Company&rdquo;), a company incorporated in the Republic of South Africa. Muscle Guard is intended for use by adults aged 18 or over who are taking, considering, or recently stopped a GLP-1 receptor agonist medication (including Mounjaro, Ozempic, Wegovy, Zepbound, Rybelsus, Saxenda, and pharmacologically equivalent compounded products containing semaglutide or tirzepatide).
            </p>
            <p>
              <strong>Muscle Guard is not a medical device.</strong> Nothing in the app constitutes medical advice, diagnosis, or treatment. Always consult your prescribing physician for medical decisions. The app does not promise weight-loss outcomes, does not detect or diagnose disease, and is not a substitute for any prescribed therapy.
            </p>
            <p>
              If you do not agree with any part of this Privacy Policy, do not use the app. By creating an account or using Muscle Guard, you confirm that you have read, understood, and agree to this Privacy Policy.
            </p>

            <h2>1. Information we collect</h2>
            <p>
              We only collect data we genuinely need to make the app work for you. We never sell your data, never share it with advertisers, and never use it to train artificial-intelligence models.
            </p>

            <h3>1.1 Account and profile information</h3>
            <p>When you create an account, we collect:</p>
            <ul>
              <li>Email address and password (your password is processed by Firebase Authentication and we never see or store it directly).</li>
              <li>Your name (optional).</li>
              <li>Date of birth, biological sex, height and starting weight (used to calculate ideal body weight and protein targets).</li>
              <li>Your selected GLP-1 medication brand, current dose, and treatment phase.</li>
              <li>Your training experience level and goals.</li>
              <li>An optional avatar photo if you choose to upload one.</li>
            </ul>

            <h3>1.2 Health and wellness data you choose to log</h3>
            <p>The following categories of health data are collected only when you actively log them in the app:</p>
            <ul>
              <li>Body measurements — current weight, waist, hip, neck, body-fat estimate, visceral-fat rating.</li>
              <li>Daily mood, energy level, and food-noise rating.</li>
              <li>Symptoms (nausea, fatigue, headaches, gastrointestinal issues, and other GLP-1-related symptoms) and any notes you attach.</li>
              <li>Food and water intake, including macros, photos of meals you choose to scan, and barcode-scanned product records.</li>
              <li>Workouts and training sessions, including duration and exercises.</li>
              <li>Injection records (for injectable GLP-1s) or daily tablet records (for oral GLP-1s).</li>
              <li>Progress photos you take inside the app.</li>
            </ul>
            <p>
              We classify all of the above as <strong>sensitive health information</strong> under POPIA, GDPR, CCPA, and equivalent privacy laws, and we apply additional safeguards accordingly.
            </p>

            <h3>1.3 Device and technical information</h3>
            <ul>
              <li>Operating system, app version, device model, and a Firebase install identifier.</li>
              <li>Anonymised crash reports and performance traces, used to fix bugs.</li>
              <li>The IP address from which a Cloud Function is called (logged transiently by Google Cloud, retained per Google&rsquo;s standard policy).</li>
            </ul>
            <p>
              We do not collect your precise GPS location, your contact list, your IDFA / advertising identifier, your call logs, SMS, microphone audio, or your social-graph data.
            </p>

            <h3>1.4 Subscription information</h3>
            <ul>
              <li>Your current subscription status (free, trial, active Pro, expired).</li>
              <li>A RevenueCat subscriber identifier that links your Firebase user to your subscription state.</li>
            </ul>
            <p>
              <strong>We do not see, collect, or store your payment-card number, expiry date, CVC, or bank account details.</strong> All payment processing is handled exclusively by Apple&rsquo;s App Store or Google Play and their respective payment processors. We only learn whether your subscription is active.
            </p>

            <h3>1.5 AI inputs you submit</h3>
            <p>
              Muscle Guard uses Google&rsquo;s Gemini API <strong>only for food-logging features</strong>. When you use those features, the following is sent to the API via our Firebase Cloud Functions:
            </p>
            <ul>
              <li><strong>Smart AI (food search fallback):</strong> the free-text food description you typed when an Open Food Facts lookup returns no results.</li>
              <li><strong>Plate Scan:</strong> the photograph you took of your meal.</li>
              <li><strong>Nutrition label OCR:</strong> the photograph of a printed nutrition label.</li>
            </ul>
            <p>
              All other features in the app — including the Coach insights, the Training Read, the Pattern Read, the weekly Blueprint summary, the doctor talking points, the Muscle Guard Score, and pattern detection — are produced by deterministic rule engines and templates that read directly from your logged data. <strong>No part of those features uses generative AI.</strong>
            </p>
            <p>
              Inputs are processed transiently for each request and are not retained by us beyond the duration of the request. Google&rsquo;s data handling of these requests is governed by Google&rsquo;s{' '}
              <a href="https://policies.google.com/terms/generative-ai" target="_blank" rel="noopener noreferrer">Generative AI Additional Terms</a>.
            </p>

            <h2>2. How we use your data</h2>
            <p>We use your data only for the following purposes:</p>
            <ul>
              <li>To provide the core tracking, dashboards, charts, reports, and reminders the app advertises.</li>
              <li>To allow you to export your data as a Clinical Summary PDF for sharing with your physician.</li>
              <li>To detect patterns or warning signs that warrant a clinician check-in (for example, red-flag symptoms associated with pancreatitis or dehydration).</li>
              <li>To power AI-assisted food-logging features (Smart AI food search fallback, Plate Scan, nutrition label OCR) at your request.</li>
              <li>To maintain your active subscription entitlement through RevenueCat.</li>
              <li>To investigate crashes and improve app stability.</li>
              <li>To send essential service notifications (account-deletion confirmations, security alerts, material changes to these terms).</li>
            </ul>
            <p>We do <strong>not</strong> use your data:</p>
            <ul>
              <li>To advertise to you. We do not show ads inside Muscle Guard.</li>
              <li>To sell to third parties. Your data is not a product.</li>
              <li>To train any artificial-intelligence model. AI requests pass through Google&rsquo;s API for processing only.</li>
              <li>To share with insurance companies, employers, or marketers.</li>
            </ul>

            <h2>3. Third parties who process your data</h2>
            <p>
              We rely on a small number of trusted service providers to deliver the app. These providers are <strong>data processors acting on our instructions</strong>. We have entered into Data Processing Agreements where required by law, and <strong>each is contractually required to provide the same or equal protection of your data as described in this Privacy Policy</strong> (this includes safeguards required by Apple App Store Review Guideline 5.1.1 and Google Play Personal &amp; Sensitive User Data policy).
            </p>
            <div style={{ overflowX: 'auto', margin: '1.5rem 0' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
                <thead>
                  <tr style={{ background: '#F7FAF9', borderBottom: '0.5px solid #E5E7E6' }}>
                    <th style={{ textAlign: 'left', padding: '10px 12px', fontWeight: 600, color: '#1A2520' }}>Processor</th>
                    <th style={{ textAlign: 'left', padding: '10px 12px', fontWeight: 600, color: '#1A2520' }}>Purpose</th>
                    <th style={{ textAlign: 'left', padding: '10px 12px', fontWeight: 600, color: '#1A2520' }}>Data shared</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Google LLC — Firebase Authentication', 'Sign-in identity', 'Email address, hashed password, Firebase UID'],
                    ['Google LLC — Firebase Firestore', 'Profile and daily logs', 'Profile data and any data you log in the app'],
                    ['Google LLC — Firebase Cloud Storage', 'Photo storage', 'Avatar and progress photos'],
                    ['Google LLC — Firebase Cloud Functions', 'Backend logic', 'Transient request payloads'],
                    ['Google LLC — Gemini API', 'Food-logging AI features', 'Food descriptions, plate photos, nutrition label photos'],
                    ['RevenueCat, Inc.', 'Subscription entitlement', 'Firebase UID, subscription state, RevenueCat subscriber ID'],
                    ['Apple Inc. / Google LLC', 'Payment processing', 'Payment information (handled by them, not us)'],
                  ].map(([p, u, d]) => (
                    <tr key={p} style={{ borderBottom: '0.5px solid #F1EFE8' }}>
                      <td style={{ padding: '10px 12px', verticalAlign: 'top' }}>{p}</td>
                      <td style={{ padding: '10px 12px', verticalAlign: 'top' }}>{u}</td>
                      <td style={{ padding: '10px 12px', verticalAlign: 'top' }}>{d}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              We do not share your data with any other third party for any other purpose. We do not embed analytics SDKs, advertising SDKs, social-tracking SDKs, or any other third-party code that would transmit your data to additional recipients.
            </p>

            <h2>4. Where your data is stored</h2>
            <p>
              Your data is stored on Google Cloud Platform infrastructure operated by Google LLC. Default storage regions are in the United States, with some metadata stored in Google&rsquo;s globally-distributed services. By using Muscle Guard you consent to the international transfer of your data for these purposes.
            </p>
            <p>
              Where applicable, we rely on Google&rsquo;s <strong>Standard Contractual Clauses</strong> and Apple&rsquo;s / RevenueCat&rsquo;s equivalent safeguards for cross-border transfers from regions with data-localisation requirements (including the EEA, UK, and South Africa).
            </p>
            <p>
              All data is <strong>encrypted in transit using TLS 1.2 or higher</strong>, and <strong>encrypted at rest using Google Cloud Platform default encryption</strong>.
            </p>

            <h2>5. Your rights</h2>
            <p>Regardless of where you live, you have the following rights over your data:</p>
            <ul>
              <li><strong>Access</strong> — view all of your logged data inside the app at any time.</li>
              <li><strong>Correction</strong> — edit any logged entry (food, workout, symptom, photo, etc.) directly in the app.</li>
              <li><strong>Deletion</strong> — delete individual entries, photos, or your entire account (see Section 6 below).</li>
              <li><strong>Portability</strong> — export your data by tapping <em>Clinical Summary → Share as PDF</em>. For a full machine-readable export, email <a href={SUPPORT}>{SITE.emails.support}</a>.</li>
              <li><strong>Withdraw consent</strong> — stop using the app, and delete your account, at any time.</li>
            </ul>
            <p>In addition, depending on where you live, you have the following statutory rights:</p>
            <p>
              <strong>Under GDPR (EU/EEA/UK):</strong> the right to restrict processing, to object to processing, to lodge a complaint with your supervisory authority (in the UK, the Information Commissioner&rsquo;s Office), and to be informed about automated decision-making. We do not make any solely-automated decisions that produce legal or similarly significant effects on you.
            </p>
            <p>
              <strong>Under POPIA (South Africa):</strong> the right to lodge a complaint with the Information Regulator and the right to object to processing on reasonable grounds.
            </p>
            <p>
              <strong>Under CCPA / CPRA (California):</strong> the right to know what personal information is collected, to delete it, to opt out of any sale (we do not sell), and to non-discrimination for exercising your rights.
            </p>
            <p>
              <strong>Under LGPD (Brazil), PIPEDA (Canada), and equivalent laws elsewhere:</strong> the equivalent statutory rights as defined in your jurisdiction.
            </p>
            <p>
              To exercise any of these rights, email <a href={SUPPORT}>{SITE.emails.support}</a> from the address linked to your account. We will respond within 30 days (or sooner where required by law).
            </p>

            <h2>6. How to delete your account</h2>
            <p>
              <strong>Inside the app:</strong> open the app and go to <em>Profile → Delete Account</em>. Confirm twice. Your account, all logged data, all progress photos, and your authentication credentials are permanently and irreversibly removed from our servers, typically within a few minutes. There is no recovery.
            </p>
            <p>
              <strong>If you have already lost access to the app:</strong> email <a href={SUPPORT}>{SITE.emails.support}</a> from the email address linked to your account. We will verify your identity and complete the deletion within 7 days. This corresponds to the data-deletion path required by Google Play and Apple App Store policy.
            </p>
            <p>When you delete your account, we delete:</p>
            <ul>
              <li>Your Firestore profile document.</li>
              <li>All your daily-stats documents (your full logging history).</li>
              <li>All progress photos and avatars in Cloud Storage.</li>
              <li>Your Firebase Authentication user.</li>
              <li>Your RevenueCat subscriber record.</li>
            </ul>
            <p>
              We may retain anonymised, aggregated technical logs (with no personal identifiers) for a limited period as required by Google Cloud&rsquo;s standard service logging — these cannot be linked back to you.
            </p>

            <h2>7. AI processing disclosure</h2>
            <p>
              Muscle Guard uses Google&rsquo;s <strong>Gemini</strong> large-language model (via the <code>generativelanguage.googleapis.com</code> endpoint of Google Cloud) for <strong>food-logging features only</strong>:
            </p>
            <ol>
              <li><strong>Smart AI</strong> — estimating macros for a food you describe in text when an Open Food Facts lookup returns no match.</li>
              <li><strong>Plate Scan</strong> — identifying foods from a photo of your meal.</li>
              <li><strong>Nutrition label OCR</strong> — reading a printed nutrition label from a photo.</li>
            </ol>
            <p>
              All other features in the app — the Coach insights, the Training Read, the Pattern Read, the weekly Blueprint summary, the doctor talking points, the Muscle Guard Score, pattern detection, and every other narrative the app shows you — are produced by deterministic rule engines and templates that read your own logged numbers. <strong>No generative AI is used outside food logging.</strong>
            </p>
            <p>
              For each food-AI request, we send only the data needed for that specific request. No persistent user identifier is included. The outputs are AI-generated estimates that can be inaccurate, and are labelled in the app accordingly. They are not medical advice.
            </p>
            <p>
              Each AI request is processed by Google&rsquo;s API with the following safety guardrails enabled at the API boundary: harassment, hate speech, sexually explicit content, and dangerous content categories are all blocked. Outputs that trigger a safety block are not shown to you.
            </p>
            <p>
              You can opt out of all AI features by simply not using them. The non-AI parts of the app (manual food entry, Open Food Facts barcode lookup, all tracking, all dashboards, all Coach narratives) work normally without any AI involvement.
            </p>

            <h2>8. Health-data-specific commitments</h2>
            <p>
              Because Muscle Guard tracks medication use and health symptoms, we apply the following additional commitments in line with <strong>Google Play Health Apps Policy</strong> and equivalent Apple health-data expectations:
            </p>
            <ul>
              <li>We do not share your health data with insurance companies, employers, credit-scoring services, or marketers.</li>
              <li>We do not use your health data to make eligibility, pricing, or risk-assessment decisions.</li>
              <li>We do not link your health data to advertising identifiers.</li>
              <li>We will obtain your explicit consent before any new use of your health data not described in this Privacy Policy.</li>
              <li>We do not promise specific health outcomes from using the app.</li>
            </ul>
            <p>
              The pattern-detection features (Coach insights, red-flag symptom alerts) are designed to surface possible warning signs that may warrant a clinician check-in. They are <strong>observations from logged data, not diagnoses</strong>. If you are concerned about a symptom, contact your prescribing physician.
            </p>

            <h2>9. Children</h2>
            <p>
              Muscle Guard is intended for adults aged 18 or over. We do not knowingly collect data from anyone under 18. If you believe a minor has created an account, please email <a href={SUPPORT}>{SITE.emails.support}</a> and we will delete the account.
            </p>

            <h2>10. Security</h2>
            <p>We protect your data with:</p>
            <ul>
              <li><strong>TLS 1.2 or higher</strong> for all data in transit between your device and our servers.</li>
              <li><strong>Google Cloud Platform encryption at rest</strong> for all stored data.</li>
              <li><strong>Firebase Authentication identity tokens</strong> verified on every Cloud Function call.</li>
              <li><strong>Firestore security rules</strong> that strictly prevent any user from reading or writing another user&rsquo;s data.</li>
              <li><strong>Secret Manager</strong> for API keys and tokens — never embedded in the shipped app.</li>
              <li><strong>No payment-card storage</strong> — card details are handled exclusively by Apple and Google.</li>
            </ul>
            <p>
              No system is perfectly secure. In the unlikely event of a data breach affecting your information, we will notify you without undue delay and as required by applicable law (within 72 hours under GDPR).
            </p>

            <h2>11. Cookies and tracking technologies</h2>
            <p>
              The Muscle Guard mobile application does not use cookies. Our website at <em>muscleguardglp.com</em> uses only essential first-party storage (no third-party tracking, no advertising cookies, no analytics that profile individuals). We do not engage in cross-context behavioural advertising.
            </p>

            <h2>12. Changes to this Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. The &ldquo;Last updated&rdquo; date at the top will always reflect the current version. Material changes will be notified inside the app and via email at least 14 days before they take effect. Continued use of the app after the effective date constitutes acceptance.
            </p>
            <p>
              If you do not agree with a change, you may delete your account at any time before the change takes effect.
            </p>

            <h2>13. Contact us</h2>
            <p>
              <strong>Brand Expert (Pty) Ltd</strong><br />
              Johannesburg, South Africa<br />
              Email: <a href={SUPPORT}>{SITE.emails.support}</a>
            </p>
            <p>
              For data-protection enquiries specifically, please use the same email address with the subject line &ldquo;Privacy&rdquo;.
            </p>
            <p>
              <strong>EU representative (Article 27, GDPR):</strong> pending appointment. EU residents may in the meantime contact us at <a href={SUPPORT}>{SITE.emails.support}</a>.
            </p>
            <p>
              <strong>South African information officer (POPIA):</strong> the Company&rsquo;s Information Officer can be reached at <a href={SUPPORT}>{SITE.emails.support}</a>.
            </p>

            <hr />
            <p style={{ fontStyle: 'italic', fontSize: 14, color: '#5F6E69' }}>
              This Privacy Policy is governed by the laws of the Republic of South Africa, without prejudice to any mandatory consumer-protection or data-protection rights you have under the law of your country of residence.
            </p>
          </div>

          <p className="mt-12 text-center text-[13px] italic text-muted">{SITE.disclaimer}</p>
        </div>
      </section>
    </>
  );
}
