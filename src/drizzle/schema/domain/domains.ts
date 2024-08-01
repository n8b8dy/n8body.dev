import type { InferInsertModel, InferSelectModel } from 'drizzle-orm'

import { boolean, integer, pgTable, text } from 'drizzle-orm/pg-core'
import { relations } from 'drizzle-orm'

import { base } from '@/drizzle/schema/helpers'
import { technologies } from '@/drizzle/schema/technology/technologies'

export const domains = pgTable('domains', {
  ...base,

  slug: text('slug').notNull().unique(),
  name: text('name').notNull().unique(),
  backgroundColor: text('background_color'),
  borderColor: text('border_color'),

  featured: boolean('featured').notNull().default(false),
  rank: integer('rank').notNull().default(1)
})

export const domainsRelations = relations(domains, ({ many }) => ({
  technologies: many(technologies),
}))

export type Domain = InferSelectModel<typeof domains>
export type DomainInsert = InferInsertModel<typeof domains>
