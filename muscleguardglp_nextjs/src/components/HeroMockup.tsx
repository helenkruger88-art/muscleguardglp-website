'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

/**
 * HeroMockup — real app screenshot inside an iPhone bezel.
 * Slanted by default + parallax tilt/lift responding to page scroll.
 * Reduced-motion users get the static slant only.
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
        const progress = Math.max(0, Math.min(1, (vh - rect.top) / (vh + rect.height)));
        const rotZ = -6 + progress * 8;
        const rotY = -4 + progress * 8;
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
        className="relative w-full max-w-[340px] will-change-transform"
        style={{ transform: 'perspective(1200px) rotateY(-4deg) rotateZ(-6deg)' }}
      >
        {/* iPhone bezel */}
        <div
          className="overflow-hidden rounded-[40px] bg-ink"
          style={{
            padding: 10,
            boxShadow:
              '0 40px 90px -20px rgba(15, 123, 108, 0.45), 0 15px 40px -10px rgba(0,0,0,0.55)',
          }}
        >
          <div className="overflow-hidden rounded-[32px] bg-white">
            <Image
              src="/screenshots/01-home.jpg"
              alt="Muscle Guard home dashboard — Muscle Guard Score, weekly macros, and medication tracking"
              width={1242}
              height={2688}
              priority
              sizes="(max-width: 768px) 90vw, 340px"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
