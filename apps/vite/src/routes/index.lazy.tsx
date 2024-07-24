import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
	component: App,
});

function App() {
	return (
		<>
			<h1>
				Hi there! This is the home page. Would be nice if I had a navbar and a
				footer
			</h1>

			<p className="mt-10">
				Would also be a nice place to have a link to all of the lessons here
			</p>
		</>
	);
}
