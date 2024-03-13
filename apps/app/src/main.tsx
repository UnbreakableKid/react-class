import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen.ts";

const queryClient = new QueryClient();

const router = createRouter({
	routeTree,
	context: {
		queryClient,
	},
	defaultPreload: "intent",
	defaultPreloadStaleTime: 0,
});

// Register things for typesafety
declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router;
	}
}

// biome-ignore lint/style/noNonNullAssertion: <explanation>
ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	</React.StrictMode>,
);
