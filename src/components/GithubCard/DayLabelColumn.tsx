import { DAYS_OF_WEEK, dayLabel } from "./utils";

export function DayLabelColumn({ locale }: { locale: string }) {
	return (
		<div className="flex flex-col gap-1">
			<div
				aria-hidden
				className="select-none text-[9px] leading-none opacity-0"
			>
				M
			</div>
			{DAYS_OF_WEEK.map((day, index) => (
				<div key={day} className="flex h-2.5 w-6 items-center justify-end pr-1">
					{index % 2 === 0 && (
						<span className="text-[9px] leading-none text-muted-foreground">
							{dayLabel(index, locale)}
						</span>
					)}
				</div>
			))}
		</div>
	);
}
