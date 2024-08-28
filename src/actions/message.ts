'use server'

import type { Message } from '@/drizzle/schema/message/messages'
import type { MessageSchema } from '@/schemas/message'

import type { ActionResponse } from '@/types/actions'

import { parse, ValiError } from 'valibot'

import { db } from '@/drizzle/db'
import { messages } from '@/drizzle/schema/message/messages'
import { messageSchema } from '@/schemas/message'

export async function createMessage(data: MessageSchema): Promise<ActionResponse<Message>> {
  try {
    const message = parse(messageSchema, data)

    return { data: (await db.insert(messages).values(message).returning())[0] }
  } catch (err) {
    console.error('Error creating message: ', err)

    if (err instanceof ValiError) return { error: err.message }
    return { error: `Something went wrong!` }
  }
}
