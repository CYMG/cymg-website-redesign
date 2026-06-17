import { useState } from 'react';
import { regions } from '@/data/regions';
import { teamMembers } from '@/data/teamMembers';
import { Mail, MapPin, Calendar, X } from 'lucide-react';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

export default function Regions() {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const activeRegion = regions.find((r) => r.id === selectedRegion);
  const facilitator = activeRegion
    ? teamMembers.find((m) => m.region === activeRegion.name && m.roleCategory === 'regional-facilitator')
    : undefined;

  return (
    <div style={{ backgroundColor: 'var(--paper)' }}>
      <div className="pt-24 pb-16 px-6" style={{ backgroundColor: 'var(--assembly-blue)' }}>
        <div className="max-w-[1320px] mx-auto">
          <Breadcrumbs items={[{ label: 'Regions' }]} />
          <h1 className="text-h1 font-display font-bold mt-4" style={{ color: 'var(--paper)' }}>
            Regions
          </h1>
          <p className="text-body-lg mt-4 max-w-[600px]" style={{ color: 'rgba(246,243,234,0.8)' }}>
            CYMG is organized across 6 UNEP regions plus special liaison seats, ensuring youth voices from every part of the world are heard.
          </p>
        </div>
      </div>

      <div className="max-w-[1320px] mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Region List */}
          <div className="lg:col-span-1">
            <div className="flex flex-col gap-2">
              {regions.map((region) => (
                <button
                  key={region.id}
                  onClick={() => setSelectedRegion(region.id === selectedRegion ? null : region.id)}
                  className="text-left rounded-xl px-5 py-4 transition-all duration-200"
                  style={{
                    backgroundColor: selectedRegion === region.id ? 'var(--surface)' : 'transparent',
                    border: selectedRegion === region.id ? '1px solid var(--assembly-blue)' : '1px solid var(--line)',
                  }}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-display font-medium" style={{ color: 'var(--ink)' }}>
                      {region.name}
                    </span>
                    {region.type === 'special' && (
                      <span
                        className="text-mono-sm px-2 py-0.5 rounded-full"
                        style={{ backgroundColor: 'var(--signal-lime)', color: '#0B1220', fontSize: '0.6rem' }}
                      >
                        SPECIAL
                      </span>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Region Detail Panel */}
          <div className="lg:col-span-2">
            {activeRegion ? (
              <div
                className="rounded-[20px] p-8"
                style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--line)' }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-h2 font-display mb-2" style={{ color: 'var(--ink)' }}>
                      {activeRegion.name}
                    </h2>
                    {activeRegion.type === 'special' && (
                      <span className="text-mono-sm" style={{ color: 'var(--clay)' }}>
                        Special Seat
                      </span>
                    )}
                  </div>
                  <button
                    onClick={() => setSelectedRegion(null)}
                    className="p-2 rounded-full hover:opacity-70"
                    style={{ color: 'var(--ink-60)' }}
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Facilitator */}
                <div className="mb-8">
                  <h3 className="text-mono-label mb-4" style={{ color: 'var(--ink-60)' }}>
                    REGIONAL FACILITATOR
                  </h3>
                  {facilitator && !facilitator.isVacant ? (
                    <div className="flex items-center gap-4">
                      <div
                        className="w-14 h-14 rounded-full flex items-center justify-center font-display text-xl font-bold"
                        style={{
                          background: 'linear-gradient(135deg, #0B1220, #15257A)',
                          color: 'var(--paper)',
                        }}
                      >
                        {facilitator.name.split(' ').map((w) => w[0]).slice(0, 2).join('')}
                      </div>
                      <div>
                        <p className="font-display font-medium" style={{ color: 'var(--ink)' }}>
                          {facilitator.name}
                        </p>
                        <p className="text-mono-sm" style={{ color: 'var(--ink-60)' }}>
                          {facilitator.country}
                        </p>
                        <a
                          href={`mailto:${facilitator.email}`}
                          className="inline-flex items-center gap-1 text-sm"
                          style={{ color: 'var(--assembly-blue)' }}
                        >
                          <Mail size={12} /> {facilitator.email}
                        </a>
                      </div>
                    </div>
                  ) : (
                    <div
                      className="rounded-xl px-5 py-4"
                      style={{ backgroundColor: 'var(--paper)', border: '1px dashed var(--line)' }}
                    >
                      <p className="text-sm italic" style={{ color: 'var(--ink-60)' }}>
                        Facilitator position currently vacant.{' '}
                        <a href="/join" className="font-medium" style={{ color: 'var(--assembly-blue)' }}>
                          Apply to volunteer
                        </a>.
                      </p>
                    </div>
                  )}
                </div>

                {/* Initiatives */}
                <div className="mb-8">
                  <h3 className="text-mono-label mb-4" style={{ color: 'var(--ink-60)' }}>
                    REGIONAL INITIATIVES
                  </h3>
                  <ul className="flex flex-col gap-2">
                    {activeRegion.initiatives.map((init) => (
                      <li key={init} className="flex items-center gap-2 text-sm" style={{ color: 'var(--ink)' }}>
                        <MapPin size={14} style={{ color: 'var(--canopy-green)' }} />
                        {init}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Events */}
                <div>
                  <h3 className="text-mono-label mb-4" style={{ color: 'var(--ink-60)' }}>
                    UPCOMING EVENTS
                  </h3>
                  <ul className="flex flex-col gap-2">
                    {activeRegion.events.map((evt) => (
                      <li key={evt.title} className="flex items-center gap-2 text-sm" style={{ color: 'var(--ink)' }}>
                        <Calendar size={14} style={{ color: 'var(--assembly-blue)' }} />
                        {evt.title} — {evt.date}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <div
                className="rounded-[20px] p-12 flex items-center justify-center text-center"
                style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--line)' }}
              >
                <div>
                  <MapPin size={32} className="mx-auto mb-4" style={{ color: 'var(--ink-60)' }} />
                  <p className="text-body-lg" style={{ color: 'var(--ink-60)' }}>
                    Select a region to view details
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
