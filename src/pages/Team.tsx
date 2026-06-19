import { useState, useMemo } from 'react';
import { teamMembers, roleCategoryFilters, regionFilters } from '@/data/teamMembers';
import PersonCard from '@/components/ui/PersonCard';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { motion } from 'framer-motion';
import { Users, Filter } from 'lucide-react';

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
    <div className="bg-paper dark:bg-ink min-h-screen">
      {/* Hero */}
      <div className="pt-16 pb-14 px-4 sm:px-6 lg:px-8 bg-surface border-b border-line text-ink">
        <div className="max-w-[1240px] mx-auto">
          <Breadcrumbs items={[{ label: 'Our Team' }]} />
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-semibold mt-6 "
          >
            Meet the <span className="text-[var(--unep-blue)]">Leaders</span>
          </motion.h1>
          <p className="text-lg text-[var(--ink-60)] mt-5 max-w-3xl leading-relaxed">
            The dedicated volunteers steering CYMG across 6 regions and 13 thematic working groups.
          </p>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto px-6 py-16">
        {/* Filters */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-sm border border-line dark:border-white/5 mb-12 flex flex-col lg:flex-row items-center gap-8 justify-between">
          <div className="flex items-center gap-3 self-start lg:self-auto">
            <Filter size={20} className="text-[var(--unep-blue)]" />
            <span className="font-semibold uppercase tracking-widest text-xs text-slate-500">Filter By</span>
          </div>
          
          <div className="flex flex-wrap gap-2 flex-1 justify-center lg:justify-start">
            {roleCategoryFilters.map((f) => (
              <button
                key={f.value}
                onClick={() => setRoleFilter(f.value)}
                className={`px-5 py-2 rounded-sm text-xs font-bold uppercase tracking-wider transition-all border ${
                  roleFilter === f.value
                    ? 'bg-[var(--unep-blue)] border-[var(--unep-blue)] text-white shadow-md'
                    : 'bg-transparent border-line dark:border-white/10 text-slate-500 hover:border-[var(--unep-blue)]'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="w-full lg:w-64">
            <select
              value={regionFilter}
              onChange={(e) => setRegionFilter(e.target.value)}
              className="w-full bg-slate-50 dark:bg-slate-800 border border-line dark:border-white/5 rounded-sm px-4 py-3 text-sm font-bold text-ink dark:text-paper focus:ring-2 focus:ring-[var(--unep-blue)] outline-none"
            >
              <option value="all">All Regions</option>
              {regionFilters.map((r) => (
                <option key={r} value={r}>{r}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Directory */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filtered.map((member, i) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 4) * 0.1 }}
            >
              <PersonCard
                name={member.name}
                role={member.role}
                country={member.country}
                email={member.email}
                isVacant={member.isVacant}
                tags={member.region ? [member.region] : undefined}
              />
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-32 bg-slate-50 dark:bg-slate-900/50 rounded-sm border-2 border-dashed border-line dark:border-white/5">
            <Users size={48} className="mx-auto text-slate-300 mb-4" />
            <h3 className="text-2xl font-bold text-slate-400">No members found</h3>
            <p className="text-slate-500 mt-2">Try adjusting your filters to see more results.</p>
          </div>
        )}
      </div>
    </div>
  );
}
