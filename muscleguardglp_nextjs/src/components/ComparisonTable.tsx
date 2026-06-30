// Per Helen's existing live site (commit a83ddb9): collapsed to "Muscle Guard" vs
// "Other industry apps" — no competitor names — both to remove legal exposure and
// to avoid having to keep competitor feature claims accurate over time.

type Verdict = 'yes' | 'star' | 'no' | 'partial';
type Row = {
  feature: string;
  mg: { verdict: Verdict; label: string };
  other: { verdict: Verdict; label: string };
};

const rows: Row[] = [
  { feature: 'Muscle preservation as headline', mg: { verdict: 'yes', label: 'Yes' }, other: { verdict: 'no', label: 'No' } },
  { feature: 'Body composition tracking', mg: { verdict: 'yes', label: 'Yes' }, other: { verdict: 'partial', label: 'Limited or partial' } },
  { feature: 'Compounded sema / tirz support', mg: { verdict: 'star', label: 'First-class' }, other: { verdict: 'partial', label: 'Rare or limited' } },
  { feature: 'Clinical Summary PDF', mg: { verdict: 'yes', label: 'Yes' }, other: { verdict: 'no', label: 'No' } },
  { feature: 'Open-access research hub', mg: { verdict: 'yes', label: 'Yes' }, other: { verdict: 'partial', label: 'Limited or behind email gate' } },
  { feature: 'No third-party trackers', mg: { verdict: 'yes', label: 'Yes' }, other: { verdict: 'partial', label: 'Varies; many use trackers' } },
];

function Pill({ verdict, label }: { verdict: Verdict; label: string }) {
  const styles: Record<Verdict, { bg: string; color: string; iconBg: string; iconColor: string; icon: string }> = {
    yes: { bg: 'transparent', color: '#0F7B6C', iconBg: '#0F7B6C', iconColor: '#FFFFFF', icon: '✓' },
    star: { bg: 'transparent', color: '#0F7B6C', iconBg: '#C97E1A', iconColor: '#FFFFFF', icon: '★' },
    no: { bg: 'transparent', color: '#888780', iconBg: '#E5E7E6', iconColor: '#888780', icon: '—' },
    partial: { bg: 'transparent', color: '#C97E1A', iconBg: '#FFF3E0', iconColor: '#C97E1A', icon: '⋯' },
  };
  const s = styles[verdict];
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: s.color, fontWeight: verdict === 'no' ? 400 : 500, fontSize: 14 }}>
      <span
        aria-hidden="true"
        style={{
          display: 'grid',
          placeItems: 'center',
          width: 22,
          height: 22,
          borderRadius: '50%',
          background: s.iconBg,
          color: s.iconColor,
          fontSize: verdict === 'partial' ? 14 : 12,
          fontWeight: 600,
          border: verdict === 'partial' ? '1.5px solid #C97E1A' : 'none',
          lineHeight: 1,
        }}
      >{s.icon}</span>
      <span>{label}</span>
    </span>
  );
}

export function ComparisonTable() {
  const mgYes = rows.filter((r) => r.mg.verdict === 'yes' || r.mg.verdict === 'star').length;
  const otherYes = rows.filter((r) => r.other.verdict === 'yes' || r.other.verdict === 'star').length;

  return (
    <div className="mx-auto max-w-4xl">
      <div className="overflow-hidden rounded-card border border-rule bg-white shadow-lg">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr style={{ background: '#F7FAF9', borderBottom: '0.5px solid #E5E7E6' }}>
              <th className="px-5 py-4 font-semibold" style={{ fontSize: 12, color: '#5F6E69', letterSpacing: '0.6px', textTransform: 'uppercase' }}>Feature</th>
              <th className="px-5 py-4 font-semibold" style={{ fontSize: 14, color: '#0F7B6C', background: 'rgba(15,123,108,0.06)' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                  <span aria-hidden="true" style={{ display: 'grid', placeItems: 'center', width: 22, height: 22, borderRadius: '50%', background: '#0F7B6C', color: '#fff', fontSize: 12 }}>✓</span>
                  Muscle Guard
                </span>
              </th>
              <th className="px-5 py-4 font-semibold" style={{ fontSize: 14, color: '#5F6E69' }}>Other industry apps</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.feature} style={{ borderBottom: '0.5px solid #F1EFE8' }}>
                <td className="px-5 py-4 font-medium" style={{ fontSize: 15, color: '#1A2520' }}>{row.feature}</td>
                <td className="px-5 py-4" style={{ background: 'rgba(15,123,108,0.06)' }}>
                  <Pill verdict={row.mg.verdict} label={row.mg.label} />
                </td>
                <td className="px-5 py-4">
                  <Pill verdict={row.other.verdict} label={row.other.label} />
                </td>
              </tr>
            ))}
            {/* Tally footer */}
            <tr style={{ borderTop: '0.5px solid #B8DDD3', background: 'linear-gradient(90deg, #E8F4F1 0%, #F7FAF9 100%)' }}>
              <td className="px-5 py-4 font-semibold" style={{ fontSize: 13, color: '#1A2520', letterSpacing: '0.4px', textTransform: 'uppercase' }}>Score</td>
              <td className="px-5 py-4" style={{ background: 'rgba(15,123,108,0.1)' }}>
                <span style={{ fontSize: 22, fontWeight: 600, color: '#0F7B6C' }}>{mgYes} / {rows.length}</span>
                <span style={{ fontSize: 12, color: '#5F6E69', marginLeft: 8 }}>differentiators</span>
              </td>
              <td className="px-5 py-4">
                <span style={{ fontSize: 22, fontWeight: 600, color: '#888780' }}>{otherYes} / {rows.length}</span>
                <span style={{ fontSize: 12, color: '#888780', marginLeft: 8 }}>on the headline differentiators</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-center" style={{ fontSize: 13, color: '#5F6E69', fontStyle: 'italic' }}>
        Compiled June 2026 from publicly available marketing material across the GLP-1 tracker category. Inaccuracies? Email{' '}
        <a href="mailto:hello@muscleguardglp.com" style={{ color: '#0F7B6C', textDecoration: 'underline' }}>hello@muscleguardglp.com</a>.
      </p>
    </div>
  );
}
