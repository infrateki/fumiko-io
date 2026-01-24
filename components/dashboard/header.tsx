'use client'

import { usePathname } from 'next/navigation'
import { Bell, Search, Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Sidebar } from './sidebar'

const pageTitles: Record<string, string> = {
  '/dashboard': 'Dashboard',
  '/ideas': 'Landing Page Ideas',
  '/content': 'Content Manager',
  '/media': 'Media Library',
  '/social': 'Social Media Hub',
  '/strategy': 'Strategy Hub',
  '/personas': 'Client Personas',
  '/settings': 'Settings',
}

export function Header() {
  const pathname = usePathname()
  const pageTitle = pageTitles[pathname] || 'Fumiko.io'

  return (
    <header className="flex h-16 items-center justify-between border-b bg-card px-4 lg:px-6">
      {/* Mobile Menu */}
      <div className="flex items-center gap-4">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64 p-0">
            <Sidebar />
          </SheetContent>
        </Sheet>

        <div>
          <h1 className="font-playfair text-xl font-semibold text-foreground">
            {pageTitle}
          </h1>
        </div>
      </div>

      {/* Search */}
      <div className="hidden flex-1 max-w-md mx-8 md:block">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search content..."
            className="pl-10 bg-background"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-gold" />
          <span className="sr-only">Notifications</span>
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-9 w-9 rounded-full">
              <Avatar className="h-9 w-9 border-2 border-gold/20">
                <AvatarImage src="/avatar.png" alt="Fumiko" />
                <AvatarFallback className="bg-burgundy text-white font-medium">
                  F
                </AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium">Fumiko</p>
                <p className="text-xs text-muted-foreground">
                  Owner, ITT Travel
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
