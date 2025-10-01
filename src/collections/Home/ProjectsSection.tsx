import type { Project } from '@/drizzle/schema/project/projects'
import type { Tag } from '@/drizzle/schema/tag/tags'
import type { Technology } from '@/drizzle/schema/technology/technologies'

import { Card } from '@/collections/project/Card'
import { Section } from '@/components/layout/Section'
import { Heading } from '@/components/typography/Heading'

import { cn } from '@/utils/styles'

export interface ProjectsSectionProps {
  projects: Array<Project & { tags: Array<Tag>; technologies: Array<Technology> }>
}

export const ProjectsSection = ({ projects }: ProjectsSectionProps) => {
  return (
    <Section>
      <Heading tag="h3" href="/projects" terminal>
        Projects
      </Heading>
      <div className={cn('mt-1 grid md:grid-cols-2 gap-2')}>
        {projects.map(props => (
          <Card key={props.id} {...props} />
        ))}
      </div>
    </Section>
  )
}
