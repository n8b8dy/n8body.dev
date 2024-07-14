import { eq } from 'drizzle-orm'

import { Section } from '@/components/layout/Section'
import { Heading } from '@/components/typography/Heading'
import { BreadCrumbs } from '@/components/common/BreadCrumbs'
import { MarkdownCompiler } from '@/components/markdown/MarkdownCompiler'
import { ErrorSection } from '@/components/layout/ErrorSection'

import { cn } from '@/utils/styles'

import { db } from '@/drizzle/db'
import { projects } from '@/drizzle/schema/project/projects'

import { TechnologiesIcons } from '@/constants'

export async function generateStaticParams() {
  return db.query.projects.findMany({ columns: { slug: true } })
}

async function getData(slug: string) {
  const projectData = await db.query.projects.findFirst({
    where: eq(projects.slug, slug),
    with: {
      projectsToTechnologies: { with: { technology: true } },
      projectsToTags: { with: { tag: true } },
    },
  })

  if (!projectData) return { project: undefined }

  const { projectsToTechnologies, projectsToTags, ...project } = projectData

  return {
    project: {
      ...project,
      tags: projectsToTags.map(projectToTag => projectToTag.tag),
      technologies: projectsToTechnologies.map(
        projectToTechnology => projectToTechnology.technology,
      ),
    },
  }
}

export default async function ProjectsSlug({ params }: { params: { slug: string } }) {
  const { project } = await getData(params.slug)

  if (!project) return <ErrorSection status={404} description="Project Not Found" />

  const { title, tags, technologies, sections } = project

  return (
    <Section>
      <BreadCrumbs
        breadcrumbs={[
          { content: 'Home', href: '/' },
          { content: 'Projects', href: '/projects' },
          { content: title },
        ]}
      />

      <div className={cn('mt-1 mb-2 flex items-center flex-wrap gap-x-2')}>
        <Heading
          tag="h2"
          className={cn('text-3xl sm:text-3xl md:text-3xl font-medium')}
          terminal
        >
          {title}
        </Heading>
        {tags.map(tag => (
          <div
            key={tag.slug}
            className={cn(
              'mt-1 px-3 py-1',
              'text-sm bg-neutral-200 dark:bg-neutral-800 bg-opacity-40 dark:bg-opacity-50 rounded-full',
            )}
          >
            {tag.name}
          </div>
        ))}
      </div>

      <div className={cn('flex flex-wrap gap-2')}>
        {technologies.map(technology => (
          <div
            key={technology.slug}
            className={cn(
              'px-2 py-1.5 flex gap-1.5',
              'text-sm bg-neutral-200 dark:bg-neutral-800 bg-opacity-40 dark:bg-opacity-50 rounded',
            )}
          >
            <div className={cn('w-5')}>{TechnologiesIcons[technology.slug]}</div>
            {technology.name}
          </div>
        ))}
      </div>

      {sections !== null && (
        <div className={cn('mt-4 flex flex-col gap-1 text-lg')}>
          {sections.map((section, index) => (
            <MarkdownCompiler key={index} content={section} />
          ))}
        </div>
      )}
    </Section>
  )
}
