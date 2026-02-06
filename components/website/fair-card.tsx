import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Calendar, ArrowRight, Users } from 'lucide-react'
import { cn } from '@/lib/utils'

// Default images by category - VERIFIED WORKING URLs
const categoryImages: Record<string, string> = {
  comercial: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80', // Trade fair/conference
  tecnologia: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80', // Technology/circuits
  industrial: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80', // Industrial/manufacturing
  turismo: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80', // Travel/tourism
  automotriz: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80', // Car/automotive
  moda: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&q=80', // Fashion/clothing
  packaging: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80', // Packaging/boxes
  default: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80', // Default conference
}

// Specific images for featured fairs - VERIFIED WORKING URLs
const fairSpecificImages: Record<string, string> = {
  // Canton Fair series - Guangzhou Exhibition
  'Canton Fair Fase 1': 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80', // Conference/trade show
  'Canton Fair Fase 2': 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80', // Business conference
  'Canton Fair Fase 3': 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&q=80', // Event venue
  'Canton Fair Otoño': 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80', // Crowd event

  // China Plus series - Shanghai
  'China Plus Shanghai': 'https://images.unsplash.com/photo-1474181487882-5abf3f0ba6c2?w=800&q=80', // Shanghai business
  'China Plus Electronics': 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80', // Electronics/tech
  'China Plus Textiles': 'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&q=80', // Textiles/fabric

  // Interpac series - Düsseldorf
  'Interpack Düsseldorf': 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80', // Packaging industry
  'Interpac Processing': 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80', // Industrial processing

  // Tourism fairs
  'FITUR Madrid': 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800&q=80', // Madrid/Spain tourism
  'ITB Berlin': 'https://images.unsplash.com/photo-1560969184-10fe8719e047?w=800&q=80', // Berlin city
  'WTM London': 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80', // London tourism

  // Tech fairs
  'CES Las Vegas': 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80', // Tech/electronics
  'MWC Barcelona': 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80', // Mobile tech
  'IFA Berlin': 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80', // Consumer electronics
  'Computex Taipei': 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80', // Computer tech

  // Industrial fairs
  'Hannover Messe': 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80', // Industrial
  'Bauma Munich': 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80', // Construction
  'EMO Hannover': 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80', // Machinery

  // Automotive
  'Automechanika Frankfurt': 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80', // Automotive
  'Auto Shanghai': 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80', // Auto show

  // Commercial
  'Yiwu Fair': 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80', // Market/trade
  'Global Sources Hong Kong': 'https://images.unsplash.com/photo-1536599018102-9f803c140fc1?w=800&q=80', // Hong Kong business

  // Fashion
  'MAGIC Las Vegas': 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&q=80', // Fashion
  'Premiere Vision Paris': 'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&q=80', // Textiles/fashion
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
