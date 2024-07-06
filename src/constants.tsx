import type { ReactNode } from 'react'

import {
  DockerSVG,
  ExpoSVG,
  GopherSVG,
  JavascriptSVG, LinuxSVG,
  NodeSVG,
  PostgresSVG,
  PrismaSVG,
  ReactSVG,
  TailwindSVG,
  TypescriptSVG,
  VueSVG,
} from '@/components/lib/svg'
import { cn } from '@/utils/styles'

export const TechnologiesIcons: Record<string, ReactNode> = {
  JAVASCRIPT: <JavascriptSVG/>,
  TYPESCRIPT: <TypescriptSVG/>,

  GOLANG: <GopherSVG/>,
  NODEJS: <NodeSVG/>,

  REACT: <ReactSVG/>,
  VUEJS: <VueSVG/>,

  TAILWIND: <TailwindSVG/>,

  POSTGRES: <PostgresSVG/>,
  PRISMA: <PrismaSVG/>,

  REACT_NATIVE: <ReactSVG/>,
  EXPO: <ExpoSVG className={cn('transform scale-[1.1]')}/>,

  DOCKER: <DockerSVG className={cn('transform scale-[1.5]')}/>,
  LINUX:  <LinuxSVG className={cn('transform scale-[1.1]')}/>
} as const
