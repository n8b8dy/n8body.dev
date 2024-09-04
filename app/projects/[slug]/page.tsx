import { Octokit } from '@octokit/rest'
import { eq } from 'drizzle-orm'
import { RxExternalLink } from 'react-icons/rx'
import { VscGithub } from 'react-icons/vsc'

import { BreadCrumbs } from '@/components/common/BreadCrumbs'
import { ErrorSection } from '@/components/layout/ErrorSection'
import { Section } from '@/components/layout/Section'
import { MarkdownCompiler } from '@/components/markdown/MarkdownCompiler'
import { Heading } from '@/components/typography/Heading'

import { db } from '@/drizzle/db'
import { projects } from '@/drizzle/schema/project/projects'

import { TechnologiesIcons } from '@/constants'
import { parseRepoUrl } from '@/utils/strings'
import { cn } from '@/utils/styles'

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
  if (!projectData) return { project: undefined, readme: undefined }

  const { projectsToTechnologies, projectsToTags, ...restProjectData } = projectData

  const project = {
    ...restProjectData,
    tags: projectsToTags.map(projectToTag => projectToTag.tag),
    technologies: projectsToTechnologies.map(
      projectToTechnology => projectToTechnology.technology,
    ),
  }

  if (!project.repository) return { project, readme: undefined }

  const repoParams = parseRepoUrl(project.repository)
  if (!repoParams) return { project, readme: undefined }

  const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN })

  const { data: readme } = await octokit.repos.getReadme({
    ...repoParams,
    mediaType: { format: 'raw' },
  })

  return { project, readme: readme as unknown as string }
}

export default async function ProjectsSlug({ params }: { params: { slug: string } }) {
  const { project, readme } = await getData(params.slug)

  if (!project) return <ErrorSection status={404} description="Project Not Found" />

  const { title, description, technologies, tags, link, repository } = project

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

        <div className={cn('ml-auto flex items-center gap-3')}>
          {link && (
            <a href={link}>
              <RxExternalLink className={cn('w-7 h-7')} />
            </a>
          )}
          {repository && (
            <a href={repository}>
              <VscGithub className={cn('w-6 h-6')} />
            </a>
          )}
        </div>
      </div>

      <p className={cn('mb-2')}>{description}</p>

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

      {readme && (
        <div className={cn('mt-4')}>
          <MarkdownCompiler content={readme} />
        </div>
      )}
    </Section>
  )
}
