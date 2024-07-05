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

  ['NESTJS', 'NestJS', '#E0234E'],
  ['EXPRESS', 'Express'],

  ['TAILWIND', 'Tailwind CSS', '#38B2AC'],

  ['POSTGRES', 'PostgreSQL', '#336791'],
  ['PRISMA', 'Prisma', '#0C344B'],
  ['DRIZZLE', 'Drizzle', '#00897B'],

  ['EXPO', 'Expo'],
  ['REACT_NATIVE', 'React Native', '#61DAFB'],

  ['DOCKER', 'Docker', '#2496ED'],
  ['PODMAN', 'Podman'],

  ['LINUX', 'Linux', '#FCC624'],
  ['ARCH', 'Arch Linux', '#1793D1'],
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