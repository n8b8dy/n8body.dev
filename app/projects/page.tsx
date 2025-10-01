import type { Project } from '@/drizzle/schema/project/projects'
import type { Tag } from '@/drizzle/schema/tag/tags'
import type { Technology } from '@/drizzle/schema/technology/technologies'

import { and, desc, eq, getTableColumns, ilike, or, sql } from 'drizzle-orm'

import { SearchInput } from '@/collections/project/SearchInput'
import { Catalog } from '@/collections/Projects/Catalog'
import { Filters } from '@/collections/Projects/Filters'
import { Section } from '@/components/layout/Section'
import { Heading } from '@/components/typography/Heading'

import { db } from '@/drizzle/db'
import { projects } from '@/drizzle/schema/project/projects'
import { projectsToTags } from '@/drizzle/schema/project/projectsToTags'
import { projectsToTechnologies } from '@/drizzle/schema/project/projectsToTechnologies'
import { tags } from '@/drizzle/schema/tag/tags'
import { technologies } from '@/drizzle/schema/technology/technologies'

import { cn } from '@/utils/styles'

export interface ProjectsFilters {
  search?: string
  technology?: string[]
  tag?: string[]
}

// TODO: Fix this mess if possible
async function getData(filters: ProjectsFilters) {
  const projectsData = (await db
    .select({
      ...getTableColumns(projects),
      tags: sql`(SELECT COALESCE(JSON_AGG(t.*), '[]')
             FROM projects_to_tags pt
                    JOIN tags t ON t.id = pt.tag_id
             WHERE pt.project_id = projects.id)`,
      technologies: sql`(SELECT COALESCE(JSON_AGG(tech.*), '[]')
             FROM projects_to_technologies ptc
                    JOIN technologies tech ON tech.id = ptc.technology_id
             WHERE ptc.project_id = projects.id)`,
    })
    .from(projects)
    .where(
      and(
        filters.search
          ? or(
              ilike(projects.title, `%${filters.search}%`),
              ilike(projects.description, `%${filters.search}%`),
            )
          : undefined,
        filters.tag && filters.tag.length > 0
          ? sql`EXISTS
          (SELECT pt.project_id
           FROM projects_to_tags pt
                  JOIN tags t ON t.id = pt.tag_id
           WHERE pt.project_id = projects.id
             AND t.slug IN (${sql.join(filters.tag, sql`,`)})
           GROUP BY pt.project_id
           HAVING COUNT(DISTINCT t.slug) = ${filters.tag.length})`
          : undefined,
        filters.technology && filters.technology.length > 0
          ? sql`EXISTS
          (SELECT ptc.project_id
           FROM projects_to_technologies ptc
                  JOIN technologies tech ON tech.id = ptc.technology_id
           WHERE ptc.project_id = projects.id
             AND tech.slug IN (${sql.join(filters.technology, sql`,`)})
           GROUP BY ptc.project_id
           HAVING COUNT(DISTINCT tech.slug) = ${filters.technology.length})`
          : undefined,
      ),
    )
    .groupBy(projects.id)) as Array<
    Project & { tags: Array<Tag>; technologies: Array<Technology> }
  >

  return { projects: projectsData }
}

async function getFiltersData() {
  const [tagsData, technologiesData] = await Promise.all([
    db
      .select({
        ...getTableColumns(tags),
        projectCount: sql<number>`COUNT(${projectsToTags.projectId})`,
      })
      .from(tags)
      .leftJoin(projectsToTags, eq(tags.id, projectsToTags.tagId))
      .groupBy(tags.id)
      .orderBy(desc(sql`COUNT(${projectsToTags.projectId})`)),
    db
      .select({
        ...getTableColumns(technologies),
        projectCount: sql<number>`COUNT(${projectsToTechnologies.projectId})`,
      })
      .from(technologies)
      .leftJoin(
        projectsToTechnologies,
        eq(technologies.id, projectsToTechnologies.technologyId),
      )
      .where(eq(technologies.featured, true))
      .groupBy(technologies.id)
      .orderBy(desc(sql`COUNT(${projectsToTechnologies.projectId})`)),
  ])

  return { tags: tagsData, technologies: technologiesData }
}

function parseFilters(searchParams: {
  [key: string]: string | string[] | undefined
}): ProjectsFilters {
  const search = typeof searchParams.search === 'string' ? searchParams.search : undefined

  const tag =
    typeof searchParams.tag === 'string'
      ? searchParams.tag.split(',')
      : Array.isArray(searchParams.tag)
        ? searchParams.tag.flatMap(t => t.split(','))
        : undefined

  const technology =
    typeof searchParams.technology === 'string'
      ? searchParams.technology.split(',')
      : Array.isArray(searchParams.technology)
        ? searchParams.technology.flatMap(t => t.split(','))
        : undefined

  return { search, technology, tag }
}

export default async function Projects({
  searchParams,
}: {
  searchParams: Promise<{ [_: string]: string | string[] | undefined }>
}) {
  const { tags, technologies } = await getFiltersData()

  const filters = parseFilters(await searchParams)

  const { projects } = await getData(filters)

  return (
    <Section className={cn('flex-row gap-6')}>
      <div className={cn('flex flex-grow flex-col')}>
        <Heading
          tag="h2"
          className={cn('my-2 text-2xl sm:text-3xl md:text-3xl font-medium')}
          terminal
        >
          Projects
        </Heading>

        <SearchInput initialValue={filters.search} />

        <Catalog projects={projects} />
      </div>

      <Filters tags={tags} technologies={technologies} />
    </Section>
  )
}
