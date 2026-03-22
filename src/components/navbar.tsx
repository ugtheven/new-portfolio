import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";

export function Navbar() {
	const { theme, toggleTheme } = useTheme();

	return (
		<header className="fixed top-0 right-0 left-0 z-50 flex items-center justify-end px-6 py-2">
			<div className="flex items-center">
				<Button variant="ghost" size="icon" onClick={toggleTheme}>
					{theme === "dark" ? (
						<Sun className="size-4" />
					) : (
						<Moon className="size-4" />
					)}
				</Button>
			</div>
		</header>
	);
}
