import { defineType, defineField } from 'sanity'
import { CogIcon } from '@sanity/icons'

export const businessProfile = defineType({
  name: 'businessProfile',
  title: 'Business Profile',
  type: 'document',
  icon: CogIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Business Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'logoLight',
      title: 'Logo (Light Version)',
      type: 'image',
      description: 'For dark backgrounds',
    }),
    defineField({
      name: 'favicon',
      title: 'Favicon',
      type: 'image',
    }),
    defineField({
      name: 'colors',
      title: 'Brand Colors',
      type: 'object',
      fields: [
        defineField({
          name: 'primary',
          title: 'Primary Color',
          type: 'string',
          description: 'Hex color code (e.g., #8B2942)',
        }),
        defineField({
          name: 'secondary',
          title: 'Secondary Color',
          type: 'string',
        }),
        defineField({
          name: 'accent',
          title: 'Accent Color',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'mission',
      title: 'Mission Statement',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'vision',
      title: 'Vision Statement',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'values',
      title: 'Core Values',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Value',
              type: 'string',
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 2,
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'contact',
      title: 'Contact Information',
      type: 'object',
      fields: [
        defineField({
          name: 'email',
          title: 'Email',
          type: 'string',
          validation: (rule) => rule.email(),
        }),
        defineField({
          name: 'phone',
          title: 'Phone',
          type: 'string',
        }),
        defineField({
          name: 'address',
          title: 'Address',
          type: 'text',
          rows: 2,
        }),
        defineField({
          name: 'whatsapp',
          title: 'WhatsApp Number',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'legalInfo',
      title: 'Legal Information',
      type: 'object',
      fields: [
        defineField({
          name: 'ruc',
          title: 'RUC',
          type: 'string',
        }),
        defineField({
          name: 'legalName',
          title: 'Legal Name',
          type: 'string',
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'logo',
    },
  },
})
