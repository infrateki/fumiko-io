'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Calendar, MapPin, ArrowRight, Users, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface UpcomingFair {
  name: string
  dates: string
  location: string
  country: string
  image: string
  spotsLeft: number
  daysUntil: number
  category: string
}

const upcomingFairs: UpcomingFair[] = [
  {
    name: 'Canton Fair Fase 1',
    dates: '15-19 Abril 2025',
    location: 'Guangzhou',
    country: 'China',
    image: 'https://images.unsplash.com/photo-1474181487882-5abf3f0ba6c2?w=600&q=80', // Large exhibition hall
    spotsLeft: 5,
    daysUntil: 82,
    category: 'comercial',
  },
  {
    name: 'China Plus Shanghai',
    dates: '12-14 Marzo 2025',
    location: 'Shanghai',
    country: 'China',
    image: 'https://images.unsplash.com/photo-1537519414131-ad11aba5ea2e?w=600&q=80', // Shanghai business
    spotsLeft: 8,
    daysUntil: 48,
    category: 'comercial',
  },
  {
    name: 'Interpack Düsseldorf',
    dates: '4-10 Mayo 2025',
    location: 'Düsseldorf',
    country: 'Alemania',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80', // Packaging industry
    spotsLeft: 6,
    daysUntil: 101,
    category: 'packaging',
  },
]

export function UpcomingFairs() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-burgundy/10 border border-burgundy/20 px-4 py-1.5 text-sm font-medium text-burgundy mb-4">
            <Clock className="h-4 w-4" />
            <span>Próximas Salidas</span>
          </div>
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-foreground">
            Reserve su lugar <span className="text-gold">ahora</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Las próximas ferias con grupos confirmados. Espacios limitados.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 lg:grid-cols-3">
          {upcomingFairs.map((fair, index) => (
            <div
              key={fair.name}
              className={cn(
                'group relative bg-white rounded-2xl border border-border overflow-hidden transition-all duration-500',
                'hover:shadow-2xl hover:shadow-burgundy/10 hover:-translate-y-2',
                index === 0 && 'lg:col-span-1 ring-2 ring-gold'
              )}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={fair.image}
                  alt={fair.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Urgency Badge */}
                {fair.spotsLeft <= 10 && (
                  <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 animate-pulse">
                    <Users className="h-3 w-3" />
                    <span>Solo {fair.spotsLeft} lugares</span>
                  </div>
                )}

                {/* Days Until */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-foreground text-xs font-bold px-3 py-1.5 rounded-full">
                  En {fair.daysUntil} días
                </div>

                {/* Location */}
                <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                  <MapPin className="h-4 w-4 text-gold" />
                  <span className="text-sm font-medium">
                    {fair.location}, {fair.country}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-playfair text-xl font-semibold text-foreground group-hover:text-burgundy transition-colors">
                  {fair.name}
                </h3>

                <div className="mt-3 flex items-center gap-2 text-sm">
                  <Calendar className="h-4 w-4 text-gold" />
                  <span className="text-muted-foreground font-medium">{fair.dates}</span>
                </div>

                {/* Progress Bar */}
                <div className="mt-4">
                  <div className="flex justify-between text-xs text-muted-foreground mb-1">
                    <span>Lugares disponibles</span>
                    <span className="font-semibold text-burgundy">{fair.spotsLeft}/20</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-burgundy to-gold rounded-full transition-all duration-500"
                      style={{ width: `${((20 - fair.spotsLeft) / 20) * 100}%` }}
                    />
                  </div>
                </div>

                <Button
                  asChild
                  className="w-full mt-6 bg-burgundy hover:bg-burgundy/90 text-white group/btn"
                >
                  <Link href="/contacto" className="flex items-center justify-center gap-2">
                    <span>Reservar ahora</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </Button>
              </div>

              {/* Featured Badge for first item */}
              {index === 0 && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-black text-xs font-bold px-4 py-1 rounded-full shadow-lg">
                  Grupo Confirmado
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <Button
            size="lg"
            variant="outline"
            asChild
            className="border-burgundy text-burgundy hover:bg-burgundy hover:text-white transition-all duration-300"
          >
            <Link href="/ferias" className="flex items-center gap-2">
              <span>Ver todas las ferias</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
