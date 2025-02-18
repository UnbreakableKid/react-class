import { ModeToggle } from "@/components/ThemeToggle";
import { Link } from "@tanstack/react-router";

//notice the special link component from tanstack/react-router. It enables client side routing without a page refresh

//add a link to the about page

const Navbar = () => {
	return (
		<nav className="relative flex h-16 items-center justify-between gap-4 font-mono shadow-xs">
			<div className="flex w-full justify-between gap-5">
				<Link
					className="cursor-pointer font-bold text-3xl text-blue-500 underline hover:text-blue-700"
					to="/"
				>
					Home
				</Link>
			</div>

			<ModeToggle />
		</nav>
	);
};
export default Navbar;
