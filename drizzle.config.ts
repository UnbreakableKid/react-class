import { defineConfig } from 'drizzle-kit'

export default defineConfig({
    schema: "./packages/db/db.ts",
     driver: 'better-sqlite',
     dbCredentials: {
         url: './packages/db/test.db',
     },
   })
