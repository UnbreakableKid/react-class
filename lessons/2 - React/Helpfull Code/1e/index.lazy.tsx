// import { Link, createFileRoute, useRouter } from "@tanstack/react-router";

// export const Route = createFileRoute("/")({
// 	component: App,
// });

// function App() {
// 	const { routesByPath } = useRouter();
// 	const keys = Object.keys(routesByPath);

// 	return (
// 		<>
// 			<h1>
// 				Hi there! This is the home page. Would be nice if I had a navbar and a
// 				footer
// 			</h1>

// 			<p className="mt-10">
// 				Would also be a nice place to have a link to all of the lessons here
// 			</p>

// 			<p className="mt-10">
// 				Here are the routes that are currently available in the app:
// 			</p>

// 			<ul className="mt-10">
// 				{keys.map((key) => (
// 					<li>
// 						<Link to={key} key={key} className="text-blue-500">
// 							{key.replace("/", "")}
// 						</Link>
// 					</li>
// 				))}
// 			</ul>
// 		</>
// 	);
// }
