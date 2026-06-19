import { Calendar, Users, FileText, Globe, CheckCircle2 } from 'lucide-react';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { motion } from 'framer-motion';

const uneaCards = [
  { title: 'Youth Environment Assembly 2025', desc: 'The official youth forum leading into UNEA-7. Register to participate in Nairobi, 5–7 December 2025.', icon: Users, color: 'bg-blue-600', textColor: 'text-white' },
  { title: 'Global Youth Day 2025', desc: 'Annual celebration of youth environmental action on 5 June 2025.', icon: Calendar, color: 'bg-emerald-600', textColor: 'text-white' },
  { title: 'UNEA-7 Consultations', desc: 'Regional consultations and resolution drafting process for the seventh session.', icon: FileText, color: 'bg-amber-500', textColor: 'text-[#0A1128]' },
  { title: 'Group of Friends', desc: 'A coalition of member states supportive of youth engagement in UNEP processes.', icon: Globe, color: 'bg-slate-800', textColor: 'text-white' },
];

const cycleNodes = [
  { edition: 'UNEA-6', year: '2024', status: 'past', outcome: '15 resolutions adopted, including on science-policy panel and nature-based solutions' },
  { edition: 'UNEA-7', year: '2025', status: 'active', outcome: 'Youth declaration, consultations ongoing, 8–12 December in Nairobi' },
  { edition: 'UNEA-8', year: '2027', status: 'future', outcome: 'Planning begins post-UNEA-7' },
];

export default function UneaHub() {
  return (
    <div className="bg-paper dark:bg-ink min-h-screen">
      {/* Hero */}
      <div className="pt-16 pb-14 px-4 sm:px-6 lg:px-8 bg-surface border-b border-line text-ink">
        <div className="max-w-[1240px] mx-auto">
          <Breadcrumbs items={[{ label: 'UNEA & Core Processes' }]} />
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-semibold mt-6 "
          >
            UN Environment <span className="text-[var(--unep-blue)]">Assembly</span>
          </motion.h1>
          <p className="text-lg text-[var(--ink-60)] mt-5 max-w-3xl leading-relaxed">
            The world's highest-level decision-making body on the environment — and CYMG's central stage for global advocacy.
          </p>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto px-6 py-24">
        {/* UNEA & CPR Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-24">
          <div>
            <span className="text-[var(--unep-green)] font-medium uppercase tracking-wide text-sm mb-3 block">
              About UNEA
            </span>
            <h2 className="text-2xl md:text-3xl font-semibold text-ink mb-5">
              The world&apos;s highest-level environmental decision-making body
            </h2>
            <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed">
              <p>
                The United Nations Environment Assembly (UNEA) is the paramount global decision-making
                body dedicated to addressing environmental challenges. Its significance lies in its
                universal membership, comprising all 193 UN Member States, and the active engagement of
                Major Groups and Stakeholders (MGS).
              </p>
              <p>
                Biennially convened in Nairobi, Kenya, the Assembly convenes ministers and environmental
                authorities, serving as a pivotal forum for international collaboration. UNEA also serves
                as the governing body of the United Nations Environment Programme (UNEP). With the
                creation of UNEA, Major Groups were formalized as the civil society engagement mechanisms
                in UNEA and its subsidiary bodies.
              </p>
            </div>
          </div>

          <div>
            <span className="text-[var(--unep-green)] font-medium uppercase tracking-wide text-sm mb-3 block">
              About CPR
            </span>
            <h2 className="text-2xl md:text-3xl font-semibold text-ink mb-5">
              Committee of Permanent Representatives
            </h2>
            <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed">
              <p>
                The Committee of Permanent Representatives (CPR) is an intersessional subsidiary organ of
                UNEA. Comprising representatives from member countries, the CPR plays a pivotal role in
                facilitating communication and coordination between member states and UNEP.
              </p>
              <p>
                It serves as a conduit for ongoing discussions, negotiations, and decision-making
                processes related to environmental issues, and acts as a preparatory body for UNEA.
                Representatives to the CPR are typically ambassadors or senior diplomats based at the
                United Nations Office in Nairobi (UNON), where UNEP is headquartered.
              </p>
            </div>
          </div>
        </div>

        {/* Youth Engagement */}
        <div
          className="rounded-sm p-10 md:p-14 mb-24"
          style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--line)' }}
        >
          <span className="text-[var(--unep-green)] font-medium uppercase tracking-wide text-sm mb-3 block">
            Youth Engagement
          </span>
          <h2 className="text-2xl md:text-3xl font-semibold text-ink mb-5">
            How CYMG engages at UNEA and CPR
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-slate-600 dark:text-slate-400 leading-relaxed">
            <p>
              CYMG, as the designated official engagement mechanism for children and youth in the
              negotiations of UNEA, CPR, and other UNEP processes, plays a pragmatic and influential role
              within these critical forums.
            </p>
            <p>
              CYMG strategically established a Policy Coordination Group (PCG) that focuses on key policy
              issues, serving as a channel for gathering the perspectives of children and youth worldwide.
              Through comprehensive consultations, CYMG distills insights into formal policy
              interventions and statements, submitted in verbal and written formats through UNEP.
            </p>
            <p>
              Through PCG, the youth constituency nominates a dedicated group of representatives to
              actively participate in CPR meetings. This presence underscores the commitment to
              translating the opinions and aspirations of children and youth into tangible influence
              within these esteemed platforms.
            </p>
            <p>
              By doing so, CYMG stands as a formidable advocate, ensuring that the voices of the younger
              generation echo prominently in the decisions and actions taken at the highest levels of
              environmental governance.
            </p>
          </div>
        </div>

        {/* UNEA Functions */}
        <div className="mb-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-[var(--unep-green)] font-medium uppercase tracking-wide text-sm mb-3 block">
                Governance
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-ink dark:text-paper ">
                What UNEA Does
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Sets the global environmental agenda',
              'Provides overarching policy guidance',
              'Defines policy responses to emerging challenges',
              'Undertakes policy review and dialogue',
              'Fosters partnerships for environmental goals',
              'Sets strategic guidance for UNEP',
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-4 bg-white dark:bg-slate-900 p-6 rounded-sm border border-line dark:border-white/5 shadow-sm"
              >
                <CheckCircle2 className="text-[var(--unep-blue)] shrink-0 mt-1" size={20} />
                <span className="text-slate-700 dark:text-slate-300 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Cycle Track */}
        <div className="mb-24">
          <div className="mb-12">
            <span className="text-[var(--unep-green)] font-medium uppercase tracking-wide text-sm mb-3 block">
              Timeline
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-ink dark:text-paper ">
              The UNEA Cycle
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cycleNodes.map((node) => (
              <div
                key={node.edition}
                className={`relative p-8 rounded-sm border-2 transition-all duration-300 ${
                  node.status === 'active'
                    ? 'bg-white dark:bg-slate-900 border-[var(--unep-green)] scale-105 z-10'
                    : 'bg-slate-50 dark:bg-slate-900/50 border-transparent opacity-80'
                }`}
              >
                {node.status === 'active' && (
                  <span className="absolute -top-4 left-8 bg-[var(--unep-green)] text-[#0A1128] text-xs font-semibold px-4 py-1 rounded-sm uppercase tracking-widest">
                    Current Cycle
                  </span>
                )}
                <div className="text-slate-500 font-bold mb-2">{node.year}</div>
                <h3 className="text-2xl font-semibold text-ink dark:text-paper mb-4">{node.edition}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {node.outcome}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12 bg-blue-50 dark:bg-blue-900/20 p-6 rounded-sm border border-blue-100 dark:border-blue-900/30 text-center">
            <p className="text-blue-800 dark:text-blue-300 font-semibold">
              UNEA-7: 8 – 12 December 2025 • UNEP Headquarters, Nairobi, Kenya
            </p>
          </div>
        </div>

        {/* Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {uneaCards.map((card) => (
            <div
              key={card.title}
              className={`p-10 rounded-sm flex flex-col items-start gap-6 transition-transform hover:-translate-y-1 ${card.color} ${card.textColor} relative overflow-hidden group`}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-sm -mr-16 -mt-16 group-hover:scale-110 transition-transform duration-500" />
              <div className="bg-white/20 p-4 rounded-sm ">
                <card.icon size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3 ">{card.title}</h3>
                <p className="opacity-90 leading-relaxed font-medium">
                  {card.desc}
                </p>
              </div>
              <button className="mt-4 font-bold text-sm uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all">
                Learn More <Globe size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
