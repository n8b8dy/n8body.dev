import { eq } from 'drizzle-orm'
import { cookies } from 'next/headers'

import { db } from '@/drizzle/db'
import { SessionInsert, sessions } from '@/drizzle/schema/session/sessions'
import { decryptSession, encryptSession } from '@/lib/crypto'

export const SESSION_COOKIE_NAME = 'session'
export const TTL = 7 * 24 * 60 * 60 * 1000

export async function createSession(data: Pick<SessionInsert, 'userId'>) {
  const expiresAt = new Date(Date.now() + TTL)

  const [session] = await db
    .insert(sessions)
    .values({ ...data, expiresAt })
    .returning({ id: sessions.id, userId: sessions.userId, expiresAt: sessions.expiresAt })

  const encryptedSession = await encryptSession(session)

  cookies().set(SESSION_COOKIE_NAME, encryptedSession, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: TTL,
    sameSite: 'lax',
    path: '/',
  })

  return encryptedSession
}

export async function getSession() {
  const encryptedSession = cookies().get(SESSION_COOKIE_NAME)?.value;

  if (!encryptedSession) return

  const session = await decryptSession(encryptedSession)

  if (!session) return
  if (new Date(session.expiresAt) < new Date()) {
    await deleteSession();
    return;
  }

  return session;
}

export async function deleteSession() {
  const sessionId = cookies().get(SESSION_COOKIE_NAME)?.value;
  if (!sessionId) return;

  await db.delete(sessions).where(eq(sessions.id, sessionId));
  cookies().delete(SESSION_COOKIE_NAME);
}