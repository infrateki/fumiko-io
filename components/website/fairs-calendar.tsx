'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Calendar, MapPin, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

interface Fair {
  name: string
  dates: string
  location: string
  featured?: boolean
}

interface MonthData {
  month: string
  fairs: Fair[]
}

const fairsCalendar2026: MonthData[] = [
  {
    month: 'Enero',
    fairs: [
      { name: 'CES Las Vegas', dates: '7-10 Ene', location: 'USA', featured: true },
      { name: 'FITUR Madrid', dates: '22-26 Ene', location: 'España' },
    ],
  },
  {
    month: 'Febrero',
    fairs: [
      { name: 'Premiere Vision', dates: '11-13 Feb', location: 'Francia' },
      { name: 'MAGIC Las Vegas', dates: '17-19 Feb', location: 'USA' },
      { name: 'MWC Barcelona', dates: '24-27 Feb', location: 'España', featured: true },
    ],
  },
  {
    month: 'Marzo',
    fairs: [
      { name: 'ITB Berlin', dates: '4-6 Mar', location: 'Alemania' },
      { name: 'China Plus Shanghai', dates: '12-14 Mar', location: 'China', featured: true },
      { name: 'Hannover Messe', dates: '31 Mar-4 Abr', location: 'Alemania', featured: true },
    ],
  },
  {
    month: 'Abril',
    fairs: [
      { name: 'Bauma Munich', dates: '7-13 Abr', location: 'Alemania' },
      { name: 'Global Sources HK', dates: '11-14 Abr', location: 'Hong Kong' },
      { name: 'Canton Fair F1', dates: '15-19 Abr', location: 'China', featured: true },
      { name: 'Auto Shanghai', dates: '21-28 Abr', location: 'China' },
      { name: 'Canton Fair F2', dates: '23-27 Abr', location: 'China' },
    ],
  },
  {
    month: 'Mayo',
    fairs: [
      { name: 'Canton Fair F3', dates: '1-5 May', location: 'China' },
      { name: 'Interpack', dates: '4-10 May', location: 'Alemania', featured: true },
    ],
  },
  {
    month: 'Junio',
    fairs: [
      { name: 'Computex Taipei', dates: '3-6 Jun', location: 'Taiwán' },
      { name: 'China Plus Electronics', dates: '18-20 Jun', location: 'China', featured: true },
    ],
  },
  {
    month: 'Julio',
    fairs: [],
  },
  {
    month: 'Agosto',
    fairs: [],
  },
  {
    month: 'Septiembre',
    fairs: [
      { name: 'IFA Berlin', dates: '5-9 Sep', location: 'Alemania', featured: true },
      { name: 'China Plus Textiles', dates: '8-10 Sep', location: 'China', featured: true },
      { name: 'Automechanika', dates: '9-13 Sep', location: 'Alemania' },
      { name: 'EMO Hannover', dates: '15-20 Sep', location: 'Alemania' },
    ],
  },
  {
    month: 'Octubre',
    fairs: [
      { name: 'Canton Fair Otoño', dates: '15 Oct-4 Nov', location: 'China', featured: true },
      { name: 'Yiwu Fair', dates: '21-25 Oct', location: 'China' },
    ],
  },
  {
    month: 'Noviembre',
    fairs: [
      { name: 'WTM London', dates: '3-5 Nov', location: 'Reino Unido' },
    ],
  },
  {
    month: 'Diciembre',
    fairs: [],
  },
]

export function FairsCalendar() {
  const [startIndex, setStartIndex] = useState(0)
  const visibleMonths = 6

  const handlePrev = () => {
    setStartIndex(Math.max(0, startIndex - 1))
  }

  const handleNext = () => {
    setStartIndex(Math.min(12 - visibleMonths, startIndex + 1))
  }

  const currentMonth = new Date().getMonth() // 0-11

  return (
    <div className="w-full">
      {/* Header with Navigation */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="font-playfair text-2xl font-bold text-foreground">
            Calendario de Ferias <span className="text-gold">2026</span>
          </h3>
          <p className="text-muted-foreground mt-1">Planifique su próximo viaje de negocios</p>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={handlePrev}
            disabled={startIndex === 0}
            className="h-10 w-10"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={handleNext}
            disabled={startIndex >= 12 - visibleMonths}
            className="h-10 w-10"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute top-8 left-0 right-0 h-0.5 bg-border" />

        {/* Months */}
        <div className="grid grid-cols-6 gap-4">
          {fairsCalendar2026.slice(startIndex, startIndex + visibleMonths).map((monthData, index) => {
            const monthIndex = startIndex + index
            const isCurrentMonth = monthIndex === currentMonth
            const hasFairs = monthData.fairs.length > 0

            return (
              <div key={monthData.month} className="relative">
                {/* Month Dot */}
                <div className="flex justify-center mb-6">
                  <div
                    className={cn(
                      'relative z-10 w-4 h-4 rounded-full border-2 transition-all duration-300',
                      isCurrentMonth
                        ? 'bg-gold border-gold scale-125 animate-pulse'
                        : hasFairs
                        ? 'bg-burgundy border-burgundy'
                        : 'bg-white border-border'
                    )}
                  >
                    {isCurrentMonth && (
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gold text-black text-xs font-bold px-2 py-0.5 rounded-full whitespace-nowrap">
                        Actual
                      </div>
                    )}
                  </div>
                </div>

                {/* Month Label */}
                <div
                  className={cn(
                    'text-center font-medium mb-4 transition-colors',
                    isCurrentMonth ? 'text-gold' : hasFairs ? 'text-foreground' : 'text-muted-foreground'
                  )}
                >
                  {monthData.month}
                </div>

                {/* Fairs List */}
                <div className="space-y-2 min-h-[200px]">
                  {monthData.fairs.length > 0 ? (
                    monthData.fairs.map((fair) => (
                      <Link
                        key={fair.name}
                        href="/contacto"
                        className={cn(
                          'block p-3 rounded-lg border transition-all duration-300 group',
                          fair.featured
                            ? 'bg-burgundy/5 border-burgundy/20 hover:bg-burgundy/10 hover:border-burgundy/40'
                            : 'bg-white border-border hover:border-gold/50 hover:shadow-md'
                        )}
                      >
                        <div className="flex items-start gap-2">
                          {fair.featured && (
                            <div className="h-1.5 w-1.5 rounded-full bg-gold mt-1.5 flex-shrink-0" />
                          )}
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-sm text-foreground truncate group-hover:text-burgundy transition-colors">
                              {fair.name}
                            </p>
                            <div className="flex items-center gap-1 mt-1 text-xs text-muted-foreground">
                              <Calendar className="h-3 w-3" />
                              <span>{fair.dates}</span>
                            </div>
                            <div className="flex items-center gap-1 mt-0.5 text-xs text-muted-foreground">
                              <MapPin className="h-3 w-3" />
                              <span>{fair.location}</span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))
                  ) : (
                    <div className="text-center text-sm text-muted-foreground/50 py-8">
                      Sin ferias programadas
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-8 text-center">
        <Link
          href="/ferias"
          className="inline-flex items-center gap-2 text-sm font-semibold text-burgundy hover:text-burgundy/80 transition-colors group"
        >
          <span>Ver todas las ferias</span>
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  )
}
