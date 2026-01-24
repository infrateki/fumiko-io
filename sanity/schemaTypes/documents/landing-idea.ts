import { defineType, defineField } from 'sanity'
import { ImageIcon } from '@sanity/icons'

export const landingIdea = defineType({
  name: 'landingIdea',
  title: 'Landing Page Idea',
  type: 'document',
  icon: ImageIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Mockup/Screenshot',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Hero Section', value: 'hero' },
          { title: 'Services', value: 'services' },
          { title: 'About', value: 'about' },
          { title: 'Testimonials', value: 'testimonials' },
          { title: 'Contact', value: 'contact' },
          { title: 'Footer', value: 'footer' },
          { title: 'Full Page', value: 'fullPage' },
          { title: 'Other', value: 'other' },
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Concept', value: 'concept' },
          { title: 'In Progress', value: 'inProgress' },
          { title: 'Approved', value: 'approved' },
          { title: 'Rejected', value: 'rejected' },
        ],
        layout: 'radio',
      },
      initialValue: 'concept',
    }),
    defineField({
      name: 'notes',
      title: 'Notes',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'inspirationUrl',
      title: 'Inspiration URL',
      type: 'url',
    }),
    defineField({
      name: 'createdAt',
      title: 'Created At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      category: 'category',
      status: 'status',
      media: 'image',
    },
    prepare({ title, category, status, media }) {
      return {
        title,
        subtitle: `${category || 'Uncategorized'} - ${status || 'No status'}`,
        media,
      }
    },
  },
})
