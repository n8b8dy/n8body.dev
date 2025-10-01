import type { InferInsertModel, InferSelectModel } from 'drizzle-orm'

import { relations } from 'drizzle-orm'
import { boolean, integer, pgTable, text, uuid } from 'drizzle-orm/pg-core'

import { domains } from '@/drizzle/schema/domain/domains'
import { base } from '@/drizzle/schema/helpers'
import { projectsToTechnologies } from '@/drizzle/schema/project/projectsToTechnologies'

export const technologies = pgTable('technologies', {
  ...base,

  slug: text('slug').notNull().unique(),
  name: text('name').notNull().unique(),
  color: text('color'),

  featured: boolean('featured').notNull().default(false),
  rank: integer('rank').notNull().default(1),
  showOff: boolean('show_off').notNull().default(false),

  domainId: uuid('domainId'),
})

export const technologiesRelations = relations(technologies, ({ many, one }) => ({
  projectsToTechnologies: many(projectsToTechnologies),
  domain: one(domains, { fields: [technologies.domainId], references: [domains.id] }),
}))

export type Technology = InferSelectModel<typeof technologies>
export type TechnologyInsert = InferInsertModel<typeof technologies>
