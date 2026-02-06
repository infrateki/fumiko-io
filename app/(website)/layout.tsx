import { Navbar } from '@/components/website/navbar'
import { Footer } from '@/components/website/footer'
import { WhatsAppButton } from '@/components/website/whatsapp-button'
import { LogoToggleProvider } from '@/components/website/logo-toggle-provider'

export default function WebsiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <LogoToggleProvider>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </div>
    </LogoToggleProvider>
  )
}
