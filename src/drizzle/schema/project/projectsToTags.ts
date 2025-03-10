import { pgTable, unique, uuid } from 'drizzle-orm/pg-core'
import { relations } from 'drizzle-orm'

import { projects } from '@/drizzle/schema/project/projects'
import { tags } from '@/drizzle/schema/tag/tags'

export const projectsToTags = pgTable('projects_to_tags', {
  projectId: uuid('project_id')
    .notNull()
    .references(() => projects.id, { onDelete: 'cascade' }),
  tagId: uuid('tag_id')
    .notNull()
    .references(() => tags.id, { onDelete: 'cascade' }),
}, (table) => ({
  projectsToTagsUniqueIds: unique('projects_to_tags_unique_ids').on(table.projectId, table.tagId),
}))

export const projectsToTagsRelations = relations(projectsToTags, ({ one }) => ({
  project: one(projects, { fields: [projectsToTags.projectId], references: [projects.id] }),
  tag: one(tags, { fields: [projectsToTags.tagId], references: [tags.id] }),
}))