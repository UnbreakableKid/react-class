import { Link } from "@tanstack/react-router";

//notice the special link component from tanstack/react-router. It enables client side routing without a page refresh

//add a link to the about page

const Navbar = () => {
	return (
		<nav className="flex justify-between items-center h-16 relative shadow-sm font-mono">
			<Link
				className="text-3xl text-blue-500 font-bold underline hover:text-blue-700 cursor-pointer"
				to="/"
			>
				Home
			</Link>
		</nav>
	);
};
export default Navbar;
