export default function StatsStrip() {
  return (
    <section className="border-b border-line bg-surface">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-line">
          {[
            { value: '2012', label: 'Established' },
            { value: '13', label: 'Working groups' },
            { value: '6', label: 'Regions' },
            { value: '100+', label: 'Member organisations' },
          ].map((stat) => (
            <div key={stat.label} className="py-8 px-6 text-center">
              <div className="text-2xl md:text-3xl font-semibold text-ink mb-1">
                {stat.value}
              </div>
              <div className="text-xs uppercase tracking-wide text-[var(--ink-60)]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
