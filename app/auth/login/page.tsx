import Link from 'next/link'

import { LogInForm } from '@/collections/Auth/LogInForm'
import { Section } from '@/components/layout/Section'

import { cn } from '@/utils/styles'

export default function Login() {
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
          Log in
        </h2>

        <LogInForm />
      </div>

      <span className={cn('pt-2 text-neutral-700 dark:text-neutral-400')}>
        Don&apos;t have an account?{' '}
        <Link
          href="/auth/signup"
          className={cn(
            'text-transparent bg-clip-text',
            'animate-background-shine bg-gradient-FVW',
          )}
        >
          Sign up
        </Link>
      </span>
    </Section>
  )
}
