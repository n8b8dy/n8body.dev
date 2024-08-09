import { Section } from '@/components/layout/Section'
import { Heading } from '@/components/typography/Heading'
import { Paragraph } from '@/components/typography/Paragraph'

import { cn } from '@/utils/styles'

export interface ExperienceSectionProps {}

export const ExperienceSection = ({}: ExperienceSectionProps) => {
  return (
    <Section>
      <Heading tag="h3" terminal>
        Experience
      </Heading>

      <Paragraph className={cn('pb-2 text-center text-nowrap')}>Present</Paragraph>

      <div className={cn('relative flex flex-col w-full h-full')}>
        <div
          className={cn(
            'absolute w-1 h-full left-1/2 transform -translate-x-1/2',
            'bg-neutral-400 dark:bg-neutral-700 rounded-full',
          )}
        ></div>

        {new Array(6).fill({}).map((_, index) => (
          <div
            key={index}
            className={cn(
              'relative mt-8 px-5 py-3 w-[calc(50%-10*0.25rem)] flex flex-col gap-0.5',
              'bg-neutral-200 dark:bg-neutral-900 bg-opacity-40 dark:bg-opacity-70 rounded',
              index % 2 === 0 ? 'self-start' : 'self-end',
              index === 5 && 'mb-8',
            )}
          >
            <div
              className={cn(
                'absolute top-6 w-6 h-6',
                'bg-neutral-400 dark:bg-neutral-700 rounded-full transform',
                index % 2 === 0
                  ? 'right-0 translate-x-[calc(50%+10*0.25rem)]'
                  : 'left-0 -translate-x-[calc(50%+10*0.25rem)]',
              )}
            >
              <p
                className={cn(
                  'absolute px-4 transform text-nowrap',
                  index % 2 === 0 ? 'right-0 translate-x-full' : 'left-0-0 -translate-x-full',
                )}
              >
                June 2024
              </p>
            </div>

            <div
              className={cn(
                'absolute top-4 transform ',
                'border-opacity-40 dark:border-opacity-70',
                'border-solid border-y-transparent border-y-[1.25rem]',
                index % 2 === 0
                  ? 'border-l-neutral-200 dark:border-l-neutral-900'
                  : 'border-r-neutral-200 dark:border-r-neutral-900',
                index % 2 === 0
                  ? 'right-0 translate-x-full border-l-[1rem] border-r-0'
                  : 'left-0 -translate-x-full border-r-[1rem] border-l-0',
              )}
            ></div>

            <Heading tag="h5">Front-end Developer</Heading>
            <Heading tag="h6" className={cn('opacity-60')}>manga.ovh</Heading>
            <p className={cn('mb-1 flex-1 text-lg line-clamp-3 opacity-80')}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fermentum porta
              magna at tristique. Pellentesque felis nulla, euismod at blandit a, rhoncus mattis
              mi. Donec vestibulum sagittis purus, vehicula auctor mauris ultrices et. Quisque
              faucibus blandit felis, sit amet euismod turpis. Integer in tellus nec odio
              ultricies pellentesque.
            </p>
          </div>
        ))}
      </div>
    </Section>
  )
}
