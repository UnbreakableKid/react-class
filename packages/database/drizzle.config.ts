import { defineConfig } from "drizzle-kit";
export default defineConfig({
	schema: "./schema.ts",
	driver: "better-sqlite",
	dbCredentials: {
		url: "../../packages/database/sqlite.db",
	},
	strict: true,
});
