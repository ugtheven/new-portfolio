import type { DayActivity } from "@/hooks/useGithubActivity";

export type Week = (DayActivity | null)[];
export type MonthLabel = { label: string; col: number };
