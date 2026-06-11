import Link from 'next/link';
import Image from 'next/image';
import { SITE } from '@/lib/site';
import { StoreButtons } from '@/components/StoreButtons';
import { TrustBadgeRow } from '@/components/TrustBadgeRow';
import { ComparisonTable } from '@/components/ComparisonTable';
import { PricingToggle } from '@/components/PricingToggle';
import { MobileApplicationSchema } from '@/components/schema/MobileApplication';
import { FAQPageSchema } from '@/components/schema/FAQPage';
import { getLiveArticles } from '@/lib/articles';

// Homepage — v14.1 spec. Real app screenshots, no competitor names in comparison,
// feature cards lifted from the Muscle Guard Full Feature Report (Plateau Protocol,
// Nausea Protocol, Pattern Read, Clinical Summary, etc.).

const homepageFaq = [
  {
    q: 'Is Muscle Guard a medical device?',
    a: 'No. Muscle Guard is a self-tracking companion and coach for people on GLP-1 medications. It is not a medical device and does not provide medical advice. Always consult your healthcare provider for medical decisions.',
  },
  {
    q: 'Which GLP-1 medications does Muscle Guard support?',
    a: 'Ozempic and Wegovy (semaglutide), Mounjaro and Zepbound (tirzepatide), Rybelsus (oral semaglutide), Saxenda (liraglutide), Trulicity (dulaglutide), plus compounded semaglutide and tirzepatide preparations. The app knows the standard titration schedule for each.',
  },
  {
    q: 'Why does muscle preservation matter on a GLP-1?',
    a: 'GLP-1 medications suppress appetite so effectively that many users enter a severe calorie and protein deficit. Without intervention, 25 to 40 percent of total weight lost can be lean muscle, not fat. Adequate protein (1.2 to 1.6 g per kg per day) plus resistance training drops that figure substantially.',
  },
  {
    q: 'How much does Muscle Guard cost?',
    a: 'Free forever for the basics. Pro is R99 per month or R899 per year (approximately USD 5.99 / EUR 5.99 / GBP equivalents) with a 7-day free trial — no card needed to start.',
  },
];

// Screen gallery — order matches the user's 6-screen App Store sequence.
const screens = [
  { src: '/screenshots/01-home.jpg', alt: 'Home dashboard with macro rings and Plateau Protocol', label: 'Home dashboard', caption: 'Your GLP-1 day, in one view.' },
  { src: '/screenshots/02-score.jpg', alt: 'Muscle Guard Score 97 / 100 ON TRACK with protein, training, and body comp breakdown', label: 'Muscle Guard Score', caption: 'The score that tracks what you’re keeping.' },
  { src: '/screenshots/03-visceral.jpg', alt: 'Visceral Body Fat — Waist-to-Height Ratio with healthy band and Plateau Protocol active', label: 'Visceral fat', caption: 'See what the scale can’t.' },
  { src: '/screenshots/04-training-hub.jpg', alt: 'Training Hub — Muscle Protection PRO with Performance Predictions and Movement Coverage', label: 'Training Hub', caption: 'Train to keep the muscle.' },
  { src: '/screenshots/05-longitudinal.jpg', alt: 'Longitudinal Data — Protein Muscle Protection 86% adherence chart and Today’s Focus rings', label: 'Trends', caption: 'Adherence that adds up.' },
  { src: '/screenshots/06-nutrition.jpg', alt: 'Nutrition Hub — Fueling Protection with Plate Scan, Barcode, Label, and Manual logging', label: 'Nutrition Hub', caption: 'Snap. Done.' },
];

export default function HomePage() {
  // Feature grid — rebuilt against v14.1 spec (Muscle Guard Full Feature Report).
  const features = [
    { icon: '★', title: 'Muscle Guard Score', hero: true, body: 'The hero metric. 0 to 100, weighted 40% protein / 40% training / 20% body composition. The single number that says whether you’re keeping what matters.' },
    { icon: '⌂', title: 'Privacy first', hero: true, body: 'No tracking, no ads, no data brokers. POPIA, GDPR and CCPA compliant. Delete your account and all data in one tap.' },
    { icon: '🔥', title: 'Plateau Protocol', hero: false, body: 'Three-pillar 14-day reset when the scale stalls. Protein floor 150 g, hydration uplift to 3 L, strength sessions on 5 of 7 days.' },
    { icon: '🤢', title: 'Nausea Protocol', hero: false, body: 'Safe Bites, hydration target, sleep guidance, and automatic symptom logging — for shot-day weeks.' },
    { icon: '🤖', title: 'Pattern Read (Pro)', hero: false, body: 'Weekly AI verdict from Gemini on what’s trending up and down across protein, training, hydration, and body comp. Polarity-aware.' },
    { icon: '📷', title: 'Snap to Log (Pro)', hero: false, body: 'Point the camera at a plate — Gemini identifies the foods and macros. Open Food Facts for packaged. Transparently disclosed provenance on every entry.' },
    { icon: '📐', title: 'Body Check + PoseGuide', hero: false, body: 'Built-in pose alignment overlay so progress photos are taken the same way every time. Side-by-side compare. WHtR and Visceral Fat gauge.' },
    { icon: '📄', title: 'Clinical Summary PDF', hero: false, body: 'Your GLP-1 Journey, formatted for a 10-minute doctor visit. Medication log, body comp trajectory, macros, training, symptoms, pattern write-ups.' },
    { icon: '⚕', title: 'Symptom Log', hero: false, body: '17 categories with severity 0–3, red-flag detection, and a timeline plotted against your injection dates.' },
    { icon: '💊', title: 'Drug Reference', hero: false, body: 'Per-brand titration, side effects, storage. Ozempic, Wegovy, Mounjaro, Zepbound, Rybelsus, Saxenda, Trulicity, and compounded.' },
    { icon: '⌚', title: 'Apple Health / Health Connect', hero: false, body: 'Steps, heart rate, workouts, weigh-ins — deduplicated across iPhone, Apple Watch, Garmin, and other sources.' },
    { icon: '🏆', title: '30+ achievements', hero: false, body: 'Streaks at 3, 7, 14, 30, 50, 100 days. Pillar milestones. Body comp milestones. Shareable cards on every unlock.' },
  ];

  const liveArticles = getLiveArticles().slice(0, 4);

  return (
    <>
      <MobileApplicationSchema />
      <FAQPageSchema items={homepageFaq} />

      {/* HERO */}
      <section
        className="py-16 md:py-20"
        style={{ background: 'linear-gradient(180deg, var(--brand-green-bg) 0%, white 100%)' }}
      >
        <div className="wrap">
          <div className="grid items-center gap-14 md:grid-cols-[1.1fr_1fr]">
            <div>
              <h1 className="mb-2">
                {SITE.hero.h1Part1}{' '}
                <span className="text-brand-green">{SITE.hero.h1Part2}</span>
              </h1>
              <p className="my-7 max-w-[42ch] text-[17px] text-muted">{SITE.hero.body}</p>
              <p className="my-3 text-[14px] text-muted">
                <strong>Built for:</strong> {SITE.hero.builtFor}
              </p>
              <div className="my-6">
                <StoreButtons />
              </div>
              <p className="mt-5 text-[13px] text-muted">{SITE.hero.priceLine}</p>
              <TrustBadgeRow />
            </div>

            {/* Real phone screenshot replaces the synthetic SVG mockup */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-[320px]">
                <div
                  className="overflow-hidden rounded-[36px] bg-ink shadow-mockup"
                  style={{ padding: 8 }}
                >
                  <div className="overflow-hidden rounded-[28px] bg-white">
                    <Image
                      src="/screenshots/01-home.jpg"
                      alt="Muscle Guard Home Dashboard — the GLP-1 day in one view"
                      width={1242}
                      height={2688}
                      priority
                      sizes="(max-width: 768px) 90vw, 320px"
                      style={{ width: '100%', height: 'auto', display: 'block' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THESIS */}
      <section className="py-20">
        <div className="wrap">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <div className="eyebrow mb-3">The thing nobody else says out loud</div>
            <h2 className="mb-3">GLP-1 medications work. The question is what you&apos;re losing.</h2>
          </div>
          <div className="mx-auto grid max-w-3xl items-center gap-6 text-center md:grid-cols-[1fr_auto_1fr]">
            <div>
              <div className="text-[44px] font-semibold text-gold leading-none">25&ndash;40%</div>
              <div className="mt-3 text-[14px] text-muted">
                of weight lost on a GLP-1 can be <strong className="text-ink">muscle</strong>, not fat. Without intervention.
                <sup><Link href="/research/glp1-and-muscle-loss/" className="text-brand-green no-underline">[1]</Link></sup>
              </div>
            </div>
            <div className="text-[18px] text-muted">vs</div>
            <div>
              <div className="text-[44px] font-semibold italic text-brand-green leading-none">substantially less</div>
              <div className="mt-3 text-[14px] text-muted">
                with adequate <strong className="text-ink">protein</strong> + <strong className="text-ink">resistance training</strong>.
                <sup><Link href="/research/glp1-and-muscle-loss/" className="text-brand-green no-underline">[2]</Link></sup>
              </div>
            </div>
          </div>
          <p className="mt-10 text-center">
            <Link className="btn btn-outline" href="/research/glp1-and-muscle-loss/">
              See the full evidence →
            </Link>
          </p>
        </div>
      </section>

      {/* INSIDE THE APP — 6-card screen gallery */}
      <section className="bg-bg py-20">
        <div className="wrap">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="eyebrow eyebrow-green mb-3">Inside the app</div>
            <h2 className="mb-3">Six screens that do most of the work.</h2>
            <p className="text-[17px] text-muted">
              From the Muscle Guard Score on the home dashboard through the daily protocols, the body-composition check, and the visceral fat trend — the places your week actually lives.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {screens.map((s) => (
              <figure key={s.src} className="text-center">
                <div className="relative mx-auto w-full max-w-[260px]">
                  <div
                    className="overflow-hidden rounded-[30px] bg-ink shadow-mockup"
                    style={{ padding: 6 }}
                  >
                    <div className="overflow-hidden rounded-[24px] bg-white">
                      <Image
                        src={s.src}
                        alt={s.alt}
                        width={1242}
                        height={2688}
                        loading="lazy"
                        sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 260px"
                        style={{ width: '100%', height: 'auto', display: 'block' }}
                      />
                    </div>
                  </div>
                </div>
                <figcaption className="mt-4">
                  <div className="text-[12px] uppercase tracking-[1.5px] text-brand-green">{s.label}</div>
                  <div className="mt-1 text-[15px] text-ink">{s.caption}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES — rebuilt against v14.1 */}
      <section id="features" className="py-20">
        <div className="wrap">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="eyebrow eyebrow-green mb-3">Built around muscle preservation</div>
            <h2 className="mb-3">Every feature, one goal.</h2>
            <p className="text-[17px] text-muted">
              Track the four things that matter most during medically-supervised weight loss — protein, strength, hydration, body composition — and translate them into something a doctor can read in 60 seconds.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {features.map((f) => (
              <div key={f.title} className={`feature ${f.hero ? 'feature-hero' : ''}`}>
                <div className="feature-icon">{f.icon}</div>
                <h3 className="mb-2 text-[17px]">{f.title}</h3>
                <p className="text-[14px] text-muted">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON — no competitor names */}
      <section id="comparison" className="bg-brand-green-bg py-20">
        <div className="wrap">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="eyebrow mb-3">The category</div>
            <h2 className="mb-3">Muscle Guard vs other industry apps.</h2>
            <p className="text-[17px] text-muted">
              The differences that matter, side by side.
            </p>
          </div>
          <ComparisonTable />
        </div>
      </section>

      {/* THREE THINGS — verbatim from feature report page 9 */}
      <section className="py-20">
        <div className="wrap">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="eyebrow eyebrow-green mb-3">Three things that make us different</div>
            <h2 className="mb-3">Built for GLP-1. Tune