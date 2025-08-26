import type { ReactNode } from 'react'

import { PrismaSVG } from '@/components/lib/svg/Prisma'
import { JavascriptSVG } from '@/components/lib/svg/Javascript'
import { TypescriptSVG } from '@/components/lib/svg/Typescript'
import { GopherSVG } from '@/components/lib/svg/Gopher'
import { NodeSVG } from '@/components/lib/svg/Node'
import { DenoSVG } from '@/components/lib/svg/Deno'
import { ReactSVG } from '@/components/lib/svg/React'
import { NextSVG } from '@/components/lib/svg/Next'
import { ExpressSVG } from '@/components/lib/svg/Express'
import { TailwindSVG } from '@/components/lib/svg/Tailwind'
import { PostgresSVG } from '@/components/lib/svg/Postgres'
import { DrizzleSVG } from '@/components/lib/svg/Drizzle'
import { ExpoSVG } from '@/components/lib/svg/Expo'
import { DockerSVG } from '@/components/lib/svg/Docker'
import { GitSVG } from '@/components/lib/svg/Git'
import { ArchSVG } from '@/components/lib/svg/Arch'
import { FedoraSVG } from '@/components/lib/svg/Fedora'
import { IntellijIDEA } from '@/components/lib/svg/IntellijIDEA'
import { SqlSVG } from '@/components/lib/svg/Sql'
import { PodmanSVG } from '@/components/lib/svg/Podman'
import { MongoSVG } from '@/components/lib/svg/Mongo'
import { NestSVG } from '@/components/lib/svg/Nest'
import { JenkinsSVG } from '@/components/lib/svg/Jenkins'
import { ReduxSVG } from '@/components/lib/svg/Redux'
import { RabbitSVG } from '@/components/lib/svg/Rabbit'
import { KafkaSVG } from '@/components/lib/svg/Kafka'
import { GraphqlSVG } from '@/components/lib/svg/Graphql'
import { NginxSVG } from '@/components/lib/svg/Nginx'
import { HAProxySVG } from '@/components/lib/svg/HAProxy'
import { GormSVG } from '@/components/lib/svg/Gorm'
import { KyselySVG } from '@/components/lib/svg/Kysely'
import { GrpcSVG } from '@/components/lib/svg/Grpc'
import { GinSVG } from '@/components/lib/svg/Gin'
import { FiberSVG } from '@/components/lib/svg/Fiber'
import { ZustandSVG } from '@/components/lib/svg/Zustand'
import { GsapSVG } from '@/components/lib/svg/Gsap'
import { RemixSVG } from '@/components/lib/svg/Remix'
import { ReactRouterSVG } from '@/components/lib/svg/ReactRouter'
import { ShadcnSVG } from '@/components/lib/svg/Shadcn'
import { FramerMotionSVG } from '@/components/lib/svg/FramerMotion'
import { TanstackSVG } from '@/components/lib/svg/Tanstack'
import { StyledComponentsSVG } from '@/components/lib/svg/StyledComponents'

import { cn } from '@/utils/styles'
import { KubernetesSVG } from '@/components/lib/svg/Kubernetes'
import { ViteSVG } from '@/components/lib/svg/Vite'
import { TrpcSVG } from '@/components/lib/svg/Trpc'
import { Rest } from '@/components/lib/svg/Rest'

export const TechnologiesIcons: Record<string, ReactNode> = {
  // Programming Languages
  JAVASCRIPT: <JavascriptSVG />,
  TYPESCRIPT: <TypescriptSVG />,
  GOLANG: <GopherSVG />,
  SQL: <SqlSVG />,

  // Frontend
  REACT: <ReactSVG />,
  NEXTJS: <NextSVG />,
  REMIX: <RemixSVG className={cn('text-[#121212] dark:text-neutral-200', 'transform scale-150')}/>,
  TANSTACK: <TanstackSVG />,
  REACT_ROUTER: (
    <ReactRouterSVG
      className={cn('text-[#121212] dark:text-neutral-200', 'transform scale-75')}
    />
  ),
  REDUX: <ReduxSVG />,
  ZUSTAND: <ZustandSVG />,
  TAILWIND: <TailwindSVG />,
  STYLED_COMPONENTS: <StyledComponentsSVG />,
  SHADCN_UI: <ShadcnSVG className={cn('text-[#121212] dark:text-neutral-200')} />,
  GSAP: <GsapSVG />,
  FRAMER_MOTION: <FramerMotionSVG className={cn('transform scale-50')} />,
  VITE: <ViteSVG />,

  // Mobile
  REACT_NATIVE: <ReactSVG />,
  EXPO: <ExpoSVG className={cn('transform scale-110 ')} />,

  // Backend
  NODEJS: <NodeSVG />,
  DENO: <DenoSVG />,
  EXPRESS: <ExpressSVG />,
  NESTJS: <NestSVG />,
  FIBER: <FiberSVG className={cn('text-[#333] dark:text-neutral-200')} />,
  GIN: <GinSVG />,
  REST: <Rest />,
  GRAPHQL: <GraphqlSVG />,
  GRPC: <GrpcSVG />,
  TRPC: <TrpcSVG />,
  RABBITMQ: <RabbitSVG />,
  KAFKA: <KafkaSVG className={cn('text-[#231f20] dark:text-neutral-200')} />,

  // ORM & Databases
  POSTGRES: <PostgresSVG />,
  MONGODB: <MongoSVG />,
  PRISMA: <PrismaSVG />,
  DRIZZLE: <DrizzleSVG />,
  KYSELY: <KyselySVG className={cn('transform scale-95')} />,
  GORM: <GormSVG />,

  // DevOps
  DOCKER: <DockerSVG className={cn('transform scale-150')} />,
  PODMAN: <PodmanSVG />,
  KUBERNETES: <KubernetesSVG />,
  JENKINS: <JenkinsSVG />,
  NGINX: <NginxSVG />,
  HAPROXY: <HAProxySVG />,

  // Operating systems
  ARCH: <ArchSVG />,
  FEDORA: <FedoraSVG />,

  // Tools
  GIT: <GitSVG />,
  INTELLIJ_IDEA: <IntellijIDEA className={cn('transform scale-95')} />,

  // Design
  FIGMA: <></>
} as const
