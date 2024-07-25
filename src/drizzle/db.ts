import 'dotenv/config'
import { Pool } from 'pg'
import { drizzle } from 'drizzle-orm/node-postgres'

import * as usersSchema from '@/drizzle/schema/user/users'
import * as sessionsSchema from '@/drizzle/schema/session/sessions'

import * as messagesSchema from '@/drizzle/schema/message/messages'

import * as projectsSchema from '@/drizzle/schema/project/projects'
import * as projectsToTechnologiesSchema from '@/drizzle/schema/project/projectsToTechnologies'
import * as projectsToTagsSchema from '@/drizzle/schema/project/projectsToTags'

import * as domainsSchema from '@/drizzle/schema/domain/domains'
import * as technologiesSchema from '@/drizzle/schema/technology/technologies'
import * as tagsSchema from '@/drizzle/schema/tag/tags'

const pool = new Pool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  ssl: false,
})

export const db = drizzle(pool, {
  schema: {
    ...usersSchema,
    ...sessionsSchema,

    ...messagesSchema,

    ...projectsSchema,
    ...projectsToTechnologiesSchema,
    ...projectsToTagsSchema,

    ...domainsSchema,
    ...technologiesSchema,
    ...tagsSchema,
  },
})
