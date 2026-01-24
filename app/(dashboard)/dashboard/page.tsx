import {
  Lightbulb,
  FileText,
  Image,
  Share2,
  Target,
  Users,
} from 'lucide-react'
import { StatsCard } from '@/components/dashboard/stats-card'
import { RecentActivity } from '@/components/dashboard/recent-activity'
import { QuickActions } from '@/components/dashboard/quick-actions'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

// Demo stats - will be replaced with real Sanity data
const demoStats = {
  landingIdeas: 12,
  contentBlocks: 28,
  mediaAssets: 45,
  socialLinks: 8,
  strategyDocs: 15,
  clientPersonas: 4,
}

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="space-y-1">
        <h2 className="text-2xl font-bold font-playfair text-foreground">
          Welcome back, Fumiko!
        </h2>
        <p className="text-muted-foreground">
          Here&apos;s an overview of your ITT Travel content hub.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <StatsCard
          title="Landing Ideas"
          value={demoStats.landingIdeas}
          icon={Lightbulb}
          description="Website concepts saved"
        />
        <StatsCard
          title="Content Blocks"
          value={demoStats.contentBlocks}
          icon={FileText}
          description="Reusable text blocks"
        />
        <StatsCard
          title="Media Assets"
          value={demoStats.mediaAssets}
          icon={Image}
          description="Images, videos & files"
        />
        <StatsCard
          title="Social Links"
          value={demoStats.socialLinks}
          icon={Share2}
          description="Connected platforms"
        />
        <StatsCard
          title="Strategy Docs"
          value={demoStats.strategyDocs}
          icon={Target}
          description="Plans & campaigns"
        />
        <StatsCard
          title="Client Personas"
          value={demoStats.clientPersonas}
          icon={Users}
          description="Ideal customer profiles"
        />
      </div>

      {/* Bottom Section */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Recent Activity */}
        <RecentActivity />

        {/* Quick Actions */}
        <div className="space-y-6">
          <QuickActions />
          
          {/* ITT Info Card */}
          <Card className="bg-gradient-to-br from-burgundy to-burgundy/80 text-white">
            <CardHeader>
              <CardTitle className="font-playfair text-lg text-white">
                ITT Travel
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-white/80">
                &quot;Creamos experiencias de viaje para cada tipo de viajero&quot;
              </p>
              <div className="space-y-1 text-sm">
                <p className="text-white/70">
                  <span className="text-gold font-medium">ITT Mayorista:</span>{' '}
                  Viajes para Agencias
                </p>
                <p className="text-white/70">
                  <span className="text-gold font-medium">ITT Corp:</span>{' '}
                  Viajes Corporativos
                </p>
              </div>
              <div className="pt-2 border-t border-white/20">
                <p className="text-xs text-white/60">
                  INTERNATIONAL TRAVEL & FAIRS SAC
                </p>
                <p className="text-xs text-white/60">RUC: 20612919012</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
