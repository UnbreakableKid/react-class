// create a tanstack query for the breed list

import { useQuery } from "@tanstack/react-query";
import { getDogs } from "../getDog";

export function useBreedList() {
	return useQuery({
		queryKey: ["breedList"],
		queryFn: getDogs,
	});
}
