'use client'

import type { RenderComponentProps } from 'masonic'
import type { Technology } from '@/drizzle/schema/technology/technologies'
import type { Domain } from '@/drizzle/schema/domain/domains'

import { Masonry } from 'masonic'

import { Section } from '@/components/layout/Section'
import { Heading } from '@/components/typography/Heading'
import { TechnologyCard } from '@/components/cards/TechnologyCard'
import { cn, universalColorOpacity } from '@/utils/styles'

import { TechnologiesIcons } from '@/constants'

export interface TechStackSectionProps {
  domains: Array<Domain & { technologies: Array<Technology> }>
}

const MasonryDomain = ({
  data: { name, backgroundColor, borderColor, technologies },
}: RenderComponentProps<TechStackSectionProps['domains'][number]>) => {
  return (
    <fieldset
      style={{
        borderColor: borderColor ? universalColorOpacity(borderColor, 0.2) : undefined,
        backgroundColor: backgroundColor
          ? universalColorOpacity(backgroundColor, 0.2)
          : undefined,
      }}
      className={cn(
        'px-4 pt-2 pb-4',
        'flex justify-evenly flex-wrap gap-4',
        'backdrop-blur-lg border-2 rounded',
      )}
    >
      <legend className={cn('px-2')}>
        <Heading tag="h5">{name}</Heading>
      </legend>

      {technologies.map(technology => (
        <TechnologyCard
          key={technology.slug}
          title={technology.name}
          icon={TechnologiesIcons[technology.slug]}
        />
      ))}
    </fieldset>
  )
}

export const TechStackSection = ({ domains }: TechStackSectionProps) => {
  return (
    <Section>
      <Heading tag="h3" terminal>
        Tech Stack
      </Heading>
      <div className={cn('mt-2 mb-1')}>
        <Masonry
          items={domains}
          render={MasonryDomain}
          maxColumnCount={3}
          columnWidth={300}
          columnGutter={16}
          rowGutter={4}
        />
      </div>
    </Section>
  )
}
