import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const dogs = sqliteTable("dogs", {
	id: integer("id").primaryKey(),
	name: text("name").notNull(),
	breed: text("breed").notNull(),
	age: integer("age").notNull(),
});
