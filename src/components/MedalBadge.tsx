
import { cn } from '@/lib/utils';

interface MedalBadgeProps {
  type: 'gold' | 'silver' | 'bronze';
  count: number;
  className?: string;
}

export function MedalBadge({ type, count, className }: MedalBadgeProps) {
  const medalColors = {
    gold: 'bg-gold text-gold-foreground',
    silver: 'bg-silver text-silver-foreground',
    bronze: 'bg-bronze text-bronze-foreground'
  };

  const medalEmojis = {
    gold: '🥇',
    silver: '🥈',
    bronze: '🥉'
  };

  return (
    <div
      className={cn(
        'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full font-semibold text-sm transition-all',
        medalColors[type],
        className
      )}
    >
      <span className="text-base">{medalEmojis[type]}</span>
      <span>{count}</span>
    </div>
  );
}