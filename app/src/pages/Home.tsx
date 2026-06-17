import { useEffect, useRef, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import Card from '@/components/ui/Card';
import StatCounter from '@/components/ui/StatCounter';
import NewsletterCTA from '@/components/ui/NewsletterCTA';
import { clusterColors } from '@/data/workingGroups';
import { blogPosts } from '@/data/blogPosts';
import { useReducedMotion } from '@/hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

/* ─── Accordion ─── */
const panels = [
  {
    title: '13 Thematic Working Groups',
    subtitle: 'Climate, chemicals, oceans, faith, finance, and more',
    link: '/working-groups',
    cta: 'Explore Groups',
    image: '/images/accordion/working-groups.jpg',
    color: '#2A4DFF',
  },
  {
    title: 'UNEA-7 \u00b7 8\u201312 Dec 2025',
    subtitle: 'Youth declarations, consultations, and the road to Nairobi',
    link: '/unea-and-core-processes',
    cta: 'Track the Cycle',
    image: '/images/accordion/unea.jpg',
    color: '#0E6B55',
  },
  {
    title: 'Since 2012',
    subtitle: 'The official youth constituency to UNEP — 6 regions, one voice',
    link: '/about',
    cta: 'Our Story',
    image: '/images/accordion/about.jpg',
    color: '#0B1220',
  },
  {
    title: 'Join CYMG',
    subtitle: 'Membership is free and open to youth-led organizations worldwide',
    link: '/join',
    cta: 'Become a Member',
    image: '/images/accordion/get-involved.jpg',
    color: '#D7FF3D',
    isLime: true,
  },
];

function AccordionHero() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [focused, setFocused] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const getFlex = useCallback(
    (index: number) => {
      if (focused !== null) {
        if (index === focused) return 2.2;
        return 0.6;
      }
      if (hovered !== null) {
        if (index === hovered) return 1.8;
        return 0.73;
      }
      return 1;
    },
    [hovered, focused]
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Escape') setFocused(null);
      if (e.key === 'ArrowRight' && focused !== null) {
        setFocused((prev) => (prev !== null ? Math.min(3, prev + 1) : 0));
      }
      if (e.key === 'ArrowLeft' && focused !== null) {
        setFocused((prev) => (prev !== null ? Math.max(0, prev - 1) : 0));
      }
    },
    [focused]
  );

  return (
    <div
      ref={containerRef}
      className="w-full h-[100dvh] flex flex-col md:flex-row overflow-hidden"
      onMouseLeave={() => setHovered(null)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="tablist"
      aria-label="Main navigation"
    >
      {panels.map((panel, i) => {
        const flex = getFlex(i);
        const isActive = flex > 1.3;
        return (
          <div
            key={i}
            role="tab"
            aria-selected={focused === i}
            className="relative overflow-hidden cursor-pointer"
            style={{
              flex: flex,
              transition: 'flex 350ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              minHeight: '80px',
            }}
            onMouseEnter={() => setHovered(i)}
            onClick={() => setFocused(focused === i ? null : i)}
          >
            <img
              src={panel.image}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
              loading={i === 0 ? 'eager' : 'lazy'}
            />
            <div
              className="absolute inset-0"
              style={{
                backgroundColor: 'var(--paper)',
                opacity: panel.isLime ? 0.15 : 0.35,
                mixBlendMode: 'screen',
              }}
            />
            <div
              className="absolute inset-0 transition-opacity duration-500"
              style={{
                background: `linear-gradient(180deg, transparent 30%, ${panel.color}22 100%)`,
                opacity: isActive ? 1 : 0,
              }}
            />

            <div
              className="absolute bottom-0 left-0 right-0 p-6 md:p-10 flex flex-col gap-2 transition-all duration-300"
              style={{
                opacity: isActive ? 1 : 0.9,
                transform: isActive ? 'translateY(0)' : 'translateY(8px)',
              }}
            >
              <h2
                className="font-display font-semibold leading-tight"
                style={{
                  fontSize: isActive ? 'clamp(1.5rem, 3vw, 2.5rem)' : 'clamp(0.875rem, 1.5vw, 1.25rem)',
                  color: panel.isLime ? '#0B1220' : 'var(--ink)',
                  transition: 'font-size 350ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                }}
              >
                {panel.title}
              </h2>
              <p
                className="text-sm md:text-base leading-relaxed transition-all duration-300"
                style={{
                  color: panel.isLime ? 'rgba(11,18,32,0.7)' : 'var(--ink-60)',
                  opacity: isActive ? 1 : 0,
                  maxHeight: isActive ? '100px' : '0',
                  overflow: 'hidden',
                }}
              >
                {panel.subtitle}
              </p>
              <Link
                to={panel.link}
                className="inline-flex items-center gap-2 text-sm font-medium mt-2 transition-all duration-300"
                style={{
                  color: panel.isLime ? '#0B1220' : 'var(--assembly-blue)',
                  opacity: isActive ? 1 : 0,
                }}
                onClick={(e) => e.stopPropagation()}
              >
                {panel.cta}
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ─── Bento Grid ─── */
const bentoCards = [
  {
    title: 'Global Youth Declaration on the Environment',
    description: 'The consolidated voice of youth on environmental priorities ahead of UNEA-7.',
    image: '/images/bento/youth-declaration.jpg',
    href: '/blog/global-youth-declaration',
    tag: 'Declaration',
    tagColor: clusterColors.policy.color,
    size: 'large',
  },
  {
    title: 'Resolution Recap: UNEA-6 Outcomes',
    description: 'What the resolutions mean for youth environmental engagement.',
    image: '/images/bento/resolution-recap.jpg',
    href: '/blog/resolution-recap-unea-6',
    tag: 'Resolution Recap',
    tagColor: clusterColors.policy.color,
    size: 'normal',
  },
  {
    title: 'Meet the 2025 Steering Committee',
    description: 'The volunteers steering CYMG through the UNEA-7 cycle.',
    image: '/images/bento/steering-committee.jpg',
    href: '/blog/steering-committee-2025',
    tag: 'Announcement',
    tagColor: clusterColors.nature.color,
    size: 'normal',
  },
  {
    title: 'Youth at Stockholm+50: A Retrospective',
    description: 'Two years on from the landmark meeting.',
    image: '/images/bento/stockholm-50.jpg',
    href: '/blog/stockholm-50-retrospective',
    tag: 'Event Coverage',
    tagColor: clusterColors.pollution.color,
    size: 'tall',
  },
  {
    title: 'Chemicals \u0026 Waste: Policy Brief',
    description: 'Emerging issues in global chemicals governance.',
    image: '/images/bento/chemicals-waste.jpg',
    href: '/blog/chemicals-waste-policy-brief',
    tag: 'Policy Brief',
    tagColor: clusterColors.pollution.color,
    size: 'normal',
  },
  {
    title: 'Ocean Science \u0026 Governance Update',
    description: 'Marine protection and the High Seas Treaty.',
    image: '/images/bento/ocean-governance.jpg',
    href: '/blog/ocean-science-governance-update',
    tag: 'Working Groups',
    tagColor: clusterColors.nature.color,
    size: 'normal',
  },
  {
    title: 'UNEA-7 Consultations: How to Participate',
    description: 'A guide for youth organizations.',
    image: '/images/bento/unea7-consultations.jpg',
    href: '/blog/unea-7-consultations',
    tag: 'UNEA-7',
    tagColor: clusterColors.policy.color,
    size: 'wide',
  },
];

function BentoGrid() {
  const gridRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced || !gridRef.current) return;
    const cards = gridRef.current.querySelectorAll('.bento-card');
    cards.forEach((card, i) => {
      gsap.from(card, {
        y: 16,
        opacity: 0,
        duration: 0.5,
        ease: 'power2.out',
        scrollTrigger: { trigger: card, start: 'top 85%' },
        delay: (i % 4) * 0.06,
      });
    });
    return () => { ScrollTrigger.getAll().forEach(t => t.kill()); };
  }, [reduced]);

  return (
    <section className="py-20 md:py-32 px-6" style={{ backgroundColor: 'var(--paper)' }}>
      <div className="max-w-[1320px] mx-auto">
        <div className="mb-12">
          <span className="text-mono-label block mb-3" style={{ color: 'var(--ink-60)' }}>
            LATEST
          </span>
          <h2 className="text-h1 font-display" style={{ color: 'var(--ink)' }}>
            From the Frontlines
          </h2>
        </div>
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[280px]"
        >
          {bentoCards.map((card, i) => (
            <div
              key={i}
              className={`
                bento-card
                ${card.size === 'large' ? 'md:col-span-2 md:row-span-2' : ''}
                ${card.size === 'tall' ? 'md:row-span-2' : ''}
                ${card.size === 'wide' ? 'md:col-span-2' : ''}
              `}
            >
              <Card
                title={card.title}
                description={card.description}
                image={card.image}
                href={card.href}
                tag={card.tag}
                tagColor={card.tagColor}
                imagePosition={card.size === 'large' || card.size === 'tall' ? 'top' : 'top'}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Data Tower ─── */
const stats = [
  { value: 2012, label: 'Founded', detail: 'Mid-2012, during the Rio+20 transition' },
  { value: 13, label: 'Working Groups', detail: 'Covering all major environmental themes', suffix: '' },
  { value: 6, label: 'Regions', detail: 'Plus host-country and liaison seats', suffix: '+' },
  { value: 100, label: 'Member Countries', detail: 'Youth-led organizations worldwide', suffix: '+' },
];

function DataTower() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced || !sectionRef.current || !svgRef.current) return;
    const paths = svgRef.current.querySelectorAll('path.draw-path');
    paths.forEach((p) => {
      const length = (p as SVGPathElement).getTotalLength?.() || 2000;
      gsap.set(p, { strokeDasharray: length, strokeDashoffset: length });
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 20%',
        end: '+=100%',
        scrub: 1,
      },
    });

    paths.forEach((p, i) => {
      tl.to(p, { strokeDashoffset: 0, duration: 0.3, ease: 'none' }, i * 0.1);
    });

    tl.to('.tower-flag', { opacity: 1, duration: 0.1 }, '-=0.1');

    return () => { tl.kill(); };
  }, [reduced]);

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-32 px-6"
      style={{ backgroundColor: 'var(--paper)' }}
    >
      <div className="max-w-[1320px] mx-auto">
        <div className="mb-12">
          <span className="text-mono-label block mb-3" style={{ color: 'var(--ink-60)' }}>
            BY THE NUMBERS
          </span>
          <h2 className="text-h1 font-display" style={{ color: 'var(--ink)' }}>
            Our Impact
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat) => (
              <StatCounter
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                detail={stat.detail}
              />
            ))}
          </div>
          <div className="flex justify-center">
            <svg
              ref={svgRef}
              viewBox="0 0 300 500"
              className="w-full max-w-[300px]"
              fill="none"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path
                className="draw-path"
                d="M60 500 L60 360 L240 360 L240 500"
                stroke="var(--assembly-blue)"
              />
              <path
                className="draw-path"
                d="M80 500 L80 380 L220 380 L220 500"
                stroke="var(--assembly-blue)"
                opacity="0.5"
              />
              <path
                className="draw-path"
                d="M140 500 L140 420 L160 420 L160 500"
                stroke="var(--assembly-blue)"
              />
              <path
                className="draw-path"
                d="M80 360 L80 200 L220 200 L220 360"
                stroke="var(--assembly-blue)"
              />
              <path
                className="draw-path"
                d="M100 360 L100 220 L200 220 L200 360"
                stroke="var(--assembly-blue)"
                opacity="0.5"
              />
              <path
                className="draw-path"
                d="M120 280 L180 280 M120 300 L180 300 M120 320 L180 320"
                stroke="var(--assembly-blue)"
                opacity="0.3"
              />
              <path
                className="draw-path"
                d="M100 200 L100 120 L200 120 L200 200"
                stroke="var(--assembly-blue)"
              />
              <path
                className="draw-path"
                d="M80 120 Q150 80 220 120"
                stroke="var(--assembly-blue)"
              />
              <path
                className="draw-path"
                d="M145 120 L145 50"
                stroke="var(--assembly-blue)"
              />
              <path
                className="tower-flag"
                d="M145 70 L195 85 L145 100 Z"
                fill="#D7FF3D"
                stroke="none"
                opacity="0"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Photo Essay ─── */
const photos = [
  { image: '/images/photo-essay/yea-session.jpg', caption: 'Youth Environment Assembly 2024 — Nairobi, Kenya' },
  { image: '/images/photo-essay/regional-meeting.jpg', caption: 'Regional Facilitators Meeting — Asia-Pacific Hub' },
  { image: '/images/photo-essay/action-mobilization.jpg', caption: 'Community Restoration Project — Global Youth Action' },
];

function PhotoEssay() {
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const bands = document.querySelectorAll('.photo-band');
    bands.forEach((band, i) => {
      const fromInset = i === 1 ? 'inset(100% 0 0 0)' : 'inset(0 50% 0 50%)';
      gsap.fromTo(
        band,
        { clipPath: fromInset },
        {
          clipPath: 'inset(0 0% 0 0%)',
          scrollTrigger: { trigger: band, start: 'top 80%', end: 'top 20%', scrub: 1 },
        }
      );
    });
    return () => { ScrollTrigger.getAll().forEach(t => t.kill()); };
  }, [reduced]);

  return (
    <section className="flex flex-col gap-2">
      {photos.map((photo, i) => (
        <div
          key={i}
          className="photo-band relative overflow-hidden"
          style={{ height: 'clamp(280px, 35vh, 420px)' }}
        >
          <img
            src={photo.image}
            alt={photo.caption}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div
            className="absolute inset-0"
            style={{ backgroundColor: 'rgba(246,243,234,0.1)' }}
          />
          <span
            className="absolute bottom-4 left-4 md:bottom-6 md:left-6 text-mono-sm"
            style={{ color: 'var(--paper)', textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}
          >
            {photo.caption}
          </span>
        </div>
      ))}
    </section>
  );
}

/* ─── Blog Preview ─── */
function BlogPreview() {
  const latestPosts = blogPosts.slice(0, 3);
  return (
    <section className="py-20 md:py-32 px-6" style={{ backgroundColor: 'var(--paper)' }}>
      <div className="max-w-[1320px] mx-auto">
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="text-mono-label block mb-3" style={{ color: 'var(--ink-60)' }}>
              BLOG
            </span>
            <h2 className="text-h1 font-display" style={{ color: 'var(--ink)' }}>
              Policy Notes
            </h2>
          </div>
          <Link
            to="/blog"
            className="hidden md:inline-flex items-center gap-2 text-sm font-medium"
            style={{ color: 'var(--assembly-blue)' }}
          >
            View all posts <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {latestPosts.map((post) => (
            <Card
              key={post.id}
              title={post.title}
              description={post.excerpt}
              image={post.featuredImage}
              href={`/blog/${post.slug}`}
              tag={post.tags[0]}
              tagColor={clusterColors.policy.color}
              date={post.publishDate}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CTA Band ─── */
function CTABand() {
  return (
    <section
      className="py-20 md:py-28 px-6"
      style={{ backgroundColor: 'var(--signal-lime)' }}
    >
      <div className="max-w-[1320px] mx-auto text-center">
        <h2
          className="text-h1 font-display mb-4"
          style={{ color: '#0B1220' }}
        >
          Get Involved
        </h2>
        <p className="text-body-lg max-w-[600px] mx-auto mb-8" style={{ color: 'rgba(11,18,32,0.7)' }}>
          Whether you are an individual, part of an organization, or passionate about the planet,
          there is a place for you in CYMG.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/join"
            className="btn-pill inline-flex items-center justify-center gap-2 font-medium"
            style={{ backgroundColor: '#0B1220', color: '#D7FF3D' }}
          >
            Join CYMG <ArrowRight size={16} />
          </Link>
          <Link
            to="/working-groups"
            className="btn-pill inline-flex items-center justify-center gap-2 font-medium border-2"
            style={{ borderColor: '#0B1220', color: '#0B1220' }}
          >
            Explore Working Groups
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── Home Page ─── */
export default function Home() {
  return (
    <>
      <AccordionHero />
      <div className="relative" style={{ marginTop: '0' }}>
        <BentoGrid />
        <PhotoEssay />
        <DataTower />
        <BlogPreview />
        <NewsletterCTA />
        <CTABand />
      </div>
    </>
  );
}
