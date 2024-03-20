import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_dogs/dogs")({
	component: DogShowcase,
});

function DogShowcase() {
	return (
		<div className="w-full">
			<h1>Dog Showcase</h1>

			<ul className="mt-12 grid grid-cols-3 gap-4">Add your code here</ul>
		</div>
	);
}
