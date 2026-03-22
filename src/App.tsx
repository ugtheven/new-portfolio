import { useTranslation } from "react-i18next";
import { BentoCard } from "@/components/BentoCard";
import { Navbar } from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";

function App() {
	const { t } = useTranslation();

	return (
		<ThemeProvider>
			<TooltipProvider>
				<Navbar />

				<main className="mx-auto min-h-screen max-w-4xl px-4 pb-12 pt-20">
					<div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2">
						<BentoCard
							title={t("sections.hero")}
							className="min-h-64 sm:row-span-2 sm:min-h-0"
						/>
						<BentoCard title={t("sections.projectMain")} className="min-h-48" />
						<BentoCard
							title={t("sections.projectSecondary")}
							className="min-h-48"
						/>
						<BentoCard title={t("sections.github")} className="min-h-40" />
						<BentoCard title={t("sections.stack")} className="min-h-40" />
						<BentoCard title={t("sections.about")} className="min-h-40" />
						<BentoCard title={t("sections.contact")} className="min-h-40" />
					</div>
				</main>
			</TooltipProvider>
		</ThemeProvider>
	);
}

export default App;
