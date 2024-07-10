import type { Project } from '@/drizzle/schema/project/projects'
import type { Technology } from '@/drizzle/schema/technology/technologies'
import type { Tag } from '@/drizzle/schema/tag/tags'

import { Section } from '@/components/layout/Section'
import { Heading } from '@/components/typography/Heading'
import { ProjectCard } from '@/components/project/ProjectCard'

import { cn } from '@/utils/styles'

export interface ProjectsSectionProps {
  projects: Array<Project & {
    tags: Array<Tag>
    technologies: Array<Technology>
  }>
}

export const ProjectsSection = ({ projects }: ProjectsSectionProps) => {
  return (
    <Section>
      <Heading tag="h3" href="/projects" terminal>
        Projects
      </Heading>
      <div className={cn('mt-1 grid md:grid-cols-2 gap-2')}>
        {projects.map((props) => <ProjectCard key={props.id} {...props}/>)}
      </div>
    </Section>
  )
}
