import { Metadata } from 'next'
import Image from 'next/image'
import { Target, Eye, Heart, Award, Users, Globe, TrendingUp } from 'lucide-react'
import { SectionHeader } from '@/components/website/section-header'
import { CTASection } from '@/components/website/cta-section'
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


export default function NosotrosPage() {
  return (
    <>
      {/* Header Section */}
      <section className="relative py-32 pt-40 overflow-hidden">
        <ImageCarousel
          images={[
            { src: 'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=1920&q=80', alt: 'Grupo de viajeros en destino paradisiaco' },
            { src: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=1920&q=80', alt: 'Equipo disfrutando viaje de incentivo empresarial' },
            { src: 'https://images.unsplash.com/photo-1464817739973-0128fe77aaa1?w=1920&q=80', alt: 'Pareja viajando junta en destino exótico' },
          ]}
          interval={5000}
          overlay={false}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent" />
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
          {/* Main Content */}
          <div className="max-w-4xl mx-auto">
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-foreground text-center">
              Agencia Boutique de Viajes Corporativos y Misiones Feriales
            </h2>
            <div className="mt-4 h-1 w-24 bg-gold rounded-full mx-auto" />

            <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed text-lg">
              <p>
                En <strong className="text-foreground">ITT International Travel & Fairs</strong> nos especializamos en llevar empresarios y grupos de empresas a las ferias que mueven el mundo: China, Japón, Europa, India y África. Destinos donde un apretón de manos puede abrir mercados enteros.
              </p>
              <p>
                No vendemos solo pasajes. Diseñamos misiones de negocio a medida. Coordinamos cada detalle: rutas, agendas, reuniones clave, protocolos culturales y seguimiento post-viaje, para que cada salida termine en oportunidades concretas.
              </p>
              <p>
                Trabajamos con aerolíneas y operadores de primer nivel en cada destino, así como con Cámaras de Comercio, organizaciones y representantes feriales, para asegurar el acceso, las condiciones y las alianzas que marcan la diferencia.
              </p>
              <p>
                Contamos con un equipo de alto rendimiento, porque sabemos que en terreno la precisión y la confianza son todo.
              </p>
              <p>
                <strong className="text-foreground">Nuestra especialidad:</strong> grupos feriales y viajes corporativos que conectan oferta y demanda real, con métricas claras y retorno medible.
              </p>
              <p>
                ¿Y por qué no complementar con un viaje de vacaciones para descubrir destinos nuevos e interesantes? También de eso nos encargamos.
              </p>
            </div>
          </div>

          {/* Ana María Section */}
          <div className="mt-20 grid gap-12 lg:grid-cols-2 items-center">
            {/* Image */}
            <div className="relative animate-fade-in-left opacity-0">
              <div className="relative aspect-[3/4] max-w-md mx-auto rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/anamariaa.jpeg"
                  alt="Ana María Canale - Fundadora y Gerente General de ITT Travel & Fairs"
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
                <div className="font-playfair text-3xl font-bold text-burgundy">48+</div>
                <div className="text-sm text-muted-foreground">Años de Experiencia</div>
              </div>
            </div>

            {/* Content */}
            <div className="animate-fade-in-right opacity-0" style={{ animationDelay: '0.2s' }}>
              <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-foreground">
                El respaldo detrás de ITT: <span className="text-burgundy">Ana María Canale</span>
              </h2>
              <div className="mt-4 h-1 w-20 bg-gold rounded-full" />

              <p className="mt-6 text-xl font-semibold text-burgundy">
                Objetivo: CONVERTIR VIAJES EN RESULTADOS
              </p>

              <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Con 48 años de experiencia en el sector y dominio de tres idiomas, Ana María es la fundadora y Gerente General de International Travel & Fairs. Su trayectoria guiando a empresarios y equipos a nivel internacional es la garantía de que cada misión está en manos expertas.
                </p>
                <p>
                  Su conocimiento profundo de los mercados globales, los protocolos culturales y las relaciones con operadores clave es lo que convierte cada experiencia de ITT Travel & Fairs, ya sea profesional o personal, en algo verdaderamente diferente.
                </p>
                <p>
                  Su visión y liderazgo son los cimientos sobre los que se construyó ITT Travel & Fairs: una agencia boutique con trato personalizado y un propósito claro: conectar a empresas con las ferias más importantes del mundo.
                </p>
                <p className="text-lg font-medium text-foreground">
                  ¿Tu organización está lista para dar el siguiente paso?
                </p>
                <p className="text-burgundy font-semibold">
                  Déjate llevar por ITT Travel & Fairs. Te llevamos a la feria correcta, en el momento indicado, con la agenda que convierte. De todo esto, y más, nos encargamos nosotros.
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
                  src="https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=800&q=80"
                  alt="Grupo de viajeros felices"
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
                  src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80"
                  alt="Empresarios cerrando negocio en feria comercial"
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
                  Facilitar la expansión internacional de las empresas peruanas mediante servicios de viajes corporativos y comerciales de alto estándar, y a la vez, diseñar experiencias viajeras únicas y memorables para familias y grupos, a través de una atención personalizada y soluciones integrales que superen las expectativas de nuestros clientes.
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
                  Ser la agencia de viajes líder en Perú, destacada por nuestra especialización en viajes corporativos y de vacaciones, misiones comerciales, visitas técnicas y experiencias grupales únicas y memorables que marquen a cada uno de nuestros clientes.
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
          <div className="glass-card rounded-2xl p-8 sm:p-12 max-w-4xl mx-auto">
            <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
              <Image
                src="/logo-asociaciones.jpeg"
                alt="Asociaciones del sector turístico"
                width={320}
                height={128}
                className="h-28 sm:h-36 w-auto object-contain"
              />
              <Image
                src="/logo_alemania.jpeg"
                alt="Ferias de Alemania"
                width={320}
                height={128}
                className="h-28 sm:h-36 w-auto object-contain"
              />
              <Image
                src="/logo_iata.jpg"
                alt="IATA - International Air Transport Association"
                width={320}
                height={128}
                className="h-28 sm:h-36 w-auto object-contain"
              />
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
