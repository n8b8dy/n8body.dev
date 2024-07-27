import type { ReactNode } from 'react'

import { PrismaSVG } from '@/components/lib/svg/Prisma'
import { JavascriptSVG } from '@/components/lib/svg/Javascript'
import { TypescriptSVG } from '@/components/lib/svg/Typescript'
import { GopherSVG } from '@/components/lib/svg/Gopher'
import { NodeSVG } from '@/components/lib/svg/Node'
import { DenoSVG } from '@/components/lib/svg/Deno'
import { ReactSVG } from '@/components/lib/svg/React'
import { VueSVG } from '@/components/lib/svg/Vue'
import { NextSVG } from '@/components/lib/svg/Next'
import { ExpressSVG } from '@/components/lib/svg/Express'
import { TailwindSVG } from '@/components/lib/svg/Tailwind'
import { PostgresSVG } from '@/components/lib/svg/Postgres'
import { DrizzleSVG } from '@/components/lib/svg/Drizzle'
import { ExpoSVG } from '@/components/lib/svg/Expo'
import { DockerSVG } from '@/components/lib/svg/Docker'
import { GitSVG } from '@/components/lib/svg/Git'
import { ArchSVG } from '@/components/lib/svg/Arch'
import { TuxSVG } from '@/components/lib/svg/Tux'

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

  LINUX: <TuxSVG className={cn('transform scale-[1.1]')} />,
  ARCH: <ArchSVG />,
} as const
