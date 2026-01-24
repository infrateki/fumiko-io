'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'

interface ImageCarouselProps {
  images: { src: string; alt: string }[]
  interval?: number
  className?: string
  overlay?: boolean
}

export function ImageCarousel({
  images,
  interval = 5000,
  className = '',
  overlay = true
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = useCallback(() => {
    if (images.length <= 1) return
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }, [images.length])

  useEffect(() => {
    if (images.length <= 1) return
    const timer = setInterval(nextSlide, interval)
    return () => clearInterval(timer)
  }, [images.length, interval, nextSlide])

  return (
    <div className={`absolute inset-0 ${className}`}>
      {images.map((image, index) => (
        <div
          key={image.src}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentIndex
              ? 'opacity-100 scale-100'
              : 'opacity-0 scale-105'
          }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
            priority={index === 0}
            quality={85}
          />
        </div>
      ))}
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
      )}

      {/* Slide Indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'w-6 bg-gold'
                  : 'w-1.5 bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
