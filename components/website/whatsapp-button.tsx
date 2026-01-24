'use client'

import { MessageCircle } from 'lucide-react'

interface WhatsAppButtonProps {
  phoneNumber?: string
  message?: string
}

export function WhatsAppButton({
  phoneNumber = '51999999999',
  message = 'Hola, me interesa información sobre sus servicios de viajes corporativos.',
}: WhatsAppButtonProps) {
  const encodedMessage = encodeURIComponent(message)
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 hover:shadow-xl"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="h-7 w-7" fill="currentColor" />
    </a>
  )
}
