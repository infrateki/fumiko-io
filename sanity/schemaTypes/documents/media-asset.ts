import { defineType, defineField } from 'sanity'
import { ImagesIcon } from '@sanity/icons'

export const mediaAsset = defineType({
  name: 'mediaAsset',
  title: 'Media Asset',
  type: 'document',
  icon: ImagesIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'mediaType',
      title: 'Media Type',
      type: 'string',
      options: {
        list: [
          { title: 'Image', value: 'image' },
          { title: 'Video', value: 'video' },
          { title: 'Audio', value: 'audio' },
          { title: 'Document', value: 'document' },
        ],
        layout: 'radio',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image File',
      type: 'image',
      options: {
        hotspot: true,
      },
      hidden: ({ parent }) => parent?.mediaType !== 'image',
    }),
    defineField({
      name: 'videoUrl',
      title: 'Video URL (YouTube/Vimeo)',
      type: 'url',
      hidden: ({ parent }) => parent?.mediaType !== 'video',
    }),
    defineField({
      name: 'audioFile',
      title: 'Audio File',
      type: 'file',
      hidden: ({ parent }) => parent?.mediaType !== 'audio',
    }),
    defineField({
      name: 'documentFile',
      title: 'Document File',
      type: 'file',
      hidden: ({ parent }) => parent?.mediaType !== 'document',
    }),
    defineField({
      name: 'folder',
      title: 'Folder',
      type: 'string',
      options: {
        list: [
          { title: 'Logos & Branding', value: 'branding' },
          { title: 'Travel Photos', value: 'travelPhotos' },
          { title: 'Team Photos', value: 'teamPhotos' },
          { title: 'Marketing Materials', value: 'marketing' },
          { title: 'Social Media', value: 'socialMedia' },
          { title: 'Videos', value: 'videos' },
          { title: 'Music', value: 'music' },
          { title: 'Documents', value: 'documents' },
          { title: 'Other', value: 'other' },
        ],
      },
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      mediaType: 'mediaType',
      folder: 'folder',
      media: 'image',
    },
    prepare({ title, mediaType, folder, media }) {
      return {
        title,
        subtitle: `${mediaType || 'Unknown'} - ${folder || 'No folder'}`,
        media,
      }
    },
  },
})
