import type { InferInsertModel, InferSelectModel } from 'drizzle-orm'

import { boolean, pgTable, text } from 'drizzle-orm/pg-core'
import { relations } from 'drizzle-orm'

import { base } from '@/drizzle/schema/helpers'
import { projectsToTechnologies } from '@/drizzle/schema/project/projectsToTechnologies'

export const technologies = pgTable('technologies', {
  ...base,

  slug: text('slug').notNull().unique(),
  name: text('name').notNull().unique(),
  color: text('color'),

  featured: boolean('featured').notNull().default(false),
})

export const technologiesRelations = relations(technologies, ({ many }) => ({
  projectsToTechnologies: many(projectsToTechnologies),
}))

export type Technology = InferSelectModel<typeof technologies>
export type TechnologyInsert = InferInsertModel<typeof technologies>
