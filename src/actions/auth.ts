'use server'

import type { SignUpSchema } from '@/schemas/auth'
import type { ActionResponse } from '@/types/actions'

import { DatabaseError } from 'pg'
import { hash } from 'argon2'
import { parse, ValiError } from 'valibot'

import { createSession } from '@/actions/session'

import { signUpSchema } from '@/schemas/auth'

import { db } from '@/drizzle/db'
import { users } from '@/drizzle/schema/user/users'

export async function signUp(data: SignUpSchema): Promise<ActionResponse<{ session: string }>> {
  try {
    const { username, email, password } = parse(signUpSchema, data)

    const passwordHash = await hash(password)

    const [{ id: userId }] = await db
      .insert(users)
      .values({ username, email, passwordHash })
      .returning({ id: users.id })

    const encryptedSession = await createSession({ userId })

    return { data: { session: encryptedSession } }
  } catch (err) {
    console.error('Error signing up: ', err)

    if (err instanceof ValiError) return { error: err.message }

    if (err instanceof DatabaseError) {
      switch (err.constraint) {
        case 'users_username_unique':
          return { error: 'The username is already taken.' }
        case 'users_email_unique':
          return { error: 'A user with this email already exists.' }
        default:
          return { error: err.detail || err.message }
      }
    }

    return { error: `Something went wrong!` }
  }
}
