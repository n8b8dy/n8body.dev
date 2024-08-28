'use client'

import type { SubmitHandler } from 'react-hook-form'

import type { SignUpSchema } from '@/schemas/auth'

import { valibotResolver } from '@hookform/resolvers/valibot'
import { useRouter } from 'next/navigation'
import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { HiOutlineUser } from 'react-icons/hi'
import { MdAlternateEmail, MdLockOutline } from 'react-icons/md'

import { Input } from '@/collections/Contacts/Input'

import { signUp } from '@/actions/auth'

import { signUpSchema } from '@/schemas/auth'

import { cn } from '@/utils/styles'

export interface SignUpFormProps {}

export const SignUpForm = ({}: SignUpFormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isDirty, errors },
  } = useForm<SignUpSchema>({
    delayError: 1000,
    resolver: valibotResolver(signUpSchema),
    defaultValues: { username: '', email: '', password: '' },
  })
  const [status, setStatus] = useState<'success' | 'error' | null>(null)
  const [error, setError] = useState<string | null>()
  const statusTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const router = useRouter()

  const submitHandler: SubmitHandler<SignUpSchema> = async (data, event) => {
    event?.preventDefault()

    const response = await signUp(data)

    if (response.data) {
      reset()
      setStatus('success')
      router.push('/admin')
    } else {
      setStatus('error')
      setError(response.error)
    }

    statusTimeoutRef.current && clearTimeout(statusTimeoutRef.current)
    statusTimeoutRef.current = setTimeout(() => {
      setStatus(null)
      setError(null)
    }, 8000)
  }

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className={cn('flex flex-col gap-2 text-lg')}
      noValidate
    >
      <Input
        type="text"
        placeholder="n8body"
        {...register('username')}
        errors={errors}
        icon={<HiOutlineUser className={cn('absolute top-[15px] left-2.5 text-2xl')} />}
        label="Name *"
      />
      <Input
        type="email"
        placeholder="example@n8body.dev"
        {...register('email')}
        errors={errors}
        icon={<MdAlternateEmail className={cn('absolute top-[15px] left-2.5 text-2xl')} />}
        label="Email *"
      />
      <Input
        type="password"
        placeholder="••••••••"
        {...register('password')}
        errors={errors}
        icon={<MdLockOutline className={cn('absolute top-[15px] left-2.5 text-2xl')} />}
        label="Password *"
      />

      {status === 'success' && !isDirty && (
        <div className="pt-1 text-sm italic text-green-600">
          <span>Redirecting...</span>
        </div>
      )}

      {status === 'error' && (
        <div className="pt-1 text-sm italic text-red-600">
          <span>{error || 'Unexpected error occurred, try later!'}</span>
        </div>
      )}

      <button
        type="submit"
        className={cn(
          'mt-2 px-4 py-1.5 flex justify-center items-center gap-1 rounded text-neutral-50 transition',
          'animate-background-shine bg-gradient-FVW',
        )}
      >
        <span>Sign up</span>
      </button>
    </form>
  )
}
