import type { Project } from '@/drizzle/schema/project/projects'
import type { Technology } from '@/drizzle/schema/technology/technologies'
import type { Tag } from '@/drizzle/schema/tag/tags'

import { memo } from 'react'

import { Heading } from '@/components/typography/Heading'
import { cn } from '@/utils/styles'

import { TechnologiesIcons } from '@/constants'

export interface ProjectCardProps extends Project {
  tags: Array<Tag>
  technologies: Array<Technology>
}

export const ProjectCard = memo(
  ({ slug, title, description, tags, technologies }: ProjectCardProps) => {
    return (
      <div
        className={cn(
          'px-5 py-3 w-full flex flex-col gap-0.5',
          'bg-neutral-200 dark:bg-neutral-900 bg-opacity-40 dark:bg-opacity-70 rounded',
        )}
      >
        <Heading tag="h5" href={`/projects/${slug}`}>
          {title}
        </Heading>

        <p className={cn('mb-1 flex-1 text-lg line-clamp-3 opacity-80')}>{description}</p>

        <div className={cn('items-center flex flex-wrap gap-1.5 text-xs md:text-sm')}>
          {technologies.map(technology => (
            <div key={technology.slug} className={cn('w-5 md:w-6')}>
              {TechnologiesIcons[technology.slug]}
            </div>
          ))}

          {tags.map(tag => (
            <div
              key={tag.slug}
              className={cn('px-3 py-1 bg-neutral-300 dark:bg-neutral-800 rounded-full')}
            >
              {tag.name}
            </div>
          ))}
        </div>
      </div>
    )
  },
)
ProjectCard.displayName = 'ProjectCard'
