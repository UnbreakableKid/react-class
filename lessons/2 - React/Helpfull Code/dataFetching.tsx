// import { createFileRoute } from "@tanstack/react-router";
// import { useBreedList } from "../api/queries/breedQueries.js";
// import { useState, useEffect } from "react";
// import { Dog, getDogs } from "../api/dogAPI.js";

// export const Route = createFileRoute("/dataFetching")({
// 	component: DogShowcase,
// });

// function DogShowcase() {
// 	const { data: breedList, error, isLoading, refetch } = useBreedList();

// 	//showcase the same but using useffect
// 	// const [breedList, setBreedList] = useState<Dog[]>();
// 	// const [error, setError] = useState<Error>();
// 	// const [isLoading, setIsLoading] = useState(true);

// 	// useEffect(() => {
// 	// 	const fetchBreedList = async () => {
// 	// 		const response = await getDogs();
// 	// 		setBreedList(response);
// 	// 		setIsLoading(false);
// 	// 	};
// 	// 	fetchBreedList();
// 	// }, []);

// 	// function refetch() {
// 	// 	setIsLoading(true);
// 	// 	setError(undefined);
// 	// 	setBreedList(undefined);
// 	// 	getDogs()
// 	// 		.then((response) => {
// 	// 			setBreedList(response);
// 	// 			setIsLoading(false);
// 	// 		})
// 	// 		.catch((error) => {
// 	// 			setError(error);
// 	// 			setIsLoading(false);
// 	// 		});
// 	// }

// 	return (
// 		<div className="w-full">
// 			<h1>Dog Showcase</h1>

// 			{isLoading && <p>Loading...</p>}
// 			{error && <p>Something went wrong</p>}

// 			<ul
// 				className="grid grid-cols-3 gap-4 mt-12
//             "
// 			>
// 				{breedList?.map((breed) => (
// 					<li key={breed.id}>
// 						{breed.name}, Age {breed.age}
// 					</li>
// 				))}
// 			</ul>

// 			<button type="button" onClick={() => refetch()}>
// 				Refetch
// 			</button>
// 		</div>
// 	);
// }
