import { Moon, Sun } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useTheme } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";

export function Settings() {
	const { i18n } = useTranslation();
	const { theme, toggleTheme } = useTheme();

	return (
		<div className="mb-3 flex justify-end">
			<div className="flex items-center gap-0.5 rounded-full border border-border bg-card px-1.5 py-1 shadow-sm">
				<Button
					variant="ghost"
					size="sm"
					onClick={() =>
						i18n.changeLanguage(i18n.language === "en" ? "fr" : "en")
					}
					className="rounded-full px-2.5 py-1 text-[11px] font-semibold tracking-wide text-muted-foreground"
				>
					{i18n.language.toUpperCase()}
				</Button>
				<div className="h-3 w-px bg-border" />
				<Button
					variant="ghost"
					size="icon"
					onClick={toggleTheme}
					aria-label="Toggle theme"
					className="h-6 w-6 rounded-full text-muted-foreground"
				>
					{theme === "dark" ? (
						<Moon className="h-3.5 w-3.5" />
					) : (
						<Sun className="h-3.5 w-3.5" />
					)}
				</Button>
			</div>
		</div>
	);
}
