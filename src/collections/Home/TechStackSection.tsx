'use client'

import type { Masonry as _Masonry, RenderComponentProps } from 'masonic'

import type { Domain } from '@/drizzle/schema/domain/domains'
import type { Technology } from '@/drizzle/schema/technology/technologies'

import dynamic from 'next/dynamic'
import { useTheme } from 'next-themes'
import { useEffect, useMemo, useState } from 'react'

import { TechnologyCard } from '@/components/cards/TechnologyCard'
import { InfoBadge } from '@/components/common/InfoBadge'
import { Toggle } from '@/components/inputs/Toggle'
import { Section } from '@/components/layout/Section'
import { Heading } from '@/components/typography/Heading'

import { TechnologiesIcons } from '@/constants'
import { cn, universalColorOpacity } from '@/utils/styles'

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

  if (technologies.length === 0) return null

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
  const [showOffMode, setShowOffMode] = useState(false)

  useEffect(() => {
    setShowOffMode(JSON.parse(localStorage.getItem('show-off-mode') || 'false'))
  }, [])

  const changeHandler = (checked: boolean) => {
    localStorage.setItem('show-off-mode', String(checked))
    setShowOffMode(checked)
  }

  const filteredDomains = useMemo(
    () =>
      showOffMode
        ? domains
        : domains.map(domain => ({
            ...domain,
            technologies: domain.technologies.filter(technology => !technology.showOff),
          })),
    [domains, showOffMode],
  )

  return (
    <Section>
      <div className={cn('flex flex-col')}>
        <Heading tag="h3" terminal>
          Tech Stack
        </Heading>
        <div className={cn('flex gap-2 items-center')}>
          <InfoBadge>
            <span>
              Show off mode enables rendering of all the technologies that are either too minor
              but occasionally required in job postings, <strong>or</strong> not my specialty,
              yet I still use them fairly often.
            </span>
          </InfoBadge>

          <Heading tag="h6" className={cn('opacity-60 font-normal')}>
            Show off mode
          </Heading>
          <Toggle checked={showOffMode} size={9} onChange={changeHandler} />
        </div>
      </div>

      <div className={cn('mt-2 mb-1')}>
        <Masonry
          key={String(showOffMode)}
          items={filteredDomains}
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
