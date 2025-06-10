'use client'

import type { RenderComponentProps } from 'masonic'
import type { Technology } from '@/drizzle/schema/technology/technologies'
import type { Domain } from '@/drizzle/schema/domain/domains'

import dynamic from 'next/dynamic'
import { useTheme } from 'next-themes'
import { Masonry as _Masonry } from 'masonic'

import { Section } from '@/components/layout/Section'
import { Heading } from '@/components/typography/Heading'
import { TechnologyCard } from '@/components/cards/TechnologyCard'
import { cn, universalColorOpacity } from '@/utils/styles'

import { TechnologiesIcons } from '@/constants'

export interface TechStackSectionProps {
  domains: Array<Domain & { technologies: Array<Technology> }>
}

const Masonry = dynamic(() => import('masonic').then(masonic => masonic.Masonry), {
  ssr: false,
}) as typeof _Masonry

const MasonryDomain = ({
  data: {
    name,
    backgroundColor,
    borderColor,
    lightBackgroundColor,
    lightBorderColor,
    technologies,
  },
}: RenderComponentProps<TechStackSectionProps['domains'][number]>) => {
  const { resolvedTheme } = useTheme()

  return (
    <fieldset
      style={{
        backgroundColor:
          resolvedTheme === 'dark'
            ? universalColorOpacity(backgroundColor || '', 0.2)
            : lightBackgroundColor || '',
        borderColor:
          resolvedTheme === 'dark'
            ? universalColorOpacity(borderColor || '', 0.2)
            : lightBorderColor || '',
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
