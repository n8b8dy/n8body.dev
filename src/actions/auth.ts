'use server'

import { logInSchema, LogInSchema, SignUpSchema } from '@/schemas/auth'
import type { ActionResponse } from '@/types/actions'

import { DatabaseError } from 'pg'
import { hash, verify } from 'argon2'
import { parse, ValiError } from 'valibot'

import { createSession, deleteSession, getSession } from '@/lib/session'

import { signUpSchema } from '@/schemas/auth'

import { db } from '@/drizzle/db'
import { users } from '@/drizzle/schema/user/users'
import { eq } from 'drizzle-orm'

export async function signUp(data: SignUpSchema): Promise<ActionResponse<{}>> {
  try {
    if (await getSession()) return { error: "You are already logged in." }

    const { username, email, password } = parse(signUpSchema, data)

    const passwordHash = await hash(password)

    const [{ id: userId }] = await db
      .insert(users)
      .values({ username, email, passwordHash })
      .returning({ id: users.id })

    await createSession({ userId })

    return { data: {} }
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

export async function logIn(data: LogInSchema): Promise<ActionResponse<{}>> {
  try {
    if (await getSession()) {
      await deleteSession()
    }

    const { email, password } = parse(logInSchema, data)

    const user = await db.query.users.findFirst({
      where: eq(users.email, email),
      columns: { id: true, passwordHash: true },
    })

    if (!user) return { error: 'Invalid email or password.' }

    if (!(await verify(user.passwordHash, password)))
      return { error: 'Invalid email or password.' }

    await createSession({ userId: user.id })

    return { data: { } }
  } catch (err) {
    console.error('Error logging in: ', err)

    if (err instanceof ValiError) return { error: err.message }

    return { error: `Something went wrong!` }
  }
}
