import { Metadata } from 'next'
import Image from 'next/image'
import {
  Briefcase,
  Building2,
  Plane,
  Hotel,
  Car,
  FileText,
  Headphones,
  Ticket,
  Users,
  CheckCircle,
  Languages,
  Award,
  Factory,
  MapPin,
  Ship,
  Route,
  Clock,
} from 'lucide-react'
import { CTASection } from '@/components/website/cta-section'

export const metadata: Metadata = {
  title: 'Servicios | ITT Travel - Viajes Corporativos y Ferias',
  description:
    'Servicios de viajes corporativos, organización de ferias internacionales y visitas técnicas a fábricas. Vuelos, hoteles, traslados y más.',
}

const serviceDetails = [
  {
    id: 'corporativos',
    icon: Briefcase,
    title: 'Viajes Corporativos y de Incentivo',
    description:
      'Gestionamos todos los aspectos de los viajes de negocios de su empresa, desde la planificación hasta la ejecución. Incluye programas de incentivo y premios laborales.',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80',
    imageAlt: 'Grupo de compañeros de trabajo disfrutando en playa paradisíaca',
    features: [
      {
        icon: Plane,
        title: 'Vuelos y Hoteles',
        description: 'Reserva de pasajes aéreos y alojamiento con las mejores tarifas corporativas.',
      },
      {
        icon: Factory,
        title: 'Visitas Técnicas',
        description: 'Tours especializados a fábricas y centros de producción de alta tecnología.',
      },
      {
        icon: Languages,
        title: 'Traductores',
        description: 'Servicio de intérpretes y traductores profesionales para sus reuniones.',
      },
      {
        icon: Award,
        title: 'Premios Laborales',
        description: 'Programas de incentivo y viajes premio para sus mejores colaboradores.',
      },
    ],
    benefits: [
      'Tarifas corporativas preferenciales',
      'Políticas de viaje personalizadas',
      'Gestión de visas y documentación',
      'Cambios y cancelaciones flexibles',
    ],
  },
  {
    id: 'ferias',
    icon: Building2,
    title: 'Ferias y Exposiciones',
    description:
      'Organizamos misiones comerciales y su participación completa en las principales ferias del mundo. Soporte 24/7.',
    image: '/fumiko_new.jpeg',
    imageAlt: 'Grupo de emprendedores en misión comercial',
    features: [
      {
        icon: Ticket,
        title: 'Entradas',
        description: 'Gestión de acreditaciones, pases de expositor y entradas VIP a las ferias.',
      },
      {
        icon: Hotel,
        title: 'Alojamiento',
        description: 'Hoteles cercanos al recinto ferial con disponibilidad garantizada.',
      },
      {
        icon: Users,
        title: 'Grupos',
        description: 'Organización de grupos empresariales con guía especializado.',
      },
      {
        icon: Clock,
        title: 'Soporte 24/7',
        description: 'Asistencia en sitio las 24 horas durante toda la duración de la feria.',
      },
    ],
    benefits: [
      'Paquetes todo incluido',
      'Intérpretes disponibles',
      'Agenda de reuniones pre-coordinada',
      'Material informativo de expositores',
    ],
  },
  {
    id: 'grupos',
    icon: Users,
    title: 'Viajes en grupo',
    description:
      'Viajes organizados a los destinos más fascinantes del mundo. Todo incluido, guías expertos y experiencias inolvidables.',
    image: 'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=800&q=80',
    imageAlt: 'Grupo de viajeros disfrutando',
    features: [
      {
        icon: Car,
        title: 'Alquiler de Carros',
        description: 'Servicio de alquiler de vehículos en todos los destinos con seguro incluido.',
      },
      {
        icon: MapPin,
        title: 'Tours a Medida',
        description: 'Diseñamos tours personalizados según los intereses de su grupo.',
      },
      {
        icon: Route,
        title: 'Programas a Medida',
        description: 'Itinerarios flexibles adaptados a sus necesidades y presupuesto.',
      },
      {
        icon: Ship,
        title: 'Cruceros',
        description: 'Experiencias únicas en cruceros por los destinos más exclusivos.',
      },
    ],
    benefits: [
      'Guías expertos en cada destino',
      'Todo incluido sin sorpresas',
      'Grupos reducidos y personalizados',
      'Experiencias únicas y memorables',
    ],
  },
]

export default function ServiciosPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px]">
        <Image
          src="https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=1920&q=80"
          alt="Visitantes caminando por pasillo de feria comercial con stands"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
          <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-center">
            Nuestros <span className="text-gold">Servicios</span>
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto text-center">
            Soluciones integrales diseñadas para sus viajes
          </p>
          <div className="mt-6 h-1 w-24 bg-gold rounded-full" />
        </div>
      </section>

      {/* Services Detail Sections */}
      {serviceDetails.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={index % 2 === 0 ? 'py-20 bg-background' : 'py-20 bg-secondary/30'}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Service Header with Image - 2 Column Layout */}
            <div className={`grid gap-12 lg:grid-cols-2 items-center mb-12 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              {/* Image Column */}
              <div className={`relative ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-burgundy/20 to-transparent" />
                </div>
                {/* Decorative Element */}
                <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-2xl bg-gold/20 -z-10" />
              </div>

              {/* Content Column */}
              <div className={index % 2 !== 0 ? 'lg:order-1' : ''}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-burgundy">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h2 className="font-playfair text-3xl font-bold text-foreground">
                      {service.title}
                    </h2>
                    <div className="mt-2 h-1 w-16 bg-gold rounded-full" />
                  </div>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
              {service.features.map((feature) => (
                <div
                  key={feature.title}
                  className="p-6 rounded-xl bg-white border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gold/10 mb-4">
                    <feature.icon className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="font-playfair text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* Benefits */}
            <div className="bg-white rounded-2xl border border-border p-8">
              <h3 className="font-playfair text-xl font-semibold text-foreground mb-6">
                Beneficios incluidos
              </h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {service.benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-gold flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <CTASection
        title="¿Necesita un servicio personalizado?"
        subtitle="Contáctenos para crear un paquete a medida para su empresa"
      />
    </>
  )
}
