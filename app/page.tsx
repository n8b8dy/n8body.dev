import { asc, desc, eq } from 'drizzle-orm'
import { Fragment } from 'react'

import { AboutMeSection } from '@/collections/Home/AboutMeSection'
import { ExperienceSection } from '@/collections/Home/ExperienceSection'
import { HeroSection } from '@/collections/Home/HeroSection'
import { ProjectsSection } from '@/collections/Home/ProjectsSection'
import { TechStackSection } from '@/collections/Home/TechStackSection'
import { Section } from '@/components/layout/Section'
import { Heading } from '@/components/typography/Heading'

import { db } from '@/drizzle/db'
import { domains } from '@/drizzle/schema/domain/domains'
import { experiences } from '@/drizzle/schema/experience/experience'
import { projects } from '@/drizzle/schema/project/projects'
import { technologies } from '@/drizzle/schema/technology/technologies'

import { cn } from '@/utils/styles'

async function getData() {
  const [domainsData, projectsData, experiencesData] = await Promise.all([
    db.query.domains.findMany({
      where: eq(domains.featured, true),
      orderBy: [asc(domains.rank)],
      with: {
        technologies: {
          where: eq(technologies.featured, true),
          orderBy: [asc(technologies.rank)],
        },
      },
    }),
    db.query.projects
      .findMany({
        limit: 5,
        orderBy: [desc(projects.updatedAt)],
        with: {
          projectsToTechnologies: { with: { technology: true } },
          projectsToTags: { with: { tag: true } },
        },
      })
      .then(projects =>
        projects.map(({ projectsToTechnologies, projectsToTags, ...project }) => ({
          ...project,
          tags: projectsToTags.map(pt => pt.tag),
          technologies: projectsToTechnologies.map(pt => pt.technology),
        })),
      ),
    db.query.experiences.findMany({ orderBy: [desc(experiences.startDate)] }),
  ])

  return { domains: domainsData, projects: projectsData, experiences: experiencesData }
}

export default async function Home() {
  const { domains, projects, experiences } = await getData()

  return (
    <Fragment>
      <div
        className={cn(
          'relative w-full min-h-[inherit] flex justify-center items-center',
          'before:absolute before:w-full before:h-1/6 before:left-0 before:top-0 before:bg-gradient-to-t before:from-transparent before:to-neutral-50 before:dark:to-neutral-950',
          'after:absolute after:w-full after:h-1/3 after:left-0 after:bottom-0 after:bg-gradient-to-b after:from-transparent after:to-neutral-50 after:dark:to-neutral-950',
          'bg-pattern-circuit',
        )}
      >
        <HeroSection />
      </div>

      <AboutMeSection />
      <TechStackSection domains={domains} />
      <ProjectsSection projects={projects} />
      <ExperienceSection experiences={experiences} />

      <Section>
        <div className={cn('py-16 flex flex-col items-center gap-2')}>
          <Heading tag="h5">Interested? Then...</Heading>
          <a
            href="/files/Ruslan_Shamsutdinov_CV.pdf"
            className={cn(
              'px-4 py-2 self-center text-white font-semibold rounded',
              'animate-background-shine bg-gradient-FVW',
            )}
            download
          >
            Download CV
          </a>
        </div>
      </Section>
    </Fragment>
  )
}
