import { groq } from 'next-sanity'

// Landing Ideas
export const LANDING_IDEAS_QUERY = groq`
  *[_type == "landingIdea"] | order(createdAt desc) {
    _id,
    title,
    image,
    category,
    status,
    notes,
    inspirationUrl,
    createdAt
  }
`

export const LANDING_IDEAS_BY_CATEGORY_QUERY = groq`
  *[_type == "landingIdea" && category == $category] | order(createdAt desc) {
    _id,
    title,
    image,
    category,
    status,
    notes,
    inspirationUrl,
    createdAt
  }
`

// Content Blocks
export const CONTENT_BLOCKS_QUERY = groq`
  *[_type == "contentBlock"] | order(_createdAt desc) {
    _id,
    title,
    content,
    category,
    tags,
    plainText
  }
`

export const CONTENT_BLOCKS_BY_CATEGORY_QUERY = groq`
  *[_type == "contentBlock" && category == $category] | order(_createdAt desc) {
    _id,
    title,
    content,
    category,
    tags,
    plainText
  }
`

// Media Assets
export const MEDIA_ASSETS_QUERY = groq`
  *[_type == "mediaAsset"] | order(_createdAt desc) {
    _id,
    title,
    mediaType,
    image,
    videoUrl,
    audioFile,
    documentFile,
    folder,
    tags,
    description
  }
`

export const MEDIA_ASSETS_BY_FOLDER_QUERY = groq`
  *[_type == "mediaAsset" && folder == $folder] | order(_createdAt desc) {
    _id,
    title,
    mediaType,
    image,
    videoUrl,
    audioFile,
    documentFile,
    folder,
    tags,
    description
  }
`

// Social Links
export const SOCIAL_LINKS_QUERY = groq`
  *[_type == "socialLink" && isActive == true] | order(order asc) {
    _id,
    platform,
    url,
    handle,
    displayName,
    isActive,
    order
  }
`

// Strategy Documents
export const STRATEGY_DOCS_QUERY = groq`
  *[_type == "strategyDoc"] | order(_createdAt desc) {
    _id,
    title,
    content,
    category,
    priority,
    status,
    dueDate
  }
`

export const STRATEGY_DOCS_BY_CATEGORY_QUERY = groq`
  *[_type == "strategyDoc" && category == $category] | order(_createdAt desc) {
    _id,
    title,
    content,
    category,
    priority,
    status,
    dueDate
  }
`

// Client Personas
export const CLIENT_PERSONAS_QUERY = groq`
  *[_type == "clientPersona"] | order(_createdAt desc) {
    _id,
    name,
    avatar,
    demographics,
    interests,
    travelPreferences,
    painPoints,
    goals,
    quote
  }
`

// Business Profile
export const BUSINESS_PROFILE_QUERY = groq`
  *[_type == "businessProfile"][0] {
    _id,
    name,
    tagline,
    logo,
    logoLight,
    favicon,
    colors,
    mission,
    vision,
    values,
    contact,
    legalInfo
  }
`

// Dashboard Stats
export const DASHBOARD_STATS_QUERY = groq`
{
  "landingIdeas": count(*[_type == "landingIdea"]),
  "contentBlocks": count(*[_type == "contentBlock"]),
  "mediaAssets": count(*[_type == "mediaAsset"]),
  "socialLinks": count(*[_type == "socialLink"]),
  "strategyDocs": count(*[_type == "strategyDoc"]),
  "clientPersonas": count(*[_type == "clientPersona"])
}
`

// Recent Activity (last 10 items across all types)
export const RECENT_ACTIVITY_QUERY = groq`
  *[_type in ["landingIdea", "contentBlock", "mediaAsset", "socialLink", "strategyDoc", "clientPersona"]] | order(_updatedAt desc)[0...10] {
    _id,
    _type,
    _updatedAt,
    "title": coalesce(title, name, platform)
  }
`
