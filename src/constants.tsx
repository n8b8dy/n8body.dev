import type { ReactNode } from 'react'

import {
  ArchSVG,
  DenoSVG,
  DockerSVG,
  DrizzleSVG,
  ExpoSVG,
  ExpressSVG,
  GitSVG,
  GopherSVG,
  JavascriptSVG,
  LinuxSVG,
  NextSVG,
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
  JAVASCRIPT: <JavascriptSVG />,
  TYPESCRIPT: <TypescriptSVG />,
  GOLANG: <GopherSVG />,
  NODEJS: <NodeSVG />,
  DENO: <DenoSVG />,

  REACT: <ReactSVG />,
  ANGULAR: null,
  VUEJS: <VueSVG />,

  NEXTJS: <NextSVG />,

  EXPRESS: <ExpressSVG />,

  TAILWIND: <TailwindSVG />,

  POSTGRES: <PostgresSVG />,
  PRISMA: <PrismaSVG />,
  DRIZZLE: <DrizzleSVG />,

  EXPO: <ExpoSVG className={cn('transform scale-[1.1]')} />,
  REACT_NATIVE: <ReactSVG />,

  DOCKER: <DockerSVG className={cn('transform scale-[1.5]')} />,

  GIT: <GitSVG />,

  LINUX: <LinuxSVG className={cn('transform scale-[1.1]')} />,
  ARCH: <ArchSVG />,
} as const
