// Per build brief §3.9: surface privacy posture near the hero, not only inside feature cards.
// These are real category differentiators — give them weight.
export function TrustBadgeRow() {
  const items = [
    'No third-party trackers',
    'One-tap account delete',
    'POPIA · GDPR · CCPA',
    'Built in Johannesburg',
  ];
  return (
    <div className="mx-auto mt-10 flex max-w-3xl flex-wrap items-center gap-3">
      {items.map((label) => (
        <span
          key={label}
          className="inline-flex items-center gap-2 rounded-full px-4 py-2"
          style={{
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(94,227,200,0.25)',
            color: '#FFFFFF',
            fontSize: 15,
            fontWeight: 500,
          }}
        >
          <span
            aria-hidden="true"
            style={{
              display: 'grid',
              placeItems: 'center',
              width: 22,
              height: 22,
              borderRadius: '50%',
              background: '#0F7B6C',
              color: '#FFFFFF',
              fontSize: 13,
              fontWeight: 700,
              lineHeight: 1,
            }}
          >✓</span>
          <span>{label}</span>
        </span>
      ))}
    </div>
  );
}
