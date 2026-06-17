import { Calendar, Users, FileText, Globe } from 'lucide-react';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

const uneaCards = [
  { title: 'Youth Environment Assembly 2025', desc: 'The official youth forum leading into UNEA-7. Register to participate in Nairobi, 5–7 December 2025.', icon: Users, color: 'var(--signal-lime)', textColor: '#0B1220' },
  { title: 'Global Youth Day 2025', desc: 'Annual celebration of youth environmental action on 5 June 2025.', icon: Calendar, color: 'var(--canopy-green)' },
  { title: 'UNEA-7 Consultations', desc: 'Regional consultations and resolution drafting process for the seventh session.', icon: FileText, color: 'var(--assembly-blue)' },
  { title: 'Group of Friends', desc: 'A coalition of member states supportive of youth engagement in UNEP processes.', icon: Globe, color: 'var(--clay)' },
];

const cycleNodes = [
  { edition: 'UNEA-6', year: '2024', status: 'past', outcome: '15 resolutions adopted, including on science-policy panel and nature-based solutions' },
  { edition: 'UNEA-7', year: '2025', status: 'active', outcome: 'Youth declaration, consultations ongoing, 8–12 December in Nairobi' },
  { edition: 'UNEA-8', year: '2027', status: 'future', outcome: 'Planning begins post-UNEA-7' },
];

export default function UneaHub() {
  return (
    <div style={{ backgroundColor: 'var(--paper)' }}>
      <div className="pt-24 pb-16 px-6" style={{ backgroundColor: 'var(--assembly-blue)' }}>
        <div className="max-w-[1320px] mx-auto">
          <Breadcrumbs items={[{ label: 'UNEA & Core Processes' }]} />
          <h1 className="text-h1 font-display font-bold mt-4" style={{ color: 'var(--paper)' }}>
            UN Environment Assembly
          </h1>
          <p className="text-body-lg mt-4 max-w-[700px]" style={{ color: 'rgba(246,243,234,0.8)' }}>
            The world&apos;s highest-level decision-making body on the environment — and CYMG&apos;s central advocacy stage.
          </p>
        </div>
      </div>

      <div className="max-w-[1320px] mx-auto px-6 py-16 md:py-24">
        {/* UNEA Functions */}
        <div className="mb-16">
          <h2 className="text-h2 font-display mb-6" style={{ color: 'var(--ink)' }}>
            What UNEA Does
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Sets the global environmental agenda',
              'Provides overarching policy guidance',
              'Defines policy responses to emerging challenges',
              'Undertakes policy review and dialogue',
              'Fosters partnerships for achieving environmental goals',
              'Sets strategic guidance for UNEP',
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl px-5 py-4"
                style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--line)' }}
              >
                <div
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ backgroundColor: 'var(--assembly-blue)' }}
                />
                <span className="text-sm" style={{ color: 'var(--ink)' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Cycle Track */}
        <div className="mb-16">
          <h2 className="text-h2 font-display mb-6" style={{ color: 'var(--ink)' }}>
            The UNEA Cycle
          </h2>
          <div className="flex flex-col md:flex-row gap-4">
            {cycleNodes.map((node) => (
              <div
                key={node.edition}
                className="flex-1 rounded-[20px] p-6 relative"
                style={{
                  backgroundColor: 'var(--surface)',
                  border: node.status === 'active'
                    ? '2px solid var(--signal-lime)'
                    : node.status === 'future'
                    ? '2px dashed var(--line)'
                    : '1px solid var(--line)',
                }}
              >
                {node.status === 'active' && (
                  <span
                    className="absolute top-4 right-4 text-mono-sm px-2 py-0.5 rounded-full"
                    style={{ backgroundColor: 'var(--signal-lime)', color: '#0B1220', fontSize: '0.65rem' }}
                  >
                    CURRENT
                  </span>
                )}
                <span className="text-mono-label block mb-2" style={{ color: 'var(--ink-60)' }}>
                  {node.year}
                </span>
                <h3 className="font-display text-xl font-medium mb-2" style={{ color: 'var(--ink)' }}>
                  {node.edition}
                </h3>
                <p className="text-sm" style={{ color: 'var(--ink-60)' }}>
                  {node.outcome}
                </p>
              </div>
            ))}
          </div>
          <p className="text-sm mt-4" style={{ color: 'var(--ink-60)' }}>
            UNEA-7 will take place from <strong>8 to 12 December 2025</strong> at the UNEP headquarters in Nairobi, Kenya.
          </p>
        </div>

        {/* Subpage Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {uneaCards.map((card) => (
            <div
              key={card.title}
              className="rounded-[20px] p-6 flex items-start gap-4"
              style={{
                backgroundColor: card.color || 'var(--surface)',
                border: card.color ? 'none' : '1px solid var(--line)',
              }}
            >
              <card.icon
                size={24}
                style={{ color: card.textColor || 'var(--assembly-blue)', flexShrink: 0, marginTop: 2 }}
              />
              <div>
                <h3
                  className="font-display text-lg font-medium mb-1"
                  style={{ color: card.textColor || 'var(--ink)' }}
                >
                  {card.title}
                </h3>
                <p
                  className="text-sm mb-3"
                  style={{ color: card.textColor ? 'rgba(11,18,32,0.7)' : 'var(--ink-60)' }}
                >
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
