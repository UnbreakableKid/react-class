import { Link } from "@tanstack/react-router";

const Navbar = () => {
	return (
		<nav className="flex justify-between items-center h-16 relative shadow-sm font-mono">
			<a href="/">Home</a>

			<a href="/about">About</a>

			<Link to="/dogShowcase">Dog Showcase</Link>
		</nav>
	);
};
export default Navbar;
