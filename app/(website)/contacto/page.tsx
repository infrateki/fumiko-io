'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Mail, Phone, MapPin, MessageCircle, Send, Linkedin, Instagram, Facebook } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { ImageCarousel } from '@/components/website/image-carousel'

const contactInfo = [
  {
    icon: Phone,
    title: 'Teléfono',
    value: '+51 963 606 723',
    href: 'tel:+51963606723',
  },
  {
    icon: Mail,
    title: 'Email',
    value: 'Operaciones@itt-travelcorp.com',
    href: 'mailto:Operaciones@itt-travelcorp.com',
  },
  {
    icon: MapPin,
    title: 'Dirección',
    value: 'Calle Esquilache 371 piso 6, San Isidro, Lima, Perú',
    href: 'https://maps.google.com/?q=Calle+Esquilache+371+San+Isidro+Lima+Peru',
  },
]

const socialLinks = [
  {
    icon: Linkedin,
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/company/international-travel-team/',
    color: '#0077B5',
  },
  {
    icon: Instagram,
    title: 'Instagram',
    href: 'https://www.instagram.com/itt_travelcorp/',
    color: '#E4405F',
  },
  {
    icon: Facebook,
    title: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=61580202170551',
    color: '#1877F2',
  },
]

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    email: '',
    telefono: '',
    mensaje: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    alert('Gracias por contactarnos. Nos comunicaremos con usted pronto.')
    setFormData({ nombre: '', empresa: '', email: '', telefono: '', mensaje: '' })
    setIsSubmitting(false)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const whatsappUrl = `https://wa.me/51963606723?text=${encodeURIComponent(
    'Hola, me interesa información sobre sus servicios de viajes corporativos.'
  )}`

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px]">
        <ImageCarousel
          images={[
            { src: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&q=80', alt: 'Business consultation' },
            { src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80', alt: 'Team collaboration meeting' },
            { src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80', alt: 'Modern office space' },
          ]}
          interval={5000}
          overlay={false}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
          <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-center">
            <span className="text-gold">Contáctenos</span>
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto text-center">
            Estamos listos para ayudarle a planificar su próximo viaje de negocios
          </p>
          <div className="mt-6 h-1 w-24 bg-gold rounded-full" />
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div className="glass-card rounded-2xl p-8">
              <h2 className="font-playfair text-2xl font-bold text-foreground mb-2">
                Envíenos un mensaje
              </h2>
              <p className="text-muted-foreground mb-8">
                Complete el formulario y nos pondremos en contacto con usted en menos de 24 horas.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="nombre"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Nombre completo *
                    </label>
                    <Input
                      id="nombre"
                      name="nombre"
                      type="text"
                      required
                      value={formData.nombre}
                      onChange={handleChange}
                      placeholder="Juan Pérez"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="empresa"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Empresa
                    </label>
                    <Input
                      id="empresa"
                      name="empresa"
                      type="text"
                      value={formData.empresa}
                      onChange={handleChange}
                      placeholder="Nombre de su empresa"
                    />
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="juan@empresa.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="telefono"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Teléfono
                    </label>
                    <Input
                      id="telefono"
                      name="telefono"
                      type="tel"
                      value={formData.telefono}
                      onChange={handleChange}
                      placeholder="+51 999 999 999"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="mensaje"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Mensaje *
                  </label>
                  <Textarea
                    id="mensaje"
                    name="mensaje"
                    required
                    rows={5}
                    value={formData.mensaje}
                    onChange={handleChange}
                    placeholder="Cuéntenos sobre su próximo viaje o consulta..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-burgundy hover:bg-burgundy/90 text-white gap-2"
                >
                  {isSubmitting ? (
                    'Enviando...'
                  ) : (
                    <>
                      Enviar mensaje
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Quick Contact */}
              <div className="bg-burgundy rounded-2xl p-8 text-white">
                <h2 className="font-playfair text-2xl font-bold mb-4">
                  ¿Prefiere contacto directo?
                </h2>
                <p className="text-white/80 mb-6">
                  Escríbanos por WhatsApp y le responderemos de inmediato.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="w-full bg-[#25D366] hover:bg-[#25D366]/90 text-white gap-2"
                >
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-5 w-5" />
                    Chatear por WhatsApp
                  </a>
                </Button>
              </div>

              {/* Contact Details */}
              <div className="glass-card rounded-2xl p-8">
                <h3 className="font-playfair text-xl font-semibold text-foreground mb-6">
                  Información de contacto
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((item) => (
                    <div key={item.title} className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-burgundy/10 flex-shrink-0">
                        <item.icon className="h-5 w-5 text-burgundy" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{item.title}</p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="font-medium text-foreground hover:text-burgundy transition-colors"
                            target={item.href.startsWith('http') ? '_blank' : undefined}
                            rel={
                              item.href.startsWith('http')
                                ? 'noopener noreferrer'
                                : undefined
                            }
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="font-medium text-foreground">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social Media Links */}
                <div className="mt-8 pt-6 border-t border-border">
                  <h4 className="text-sm font-medium text-muted-foreground mb-4">Síguenos en redes sociales</h4>
                  <div className="flex gap-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.title}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-12 w-12 items-center justify-center rounded-lg bg-muted hover:opacity-80 transition-all"
                        style={{ backgroundColor: `${social.color}20` }}
                        title={social.title}
                      >
                        <social.icon className="h-5 w-5" style={{ color: social.color }} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Google Maps */}
              <div className="bg-white rounded-2xl border border-border overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d975.4!2d-77.0345!3d-12.0965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c87b84e5b89f%3A0x0!2sCalle%20Esquilache%20371%2C%20San%20Isidro%2015036%2C%20Peru!5e0!3m2!1ses!2sus!4v1706000000000"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-xl"
                  title="Ubicación ITT Travel - Calle Esquilache 371, San Isidro, Lima"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="py-20 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-foreground">
            ¿Tiene alguna pregunta?
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Nuestro equipo está disponible para responder todas sus consultas sobre
            viajes corporativos, ferias internacionales y visitas técnicas.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3 max-w-3xl mx-auto">
            <div className="glass-card rounded-xl p-4 interactive-glow transition-shadow">
              <p className="font-medium text-foreground">Cotizaciones</p>
              <p className="text-sm text-muted-foreground">En menos de 24 horas</p>
            </div>
            <div className="glass-card rounded-xl p-4 interactive-glow transition-shadow">
              <p className="font-medium text-foreground">Soporte</p>
              <p className="text-sm text-muted-foreground">24/7 durante su viaje</p>
            </div>
            <div className="glass-card rounded-xl p-4 interactive-glow transition-shadow">
              <p className="font-medium text-foreground">Pagos</p>
              <p className="text-sm text-muted-foreground">Múltiples opciones</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
