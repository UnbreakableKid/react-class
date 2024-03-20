// import { type Dog, getDogs } from "@/api/dogAPI";
// import { createFileRoute } from "@tanstack/react-router";
// import { useEffect, useState } from "react";

// export const Route = createFileRoute("/_dogs/dogs")({// 	component: DogShowcase,
// });

// function DogShowcase() {
// 	const [dogs, setDogs] = useState<Dog[]>([]);
// 	const [loading, setLoading] = useState(true);
// 	const [error, setError] = useState<string>();

// 	useEffect(() => {
// 		const fetchDogs = async () => {
// 			try {
// 				const response = await getDogs();
// 				setDogs(response);
// 				setError("");
// 			} catch (error) {
// 				setError("Error fetching dogs");
// 			} finally {
// 				setLoading(false);
// 			}
// 		};
// 		fetchDogs();
// 	}, []);

// 	return (
// 		<div className="w-full">
// 			<h1>Dog Showcase</h1>
// 			{loading && <p>Loading...</p>}
// 			{error && <p>{error}</p>}
// 			<ul className="mt-12 grid grid-cols-3 gap-4">
// 				{dogs.map((dog) => (
// 					<li key={dog.id} className="border p-4">
// 						<h2>{dog.name}</h2>
// 						<p>{dog.breed}</p>
// 						<p>{dog.age}</p>
// 					</li>
// 				))}
// 			</ul>
// 		</div>
// 	);
// }
