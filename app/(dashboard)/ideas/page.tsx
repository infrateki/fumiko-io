'use client'

import { useState } from 'react'
import { Plus, Filter, Grid, List, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
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
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

// Demo data
const demoIdeas = [
  {
    _id: '1',
    title: 'Hero Section with Video Background',
    category: 'hero',
    status: 'approved',
    notes: 'Inspired by Viajes Rosario - clean, elegant with travel footage',
    inspirationUrl: 'https://viajesrosario.com',
    createdAt: '2024-01-15',
    image: null,
  },
  {
    _id: '2',
    title: 'Services Grid - ITT Mayorista & Corp',
    category: 'services',
    status: 'inProgress',
    notes: 'Two-column layout showing both divisions clearly',
    inspirationUrl: null,
    createdAt: '2024-01-14',
    image: null,
  },
  {
    _id: '3',
    title: 'Testimonials Carousel',
    category: 'testimonials',
    status: 'concept',
    notes: 'Show client reviews with photos and company logos',
    inspirationUrl: null,
    createdAt: '2024-01-13',
    image: null,
  },
  {
    _id: '4',
    title: 'About Fumiko Section',
    category: 'about',
    status: 'concept',
    notes: 'Personal story and founder message like Viajes Rosario does',
    inspirationUrl: 'https://viajesrosario.com',
    createdAt: '2024-01-12',
    image: null,
  },
  {
    _id: '5',
    title: 'Destination Gallery',
    category: 'fullPage',
    status: 'rejected',
    notes: 'Too complex for initial launch',
    inspirationUrl: null,
    createdAt: '2024-01-11',
    image: null,
  },
  {
    _id: '6',
    title: 'Contact Form with WhatsApp',
    category: 'contact',
    status: 'approved',
    notes: 'WhatsApp button prominently displayed like VR',
    inspirationUrl: null,
    createdAt: '2024-01-10',
    image: null,
  },
]

const categories = [
  { value: 'all', label: 'All Categories' },
  { value: 'hero', label: 'Hero Section' },
  { value: 'services', label: 'Services' },
  { value: 'about', label: 'About' },
  { value: 'testimonials', label: 'Testimonials' },
  { value: 'contact', label: 'Contact' },
  { value: 'footer', label: 'Footer' },
  { value: 'fullPage', label: 'Full Page' },
  { value: 'other', label: 'Other' },
]

const statusColors: Record<string, string> = {
  concept: 'bg-gray-100 text-gray-700',
  inProgress: 'bg-amber-100 text-amber-700',
  approved: 'bg-emerald-100 text-emerald-700',
  rejected: 'bg-red-100 text-red-700',
}

const statusLabels: Record<string, string> = {
  concept: 'Concept',
  inProgress: 'In Progress',
  approved: 'Approved',
  rejected: 'Rejected',
}

export default function IdeasPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const filteredIdeas =
    selectedCategory === 'all'
      ? demoIdeas
      : demoIdeas.filter((idea) => idea.category === selectedCategory)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold font-playfair text-foreground">
            Landing Page Ideas
          </h2>
          <p className="text-muted-foreground">
            Store and organize your website concepts and inspiration
          </p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-burgundy hover:bg-burgundy/90 gap-2">
              <Plus className="h-4 w-4" />
              New Idea
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle className="font-playfair">Add New Idea</DialogTitle>
              <DialogDescription>
                Save a new website concept or inspiration for ITT Travel
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Title</label>
                <Input placeholder="e.g., Hero Section with Video Background" />
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
                <label className="text-sm font-medium">Notes</label>
                <Textarea
                  placeholder="Describe your idea..."
                  className="resize-none"
                  rows={3}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Inspiration URL</label>
                <Input placeholder="https://..." />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Upload Image</label>
                <div className="border-2 border-dashed rounded-lg p-8 text-center text-muted-foreground cursor-pointer hover:border-gold/50 transition-colors">
                  <p className="text-sm">Click to upload mockup or screenshot</p>
                  <p className="text-xs mt-1">PNG, JPG up to 10MB</p>
                </div>
              </div>
            </div>
            <div className="flex justify-end gap-3">
              <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                Cancel
              </Button>
              <Button className="bg-burgundy hover:bg-burgundy/90">
                Save Idea
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Filters */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
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
        <Tabs
          value={viewMode}
          onValueChange={(v) => setViewMode(v as 'grid' | 'list')}
        >
          <TabsList>
            <TabsTrigger value="grid" className="gap-2">
              <Grid className="h-4 w-4" />
              Grid
            </TabsTrigger>
            <TabsTrigger value="list" className="gap-2">
              <List className="h-4 w-4" />
              List
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Ideas Grid */}
      {viewMode === 'grid' ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredIdeas.map((idea) => (
            <Card
              key={idea._id}
              className="group overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-gold/30"
            >
              {/* Image placeholder */}
              <div className="aspect-video bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
                <span className="text-4xl opacity-30">🖼️</span>
              </div>
              <CardContent className="p-4">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-medium text-foreground line-clamp-2">
                    {idea.title}
                  </h3>
                  <Badge className={statusColors[idea.status]}>
                    {statusLabels[idea.status]}
                  </Badge>
                </div>
                {idea.notes && (
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                    {idea.notes}
                  </p>
                )}
              </CardContent>
              <CardFooter className="px-4 pb-4 pt-0 flex items-center justify-between">
                <Badge variant="outline" className="text-xs">
                  {categories.find((c) => c.value === idea.category)?.label}
                </Badge>
                {idea.inspirationUrl && (
                  <a
                    href={idea.inspirationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-gold transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <div className="space-y-3">
          {filteredIdeas.map((idea) => (
            <Card key={idea._id} className="transition-all duration-300 hover:shadow-md hover:border-gold/30">
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                  <div className="h-16 w-24 rounded-md bg-muted flex items-center justify-center shrink-0">
                    <span className="text-2xl opacity-30">🖼️</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="font-medium text-foreground truncate">
                        {idea.title}
                      </h3>
                      <Badge className={statusColors[idea.status]}>
                        {statusLabels[idea.status]}
                      </Badge>
                    </div>
                    {idea.notes && (
                      <p className="mt-1 text-sm text-muted-foreground truncate">
                        {idea.notes}
                      </p>
                    )}
                    <div className="flex items-center gap-2 mt-2">
                      <Badge variant="outline" className="text-xs">
                        {categories.find((c) => c.value === idea.category)?.label}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {new Date(idea.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                  {idea.inspirationUrl && (
                    <a
                      href={idea.inspirationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-gold transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {filteredIdeas.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No ideas found in this category.</p>
        </div>
      )}
    </div>
  )
}
