import { Settings } from "@/components/Settings";
import { GithubCard } from "@/components/GithubCard/GithubCard";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";

function App() {
	return (
		<ThemeProvider>
			<TooltipProvider>
				<main className="mx-auto min-h-screen max-w-4xl px-4 py-8">
					<Settings />
					<div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-3">
						<GithubCard />
					</div>
				</main>
			</TooltipProvider>
		</ThemeProvider>
	);
}

export default App;
