/* eslint-disable no-mixed-spaces-and-tabs */
import "./App.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import { useBreedList } from "./api/queries/breedQueries";

function App() {
	const { data: breedList, error, isLoading, refetch } = useBreedList();

	//showcase the same but using useffect
	// const [breedList, setBreedList] = useState<FetchDogsResult>();
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
		<>
			<Navbar />
			{/* loop through the first 100 breeeds */}
			{isLoading && <p>Loading...</p>}
			{error && (
				<>
					<p>Something went wrong</p>
					<button type="button" onClick={refetch}>
						Retry
					</button>
				</>
			)}

			{breedList?.data && (
				<ul>
					{breedList.data.map((breed) => (
						<li key={breed.id}>{breed.attributes.name}</li>
					))}
				</ul>
			)}

			<button type="button" onClick={refetch}>
				Refetch
			</button>

			<div className="flex gap-5">
				{[1, 2, 3].map((i) => (
					<Card key={i} title={`Carta nº ${i}`}>
						<p
							className={
								i === 1
									? "text-red-500"
									: i === 2
									  ? "text-yellow-500"
									  : "text-green-500"
							}
						>
							Conteúdo da carta nº {i}
						</p>
					</Card>
				))}
			</div>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>
		</>
	);
}

export default App;
