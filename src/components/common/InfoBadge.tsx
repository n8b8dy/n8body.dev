import type { PropsWithChildren } from 'react'
import { cn } from '@/utils/styles'
import { Tooltip } from 'react-tooltip'
import { IoInformationCircleSharp } from 'react-icons/io5'

export interface InfoBadgeProps extends PropsWithChildren {}

export const InfoBadge = ({ children }: InfoBadgeProps) => {
  return (
    <>
      <IoInformationCircleSharp
        data-tooltip-id="show-off-tooltip"
        className={cn('w-5 h-5 text-neutral-500')}
      />
      <Tooltip id="show-off-tooltip" place="bottom-start" className={cn('max-w-[95%] z-10')}>
        {children}
      </Tooltip>
    </>
  )
}
