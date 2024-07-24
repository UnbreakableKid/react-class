/* eslint-disable no-mixed-spaces-and-tabs */
import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";
import type { QueryClient } from "@tanstack/react-query";
import Navbar from "@/components/Navbar";
import { lazy } from "react";

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
}>()({
  component: Layout,
});

const TanStackRouterDevtools =
  process.env.NODE_ENV === "production"
    ? () => null // Render nothing in production
    : lazy(() =>
        // Lazy load in development
        import("@tanstack/router-devtools").then((res) => ({
          default: res.TanStackRouterDevtools,
          // For Embedded Mode
          // default: res.TanStackRouterDevtoolsPanel
        })),
      );

function Layout() {
  return (
    <div className="container">
      <Navbar />
      <Outlet />
      <TanStackRouterDevtools />
    </div>
  );
}
export default Layout;
