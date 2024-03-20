import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_dogs")({
	component: DogLayout,
});

function DogLayout() {
	return (
		<>
			<h1>Dog Layout</h1>
			<Outlet />
		</>
	);
}
