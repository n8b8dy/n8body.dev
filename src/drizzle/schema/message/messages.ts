import type { InferInsertModel, InferSelectModel } from 'drizzle-orm'

import { pgTable, text } from 'drizzle-orm/pg-core'
import { base } from '@/drizzle/schema/helpers'

export const messages = pgTable('messages', {
  ...base,

  name: text('name').notNull(),
  email: text('email').notNull(),
  message: text('message').notNull(),
})

export type Message = InferSelectModel<typeof messages>
export type MessageInsert = InferInsertModel<typeof messages>
