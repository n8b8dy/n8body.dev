import type { Experience } from '@/drizzle/schema/experience/experience'

import { format } from 'date-fns'

import { Heading } from '@/components/typography/Heading'

import { cn } from '@/utils/styles'

export interface ExperienceCardProps extends Experience {
  index: number
}

export const ExperienceCard = ({
  index,
  startDate,
  positionName,
  companyName,
  description,
}: ExperienceCardProps) => {
  return (
    <div
      className={cn(
        'hidden',
        'relative mt-8 px-5 py-3 w-[calc(50%-10*0.25rem)] sm:flex flex-col gap-0.5',
        'bg-neutral-200 dark:bg-neutral-900 bg-opacity-40 dark:bg-opacity-70 rounded',
        index % 2 === 0 ? 'self-start' : 'self-end',
      )}
    >
      <div
        className={cn(
          'absolute top-7 w-4 h-4',
          'bg-neutral-400 dark:bg-neutral-700 rounded-full transform',
          index % 2 === 0
            ? 'right-0 translate-x-[calc(50%+10*0.25rem)]'
            : 'left-0 -translate-x-[calc(50%+10*0.25rem)]',
        )}
      >
        <p
          className={cn(
            'absolute -top-1 px-4 transform text-nowrap',
            index % 2 === 0 ? 'right-0 translate-x-full' : 'left-0 -translate-x-full',
          )}
        >
          {format(startDate, 'MMM yyyy')}
        </p>
      </div>

      <div
        className={cn(
          'absolute top-4 transform',
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

      <Heading tag="h5" overrideTagVariant="h6">
        {positionName}
      </Heading>
      <Heading tag="h6" className={cn('opacity-60 font-normal text-base md:text-base')}>
        {companyName}
      </Heading>
      {description && (
        <p className={cn('mb-1 flex-1 opacity-80 line-clamp-3')}>{description}</p>
      )}
    </div>
  )
}

export const MobileExperienceCard = ({
  index,
  startDate,
  positionName,
  companyName,
  description,
}: ExperienceCardProps) => {
  return (
    <div className={cn('sm:hidden', 'ml-10')}>
      <p className={cn('text-nowrap opacity-60')}>{format(startDate, 'MMM yyyy')}</p>
      <div
        className={cn(
          'relative px-5 py-3 flex self-start flex-col gap-0.5',
          'bg-neutral-200 dark:bg-neutral-900 bg-opacity-40 dark:bg-opacity-70 rounded',
        )}
      >
        <div
          className={cn(
            'absolute top-7 w-4 h-4',
            'bg-neutral-400 dark:bg-neutral-700 rounded-full transform',
            'left-0 -translate-x-[calc(50%+9.5*0.25rem)]',
          )}
        />

        <div
          className={cn(
            'absolute top-4 transform',
            'border-opacity-40 dark:border-opacity-70',
            'border-solid border-y-transparent border-y-[1.25rem]',
            'border-r-neutral-200 dark:border-r-neutral-900',
            'left-0 -translate-x-full border-r-[1rem] border-l-0',
          )}
        ></div>

        <Heading tag="h5" overrideTagVariant="h6">
          {positionName}
        </Heading>
        <Heading tag="h6" className={cn('opacity-60 font-normal text-base md:text-base')}>
          {companyName}
        </Heading>
        {description && (
          <p className={cn('mb-1 flex-1 opacity-80 line-clamp-3')}>{description}</p>
        )}
      </div>
    </div>
  )
}
