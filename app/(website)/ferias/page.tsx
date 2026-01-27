'use client'

import { useState } from 'react'
import Image from 'next/image'
import { FairCard } from '@/components/website/fair-card'
import { CTASection } from '@/components/website/cta-section'
import { cn } from '@/lib/utils'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const fairs = [
  // TECNOLOGÍA
  {
    name: 'CES Las Vegas',
    location: 'Las Vegas',
    country: 'USA',
    dates: '7-10 Enero 2025',
    description:
      'Consumer Electronics Show es la feria de tecnología de consumo más influyente del mundo. Descubra las últimas innovaciones en electrónica, inteligencia artificial, vehículos autónomos y tecnologías emergentes.',
    category: 'tecnologia',
    featured: true,
    spotsLeft: 8,
  },
  {
    name: 'MWC Barcelona',
    location: 'Barcelona',
    country: 'España',
    dates: '24-27 Febrero 2025',
    description:
      'Mobile World Congress es el evento más importante de la industria de telecomunicaciones y tecnología móvil. Reúne a los principales fabricantes, operadores e innovadores del sector.',
    category: 'tecnologia',
    spotsLeft: 12,
  },
  {
    name: 'IFA Berlin',
    location: 'Berlín',
    country: 'Alemania',
    dates: '5-9 Septiembre 2025',
    description:
      'La feria de electrónica de consumo más grande de Europa. Electrónica, electrodomésticos inteligentes y las últimas innovaciones tecnológicas para el hogar.',
    category: 'tecnologia',
  },
  {
    name: 'Computex Taipei',
    location: 'Taipei',
    country: 'Taiwán',
    dates: '3-6 Junio 2025',
    description:
      'Una de las ferias de computación más grandes de Asia. Hardware, componentes, gaming y tecnología de punta para profesionales de TI.',
    category: 'tecnologia',
  },

  // COMERCIAL
  {
    name: 'Canton Fair Fase 1',
    location: 'Guangzhou',
    country: 'China',
    dates: '15-19 Abril 2025',
    description:
      'La Feria de Importación y Exportación de China es la más grande y antigua feria comercial de China. Fase 1: Electrónica, maquinaria, vehículos, herramientas y equipos.',
    category: 'comercial',
    featured: true,
    spotsLeft: 5,
  },
  {
    name: 'Canton Fair Fase 2',
    location: 'Guangzhou',
    country: 'China',
    dates: '23-27 Abril 2025',
    description:
      'Fase 2 de la Canton Fair: Artículos de consumo, decoración del hogar, regalos, textiles y productos para el hogar.',
    category: 'comercial',
    spotsLeft: 10,
  },
  {
    name: 'Canton Fair Fase 3',
    location: 'Guangzhou',
    country: 'China',
    dates: '1-5 Mayo 2025',
    description:
      'Fase 3 de la Canton Fair: Textiles, calzado, alimentos, productos médicos y químicos.',
    category: 'comercial',
  },
  {
    name: 'Canton Fair Otoño',
    location: 'Guangzhou',
    country: 'China',
    dates: '15 Oct - 4 Nov 2025',
    description:
      'La edición de otoño de la Canton Fair con las tres fases. Ideal para preparar las compras de fin de año y próxima temporada.',
    category: 'comercial',
  },
  {
    name: 'Yiwu Fair',
    location: 'Yiwu',
    country: 'China',
    dates: '21-25 Octubre 2025',
    description:
      'Feria de Commodities de Yiwu, el mercado de productos de pequeño volumen más grande del mundo. Ideal para importadores que buscan variedad y precios competitivos.',
    category: 'comercial',
  },
  {
    name: 'Global Sources Hong Kong',
    location: 'Hong Kong',
    country: 'China',
    dates: '11-14 Abril 2025',
    description:
      'Feria premium de electrónica y productos de consumo. Excelente para encontrar fabricantes de alta calidad y nuevas innovaciones.',
    category: 'comercial',
  },

  // CHINA PLUS SERIES - Shanghai
  {
    name: 'China Plus Shanghai',
    location: 'Shanghai',
    country: 'China',
    dates: '12-14 Marzo 2025',
    description:
      'China Plus es la plataforma líder para conectar compradores internacionales con fabricantes chinos de alta calidad. Encuentre proveedores verificados en múltiples industrias.',
    category: 'comercial',
    featured: true,
    spotsLeft: 8,
  },
  {
    name: 'China Plus Electronics',
    location: 'Shanghai',
    country: 'China',
    dates: '18-20 Junio 2025',
    description:
      'Edición especializada en electrónica de consumo, componentes, dispositivos smart home y tecnología IoT. Los mejores fabricantes OEM/ODM de China.',
    category: 'tecnologia',
    spotsLeft: 12,
  },
  {
    name: 'China Plus Textiles',
    location: 'Shanghai',
    country: 'China',
    dates: '8-10 Septiembre 2025',
    description:
      'Feria especializada en textiles, telas, hilados y confecciones. Conecte con las principales fábricas textiles de la región de Shanghai y Zhejiang.',
    category: 'moda',
  },

  // INTERPACK SERIES - Düsseldorf
  {
    name: 'Interpack Düsseldorf',
    location: 'Düsseldorf',
    country: 'Alemania',
    dates: '4-10 Mayo 2025',
    description:
      'La feria líder mundial en procesamiento y envasado. Maquinaria de empaque, materiales de embalaje, soluciones de packaging sostenible y automatización.',
    category: 'packaging',
    featured: true,
    spotsLeft: 6,
  },
  {
    name: 'Interpac Processing',
    location: 'Düsseldorf',
    country: 'Alemania',
    dates: '4-10 Mayo 2025',
    description:
      'Sección especializada de Interpack enfocada en tecnología de procesamiento de alimentos, bebidas, farmacéuticos y productos químicos.',
    category: 'industrial',
  },

  // TURISMO
  {
    name: 'FITUR Madrid',
    location: 'Madrid',
    country: 'España',
    dates: '22-26 Enero 2025',
    description:
      'Feria Internacional de Turismo de Madrid, una de las ferias de turismo más importantes del mundo. Punto de encuentro para profesionales del sector turístico global.',
    category: 'turismo',
    spotsLeft: 15,
  },
  {
    name: 'ITB Berlin',
    location: 'Berlín',
    country: 'Alemania',
    dates: '4-6 Marzo 2025',
    description:
      'La feria líder mundial del sector turístico. ITB Berlin reúne a más de 10,000 expositores de 180 países, siendo el evento más importante para la industria del viaje.',
    category: 'turismo',
  },
  {
    name: 'WTM London',
    location: 'Londres',
    country: 'Reino Unido',
    dates: '3-5 Noviembre 2025',
    description:
      'World Travel Market es la feria de turismo más importante del Reino Unido. Networking de primer nivel con operadores turísticos de todo el mundo.',
    category: 'turismo',
  },

  // INDUSTRIAL
  {
    name: 'Hannover Messe',
    location: 'Hannover',
    country: 'Alemania',
    dates: '31 Mar - 4 Abr 2025',
    description:
      'La feria industrial más grande del mundo. Especializada en automatización, energía, tecnología industrial y logística. El lugar donde se presenta la Industria 4.0.',
    category: 'industrial',
    featured: true,
  },
  {
    name: 'Bauma Munich',
    location: 'Múnich',
    country: 'Alemania',
    dates: '7-13 Abril 2025',
    description:
      'La feria más grande del mundo en maquinaria de construcción, minería y equipos. Más de 3,500 expositores presentan las últimas innovaciones del sector.',
    category: 'industrial',
  },
  {
    name: 'EMO Hannover',
    location: 'Hannover',
    country: 'Alemania',
    dates: '15-20 Septiembre 2025',
    description:
      'Feria mundial de tecnología de producción metalúrgica. Máquinas herramienta, sistemas de fabricación y tecnologías de producción avanzadas.',
    category: 'industrial',
  },

  // AUTOMOTRIZ
  {
    name: 'Automechanika Frankfurt',
    location: 'Frankfurt',
    country: 'Alemania',
    dates: '9-13 Septiembre 2025',
    description:
      'La feria líder mundial de la industria automotriz. Autopartes, equipos de taller, accesorios y todo lo relacionado con el sector automotor.',
    category: 'automotriz',
  },
  {
    name: 'Auto Shanghai',
    location: 'Shanghai',
    country: 'China',
    dates: '21-28 Abril 2025',
    description:
      'El salón del automóvil más importante de Asia. Nuevos lanzamientos, vehículos eléctricos y el futuro de la movilidad en el mercado chino.',
    category: 'automotriz',
  },

  // MODA
  {
    name: 'MAGIC Las Vegas',
    location: 'Las Vegas',
    country: 'USA',
    dates: '17-19 Febrero 2025',
    description:
      'La feria de moda más grande de América. Ropa, calzado, accesorios y las últimas tendencias de la industria textil.',
    category: 'moda',
  },
  {
    name: 'Premiere Vision Paris',
    location: 'París',
    country: 'Francia',
    dates: '11-13 Febrero 2025',
    description:
      'La feria de textiles y materiales más prestigiosa del mundo. Telas, hilados, accesorios y tendencias para las próximas temporadas.',
    category: 'moda',
  },
]

const categories = [
  { id: 'all', label: 'Todas', count: fairs.length },
  { id: 'comercial', label: 'Comerciales', count: fairs.filter(f => f.category === 'comercial').length },
  { id: 'tecnologia', label: 'Tecnología', count: fairs.filter(f => f.category === 'tecnologia').length },
  { id: 'industrial', label: 'Industrial', count: fairs.filter(f => f.category === 'industrial').length },
  { id: 'packaging', label: 'Packaging', count: fairs.filter(f => f.category === 'packaging').length },
  { id: 'turismo', label: 'Turismo', count: fairs.filter(f => f.category === 'turismo').length },
  { id: 'automotriz', label: 'Automotriz', count: fairs.filter(f => f.category === 'automotriz').length },
  { id: 'moda', label: 'Moda', count: fairs.filter(f => f.category === 'moda').length },
]

export default function FeriasPage() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredFairs = activeCategory === 'all'
    ? fairs
    : fairs.filter(fair => fair.category === activeCategory)

  return (
    <>
      {/* Header Section */}
      <section className="relative py-32 pt-40 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1474181487882-5abf3f0ba6c2?w=1920&q=80"
            alt="Trade fair exhibition hall"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-white animate-fade-in-up">
            Ferias <span className="text-gold">Internacionales</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto animate-fade-in-up opacity-0" style={{ animationDelay: '0.2s' }}>
            Organizamos su viaje a las principales ferias comerciales y tecnológicas del mundo.
            Vuelos, hoteles, entradas y asistencia completa.
          </p>
          <div className="mt-8 h-1 w-24 bg-gold rounded-full mx-auto animate-fade-in-up opacity-0" style={{ animationDelay: '0.3s' }} />
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-burgundy relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-center">
            {[
              { value: '20+', label: 'Ferias al año' },
              { value: '4', label: 'Continentes' },
              { value: '650+', label: 'Clientes satisfechos' },
              { value: '45', label: 'Años de experiencia' },
            ].map((stat, index) => (
              <div key={stat.label} className="animate-fade-in-up opacity-0" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="font-playfair text-4xl sm:text-5xl font-bold text-gold">{stat.value}</div>
                <div className="mt-2 text-white/80 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fairs Grid */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Category Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  'px-5 py-2.5 rounded-full text-sm font-medium border transition-all duration-300',
                  activeCategory === category.id
                    ? 'bg-burgundy text-white border-burgundy shadow-lg shadow-burgundy/20'
                    : 'bg-white border-border text-muted-foreground hover:border-burgundy hover:text-burgundy hover:shadow-md'
                )}
              >
                {category.label}
                <span className={cn(
                  'ml-2 px-2 py-0.5 rounded-full text-xs',
                  activeCategory === category.id ? 'bg-white/20 text-white' : 'bg-muted text-muted-foreground'
                )}>
                  {category.count}
                </span>
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredFairs.map((fair, index) => (
              <div
                key={fair.name}
                className="animate-fade-in-up opacity-0"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <FairCard {...fair} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-foreground">
                ¿No encuentra la feria que busca?
              </h2>
              <div className="mt-4 h-1 w-20 bg-gold rounded-full" />
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Organizamos viajes a cualquier feria comercial, industrial o tecnológica
                del mundo. Contáctenos con los detalles de la feria que le interesa y
                prepararemos un paquete personalizado para su empresa.
              </p>
              <form
                className="mt-6 space-y-4"
                action={`mailto:Operaciones@itt-travelcorp.com?subject=${encodeURIComponent('Solicitud de Feria Personalizada')}`}
                method="GET"
              >
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    ¿Qué feria te gustaría visitar?
                  </label>
                  <Input
                    type="text"
                    name="body"
                    placeholder="Nombre de la feria..."
                    className="w-full"
                  />
                </div>
                <Button type="submit" className="bg-burgundy hover:bg-burgundy/90 text-white">
                  Enviar solicitud
                </Button>
              </form>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white rounded-xl border border-border">
                  <div className="font-playfair text-3xl font-bold text-burgundy">100+</div>
                  <div className="text-sm text-muted-foreground">Ferias disponibles</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl border border-border">
                  <div className="font-playfair text-3xl font-bold text-burgundy">24/7</div>
                  <div className="text-sm text-muted-foreground">Soporte durante el viaje</div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl border border-border p-8 shadow-xl">
              <h3 className="font-playfair text-xl font-semibold text-foreground mb-6">
                Nuestros paquetes incluyen:
              </h3>
              <ul className="space-y-4 text-muted-foreground">
                {[
                  'Pasajes aéreos ida y vuelta',
                  'Alojamiento cerca del recinto ferial',
                  'Entradas y acreditaciones',
                  'Traslados aeropuerto-hotel-feria',
                  'Seguro de viaje internacional',
                  'Asistencia durante toda la feria',
                  'Gestión de visas (si aplica)',
                  'Guía bilingüe opcional',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 group">
                    <div className="h-2 w-2 rounded-full bg-gold transition-transform group-hover:scale-150" />
                    <span className="group-hover:text-foreground transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Reserve su lugar en la próxima feria"
        subtitle="Los espacios en las ferias más importantes son limitados. Consulte disponibilidad ahora."
      />
    </>
  )
}
