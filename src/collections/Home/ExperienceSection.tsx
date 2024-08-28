import type { Experience } from '@/drizzle/schema/experience/experience'

import { ExperienceCard, MobileExperienceCard } from '@/components/cards/ExperienceCard'
import { Section } from '@/components/layout/Section'
import { Heading } from '@/components/typography/Heading'
import { Paragraph } from '@/components/typography/Paragraph'

import { cn } from '@/utils/styles'

export interface ExperienceSectionProps {
  experiences: Array<Experience>
}

export const ExperienceSection = ({ experiences }: ExperienceSectionProps) => {
  return (
    <Section>
      <Heading tag="h3" terminal>
        Experience
      </Heading>

      <Paragraph className={cn('pb-2 text-center text-nowrap hidden sm:block')}>
        Present
      </Paragraph>

      <div className={cn('relative flex flex-col w-full h-full gap-8 sm:gap-0')}>
        <div
          className={cn(
            'absolute w-1 h-full',
            'bg-neutral-400 dark:bg-neutral-700 rounded-full',
            'sm:left-1/2 sm:transform sm:-translate-x-1/2',
          )}
        ></div>

        {experiences.map((experience, index) => (
          <>
            <ExperienceCard key={experience.id} index={index} {...experience} />
            <MobileExperienceCard key={experience.id} index={index} {...experience} />
          </>
        ))}
      </div>
    </Section>
  )
}
