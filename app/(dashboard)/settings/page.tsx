'use client'

import { useState } from 'react'
import { Save, Upload, Palette, Building, Mail, Phone, MapPin, FileText } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Separator } from '@/components/ui/separator'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

// Demo business profile
const demoProfile = {
  name: 'International Travel & Fairs',
  tagline: 'Creamos experiencias de viaje para cada tipo de viajero',
  mission: 'Conectar personas con destinos extraordinarios, brindando un servicio personalizado y de excelencia que transforma cada viaje en una experiencia inolvidable.',
  vision: 'Ser la agencia de viajes líder en Perú, reconocida por nuestra dedicación, innovación y pasión por crear momentos memorables para cada viajero.',
  colors: {
    primary: '#8B2942',
    secondary: '#F5F0E8',
    accent: '#C9A227',
  },
  contact: {
    email: 'info@itttravel.com',
    phone: '+51 1 234 5678',
    whatsapp: '+51 999 999 999',
    address: 'Lima, Perú',
  },
  legalInfo: {
    ruc: '20612919012',
    legalName: 'INTERNATIONAL TRAVEL & FAIRS SAC',
  },
  values: [
    { title: 'Dedicación', description: 'Servicio 24/7 para nuestros clientes' },
    { title: 'Seguridad', description: 'Viajes seguros y confiables' },
    { title: 'Presencia Internacional', description: 'Red global de socios' },
    { title: 'Pasión', description: 'Amamos lo que hacemos' },
  ],
}

export default function SettingsPage() {
  const [profile, setProfile] = useState(demoProfile)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold font-playfair text-foreground">
            Settings
          </h2>
          <p className="text-muted-foreground">
            Manage your ITT Travel business profile and branding
          </p>
        </div>
        <Button className="bg-burgundy hover:bg-burgundy/90 gap-2">
          <Save className="h-4 w-4" />
          Save Changes
        </Button>
      </div>

      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList>
          <TabsTrigger value="profile" className="gap-2">
            <Building className="h-4 w-4" />
            Profile
          </TabsTrigger>
          <TabsTrigger value="branding" className="gap-2">
            <Palette className="h-4 w-4" />
            Branding
          </TabsTrigger>
          <TabsTrigger value="contact" className="gap-2">
            <Mail className="h-4 w-4" />
            Contact
          </TabsTrigger>
        </TabsList>

        {/* Profile Tab */}
        <TabsContent value="profile" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="font-playfair">Business Information</CardTitle>
              <CardDescription>
                Your company&apos;s core identity and messaging
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-6">
                <Avatar className="h-24 w-24 border-4 border-gold/20">
                  <AvatarImage src="/logo.png" />
                  <AvatarFallback className="bg-burgundy text-white text-2xl font-playfair">
                    ITT
                  </AvatarFallback>
                </Avatar>
                <div className="space-y-2">
                  <Button variant="outline" className="gap-2">
                    <Upload className="h-4 w-4" />
                    Upload Logo
                  </Button>
                  <p className="text-xs text-muted-foreground">
                    PNG or JPG, max 2MB
                  </p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Business Name</label>
                  <Input
                    value={profile.name}
                    onChange={(e) =>
                      setProfile({ ...profile, name: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Tagline</label>
                  <Input
                    value={profile.tagline}
                    onChange={(e) =>
                      setProfile({ ...profile, tagline: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Mission Statement</label>
                <Textarea
                  value={profile.mission}
                  onChange={(e) =>
                    setProfile({ ...profile, mission: e.target.value })
                  }
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Vision Statement</label>
                <Textarea
                  value={profile.vision}
                  onChange={(e) =>
                    setProfile({ ...profile, vision: e.target.value })
                  }
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="font-playfair">Legal Information</CardTitle>
              <CardDescription>
                Official business registration details
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Legal Name</label>
                  <Input value={profile.legalInfo.legalName} readOnly className="bg-muted" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">RUC</label>
                  <Input value={profile.legalInfo.ruc} readOnly className="bg-muted" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="font-playfair">Core Values</CardTitle>
              <CardDescription>
                What ITT Travel stands for
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2">
                {profile.values.map((value, index) => (
                  <div key={index} className="p-4 rounded-lg border bg-muted/30">
                    <h4 className="font-medium text-foreground">{value.title}</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Branding Tab */}
        <TabsContent value="branding" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="font-playfair">Brand Colors</CardTitle>
              <CardDescription>
                Your brand color palette for consistency across all materials
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-3">
                <div className="space-y-3">
                  <label className="text-sm font-medium">Primary Color</label>
                  <div className="flex items-center gap-3">
                    <div
                      className="h-12 w-12 rounded-lg border-2 border-border"
                      style={{ backgroundColor: profile.colors.primary }}
                    />
                    <Input
                      value={profile.colors.primary}
                      onChange={(e) =>
                        setProfile({
                          ...profile,
                          colors: { ...profile.colors, primary: e.target.value },
                        })
                      }
                      className="font-mono"
                    />
                  </div>
                  <p className="text-xs text-muted-foreground">Burgundy - Used for headers and CTAs</p>
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-medium">Secondary Color</label>
                  <div className="flex items-center gap-3">
                    <div
                      className="h-12 w-12 rounded-lg border-2 border-border"
                      style={{ backgroundColor: profile.colors.secondary }}
                    />
                    <Input
                      value={profile.colors.secondary}
                      onChange={(e) =>
                        setProfile({
                          ...profile,
                          colors: { ...profile.colors, secondary: e.target.value },
                        })
                      }
                      className="font-mono"
                    />
                  </div>
                  <p className="text-xs text-muted-foreground">Warm white - Background color</p>
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-medium">Accent Color</label>
                  <div className="flex items-center gap-3">
                    <div
                      className="h-12 w-12 rounded-lg border-2 border-border"
                      style={{ backgroundColor: profile.colors.accent }}
                    />
                    <Input
                      value={profile.colors.accent}
                      onChange={(e) =>
                        setProfile({
                          ...profile,
                          colors: { ...profile.colors, accent: e.target.value },
                        })
                      }
                      className="font-mono"
                    />
                  </div>
                  <p className="text-xs text-muted-foreground">Gold - Accent and highlights</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="font-playfair">Logo Variations</CardTitle>
              <CardDescription>
                Different logo versions for various use cases
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 sm:grid-cols-3">
                <div className="space-y-3">
                  <label className="text-sm font-medium">Primary Logo</label>
                  <div className="aspect-video rounded-lg border-2 border-dashed border-border bg-muted/30 flex items-center justify-center">
                    <div className="text-center">
                      <Upload className="h-8 w-8 mx-auto text-muted-foreground/50" />
                      <p className="text-xs text-muted-foreground mt-2">Upload</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-medium">Light Version</label>
                  <div className="aspect-video rounded-lg border-2 border-dashed border-border bg-gray-800 flex items-center justify-center">
                    <div className="text-center">
                      <Upload className="h-8 w-8 mx-auto text-gray-500" />
                      <p className="text-xs text-gray-500 mt-2">For dark backgrounds</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-medium">Favicon</label>
                  <div className="aspect-video rounded-lg border-2 border-dashed border-border bg-muted/30 flex items-center justify-center">
                    <div className="text-center">
                      <Upload className="h-8 w-8 mx-auto text-muted-foreground/50" />
                      <p className="text-xs text-muted-foreground mt-2">32x32px</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Contact Tab */}
        <TabsContent value="contact" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="font-playfair">Contact Information</CardTitle>
              <CardDescription>
                How customers can reach ITT Travel
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    Email
                  </label>
                  <Input
                    type="email"
                    value={profile.contact.email}
                    onChange={(e) =>
                      setProfile({
                        ...profile,
                        contact: { ...profile.contact, email: e.target.value },
                      })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    Phone
                  </label>
                  <Input
                    value={profile.contact.phone}
                    onChange={(e) =>
                      setProfile({
                        ...profile,
                        contact: { ...profile.contact, phone: e.target.value },
                      })
                    }
                  />
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium">WhatsApp</label>
                  <Input
                    value={profile.contact.whatsapp}
                    onChange={(e) =>
                      setProfile({
                        ...profile,
                        contact: { ...profile.contact, whatsapp: e.target.value },
                      })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    Address
                  </label>
                  <Input
                    value={profile.contact.address}
                    onChange={(e) =>
                      setProfile({
                        ...profile,
                        contact: { ...profile.contact, address: e.target.value },
                      })
                    }
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
