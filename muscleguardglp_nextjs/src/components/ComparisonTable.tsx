// Per build brief §2: keep the comparison table including its dated, sourced footnote.
// Per build brief §C1 sample: AI engines love extractable comparison tables.
export function ComparisonTable() {
  const rows = [
    { feature: 'Muscle preservation as headline', mg: 'Yes', shotsy: 'No', meagain: 'No', ww: 'No' },
    { feature: 'Body composition tracking', mg: 'Yes', shotsy: 'No', meagain: 'Partial', ww: 'Partial' },
    { feature: 'Compounded sema/tirz support', mg: 'First-class', shotsy: 'No', meagain: 'Limited', ww: 'No' },
    { feature: 'Clinical Report export', mg: 'Yes', shotsy: 'No', meagain: 'No', ww: 'No' },
    { feature: 'Free, cited research library', mg: 'Yes', shotsy: 'No', meagain: 'No', ww: 'No' },
    { feature: 'No third-party trackers', mg: 'Yes', shotsy: 'Unclear', meagain: 'No', ww: 'No' },
  ];

  return (
    <div className="mx-auto max-w-4xl">
      <div className="overflow-x-auto rounded-card border border-rule">
        <table className="w-full border-collapse text-left text-[14px]">
          <thead>
            <tr className="bg-brand-green-bg">
              <th className="px-4 py-3 font-medium text-ink"></th>
              <th className="px-4 py-3 font-medium text-brand-green-dark">Muscle Guard</th>
              <th className="px-4 py-3 font-medium text-ink">Shotsy</th>
              <th className="px-4 py-3 font-medium text-ink">MeAgain</th>
              <th className="px-4 py-3 font-medium text-ink">WW Med+</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={row.feature} className={i % 2 === 1 ? 'bg-bg' : ''}>
                <td className="px-4 py-3 font-medium">{row.feature}</td>
                <td className={`px-4 py-3 ${row.mg === 'Yes' || row.mg === 'First-class' ? 'font-medium text-brand-green' : ''}`}>{row.mg}</td>
                <td className="px-4 py-3 text-muted">{row.shotsy}</td>
                <td className="px-4 py-3 text-muted">{row.meagain}</td>
                <td className="px-4 py-3 text-muted">{row.ww}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-[12px] italic text-muted">
        Compiled June 2026 from publicly available marketing pages. Inaccuracies? Email{' '}
        <a href="mailto:research@muscleguardglp.com" className="text-brand-green">research@muscleguardglp.com</a>.
      </p>
    </div>
  );
}
