import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Github } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useGithubActivity } from "@/hooks/useGithubActivity";
import { ContributionGrid } from "./ContributionGrid";
import { ContributionGridSkeleton } from "./ContributionGridSkeleton";
import { ContributionLegend } from "./ContributionLegend";
import { DayLabelColumn } from "./DayLabelColumn";
import type { MonthLabel, Week } from "./types";
import { formatDate } from "./utils";

const GITHUB_USERNAME = import.meta.env.VITE_GITHUB_USERNAME as string;

export function GithubCard({ className }: { className?: string }) {
	const { t, i18n } = useTranslation();
	const { data, loading, error } = useGithubActivity(364);

	const totalCommits = useMemo(
		() => data.reduce((sum, d) => sum + d.commits, 0),
		[data],
	);

	const weeks = useMemo<Week[]>(() => {
		if (!data.length) return [];
		const firstDow = new Date(`${data[0].date}T00:00:00`).getDay();
		const padded: Week = [...Array<null>(firstDow).fill(null), ...data];
		const result: Week[] = [];
		for (let i = 0; i < padded.length; i += 7)
			result.push(padded.slice(i, i + 7));
		return result;
	}, [data]);

	const monthLabels = useMemo<MonthLabel[]>(() => {
		let lastMonth = -1;
		return weeks.flatMap((week, wi) => {
			const first = week.find(Boolean);
			if (!first) return [];
			const month = new Date(`${first.date}T00:00:00`).getMonth();
			if (month === lastMonth) return [];
			lastMonth = month;
			return [
				{
					label: formatDate(first.date, i18n.language, { month: "short" }),
					col: wi,
				},
			];
		});
	}, [weeks, i18n.language]);

	return (
		<Card className={`py-0 sm:col-span-3 ${className ?? ""}`}>
			<CardHeader className="flex-row items-center justify-between px-5 pt-4">
				<CardTitle className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
					{t("sections.github")}
				</CardTitle>
				<div className="flex items-center gap-3">
					{!loading && !error && totalCommits > 0 && (
						<span className="text-xs text-muted-foreground">
							{totalCommits.toLocaleString(i18n.language)} {t("github.commits")}
						</span>
					)}
					<a
						href={`https://github.com/${GITHUB_USERNAME}`}
						target="_blank"
						rel="noopener noreferrer"
						className="text-muted-foreground transition-colors hover:text-foreground"
					>
						<Github className="h-3.5 w-3.5" />
					</a>
				</div>
			</CardHeader>
			<CardContent className="px-5 pb-4">
				{error && (
					<p className="text-xs text-muted-foreground">{error.message}</p>
				)}
				{!error && (
					<div className="flex justify-center overflow-x-auto overflow-y-hidden">
						<div className="flex flex-col">
							<div className="inline-flex gap-1">
								<DayLabelColumn locale={i18n.language} />
								{loading ? (
									<ContributionGridSkeleton />
								) : (
									<ContributionGrid
										weeks={weeks}
										labels={monthLabels}
										locale={i18n.language}
									/>
								)}
							</div>
							<ContributionLegend
								less={t("github.less")}
								more={t("github.more")}
							/>
						</div>
					</div>
				)}
			</CardContent>
		</Card>
	);
}
