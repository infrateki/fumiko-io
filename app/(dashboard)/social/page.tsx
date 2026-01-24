'use client'

import { useState } from 'react'
import {
  Plus,
  ExternalLink,
  Copy,
  Check,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  MessageCircle,
  Globe,
  MoreHorizontal,
  GripVertical,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Switch } from '@/components/ui/switch'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

// Demo social links
const demoSocialLinks = [
  {
    _id: '1',
    platform: 'instagram',
    url: 'https://instagram.com/itttravel',
    handle: '@itttravel',
    displayName: 'ITT Travel',
    isActive: true,
    order: 1,
  },
  {
    _id: '2',
    platform: 'facebook',
    url: 'https://facebook.com/itttravel',
    handle: 'ITT Travel',
    displayName: 'ITT Travel Peru',
    isActive: true,
    order: 2,
  },
  {
    _id: '3',
    platform: 'linkedin',
    url: 'https://linkedin.com/company/itttravel',
    handle: 'ITT Travel',
    displayName: 'International Travel & Fairs',
    isActive: true,
    order: 3,
  },
  {
    _id: '4',
    platform: 'whatsapp',
    url: 'https://wa.me/51999999999',
    handle: '+51 999 999 999',
    displayName: 'WhatsApp ITT',
    isActive: true,
    order: 4,
  },
  {
    _id: '5',
    platform: 'youtube',
    url: 'https://youtube.com/@itttravel',
    handle: '@itttravel',
    displayName: 'ITT Travel Channel',
    isActive: false,
    order: 5,
  },
  {
    _id: '6',
    platform: 'website',
    url: 'https://www.itttravel.com',
    handle: 'itttravel.com',
    displayName: 'Sitio Web Oficial',
    isActive: true,
    order: 6,
  },
]

const platformIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  instagram: Instagram,
  facebook: Facebook,
  twitter: Twitter,
  linkedin: Linkedin,
  youtube: Youtube,
  whatsapp: MessageCircle,
  website: Globe,
  tiktok: MoreHorizontal,
  pinterest: MoreHorizontal,
  other: Globe,
}

const platformColors: Record<string, string> = {
  instagram: 'from-purple-500 to-pink-500',
  facebook: 'from-blue-600 to-blue-700',
  twitter: 'from-sky-400 to-sky-500',
  linkedin: 'from-blue-700 to-blue-800',
  youtube: 'from-red-500 to-red-600',
  whatsapp: 'from-green-500 to-green-600',
  website: 'from-gray-600 to-gray-700',
  tiktok: 'from-gray-800 to-black',
  pinterest: 'from-red-600 to-red-700',
  other: 'from-gray-500 to-gray-600',
}

const platformLabels: Record<string, string> = {
  instagram: 'Instagram',
  facebook: 'Facebook',
  twitter: 'Twitter/X',
  linkedin: 'LinkedIn',
  youtube: 'YouTube',
  whatsapp: 'WhatsApp',
  website: 'Website',
  tiktok: 'TikTok',
  pinterest: 'Pinterest',
  other: 'Other',
}

export default function SocialPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [copiedId, setCopiedId] = useState<string | null>(null)

  const copyUrl = (id: string, url: string) => {
    navigator.clipboard.writeText(url)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  const activeLinks = demoSocialLinks.filter((link) => link.isActive)
  const inactiveLinks = demoSocialLinks.filter((link) => !link.isActive)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold font-playfair text-foreground">
            Social Media Hub
          </h2>
          <p className="text-muted-foreground">
            Manage all your social media profiles and links
          </p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-burgundy hover:bg-burgundy/90 gap-2">
              <Plus className="h-4 w-4" />
              Add Social Link
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[450px]">
            <DialogHeader>
              <DialogTitle className="font-playfair">Add Social Link</DialogTitle>
              <DialogDescription>
                Add a new social media profile or website link
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Platform</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select platform" />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(platformLabels).map(([value, label]) => (
                      <SelectItem key={value} value={value}>
                        {label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">URL</label>
                <Input placeholder="https://..." />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Handle/Username</label>
                <Input placeholder="@itttravel" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Display Name (optional)</label>
                <Input placeholder="Custom display name" />
              </div>
            </div>
            <div className="flex justify-end gap-3">
              <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                Cancel
              </Button>
              <Button className="bg-burgundy hover:bg-burgundy/90">
                Add Link
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-4 sm:grid-cols-3">
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold font-playfair text-foreground">
              {demoSocialLinks.length}
            </div>
            <p className="text-sm text-muted-foreground">Total Links</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold font-playfair text-emerald-600">
              {activeLinks.length}
            </div>
            <p className="text-sm text-muted-foreground">Active</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold font-playfair text-gray-400">
              {inactiveLinks.length}
            </div>
            <p className="text-sm text-muted-foreground">Inactive</p>
          </CardContent>
        </Card>
      </div>

      {/* Active Links */}
      <div className="space-y-4">
        <h3 className="font-semibold text-foreground">Active Links</h3>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {activeLinks.map((link) => {
            const Icon = platformIcons[link.platform]
            return (
              <Card
                key={link._id}
                className="group transition-all duration-300 hover:shadow-lg hover:border-gold/30"
              >
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div
                      className={`h-12 w-12 rounded-xl bg-gradient-to-br ${platformColors[link.platform]} flex items-center justify-center shrink-0`}
                    >
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-foreground truncate">
                        {platformLabels[link.platform]}
                      </h4>
                      <p className="text-sm text-muted-foreground truncate">
                        {link.handle}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-4 pt-3 border-t">
                    <div className="flex items-center gap-2">
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-gold transition-colors"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => copyUrl(link._id, link.url)}
                      >
                        {copiedId === link._id ? (
                          <Check className="h-4 w-4 text-emerald-600" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                    <Badge className="bg-emerald-100 text-emerald-700">
                      Active
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Inactive Links */}
      {inactiveLinks.length > 0 && (
        <div className="space-y-4">
          <h3 className="font-semibold text-muted-foreground">Inactive Links</h3>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {inactiveLinks.map((link) => {
              const Icon = platformIcons[link.platform]
              return (
                <Card
                  key={link._id}
                  className="opacity-60 transition-all duration-300 hover:opacity-100"
                >
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="h-12 w-12 rounded-xl bg-gray-200 flex items-center justify-center shrink-0">
                        <Icon className="h-6 w-6 text-gray-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-foreground truncate">
                          {platformLabels[link.platform]}
                        </h4>
                        <p className="text-sm text-muted-foreground truncate">
                          {link.handle}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-4 pt-3 border-t">
                      <div className="flex items-center gap-2">
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-gold transition-colors"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </div>
                      <Badge variant="outline" className="text-muted-foreground">
                        Inactive
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}
