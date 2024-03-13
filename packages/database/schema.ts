import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const dogs = sqliteTable("dogs", {
	id: integer("id").primaryKey(),
	name: text("name"),
	breed: text("breed"),
	age: integer("age"),
});
