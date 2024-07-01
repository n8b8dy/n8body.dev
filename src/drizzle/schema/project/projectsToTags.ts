import { pgTable, uuid } from 'drizzle-orm/pg-core'
import { projects } from '@/drizzle/schema/project/projects'
import { relations } from 'drizzle-orm'
import { tags } from '@/drizzle/schema/tag/tags'

export const projectsToTags = pgTable('projects_to_tags', {
  projectId: uuid('project_id')
    .notNull()
    .references(() => projects.id, { onDelete: 'cascade' }),
  tagId: uuid('tag_id')
    .notNull()
    .references(() => tags.id, { onDelete: 'cascade' }),
})

export const projectsToTagsRelations = relations(projectsToTags, ({ one }) => ({
  project: one(projects, { fields: [projectsToTags.projectId], references: [projects.id] }),
  tag: one(tags, { fields: [projectsToTags.tagId], references: [tags.id] }),
}))