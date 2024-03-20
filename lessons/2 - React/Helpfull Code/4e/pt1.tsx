// import { type Dog, getDogs } from "@/api/dogAPI";
// import { createFileRoute } from "@tanstack/react-router";
// import { useEffect, useState } from "react";

// export const Route = createFileRoute("/_dogs/dogs")({// 	component: DogShowcase,
// });

// function DogShowcase() {
// 	const [dogs, setDogs] = useState<Dog[]>([]);

// 	useEffect(() => {
// 		const fetchDogs = async () => {
// 			const response = await getDogs();
// 			setDogs(response);
// 		};
// 		fetchDogs();
// 	}, []);

// 	return (
// 		<div className="w-full">
// 			<h1>Dog Showcase</h1>
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
