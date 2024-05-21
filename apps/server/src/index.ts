import { serve } from "@hono/node-server";
import { zValidator } from "@hono/zod-validator";
import {
	deleteDogById,
	insertDog,
	selectAllDogs,
	selectDogById,
} from "@repo/database";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { z } from "zod";

const app = new Hono();

app.use("/*", cors());

//cors middleware

const port = 8000;
console.log(`Server is running on port ${port}`);

app.get("/", ({ text }) => {
	return text("Welcome to the Dogs CRUD API");
});

app.get("/dogs", async ({ json }) => {
	await new Promise((resolve) => setTimeout(resolve, 5000));

	try {
		const dogs = await selectAllDogs();
		return json(dogs, 200);
	} catch (error) {
		return json({ message: "Error fetching dogs", error }, 500);
	}
});

// To get a single dog by ID
app.get(
	"/dogs/:id",
	zValidator("param", z.object({ id: z.string() })),
	async (c) => {
		const { id } = c.req.valid("param");

		try {
			const dog = await selectDogById(+id);

			if (dog) {
				return c.json(dog, 200);
			}

			return c.json({ message: "Dog not found" }, 404);
		} catch (error) {
			return c.json({ message: "Error fetching the dog", error }, 500);
		}
	},
);

app.delete(
	"/dogs/:id",
	zValidator("param", z.object({ id: z.string() })),
	async (c) => {
		const { id } = c.req.valid("param");
		try {
			const deleteResult = await deleteDogById(+id);

			if (deleteResult.rowsAffected > 0) {
				return c.json({ message: "Dog deleted successfully" }, 200);
			}
			return c.json({ message: "Dog not found" }, 404);
		} catch (error) {
			return c.json({ message: "Error deleting the dog", error }, 500);
		}
	},
);

const bodySchema = z.object({
	name: z.string(),
	breed: z.string(),
	age: z.number(),
});

app.post("/dogs", zValidator("json", bodySchema), async (c) => {
	const { req, json } = c;

	const { name, breed, age } = await req.valid("json");

	try {
		const dog = await insertDog(name, breed, age);
		return json(dog.rowsAffected, 201);
	} catch (error) {
		return json({ message: "Error adding the dog", error }, 500);
	}
});

serve({
	fetch: app.fetch,
	port,
});
