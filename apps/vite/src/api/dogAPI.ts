import ky from "ky";

export type Dog = {
	id: number;
	name: string;
	breed: string;
	age: number;
};

export async function getDogs() {
	// timeout to simulate slow network
	const res = ky.get("http://localhost:8000/dogs");

	if (Math.random() > 0.9) {
		throw new Error("Failed to fetch dogs");
	}
	return await res.json<Dog[]>();
}

export function addDog(name: string, breed: string, age: number) {
	return ky
		.post("http://localhost:8000/dogs", {
			json: { name, breed, age },
		})
		.json<Dog>();
}

export function deleteDog(id: number) {
	return ky.delete(`http://localhost:8000/dogs/${id}`).json();
}
