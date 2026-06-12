import Link from 'next/link';
import Image from 'next/image';
import { SITE } from '@/lib/site';
import { StoreButtons } from '@/components/StoreButtons';
import { TrustBadgeRow } from '@/components/TrustBadgeRow';
import { ComparisonTable } from '@/components/ComparisonTable';
import { PricingToggle } from '@/components/PricingToggle';
import { HeroMockup } from '@/components/HeroMockup';
import { MobileApplicationSchema } from '@/components/schema/MobileApplication';
import { FAQPageSchema } from '@/components/schema/FAQPage';
import { getLiveArticles } from '@/lib/articles';

// Small tile used by the bento feature grid. Accent variant tints the bg.
function FeatureTile({
  icon,
  iconColor,
  eyebrow,
  label,
  sub,
  accent,
}: {
  icon: string;
  iconColor: string;
  eyebrow: string;
  label?: string;
  sub: string;
  accent?: 'gold' | 'teal';
}) {
  const bg =
    accent === 'gold'
      ? 'rgba(224,176,86,0.15)'
      : accent === 'teal'
        ? 'rgba(15,123,108,0.18)'
        : 'rgba(255,255,255,0.04)';
  const border =
    accent === 'gold'
      ? 'rgba(224,176,86,0.4)'
      : accent === 'teal'
        ? 'rgba(15,123,108,0.4)'
        : 'rgba(255,255,255,0.1)';
  const eyebrowColor =
    accent === 'gold' ? '#E0B056' : accent === 'teal' ? '#5EE3C8' : '#FFFFFF';
  return (
    <div
      className="flex flex-col gap-2 rounded-2xl p-4 md:p-5"
      style={{ background: bg, border: `1px solid ${border}` }}
    >
      <div className="flex items-center gap-2">
        <span className="text-[16px]" style={{ color: iconColor }}>{icon}</span>
        <div className="text-[12px] font-semibold uppercase tracking-[1px]" style={{ color: eyebrowColor, opacity: 0.95 }}>{eyebrow}</div>
      </div>
      {label && <div className="text-[16px] font-semibold leading-tight text-white">{label}</div>}
      <div className="text-[13px] text-white">{sub}</div>
    </div>
  );
}

const homepageFaq = [
  {
    q: 'Is Muscle Guard a medical device?',
    a: 'No. Muscle Guard is a self-tracking companion and coach for people on GLP-1 medications. It is not a medical device and does not provide medical advice. Always consult your healthcare provider for medical decisions.',
  },
  {
    q: 'Which GLP-1 medications does Muscle Guard support?',
    a: 'Ozempic and Wegovy (semaglutide), Mounjaro and Zepbound (tirzepatide), Rybelsus (oral semaglutide), Saxenda (liraglutide), Trulicity (dulaglutide), plus compounded semaglutide and tirzepatide preparations.',
  },
  {
    q: 'Why does muscle preservation matter on a GLP-1?',
    a: 'Without intervention, 25 to 40 percent of total weight lost on a GLP-1 can be lean muscle, not fat. Adequate protein (1.2 to 1.6 g per kg per day) plus resistance training drops that figure substantially.',
  },
  {
    q: 'How much does Muscle Guard cost?',
    a: 'Free forever for the basics. Pro is R99 per month or R899 per year (approximately USD 5.99 / EUR 5.99 / GBP equivalents) with a 7-day free trial — no card needed to start.',
  },
];

const screens = [
  { src: '/screenshots/01-home.jpg', alt: 'Home dashboard with macro rings and Plateau Protocol', label: 'Home dashboard', caption: 'Your GLP-1 day, in one view.' },
  { src: '/screenshots/02-score.jpg', alt: 'Muscle Guard Score 97 of 100 ON TRACK', label: 'Muscle Guard Score', caption: 'The score that tracks what you are keeping.' },
  { src: '/screenshots/03-visceral.jpg', alt: 'Visceral Body Fat Waist-to-Height Ratio with Plateau Protocol active', label: 'Visceral fat', caption: 'See what the scale cannot.' },
  { src: '/screenshots/04-training-hub.jpg', alt: 'Training Hub Muscle Protection PRO with Performance Predictions', label: 'Training Hub', caption: 'Train to keep the muscle.' },
  { src: '/screenshots/05-longitudinal.jpg', alt: 'Longitudinal Data Protein Muscle Protection 86 percent adherence', label: 'Trends', caption: 'Adherence that adds up.' },
  { src: '/screenshots/06-nutrition.jpg', alt: 'Nutrition Hub Fueling Protection with Plate Scan and Barcode logging', label: 'Nutrition Hub', caption: 'Snap. Done.' },
];

export default function HomePage() {
  const features = [
    { icon: '★', title: 'Muscle Guard Score', hero: true, body: 'The hero metric. 0 to 100, weighted 40% protein / 40% training / 20% body composition. The single number that says whether you are keeping what matters.' },
    { icon: '⌂', title: 'Privacy first', hero: true, body: 'No tracking, no ads, no data brokers. POPIA, GDPR and CCPA compliant. Delete your account and all data in one tap.' },
    { icon: '🔥', title: 'Plateau Protocol', hero: false, body: 'Three-pillar 14-day reset when the scale stalls. Protein floor 150 g, hydration uplift to 3 L, strength sessions on 5 of 7 days.' },
    { icon: '🤢', title: 'Nausea Protocol', hero: false, body: 'Safe Bites, hydration target, sleep guidance, and automatic symptom logging — for shot-day weeks.' },
    { icon: '🏋', title: 'Training Hub', hero: false, body: 'The training command center. Strength streak with milestone trophies. Recent sessions with movement coverage (Squat, Hinge, Push, Pull, Core). Cardio with intensity zones Z1–Z5. Habit Hub heatmap across 30/90/180 days.' },
    { icon: '📈', title: 'Trends', hero: false, body: 'The doctor view. Calendar of pillar adherence, protein and training charts, body transformation read, symptom timeline plotted against your injection dates. Pattern Detection surfaces what your data is telling you.' },
    { icon: '🤖', title: 'Pattern Read (Pro)', hero: false, body: 'Weekly AI verdict from Gemini on what is trending up and down across protein, training, hydration, and body comp. Polarity-aware.' },
    { icon: '📷', title: 'Snap to Log (Pro)', hero: false, body: 'Point the camera at a plate — Gemini identifies the foods and macros. Open Food Facts for packaged. Transparently disclosed provenance on every entry.' },
    { icon: '📐', title: 'Body Check + PoseGuide', hero: false, body: 'Built-in pose alignment overlay so progress photos are taken the same way every time. Side-by-side compare. WHtR and Visceral Fat gauge.' },
    { icon: '📄', title: 'Clinical Summary PDF', hero: false, body: 'Your GLP-1 Journey, formatted for a 10-minute doctor visit. Medication log, body comp trajectory, macros, training, symptoms, pattern write-ups.' },
    { icon: '⚕', title: 'Symptom Log', hero: false, body: '17 categories with severity 0 to 3, red-flag detection, and a timeline plotted against your injection dates.' },
    { icon: '💊', title: 'Drug Reference', hero: false, body: 'Per-brand titration, side effects, storage. Ozempic, Wegovy, Mounjaro, Zepbound, Rybelsus, Saxenda, Trulicity, and compounded.' },
    { icon: '⌚', title: 'Apple Health / Health Connect', hero: false, body: 'Steps, heart rate, workouts, weigh-ins — deduplicated across iPhone, Apple Watch, Garmin, and other sources.' },
    { icon: '🏆', title: '30+ achievements', hero: false, body: 'Streaks at 3, 7, 14, 30, 50, 100 days. Pillar milestones. Body comp milestones. Shareable cards on every unlock.' },
  ];

  const liveArticles = getLiveArticles().slice(0, 4);

  return (
    <>
      <MobileApplicationSchema />
      <FAQPageSchema items={homepageFaq} />

      <section
        className="py-16 md:py-20 text-white"
        style={{ background: 'linear-gradient(180deg, #0A1F1A 0%, #1A2520 60%, #000 100%)' }}
      >
        <div className="wrap">
          <div className="grid items-center gap-14 md:grid-cols-[1.1fr_1fr]">
            <div>
              <div
                className="mb-6 inline-block rounded-full px-5 py-2 text-[11px] font-bold uppercase tracking-[1.6px]"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  color: 'rgba(255,255,255,0.75)',
                }}
              >
                The GLP-1 Companion Built Around <span style={{ color: '#E0B056' }}>Muscle Preservation</span>
              </div>
              <h1 className="mb-2">
                <span className="block">Track your <strong>GLP-1</strong> Journey.</span>
                <span
                  className="italic"
                  style={{ color: '#E0B056', fontFamily: 'Georgia, "Times New Roman", serif' }}
                >
                  <span className="block">Protect your</span>
                  <span className="block"><strong>Muscle</strong>.</span>
                </span>
              </h1>
              <p className="my-7 max-w-[42ch] text-[17px] text-white/70 text-justify hyphens-auto">{SITE.hero.body}</p>
              <p className="my-3 text-[14px] text-white/60">
                <strong>Built for:</strong> Compounded semaglutide and tirzepatide, plus Ozempic,<br />Wegovy, Mounjaro, Zepbound, Rybelsus, Saxenda and Trulicity.
              </p>
              <div className="my-6"><StoreButtons /></div>
              <p className="mt-5 text-[13px] text-white/60">{SITE.hero.priceLine}</p>
              <TrustBadgeRow />
            </div>
            <HeroMockup />
          </div>
        </div>
      </section>

      <section
        className="relative overflow-hidden py-24 text-white md:py-32"
        style={{
          background:
            'radial-gradient(circle at 20% 30%, rgba(201,126,26,0.18) 0%, transparent 55%), radial-gradient(circle at 80% 70%, rgba(15,123,108,0.22) 0%, transparent 55%), linear-gradient(180deg, #0A1F1A 0%, #000 100%)',
        }}
      >
        {/* Subtle grid overlay */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />

        <div className="wrap relative">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <div className="eyebrow mb-4" style={{ color: '#E0B056' }}>The thing nobody else says out loud</div>
            <h2 className="mb-4 text-white" style={{ fontSize: 'clamp(34px, 5vw, 56px)', lineHeight: 1.05 }}>
              GLP-1 medications work.{' '}
              <span
                className="italic"
                style={{ color: '#E0B056', fontFamily: 'Georgia, "Times New Roman", serif' }}
              >
                The question is what you&rsquo;re losing.
              </span>
            </h2>
            <p className="mx-auto max-w-[55ch] text-[17px] text-white/70">
              Every weight-loss number on the scale hides a second number — the one your doctor isn&rsquo;t asking about.
            </p>
          </div>

          {/* The big comparison */}
          <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2">
            {/* Without intervention card */}
            <div
              className="relative overflow-hidden rounded-3xl p-8 md:p-10"
              style={{
                background: 'linear-gradient(160deg, rgba(201,126,26,0.18) 0%, rgba(0,0,0,0.4) 100%)',
                border: '1px solid rgba(224,176,86,0.35)',
                boxShadow: '0 30px 80px -20px rgba(201,126,26,0.25)',
              }}
            >
              <div className="mb-5 flex items-center gap-3">
                <div
                  className="grid h-9 w-9 place-items-center rounded-full text-[18px] font-bold"
                  style={{ background: 'rgba(224,176,86,0.18)', color: '#E0B056' }}
                  aria-hidden="true"
                >!</div>
                <div className="text-[11px] font-bold uppercase tracking-[1.6px]" style={{ color: '#E0B056' }}>
                  Without intervention
                </div>
              </div>
              <div
                className="mb-5 font-extrabold leading-none"
                style={{
                  fontSize: 'clamp(72px, 11vw, 132px)',
                  letterSpacing: '-0.04em',
                  color: '#E0B056',
                  textShadow: '0 8px 32px rgba(224,176,86,0.35)',
                }}
              >
                25&ndash;40<span style={{ fontSize: '0.55em', verticalAlign: 'top', marginLeft: '0.05em' }}>%</span>
              </div>
              {/* Visual bar */}
              <div className="mb-5 h-2.5 w-full overflow-hidden rounded-full" style={{ background: 'rgba(255,255,255,0.1)' }}>
                <div className="h-full rounded-full" style={{ width: '82%', background: 'linear-gradient(90deg, #C97E1A 0%, #E0B056 100%)' }} />
              </div>
              <p className="text-[17px] leading-relaxed text-white/85">
                of every kilo lost on a GLP-1 can be{' '}
                <span className="font-bold text-white">lean muscle</span> — not fat. Strength gone. Posture gone. Metabolism slower than before you started.
              </p>
            </div>

            {/* With protocol card */}
            <div
              className="relative overflow-hidden rounded-3xl p-8 md:p-10"
              style={{
                background: 'linear-gradient(160deg, rgba(15,123,108,0.22) 0%, rgba(0,0,0,0.4) 100%)',
                border: '1px solid rgba(15,123,108,0.5)',
                boxShadow: '0 30px 80px -20px rgba(15,123,108,0.35)',
              }}
            >
              <div className="mb-5 flex items-center gap-3">
                <div
                  className="grid h-9 w-9 place-items-center rounded-full text-[18px] font-bold"
                  style={{ background: 'rgba(15,123,108,0.25)', color: '#5EE3C8' }}
                  aria-hidden="true"
                >✓</div>
                <div className="text-[11px] font-bold uppercase tracking-[1.6px]" style={{ color: '#5EE3C8' }}>
                  With the Muscle Guard playbook
                </div>
              </div>
              <div
                className="mb-5 font-extrabold leading-none"
                style={{
                  fontSize: 'clamp(44px, 5.5vw, 72px)',
                  letterSpacing: '-0.025em',
                  color: '#FFFFFF',
                  textShadow: '0 8px 32px rgba(15,123,108,0.45)',
                }}
              >
                <span className="block">Substantially</span>
                <span
                  className="block italic"
                  style={{ color: '#5EE3C8', fontFamily: 'Georgia, "Times New Roman", serif' }}
                >
                  less.
                </span>
              </div>
              {/* Visual bar */}
              <div className="mb-5 h-2.5 w-full overflow-hidden rounded-full" style={{ background: 'rgba(255,255,255,0.1)' }}>
                <div className="h-full rounded-full" style={{ width: '18%', background: 'linear-gradient(90deg, #0F7B6C 0%, #5EE3C8 100%)' }} />
              </div>
              <p className="text-[17px] leading-relaxed text-white/85">
                With adequate <span className="font-bold text-white">protein</span> (1.2&ndash;1.6 g/kg/day) plus{' '}
                <span className="font-bold text-white">resistance training</span> 2&ndash;4× a week. Muscle preserved. Fat lost. Result intact.
              </p>
            </div>
          </div>

          <div className="mt-14 text-center">
            <Link
              className="inline-flex items-center gap-2 rounded-full px-7 py-4 text-[15px] font-semibold no-underline transition"
              href="/research/glp1-and-muscle-loss/"
              style={{
                background: '#FFFFFF',
                color: '#0A1F1A',
                boxShadow: '0 20px 50px -12px rgba(255,255,255,0.4)',
              }}
            >
              See the full evidence
              <span aria-hidden="true">→</span>
            </Link>
            <p className="mt-5 text-[13px] text-white/55">
              Cited across 8 peer-reviewed trials. Updated when the science updates.
            </p>
          </div>
        </div>
      </section>

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
                  <div className="overflow-hidden rounded-[30px] bg-ink shadow-mockup" style={{ padding: 6 }}>
                    <div className="overflow-hidden rounded-[24px] bg-white">
                      <Image
                        src={s.src} alt={s.alt}
                        width={1242} height={2688} loading="lazy"
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

      <section
        id="features"
        className="py-20 text-white"
        style={{ background: 'linear-gradient(180deg, #0A1F1A 0%, #061612 100%)' }}
      >
        <div className="wrap">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="eyebrow mb-3" style={{ color: '#E0B056' }}>Every feature, one goal</div>
            <h2 className="mb-3 text-white">Built around the Score.</h2>
            <p className="text-[17px] text-white/85">
              14 features. One number that tells you whether they&rsquo;re working.
            </p>
          </div>

          {/* Bento grid */}
          <div
            className="mx-auto grid max-w-5xl gap-3 md:gap-4"
            style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}
          >
            {/* HERO — Muscle Guard Score, spans 2x2 */}
            <div
              className="rounded-2xl p-5 md:p-6 md:col-span-2 md:row-span-2 flex flex-col justify-between min-h-[280px]"
              style={{
                background: 'linear-gradient(135deg, #0F7B6C 0%, #0A5A4F 100%)',
                border: '1px solid rgba(94,227,200,0.25)',
              }}
            >
              <div className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[1.4px] text-white">
                <span style={{ color: '#E0B056' }}>★</span> Muscle Guard Score
              </div>
              <div className="flex items-end gap-5">
                <div className="relative" style={{ width: 130, height: 130, flexShrink: 0 }}>
                  <svg viewBox="0 0 130 130" style={{ width: '100%', height: '100%' }}>
                    <circle cx="65" cy="65" r="54" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="9" />
                    <circle cx="65" cy="65" r="54" fill="none" stroke="#E0B056" strokeWidth="9" strokeDasharray="339" strokeDashoffset="78" strokeLinecap="round" transform="rotate(-90 65 65)" />
                  </svg>
                  <div className="absolute inset-0 grid place-items-center">
                    <div className="text-center">
                      <div className="text-[44px] font-extrabold leading-none text-white">78</div>
                      <div className="mt-1 text-[10px] font-semibold uppercase tracking-[1.2px]" style={{ color: '#E0B056' }}>Excellent</div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="mb-1 flex justify-between text-[13px] text-white"><span>Protein</span><span className="font-semibold">86%</span></div>
                  <div className="mb-3 h-1.5 w-full rounded-full" style={{ background: 'rgba(255,255,255,0.2)' }}>
                    <div className="h-full rounded-full" style={{ width: '86%', background: '#E0B056' }} />
                  </div>
                  <div className="mb-1 flex justify-between text-[13px] text-white"><span>Training</span><span className="font-semibold">4/5</span></div>
                  <div className="mb-3 h-1.5 w-full rounded-full" style={{ background: 'rgba(255,255,255,0.2)' }}>
                    <div className="h-full rounded-full" style={{ width: '80%', background: '#FFFFFF' }} />
                  </div>
                  <div className="mb-1 flex justify-between text-[13px] text-white"><span>Body comp</span><span className="font-semibold">-3.2%</span></div>
                  <div className="h-1.5 w-full rounded-full" style={{ background: 'rgba(255,255,255,0.2)' }}>
                    <div className="h-full rounded-full" style={{ width: '65%', background: '#5EE3C8' }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Top right pair */}
            <FeatureTile icon="🔒" iconColor="#5EE3C8" eyebrow="Privacy first" label="No trackers" sub="POPIA · GDPR · CCPA" />
            <FeatureTile icon="🔥" iconColor="#E0B056" eyebrow="Plateau Protocol" label="Day 6/14" sub="3-pillar reset" />

            {/* Row 2 right pair */}
            <FeatureTile icon="🤢" iconColor="#5EE3C8" eyebrow="Nausea Protocol" label="Safe bites" sub="Shot-day weeks" />
            <FeatureTile icon="🏋" iconColor="#5EE3C8" eyebrow="Training Hub" label="4/5 sessions" sub="Z1–Z5 cardio" />

            {/* Row 3 — accent tiles */}
            <FeatureTile icon="📈" iconColor="#5EE3C8" eyebrow="Trends" sub="Doctor view" accent="teal" />
            <FeatureTile icon="🤖" iconColor="#E0B056" eyebrow="Pattern Read" sub="AI weekly · Pro" accent="gold" />
            <FeatureTile icon="📷" iconColor="#E0B056" eyebrow="Snap to Log" sub="AI plate · Pro" accent="gold" />
            <FeatureTile icon="📐" iconColor="#5EE3C8" eyebrow="Body Check" sub="PoseGuide + WHtR" />

            {/* Row 4 — utility */}
            <FeatureTile icon="📄" iconColor="#5EE3C8" eyebrow="Clinical PDF" sub="10-min visit" />
            <FeatureTile icon="⚕" iconColor="#5EE3C8" eyebrow="Symptom Log" sub="17 categories" />
            <FeatureTile icon="💊" iconColor="#5EE3C8" eyebrow="Drug Reference" sub="Per-brand titration" />
            <FeatureTile icon="⌚" iconColor="#5EE3C8" eyebrow="Apple Health" sub="+ Health Connect" />
          </div>

          {/* Achievements strip */}
          <div
            className="mx-auto mt-4 flex max-w-5xl items-center justify-between gap-4 rounded-2xl px-5 py-4"
            style={{
              background: 'linear-gradient(90deg, rgba(224,176,86,0.18) 0%, rgba(15,123,108,0.18) 100%)',
              border: '1px solid rgba(224,176,86,0.3)',
            }}
          >
            <div className="flex items-center gap-3">
              <span className="text-[22px]" style={{ color: '#E0B056' }}>🏆</span>
              <div>
                <div className="text-[12px] font-semibold uppercase tracking-[1.2px]" style={{ color: '#E0B056' }}>30+ achievements</div>
                <div className="text-[14px] font-medium text-white">Streaks · pillar milestones · shareable cards</div>
              </div>
            </div>
            <div className="hidden gap-2 sm:flex">
              {[3, 7, 30, 100].map((n, i) => (
                <div
                  key={n}
                  className="grid h-8 w-8 place-items-center rounded-full text-[12px] font-semibold text-white"
                  style={{ background: i === 3 ? 'rgba(224,176,86,0.5)' : 'rgba(224,176,86,0.3)' }}
                >{n}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="comparison" className="bg-brand-green py-20 text-white">
        <div className="wrap">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="eyebrow mb-3" style={{ color: 'rgba(255,255,255,0.85)' }}>The category</div>
            <h2 className="mb-3 text-white">Muscle Guard vs other industry apps.</h2>
            <p className="text-[17px] text-white/80">The differences that matter, side by side.</p>
          </div>
          <ComparisonTable />
        </div>
      </section>

      <section className="py-20">
        <div className="wrap">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="eyebrow eyebrow-green mb-3">Three things that make us different</div>
            <h2 className="mb-3">Built for GLP-1. Tuned for muscle. Ready for your doctor.</h2>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
            <div className="rounded-card border border-rule bg-white p-6">
              <div className="text-[14px] uppercase tracking-[1.5px] text-brand-green">01</div>
              <h3 className="mt-3 text-[18px]">GLP-1-first design</h3>
              <p className="mt-2 text-[14px] text-muted">
                Every feature is tuned for the GLP-1 user — reduced appetite, nausea protocols, food noise tracking, plateau science, injection rotation, titration schedules. Not a generic weight-loss tracker bolted onto a meds reminder.
              </p>
            </div>
            <div className="rounded-card border border-rule bg-white p-6">
              <div className="text-[14px] uppercase tracking-[1.5px] text-brand-green">02</div>
              <h3 className="mt-3 text-[18px]">Muscle protection as the headline</h3>
              <p className="mt-2 text-[14px] text-muted">
                What you keep matters more than what you lose. The Muscle Guard Score, the 40% protein weighting, the strength-streak hero, the Plateau Protocol — they all point at the same idea: don&apos;t end this journey weaker than you started.
              </p>
            </div>
            <div className="rounded-card border border-rule bg-white p-6">
              <div className="text-[14px] uppercase tracking-[1.5px] text-brand-green">03</div>
              <h3 className="mt-3 text-[18px]">Clinician-ready data</h3>
              <p className="mt-2 text-[14px] text-muted">
                The Clinical Summary PDF is designed to land cleanly in a 10-minute doctor visit. Not a wall of charts — a structured report with patterns surfaced, symptom timelines plotted against injections, and clear caveats about what the app does and does not claim.
              </p>
            </div>
          </div>
        </div>
      </section>

      {liveArticles.length > 0 && (
        <section
          className="relative py-20 bg-cover bg-center"
          style={{ backgroundImage: "url('/backgrounds/field-notes-bg.jpg')" }}
        >
          {/* 40% white overlay so the green illustration shows through more — keep text readable with shadows below */}
          <div className="absolute inset-0 bg-white/40" aria-hidden="true"></div>
          <div className="wrap relative">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <div className="eyebrow eyebrow-green mb-3" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.4)' }}>Field notes</div>
              <h2 className="mb-3" style={{ color: '#FFFFFF', textShadow: '0 2px 8px rgba(0,0,0,0.45)' }}>The research, in plain English.</h2>
              <p className="text-[17px]" style={{ color: '#FFFFFF', textShadow: '0 1px 4px rgba(0,0,0,0.45)' }}>
                A free, cited library of evidence on GLP-1s and muscle. Updated when the science updates.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {liveArticles.map((a) => (
                <Link key={a.slug} href={`/research/${a.slug}/`} className="block rounded-card border border-rule bg-white p-6 no-underline transition hover:border-brand-green">
                  <div className="mb-3 text-[12px] uppercase tracking-[1px] text-muted">{a.dateModified}</div>
                  <h3 className="mb-2 text-[17px] text-ink">{a.title}</h3>
                  <p className="text-[14px] text-muted">{a.description}</p>
                </Link>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link className="btn btn-outline" href="/research/">See all research →</Link>
            </div>
          </div>
        </section>
      )}

      <section id="pricing" className="py-20">
        <div className="wrap">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="eyebrow eyebrow-green mb-3">Pricing</div>
            <h2 className="mb-3">Free to start. Pro covers what AI costs us.</h2>
            <p className="text-[17px] text-muted">Honest pricing. No card needed for the 7-day Pro trial.</p>
          </div>
          <div className="text-center"><PricingToggle /></div>
          <div className="mx-auto mt-10 max-w-3xl rounded-lg border-l-4 border-gold bg-gold-bg p-5 text-[14px]">
            <strong className="text-gold">AI cost transparency.</strong> Snap-to-Log, Pattern Read, and Gemini-powered features cost us money per request. Pro covers that and keeps the app honest. We will never sell your data to subsidise free AI.
          </div>
        </div>
      </section>

      <section className="bg-brand-green-bg py-20">
        <div className="wrap">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="eyebrow eyebrow-green mb-3">The differentiator</div>
            <h2 className="mb-3">How muscle preservation works on a GLP-1</h2>
            <p className="text-[17px] text-muted">
              The mechanism, the prevention plan, and the studies that ground both.
            </p>
          </div>
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div className="space-y-5 text-[15px] leading-relaxed text-ink">
              <p>
                GLP-1 receptor agonists suppress appetite and slow gastric emptying so effectively that most users enter a sustained calorie and protein deficit. Without adequate protein intake and a resistance-training stimulus, the body mobilises both fat and muscle for energy — producing the lean-mass-loss share that shows up consistently in body-composition substudies of the major trials.
              </p>
              <p>
                The prevention plan is well-established: <strong>1.2 to 1.6 g of protein per kg of body weight per day</strong>, <strong>resistance training 2 to 4 times per week</strong>, avoid extreme calorie restriction, and track strength and body composition — not just weight.
              </p>
              <p>
                Muscle Guard is built around that plan. Every feature, every milestone, every metric is in service of one thing: fat loss without muscle loss.
              </p>
              <div className="pt-2">
                <Link className="btn" href="/research/glp1-and-muscle-loss/">
                  Read the cornerstone article →
                </Link>
              </div>
            </div>
            <div className="rounded-card bg-white p-7 shadow-lg">
              <div className="eyebrow mb-5 text-gold" style={{ letterSpacing: '1.6px' }}>
                Lean mass loss as % of total weight loss
              </div>
              <div className="mb-2 text-[12px] font-semibold uppercase tracking-[1.2px] text-ink">
                Without intervention
              </div>
              <div className="mb-2 h-3.5 w-full overflow-hidden rounded-full bg-brand-green-bg">
                <div className="h-full rounded-full" style={{ width: '85%', background: '#C97E1A' }} />
              </div>
              <div className="mb-6 text-[17px] font-bold text-ink">25 – 40%</div>
              <div className="mb-2 text-[12px] font-semibold uppercase tracking-[1.2px] text-ink">
                With protein + training
              </div>
              <div className="mb-2 h-3.5 w-full overflow-hidden rounded-full bg-brand-green-bg">
                <div className="h-full rounded-full" style={{ width: '18%', background: '#0F7B6C' }} />
              </div>
              <div className="mb-6 text-[17px] font-bold text-ink">Substantially less</div>
              <hr className="my-5 border-rule" />
              <p className="text-[12px] text-muted">
                Phase-3 trial body-composition data, structured-intervention arms. Sources cited in{' '}
                <Link className="text-brand-green underline" href="/research/glp1-and-muscle-loss/">
                  the cornerstone
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="download" className="bg-brand-green py-20 text-white">
        <div className="wrap text-center">
          <div className="eyebrow mb-3" style={{ color: 'rgba(255,255,255,0.85)' }}>Get started</div>
          <h2 className="mb-3 text-white">Start your GLP-1 journey strong.</h2>
          <p className="mb-8 text-white/85">Free to download. 7-day Pro trial. Cancel anytime. No card needed.</p>
          <div className="flex justify-center"><StoreButtons variant="light" /></div>
        </div>
      </section>
    </>
  );
}
