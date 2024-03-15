import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dataFetching")({
	component: DogShowcase,
});

function DogShowcase() {
	//showcase the same but using useffect
	// const [breedList, setBreedList] = useState<Dog[]>();
	// const [error, setError] = useState<Error>();
	// const [isLoading, setIsLoading] = useState(true);

	// useEffect(() => {
	// 	const fetchBreedList = async () => {
	// 		const response = await getDogs();
	// 		setBreedList(response);
	// 		setIsLoading(false);
	// 	};
	// 	fetchBreedList();
	// }, []);

	// function refetch() {
	// 	setIsLoading(true);
	// 	setError(undefined);
	// 	setBreedList(undefined);
	// 	getDogs()
	// 		.then((response) => {
	// 			setBreedList(response);
	// 			setIsLoading(false);
	// 		})
	// 		.catch((error) => {
	// 			setError(error);
	// 			setIsLoading(false);
	// 		});
	// }

	return (
		<div className="w-full">
			<h1>Dog Showcase</h1>
			<ul className="grid grid-cols-3 gap-4 mt-12">Put the list here please</ul>

			{/* <button type="button" onClick={() => refetch()}>
				Refetch
			</button> */}
		</div>
	);
}
