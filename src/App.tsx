import { Navbar } from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";

function App() {
	return (
		<ThemeProvider>
			<Navbar />
			<main className="flex min-h-screen items-center justify-center">
				<h1 className="text-4xl font-bold">portfolio</h1>
			</main>
		</ThemeProvider>
	);
}

export default App;
