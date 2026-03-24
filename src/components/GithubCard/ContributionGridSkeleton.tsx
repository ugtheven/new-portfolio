import { Skeleton } from "@/components/ui/skeleton";
import { DAYS_OF_WEEK } from "./utils";

const SKELETON_WEEKS = 52;

export function ContributionGridSkeleton() {
	return (
		<div className="inline-flex flex-col gap-1">
			<div className="flex gap-1">
				{Array.from({ length: SKELETON_WEEKS }, (_, weekIndex) => (
					<div
						key={`ml${
							// biome-ignore lint/suspicious/noArrayIndexKey: no choice
							weekIndex
						}`}
						className="h-[9px] w-2.5"
					/>
				))}
			</div>
			{DAYS_OF_WEEK.map((day) => (
				<div key={day} className="flex gap-1">
					{Array.from({ length: SKELETON_WEEKS }, (_, weekIndex) => (
						<Skeleton
							key={`${day}${
								// biome-ignore lint/suspicious/noArrayIndexKey: no choice
								weekIndex
							}`}
							className="h-2.5 w-2.5 rounded-[3px]"
						/>
					))}
				</div>
			))}
		</div>
	);
}
