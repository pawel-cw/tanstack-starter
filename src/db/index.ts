import 'dotenv/config'

import { neon, neonConfig } from '@neondatabase/serverless'
import { drizzle } from 'drizzle-orm/neon-http'
import { WebSocket } from 'ws'
import * as schema from './schema.ts'

neonConfig.webSocketConstructor = WebSocket

const sql = neon(process.env.DATABASE_URL!)
export const db = drizzle<typeof schema>({ client: sql, schema: schema })
