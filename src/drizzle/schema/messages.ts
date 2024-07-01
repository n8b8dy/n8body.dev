import { pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core'

export const messages = pgTable('messages', {
  id: uuid('id').primaryKey(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow().$onUpdate(() => new Date()),

  name: text('name').notNull(),
  email: text('email').notNull(),
  message: text('message').notNull(),
})
