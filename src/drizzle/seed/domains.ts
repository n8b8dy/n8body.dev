import { db } from '@/drizzle/db'
import { technologies } from '@/drizzle/schema/technology/technologies'
import { domains } from '@/drizzle/schema/domain/domains'

export const DOMAINS = [
  {
    name: 'Programming Languages',
    slug: 'PROGRAMMING_LANGUAGES',
    backgroundColor: '#0F1B2B',
    borderColor: '#1C3A5F',
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
    ],
  },
  {
    name: 'Mobile',
    slug: 'MOBILE',
    backgroundColor: '#1B2626',
    borderColor: '#3E5C5C',
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
      { slug: 'KAFKA', name: 'Kafka', color: null, featured: true },
      { slug: 'RABBITMQ', name: 'RabbitMQ', color: null, featured: true },
    ],
  },
  {
    name: 'ORM & Databases',
    slug: 'ORM_DATABASES',
    backgroundColor: '#1F2A24',
    borderColor: '#4C6B54',
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
    featured: true,
    technologies: [
      { slug: 'DOCKER', name: 'Docker', color: '#2496ED', featured: true },
      { slug: 'PODMAN', name: 'Podman', color: null, featured: true },
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
    featured: true,
    technologies: [
      { slug: 'GIT', name: 'Git', color: '#F03C2E', featured: true },
      { slug: 'INTELLIJ_IDEA', name: 'IntelliJ IDEA', color: null, featured: true },
    ],
  },
]
;(async function seed() {
  console.log('Seeding Database with domains...')

  try {
    for (const domain of DOMAINS) {
      const [createdDomain] = await db
        .insert(domains)
        .values(domain)
        .onConflictDoUpdate({
          target: domains.slug,
          set: {
            name: domain.name,
            backgroundColor: domain.backgroundColor,
            borderColor: domain.borderColor,
            featured: domain.featured,
          },
        })
        .returning()

      for (const technology of domain.technologies) {
        await db
          .insert(technologies)
          .values(technology)
          .onConflictDoUpdate({
            target: technologies.slug,
            set: {
              name: technology.name,
              color: technology.color,
              featured: technology.featured,
              domainId: createdDomain.id,
            },
          })
      }
    }

    console.log('Database seeding with domains complete!')
  } catch (error) {
    console.error('Error during seeding with technologies:', error)
  }
})()
