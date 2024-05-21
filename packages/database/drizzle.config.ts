import { defineConfig } from "drizzle-kit";
export default defineConfig({
	schema: "./schema.ts",
	driver: "libsql",
	dialect: "sqlite",
	dbCredentials: {
		url: "file:../../packages/database/sqlite.db",
	},
	strict: true,
});
