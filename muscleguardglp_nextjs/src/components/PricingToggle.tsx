'use client';

import { useEffect, useState } from 'react';
import { SITE } from '@/lib/site';

type Currency = keyof typeof SITE.pricing.plans;

// Per build brief §3.1: SSR renders ZAR default; this client component swaps values on user action only.
// Pro / Free feature lists lifted verbatim from the v14.1 Paywall section of the Feature Report.

// Map a BCP-47 locale (e.g. "en-US", "de-DE") to a supported currency.
// Privacy boundary: this uses navigator.language only — no IP lookup, no third-party call.
function inferCurrency(locale: string): Currency {
  const l = locale.toLowerCase();
  const country = l.split('-')[1];
  if (country === 'za') return 'ZAR';
  if (country === 'us' || country === 'ca') return 'USD';
  if (country === 'gb' || country === 'uk' || country === 'ie') return 'GBP';
  if (['de', 'fr', 'it', 'es', 'nl', 'be', 'at', 'pt', 'fi', 'gr', 'lu'].includes(country ?? '')) return 'EUR';
  if (l.startsWith('af') || l.startsWith('zu') || l.startsWith('xh')) return 'ZAR';
  return 'ZAR';
}

const LI =
  'pl-6 relative before:absolute before:left-0 before:top-2 before:h-2 before:w-3 before:rotate-[-45deg] before:border-b-2 before:border-l-2 before:border-brand-green';

export function PricingToggle() {
  const [currency, setCurrency] = useState<Currency>('ZAR');
  const [userPicked, setUserPicked] = useState(false);

  // After hydration, sniff the browser locale and default the toggle accordingly.
  // We only do this if the user has not already manually clicked a currency.
  useEffect(() => {
    if (userPicked) return;
    if (typeof navigator === 'undefined') return;
    const inferred = inferCurrency(navigator.language || 'en-ZA');
    if (inferred !== currency) setCurrency(inferred);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const plan = SITE.pricing.plans[currency];
  const currencies: Currency[] = ['ZAR', 'USD', 'EUR', 'GBP'];

  const proFeatures = [
    'Pattern Read — weekly AI verdict on what is trending up and down',
    'Deep Coach insights (Gemini-personalised, refreshed daily)',
    'Snap-to-Log — AI plate scan for foods and macros',
    'Pattern Detection in Trends (protein-on-training-days, plateau predictors, food noise quieting)',
    'Full Clinical Summary PDF features',
    'Customizable goals',
    'Unlimited progress photos + side-by-side compares',
  ];

  const freeFeatures = [
    'Core tracking — food, water, weight, workouts, symptoms, body measurements, photos',
    'Plateau Protocol — 14-day three-pillar reset',
    'Nausea Protocol — Safe Bites + hydration + sleep guidance',
    'Symptom Log — 17 categories, severity 0–3, red-flag detection',
    'Muscle Guard Score + Visceral Fat Rating',
    'Drug Reference — Ozempic, Wegovy, Mounjaro, Zepbound, Rybelsus, Saxenda, Trulicity, compounded',
    'Health Library (free, cited)',
    'Privacy-first deletion in one tap',
  ];

  return (
    <>
      <div role="tablist" aria-label="Currency" className="mx-auto mb-3 inline-flex gap-1 rounded-full bg-brand-green-bg p-1">
        {currencies.map((c) => (
          <button
            key={c}
            role="tab"
            aria-selected={currency === c}
            onClick={() => { setCurrency(c); setUserPicked(true); }}
            className={`rounded-full px-5 py-2 text-[13px] font-medium transition ${
              currency === c ? 'bg-brand-green text-white' : 'text-brand-green-dark hover:bg-white/60'
            }`}
          >
            {c}
          </button>
        ))}
      </div>
      <p className="mb-8 text-center text-[13px] text-muted">
        Outside South Africa?{' '}
        <a href="/regions/us/" className="text-brand-green underline">United States →</a>
        {' · '}
        <a href="/regions/eu/" className="text-brand-green underline">European Union →</a>
        {' · '}
        <a href="/regions/za/" className="text-brand-green underline">South Africa →</a>
      </p>

      <div className="mx-auto grid max-w-3xl gap-6 md:grid-cols-2">
        {/* Pro plan */}
        <div className="relative rounded-card border-2 border-brand-green bg-white p-8">
          <span className="absolute -top-3 right-6 rounded-full bg-brand-green px-3 py-1 text-[10px] font-bold uppercase tracking-[1.5px] text-white">
            Most popular
          </span>
          <h3 className="text-[22px]">Pro</h3>
          <div className="my-3 rounded-lg border-l-4 border-gold bg-gold-bg px-4 py-3 text-[13px] text-ink">
            ⚡ 7-day free trial — no card needed
          </div>
          <div className="my-2 text-[36px] font-semibold text-ink">
            {plan.monthly}
            <small className="ml-1 text-[14px] font-normal text-muted">/month</small>
          </div>
          <div className="mb-4 text-[13px] text-muted">
            or {plan.yearly} / year — save {plan.saving}
          </div>
          <ul className="my-4 list-none space-y-2 p-0 text-[14px]">
            {proFeatures.map((f) => (
              <li key={f} className={LI}>{f}</li>
            ))}
          </ul>
          <a className="btn" href="#download">Start free trial</a>
        </div>

        {/* Free plan */}
        <div className="rounded-card border border-rule bg-white p-8">
          <h3 className="text-[22px]">Free</h3>
          <div className="my-2 text-[36px] font-semibold text-ink">
            {currency === 'ZAR' ? 'R0' : currency === 'USD' ? '$0' : currency === 'EUR' ? '€0' : '£0'}
          </div>
          <div className="mb-4 text-[13px] text-muted">Track your basics, no card needed</div>
          <ul className="my-4 list-none space-y-2 p-0 text-[14px]">
            {freeFeatures.map((f) => (
              <li key={f} className={LI}>{f}</li>
            ))}
          </ul>
          <a className="btn btn-outline" href="#download">Download free</a>
        </div>
      </div>
    </>
  );
}
