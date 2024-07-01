import { pgTable, text } from 'drizzle-orm/pg-core'
import { base } from '@/drizzle/schema/helpers'
import { relations } from 'drizzle-orm'
import { projectsToTechnologies } from '@/drizzle/schema/project/projectsToTechnologies'

export const technologies = pgTable('technologies', {
  ...base,
  slug: text("slug").notNull().unique(),
  name: text("name").notNull().unique(),
  color: text("color")
})

export const technologiesRelations = relations(technologies, ({ many }) => ({
  projectsToTechnologies: many(projectsToTechnologies)
}))