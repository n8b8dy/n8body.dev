import { db } from '@/drizzle/db'
import { technologies } from '@/drizzle/schema/technology/technologies'

export const TECHNOLOGIES = [
  ['JAVASCRIPT', 'JavaScript', '#F7DF1E'],
  ['TYPESCRIPT', 'TypeScript', '#3178C6'],
  ['GOLANG', 'Go', '#00ADD8'],
  ['NODEJS', 'Node.js', '#8CC84B'],
  ['DENO', 'Deno'],

  ['REACT', 'React', '#61DAFB'],
  ['ANGULAR', 'Angular', '#DD0031'],

  ['NEXTJS', 'Next.js'],

  ['TAILWIND', 'Tailwind CSS', '#38B2AC'],

  ['POSTGRES', 'PostgreSQL', '#336791'],
  ['PRISMA', 'Prisma'],
  ['DRIZZLE', 'Drizzle'],

  ['EXPO', 'Expo'],
  ['REACT_NATIVE', 'React Native', '#61DAFB'],
];

(async function seed() {
  console.log('Seeding Database with technologies...')

  try {
    for (const technology of TECHNOLOGIES) {
      await db.insert(technologies)
        .values({
          slug: technology[0],
          name: technology[1],
          color: technology[2] || null,
        })
        .onConflictDoUpdate({
          target: technologies.slug,
          set: { name: technology[1], color: technology[2] },
        })

    }

    console.log('Database seeding with technologies complete!')
  } catch (error) {
    console.error('Error during seeding with technologies:', error)
  }
})()