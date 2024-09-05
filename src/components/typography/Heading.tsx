import type { ComponentPropsWithoutRef } from 'react'

import Link from 'next/link'
import { createElement } from 'react'
import { FaLink } from 'react-icons/fa'

import { cn } from '@/utils/styles'

const HeadingClassnames = {
  h1: 'text-5xl sm:text-6xl font-medium',
  h2: 'text-xl sm:text-3xl',
  h3: 'mt-4 mb-2 text-2xl md:text-3xl font-medium',
  h4: 'text-xl sm:text-3xl',
  h5: 'text-xl md:text-2xl',
  h6: 'text-lg md:text-xl font-medium',
} as const

type TagVariants = keyof typeof HeadingClassnames

export interface HeadingProps extends ComponentPropsWithoutRef<TagVariants> {
  tag: TagVariants
  overrideTagVariant?: TagVariants
  terminal?: boolean
  href?: string
}

export const Heading = ({
  children,
  tag,
  overrideTagVariant,
  terminal = false,
  className,
  href,
  ...props
}: HeadingProps) => {
  return createElement(
    tag,
    {
      className: cn(
        HeadingClassnames[overrideTagVariant || tag],
        terminal && [
          'before:content-["$_"] before:text-transparent before:bg-clip-text',
          'before:animate-background-shine before:bg-gradient-FVW',
        ],
        className,
      ),
      ...props,
    },
    href === undefined ? (
      children
    ) : (
      <Link
        href={href}
        className={cn(
          'inline-flex items-center gap-2 active:underline hover:underline rounded',
        )}
      >
        {children}
        <FaLink className={cn('relative text-base opacity-50')} />
      </Link>
    ),
  )
}
