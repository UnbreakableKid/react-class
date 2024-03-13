import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";
import { ValidateEnv } from "@julr/vite-plugin-validate-env";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), ValidateEnv(), TanStackRouterVite()],
});
