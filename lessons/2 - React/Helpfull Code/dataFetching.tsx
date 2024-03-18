// import { createFileRoute } from "@tanstack/react-router";
// import { useBreedList } from "../api/queries/breedQueries.js";
// import { useState, useEffect } from "react";
// import { Dog, addDog, getDogs } from "../api/dogAPI.js";
// import { useMutation } from "@tanstack/react-query";

// export const Route = createFileRoute("/dataFetching")({
// 	component: DogShowcase,
// });

// function DogShowcase() {
// 	const {
// 		data: breedList,
// 		error,
// 		isLoading,
// 		refetch,
// 		isFetching,
// 	} = useBreedList();

// 	const { mutate } = useMutation({
// 		mutationFn: ({
// 			name,
// 			breed,
// 			age,
// 		}: {
// 			name: string;
// 			breed: string;
// 			age: number;
// 		}) => addDog(name, breed, age),
// 		onSuccess: (data) => {
// 			console.log(data);
// 			refetch();
// 		},
// 		onError: (error) => {
// 			console.log(error);
// 		},
// 	});

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
// 						{breed.breed} - {breed.name}, Age {breed.age}
// 					</li>
// 				))}
// 			</ul>

// 			{isFetching && <p>Fetching...</p>}

// 			<button
// 				type="button"
// 				className="mt-4 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition-colors duration-300 ease-in-out"
// 				onClick={() =>
// 					mutate({
// 						age: 3,
// 						breed: "poodle",
// 						name: "fluffy",
// 					})
// 				}
// 			>
// 				Add Dog
// 			</button>

// 			<button type="button" onClick={() => refetch()}>
// 				Refetch
// 			</button>
// 		</div>
// 	);
// }
