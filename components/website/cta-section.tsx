import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, MessageCircle } from 'lucide-react'

interface CTASectionProps {
  title: string
  subtitle?: string
  primaryCtaText?: string
  primaryCtaHref?: string
  showWhatsApp?: boolean
  whatsappNumber?: string
}

export function CTASection({
  title,
  subtitle,
  primaryCtaText = 'Solicitar Cotización',
  primaryCtaHref = '/contacto',
  showWhatsApp = true,
  whatsappNumber = '51999999999',
}: CTASectionProps) {
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    'Hola, me interesa información sobre sus servicios de viajes corporativos.'
  )}`

  return (
    <section className="py-20 bg-gradient-to-br from-burgundy via-burgundy to-[#6B1D32]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-white">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              asChild
              className="bg-gold hover:bg-gold/90 text-[#2D2D2D] gap-2 text-base px-8 font-semibold"
            >
              <Link href={primaryCtaHref}>
                {primaryCtaText}
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>

            {showWhatsApp && (
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-white/30 text-white hover:bg-white/10 gap-2 text-base px-8"
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
