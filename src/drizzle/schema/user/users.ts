import type { InferInsertModel, InferSelectModel } from 'drizzle-orm'

import { relations } from 'drizzle-orm'
import { pgTable, text } from 'drizzle-orm/pg-core'

import { base } from '@/drizzle/schema/helpers'
import { sessions } from '@/drizzle/schema/session/sessions'
import { userRole } from '@/drizzle/schema/user/usersRole'

export const users = pgTable('users', {
  ...base,

  username: text('username').notNull().unique(),
  email: text('email').notNull().unique(),
  passwordHash: text('password_hash').notNull(),
  role: userRole('role').notNull().default('USER'),
})

export const usersRelations = relations(users, ({ many }) => ({ sessions: many(sessions) }))

export type User = InferSelectModel<typeof users>
export type UserInsert = InferInsertModel<typeof users>
