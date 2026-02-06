'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

interface HeroCarouselProps {
  title: string
  highlight?: string
  subtitle: string
  ctaText?: string
  ctaHref?: string
  secondaryCtaText?: string
  secondaryCtaHref?: string
  backgroundImages?: string[]
  interval?: number // milliseconds between slides
}

export function HeroCarousel({
  title,
  highlight,
  subtitle,
  ctaText = 'Solicitar Cotización',
  ctaHref = '/contacto',
  secondaryCtaText,
  secondaryCtaHref,
  backgroundImages = [
    'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=80',
  ],
  interval = 5000
}: HeroCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const nextSlide = useCallback(() => {
    if (backgroundImages.length <= 1) return
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % backgroundImages.length)
      setIsTransitioning(false)
    }, 500)
  }, [backgroundImages.length])

  useEffect(() => {
    if (backgroundImages.length <= 1) return
    const timer = setInterval(nextSlide, interval)
    return () => clearInterval(timer)
  }, [backgroundImages.length, interval, nextSlide])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Images with Crossfade */}
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            } ${isTransitioning && index === currentIndex ? 'scale-105' : 'scale-100'} transition-transform duration-[2000ms]`}
          >
            <Image
              src={image}
              alt={`Background slide ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
              quality={90}
            />
          </div>
        ))}
        {/* Lighter Overlay - keeping images vivid */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent" />
        {/* Subtle bottom gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>

      {/* Slide Indicators */}
      {backgroundImages.length > 1 && (
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {backgroundImages.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsTransitioning(true)
                setTimeout(() => {
                  setCurrentIndex(index)
                  setIsTransitioning(false)
                }, 300)
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'w-8 bg-gold'
                  : 'w-2 bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gold/10 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-burgundy/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 pt-40">
        <div className="max-w-3xl">
          {/* Title */}
          <h1 className="font-playfair text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight animate-fade-in-up opacity-0" style={{ animationDelay: '0.2s' }}>
            {title}
            {highlight && (
              <>
                <br />
                <span className="text-gold relative">
                  {highlight}
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                    <path d="M2 10C50 4 150 2 298 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-gold/50" />
                  </svg>
                </span>
              </>
            )}
          </h1>

          {/* Subtitle */}
          <p className="mt-8 text-lg sm:text-xl text-gray-200 leading-relaxed max-w-2xl animate-fade-in-up opacity-0" style={{ animationDelay: '0.3s' }}>
            {subtitle}
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-in-up opacity-0" style={{ animationDelay: '0.4s' }}>
            <Button
              size="lg"
              asChild
              className="bg-burgundy hover:bg-burgundy/90 text-white gap-2 text-base px-8 shadow-xl shadow-burgundy/30 hover:shadow-2xl hover:shadow-burgundy/40 transition-all duration-300 hover:-translate-y-1"
            >
              <Link href={ctaHref}>
                {ctaText}
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            {secondaryCtaText && secondaryCtaHref && (
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-gold/50 text-gold hover:bg-gold/10 hover:border-gold text-base px-8 transition-all duration-300"
              >
                <Link href={secondaryCtaHref}>{secondaryCtaText}</Link>
              </Button>
            )}
          </div>

          {/* Trust Signals */}
          <div className="mt-16 flex flex-wrap gap-8 text-sm text-gray-300 animate-fade-in-up opacity-0" style={{ animationDelay: '0.5s' }}>
            <div className="flex items-center gap-2 group">
              <div className="h-2 w-2 rounded-full bg-gold group-hover:scale-125 transition-transform" />
              <span>+45 años de experiencia</span>
            </div>
            <div className="flex items-center gap-2 group">
              <div className="h-2 w-2 rounded-full bg-gold group-hover:scale-125 transition-transform" />
              <span>Ferias en 4 continentes</span>
            </div>
            <div className="flex items-center gap-2 group">
              <div className="h-2 w-2 rounded-full bg-gold group-hover:scale-125 transition-transform" />
              <span>+500 empresas satisfechas</span>
            </div>
          </div>
        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 rounded-full bg-white/60 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
