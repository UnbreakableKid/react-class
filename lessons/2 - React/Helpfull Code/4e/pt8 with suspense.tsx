// import { addDog, deleteDog } from "@/api/dogAPI";
// import { breedListOptions } from "@/api/queries/breedQueries";
// import { useMutation, useSuspenseQuery } from "@tanstack/react-query";
// import { createFileRoute } from "@tanstack/react-router";
// import { useState } from "react";

// export const Route = createFileRoute("/_dogs/dogs")({// 	component: DogShowcase,
// 	pendingComponent: () => <p>Loading...</p>,
// 	errorComponent: () => <p>Oh No</p>,
// 	loader: ({ context: { queryClient } }) =>
// 		queryClient.ensureQueryData(breedListOptions),
// });

// type NewDog = {
// 	name: string;
// 	breed: string;
// 	age: number;
// };

// function DogShowcase() {
// 	const [newDog, setNewDog] = useState<Partial<NewDog> | null>(null);

// 	const { data: dogs, refetch: refetchDogs } =
// 		useSuspenseQuery(breedListOptions);

// 	const { mutate } = useMutation({
// 		mutationFn: async () => {
// 			if (!newDog) {
// 				return;
// 			}
// 			if (!newDog.name || !newDog.breed || !newDog.age) {
// 				return;
// 			}
// 			await addDog(newDog.name, newDog.breed, newDog.age);
// 		},
// 	});

// 	const { mutate: deleteDogMutation } = useMutation({
// 		mutationFn: async (id: number) => {
// 			await deleteDog(id);
// 		},
// 		onSuccess: () => {
// 			refetchDogs();
// 		},
// 		onError: (error) => {
// 			console.error(error);
// 		},
// 	});

// 	function submitDog(e: React.FormEvent<HTMLFormElement>) {
// 		e.preventDefault();
// 		mutate();
// 	}

// 	return (
// 		<div className="w-full">
// 			<h1>Dog Showcase</h1>

// 			<ul className="mt-12 grid grid-cols-3 gap-4">
// 				{dogs.map((dog) => (
// 					<li key={dog.id} className="border p-4">
// 						<h2>{dog.name}</h2>
// 						<p>{dog.breed}</p>
// 						<p>{dog.age}</p>
// 						<button
// 							type="button"
// 							className="rounded bg-red-500 px-4 py-2 text-white"
// 							onClick={() => {
// 								deleteDogMutation(dog.id);
// 							}}
// 						>
// 							Delete
// 						</button>
// 					</li>
// 				))}
// 			</ul>

// 			<button
// 				type="button"
// 				className="mt-8 rounded bg-blue-500 px-4 py-2 text-white"
// 				onClick={() => refetchDogs()}
// 			>
// 				Refetch Dogs
// 			</button>

// 			<form className="mt-8 text-black" onSubmit={submitDog}>
// 				<input
// 					type="text"
// 					placeholder="Name"
// 					className="mb-4 block rounded bg-gray-100 p-2"
// 					value={newDog?.name || ""}
// 					onChange={(e) => {
// 						setNewDog((prev) => ({ ...prev, name: e.target.value }));
// 					}}
// 				/>
// 				<input
// 					type="text"
// 					placeholder="Breed"
// 					className="mb-4 block rounded bg-gray-100 p-2"
// 					onChange={(e) => {
// 						setNewDog((prev) => ({ ...prev, breed: e.target.value }));
// 					}}
// 					value={newDog?.breed || ""}
// 				/>
// 				<input
// 					type="number"
// 					placeholder="Age"
// 					className="mb-4 block rounded bg-gray-100 p-2"
// 					onChange={(e) => {
// 						setNewDog((prev) => ({ ...prev, age: +e.target.value }));
// 					}}
// 					value={newDog?.age || ""}
// 				/>
// 				<button
// 					type="submit"
// 					className="rounded bg-blue-500 px-4 py-2 text-white"
// 				>
// 					Add Dog
// 				</button>
// 			</form>
// 		</div>
// 	);
// }
