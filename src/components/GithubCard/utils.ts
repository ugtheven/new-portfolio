export const DAYS_OF_WEEK = [
	"sun",
	"mon",
	"tue",
	"wed",
	"thu",
	"fri",
	"sat",
] as const;

export function getDayColor(commits: number): string {
	if (commits === 0) return "bg-muted";
	if (commits <= 1) return "bg-green-200 dark:bg-green-900";
	if (commits <= 2) return "bg-green-400 dark:bg-green-700";
	if (commits <= 3) return "bg-green-500 dark:bg-green-500";
	return "bg-green-700 dark:bg-green-400";
}

export function formatDate(
	date: string,
	locale: string,
	options: Intl.DateTimeFormatOptions,
): string {
	return new Date(`${date}T00:00:00`).toLocaleDateString(locale, options);
}

export function dayLabel(index: number, locale: string): string {
	return new Date(2024, 0, 7 + index).toLocaleDateString(locale, {
		weekday: "short",
	});
}
