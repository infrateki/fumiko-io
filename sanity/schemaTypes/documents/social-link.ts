import { defineType, defineField } from 'sanity'
import { LinkIcon } from '@sanity/icons'

export const socialLink = defineType({
  name: 'socialLink',
  title: 'Social Link',
  type: 'document',
  icon: LinkIcon,
  fields: [
    defineField({
      name: 'platform',
      title: 'Platform',
      type: 'string',
      options: {
        list: [
          { title: 'Instagram', value: 'instagram' },
          { title: 'Facebook', value: 'facebook' },
          { title: 'Twitter/X', value: 'twitter' },
          { title: 'LinkedIn', value: 'linkedin' },
          { title: 'TikTok', value: 'tiktok' },
          { title: 'YouTube', value: 'youtube' },
          { title: 'WhatsApp', value: 'whatsapp' },
          { title: 'Pinterest', value: 'pinterest' },
          { title: 'Website', value: 'website' },
          { title: 'Other', value: 'other' },
        ],
        layout: 'dropdown',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'handle',
      title: 'Handle/Username',
      type: 'string',
      description: 'e.g., @itttravel',
    }),
    defineField({
      name: 'displayName',
      title: 'Display Name',
      type: 'string',
      description: 'Custom display name for this link',
    }),
    defineField({
      name: 'isActive',
      title: 'Active',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      platform: 'platform',
      handle: 'handle',
      isActive: 'isActive',
    },
    prepare({ platform, handle, isActive }) {
      return {
        title: platform?.charAt(0).toUpperCase() + platform?.slice(1) || 'Unknown',
        subtitle: `${handle || 'No handle'} ${isActive ? '' : '(Inactive)'}`,
      }
    },
  },
})
