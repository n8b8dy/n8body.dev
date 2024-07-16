import type { InferInsertModel, InferSelectModel } from 'drizzle-orm'

import { pgTable, text } from 'drizzle-orm/pg-core'

import { base } from '@/drizzle/schema/helpers'
import { userRole } from '@/drizzle/schema/user/usersRole'

export const users = pgTable('users', {
  ...base,

  username: text('username').notNull().unique(),
  email: text('email').notNull().unique(),
  passwordHash: text('password_hash').notNull(),
  role: userRole('role').notNull().default('USER'),
})


export type User = InferSelectModel<typeof users>
export type UserInsert = InferInsertModel<typeof users>
