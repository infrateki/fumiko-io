import { Metadata } from 'next'
import Image from 'next/image'
import {
  Briefcase,
  Building2,
  Factory,
  Plane,
  Hotel,
  Car,
  FileText,
  Headphones,
  Ticket,
  Users,
  Wrench,
  CheckCircle,
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
    title: 'Viajes Corporativos',
    description:
      'Gestionamos todos los aspectos de los viajes de negocios de su empresa, desde la planificación hasta la ejecución.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
    imageAlt: 'Equipo de negocios en reunión',
    features: [
      {
        icon: Plane,
        title: 'Vuelos',
        description: 'Reserva de pasajes aéreos nacionales e internacionales con las mejores tarifas corporativas.',
      },
      {
        icon: Hotel,
        title: 'Hoteles',
        description: 'Alojamiento seleccionado cerca de sus reuniones de negocios y centros de convenciones.',
      },
      {
        icon: Car,
        title: 'Traslados',
        description: 'Servicio de transporte ejecutivo desde el aeropuerto a su hotel y lugares de trabajo.',
      },
      {
        icon: FileText,
        title: 'Documentación',
        description: 'Asesoría y gestión de visas, permisos de trabajo y requisitos migratorios.',
      },
    ],
    benefits: [
      'Tarifas corporativas preferenciales',
      'Políticas de viaje personalizadas',
      'Reportes de gastos detallados',
      'Cambios y cancelaciones flexibles',
    ],
  },
  {
    id: 'ferias',
    icon: Building2,
    title: 'Ferias y Exposiciones',
    description:
      'Organizamos su participación completa en las principales ferias comerciales y tecnológicas del mundo.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
    imageAlt: 'Feria comercial internacional',
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
        icon: Headphones,
        title: 'Soporte',
        description: 'Asistencia en sitio durante toda la duración de la feria.',
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
    id: 'visitas',
    icon: Factory,
    title: 'Visitas Técnicas',
    description:
      'Tours especializados a fábricas y centros de producción de alta tecnología en Asia y Europa.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80',
    imageAlt: 'Visita técnica a fábrica',
    features: [
      {
        icon: Factory,
        title: 'Fábricas',
        description: 'Acceso exclusivo a instalaciones de manufactura de sus proveedores.',
      },
      {
        icon: Users,
        title: 'Reuniones',
        description: 'Coordinación de reuniones técnicas y comerciales con fabricantes.',
      },
      {
        icon: Wrench,
        title: 'Capacitación',
        description: 'Programas de entrenamiento técnico en las instalaciones del proveedor.',
      },
      {
        icon: FileText,
        title: 'Informes',
        description: 'Documentación técnica y reportes de las visitas realizadas.',
      },
    ],
    benefits: [
      'Contacto directo con fabricantes',
      'Negociación de precios in situ',
      'Verificación de calidad',
      'Establecimiento de relaciones comerciales',
    ],
  },
]

export default function ServiciosPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px]">
        <Image
          src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&q=80"
          alt="Servicios ITT Travel"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
          <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-center">
            Nuestros <span className="text-gold">Servicios</span>
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto text-center">
            Soluciones integrales para las necesidades de viaje corporativo de su empresa
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
