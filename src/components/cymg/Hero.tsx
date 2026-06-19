import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="bg-paper border-b border-line">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 py-20 md:py-28">
          <div className="flex flex-col justify-center">
            <p className="text-sm text-[var(--canopy-green)] font-medium mb-4">
              Children and Youth Major Group to UNEP
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-ink leading-[1.15] tracking-tight mb-6">
              The official youth voice in UN environmental governance.
            </h1>
            <p className="text-lg text-[var(--ink-60)] leading-relaxed mb-8 max-w-xl">
              CYMG is the UN-recognized constituency for children and youth engaging with UNEP, UNEA, and multilateral environmental agreements.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/join"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-[var(--assembly-blue)] hover:bg-[var(--assembly-blue-deep)] transition-colors"
              >
                Join CYMG
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-ink border border-line hover:bg-surface transition-colors"
              >
                About us
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] border border-line overflow-hidden">
              <img
                src="https://ik.imagekit.io/5zp8ovb7c/CYMG/CYMG.jpeg?updatedAt=1765784359910"
                alt="CYMG youth representatives at a UN meeting"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
