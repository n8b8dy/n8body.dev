import type { InferInsertModel, InferSelectModel } from 'drizzle-orm'

import { pgTable, text } from 'drizzle-orm/pg-core'
import { relations } from 'drizzle-orm'

import { base } from '@/drizzle/schema/helpers'
import { projectsToTags } from '@/drizzle/schema/project/projectsToTags'

export const tags = pgTable('tags', {
  ...base,

  slug: text('slug').notNull().unique(),
  name: text('name').notNull().unique(),
  color: text('color'),
})

export const tagsRelations = relations(tags, ({ many }) => ({
  projectsToTags: many(projectsToTags),
}))

export type Tag = InferSelectModel<typeof tags>
export type TagInsert = InferInsertModel<typeof tags>
