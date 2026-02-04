import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Users, Calendar, ArrowRight, Ship, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { CTASection } from '@/components/website/cta-section'
import { ImageCarousel } from '@/components/website/image-carousel'

export const metadata: Metadata = {
  title: 'Destinos Grupales | ITT Travel - Viajes en Grupo',
  description:
    'Descubra nuestros destinos grupales: viajes organizados a los mejores destinos del mundo. Grupos con guía, todo incluido, experiencias únicas.',
}

const destinations = [
  {
    name: 'Asia Espectacular',
    countries: 'China, Japón, Tailandia',
    image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?w=800&q=80',
    description: 'Descubra las maravillas de Asia: templos ancestrales, tecnología de punta y cultura milenaria.',
    duration: '15 días',
    groupSize: 'A consultar',
  },
  {
    name: 'Europa Clásica',
    countries: 'Francia, Italia, España',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80',
    description: 'Un recorrido por las ciudades más emblemáticas de Europa: París, Roma, Barcelona y más.',
    duration: '12 días',
    groupSize: 'A consultar',
  },
  {
    name: 'Dubái y Maldivas',
    countries: 'Emiratos Árabes, Maldivas',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80',
    description: 'Lujo y naturaleza: desde los rascacielos de Dubái hasta las playas paradisíacas de Maldivas.',
    duration: '10 días',
    groupSize: 'A consultar',
  },
  {
    name: 'Sudeste Asiático',
    countries: 'Vietnam, Camboya, Laos',
    image: 'https://images.unsplash.com/photo-1528127269322-539801943592?w=800&q=80',
    description: 'Aventura cultural por el Sudeste Asiático: templos de Angkor, bahías espectaculares y gastronomía única.',
    duration: '14 días',
    groupSize: 'A consultar',
  },
  {
    name: 'África Salvaje',
    countries: 'Kenia, Tanzania, Sudáfrica',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80',
    description: 'Safari de aventura: experimente la fauna africana en su hábitat natural, desde el Serengeti hasta el Cabo.',
    duration: '12 días',
    groupSize: 'A consultar',
  },
  {
    name: 'Cruceros',
    countries: 'Caribe, Mediterráneo, Alaska',
    image: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?w=800&q=80',
    description: 'Experiencias únicas en cruceros por los destinos más exclusivos del mundo. Todo incluido a bordo.',
    duration: 'Variable',
    groupSize: 'A consultar',
    isCruise: true,
  },
]

export default function DestinosGrupalesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-32 pt-40 overflow-hidden">
        <ImageCarousel
          images={[
            { src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80', alt: 'Montañas vibrantes' },
            { src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920&q=80', alt: 'Naturaleza espectacular' },
            { src: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1920&q=80', alt: 'Destino paradisíaco' },
          ]}
          interval={5000}
          overlay={false}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-white animate-fade-in-up">
            Destinos <span className="text-gold">Grupales</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto animate-fade-in-up opacity-0" style={{ animationDelay: '0.2s' }}>
            Viajes organizados a los destinos más fascinantes del mundo. Todo incluido, guías expertos y experiencias inolvidables, cuidamos cada detalle para que puedas vivir experiencias únicas y de valor.
          </p>
          <div className="mt-8 h-1 w-24 bg-gold rounded-full mx-auto animate-fade-in-up opacity-0" style={{ animationDelay: '0.3s' }} />
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-foreground">
              Próximas <span className="text-burgundy">Salidas</span>
            </h2>
            <div className="mt-4 h-1 w-20 bg-gold rounded-full mx-auto" />
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Únase a nuestros grupos de viajeros y descubra el mundo con la tranquilidad de viajar acompañado.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {destinations.map((destination, index) => (
              <div
                key={destination.name}
                className="bg-white rounded-2xl border border-border overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group animate-fade-in-up opacity-0"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={destination.image}
                    alt={destination.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-playfair text-xl font-bold text-white">
                      {destination.name}
                    </h3>
                    <p className="mt-1 text-gold flex items-center gap-2 text-sm">
                      <MapPin className="h-4 w-4" />
                      {destination.countries}
                    </p>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-muted-foreground text-sm mb-4">
                    {destination.description}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-burgundy" />
                      <span>{destination.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-burgundy" />
                      <span>{destination.groupSize}</span>
                    </div>
                  </div>
                  <Button
                    asChild
                    className="w-full bg-burgundy hover:bg-burgundy/90 text-white gap-2"
                  >
                    <Link href="/contacto">
                      Consultar disponibilidad
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Custom Programs Notice */}
          <div className="mt-12 bg-gradient-to-r from-burgundy to-burgundy/80 rounded-2xl p-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Sparkles className="h-6 w-6 text-gold" />
              <h3 className="font-playfair text-2xl font-bold text-white">
                Consultar por programas a la medida
              </h3>
              <Sparkles className="h-6 w-6 text-gold" />
            </div>
            <p className="text-white/90 max-w-2xl mx-auto mb-6">
              ¿No encuentra el destino que busca? Diseñamos itinerarios personalizados según sus preferencias y presupuesto.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gold hover:bg-gold/90 text-black font-semibold"
            >
              <Link href="/contacto">
                Solicitar programa personalizado
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-foreground">
              ¿Por qué viajar en <span className="text-burgundy">grupo</span>?
            </h2>
            <div className="mt-4 h-1 w-20 bg-gold rounded-full mx-auto" />
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: 'Mejor Precio', description: 'Tarifas especiales por volumen' },
              { title: 'Guías Expertos', description: 'Acompañamiento profesional' },
              { title: 'Todo Organizado', description: 'Sin preocupaciones logísticas' },
              { title: 'Nuevas Amistades', description: 'Comparta experiencias únicas' },
            ].map((benefit, index) => (
              <div
                key={benefit.title}
                className="glass-card rounded-2xl p-6 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 animate-fade-in-up opacity-0"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="font-playfair text-lg font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="¿Listo para su próxima aventura grupal?"
        subtitle="Contáctenos y reserve su lugar en el próximo viaje"
      />
    </>
  )
}
