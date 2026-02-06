'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook } from 'lucide-react'
import { useLogoToggle } from '@/components/website/logo-toggle-provider'

const quickLinks = [
  { href: '/servicios', label: 'Servicios' },
  { href: '/ferias', label: 'Ferias' },
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/contacto', label: 'Contacto' },
]

const services = [
  { href: '/servicios#corporativos', label: 'Viajes Corporativos y de Incentivo' },
  { href: '/servicios#ferias', label: 'Misiones Comerciales' },
  { href: '/servicios#grupos', label: 'Viajes en grupo' },
]

const socialLinks = [
  { href: 'https://www.linkedin.com/company/international-travel-team/', icon: Linkedin, label: 'LinkedIn' },
  { href: 'https://www.instagram.com/itt_travelcorp/', icon: Instagram, label: 'Instagram' },
  { href: 'https://www.facebook.com/profile.php?id=61580202170551', icon: Facebook, label: 'Facebook' },
]

export function Footer() {
  const { useAltLogo, toggle } = useLogoToggle()

  return (
    <footer className="bg-[#2D2D2D] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="space-y-4">
            <button
              onClick={toggle}
              className="inline-block cursor-pointer bg-transparent border-none p-0"
              aria-label="Toggle logo"
            >
              <Image
                src={useAltLogo ? '/LOGO_FINALE_SINFONDO.jpg' : '/nuevo-logo-itt.jpeg'}
                alt="ITT Travel - International Travel & Fairs"
                width={280}
                height={100}
                className="h-24 w-auto object-contain rounded-2xl"
              />
            </button>
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
                <span>+51 963 606 723</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail className="h-4 w-4 text-gold flex-shrink-0" />
                <span>Operaciones@itt-travelcorp.com</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="h-4 w-4 text-gold flex-shrink-0 mt-0.5" />
                <span>Calle Esquilache 371 piso 6, San Isidro, Lima, Perú</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="text-gray-500 text-sm">Síguenos en redes sociales</p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-700 hover:bg-gold hover:text-black transition-all"
                  title={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Association Logos */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-col items-center gap-4">
            <p className="text-gray-500 text-xs uppercase tracking-wider">Asociaciones</p>
            <div className="flex items-center justify-center gap-8 flex-wrap">
              <Image
                src="/logo-asociaciones.jpeg"
                alt="Asociaciones del sector turístico"
                width={240}
                height={96}
                className="h-20 w-auto object-contain"
              />
              <Image
                src="/logo_alemania.jpeg"
                alt="Ferias de Alemania"
                width={240}
                height={96}
                className="h-20 w-auto object-contain"
              />
              <Image
                src="/logo_iata.jpg"
                alt="IATA - International Air Transport Association"
                width={240}
                height={96}
                className="h-20 w-auto object-contain"
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
