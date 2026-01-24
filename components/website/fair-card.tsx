import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Calendar, ArrowRight, Users } from 'lucide-react'
import { cn } from '@/lib/utils'

// Default images by category
const categoryImages: Record<string, string> = {
  comercial: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80', // Trade fair hall
  tecnologia: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80',
  industrial: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800&q=80', // Industrial machinery
  turismo: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80',
  automotriz: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80',
  moda: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
  packaging: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80', // Packaging/logistics
  default: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
}

// Specific images for featured fairs
const fairSpecificImages: Record<string, string> = {
  // Canton Fair series - Guangzhou Exhibition
  'Canton Fair Fase 1': 'https://images.unsplash.com/photo-1474181487882-5abf3f0ba6c2?w=800&q=80', // Large exhibition hall
  'Canton Fair Fase 2': 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&q=80', // Trade show floor
  'Canton Fair Fase 3': 'https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=800&q=80', // Exhibition center
  'Canton Fair Otoño': 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80', // Convention center

  // China Plus series - Shanghai
  'China Plus Shanghai': 'https://images.unsplash.com/photo-1537519414131-ad11aba5ea2e?w=800&q=80', // Shanghai skyline/business
  'China Plus Electronics': 'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?w=800&q=80', // Electronics expo
  'China Plus Textiles': 'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&q=80', // Textiles/fabric

  // Interpac series - Düsseldorf
  'Interpack Düsseldorf': 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80', // Packaging industry
  'Interpac Processing': 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800&q=80', // Industrial processing

  // Other specific fairs
  'CES Las Vegas': 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&q=80', // Tech expo Las Vegas
  'MWC Barcelona': 'https://images.unsplash.com/photo-1558403194-611308249627?w=800&q=80', // Mobile tech event
  'Hannover Messe': 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800&q=80', // Industrial fair
  'Auto Shanghai': 'https://images.unsplash.com/photo-1537984822441-cff330075342?w=800&q=80', // Auto show Shanghai
  'Yiwu Fair': 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80', // Chinese trade market
}

interface FairCardProps {
  name: string
  location: string
  country: string
  dates: string
  description: string
  image?: string
  featured?: boolean
  href?: string
  category?: string
  spotsLeft?: number
}

export function FairCard({
  name,
  location,
  country,
  dates,
  description,
  image,
  featured = false,
  href = '/contacto',
  category = 'default',
  spotsLeft,
}: FairCardProps) {
  // Priority: custom image > specific fair image > category image > default
  const cardImage = image || fairSpecificImages[name] || categoryImages[category] || categoryImages.default

  return (
    <div
      className={cn(
        'group relative overflow-hidden rounded-2xl border bg-white transition-all duration-500',
        'hover:shadow-2xl hover:shadow-burgundy/10 hover:-translate-y-2',
        featured && 'ring-2 ring-gold'
      )}
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <Image
          src={cardImage}
          alt={name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-300" />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-burgundy/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Featured Badge */}
        {featured && (
          <div className="absolute top-4 right-4 bg-gold text-black text-xs font-bold px-3 py-1.5 rounded-full shadow-lg animate-pulse-glow">
            Destacada
          </div>
        )}

        {/* Spots Left Badge */}
        {spotsLeft && spotsLeft <= 10 && (
          <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
            <Users className="h-3 w-3" />
            <span>Quedan {spotsLeft} lugares</span>
          </div>
        )}

        {/* Location Overlay */}
        <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
          <div className="flex items-center gap-2 bg-black/30 backdrop-blur-sm rounded-full px-3 py-1.5">
            <MapPin className="h-4 w-4 text-gold" />
            <span className="text-sm font-medium">
              {location}, {country}
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-playfair text-xl font-semibold text-foreground group-hover:text-burgundy transition-colors duration-300">
          {name}
        </h3>

        <div className="mt-3 flex items-center gap-2 text-sm">
          <Calendar className="h-4 w-4 text-gold" />
          <span className="text-muted-foreground font-medium">{dates}</span>
        </div>

        <p className="mt-4 text-sm text-muted-foreground leading-relaxed line-clamp-3">
          {description}
        </p>

        <Link
          href={href}
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-burgundy hover:text-burgundy/80 transition-all duration-300 group/link"
        >
          <span>Solicitar información</span>
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-2" />
        </Link>
      </div>

      {/* Bottom Border Animation */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-burgundy via-gold to-burgundy transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </div>
  )
}
