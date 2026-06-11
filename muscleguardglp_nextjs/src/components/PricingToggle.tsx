'use client';

import { useState } from 'react';
import { SITE } from '@/lib/site';

type Currency = keyof typeof SITE.pricing.plans;

// Per build brief §3.1: SSR renders ZAR default; this client component swaps values on user action only.
// Inactive currency variants are NOT in the HTML at render time.
export function PricingToggle() {
  const [currency, setCurrency] = useState<Currency>('ZAR');
  const plan = SITE.pricing.plans[currency];
  const currencies: Currency[] = ['ZAR', 'USD', 'EUR', 'GBP'];

  return (
    <>
      <div role="tablist" aria-label="Currency" className="mx-auto mb-8 inline-flex gap-1 rounded-full bg-brand-green-bg p-1">
        {currencies.map((c) => (
          <button
            key={c}
            role="tab"
            aria-selected={currency === c}
            onClick={() => setCurrency(c)}
            className={`rounded-full px-5 py-2 text-[13px] font-medium transition ${
              currency === c ? 'bg-brand-green text-white' : 'text-brand-green-dark hover:bg-white/60'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

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
            <li className="pl-6 relative before:absolute before:left-0 before:top-2 before:h-2 before:w-3 before:rotate-[-45deg] before:border-b-2 before:border-l-2 before:border-brand-green">
              Muscle Guard Score &amp; full body composition
            </li>
            <li className="pl-6 relative before:absolute before:left-0 before:top-2 before:h-2 before:w-3 before:rotate-[-45deg] before:border-b-2 before:border-l-2 before:border-brand-green">
              Unlimited AI plate scans
            </li>
            <li className="pl-6 relative before:absolute before:left-0 before:top-2 before:h-2 before:w-3 before:rotate-[-45deg] before:border-b-2 before:border-l-2 before:border-brand-green">
              Personal Coach pattern detection
            </li>
            <li className="pl-6 relative before:absolute before:left-0 before:top-2 before:h-2 before:w-3 before:rotate-[-45deg] before:border-b-2 before:border-l-2 before:border-brand-green">
              Branded Clinical Report export
            </li>
            <li className="pl-6 relative before:absolute before:left-0 before:top-2 before:h-2 before:w-3 before:rotate-[-45deg] before:border-b-2 before:border-l-2 before:border-brand-green">
              Progress photos &amp; comparison
            </li>
            <li className="pl-6 relative before:absolute before:left-0 before:top-2 before:h-2 before:w-3 before:rotate-[-45deg] before:border-b-2 before:border-l-2 before:border-brand-green">
              All 75 milestones unlocked
            </li>
            <li className="pl-6 relative before:absolute before:left-0 before:top-2 before:h-2 before:w-3 before:rotate-[-45deg] before:border-b-2 before:border-l-2 before:border-brand-green">
              Priority support
            </li>
          </ul>
          <a className="btn" href="#download">Start free trial</a>
        </div>

        {/* Free plan */}
        <div className="rounded-card border border-rule bg-white p-8">
          <h3 className="text-[22px]">Free</h3>
          <div className="my-2 text-[36px] font-semibold text-ink">
            {currency === 'ZAR' ? 'R0' : currency === 'USD' ? '$0' : currency === 'EUR' ? '€0' : '£0'}
            <small className="ml-1 text-[14px] font-normal text-muted"> forever</small>
          </div>
          <div className="mb-4 text-[13px] text-muted">Track your basics, no card needed</div>
          <ul className="my-4 list-none space-y-2 p-0 text-[14px]">
            <li className="pl-6 relative before:absolute before:left-0 before:top-2 before:h-2 before:w-3 before:rotate-[-45deg] before:border-b-2 before:border-l-2 before:border-brand-green">
              Injection &amp; tablet tracking
            </li>
            <li className="pl-6 relative before:absolute before:left-0 before:top-2 before:h-2 before:w-3 before:rotate-[-45deg] before:border-b-2 before:border-l-2 before:border-brand-green">
              3 AI plate scans per day
            </li>
            <li className="pl-6 relative before:absolute before:left-0 before:top-2 before:h-2 before:w-3 before:rotate-[-45deg] before:border-b-2 before:border-l-2 before:border-brand-green">
              Basic weight &amp; trend tracking
            </li>
            <li className="pl-6 relative before:absolute before:left-0 before:top-2 before:h-2 before:w-3 before:rotate-[-45deg] before:border-b-2 before:border-l-2 before:border-brand-green">
              10 milestones
            </li>
            <li className="pl-6 relative before:absolute before:left-0 before:top-2 before:h-2 before:w-3 before:rotate-[-45deg] before:border-b-2 before:border-l-2 before:border-brand-green">
              Privacy-first deletion in one tap
            </li>
          </ul>
          <a className="btn btn-outline" href="#download">Download free</a>
        </div>
      </div>
    </>
  );
}
