import type { InferInsertModel, InferSelectModel } from 'drizzle-orm'

import { relations, sql } from 'drizzle-orm'
import { pgTable, text } from 'drizzle-orm/pg-core'

import { base } from '@/drizzle/schema/helpers'
import { projectsToTags } from '@/drizzle/schema/project/projectsToTags'
import { projectsToTechnologies } from '@/drizzle/schema/project/projectsToTechnologies'

export const projects = pgTable('projects', {
  ...base,

  slug: text('slug').notNull().unique(),

  title: text('title').notNull(),
  description: text('description'),
  link: text('link'),
  repository: text('repository'),

  sections: text('sections')
    .array()
    .default(sql`ARRAY[]::text[]`),
})

export const projectsRelations = relations(projects, ({ many }) => ({
  projectsToTags: many(projectsToTags),
  projectsToTechnologies: many(projectsToTechnologies),
}))

export type Project = InferSelectModel<typeof projects>
export type ProjectInsert = InferInsertModel<typeof projects>
