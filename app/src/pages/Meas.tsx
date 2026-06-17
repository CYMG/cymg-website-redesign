import { ExternalLink, FileText, Globe, Award } from 'lucide-react';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

const engagements = [
  { title: 'Cartagena Convention Observer Entity', desc: 'CYMG holds formal Observer Entity status with the Cartagena Convention since 2023, enabling direct participation in Conference of Parties meetings.', icon: Award },
  { title: 'MOP35 Montreal Protocol', desc: 'Coordinated youth-observer nominations and policy input for the 35th Meeting of the Parties to the Montreal Protocol.', icon: FileText },
  { title: 'Montevideo Environmental Law Programme', desc: 'Active engagement with the fifth Programme for the Development and Periodic Review of Environmental Law.', icon: Globe },
];

const resources = [
  { title: 'InforMEA', desc: 'The UN Information Portal on Multilateral Environmental Agreements — access treaties, decisions, and national reports.', url: 'https://www.informea.org' },
  { title: 'InforMEA E-learning', desc: 'Free online courses on MEAs, environmental law, and governance topics.', url: 'https://elearning.informea.org' },
];

export default function Meas() {
  return (
    <div style={{ backgroundColor: 'var(--paper)' }}>
      <div className="pt-24 pb-16 px-6" style={{ backgroundColor: 'var(--canopy-green)' }}>
        <div className="max-w-[1320px] mx-auto">
          <Breadcrumbs items={[{ label: 'MEAs' }]} />
          <h1 className="text-h1 font-display font-bold mt-4" style={{ color: 'var(--paper)' }}>
            Multilateral Environmental Agreements
          </h1>
        </div>
      </div>

      <div className="max-w-[1320px] mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-h2 font-display mb-4" style={{ color: 'var(--ink)' }}>
              What are MEAs?
            </h2>
            <p className="text-body-lg leading-relaxed mb-4" style={{ color: 'var(--ink)' }}>
              Multilateral Environmental Agreements (MEAs) are international treaties that address
              environmental issues of global concern. They establish frameworks for cooperation among
              nations to tackle challenges such as biodiversity loss, climate change, chemical pollution,
              and ozone depletion.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-60)' }}>
              UNEP serves as the secretariat for several key MEAs including the Convention on
              Biological Diversity (CBD), the Convention on International Trade in Endangered Species
              (CITES), the Basel Convention, and the Montreal Protocol. CYMG engages with these
              processes to ensure youth perspectives are represented in environmental treaty
              implementation and negotiation.
            </p>
          </div>
          <div
            className="rounded-[20px] p-8"
            style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--line)' }}
          >
            <h3 className="font-display text-lg font-medium mb-4" style={{ color: 'var(--ink)' }}>
              Key MEAs UNEP Administers
            </h3>
            <ul className="flex flex-col gap-2">
              {[
                'Convention on Biological Diversity (CBD)',
                'CITES (Wildlife trade)',
                'Basel Convention (Hazardous waste)',
                'Stockholm Convention (POPs)',
                'Rotterdam Convention (PIC)',
                'Montreal Protocol (Ozone)',
                'UN Framework Convention on Climate Change (UNFCCC)',
                'UN Convention to Combat Desertification (UNCCD)',
                'Minamata Convention on Mercury',
              ].map((mea) => (
                <li key={mea} className="flex items-center gap-2 text-sm" style={{ color: 'var(--ink)' }}>
                  <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: 'var(--canopy-green)' }} />
                  {mea}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Engagement Record */}
        <div className="mb-16">
          <h2 className="text-h2 font-display mb-6" style={{ color: 'var(--ink)' }}>
            CYMG Engagement Record
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {engagements.map((e) => (
              <div
                key={e.title}
                className="rounded-[20px] p-6"
                style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--line)' }}
              >
                <e.icon size={24} className="mb-4" style={{ color: 'var(--canopy-green)' }} />
                <h3 className="font-display text-lg font-medium mb-2" style={{ color: 'var(--ink)' }}>
                  {e.title}
                </h3>
                <p className="text-sm" style={{ color: 'var(--ink-60)' }}>{e.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Resources */}
        <div>
          <h2 className="text-h2 font-display mb-6" style={{ color: 'var(--ink)' }}>
            Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resources.map((r) => (
              <a
                key={r.title}
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-[20px] p-6 flex items-start gap-4 transition-shadow hover:shadow-md"
                style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--line)' }}
              >
                <ExternalLink size={20} className="flex-shrink-0 mt-0.5" style={{ color: 'var(--assembly-blue)' }} />
                <div>
                  <h3 className="font-display font-medium mb-1" style={{ color: 'var(--ink)' }}>
                    {r.title}
                  </h3>
                  <p className="text-sm" style={{ color: 'var(--ink-60)' }}>{r.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
