'use client'

import type { Tag } from '@/drizzle/schema/tag/tags'
import type { Technology } from '@/drizzle/schema/technology/technologies'

import { useRouter, useSearchParams } from 'next/navigation'

import { Heading } from '@/components/typography/Heading'

import { TechnologiesIcons } from '@/constants'
import { cn } from '@/utils/styles'

export interface FiltersProps {
  tags: Array<Tag>
  technologies: Array<Technology>
}

export const Filters = ({ tags, technologies }: FiltersProps) => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const selectedTags = searchParams.getAll('tag')
  const selectedTechnologies = searchParams.getAll('technology')

  const toggleTag = (slug: string) => {
    const params = new URLSearchParams(searchParams.toString())

    if (selectedTags.includes(slug)) {
      const newTags = selectedTags.filter(t => t !== slug)

      params.delete('tag')

      newTags.forEach(t => params.append('tag', t))
    } else {
      params.append('tag', slug)
    }

    router.push(`${window.location.pathname}?${params.toString()}`, { scroll: false })
  }

  const toggleTechnology = (slug: string) => {
    const params = new URLSearchParams(searchParams.toString())

    if (selectedTechnologies.includes(slug)) {
      const newTechnology = selectedTechnologies.filter(t => t !== slug)

      params.delete('technology')

      newTechnology.forEach(t => params.append('technology', t))
    } else {
      params.append('technology', slug)
    }

    router.push(`${window.location.pathname}?${params.toString()}`, { scroll: false })
  }

  return (
    <aside className={cn('w-80 flex flex-col gap-2 flex-shrink-0')}>
      <Heading tag="h5" className={cn('mt-2 font-medium')}>
        Filters
      </Heading>

      <Heading tag="h6" className={cn('font-normal opacity-80')}>
        Tags
      </Heading>
      <div className={cn('flex gap-1 flex-wrap')}>
        {tags.map(tag => (
          <button
            key={tag.slug}
            className={cn(
              'px-3 py-1 rounded-full',
              'border-[1px] border-neutral-800',
              selectedTags.includes(tag.slug) && 'bg-neutral-300 dark:bg-neutral-800',
            )}
            onClick={() => toggleTag(tag.slug)}
          >
            {tag.name}
          </button>
        ))}
      </div>

      <Heading tag="h6" className={cn('mt-2 font-normal opacity-80')}>
        Technologies
      </Heading>
      <div className={cn('flex gap-1 flex-wrap')}>
        {technologies.map(technology => (
          <button
            key={technology.slug}
            className={cn(
              'px-2 py-1.5 flex gap-1.5 text-sm rounded',
              'border-[1px] border-neutral-800',
              selectedTechnologies.includes(technology.slug) &&
                'bg-neutral-300 dark:bg-neutral-800',
            )}
            onClick={() => toggleTechnology(technology.slug)}
          >
            <div className={cn('w-5 h-5 flex justify-stretch items-stretch')}>
              {TechnologiesIcons[technology.slug]}
            </div>
            {technology.name}
          </button>
        ))}
      </div>
    </aside>
  )
}
