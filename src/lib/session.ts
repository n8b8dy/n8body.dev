import 'server-only'

import { eq } from 'drizzle-orm'
import { cookies } from 'next/headers'

import { db } from '@/drizzle/db'
import { SessionInsert, sessions } from '@/drizzle/schema/session/sessions'
import { decryptSession, encryptSession } from '@/lib/crypto'

export const SESSION_COOKIE_NAME = 'session'
export const TTL = 7 * 24 * 60 * 60 * 1000

export async function createSession(data: Pick<SessionInsert, 'userId'>) {
  const expiresAt = new Date(Date.now() + TTL)

  const [dbSession] = await db
    .insert(sessions)
    .values({ ...data, expiresAt })
    .returning()

  const encryptedSession = await encryptSession({
    id: dbSession.id,
  })

  cookies().set(SESSION_COOKIE_NAME, encryptedSession, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: TTL,
    sameSite: 'lax',
    path: '/',
  })

  return dbSession
}

export async function getSession() {
  const dbSession = await getDatabaseSession()
  if (!dbSession) return

  if (new Date(dbSession.expiresAt) < new Date()) {
    await db.delete(sessions).where(eq(sessions.id, dbSession.id))
    cookies().delete(SESSION_COOKIE_NAME)

    return
  }

  return dbSession
}

export async function deleteSession() {
  const dbSession = await getDatabaseSession()
  if (!dbSession) return

  await db.delete(sessions).where(eq(sessions.id, dbSession.id))
  cookies().delete(SESSION_COOKIE_NAME)
}

async function getDatabaseSession() {
  const encryptedSession = cookies().get(SESSION_COOKIE_NAME)?.value
  if (!encryptedSession) return

  const session = await decryptSession(encryptedSession)
  if (!session) {
    cookies().delete(SESSION_COOKIE_NAME)
    return
  }

  const dbSession = await db.query.sessions.findFirst({ where: eq(sessions.id, session.id) })
  if (!dbSession) {
    cookies().delete(SESSION_COOKIE_NAME)
    return
  }

  return dbSession
}
