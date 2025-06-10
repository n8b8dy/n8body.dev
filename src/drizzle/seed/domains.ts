import { db } from '@/drizzle/db'
import { technologies } from '@/drizzle/schema/technology/technologies'
import { domains } from '@/drizzle/schema/domain/domains'

export const DOMAINS = [
  {
    name: 'Programming Languages',
    slug: 'PROGRAMMING_LANGUAGES',
    backgroundColor: '#0F1B2B',
    borderColor: '#1C3A5F',
    lightBackgroundColor: '#F4F8FC',
    lightBorderColor: '#C3D9F2',
    featured: true,
    technologies: [
      { slug: 'JAVASCRIPT', name: 'JavaScript', color: '#F7DF1E', featured: true },
      { slug: 'TYPESCRIPT', name: 'TypeScript', color: '#3178C6', featured: true },
      { slug: 'GOLANG', name: 'Go', color: '#00ADD8', featured: true },
    ],
  },
  {
    name: 'Frontend',
    slug: 'FRONTEND',
    backgroundColor: '#1E1B29',
    borderColor: '#5A4E8C',
    lightBackgroundColor: '#F7F5FB',
    lightBorderColor: '#D7CFF0',
    featured: true,
    technologies: [
      { slug: 'REACT', name: 'React', color: '#61DAFB', featured: true },
      { slug: 'NEXTJS', name: 'Next.js', color: null, featured: true },
      { slug: 'ANGULAR', name: 'Angular', color: '#DD0031', featured: false },
      { slug: 'REMIX', name: 'Remix', color: null, featured: true },
      { slug: 'REACT_ROUTER', name: 'React Router', color: null, featured: true },
      { slug: 'TANSTACK', name: 'TanStack', color: null, featured: true },
      { slug: 'REDUX', name: 'Redux', color: null, featured: true },
      { slug: 'ZUSTAND', name: 'Zustand', color: null, featured: true },
      { slug: 'TAILWIND', name: 'Tailwind CSS', color: '#38B2AC', featured: true },
      { slug: 'SHADCN_UI', name: 'shadcn/ui', color: null, featured: true },
      { slug: 'STYLED_COMPONENTS', name: 'Styled Components', color: null, featured: true },
      { slug: 'FRAMER_MOTION', name: 'Framer Motion', color: null, featured: true },
      { slug: 'GSAP', name: 'GSAP', color: null, featured: true },
      { slug: 'THREE_JS', name: 'Three.js', color: null, featured: false },
      { slug: 'VITE', name: 'Vite', color: null, featured: true },
    ],
  },
  {
    name: 'Mobile',
    slug: 'MOBILE',
    backgroundColor: '#1B2626',
    borderColor: '#3E5C5C',
    lightBackgroundColor: '#F5FAFA',
    lightBorderColor: '#C6E1E1',
    featured: true,
    technologies: [
      { slug: 'REACT_NATIVE', name: 'React Native', color: '#61DAFB', featured: true },
      { slug: 'EXPO', name: 'Expo', color: null, featured: true },
    ],
  },
  {
    name: 'Backend',
    slug: 'BACKEND',
    backgroundColor: '#2A1F29',
    borderColor: '#6C3B56',
    lightBackgroundColor: '#FAF5F8',
    lightBorderColor: '#E2CADC',
    featured: true,
    technologies: [
      { slug: 'NODEJS', name: 'Node.js', color: '#8CC84B', featured: true },
      { slug: 'EXPRESS', name: 'Express', color: null, featured: true },
      { slug: 'NESTJS', name: 'NestJS', color: '#E0234E', featured: true },
      { slug: 'DENO', name: 'Deno', color: null, featured: true },
      { slug: 'GIN', name: 'Gin', color: null, featured: true },
      { slug: 'FIBER', name: 'Fiber', color: null, featured: true },
      { slug: 'GRAPHQL', name: 'GraphQL', color: null, featured: true },
      { slug: 'GRPC', name: 'gRPC', color: null, featured: true },
      { slug: 'TRPC', name: 'tRPC', color: null, featured: true },
      { slug: 'KAFKA', name: 'Kafka', color: null, featured: true },
      { slug: 'RABBITMQ', name: 'RabbitMQ', color: null, featured: true },
    ],
  },
  {
    name: 'ORM & Databases',
    slug: 'ORM_DATABASES',
    backgroundColor: '#1F2A24',
    borderColor: '#4C6B54',
    lightBackgroundColor: '#F4FAF7',
    lightBorderColor: '#C6E0D5',
    featured: true,
    technologies: [
      { slug: 'SQL', name: 'SQL', color: null, featured: true },
      { slug: 'POSTGRES', name: 'PostgreSQL', color: '#336791', featured: true },
      { slug: 'MONGODB', name: 'MongoDB', color: null, featured: true },
      { slug: 'PRISMA', name: 'Prisma', color: '#0C344B', featured: true },
      { slug: 'DRIZZLE', name: 'Drizzle ORM', color: '#00897B', featured: true },
      { slug: 'KYSELY', name: 'Kysely', color: null, featured: true },
      { slug: 'GORM', name: 'GORM', color: null, featured: true },
    ],
  },
  {
    name: 'DevOps',
    slug: 'DEVOPS',
    backgroundColor: '#142B2C',
    borderColor: '#3A6466',
    lightBackgroundColor: '#F2FAFA',
    lightBorderColor: '#BFE3E4',
    featured: true,
    technologies: [
      { slug: 'DOCKER', name: 'Docker', color: '#2496ED', featured: true },
      { slug: 'PODMAN', name: 'Podman', color: null, featured: true },
      { slug: 'KUBERNETES', name: 'Kubernetes', color: null, featured: true },
      { slug: 'NGINX', name: 'Nginx', color: null, featured: true },
      { slug: 'HAPROXY', name: 'HAProxy', color: null, featured: true },
      { slug: 'JENKINS', name: 'Jenkins', color: null, featured: true },
    ],
  },
  {
    name: 'Operating Systems',
    slug: 'OPERATING_SYSTEMS',
    backgroundColor: '#2D2B1F',
    borderColor: '#6C6A43',
    lightBackgroundColor: '#FAF9F3',
    lightBorderColor: '#E1DFC3',
    featured: true,
    technologies: [
      { slug: 'ARCH', name: 'Arch Linux', color: '#1793D1', featured: true },
      { slug: 'FEDORA', name: 'Fedora Linux', color: null, featured: true },
    ],
  },
  {
    name: 'Tools',
    slug: 'TOOLS',
    backgroundColor: '#2B1F1F',
    borderColor: '#6D4545',
    lightBackgroundColor: '#FBF6F6',
    lightBorderColor: '#E4CFCF',
    featured: true,
    technologies: [
      { slug: 'GIT', name: 'Git', color: '#F03C2E', featured: true },
      { slug: 'INTELLIJ_IDEA', name: 'IntelliJ IDEA', color: null, featured: true },
    ],
  },
]
;(async function seed() {
  console.info('Seeding Database with domains...')

  try {
    for (let i = 0; i < DOMAINS.length; i++) {
      const domain = DOMAINS[i]

      const [createdDomain] = await db
        .insert(domains)
        .values({ ...domain, rank: i + 1 })
        .onConflictDoUpdate({
          target: domains.slug,
          set: {
            name: domain.name,
            backgroundColor: domain.backgroundColor,
            borderColor: domain.borderColor,
            lightBackgroundColor: domain.lightBackgroundColor,
            lightBorderColor: domain.lightBorderColor,
            featured: domain.featured,
            rank: i + 1,
          },
        })
        .returning()

      console.info('Created domain: ', domain)

      for (let j = 0; j < domain.technologies.length; j++) {
        const technology = domain.technologies[j]

        const [createdTechnology] = await db
          .insert(technologies)
          .values({ ...technology, domainId: createdDomain.id, rank: j + 1 })
          .onConflictDoUpdate({
            target: technologies.slug,
            set: {
              name: technology.name,
              color: technology.color,
              featured: technology.featured,
              domainId: createdDomain.id,
              rank: j + 1,
            },
          })
          .returning()

        console.info('Created technology: ', createdTechnology)
      }
    }

    console.info('Database seeding with domains complete!')
  } catch (error) {
    console.error('Error during seeding with technologies:', error)
  }
})()
