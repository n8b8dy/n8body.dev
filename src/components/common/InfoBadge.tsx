import type { PropsWithChildren } from 'react'

import { IoInformationCircleSharp } from 'react-icons/io5'
import { Tooltip } from 'react-tooltip'

import { cn } from '@/utils/styles'

export interface InfoBadgeProps extends PropsWithChildren {}

export const InfoBadge = ({ children }: InfoBadgeProps) => {
  return (
    <>
      <IoInformationCircleSharp
        data-tooltip-id="show-off-tooltip"
        className={cn('w-5 h-5 text-neutral-500')}
      />
      <Tooltip
        id="show-off-tooltip"
        place="bottom-start"
        className={cn('max-w-[min(95%,64rem)] z-10')}
      >
        {children}
      </Tooltip>
    </>
  )
}
