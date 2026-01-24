import { defineType, defineField } from 'sanity'
import { DocumentTextIcon } from '@sanity/icons'

export const contentBlock = defineType({
  name: 'contentBlock',
  title: 'Content Block',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'Heading 1', value: 'h1' },
            { title: 'Heading 2', value: 'h2' },
            { title: 'Heading 3', value: 'h3' },
            { title: 'Quote', value: 'blockquote' },
          ],
          marks: {
            decorators: [
              { title: 'Bold', value: 'strong' },
              { title: 'Italic', value: 'em' },
              { title: 'Underline', value: 'underline' },
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                  },
                ],
              },
            ],
          },
        },
      ],
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'About ITT', value: 'aboutItt' },
          { title: 'ITT Mayorista', value: 'ittMayorista' },
          { title: 'ITT Corp', value: 'ittCorp' },
          { title: 'Services', value: 'services' },
          { title: 'Taglines', value: 'taglines' },
          { title: 'Email Templates', value: 'emailTemplates' },
          { title: 'Social Media', value: 'socialMedia' },
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
      name: 'plainText',
      title: 'Plain Text (Copy/Paste Ready)',
      type: 'text',
      description: 'Simple text version for easy copy/paste',
      rows: 6,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      category: 'category',
    },
    prepare({ title, category }) {
      return {
        title,
        subtitle: category || 'Uncategorized',
      }
    },
  },
})
