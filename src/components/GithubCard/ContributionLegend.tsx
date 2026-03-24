import { cn } from "@/lib/utils";
import { getDayColor } from "./utils";

export function ContributionLegend({
	less,
	more,
}: {
	less: string;
	more: string;
}) {
	return (
		<div className="mt-2 flex items-center gap-1.5">
			<span className="text-[9px] leading-none text-muted-foreground">
				{less}
			</span>
			{[0, 1, 2, 3, 4].map((level) => (
				<div
					key={level}
					className={cn("h-2.5 w-2.5 rounded-[3px]", getDayColor(level))}
				/>
			))}
			<span className="text-[9px] leading-none text-muted-foreground">
				{more}
			</span>
		</div>
	);
}
