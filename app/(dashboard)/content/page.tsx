'use client'

import { useState } from 'react'
import { Plus, Copy, Check, Search, Filter } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

// Demo content blocks
const demoContent = [
  {
    _id: '1',
    title: 'ITT Mission Statement',
    category: 'aboutItt',
    tags: ['mission', 'about'],
    plainText: 'Creamos experiencias de viaje para cada tipo de viajero. En ITT Travel, nuestra pasión es conectar personas con destinos extraordinarios, brindando un servicio personalizado y de excelencia.',
  },
  {
    _id: '2',
    title: 'ITT Mayorista Description',
    category: 'ittMayorista',
    tags: ['services', 'b2b'],
    plainText: 'Viajes personalizados y grupales internacionales para Agencias de Viaje. Ofrecemos los mejores destinos con tarifas competitivas y soporte 24/7 para agencias de viaje.',
  },
  {
    _id: '3',
    title: 'ITT Corp Description',
    category: 'ittCorp',
    tags: ['services', 'corporate'],
    plainText: 'Viajes corporativos y Feriales para Empresas corporativas. Gestión integral de viajes de negocios, ferias internacionales y eventos corporativos.',
  },
  {
    _id: '4',
    title: 'Website Tagline',
    category: 'taglines',
    tags: ['hero', 'slogan'],
    plainText: 'El viaje perfecto empieza aquí',
  },
  {
    _id: '5',
    title: 'Email Signature',
    category: 'emailTemplates',
    tags: ['email', 'signature'],
    plainText: 'Saludos cordiales,\n\nInternational Travel & Fairs SAC\nRUC: 20612919012\nwww.itttravel.com',
  },
  {
    _id: '6',
    title: 'Instagram Bio',
    category: 'socialMedia',
    tags: ['instagram', 'bio'],
    plainText: '✈️ ITT Travel | Creamos experiencias de viaje\n🌍 Mayorista & Corporativo\n📍 Perú\n📞 Contáctanos para tu próximo viaje',
  },
]

const categories = [
  { value: 'all', label: 'All Categories' },
  { value: 'aboutItt', label: 'About ITT' },
  { value: 'ittMayorista', label: 'ITT Mayorista' },
  { value: 'ittCorp', label: 'ITT Corp' },
  { value: 'services', label: 'Services' },
  { value: 'taglines', label: 'Taglines' },
  { value: 'emailTemplates', label: 'Email Templates' },
  { value: 'socialMedia', label: 'Social Media' },
  { value: 'other', label: 'Other' },
]

const categoryColors: Record<string, string> = {
  aboutItt: 'bg-blue-100 text-blue-700',
  ittMayorista: 'bg-purple-100 text-purple-700',
  ittCorp: 'bg-indigo-100 text-indigo-700',
  services: 'bg-emerald-100 text-emerald-700',
  taglines: 'bg-amber-100 text-amber-700',
  emailTemplates: 'bg-pink-100 text-pink-700',
  socialMedia: 'bg-cyan-100 text-cyan-700',
  other: 'bg-gray-100 text-gray-700',
}

export default function ContentPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [copiedId, setCopiedId] = useState<string | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const filteredContent = demoContent.filter((content) => {
    const matchesCategory =
      selectedCategory === 'all' || content.category === selectedCategory
    const matchesSearch =
      content.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      content.plainText.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const copyToClipboard = async (id: string, text: string) => {
    await navigator.clipboard.writeText(text)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold font-playfair text-foreground">
            Content Manager
          </h2>
          <p className="text-muted-foreground">
            Manage and organize all your copy and text content
          </p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-burgundy hover:bg-burgundy/90 gap-2">
              <Plus className="h-4 w-4" />
              New Content
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle className="font-playfair">Add New Content Block</DialogTitle>
              <DialogDescription>
                Create reusable text content for ITT Travel
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Title</label>
                <Input placeholder="e.g., About ITT Section" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Category</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.slice(1).map((cat) => (
                      <SelectItem key={cat.value} value={cat.value}>
                        {cat.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Content (Plain Text)</label>
                <Textarea
                  placeholder="Enter your content here..."
                  className="resize-none min-h-[150px]"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Tags</label>
                <Input placeholder="Add tags separated by commas" />
              </div>
            </div>
            <div className="flex justify-end gap-3">
              <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                Cancel
              </Button>
              <Button className="bg-burgundy hover:bg-burgundy/90">
                Save Content
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Filters */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search content..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-3">
          <Filter className="h-4 w-4 text-muted-foreground" />
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-[180px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {categories.map((cat) => (
                <SelectItem key={cat.value} value={cat.value}>
                  {cat.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid gap-4 md:grid-cols-2">
        {filteredContent.map((content) => (
          <Card
            key={content._id}
            className="group transition-all duration-300 hover:shadow-lg hover:border-gold/30"
          >
            <CardHeader className="pb-2">
              <div className="flex items-start justify-between gap-2">
                <CardTitle className="text-base font-medium">
                  {content.title}
                </CardTitle>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 shrink-0"
                  onClick={() => copyToClipboard(content._id, content.plainText)}
                >
                  {copiedId === content._id ? (
                    <Check className="h-4 w-4 text-emerald-600" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>
              </div>
              <Badge className={categoryColors[content.category]}>
                {categories.find((c) => c.value === content.category)?.label}
              </Badge>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground whitespace-pre-line line-clamp-4">
                {content.plainText}
              </p>
              {content.tags.length > 0 && (
                <div className="flex flex-wrap gap-1 mt-3">
                  {content.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="text-xs px-2 py-0"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredContent.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No content found.</p>
        </div>
      )}
    </div>
  )
}
