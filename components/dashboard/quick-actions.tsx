import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  Plus,
  Lightbulb,
  FileText,
  Image,
  Share2,
  Target,
  Users,
  Zap,
} from 'lucide-react'

const quickActions = [
  {
    label: 'New Idea',
    href: '/ideas',
    icon: Lightbulb,
    color: 'text-amber-600',
    bgColor: 'bg-amber-50 hover:bg-amber-100',
  },
  {
    label: 'Add Content',
    href: '/content',
    icon: FileText,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50 hover:bg-blue-100',
  },
  {
    label: 'Upload Media',
    href: '/media',
    icon: Image,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50 hover:bg-purple-100',
  },
  {
    label: 'Add Social Link',
    href: '/social',
    icon: Share2,
    color: 'text-green-600',
    bgColor: 'bg-green-50 hover:bg-green-100',
  },
  {
    label: 'New Strategy',
    href: '/strategy',
    icon: Target,
    color: 'text-red-600',
    bgColor: 'bg-red-50 hover:bg-red-100',
  },
  {
    label: 'Add Persona',
    href: '/personas',
    icon: Users,
    color: 'text-cyan-600',
    bgColor: 'bg-cyan-50 hover:bg-cyan-100',
  },
]

export function QuickActions() {
  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="font-playfair text-lg">Quick Actions</CardTitle>
          <Zap className="h-4 w-4 text-gold" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {quickActions.map((action) => (
            <Button
              key={action.label}
              variant="ghost"
              className={`h-auto flex-col gap-2 py-4 ${action.bgColor}`}
              asChild
            >
              <Link href={action.href}>
                <action.icon className={`h-5 w-5 ${action.color}`} />
                <span className="text-xs font-medium text-foreground">
                  {action.label}
                </span>
              </Link>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
