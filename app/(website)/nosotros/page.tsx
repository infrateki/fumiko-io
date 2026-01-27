import { Metadata } from 'next'
import Image from 'next/image'
import { Target, Eye, Heart, Award, Users, Globe, TrendingUp } from 'lucide-react'
import { SectionHeader } from '@/components/website/section-header'
import { CTASection } from '@/components/website/cta-section'
import { FairsCalendar } from '@/components/website/fairs-calendar'
import { ImageCarousel } from '@/components/website/image-carousel'

export const metadata: Metadata = {
  title: 'Nosotros | ITT Travel - Nuestra Historia',
  description:
    'Conozca ITT Travel: más de 45 años de experiencia en viajes corporativos, ferias internacionales y visitas técnicas. ITT Grupos + ITT Corp.',
}

const values = [
  {
    icon: Heart,
    title: 'Compromiso',
    description: 'Nos comprometemos con el éxito de cada viaje como si fuera el nuestro.',
  },
  {
    icon: Award,
    title: 'Excelencia',
    description: 'Buscamos la perfección en cada detalle de nuestros servicios.',
  },
  {
    icon: Users,
    title: 'Cercanía',
    description: 'Tratamos a cada cliente como parte de nuestra familia empresarial.',
  },
  {
    icon: TrendingUp,
    title: 'Innovación',
    description: 'Constantemente mejoramos nuestros procesos y servicios.',
  },
]

const milestones = [
  { year: '2009', event: 'Fundación de ITT Travel en Lima, Perú' },
  { year: '2012', event: 'Primer grupo a Canton Fair con 20 empresarios' },
  { year: '2015', event: 'Lanzamiento de división ITT Corp para corporativos' },
  { year: '2018', event: 'Expansión a ferias europeas: MWC, ITB, Hannover' },
  { year: '2020', event: 'Adaptación digital y servicios virtuales' },
  { year: '2023', event: 'Más de 500 empresas atendidas' },
]

export default function NosotrosPage() {
  return (
    <>
      {/* Header Section */}
      <section className="relative py-32 pt-40 overflow-hidden">
        <ImageCarousel
          images={[
            { src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=80', alt: 'Trade fair exhibition hall' },
            { src: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1920&q=80', alt: 'International conference' },
            { src: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=1920&q=80', alt: 'Business networking event' },
          ]}
          interval={5000}
          overlay={false}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-white animate-fade-in-up">
            Sobre <span className="text-gold">Nosotros</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto animate-fade-in-up opacity-0" style={{ animationDelay: '0.2s' }}>
            Más de 45 años conectando empresas peruanas con el mundo
          </p>
          <div className="mt-8 h-1 w-24 bg-gold rounded-full mx-auto animate-fade-in-up opacity-0" style={{ animationDelay: '0.3s' }} />
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            {/* Image */}
            <div className="relative animate-fade-in-left opacity-0">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                  alt="ITT Travel Team collaboration"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-burgundy/30 to-transparent" />
              </div>
              {/* Decorative Element */}
              <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-2xl bg-gold/20 -z-10" />
              <div className="absolute -top-6 -left-6 h-24 w-24 rounded-2xl bg-burgundy/20 -z-10" />

              {/* Floating Stats Card */}
              <div className="absolute -bottom-8 -right-4 bg-white rounded-xl shadow-xl p-4 border border-border">
                <div className="font-playfair text-3xl font-bold text-burgundy">45+</div>
                <div className="text-sm text-muted-foreground">Años de Experiencia</div>
              </div>
            </div>

            {/* Content */}
            <div className="animate-fade-in-right opacity-0" style={{ animationDelay: '0.2s' }}>
              <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-foreground">
                Nuestra Historia
              </h2>
              <div className="mt-4 h-1 w-20 bg-gold rounded-full" />

              <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">ITT Travel</strong> nació en 2009 con una misión clara:
                  facilitar a las empresas peruanas su conexión con mercados internacionales a través de
                  viajes de negocios eficientes y bien organizados.
                </p>
                <p>
                  Lo que comenzó como una pequeña agencia especializada en la Canton Fair de China, hoy
                  es una empresa integral que cubre las principales ferias comerciales y tecnológicas
                  en 4 continentes.
                </p>
                <p>
                  Nuestra filosofía siempre ha sido la misma: cada cliente merece una atención personalizada
                  y un servicio que supere sus expectativas. No somos solo una agencia de viajes; somos
                  su socio estratégico en la expansión internacional de su negocio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divisions Section */}
      <section className="py-20 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Nuestras Divisiones"
            subtitle="Dos divisiones especializadas para cubrir todas sus necesidades"
          />

          <div className="grid gap-8 md:grid-cols-2">
            {/* ITT Mayorista */}
            <div className="bg-white rounded-2xl border border-border overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
              {/* Division Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80"
                  alt="Ferias Internacionales"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-burgundy/90 via-burgundy/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-playfair text-2xl font-bold text-white">
                    ITT Grupos
                  </h3>
                  <p className="mt-1 text-white/80">División de grupos y vacaciones</p>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-4 text-muted-foreground">
                  {[
                    'Organización de grupos a ferias internacionales',
                    'Paquetes completos: vuelos, hoteles, entradas',
                    'Guías especializados en cada destino',
                    'Coordinación de visitas a fábricas',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Globe className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* ITT Corp */}
            <div className="bg-white rounded-2xl border border-border overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
              {/* Division Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80"
                  alt="Viajes Corporativos"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2D2D2D]/90 via-[#2D2D2D]/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-playfair text-2xl font-bold text-gold">
                    ITT Corp
                  </h3>
                  <p className="mt-1 text-white/80">División ferias</p>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-4 text-muted-foreground">
                  {[
                    'Gestión de viajes corporativos',
                    'Políticas de viaje personalizadas',
                    'Ejecutivo de cuenta dedicado',
                    'Reportes y análisis de gastos',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Users className="h-5 w-5 text-burgundy flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="glass-burgundy rounded-2xl p-8 text-white relative overflow-hidden group hover:shadow-2xl transition-shadow duration-300">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/10 group-hover:bg-white/20 transition-colors">
                    <Target className="h-7 w-7 text-gold" />
                  </div>
                  <h3 className="font-playfair text-2xl font-bold">Misión</h3>
                </div>
                <p className="text-white/90 leading-relaxed">
                  Facilitar la expansión internacional de las empresas peruanas a través de
                  servicios de viajes corporativos y comerciales de excelencia, brindando
                  atención personalizada y soluciones integrales que superen las expectativas
                  de nuestros clientes.
                </p>
              </div>
            </div>

            <div className="bg-[#2D2D2D] rounded-2xl p-8 text-white relative overflow-hidden group hover:shadow-2xl transition-shadow duration-300">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gold/20 group-hover:bg-gold/30 transition-colors">
                    <Eye className="h-7 w-7 text-gold" />
                  </div>
                  <h3 className="font-playfair text-2xl font-bold text-gold">Visión</h3>
                </div>
                <p className="text-white/90 leading-relaxed">
                  Ser la agencia de viajes corporativos líder en Perú, reconocida por nuestra
                  especialización en ferias internacionales y visitas técnicas, y por ser el
                  socio estratégico preferido de las empresas que buscan conectar con el mundo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Nuestros Valores"
            subtitle="Los principios que guían cada una de nuestras acciones"
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="glass-card rounded-2xl p-6 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group animate-fade-in-up opacity-0 interactive-glow"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-burgundy/10 mb-4 group-hover:bg-burgundy/20 group-hover:scale-110 transition-all duration-300">
                  <value.icon className="h-7 w-7 text-burgundy" />
                </div>
                <h3 className="font-playfair text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Associations Section */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-foreground heading-luxury">
              Respaldados por
            </h2>
            <div className="mt-3 h-1 w-16 bg-gold rounded-full mx-auto" />
          </div>
          <div className="glass-card rounded-2xl p-8 sm:p-12 max-w-3xl mx-auto">
            <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
              <Image
                src="/logo-asociaciones.jpeg"
                alt="Asociaciones del sector turístico"
                width={280}
                height={112}
                className="h-24 sm:h-32 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
              <Image
                src="/logo_alemania.jpeg"
                alt="Ferias de Alemania"
                width={280}
                height={112}
                className="h-24 sm:h-32 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Fairs Calendar - NEW SECTION */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Calendario de Ferias"
            subtitle="Planifique su próximo viaje de negocios con nosotros"
          />
          <FairsCalendar />
        </div>
      </section>

      {/* Timeline - Company History */}
      <section className="py-20 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Nuestra Trayectoria"
            subtitle="Hitos importantes en nuestra historia"
          />

          <div className="relative max-w-3xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-burgundy via-gold to-burgundy hidden md:block" />

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className="relative flex items-start gap-8 animate-fade-in-up opacity-0"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Dot */}
                  <div className="hidden md:flex h-16 w-16 rounded-full bg-white border-4 border-burgundy items-center justify-center flex-shrink-0 shadow-lg z-10">
                    <span className="font-playfair text-lg font-bold text-burgundy">{milestone.year}</span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-white rounded-xl border border-border p-6 hover:shadow-lg hover:border-gold/50 transition-all duration-300 group">
                    <div className="md:hidden font-playfair text-xl font-bold text-burgundy mb-2">
                      {milestone.year}
                    </div>
                    <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                      {milestone.event}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Sea parte de nuestra historia"
        subtitle="Únase a las más de 500 empresas que confían en nosotros"
      />
    </>
  )
}
