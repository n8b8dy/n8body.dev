import { Section } from '@/components/layout/Section'
import { Heading } from '@/components/typography/Heading'
import { TechnologyHeading } from '@/collections/Home/TechnologyHeading'

import { cn } from '@/utils/styles'
import { ProjectCard } from '@/components/project/ProjectCard'

export interface ExperienceSectionProps {}

export const ExperienceSection = ({}: ExperienceSectionProps) => {
  return (
    <Section>
      <Heading tag="h3" terminal>
        Experience
      </Heading>
      <div className={cn('mt-1 grid md:grid-cols-2 gap-2')}>
      </div>
    </Section>
  )
}
