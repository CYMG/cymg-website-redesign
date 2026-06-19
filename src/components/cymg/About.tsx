import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <section
      id="about"
      className="bg-paper border-b border-line"
      aria-labelledby="about-heading"
    >
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="text-sm text-[var(--canopy-green)] font-medium mb-3">About CYMG</p>
            <h2 id="about-heading" className="text-3xl md:text-4xl font-semibold text-ink leading-[1.2] tracking-tight">
              Official youth voice to UNEP
            </h2>
          </div>

          <div className="lg:col-span-8">
            <p className="text-lg md:text-xl leading-relaxed text-ink mb-6 max-w-3xl">
              The Children and Youth Major Group to UNEP (CYMG) is the official UN-recognized constituency for children and youth engaging with the United Nations Environment Programme.
            </p>
            <p className="text-base leading-relaxed text-[var(--ink-60)] mb-8 max-w-3xl">
              Formed in 2012, CYMG is run almost entirely by youth volunteers across six world regions. We coordinate 13 thematic working groups spanning pollution and chemicals, nature and ecosystems, and policy, governance, and finance — ensuring that young people&apos;s voices are heard in environmental decision-making.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-sm font-medium text-[var(--assembly-blue)] hover:underline"
            >
              Read our mandate <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
