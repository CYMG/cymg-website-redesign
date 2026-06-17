import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

const structure = [
  { level: 1, title: 'UN Environment Assembly (UNEA)', desc: 'The world\'s highest-level decision-making body on the environment. All 193 UN Member States are members.' },
  { level: 2, title: 'Committee of Accredited Organisations', desc: 'Accredited organizations participate in UNEP processes through this committee structure.' },
  { level: 3, title: 'Global Steering Committee', desc: 'CYMG\'s strategic leadership body, composed of Global Coordinators who guide the organization\'s direction.' },
  { level: 4, title: 'Operations Facilitation Team', desc: 'Volunteers who manage day-to-day operations including communications, outreach, and event coordination.' },
  { level: 5, title: 'Policy Coordination Group', desc: 'Coordinates policy positions across working groups and ensures alignment with UNEA priorities.' },
  { level: 6, title: '13 Working Groups + 6+ Regional Groups', desc: 'Thematic and regional structures through which members engage on specific environmental issues.' },
];

export default function Governance() {
  return (
    <div style={{ backgroundColor: 'var(--paper)' }}>
      <div className="pt-24 pb-16 px-6" style={{ backgroundColor: 'var(--canopy-green)' }}>
        <div className="max-w-[1320px] mx-auto">
          <Breadcrumbs items={[{ label: 'Governance' }]} />
          <h1 className="text-h1 font-display font-bold mt-4" style={{ color: 'var(--paper)' }}>
            Governance
          </h1>
        </div>
      </div>

      <div className="max-w-[1320px] mx-auto px-6 py-16 md:py-24">
        <p className="text-body-lg max-w-[65ch] mb-16" style={{ color: 'var(--ink)' }}>
          CYMG operates through a multi-layered governance structure that ensures both broad
          participation and effective decision-making. Our institutional framework connects grassroots
          youth environmental action to the highest levels of UN environmental governance.
        </p>

        {/* Structure diagram */}
        <div className="flex flex-col gap-4 mb-16">
          {structure.map((node, i) => (
            <div key={i} className="flex items-start gap-4">
              <div
                className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold font-display"
                style={{
                  backgroundColor: i < 2 ? 'var(--assembly-blue)' : i < 4 ? 'var(--canopy-green)' : 'var(--clay)',
                  color: 'var(--paper)',
                }}
              >
                {node.level}
              </div>
              <div
                className="flex-1 rounded-[20px] p-5"
                style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--line)' }}
              >
                <h3 className="font-display text-lg font-medium mb-1" style={{ color: 'var(--ink)' }}>
                  {node.title}
                </h3>
                <p className="text-sm" style={{ color: 'var(--ink-60)' }}>
                  {node.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Accountability */}
        <div
          className="rounded-[20px] p-8 mb-16"
          style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--line)' }}
        >
          <h2 className="text-h3 font-display mb-4" style={{ color: 'var(--ink)' }}>
            Accountability & Transparency
          </h2>
          <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--ink-60)' }}>
            CYMG is committed to transparent governance. Our annual reports, financial statements,
            and meeting minutes are published in the Documents section of this website.
            All Steering Committee decisions are documented and shared with the membership.
          </p>
          <Link
            to="/documents"
            className="inline-flex items-center gap-2 text-sm font-medium"
            style={{ color: 'var(--assembly-blue)' }}
          >
            View Documents <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}
