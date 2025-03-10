import { Section } from '@/components/layout/Section'
import { Heading } from '@/components/typography/Heading'
import { TechnologyHeading } from '@/collections/Home/TechnologyHeading'

import { cn } from '@/utils/styles'

export interface HeroSectionProps {}

export const HeroSection = ({}: HeroSectionProps) => {
  return (
    <Section className={cn('w-auto')}>
      <Heading tag="h1" className={cn('w-min min-[350px]:w-auto min-[500px]:w-min lg:w-auto')}>
        Ruslan
        <span className={cn('hidden min-[500px]:inline')}> Shamsutdinov</span>
        <span className={cn('inline min-[500px]:hidden')}> Sh.</span>
      </Heading>
      <div className={cn('pl-1')}>
        <Heading tag="h4">Front-end Developer</Heading>
        <TechnologyHeading />
      </div>
    </Section>
  )
}
