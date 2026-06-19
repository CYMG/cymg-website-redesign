import Hero from '@/components/cymg/Hero';
import BlogPreview from '@/components/cymg/BlogPreview';
import StatsStrip from '@/components/cymg/StatsStrip';
import About from '@/components/cymg/About';
import GetInvolved from '@/components/cymg/GetInvolved';
import NewsletterCTA from '@/components/ui/NewsletterCTA';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      <Hero />
      <StatsStrip />
      <About />

      <section className="py-20 md:py-28 bg-paper border-b border-line">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-sm text-[var(--canopy-green)] font-medium mb-3">Upcoming</p>
              <h2 className="text-3xl md:text-4xl font-semibold text-ink leading-[1.2]  mb-6">
                Road to UNEA-7 and the Youth Environment Assembly
              </h2>
              <p className="text-lg text-[var(--ink-60)] leading-relaxed mb-8">
                Youth representatives from around the world will convene in Nairobi to shape policy inputs for the UN Environment Assembly and related processes.
              </p>
              <Link
                to="/unea-and-core-processes"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-[var(--assembly-blue)] hover:bg-[var(--assembly-blue-deep)] transition-colors"
              >
                Track the cycle
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="border border-line overflow-hidden">
              <img
                src="https://ik.imagekit.io/5zp8ovb7c/CYMG/Yea2025.avif?updatedAt=1757413112399"
                alt="Youth representatives at the Youth Environment Assembly"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <BlogPreview />

      <section className="py-20 md:py-28 bg-surface border-b border-line">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <p className="text-sm text-[var(--canopy-green)] font-medium mb-3">Leadership</p>
              <h2 className="text-3xl md:text-4xl font-semibold text-ink leading-[1.2]  mb-6">
                Run by youth volunteers
              </h2>
              <p className="text-lg text-[var(--ink-60)] leading-relaxed mb-8">
                CYMG is coordinated by a Global Steering Committee, regional facilitators, and working group focal points. All roles are held by young people under 30.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to="/governance"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-[var(--assembly-blue)] hover:bg-[var(--assembly-blue-deep)] transition-colors"
                >
                  Governance
                  <ArrowRight size={16} />
                </Link>
                <Link
                  to="/team"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-ink border border-line hover:bg-white transition-colors"
                >
                  Meet the team
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="border border-line overflow-hidden">
                <img
                  src="https://ik.imagekit.io/5zp8ovb7c/CYMG/Leadership.jpg?updatedAt=1757854905899"
                  alt="CYMG leadership meeting"
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="border border-line overflow-hidden">
                <img
                  src="https://ik.imagekit.io/5zp8ovb7c/CYMG/CYMG2.jpg?updatedAt=1757418792418"
                  alt="CYMG regional representatives"
                  className="w-full h-48 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <NewsletterCTA />
      <GetInvolved />
    </div>
  );
}
