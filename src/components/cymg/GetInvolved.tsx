import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function GetInvolved() {
  return (
    <section
      id="get-involved"
      className="bg-surface border-t border-line"
      aria-labelledby="get-involved-heading"
    >
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="max-w-2xl">
          <h2
            id="get-involved-heading"
            className="text-3xl md:text-4xl font-semibold text-ink leading-[1.2] tracking-tight mb-6"
          >
            Get involved
          </h2>
          <p className="text-lg text-[var(--ink-60)] leading-relaxed mb-8">
            CYMG membership is open to youth-led organisations and individuals. Join a working group, connect with your region, or take part in consultations ahead of UNEA and other UN processes.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/join"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-[var(--assembly-blue)] hover:bg-[var(--assembly-blue-deep)] transition-colors"
            >
              Apply for membership
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/working-groups"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-ink border border-line hover:bg-white transition-colors"
            >
              Explore working groups
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
