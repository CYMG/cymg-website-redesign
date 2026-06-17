import { useState, useMemo } from 'react';
import { teamMembers, roleCategoryFilters, regionFilters } from '@/data/teamMembers';
import PersonCard from '@/components/ui/PersonCard';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

export default function Team() {
  const [roleFilter, setRoleFilter] = useState('all');
  const [regionFilter, setRegionFilter] = useState('all');

  const filtered = useMemo(() => {
    return teamMembers.filter((m) => {
      if (roleFilter !== 'all' && m.roleCategory !== roleFilter) return false;
      if (regionFilter !== 'all' && m.region !== regionFilter) return false;
      return true;
    });
  }, [roleFilter, regionFilter]);

  return (
    <div style={{ backgroundColor: 'var(--paper)' }}>
      <div className="pt-24 pb-16 px-6" style={{ backgroundColor: 'var(--ink)' }}>
        <div className="max-w-[1320px] mx-auto">
          <Breadcrumbs items={[{ label: 'Our Team' }]} />
          <h1 className="text-h1 font-display font-bold mt-4" style={{ color: 'var(--paper)' }}>
            Our Team
          </h1>
          <p className="text-body-lg mt-4 max-w-[600px]" style={{ color: 'var(--ink-60)', opacity: 0.8 }}>
            The volunteers steering CYMG across 6 regions and 13 working groups.
          </p>
        </div>
      </div>

      <div className="max-w-[1320px] mx-auto px-6 py-16 md:py-24">
        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-10">
          <div className="flex flex-wrap gap-2">
            {roleCategoryFilters.map((f) => (
              <button
                key={f.value}
                onClick={() => setRoleFilter(f.value)}
                className="text-mono-sm px-4 py-2 rounded-full transition-all"
                style={{
                  backgroundColor: roleFilter === f.value ? 'var(--assembly-blue)' : 'var(--surface)',
                  color: roleFilter === f.value ? 'var(--paper)' : 'var(--ink)',
                  border: roleFilter === f.value ? 'none' : '1px solid var(--line)',
                }}
              >
                {f.label}
              </button>
            ))}
          </div>
          <select
            value={regionFilter}
            onChange={(e) => setRegionFilter(e.target.value)}
            className="px-4 py-2 rounded-full text-mono-sm outline-none"
            style={{
              backgroundColor: 'var(--surface)',
              border: '1px solid var(--line)',
              color: 'var(--ink)',
            }}
          >
            <option value="all">All Regions</option>
            {regionFilters.map((r) => (
              <option key={r} value={r}>{r}</option>
            ))}
          </select>
        </div>

        {/* Directory */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((member) => (
            <PersonCard
              key={member.id}
              name={member.name}
              role={member.role}
              country={member.country}
              email={member.email}
              isVacant={member.isVacant}
              tags={member.region ? [member.region] : undefined}
            />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="text-body-lg" style={{ color: 'var(--ink-60)' }}>
              No team members match the selected filters.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
