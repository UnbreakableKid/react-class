// create a tanstack query for the breed list

import { queryOptions, useQuery } from "@tanstack/react-query";
import { getDogs } from "../dogAPI";

export const dogQueryKeys = {
	breedList: ["dogs"],
};

export function useBreedList() {
	return useQuery(breedListOptions);
}

export const breedListOptions = queryOptions({
	queryKey: dogQueryKeys.breedList,
	queryFn: getDogs,
});
