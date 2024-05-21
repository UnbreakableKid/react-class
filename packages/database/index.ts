import * as schema from "./schema";
import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";

import { eq } from "drizzle-orm";
import { dogs } from "./schema";

const sqlite = createClient({ url: "file:../../packages/database/sqlite.db" });

export const db = drizzle(sqlite, {
	schema: {
		dogs,
	},
});

export * from "drizzle-orm";

export * from "./schema";

export async function selectAllDogs() {
	return await db.select().from(dogs);
}

export async function selectDogById(id: number) {
	return await db.select().from(schema.dogs).where(eq(dogs.id, id));
}

export async function deleteDogById(id: number) {
	return await db.delete(dogs).where(eq(dogs.id, id));
}

export async function insertDog(name: string, breed: string, age: number) {
	return await db.insert(dogs).values({ name, breed, age });
}
