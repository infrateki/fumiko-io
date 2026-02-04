import { Metadata } from 'next'
import { Briefcase, Building2, Users as UsersIcon, Shield, Globe, Users, CheckCircle } from 'lucide-react'
import { HeroCarousel } from '@/components/website/hero-carousel'
import { ServiceCard } from '@/components/website/service-card'
import { SectionHeader } from '@/components/website/section-header'
import { CTASection } from '@/components/website/cta-section'
import { UpcomingFairs } from '@/components/website/upcoming-fairs'

export const metadata: Metadata = {
  title: 'ITT Travel | Viajes Corporativos, Ferias y Visitas Técnicas',
  description:
    'Especialistas en viajes corporativos, ferias internacionales y visitas técnicas a fábricas. Canton Fair, CES, MWC Barcelona y más. Cotiza con nosotros.',
}

const services = [
  {
    icon: Briefcase,
    title: 'Viajes Corporativos y de Incentivo',
    description:
      'Gestión integral de viajes de negocios y programas de incentivo. Vuelos, hoteles, traslados, visitas técnicas y premios laborales.',
    href: '/servicios#corporativos',
  },
  {
    icon: Building2,
    title: 'Misiones Comerciales',
    description:
      'Organización completa para asistir a las principales ferias comerciales del mundo: Canton Fair, Chinaplas, Bauma China y más.',
    href: '/servicios#ferias',
    featured: true,
  },
  {
    icon: UsersIcon,
    title: 'Viajes en grupo',
    description:
      'Viajes organizados a destinos fascinantes del mundo. Todo incluido, guías expertos y experiencias inolvidables.',
    href: '/servicios#grupos',
  },
]

const whyChooseUs = [
  {
    icon: Shield,
    title: 'Experiencia Comprobada',
    description: 'Más de 45 años organizando viajes corporativos exitosos.',
  },
  {
    icon: Globe,
    title: 'Alcance Global',
    description: 'Red de contactos en 4 continentes para garantizar su viaje.',
  },
  {
    icon: Users,
    title: 'Atención Personalizada',
    description: 'Un ejecutivo dedicado para cada cliente corporativo.',
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <HeroCarousel
        title="Te conectamos"
        highlight="con el mundo"
        subtitle="Especialistas en viajes corporativos, ferias internacionales y visitas técnicas a fábricas de alta tecnología. Hacemos que su negocio llegue más lejos."
        ctaText="Solicitar Cotización"
        ctaHref="/contacto"
        secondaryCtaText="Ver Ferias"
        secondaryCtaHref="/ferias"
        backgroundImages={[
          'https://images.unsplash.com/photo-1528127269322-539801943592?w=1920&q=80', // Ha-Long Bay, Vietnam
          'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=1920&q=80', // Phi Phi Islands, Thailand
          'https://images.unsplash.com/photo-1537531383496-f4749e00d3d9?w=1920&q=80', // Yangshuo, China karst mountains
          'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=1920&q=80', // El Nido, Philippines
          'https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?w=1920&q=80', // Bali temple, Indonesia
          'https://images.unsplash.com/photo-1529921879218-f99546d03a26?w=1920&q=80', // Guilin, China
          'https://images.unsplash.com/photo-1609766857041-ed402ea8069a?w=1920&q=80', // Zhangjiajie, China (couple hiking)
        ]}
        nextFair={{
          name: 'Canton Fair Fase 1',
          dates: '15-19 Abril 2026',
          location: 'Guangzhou, China'
        }}
        interval={6000}
      />

      {/* Upcoming Fairs Section */}
      <UpcomingFairs />

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Nuestros Servicios"
            subtitle="Soluciones integrales para las necesidades de viaje de su empresa"
          />

          <div className="grid gap-8 md:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="animate-fade-in-up opacity-0"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  href={service.href}
                  featured={service.featured}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            {/* Left Content */}
            <div className="animate-fade-in-left opacity-0">
              <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-foreground">
                ¿Por qué elegir <span className="text-burgundy">ITT Travel Corp</span>?
              </h2>
              <div className="mt-4 h-1 w-20 bg-gold rounded-full" />

              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Somos una agencia especializada en viajes corporativos y comerciales.
                Entendemos las necesidades específicas de las empresas que buscan
                expandir sus horizontes y conectar con proveedores internacionales.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  'Precios competitivos y transparentes',
                  'Asesoría especializada en cada destino',
                  'Soporte 24/7 durante su viaje',
                  'Gestión de visas y documentación',
                ].map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 animate-fade-in-left opacity-0"
                    style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                  >
                    <CheckCircle className="h-5 w-5 text-gold flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Features */}
            <div className="space-y-6">
              {whyChooseUs.map((item, index) => (
                <div
                  key={item.title}
                  className="flex gap-4 p-6 rounded-xl bg-white border border-border hover:border-gold/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-fade-in-right opacity-0"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-burgundy/10 flex-shrink-0 group-hover:bg-burgundy/20 transition-colors">
                    <item.icon className="h-6 w-6 text-burgundy" />
                  </div>
                  <div>
                    <h3 className="font-playfair text-lg font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Stats */}
      <section className="py-16 bg-burgundy relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-center">
            {[
              { value: '+500', label: 'Empresas Atendidas' },
              { value: '45+', label: 'Años de Experiencia' },
              { value: '20+', label: 'Ferias al Año' },
              { value: '4', label: 'Continentes' },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="animate-fade-in-up opacity-0"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="font-playfair text-4xl sm:text-5xl font-bold text-gold">
                  {stat.value}
                </div>
                <div className="mt-2 text-white/80 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="¿Listo para su próximo viaje de negocios?"
        subtitle="Contáctenos hoy y reciba una cotización personalizada para su empresa"
      />
    </>
  )
}
