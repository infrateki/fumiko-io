import { defineType, defineField } from 'sanity'
import { DocumentIcon } from '@sanity/icons'

export const strategyDoc = defineType({
  name: 'strategyDoc',
  title: 'Strategy Document',
  type: 'document',
  icon: DocumentIcon,
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
          lists: [
            { title: 'Bullet', value: 'bullet' },
            { title: 'Numbered', value: 'number' },
            { title: 'Checklist', value: 'checklist' },
          ],
        },
      ],
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Marketing Strategy', value: 'marketing' },
          { title: 'Campaign Planning', value: 'campaign' },
          { title: 'Goals & KPIs', value: 'goals' },
          { title: 'Copywriting Templates', value: 'copywriting' },
          { title: 'Brand Guidelines', value: 'brand' },
          { title: 'Content Calendar', value: 'calendar' },
          { title: 'Competitive Analysis', value: 'competitive' },
          { title: 'Notes', value: 'notes' },
          { title: 'Other', value: 'other' },
        ],
      },
    }),
    defineField({
      name: 'priority',
      title: 'Priority',
      type: 'string',
      options: {
        list: [
          { title: 'High', value: 'high' },
          { title: 'Medium', value: 'medium' },
          { title: 'Low', value: 'low' },
        ],
        layout: 'radio',
      },
      initialValue: 'medium',
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Draft', value: 'draft' },
          { title: 'In Review', value: 'inReview' },
          { title: 'Active', value: 'active' },
          { title: 'Completed', value: 'completed' },
          { title: 'Archived', value: 'archived' },
        ],
      },
      initialValue: 'draft',
    }),
    defineField({
      name: 'dueDate',
      title: 'Due Date',
      type: 'date',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      category: 'category',
      priority: 'priority',
    },
    prepare({ title, category, priority }) {
      const priorityEmoji = priority === 'high' ? '🔴' : priority === 'medium' ? '🟡' : '🟢'
      return {
        title,
        subtitle: `${category || 'Uncategorized'} ${priorityEmoji}`,
      }
    },
  },
})
