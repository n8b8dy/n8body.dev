import 'server-only'

import { SignJWT, jwtVerify } from 'jose'

import { Session } from '@/drizzle/schema/session/sessions'

const secretKey = process.env.SESSION_SECRET
const encodedKey = new TextEncoder().encode(secretKey)

interface EncryptionSession extends Pick<Session, 'id' |'userId' | 'expiresAt'> {}

export async function encryptSession(session: EncryptionSession) {
  return new SignJWT(session)
    .setProtectedHeader({ alg: 'HS256' })
    .sign(encodedKey)
}

export async function decryptSession(encryptedSession: string) {
  try {
    const { payload } = await jwtVerify(encryptedSession, encodedKey, {
      algorithms: ['HS256'],
    })

    return payload as EncryptionSession
  } catch (error) {
    console.error('Error verifying session: ', error)
  }
}
