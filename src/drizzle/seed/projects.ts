import { eq, inArray } from 'drizzle-orm'

import { db } from '@/drizzle/db'
import { projects } from '@/drizzle/schema/project/projects'
import { projectsToTags } from '@/drizzle/schema/project/projectsToTags'
import { projectsToTechnologies } from '@/drizzle/schema/project/projectsToTechnologies'
import { tags } from '@/drizzle/schema/tag/tags'
import { technologies } from '@/drizzle/schema/technology/technologies'

;(async function seed() {
  console.log('Seeding Database with projects...')

  try {
    const [{ projectId }] = await db
      .insert(projects)
      .values({
        slug: 'n8body-dev',
        title: 'n8body.dev',
        link: 'https://n8body.dev/',
        repository: 'https://github.com/n8b8dy/n8body.dev-next-fullstack',
      })
      .onConflictDoUpdate({
        target: projects.slug,
        set: {
          title: 'n8body.dev',
          link: 'https://n8body.dev/',
          repository: 'https://github.com/n8b8dy/n8body.dev-next-fullstack',
        },
      })
      .returning({ projectId: projects.id })

    const projectTechs = await db.query.technologies.findMany({
      where: inArray(technologies.slug, [
        'TYPESCRIPT',
        'REACT',
        'NEXTJS',
        'POSTGRES',
        'DRIZZLE',
      ]),
      columns: { id: true },
    })
    await db
      .insert(projectsToTechnologies)
      .values(projectTechs.map(({ id: technologyId }) => ({ projectId, technologyId })))

    const projectTags = await db
      .select({ id: tags.id })
      .from(tags)
      .where(eq(tags.slug, 'FULLSTACK'))
    await db
      .insert(projectsToTags)
      .values(projectTags.map(({ id: tagId }) => ({ projectId, tagId })))

    console.log('Database seeding with projects complete!')
  } catch (error) {
    console.error('Error during seeding with projects:', error)
  }
})()
