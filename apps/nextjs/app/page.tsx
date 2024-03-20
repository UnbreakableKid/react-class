import { db, dogs, insertDog } from "@repo/database";

export default async function Page(): Promise<JSX.Element> {
	const doog = await db.select().from(dogs);

	// loop through doog and render each one

	async function addDog() {
		await insertDog("Fido", "Golden Retriever", 3);
	}

	return (
		<div>
			{doog.map((dog) => (
				<div key={dog.id}>
					<h1>{dog.name}</h1>
					<p>{dog.breed}</p>
				</div>
			))}
			<button type="button" onClick={addDog}>
				Add Dog
			</button>
		</div>
	);
}
