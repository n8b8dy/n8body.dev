import { sql } from 'drizzle-orm'
import { pgEnum, pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core'

export const projectTechnology = pgEnum('project_technology', [
  'JAVASCRIPT',
  'TYPESCRIPT',
  'GOLANG',
  'NODEJS',

  'REACT',
  'VUEJS',

  'TAILWIND',
  'POSTGRES',
  'PRISMA',

  'EXPO',
  'REACTNATIVE',
])

export const projectTag = pgEnum('project_tag', [
  'FRONTEND',
  'BACKEND',
  'FULLSTACK',
  'SCRAPER',
  'BOT',
])

export const project = pgTable('project', {
  id: uuid('id').primaryKey(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow().$onUpdate(() => new Date()),

  slug: text('slug').notNull().unique(),

  title: text('title').notNull(),
  description: text('description'),
  link: text('link'),
  repository: text('repository'),

  tags: projectTag('tags')
    .array()
    .notNull()
    .default(sql`ARRAY
    []::text[]`),
  technologies: projectTechnology('technologies')
    .array()
    .notNull()
    .default(sql`ARRAY
    []::text[]`),

  sections: text('sections')
    .array()
    .default(sql`ARRAY
    []::text[]`),
})
