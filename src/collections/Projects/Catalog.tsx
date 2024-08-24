import type { Project } from '@/drizzle/schema/project/projects'
import type { Technology } from '@/drizzle/schema/technology/technologies'
import type { Tag } from '@/drizzle/schema/tag/tags'

import { Card } from '@/collections/project/Card'

import { cn } from '@/utils/styles'

export interface CatalogProps {
  projects: Array<Project & { tags: Array<Tag>; technologies: Array<Technology> }>
}

export const Catalog = ({ projects }: CatalogProps) => {
  return (
    <div className={cn('flex-grow')}>
      {projects.length === 0 ? (
        <div className={cn('py-4 flex justify-center')}>
          <span className={cn('text-lg italic opacity-50')}>
            Couldn&apos;t find any projects...
          </span>
        </div>
      ) : (
        <div className={cn('py-2 grid lg:grid-cols-2 gap-2 rounded')}>
          {projects.map(props => (
            <Card key={props.id} {...props} />
          ))}
        </div>
      )}
    </div>
  )
}
