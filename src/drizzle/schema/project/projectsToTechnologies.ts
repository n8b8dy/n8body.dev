import { pgTable, unique, uuid } from 'drizzle-orm/pg-core'
import { relations } from 'drizzle-orm'

import { projects } from '@/drizzle/schema/project/projects'
import { technologies } from '@/drizzle/schema/technology/technologies'

export const projectsToTechnologies = pgTable('projects_to_technologies', {
  projectId: uuid('project_id')
    .notNull()
    .references(() => projects.id, { onDelete: 'cascade' }),
  technologyId: uuid('technology_id')
    .notNull()
    .references(() => technologies.id, { onDelete: 'cascade' }),
}, (table) => ({
  projectsToTechnologiesUniqueIds: unique('projects_to_technologies_unique_ids').on(table.projectId, table.technologyId),
}))

export const projectsToTechnologiesRelations = relations(projectsToTechnologies, ({ one }) => ({
  project: one(projects, { fields: [projectsToTechnologies.projectId], references: [projects.id] }),
  technology: one(technologies, { fields: [projectsToTechnologies.technologyId], references: [technologies.id] }),
}))