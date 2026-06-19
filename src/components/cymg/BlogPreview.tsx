import { ArrowRight, Clock, Tag } from 'lucide-react';
import { BLOG_POSTS } from '@/lib/cymg-data';
import type { BlogPost } from '@/lib/cymg-data';
import { Link } from 'react-router-dom';

function TagPill({ tag }: { tag: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-2 py-1 text-xs font-medium uppercase tracking-wide bg-surface text-[var(--ink-60)] border border-line">
      <Tag size={11} />
      {tag}
    </span>
  );
}

function PostCard({ post }: { post: BlogPost }) {
  return (
    <article className="group flex flex-col bg-paper border border-line overflow-hidden">
      <div className="aspect-video w-full bg-surface border-b border-line" />

      <div className="flex-1 p-5 flex flex-col">
        <div className="flex items-center gap-3 text-xs text-[var(--ink-60)] mb-4">
          <TagPill tag={post.tags[0]} />
          <span>•</span>
          <span className="flex items-center gap-1">
            <Clock size={12} />
            {post.readTime} min
          </span>
        </div>

        <time dateTime={post.date} className="text-xs text-[var(--ink-60)] mb-2">
          {new Date(post.date).toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
          })}
        </time>

        <h3 className="text-lg font-medium text-ink mb-3 group-hover:text-[var(--assembly-blue)] transition-colors line-clamp-2">
          {post.title}
        </h3>

        <p className="text-sm text-[var(--ink-60)] leading-relaxed mb-6 flex-1 line-clamp-3">
          {post.excerpt}
        </p>

        <Link
          to={`/blog/${post.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--assembly-blue)] hover:underline"
        >
          Read more
          <ArrowRight size={14} />
        </Link>
      </div>
    </article>
  );
}

export default function BlogPreview() {
  const latestPosts = BLOG_POSTS.slice(0, 3);

  return (
    <section className="py-20 md:py-28 bg-paper border-b border-line">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <p className="text-sm text-[var(--canopy-green)] font-medium mb-3">Latest</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-ink leading-[1.2] tracking-tight">
              Updates and perspectives
            </h2>
          </div>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-ink border border-line hover:bg-surface transition-colors shrink-0"
          >
            View all updates
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
