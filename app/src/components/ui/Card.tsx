import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import Badge from './Badge';

interface CardProps {
  title: string;
  description?: string;
  image?: string;
  href?: string;
  tag?: string;
  tagColor?: string;
  date?: string;
  className?: string;
  imagePosition?: 'top' | 'background';
}

export default function Card({
  title,
  description,
  image,
  href,
  tag,
  tagColor,
  date,
  className,
  imagePosition = 'top',
}: CardProps) {
  const content = (
    <div
      className={cn(
        'card-base group cursor-pointer flex flex-col h-full',
        imagePosition === 'background' && image && 'relative min-h-[280px] justify-end',
        className
      )}
    >
      {image && imagePosition === 'top' && (
        <div className="aspect-[16/10] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            loading="lazy"
          />
        </div>
      )}
      {image && imagePosition === 'background' && (
        <>
          <img
            src={image}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            loading="lazy"
          />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(180deg, transparent 20%, rgba(11,18,32,0.85) 100%)',
            }}
          />
        </>
      )}
      <div
        className={cn(
          'p-6 flex flex-col gap-2 flex-1',
          imagePosition === 'background' && 'relative z-10'
        )}
        style={imagePosition === 'background' ? { color: 'var(--paper)' } : undefined}
      >
        {(tag || date) && (
          <div className="flex items-center gap-2 flex-wrap">
            {tag && tagColor && <Badge color={tagColor}>{tag}</Badge>}
            {date && (
              <span className="text-mono-sm" style={{ color: imagePosition === 'background' ? 'rgba(246,243,234,0.6)' : 'var(--ink-60)' }}>
                {date}
              </span>
            )}
          </div>
        )}
        <h3
          className="text-h3 font-display font-medium leading-tight"
          style={{ color: imagePosition === 'background' ? 'var(--paper)' : 'var(--ink)' }}
        >
          {title}
        </h3>
        {description && (
          <p
            className="text-sm leading-relaxed line-clamp-3"
            style={{ color: imagePosition === 'background' ? 'rgba(246,243,234,0.8)' : 'var(--ink-60)' }}
          >
            {description}
          </p>
        )}
      </div>
    </div>
  );

  if (href) {
    return <Link to={href} className="block h-full">{content}</Link>;
  }
  return content;
}
