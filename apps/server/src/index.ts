import express, { type Express, type Request, type Response } from "express";
import {
	deleteDogById,
	insertDog,
	selectAllDogs,
	selectDogById,
} from "@repo/database";

const app: Express = express();
const port = process.env.PORT || 8000;

app.use(express.json()); // Middleware to parse JSON bodies

//remove cors from local development
app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
	res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
	next();
});

app.get("/", (req: Request, res: Response) => {
	res.send("Welcome to the Dogs CRUD API");
});

app.get("/dogs", async (req, res) => {
	setTimeout(async () => {
		try {
			const dogs = await selectAllDogs();
			res.status(200).json(dogs);
		} catch (error) {
			res.status(500).json({ message: "Error fetching dogs", error });
		}
	}, 5000); // Delay of 5 seconds
});

// To get a single dog by ID
app.get("/dogs/:id", async (req, res) => {
	if (typeof req.params.id !== "string") {
		res.status(400).json({ message: "Invalid ID" });
		return;
	}

	try {
		const dog = await selectDogById(+req.params.id);

		if (dog) {
			res.status(200).json(dog);
		} else {
			res.status(404).json({ message: "Dog not found" });
		}
	} catch (error) {
		res.status(500).json({ message: "Error fetching the dog", error });
	}
});

app.delete("/dogs/:id", async (req, res) => {
	try {
		if (typeof req.params.id !== "string") {
			throw new Error("Invalid ID");
		}
		const deleteResult = await deleteDogById(+req.params.id);

		if (deleteResult.changes > 0) {
			res.status(200).json({ message: "Dog deleted successfully" });
		} else {
			res.status(404).json({ message: "Dog not found" });
		}
	} catch (error) {
		res.status(500).json({ message: "Error deleting the dog", error });
	}
});

app.post("/dogs", async (req, res) => {
	try {
		if (
			typeof req.body.name !== "string" ||
			typeof req.body.breed !== "string" ||
			typeof req.body.age !== "number"
		) {
			throw new Error("Invalid input");
		}
		const dog = await insertDog(req.body.name, req.body.breed, req.body.age);
		res.status(201).json(dog);
	} catch (error) {
		res.status(500).json({ message: "Error adding the dog", error });
	}
});

app.listen(port, () => {
	console.log(`Server is running at http://localhost:${port}`);
});
