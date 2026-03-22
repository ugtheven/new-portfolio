import { Navbar } from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";

function App() {
	return (
		<ThemeProvider>
			<TooltipProvider>
				<Navbar />
				<main className="flex min-h-screen items-center justify-center">
					<h1 className="text-4xl font-bold">portfolio</h1>
				</main>
			</TooltipProvider>
		</ThemeProvider>
	);
}

export default App;
