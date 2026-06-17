import { timelineEvents } from '@/data/timeline';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

export default function HistoryMandate() {
  return (
    <div style={{ backgroundColor: 'var(--paper)' }}>
      <div className="pt-24 pb-16 px-6" style={{ backgroundColor: 'var(--assembly-blue)' }}>
        <div className="max-w-[1320px] mx-auto">
          <Breadcrumbs items={[{ label: 'About', href: '/about' }, { label: 'History & Mandate' }]} />
          <h1 className="text-h1 font-display font-bold mt-4" style={{ color: 'var(--paper)' }}>
            History &amp; Mandate
          </h1>
        </div>
      </div>

      <div className="max-w-[1320px] mx-auto px-6 py-16 md:py-24">
        <p className="text-body-lg max-w-[65ch] mb-16" style={{ color: 'var(--ink)' }}>
          CYMG&apos;s story is intertwined with the history of youth engagement in UN environmental
          processes — from the 1972 Stockholm Conference that created UNEP, through the Rio Earth Summit
          that formalized the Major Groups approach, to the present day.
        </p>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-6 md:left-24 top-0 bottom-0 w-px"
            style={{ backgroundColor: 'var(--line)' }}
          />

          {timelineEvents.map((event, i) => (
            <div key={i} className="relative flex gap-6 md:gap-12 mb-12 last:mb-0">
              {/* Year dot */}
              <div className="flex-shrink-0 w-12 md:w-24 flex justify-end">
                <div
                  className="w-3 h-3 rounded-full mt-2 relative z-10"
                  style={{ backgroundColor: 'var(--assembly-blue)' }}
                />
              </div>

              <div
                className="flex-1 rounded-[20px] p-6 md:p-8 transition-colors hover:bg-opacity-50"
                style={{
                  backgroundColor: 'var(--surface)',
                  border: '1px solid var(--line)',
                }}
              >
                <span
                  className="text-mono-label font-medium"
                  style={{ color: 'var(--assembly-blue)' }}
                >
                  {event.year}
                </span>
                <h3 className="text-h3 font-display font-medium mt-2 mb-3" style={{ color: 'var(--ink)' }}>
                  {event.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-60)' }}>
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mandate section */}
        <div className="mt-20">
          <h2 className="text-h2 font-display mb-6" style={{ color: 'var(--ink)' }}>
            Our Mandate
          </h2>
          <div
            className="rounded-[20px] p-8"
            style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--line)' }}
          >
            <p className="text-body-lg leading-relaxed mb-4" style={{ color: 'var(--ink)' }}>
              CYMG&apos;s mandate derives from UN General Assembly resolutions that established the
              Major Groups framework under Agenda 21, and from UNEP Governing Council decisions that
              recognized Children and Youth as a formal Major Group constituency.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-60)' }}>
              Key mandate documents include: A/RES/68/288 (post-2015 development agenda), A/RES/67/290
              (High-Level Political Forum), A/69/L.43 (2030 Agenda), and A/RES/70/1 (2030 Agenda adoption).
              The Stakeholder Engagement Mechanism and the Major Group Facilitation Committee further
              define CYMG&apos;s role within UNEP processes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
