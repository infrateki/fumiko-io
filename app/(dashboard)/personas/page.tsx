'use client'

import { useState } from 'react'
import { Plus, MapPin, Briefcase, Heart, Target, MessageSquare } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
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

// Demo personas
const demoPersonas = [
  {
    _id: '1',
    name: 'María la Empresaria',
    avatar: null,
    demographics: {
      ageRange: '35-44',
      gender: 'female',
      location: 'Lima, Perú',
      occupation: 'CEO de Empresa',
      incomeLevel: 'luxury',
    },
    interests: ['negocios', 'networking', 'lujo', 'eficiencia'],
    travelPreferences: {
      travelStyle: ['business', 'luxury'],
      preferredDestinations: ['Nueva York', 'Miami', 'Madrid'],
      travelFrequency: 'frequent',
    },
    painPoints: [
      'Poco tiempo para planificar viajes',
      'Necesita flexibilidad en itinerarios',
      'Requiere soporte 24/7',
    ],
    goals: [
      'Optimizar tiempo de viaje',
      'Combinar negocios con descanso',
      'Experiencias premium',
    ],
    quote: 'Mi tiempo es valioso, necesito un servicio que entienda mis necesidades sin tener que explicar dos veces.',
  },
  {
    _id: '2',
    name: 'Carlos el Agente de Viajes',
    avatar: null,
    demographics: {
      ageRange: '25-34',
      gender: 'male',
      location: 'Arequipa, Perú',
      occupation: 'Agente de Viajes',
      incomeLevel: 'midRange',
    },
    interests: ['turismo', 'ventas', 'tecnología', 'destinos'],
    travelPreferences: {
      travelStyle: ['group', 'cultural'],
      preferredDestinations: ['Europa', 'Asia', 'Caribe'],
      travelFrequency: 'regular',
    },
    painPoints: [
      'Comisiones competitivas',
      'Herramientas de cotización rápida',
      'Soporte para sus clientes',
    ],
    goals: [
      'Aumentar sus ventas',
      'Acceso a mejores tarifas',
      'Capacitación constante',
    ],
    quote: 'Necesito un mayorista que me haga quedar bien con mis clientes y me ayude a crecer.',
  },
  {
    _id: '3',
    name: 'Ana la Aventurera',
    avatar: null,
    demographics: {
      ageRange: '25-34',
      gender: 'female',
      location: 'Cusco, Perú',
      occupation: 'Diseñadora Freelance',
      incomeLevel: 'midRange',
    },
    interests: ['aventura', 'fotografía', 'naturaleza', 'cultura'],
    travelPreferences: {
      travelStyle: ['adventure', 'cultural', 'solo'],
      preferredDestinations: ['Patagonia', 'Islandia', 'Nueva Zelanda'],
      travelFrequency: 'regular',
    },
    painPoints: [
      'Encontrar experiencias auténticas',
      'Presupuesto limitado',
      'Seguridad viajando sola',
    ],
    goals: [
      'Experiencias únicas',
      'Destinos fuera de lo común',
      'Conectar con locales',
    ],
    quote: 'Busco viajes que me transformen, no solo lugares que visitar.',
  },
  {
    _id: '4',
    name: 'Roberto el Familiar',
    avatar: null,
    demographics: {
      ageRange: '45-54',
      gender: 'male',
      location: 'Lima, Perú',
      occupation: 'Gerente de Operaciones',
      incomeLevel: 'premium',
    },
    interests: ['familia', 'seguridad', 'comodidad', 'entretenimiento'],
    travelPreferences: {
      travelStyle: ['family', 'relaxation'],
      preferredDestinations: ['Orlando', 'Cancún', 'Punta Cana'],
      travelFrequency: 'regular',
    },
    painPoints: [
      'Viajes que agraden a todos',
      'Actividades para niños',
      'Presupuesto familiar',
    ],
    goals: [
      'Crear memorias familiares',
      'Todos disfruten',
      'Sin estrés',
    ],
    quote: 'Quiero que mis hijos recuerden estos viajes cuando sean grandes.',
  },
]

const incomeLevelLabels: Record<string, string> = {
  budget: 'Budget',
  midRange: 'Mid-Range',
  premium: 'Premium',
  luxury: 'Luxury',
}

const travelStyleLabels: Record<string, string> = {
  adventure: 'Aventura',
  relaxation: 'Relajación',
  cultural: 'Cultural',
  business: 'Negocios',
  family: 'Familiar',
  romantic: 'Romántico',
  solo: 'Solo',
  group: 'Grupal',
  luxury: 'Lujo',
  budget: 'Económico',
}

export default function PersonasPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [selectedPersona, setSelectedPersona] = useState<typeof demoPersonas[0] | null>(null)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold font-playfair text-foreground">
            Client Personas
          </h2>
          <p className="text-muted-foreground">
            Define your ideal customer profiles for ITT Travel
          </p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-burgundy hover:bg-burgundy/90 gap-2">
              <Plus className="h-4 w-4" />
              New Persona
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[550px]">
            <DialogHeader>
              <DialogTitle className="font-playfair">Create Client Persona</DialogTitle>
              <DialogDescription>
                Define your ideal customer profile
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4 max-h-[60vh] overflow-y-auto">
              <div className="space-y-2">
                <label className="text-sm font-medium">Persona Name</label>
                <Input placeholder='e.g., "María la Empresaria"' />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Age Range</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="18-24">18-24</SelectItem>
                      <SelectItem value="25-34">25-34</SelectItem>
                      <SelectItem value="35-44">35-44</SelectItem>
                      <SelectItem value="45-54">45-54</SelectItem>
                      <SelectItem value="55-64">55-64</SelectItem>
                      <SelectItem value="65+">65+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Income Level</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="budget">Budget</SelectItem>
                      <SelectItem value="midRange">Mid-Range</SelectItem>
                      <SelectItem value="premium">Premium</SelectItem>
                      <SelectItem value="luxury">Luxury</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Occupation</label>
                <Input placeholder="e.g., CEO, Travel Agent, Designer" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Location</label>
                <Input placeholder="e.g., Lima, Perú" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Representative Quote</label>
                <Textarea
                  placeholder="A quote that captures this persona's mindset..."
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
                Create Persona
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Personas Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {demoPersonas.map((persona) => (
          <Card
            key={persona._id}
            className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-gold/30 cursor-pointer"
            onClick={() => setSelectedPersona(persona)}
          >
            <CardHeader className="bg-gradient-to-r from-burgundy to-burgundy/80 text-white p-6">
              <div className="flex items-center gap-4">
                <Avatar className="h-16 w-16 border-2 border-white/30">
                  <AvatarImage src={persona.avatar || undefined} />
                  <AvatarFallback className="bg-gold text-burgundy text-xl font-bold">
                    {persona.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-xl font-playfair font-semibold text-white">
                    {persona.name}
                  </h3>
                  <div className="flex items-center gap-2 mt-1 text-white/80">
                    <Briefcase className="h-3.5 w-3.5" />
                    <span className="text-sm">{persona.demographics.occupation}</span>
                  </div>
                  <div className="flex items-center gap-2 mt-0.5 text-white/80">
                    <MapPin className="h-3.5 w-3.5" />
                    <span className="text-sm">{persona.demographics.location}</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              {/* Quote */}
              <div className="flex gap-2">
                <MessageSquare className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                <p className="text-sm italic text-muted-foreground">
                  &quot;{persona.quote}&quot;
                </p>
              </div>

              {/* Travel Style */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Heart className="h-4 w-4 text-burgundy" />
                  <span className="text-sm font-medium">Travel Style</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {persona.travelPreferences.travelStyle.map((style) => (
                    <Badge key={style} variant="secondary" className="text-xs">
                      {travelStyleLabels[style] || style}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Goals */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Target className="h-4 w-4 text-emerald-600" />
                  <span className="text-sm font-medium">Goals</span>
                </div>
                <ul className="text-sm text-muted-foreground space-y-1">
                  {persona.goals.slice(0, 3).map((goal, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      {goal}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Demographics */}
              <div className="flex items-center gap-4 pt-2 border-t text-sm text-muted-foreground">
                <span>{persona.demographics.ageRange} años</span>
                <span>•</span>
                <span>{incomeLevelLabels[persona.demographics.incomeLevel]}</span>
                <span>•</span>
                <span className="capitalize">{persona.travelPreferences.travelFrequency}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Detail Dialog */}
      {selectedPersona && (
        <Dialog open={!!selectedPersona} onOpenChange={() => setSelectedPersona(null)}>
          <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="font-playfair text-xl">{selectedPersona.name}</DialogTitle>
              <DialogDescription>
                {selectedPersona.demographics.occupation} - {selectedPersona.demographics.location}
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-6 py-4">
              {/* Quote */}
              <div className="bg-muted/50 rounded-lg p-4">
                <p className="italic text-muted-foreground">
                  &quot;{selectedPersona.quote}&quot;
                </p>
              </div>

              {/* Interests */}
              <div>
                <h4 className="font-medium mb-2">Interests</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedPersona.interests.map((interest) => (
                    <Badge key={interest} variant="outline">
                      {interest}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Preferred Destinations */}
              <div>
                <h4 className="font-medium mb-2">Preferred Destinations</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedPersona.travelPreferences.preferredDestinations.map((dest) => (
                    <Badge key={dest} className="bg-gold/10 text-gold border-gold/30">
                      {dest}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Pain Points */}
              <div>
                <h4 className="font-medium mb-2">Pain Points</h4>
                <ul className="space-y-1">
                  {selectedPersona.painPoints.map((point, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Goals */}
              <div>
                <h4 className="font-medium mb-2">Goals</h4>
                <ul className="space-y-1">
                  {selectedPersona.goals.map((goal, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      {goal}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}
