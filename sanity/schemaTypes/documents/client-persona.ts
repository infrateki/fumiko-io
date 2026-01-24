import { defineType, defineField } from 'sanity'
import { UsersIcon } from '@sanity/icons'

export const clientPersona = defineType({
  name: 'clientPersona',
  title: 'Client Persona',
  type: 'document',
  icon: UsersIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Persona Name',
      type: 'string',
      validation: (rule) => rule.required(),
      description: 'e.g., "Maria the Business Traveler"',
    }),
    defineField({
      name: 'avatar',
      title: 'Avatar',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'demographics',
      title: 'Demographics',
      type: 'object',
      fields: [
        defineField({
          name: 'ageRange',
          title: 'Age Range',
          type: 'string',
          options: {
            list: [
              { title: '18-24', value: '18-24' },
              { title: '25-34', value: '25-34' },
              { title: '35-44', value: '35-44' },
              { title: '45-54', value: '45-54' },
              { title: '55-64', value: '55-64' },
              { title: '65+', value: '65+' },
            ],
          },
        }),
        defineField({
          name: 'gender',
          title: 'Gender',
          type: 'string',
          options: {
            list: [
              { title: 'Male', value: 'male' },
              { title: 'Female', value: 'female' },
              { title: 'Other', value: 'other' },
              { title: 'Any', value: 'any' },
            ],
          },
        }),
        defineField({
          name: 'location',
          title: 'Location',
          type: 'string',
        }),
        defineField({
          name: 'occupation',
          title: 'Occupation',
          type: 'string',
        }),
        defineField({
          name: 'incomeLevel',
          title: 'Income Level',
          type: 'string',
          options: {
            list: [
              { title: 'Budget', value: 'budget' },
              { title: 'Mid-Range', value: 'midRange' },
              { title: 'Premium', value: 'premium' },
              { title: 'Luxury', value: 'luxury' },
            ],
          },
        }),
      ],
    }),
    defineField({
      name: 'interests',
      title: 'Interests',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'travelPreferences',
      title: 'Travel Preferences',
      type: 'object',
      fields: [
        defineField({
          name: 'travelStyle',
          title: 'Travel Style',
          type: 'array',
          of: [{ type: 'string' }],
          options: {
            list: [
              { title: 'Adventure', value: 'adventure' },
              { title: 'Relaxation', value: 'relaxation' },
              { title: 'Cultural', value: 'cultural' },
              { title: 'Business', value: 'business' },
              { title: 'Family', value: 'family' },
              { title: 'Romantic', value: 'romantic' },
              { title: 'Solo', value: 'solo' },
              { title: 'Group', value: 'group' },
              { title: 'Luxury', value: 'luxury' },
              { title: 'Budget', value: 'budget' },
            ],
          },
        }),
        defineField({
          name: 'preferredDestinations',
          title: 'Preferred Destinations',
          type: 'array',
          of: [{ type: 'string' }],
          options: {
            layout: 'tags',
          },
        }),
        defineField({
          name: 'travelFrequency',
          title: 'Travel Frequency',
          type: 'string',
          options: {
            list: [
              { title: 'Multiple times per year', value: 'frequent' },
              { title: '1-2 times per year', value: 'regular' },
              { title: 'Occasionally', value: 'occasional' },
              { title: 'Rarely', value: 'rare' },
            ],
          },
        }),
      ],
    }),
    defineField({
      name: 'painPoints',
      title: 'Pain Points',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'What problems or frustrations does this persona have?',
    }),
    defineField({
      name: 'goals',
      title: 'Goals',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'What are they trying to achieve?',
    }),
    defineField({
      name: 'quote',
      title: 'Representative Quote',
      type: 'text',
      rows: 2,
      description: 'A quote that captures this persona\'s mindset',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'avatar',
      occupation: 'demographics.occupation',
    },
    prepare({ title, media, occupation }) {
      return {
        title,
        subtitle: occupation || 'No occupation set',
        media,
      }
    },
  },
})
