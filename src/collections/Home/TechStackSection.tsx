import type { ReactNode } from 'react'
import type { Technology } from '@/drizzle/schema/technology/technologies'

import { Section } from '@/components/layout/Section'
import { Heading } from '@/components/typography/Heading'
import { TechnologyCard } from '@/components/cards/TechnologyCard'
import { cn } from '@/utils/styles'

import { TechnologiesIcons } from '@/constants'

export interface TechStackSectionProps {
  technologies: Array<Technology>
}

export const TechStackSection = ({ technologies }: TechStackSectionProps) => {
  return (
    <Section>
      <Heading tag="h3" terminal>
        Tech Stack
      </Heading>
      <div className={cn('mt-2 mb-1 flex justify-center sm:justify-start flex-wrap gap-4')}>
        {technologies.map((technology) => <TechnologyCard
          key={technology.slug}
          title={technology.name}
          icon={TechnologiesIcons[technology.slug]}
        />)}
      </div>
    </Section>
  )
}

