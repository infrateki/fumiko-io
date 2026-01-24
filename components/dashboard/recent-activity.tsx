import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ScrollArea } from '@/components/ui/scroll-area'
import {
  Lightbulb,
  FileText,
  Image,
  Share2,
  Target,
  Users,
  Activity,
} from 'lucide-react'

interface ActivityItem {
  _id: string
  _type: string
  _updatedAt: string
  title: string
}

const typeIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  landingIdea: Lightbulb,
  contentBlock: FileText,
  mediaAsset: Image,
  socialLink: Share2,
  strategyDoc: Target,
  clientPersona: Users,
}

const typeLabels: Record<string, string> = {
  landingIdea: 'Idea',
  contentBlock: 'Content',
  mediaAsset: 'Media',
  socialLink: 'Social',
  strategyDoc: 'Strategy',
  clientPersona: 'Persona',
}

const typeColors: Record<string, string> = {
  landingIdea: 'bg-amber-100 text-amber-700',
  contentBlock: 'bg-blue-100 text-blue-700',
  mediaAsset: 'bg-purple-100 text-purple-700',
  socialLink: 'bg-green-100 text-green-700',
  strategyDoc: 'bg-red-100 text-red-700',
  clientPersona: 'bg-cyan-100 text-cyan-700',
}

interface RecentActivityProps {
  activities?: ActivityItem[]
}

export function RecentActivity({ activities = [] }: RecentActivityProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffMs = now.getTime() - date.getTime()
    const diffMins = Math.floor(diffMs / 60000)
    const diffHours = Math.floor(diffMs / 3600000)
    const diffDays = Math.floor(diffMs / 86400000)

    if (diffMins < 1) return 'Just now'
    if (diffMins < 60) return `${diffMins}m ago`
    if (diffHours < 24) return `${diffHours}h ago`
    if (diffDays < 7) return `${diffDays}d ago`
    return date.toLocaleDateString()
  }

  // Demo data for when no Sanity connection
  const demoActivities: ActivityItem[] = [
    { _id: '1', _type: 'landingIdea', _updatedAt: new Date().toISOString(), title: 'New Hero Section Design' },
    { _id: '2', _type: 'contentBlock', _updatedAt: new Date(Date.now() - 3600000).toISOString(), title: 'About ITT Description' },
    { _id: '3', _type: 'mediaAsset', _updatedAt: new Date(Date.now() - 7200000).toISOString(), title: 'Team Photo 2024' },
    { _id: '4', _type: 'socialLink', _updatedAt: new Date(Date.now() - 86400000).toISOString(), title: 'Instagram' },
    { _id: '5', _type: 'strategyDoc', _updatedAt: new Date(Date.now() - 172800000).toISOString(), title: 'Q1 Marketing Plan' },
  ]

  const displayActivities = activities.length > 0 ? activities : demoActivities

  return (
    <Card className="h-full">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="font-playfair text-lg">Recent Activity</CardTitle>
          <Activity className="h-4 w-4 text-muted-foreground" />
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <ScrollArea className="h-[320px] px-6">
          <div className="space-y-4 pb-4">
            {displayActivities.map((activity) => {
              const Icon = typeIcons[activity._type] || FileText
              return (
                <div
                  key={activity._id}
                  className="flex items-start gap-3 rounded-lg p-2 transition-colors hover:bg-muted/50"
                >
                  <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-md bg-muted">
                    <Icon className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">
                      {activity.title}
                    </p>
                    <div className="flex items-center gap-2">
                      <Badge
                        variant="secondary"
                        className={typeColors[activity._type] || 'bg-gray-100'}
                      >
                        {typeLabels[activity._type] || activity._type}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {formatDate(activity._updatedAt)}
                      </span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  )
}
