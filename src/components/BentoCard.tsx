import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface BentoCardProps {
	title: string;
	className?: string;
	children?: React.ReactNode;
}

export function BentoCard({ title, className, children }: BentoCardProps) {
	return (
		<Card className={cn("flex flex-col", className)}>
			<CardHeader>
				<CardTitle className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
					{title}
				</CardTitle>
			</CardHeader>
			{children && <CardContent className="mt-auto">{children}</CardContent>}
		</Card>
	);
}
