import { Moon, Sun } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useTheme } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/components/ui/tooltip";

export function Navbar() {
	const { theme, toggleTheme } = useTheme();
	const { t, i18n } = useTranslation();

	function toggleLanguage() {
		i18n.changeLanguage(i18n.language === "en" ? "fr" : "en");
	}

	return (
		<header className="fixed top-0 right-0 left-0 z-50 flex items-center justify-end px-6 py-2">
			<div className="flex items-center gap-1">
				<Tooltip>
					<TooltipTrigger>
						<Button variant="ghost" size="sm" onClick={toggleLanguage}>
							{i18n.language === "en" ? "FR" : "EN"}
						</Button>
					</TooltipTrigger>
					<TooltipContent>{t("navbar.changeLanguage")}</TooltipContent>
				</Tooltip>

				<Tooltip>
					<TooltipTrigger>
						<Button variant="ghost" size="icon" onClick={toggleTheme}>
							{theme === "dark" ? (
								<Sun className="size-4" />
							) : (
								<Moon className="size-4" />
							)}
						</Button>
					</TooltipTrigger>
					<TooltipContent>{t("navbar.switchTheme")}</TooltipContent>
				</Tooltip>
			</div>
		</header>
	);
}
