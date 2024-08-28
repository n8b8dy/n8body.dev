import Link from 'next/link'

import { SignUpForm } from '@/collections/Auth/SignUpForm'
import { Section } from '@/components/layout/Section'

import { cn } from '@/utils/styles'

export default function SignUp() {
  return (
    <Section className={cn('my-auto py-8 justify-center items-center')}>
      <div
        className={cn(
          'max-w-md w-full px-4 py-6 rounded',
          'bg-neutral-200 dark:bg-neutral-900 bg-opacity-40 dark:bg-opacity-70',
        )}
      >
        <h2
          className={cn(
            'mb-4 text-center text-3xl text-transparent font-semibold bg-clip-text',
            'animate-background-shine bg-gradient-FVW',
          )}
        >
          Sign up
        </h2>

        <SignUpForm />
      </div>

      <span className={cn('pt-2 text-neutral-700 dark:text-neutral-400 ')}>
        Already have an account?{' '}
        <Link
          href="/auth/login"
          className={cn(
            'text-transparent bg-clip-text',
            'animate-background-shine bg-gradient-FVW',
          )}
        >
          Log in
        </Link>
      </span>
    </Section>
  )
}
