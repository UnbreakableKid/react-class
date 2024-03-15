// env.ts
import { defineConfig } from "@julr/vite-plugin-validate-env";
// import { z } from "zod";

export default defineConfig({
	debug: true,
	validator: "zod",
	// schema: {
	// 	VITE_sv: z.string(),
	// },
});
