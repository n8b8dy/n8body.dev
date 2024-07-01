import { relations, sql } from 'drizzle-orm'
import { pgEnum, pgTable, text } from 'drizzle-orm/pg-core'
import { base } from '@/drizzle/schema/helpers'
import { projectsToTechnologies } from '@/drizzle/schema/project/projectsToTechnologies'
import { projectsToTags } from '@/drizzle/schema/project/projectsToTags'

// export const projectTechnology = pgEnum('project_technology', [
//   'JAVASCRIPT',
//   'TYPESCRIPT',
//   'GOLANG',
//   'NODEJS',
//
//   'REACT',
//   'VUEJS',
//
//   'TAILWIND',
//   'POSTGRES',
//   'PRISMA',
//
//   'EXPO',
//   'REACTNATIVE',
// ])

export const projectTag = pgEnum('project_tag', [
  'FRONTEND',
  'BACKEND',
  'FULLSTACK',
  'SCRAPER',
  'BOT',
])

export const projects = pgTable('projects', {
  ...base,

  slug: text('slug').notNull().unique(),

  title: text('title').notNull(),
  description: text('description'),
  link: text('link'),
  repository: text('repository'),

  sections: text('sections')
    .array()
    .default(sql`ARRAY
    []::text[]`),
})

export const projectsRelations = relations(projects, ({ many }) => ({
  projectsToTags: many(projectsToTags),
  projectsToTechnologies: many(projectsToTechnologies)
}))