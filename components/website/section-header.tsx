import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  title: string
  subtitle?: string
  centered?: boolean
  className?: string
}

export function SectionHeader({
  title,
  subtitle,
  centered = true,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn(centered && 'text-center', 'mb-12', className)}>
      <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-foreground">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className={cn('mt-4 h-1 w-20 bg-gold rounded-full', centered && 'mx-auto')} />
    </div>
  )
}
