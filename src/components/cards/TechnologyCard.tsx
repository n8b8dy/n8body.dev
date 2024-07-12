import type { ReactNode } from 'react'
import { cn } from '@/utils/styles'

export interface TechnologyCardProps {
  title: string
  icon: ReactNode
}

export const TechnologyCard = ({ icon, title }: TechnologyCardProps) => {
  return (
    <div
      className={cn(
        'min-w-24 h-24 md:min-w-28 md:h-28 px-2 pt-4 pb-1.5 md:px-3 md:pb-3',
        'flex flex-col items-center justify-center gap-1',
        'text-sm md:text-lg bg-opacity-50 bg-neutral-200 dark:bg-neutral-900 rounded',
      )}
    >
      {icon}
      <span>{title}</span>
    </div>
  )
}
