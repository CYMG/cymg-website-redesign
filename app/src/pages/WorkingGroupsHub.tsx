import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { workingGroups, clusterFilters, clusterColors } from '@/data/workingGroups';
import Badge from '@/components/ui/Badge';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

function WgBadgeIcon({ cluster }: { cluster: string }) {
  const color = clusterColors[cluster as keyof typeof clusterColors]?.color || '#2A4DFF';
  return (
    <div
      className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
      style={{ backgroundColor: color + '15' }}
    >
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        {cluster === 'pollution' && (
          <>
            <circle cx="16" cy="16" r="6" />
            <path d="M16 6v4M16 22v4M6 16h4M22 16h4M9.17 9.17l2.83 2.83M20 20l2.83 2.83M9.17 22.83l2.83-2.83M20 12l2.83-2.83" />
          </>
        )}
        {cluster === 'nature' && (
          <>
            <path d="M16 4C10 4 6 10 6 16s4 12 10 12 10-6 10-12S22 4 16 4z" />
            <path d="M16 10v12M12 14c2-2 8-2 8 0M12 18c2 2 8 2 8 0" opacity="0.5" />
          </>
        )}
        {cluster === 'policy' && (
          <>
            <rect x="6" y="4" width="20" height="24" rx="2" />
            <path d="M10 10h12M10 14h8M10 18h10M10 22h6" opacity="0.5" />
          </>
        )}
      </svg>
    </div>
  );
}

export default function WorkingGroupsHub() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filtered = useMemo(() => {
    if (activeFilter === 'all') return workingGroups;
    return workingGroups.filter((wg) => wg.cluster === activeFilter);
  }, [activeFilter]);

  return (
    <div style={{ backgroundColor: 'var(--paper)' }}>
      <div className="pt-24 pb-16 px-6" style={{ backgroundColor: 'var(--canopy-green)' }}>
        <div className="max-w-[1320px] mx-auto">
          <Breadcrumbs items={[{ label: 'Thematic Working Groups' }]} />
          <h1 className="text-h1 font-display font-bold mt-4" style={{ color: 'var(--paper)' }}>
            Thematic Working Groups
          </h1>
          <p className="text-body-lg mt-4 max-w-[600px]" style={{ color: 'rgba(246,243,234,0.8)' }}>
            13 groups coordinating global youth voices across every major environmental theme.
          </p>
        </div>
      </div>

      <div className="max-w-[1320px] mx-auto px-6 py-16 md:py-24">
        {/* Filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {clusterFilters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              className="text-mono-sm px-4 py-2 rounded-full transition-all duration-200"
              style={{
                backgroundColor: activeFilter === f.value ? 'var(--assembly-blue)' : 'var(--surface)',
                color: activeFilter === f.value ? 'var(--paper)' : 'var(--ink)',
                border: activeFilter === f.value ? 'none' : '1px solid var(--line)',
              }}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((wg) => (
            <Link
              key={wg.id}
              to={`/working-groups/${wg.slug}`}
              className="group rounded-[20px] p-6 flex flex-col items-start transition-shadow duration-300 hover:shadow-lg"
              style={{
                backgroundColor: 'var(--surface)',
                border: '1px solid var(--line)',
              }}
            >
              <WgBadgeIcon cluster={wg.cluster} />
              <Badge color={clusterColors[wg.cluster].color}>
                {clusterColors[wg.cluster].label}
              </Badge>
              <h3 className="font-display text-lg font-medium mt-3 mb-2" style={{ color: 'var(--ink)' }}>
                {wg.name}
              </h3>
              <p className="text-sm leading-relaxed flex-1" style={{ color: 'var(--ink-60)' }}>
                {wg.description}
              </p>
              <span
                className="text-sm font-medium mt-4 inline-flex items-center gap-1 transition-opacity group-hover:opacity-70"
                style={{ color: 'var(--assembly-blue)' }}
              >
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
