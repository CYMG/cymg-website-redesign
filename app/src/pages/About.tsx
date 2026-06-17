import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Minus } from 'lucide-react';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import NewsletterCTA from '@/components/ui/NewsletterCTA';

const mandates = [
  { code: 'A/RES/68/288', context: 'Established the post-2015 development agenda process, reinforcing youth participation in environmental decision-making' },
  { code: 'A/RES/67/290', context: 'Created the High-Level Political Forum on Sustainable Development, mandating stakeholder engagement including Major Groups' },
  { code: 'A/69/L.43', context: 'Transforming our world: the 2030 Agenda for Sustainable Development — embedding youth as critical agents of change' },
  { code: 'A/RES/70/1', context: 'Adopted the 2030 Agenda, recognizing children and youth as essential partners in sustainable development implementation' },
];

const avenues = [
  { title: 'United Nations Environment Assembly (UNEA)', description: 'Engaging in its subsidiary organs, regional preparatory processes, and the implementation of UNEA resolutions.' },
  { title: 'Multilateral Environmental Agreements (MEAs)', description: 'Administered by UNEP, such as CITES, CMS, and the Vienna Convention and Montreal Protocol.' },
  { title: 'Science-Policy Interfaces', description: 'Contributing to processes like IPCC, IPBES, IRP, GEO, the Adaptation Gap Report, the Global Emissions Gap Report, the Global Chemicals Outlook, and the Global Waste Management Outlook.' },
];

export default function About() {
  const [openMandate, setOpenMandate] = useState<number | null>(null);

  return (
    <div style={{ backgroundColor: 'var(--paper)' }}>
      {/* Hero */}
      <div
        className="pt-24 pb-16 px-6"
        style={{ backgroundColor: 'var(--assembly-blue)' }}
      >
        <div className="max-w-[1320px] mx-auto">
          <Breadcrumbs items={[{ label: 'About CYMG' }]} />
          <h1 className="text-h1 font-display font-bold mt-4" style={{ color: 'var(--paper)' }}>
            About CYMG
          </h1>
        </div>
      </div>

      <div className="max-w-[1320px] mx-auto px-6 py-16 md:py-24">
        {/* Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <span className="text-mono-label block mb-4" style={{ color: 'var(--ink-60)' }}>
              MISSION
            </span>
            <p className="text-body-lg leading-relaxed mb-6" style={{ color: 'var(--ink)' }}>
              The Children and Youth Major Group (CYMG) is a globally recognized umbrella mechanism
              representing youth networks, organizations and individuals committed to addressing the
              triple planetary crisis of climate change, biodiversity loss and pollution.
            </p>
            <p className="text-body-lg leading-relaxed" style={{ color: 'var(--ink)' }}>
              As the formal youth engagement mechanism to the United Nations Environment Programme
              (UNEP), CYMG plays a vital role in advocating for the inclusion, empowerment, and
              meaningful participation of young people in global environmental governance.
            </p>
          </div>
          <div
            className="rounded-[20px] p-8 md:p-12 flex items-center"
            style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--line)' }}
          >
            <blockquote>
              <span className="font-display text-6xl leading-none" style={{ color: 'var(--assembly-blue)' }}>
                &ldquo;
              </span>
              <p
                className="font-display text-h2 italic -mt-4"
                style={{ color: 'var(--assembly-blue)' }}
              >
                Established through Agenda 21 of the Rio Conference in 1992, CYMG has been at the
                forefront of this advocacy within UNEP&rsquo;s processes and the broader UN system.
              </p>
            </blockquote>
          </div>
        </div>

        {/* Four Avenues */}
        <div className="mb-20">
          <span className="text-mono-label block mb-4" style={{ color: 'var(--ink-60)' }}>
            PRIMARY ENGAGEMENT AVENUES
          </span>
          <h2 className="text-h2 font-display mb-8" style={{ color: 'var(--ink)' }}>
            How We Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {avenues.map((a) => (
              <div
                key={a.title}
                className="rounded-[20px] p-6"
                style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--line)' }}
              >
                <h3 className="font-display text-lg font-medium mb-3" style={{ color: 'var(--ink)' }}>
                  {a.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-60)' }}>
                  {a.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mandate Citations */}
        <div className="mb-20">
          <span className="text-mono-label block mb-4" style={{ color: 'var(--ink-60)' }}>
            LEGAL BASIS
          </span>
          <h2 className="text-h2 font-display mb-8" style={{ color: 'var(--ink)' }}>
            Mandate
          </h2>
          <div style={{ borderTop: '1px solid var(--line)' }}>
            {mandates.map((m, i) => (
              <div
                key={m.code}
                className="py-4"
                style={{ borderBottom: '1px solid var(--line)' }}
              >
                <button
                  className="w-full flex items-center justify-between text-left"
                  onClick={() => setOpenMandate(openMandate === i ? null : i)}
                >
                  <span
                    className="font-mono text-sm font-medium"
                    style={{ color: 'var(--ink)' }}
                  >
                    {m.code}
                  </span>
                  {openMandate === i ? (
                    <Minus size={16} style={{ color: 'var(--ink-60)' }} />
                  ) : (
                    <Plus size={16} style={{ color: 'var(--ink-60)' }} />
                  )}
                </button>
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{
                    maxHeight: openMandate === i ? '200px' : '0',
                    opacity: openMandate === i ? 1 : 0,
                  }}
                >
                  <p className="text-sm pt-3 leading-relaxed" style={{ color: 'var(--ink-60)' }}>
                    {m.context}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-4 mb-16">
          <Link
            to="/about/history-mandate"
            className="btn-pill"
            style={{ backgroundColor: 'var(--assembly-blue)', color: 'var(--paper)' }}
          >
            History &amp; Mandate
          </Link>
          <Link
            to="/governance"
            className="btn-pill"
            style={{ backgroundColor: 'var(--surface)', color: 'var(--ink)', border: '1px solid var(--line)' }}
          >
            Governance
          </Link>
          <Link
            to="/team"
            className="btn-pill"
            style={{ backgroundColor: 'var(--surface)', color: 'var(--ink)', border: '1px solid var(--line)' }}
          >
            Our Team
          </Link>
        </div>

        <NewsletterCTA />
      </div>
    </div>
  );
}
