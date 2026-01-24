'use client'

import { useState } from 'react'
import {
  Plus,
  Filter,
  Calendar,
  AlertCircle,
  CheckCircle,
  Clock,
  FileEdit,
  Archive,
} from 'lucide-react'
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

// Demo strategy documents
const demoStrategyDocs = [
  {
    _id: '1',
    title: 'Q1 2024 Marketing Plan',
    category: 'marketing',
    priority: 'high',
    status: 'active',
    dueDate: '2024-03-31',
  },
  {
    _id: '2',
    title: 'Social Media Campaign - Summer Destinations',
    category: 'campaign',
    priority: 'high',
    status: 'inReview',
    dueDate: '2024-02-15',
  },
  {
    _id: '3',
    title: 'Brand Voice Guidelines',
    category: 'brand',
    priority: 'medium',
    status: 'completed',
    dueDate: null,
  },
  {
    _id: '4',
    title: 'Website Copywriting Templates',
    category: 'copywriting',
    priority: 'medium',
    status: 'active',
    dueDate: null,
  },
  {
    _id: '5',
    title: '2024 Goals & KPIs',
    category: 'goals',
    priority: 'high',
    status: 'active',
    dueDate: '2024-12-31',
  },
  {
    _id: '6',
    title: 'Competitor Analysis - Viajes Rosario',
    category: 'competitive',
    priority: 'low',
    status: 'draft',
    dueDate: null,
  },
  {
    _id: '7',
    title: 'Content Calendar March 2024',
    category: 'calendar',
    priority: 'medium',
    status: 'inReview',
    dueDate: '2024-03-01',
  },
  {
    _id: '8',
    title: 'Email Newsletter Ideas',
    category: 'notes',
    priority: 'low',
    status: 'draft',
    dueDate: null,
  },
]

const categories = [
  { value: 'all', label: 'All Categories' },
  { value: 'marketing', label: 'Marketing Strategy' },
  { value: 'campaign', label: 'Campaign Planning' },
  { value: 'goals', label: 'Goals & KPIs' },
  { value: 'copywriting', label: 'Copywriting Templates' },
  { value: 'brand', label: 'Brand Guidelines' },
  { value: 'calendar', label: 'Content Calendar' },
  { value: 'competitive', label: 'Competitive Analysis' },
  { value: 'notes', label: 'Notes' },
  { value: 'other', label: 'Other' },
]

const priorityConfig: Record<string, { label: string; color: string; icon: React.ComponentType<{ className?: string }> }> = {
  high: { label: 'High', color: 'bg-red-100 text-red-700', icon: AlertCircle },
  medium: { label: 'Medium', color: 'bg-amber-100 text-amber-700', icon: Clock },
  low: { label: 'Low', color: 'bg-green-100 text-green-700', icon: CheckCircle },
}

const statusConfig: Record<string, { label: string; color: string }> = {
  draft: { label: 'Draft', color: 'bg-gray-100 text-gray-700' },
  inReview: { label: 'In Review', color: 'bg-blue-100 text-blue-700' },
  active: { label: 'Active', color: 'bg-emerald-100 text-emerald-700' },
  completed: { label: 'Completed', color: 'bg-purple-100 text-purple-700' },
  archived: { label: 'Archived', color: 'bg-gray-100 text-gray-500' },
}

export default function StrategyPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedStatus, setSelectedStatus] = useState('all')
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const filteredDocs = demoStrategyDocs.filter((doc) => {
    const matchesCategory =
      selectedCategory === 'all' || doc.category === selectedCategory
    const matchesStatus =
      selectedStatus === 'all' || doc.status === selectedStatus
    return matchesCategory && matchesStatus
  })

  const statCounts = {
    total: demoStrategyDocs.length,
    active: demoStrategyDocs.filter((d) => d.status === 'active').length,
    highPriority: demoStrategyDocs.filter((d) => d.priority === 'high').length,
    draft: demoStrategyDocs.filter((d) => d.status === 'draft').length,
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold font-playfair text-foreground">
            Strategy Hub
          </h2>
          <p className="text-muted-foreground">
            Marketing plans, campaigns, and strategic documents
          </p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-burgundy hover:bg-burgundy/90 gap-2">
              <Plus className="h-4 w-4" />
              New Document
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[550px]">
            <DialogHeader>
              <DialogTitle className="font-playfair">Create Strategy Document</DialogTitle>
              <DialogDescription>
                Add a new planning document or campaign
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Title</label>
                <Input placeholder="e.g., Q2 Marketing Campaign" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Category</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
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
                  <label className="text-sm font-medium">Priority</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="high">High</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="low">Low</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Due Date (optional)</label>
                <Input type="date" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Content</label>
                <Textarea
                  placeholder="Write your strategy notes..."
                  className="resize-none min-h-[150px]"
                />
              </div>
            </div>
            <div className="flex justify-end gap-3">
              <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                Cancel
              </Button>
              <Button className="bg-burgundy hover:bg-burgundy/90">
                Create Document
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-4">
        <Card>
          <CardContent className="p-4 flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center">
              <FileEdit className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <div className="text-2xl font-bold font-playfair">{statCounts.total}</div>
              <p className="text-xs text-muted-foreground">Total Documents</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-emerald-100 flex items-center justify-center">
              <CheckCircle className="h-5 w-5 text-emerald-600" />
            </div>
            <div>
              <div className="text-2xl font-bold font-playfair">{statCounts.active}</div>
              <p className="text-xs text-muted-foreground">Active</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-red-100 flex items-center justify-center">
              <AlertCircle className="h-5 w-5 text-red-600" />
            </div>
            <div>
              <div className="text-2xl font-bold font-playfair">{statCounts.highPriority}</div>
              <p className="text-xs text-muted-foreground">High Priority</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-gray-100 flex items-center justify-center">
              <Clock className="h-5 w-5 text-gray-600" />
            </div>
            <div>
              <div className="text-2xl font-bold font-playfair">{statCounts.draft}</div>
              <p className="text-xs text-muted-foreground">Drafts</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-3">
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
        <Select value={selectedStatus} onValueChange={setSelectedStatus}>
          <SelectTrigger className="w-[150px]">
            <SelectValue placeholder="All Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="draft">Draft</SelectItem>
            <SelectItem value="inReview">In Review</SelectItem>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
            <SelectItem value="archived">Archived</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Documents List */}
      <div className="space-y-3">
        {filteredDocs.map((doc) => {
          const priority = priorityConfig[doc.priority]
          const status = statusConfig[doc.status]
          const PriorityIcon = priority.icon
          return (
            <Card
              key={doc._id}
              className="transition-all duration-300 hover:shadow-md hover:border-gold/30 cursor-pointer"
            >
              <CardContent className="p-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3 flex-1 min-w-0">
                    <div className={`h-10 w-10 rounded-lg ${priority.color.replace('text-', 'bg-').replace('-700', '-100')} flex items-center justify-center shrink-0`}>
                      <PriorityIcon className={`h-5 w-5 ${priority.color.split(' ')[1]}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-foreground truncate">
                        {doc.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {categories.find((c) => c.value === doc.category)?.label}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    {doc.dueDate && (
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        {new Date(doc.dueDate).toLocaleDateString()}
                      </div>
                    )}
                    <Badge className={priority.color}>{priority.label}</Badge>
                    <Badge className={status.color}>{status.label}</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {filteredDocs.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No documents found.</p>
        </div>
      )}
    </div>
  )
}
