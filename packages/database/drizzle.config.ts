import { defineConfig } from "drizzle-kit";
export default defineConfig({
	schema: "./schema.ts",
	driver: "libsql",
	dbCredentials: {
		url: "file:../../packages/database/sqlite.db",
	},
	strict: true,
});
