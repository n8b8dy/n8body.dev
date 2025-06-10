import type { ComponentPropsWithoutRef } from 'react'

export interface SVGProps extends Omit<ComponentPropsWithoutRef<'svg'>, 'viewBox'> {}
