import type { ExperienceInsert } from '@/drizzle/schema/experience/experience'

import { db } from '@/drizzle/db'
import { experiences } from '@/drizzle/schema/experience/experience'

const EXPERIENCES: Array<ExperienceInsert> = [
  {
    companyName: 'Alpha Bite',
    positionName: 'Full-stack & Mobile Developer',
    startDate: '2024-06-01',
    description: `Software and web development agency specializing in custom solutions, addressing complex business needs and delivering practical, high-quality digital products.`,
  },
  {
    companyName: '[Name withheld due to NDA]',
    positionName: 'Front-end Developer',
    startDate: '2021-10-01',
    description: `International digital media platform with over 2M monthly visits, specializing in entertainment content and serving audiences across multiple markets.`,
  },
]

;(async function seed() {
  console.log('Seeding Database with experiences...')

  try {
    await db.delete(experiences)

    for (const experience of EXPERIENCES) {
      await db.insert(experiences).values(experience)
    }

    console.log('Database seeding with experiences complete!')
  } catch (error) {
    console.error('Error during seeding experiences:', error)
  }
})()
