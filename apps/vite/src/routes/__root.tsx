/* eslint-disable no-mixed-spaces-and-tabs */
import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";
import type { QueryClient } from "@tanstack/react-query";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import Navbar from "../components/Navbar";

export const Route = createRootRouteWithContext<{
	queryClient: QueryClient;
}>()({
	component: Layout,
});

function Layout() {
	return (
		<div className="container">
			{/* <Navbar /> */}
			<Navbar />
			<Outlet />
			<TanStackRouterDevtools />
		</div>
	);
}
export default Layout;
