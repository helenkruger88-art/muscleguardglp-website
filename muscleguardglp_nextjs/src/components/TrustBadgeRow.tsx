// Per build brief §3.9: surface privacy posture near the hero, not only inside feature cards.
export function TrustBadgeRow() {
  const items = [
    'No third-party trackers',
    'One-tap account delete',
    'POPIA · GDPR · CCPA',
    'Built in Johannesburg',
  ];
  return (
    <div className="mx-auto mt-12 flex max-w-3xl flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[13px] text-muted">
      {items.map((label, i) => (
        <span key={label} className="flex items-center gap-2">
          <span aria-hidden="true" className="text-brand-green">✓</span>
          <span>{label}</span>
          {i < items.length - 1 && <span aria-hidden="true" className="opacity-40">·</span>}
        </span>
      ))}
    </div>
  );
}
