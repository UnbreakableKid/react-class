import { defineConfig } from "drizzle-kit";
export default defineConfig({
  schema: "./schema.ts",
  dialect: "sqlite",
  dbCredentials: {
    url: "file:../../packages/database/sqlite.db",
  },
  strict: true,
});
