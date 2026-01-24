'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import {
  LayoutDashboard,
  Lightbulb,
  FileText,
  Image,
  Share2,
  Target,
  Users,
  Settings,
  Plane,
  ExternalLink,
} from 'lucide-react'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Landing Ideas', href: '/ideas', icon: Lightbulb },
  { name: 'Content', href: '/content', icon: FileText },
  { name: 'Media Library', href: '/media', icon: Image },
  { name: 'Social Links', href: '/social', icon: Share2 },
  { name: 'Strategy', href: '/strategy', icon: Target },
  { name: 'Client Personas', href: '/personas', icon: Users },
]

const secondaryNavigation = [
  { name: 'Settings', href: '/settings', icon: Settings },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="flex h-full w-64 flex-col bg-sidebar">
      {/* Logo Section */}
      <div className="flex h-16 items-center gap-3 px-6 border-b border-sidebar-border">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gold">
          <Plane className="h-5 w-5 text-sidebar" />
        </div>
        <div>
          <h1 className="font-playfair text-lg font-semibold text-sidebar-foreground">
            Fumiko.io
          </h1>
          <p className="text-xs text-sidebar-foreground/60">ITT Travel</p>
        </div>
      </div>

      {/* Navigation */}
      <ScrollArea className="flex-1 px-3 py-4">
        <nav className="flex flex-col gap-1">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200',
                  isActive
                    ? 'bg-sidebar-accent text-gold'
                    : 'text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground'
                )}
              >
                <item.icon className={cn('h-5 w-5', isActive && 'text-gold')} />
                {item.name}
              </Link>
            )
          })}
        </nav>

        <Separator className="my-4 bg-sidebar-border" />

        <nav className="flex flex-col gap-1">
          {secondaryNavigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200',
                  isActive
                    ? 'bg-sidebar-accent text-gold'
                    : 'text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground'
                )}
              >
                <item.icon className={cn('h-5 w-5', isActive && 'text-gold')} />
                {item.name}
              </Link>
            )
          })}
        </nav>
      </ScrollArea>

      {/* Bottom Section */}
      <div className="border-t border-sidebar-border p-4">
        <Button
          variant="outline"
          className="w-full justify-start gap-2 border-sidebar-border bg-transparent text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-foreground"
          asChild
        >
          <Link href="/studio" target="_blank">
            <ExternalLink className="h-4 w-4" />
            Open Studio
          </Link>
        </Button>
      </div>
    </div>
  )
}
