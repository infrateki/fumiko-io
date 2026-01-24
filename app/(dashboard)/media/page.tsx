'use client'

import { useState } from 'react'
import {
  Plus,
  Image as ImageIcon,
  Video,
  Music,
  FileText,
  Folder,
  Grid,
  List,
  Upload,
  Link as LinkIcon,
  Copy,
  Check,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
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

// Demo media assets
const demoMedia = [
  {
    _id: '1',
    title: 'ITT Logo Principal',
    mediaType: 'image',
    folder: 'branding',
    tags: ['logo', 'branding'],
    description: 'Logo principal de ITT Travel en alta resolución',
  },
  {
    _id: '2',
    title: 'Machu Picchu Sunrise',
    mediaType: 'image',
    folder: 'travelPhotos',
    tags: ['peru', 'destination'],
    description: 'Fotografía de Machu Picchu al amanecer',
  },
  {
    _id: '3',
    title: 'Team Photo 2024',
    mediaType: 'image',
    folder: 'teamPhotos',
    tags: ['team', 'about'],
    description: 'Foto del equipo ITT Travel 2024',
  },
  {
    _id: '4',
    title: 'Promo Video - ITT Mayorista',
    mediaType: 'video',
    folder: 'videos',
    tags: ['promo', 'mayorista'],
    description: 'Video promocional para agencias',
  },
  {
    _id: '5',
    title: 'Background Music - Relaxing',
    mediaType: 'audio',
    folder: 'music',
    tags: ['music', 'background'],
    description: 'Música de fondo para videos',
  },
  {
    _id: '6',
    title: 'Instagram Post - Paris',
    mediaType: 'image',
    folder: 'socialMedia',
    tags: ['instagram', 'europe'],
    description: 'Post para Instagram de destino Paris',
  },
  {
    _id: '7',
    title: 'Brochure ITT Corp',
    mediaType: 'document',
    folder: 'marketing',
    tags: ['brochure', 'corporate'],
    description: 'Brochure de servicios corporativos',
  },
  {
    _id: '8',
    title: 'Tokyo Night View',
    mediaType: 'image',
    folder: 'travelPhotos',
    tags: ['japan', 'asia'],
    description: 'Vista nocturna de Tokyo',
  },
]

const folders = [
  { value: 'all', label: 'All Folders', icon: Folder },
  { value: 'branding', label: 'Logos & Branding', icon: ImageIcon },
  { value: 'travelPhotos', label: 'Travel Photos', icon: ImageIcon },
  { value: 'teamPhotos', label: 'Team Photos', icon: ImageIcon },
  { value: 'marketing', label: 'Marketing Materials', icon: FileText },
  { value: 'socialMedia', label: 'Social Media', icon: ImageIcon },
  { value: 'videos', label: 'Videos', icon: Video },
  { value: 'music', label: 'Music', icon: Music },
  { value: 'documents', label: 'Documents', icon: FileText },
  { value: 'other', label: 'Other', icon: Folder },
]

const mediaTypeIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  image: ImageIcon,
  video: Video,
  audio: Music,
  document: FileText,
}

const mediaTypeColors: Record<string, string> = {
  image: 'bg-emerald-100 text-emerald-700',
  video: 'bg-purple-100 text-purple-700',
  audio: 'bg-amber-100 text-amber-700',
  document: 'bg-blue-100 text-blue-700',
}

export default function MediaPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [selectedFolder, setSelectedFolder] = useState('all')
  const [selectedType, setSelectedType] = useState('all')
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [copiedId, setCopiedId] = useState<string | null>(null)

  const filteredMedia = demoMedia.filter((media) => {
    const matchesFolder =
      selectedFolder === 'all' || media.folder === selectedFolder
    const matchesType =
      selectedType === 'all' || media.mediaType === selectedType
    return matchesFolder && matchesType
  })

  const copyUrl = (id: string) => {
    // In real implementation, this would copy the actual Sanity CDN URL
    navigator.clipboard.writeText(`https://cdn.sanity.io/images/.../${id}`)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold font-playfair text-foreground">
            Media Library
          </h2>
          <p className="text-muted-foreground">
            Manage your images, videos, audio, and documents
          </p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-burgundy hover:bg-burgundy/90 gap-2">
              <Upload className="h-4 w-4" />
              Upload Media
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle className="font-playfair">Upload Media</DialogTitle>
              <DialogDescription>
                Add new images, videos, or files to your library
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Title</label>
                <Input placeholder="e.g., Beach Sunset Photo" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Media Type</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="image">Image</SelectItem>
                    <SelectItem value="video">Video</SelectItem>
                    <SelectItem value="audio">Audio</SelectItem>
                    <SelectItem value="document">Document</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Folder</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select folder" />
                  </SelectTrigger>
                  <SelectContent>
                    {folders.slice(1).map((folder) => (
                      <SelectItem key={folder.value} value={folder.value}>
                        {folder.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">File</label>
                <div className="border-2 border-dashed rounded-lg p-8 text-center text-muted-foreground cursor-pointer hover:border-gold/50 transition-colors">
                  <Upload className="h-8 w-8 mx-auto mb-2 opacity-50" />
                  <p className="text-sm">Click to upload or drag and drop</p>
                  <p className="text-xs mt-1">Images, videos, audio, or documents</p>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Or Video URL</label>
                <Input placeholder="https://youtube.com/..." />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Description</label>
                <Textarea
                  placeholder="Add a description..."
                  className="resize-none"
                  rows={2}
                />
              </div>
            </div>
            <div className="flex justify-end gap-3">
              <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                Cancel
              </Button>
              <Button className="bg-burgundy hover:bg-burgundy/90">
                Upload
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Filters */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-3">
          <Select value={selectedFolder} onValueChange={setSelectedFolder}>
            <SelectTrigger className="w-[180px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {folders.map((folder) => (
                <SelectItem key={folder.value} value={folder.value}>
                  {folder.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={selectedType} onValueChange={setSelectedType}>
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="All Types" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="image">Images</SelectItem>
              <SelectItem value="video">Videos</SelectItem>
              <SelectItem value="audio">Audio</SelectItem>
              <SelectItem value="document">Documents</SelectItem>
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

      {/* Media Grid */}
      {viewMode === 'grid' ? (
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredMedia.map((media) => {
            const Icon = mediaTypeIcons[media.mediaType]
            return (
              <Card
                key={media._id}
                className="group overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-gold/30"
              >
                {/* Preview Area */}
                <div className="aspect-square bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center relative">
                  <Icon className="h-12 w-12 opacity-30" />
                  {/* Hover Actions */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                    <Button
                      size="icon"
                      variant="secondary"
                      className="h-8 w-8"
                      onClick={() => copyUrl(media._id)}
                    >
                      {copiedId === media._id ? (
                        <Check className="h-4 w-4" />
                      ) : (
                        <LinkIcon className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </div>
                <CardContent className="p-3">
                  <h3 className="font-medium text-sm truncate">{media.title}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge className={`text-xs ${mediaTypeColors[media.mediaType]}`}>
                      {media.mediaType}
                    </Badge>
                    <span className="text-xs text-muted-foreground truncate">
                      {folders.find((f) => f.value === media.folder)?.label}
                    </span>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      ) : (
        <div className="space-y-2">
          {filteredMedia.map((media) => {
            const Icon = mediaTypeIcons[media.mediaType]
            return (
              <Card key={media._id} className="transition-all duration-300 hover:shadow-md hover:border-gold/30">
                <CardContent className="p-3">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-md bg-muted flex items-center justify-center shrink-0">
                      <Icon className="h-6 w-6 opacity-50" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-sm truncate">{media.title}</h3>
                      <p className="text-xs text-muted-foreground truncate">
                        {media.description}
                      </p>
                    </div>
                    <Badge className={`text-xs ${mediaTypeColors[media.mediaType]}`}>
                      {media.mediaType}
                    </Badge>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="h-8 w-8"
                      onClick={() => copyUrl(media._id)}
                    >
                      {copiedId === media._id ? (
                        <Check className="h-4 w-4 text-emerald-600" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      )}

      {filteredMedia.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No media found.</p>
        </div>
      )}
    </div>
  )
}
