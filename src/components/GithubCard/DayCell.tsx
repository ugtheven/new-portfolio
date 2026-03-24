import { useTranslation } from "react-i18next";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import type { DayActivity } from "@/hooks/useGithubActivity";
import { cn } from "@/lib/utils";
import { formatDate, getDayColor } from "./utils";

export function DayCell({ day, locale }: { day: DayActivity; locale: string }) {
	const { t } = useTranslation();
	return (
		<Tooltip>
			<TooltipTrigger>
				<div
					className={cn(
						"h-2.5 w-2.5 cursor-default rounded-[3px]",
						getDayColor(day.commits),
					)}
				/>
			</TooltipTrigger>
			<TooltipContent>
				<p className="font-medium">
					{t("github.commit", { count: day.commits })}
				</p>
				<p className="text-muted-foreground">
					{formatDate(day.date, locale, {
						day: "numeric",
						month: "long",
						year: "numeric",
					})}
				</p>
			</TooltipContent>
		</Tooltip>
	);
}
