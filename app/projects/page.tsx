import { desc } from 'drizzle-orm'

import { Catalog } from '@/collections/Projects/Catalog'
import { Section } from '@/components/layout/Section'
import { Heading } from '@/components/typography/Heading'

import { cn } from '@/utils/styles'

import { db } from '@/drizzle/db'
import { technologies } from '@/drizzle/schema/technology/technologies'

async function getData() {
  const projectsData = (await db.query.projects.findMany({
    limit: 5,
    orderBy: desc(technologies.updatedAt),
    with: {
      projectsToTechnologies: {
        with: {
          technology: true
        }
      },
      projectsToTags: {
        with: {
          tag: true,
        }
      },

    }
  })).map(({  projectsToTechnologies, projectsToTags, ...project }) => ({
    ...project,
    tags: projectsToTags.map(projectToTag => projectToTag.tag),
    technologies: projectsToTechnologies.map(projectToTechnology => projectToTechnology.technology)
  }))

  return {
    projects: projectsData,
  }
}

export default async function Projects() {
  const { projects } = await getData()

  return (
    <Section className={cn('gap-2')}>
      <Heading tag="h2" className={cn('my-2 text-2xl sm:text-3xl md:text-3xl font-medium')} terminal>Projects</Heading>

      <Catalog projects={projects}/>
    </Section>
  )
}
