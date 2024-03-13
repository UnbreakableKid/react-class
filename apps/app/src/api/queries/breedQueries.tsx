// create a tanstack query for the breed list

import { useQuery } from "@tanstack/react-query";
import { getDogs } from "../dogAPI";

export function useBreedList() {
	return useQuery({
		queryKey: ["breedList"],
		queryFn: getDogs,
	});
}
