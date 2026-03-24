import { DayCell } from "./DayCell";
import type { MonthLabel, Week } from "./types";
import { DAYS_OF_WEEK } from "./utils";

function MonthLabelRow({
	weeks,
	labels,
}: {
	weeks: Week[];
	labels: MonthLabel[];
}) {
	return (
		<div className="flex gap-1">
			{weeks.map((week, wi) => {
				const key = week.find(Boolean)?.date ?? `w${wi}`;
				const label = labels.find((m) => m.col === wi)?.label ?? "";
				return (
					<div
						key={key}
						className="w-2.5 text-[9px] leading-none text-muted-foreground"
					>
						{label}
					</div>
				);
			})}
		</div>
	);
}

export function ContributionGrid({
	weeks,
	labels,
	locale,
}: {
	weeks: Week[];
	labels: MonthLabel[];
	locale: string;
}) {
	return (
		<div className="inline-flex flex-col gap-1">
			<MonthLabelRow weeks={weeks} labels={labels} />
			{DAYS_OF_WEEK.map((dow, di) => (
				<div key={dow} className="flex gap-1">
					{weeks.map((week, wi) => {
						const day = week[di];
						const key = day?.date ?? `${week.find(Boolean)?.date ?? wi}-${dow}`;
						return day ? (
							<DayCell key={key} day={day} locale={locale} />
						) : (
							<div key={key} className="h-2.5 w-2.5" />
						);
					})}
				</div>
			))}
		</div>
	);
}
