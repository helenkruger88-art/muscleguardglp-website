// Per Helen's existing live site (commit a83ddb9): collapsed to "Muscle Guard" vs
// "Other industry apps" — no competitor names — both to remove legal exposure and
// to avoid having to keep competitor feature claims accurate over time.
export function ComparisonTable() {
  const rows = [
    { feature: 'Muscle preservation as headline', mg: 'Yes', other: 'No' },
    { feature: 'Body composition tracking', mg: 'Yes', other: 'Limited or partial' },
    { feature: 'Compounded sema / tirz support', mg: 'First-class', other: 'Rare or limited' },
    { feature: 'Clinical Summary PDF', mg: 'Yes', other: 'No' },
    { feature: 'Free, cited research library', mg: 'Yes', other: 'No' },
    { feature: 'No third-party trackers', mg: 'Yes', other: 'Varies; many use trackers' },
  ];

  return (
    <div className="mx-auto max-w-4xl">
      <div className="overflow-x-auto rounded-card border border-white/20 bg-white shadow-lg">
        <table className="w-full border-collapse text-left text-[14px]">
          <thead>
            <tr className="bg-brand-green text-white">
              <th className="px-4 py-3 font-semibold"></th>
              <th className="px-4 py-3 font-semibold">Muscle Guard</th>
              <th className="px-4 py-3 font-semibold">Other industry apps</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => {
              const isOdd = i % 2 === 1;
              const rowBg = isOdd ? 'bg-brand-green text-white' : 'bg-white text-ink';
              const mgClass =
                row.mg === 'Yes' || row.mg === 'First-class'
                  ? isOdd
                    ? 'font-semibold text-white'
                    : 'font-semibold text-brand-green'
                  : '';
              const otherClass = isOdd ? 'text-white/85' : 'text-ink/70';
              return (
                <tr key={row.feature} className={rowBg}>
                  <td className="px-4 py-3 font-medium">{row.feature}</td>
                  <td className={`px-4 py-3 ${mgClass}`}>{row.mg}</td>
                  <td className={`px-4 py-3 ${otherClass}`}>{row.other}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-[12px] italic text-white/80">
        Compiled June 2026 from publicly available marketing material across the GLP-1 tracker category. Inaccuracies? Email{' '}
        <a href="mailto:hello@muscleguardglp.com" className="text-white underline">hello@muscleguardglp.com</a>.
      </p>
    </div>
  );
}
