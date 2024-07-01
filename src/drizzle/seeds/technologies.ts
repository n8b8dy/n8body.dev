import { db } from '@/drizzle/db'
import { technologies } from '@/drizzle/schema/technology/technologies'

const TECHNOLOGIES = [
  ['JAVASCRIPT', 'JavaScript'],
  ['TYPESCRIPT', 'TypeScript'],
  ['GOLANG', 'Go'],
  ['NODEJS', 'Node.js'],
  ['DENO', 'Deno'],

  ['REACT', 'React'],
  ['ANGULAR', 'Angular'],

  ['TAILWIND', 'Tailwind'],
  ['POSTGRES', 'PostgreSQL'],
  ['PRISMA', 'Prisma'],
  ['DRIZZLE', 'Drizzle'],

  ['EXPO', 'Expo'],
  ['REACT_NATIVE', 'React Native'],
]

async function seed() {
  console.log('Seeding Database with technologies...')

  try {
    for (const technology of TECHNOLOGIES) {
      await db.insert(technologies)
        .values({
          slug: technology[0],
          name: technology[1],
        })
        .onConflictDoNothing({ target: [technologies.slug, technologies.name] })
    }

    console.log('Database seeding complete!')
  } catch (error) {
    console.error('Error during seeding:', error)
  }
}

seed()