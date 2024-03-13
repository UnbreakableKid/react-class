import ky from "ky";

export interface FetchDogsResult {
	data: Breeds[];
	links: Links;
}

export interface Breeds {
	id: string;
	type: string;
	attributes: Attributes;
}

export interface Attributes {
	name: string;
	description: string;
	hypoallergenic: boolean;
}

export interface Links {
	self: string;
	current: string;
	next: string;
	last: string;
}

export function getDogs() {
	return ky.get("https://dogapi.dog/api/v2/breeds").json<FetchDogsResult>();
}
