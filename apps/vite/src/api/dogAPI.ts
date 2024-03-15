import ky from "ky";

export type Dog = {
	id: number;
	name: string;
	breed: string;
	age: number;
};

export function getDogs() {
	return ky.get("http://localhost:8000/dogs").json<Dog[]>();
}

export function addDog(name: string, breed: string, age: number) {
	return ky
		.post("http://localhost:8000/dogs", {
			json: { name, breed, age },
		})
		.json<Dog>();
}
