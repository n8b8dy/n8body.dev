'use client'

import { signOut } from '@/actions/auth'

export const SignOutButton = () => {
  return (
    <form action={() => signOut()}>
      <button type="submit">Sign out</button>
    </form>
  )
}
