'use client';

import { useEffect, useRef } from 'react';

/**
 * HeroMockup — the original Muscle Guard hero device card, ported from the v2 static site.
 * Slanted by default + parallax tilt/lift responding to page scroll.
 * Reduced motion users get the static slant only — no scroll listener attached.
 */
export function HeroMockup() {
  const wrapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const prefersReduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduce) return;

    const el = wrapRef.current;
    if (!el) return;

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight || 800;
        // Progress: 0 when mockup top hits bottom of viewport, 1 when it leaves top.
        const progress = Math.max(0, Math.min(1, (vh - rect.top) / (vh + rect.height)));
        // Base slant -6deg, drifts toward +2deg as we scroll past.
        const rotZ = -6 + progress * 8;
        // Slight Y tilt for depth.
        const rotY = -4 + progress * 8;
        // Subtle lift.
        const translateY = (0.5 - progress) * 24;
        el.style.transform = `perspective(1200px) rotateY(${rotY}deg) rotateZ(${rotZ}deg) translateY(${translateY}px)`;
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="flex justify-center">
      <div
        ref={wrapRef}
        className="relative w-full max-w-[340px] transition-transform duration-100 ease-out will-change-transform"
        style={{ transform: 'perspective(1200px) rotateY(-4deg) rotateZ(-6deg)' }}
      >
        <div
          className="rounded-[28px] bg-white p-6 shadow-mockup"
          style={{
            background: 'linear-gradient(180deg, #FFFFFF 0%, #F7FAF9 100%)',
            boxShadow: '0 30px 80px -20px rgba(15, 123, 108, 0.35), 0 10px 30px -10px rgba(0,0,0,0.25)',
            border: '1px solid #E5E7E6',
          }}
        >
          <div className="mb-3 text-[11px] font-bold uppercase tracking-[1.4px] text-[#5F6E69]">
            Muscle Guard Score
          </div>

          {/* Score gauge */}
          <div className="relative mx-auto my-2 grid h-[180px] w-[180px] place-items-center">
            <svg viewBox="0 0 180 180" className="absolute inset-0" aria-hidden="true">
              <circle cx="90" cy="90" r="76" fill="none" stroke="#E8F4F1" strokeWidth="10" />
              <circle
                cx="90"
                cy="90"
                r="76"
                fill="none"
                stroke="#0F7B6C"
                strokeWidth="10"
                strokeDasharray="478"
                strokeDashoffset="105"
                strokeLinecap="round"
                transform="rotate(-90 90 90)"
              />
            </svg>
            <div className="relative text-center">
              <div className="text-[54px] font-extrabold leading-none text-[#1A2520]">78</div>
              <div className="mt-1 text-[12px] font-semibold uppercase tracking-[1.2px] text-[#0F7B6C]">
                Excellent
              </div>
            </div>
          </div>

          <div className="mt-6 mb-3 text-[11px] font-bold uppercase tracking-[1.4px] text-[#5F6E69]">
            This week&apos;s check-ins
          </div>
          <div className="grid grid-cols-6 gap-2">
            {[1, 1, 1, 1, 0.5, 1].map((v, i) => (
              <div
                key={i}
                className="h-7 rounded-md"
                style={{
                  background:
                    v === 1 ? '#0F7B6C' : v === 0.5 ? 'linear-gradient(90deg, #0F7B6C 50%, #E8F4F1 50%)' : '#E8F4F1',
                }}
              />
            ))}
          </div>

          {/* Mini stat row */}
          <div className="mt-6 grid grid-cols-3 gap-3 border-t border-[#E5E7E6] pt-4 text-center">
            <div>
              <div className="text-[18px] font-bold text-[#1A2520]">142g</div>
              <div className="text-[10px] uppercase tracking-[1px] text-[#5F6E69]">Protein</div>
            </div>
            <div>
              <div className="text-[18px] font-bold text-[#1A2520]">4 / 5</div>
              <div className="text-[10px] uppercase tracking-[1px] text-[#5F6E69]">Strength</div>
            </div>
            <div>
              <div className="text-[18px] font-bold text-[#C97E1A]">-3.2%</div>
              <div className="text-[10px] uppercase tracking-[1px] text-[#5F6E69]">Body fat</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
