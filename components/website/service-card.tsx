import Link from 'next/link'
import { LucideIcon, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  href?: string
  featured?: boolean
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  href,
  featured = false,
}: ServiceCardProps) {
  const content = (
    <div
      className={cn(
        'group relative p-8 rounded-2xl border transition-all duration-500 overflow-hidden',
        featured
          ? 'bg-burgundy text-white border-burgundy hover:shadow-2xl hover:shadow-burgundy/30'
          : 'bg-white border-border hover:border-gold/50 hover:shadow-xl hover:shadow-gold/10 hover:-translate-y-2'
      )}
    >
      {/* Animated Background Gradient */}
      <div
        className={cn(
          'absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100',
          featured
            ? 'bg-gradient-to-br from-burgundy via-burgundy to-[#6B1E32]'
            : 'bg-gradient-to-br from-white via-white to-gold/5'
        )}
      />

      {/* Shine Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Icon */}
        <div
          className={cn(
            'inline-flex h-14 w-14 items-center justify-center rounded-xl mb-6 transition-all duration-300 group-hover:scale-110',
            featured ? 'bg-white/10 group-hover:bg-white/20' : 'bg-gold/10 group-hover:bg-gold/20'
          )}
        >
          <Icon
            className={cn(
              'h-7 w-7 transition-all duration-300',
              featured ? 'text-gold' : 'text-gold',
              'group-hover:rotate-6'
            )}
          />
        </div>

        {/* Title */}
        <h3
          className={cn(
            'font-playfair text-xl font-semibold mb-3 transition-colors duration-300',
            featured ? 'text-white' : 'text-foreground group-hover:text-burgundy'
          )}
        >
          {title}
        </h3>

        {/* Description */}
        <p
          className={cn(
            'text-sm leading-relaxed transition-colors duration-300',
            featured ? 'text-white/80' : 'text-muted-foreground'
          )}
        >
          {description}
        </p>

        {/* Link Arrow */}
        {href && (
          <div
            className={cn(
              'mt-6 flex items-center gap-2 text-sm font-medium transition-all duration-300',
              featured
                ? 'text-gold'
                : 'text-burgundy group-hover:text-burgundy/80'
            )}
          >
            <span>Más información</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
          </div>
        )}
      </div>

      {/* Featured Badge */}
      {featured && (
        <div className="absolute top-4 right-4 bg-gold text-black text-xs font-semibold px-3 py-1 rounded-full">
          Popular
        </div>
      )}
    </div>
  )

  if (href) {
    return <Link href={href}>{content}</Link>
  }

  return content
}
