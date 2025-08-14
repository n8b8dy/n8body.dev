import type { InferInsertModel, InferSelectModel } from 'drizzle-orm'

import { date, pgTable, text } from 'drizzle-orm/pg-core'

import { base } from '@/drizzle/schema/helpers'

export const experiences = pgTable(`experiences`, {
  ...base,

  companyName: text('company_name').notNull(),
  positionName: text('position_name').notNull(),
  description: text('description'),

  startDate: date('start_date').notNull(),
  endDate: date('end_date')
})

export type Experience = InferSelectModel<typeof experiences>
export type ExperienceInsert = InferInsertModel<typeof experiences>
