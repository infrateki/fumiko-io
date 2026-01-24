import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin } from 'lucide-react'

const quickLinks = [
  { href: '/servicios', label: 'Servicios' },
  { href: '/ferias', label: 'Ferias' },
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/contacto', label: 'Contacto' },
]

const services = [
  { href: '/servicios#corporativos', label: 'Viajes Corporativos' },
  { href: '/servicios#ferias', label: 'Ferias y Exposiciones' },
  { href: '/servicios#visitas', label: 'Visitas Técnicas' },
]

export function Footer() {
  return (
    <footer className="bg-[#2D2D2D] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo.jpg"
                alt="ITT Travel"
                width={50}
                height={33}
                className="h-8 w-auto object-contain rounded"
              />
              <span className="font-playfair text-xl font-bold text-gold">ITT Travel</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Especialistas en viajes corporativos, ferias internacionales y visitas técnicas a fábricas de alta tecnología.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-playfair text-lg font-semibold mb-4 text-gold">Enlaces</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-playfair text-lg font-semibold mb-4 text-gold">Servicios</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-playfair text-lg font-semibold mb-4 text-gold">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone className="h-4 w-4 text-gold flex-shrink-0" />
                <span>+51 999 999 999</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail className="h-4 w-4 text-gold flex-shrink-0" />
                <span>info@itttravel.com</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="h-4 w-4 text-gold flex-shrink-0 mt-0.5" />
                <span>Lima, Perú</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Association Logos */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col items-center gap-4">
            <p className="text-gray-500 text-xs uppercase tracking-wider">Asociaciones</p>
            <div className="flex items-center justify-center gap-8 flex-wrap">
              <Image
                src="/logo-asociaciones.jpeg"
                alt="Asociaciones del sector turístico"
                width={120}
                height={48}
                className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
              />
              <Image
                src="/logo_alemania.jpeg"
                alt="Ferias de Alemania"
                width={120}
                height={48}
                className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} International Travel & Fairs SAC. Todos los derechos reservados.
            </p>
            <p className="text-gray-500 text-sm">
              RUC: 20612919012
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
