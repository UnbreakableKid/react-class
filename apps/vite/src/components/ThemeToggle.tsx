import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/Button";

import { useTheme } from "@/components/ThemeProvider";

export function ModeToggle() {
	const { setTheme, theme } = useTheme();

	return (
		<Button
			onClick={() => {
				setTheme(theme === "light" ? "dark" : "light");
			}}
		>
			{theme === "light" ? <Sun /> : <Moon />}
		</Button>
	);
}
