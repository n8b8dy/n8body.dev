import { db } from '@/drizzle/db'
import { technologies } from '@/drizzle/schema/technology/technologies'

export const TECHNOLOGIES = [
  { slug: 'JAVASCRIPT', name: 'JavaScript', color: '#F7DF1E', featured: true },
  { slug: 'TYPESCRIPT', name: 'TypeScript', color: '#3178C6', featured: true },
  { slug: 'GOLANG', name: 'Go', color: '#00ADD8', featured: true },
  { slug: 'NODEJS', name: 'Node.js', color: '#8CC84B', featured: true },
  { slug: 'DENO', name: 'Deno', color: null, featured: true },

  { slug: 'REACT', name: 'React', color: '#61DAFB', featured: true },
  { slug: 'ANGULAR', name: 'Angular', color: '#DD0031', featured: false },

  { slug: 'NEXTJS', name: 'Next.js', color: null, featured: true },

  { slug: 'NESTJS', name: 'NestJS', color: '#E0234E', featured: false },
  { slug: 'EXPRESS', name: 'Express', color: null, featured: true },

  { slug: 'TAILWIND', name: 'Tailwind CSS', color: '#38B2AC', featured: false },

  { slug: 'POSTGRES', name: 'PostgreSQL', color: '#336791', featured: true },
  { slug: 'PRISMA', name: 'Prisma', color: '#0C344B', featured: true },
  { slug: 'DRIZZLE', name: 'Drizzle', color: '#00897B', featured: true },

  { slug: 'EXPO', name: 'Expo', color: null, featured: true },
  { slug: 'REACT_NATIVE', name: 'React Native', color: '#61DAFB', featured: true },

  { slug: 'DOCKER', name: 'Docker', color: '#2496ED', featured: true },
  { slug: 'PODMAN', name: 'Podman', color: null, featured: false },

  { slug: 'GIT', name: 'Git', color: '#F03C2E', featured: true },

  { slug: 'LINUX', name: 'Linux', color: '#FCC624', featured: true },
  { slug: 'ARCH', name: 'Arch', color: '#1793D1', featured: true },
]
;(async function seed() {
  console.log('Seeding Database with technologies...')

  try {
    for (const technology of TECHNOLOGIES) {
      await db
        .insert(technologies)
        .values(technology)
        .onConflictDoUpdate({
          target: technologies.slug,
          set: {
            name: technology.name,
            color: technology.color,
            featured: technology.featured,
          },
        })
    }

    console.log('Database seeding with technologies complete!')
  } catch (error) {
    console.error('Error during seeding with technologies:', error)
  }
})()
