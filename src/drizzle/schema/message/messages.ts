import { pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core'
import { base } from '@/drizzle/schema/helpers'

export const messages = pgTable('messages', {
  ...base,

  name: text('name').notNull(),
  email: text('email').notNull(),
  message: text('message').notNull(),
})
