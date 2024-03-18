import { dogs } from "@repo/database";
import db from "@repo/database/dist/database";

export default async function Page(): Promise<JSX.Element> {
	const doog = await db.select().from(dogs);

	return (
		<div>
			{doog.map((d) => {
				return (
					<div>
						<h1>{d.name}</h1>
						<p>{d.breed}</p>
						<p>{d.age}</p>
					</div>
				);
			})}
		</div>
	);
}
