// import { cn } from "@/utils/cn";
// import { Link, useRouterState } from "@tanstack/react-router";

// //notice the special link component from tanstack/react-router. It enables client side routing without a page refresh

// //add a link to the about page

// const Navbar = () => {
// 	const { location } = useRouterState();

// 	return (
// 		<nav className="relative flex h-16 items-center justify-between font-mono shadow-sm">
// 			<Link
// 				className="cursor-pointer font-bold text-3xl text-blue-500 underline hover:text-blue-700"
// 				to="/"
// 			>
// 				Home
// 			</Link>

// 			<Link
// 				className={cn(
// 					"cursor-pointer font-bold text-3xl text-blue-500 underline hover:text-blue-700",
// 					location.pathname === "/about" &&
// 						"cursor-not-allowed text-blue-700 hover:text-blue-900",
// 				)}
// 				to="/about"
// 			>
// 				About
// 			</Link>
// 		</nav>
// 	);
// };
// export default Navbar;
