'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useLogoToggle } from '@/components/website/logo-toggle-provider'

const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/servicios', label: 'Servicios' },
  { href: '/ferias', label: 'Ferias' },
  { href: '/destinos-grupales', label: 'Destinos Grupales' },
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/contacto', label: 'Contacto' },
]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { useAltLogo, toggle } = useLogoToggle()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-500',
        scrolled
          ? 'bg-white/95 backdrop-blur-lg shadow-lg shadow-black/5 border-b border-border/50'
          : 'bg-transparent'
      )}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-24 items-center justify-between">
          {/* Logo - click to toggle between logos */}
          <button
            onClick={toggle}
            className="flex items-center group cursor-pointer bg-transparent border-none p-0"
            aria-label="Toggle logo"
          >
            <div className="relative overflow-hidden rounded-2xl transition-transform duration-300 group-hover:scale-105">
              <Image
                src={useAltLogo ? '/LOGO_FINALE_SINFONDO.jpg' : '/nuevo-logo-itt.jpeg'}
                alt="ITT Travel - International Travel & Fairs"
                width={220}
                height={80}
                className="h-16 sm:h-20 w-auto object-contain rounded-2xl"
                priority
              />
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative text-sm font-medium transition-colors duration-300 py-2",
                  "after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full",
                  scrolled
                    ? "text-foreground/80 hover:text-burgundy"
                    : "text-white/90 hover:text-white"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button
              asChild
              className={cn(
                "transition-all duration-300",
                scrolled
                  ? "bg-burgundy hover:bg-burgundy/90 text-white shadow-lg shadow-burgundy/20"
                  : "bg-gold hover:bg-gold/90 text-black"
              )}
            >
              <Link href="/contacto">Cotizar Ahora</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={cn(
              "md:hidden p-2 rounded-lg transition-colors duration-300",
              scrolled ? "text-foreground" : "text-white"
            )}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300",
            mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className={cn(
            "py-4 border-t",
            scrolled ? "border-border bg-white/95" : "border-white/20 bg-black/50 backdrop-blur-lg"
          )}>
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-base font-medium py-3 px-4 rounded-lg transition-all duration-300",
                    scrolled
                      ? "text-foreground/80 hover:text-burgundy hover:bg-burgundy/5"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="px-4 pt-2">
                <Button
                  asChild
                  className="w-full bg-burgundy hover:bg-burgundy/90 text-white"
                >
                  <Link href="/contacto" onClick={() => setMobileMenuOpen(false)}>
                    Cotizar Ahora
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
