import { useEffect, useState } from "react";

export interface DayActivity {
	date: string;
	commits: number;
}

const QUERY = `
  query($username: String!, $from: DateTime!, $to: DateTime!) {
    user(login: $username) {
      contributionsCollection(from: $from, to: $to) {
        contributionCalendar {
          weeks {
            contributionDays {
              date
              contributionCount
            }
          }
        }
      }
    }
  }
`;

export function useGithubActivity(days = 30) {
	const [data, setData] = useState<DayActivity[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<Error | null>(null);

	useEffect(() => {
		const token = import.meta.env.VITE_GITHUB_TOKEN as string;
		const username = import.meta.env.VITE_GITHUB_USERNAME as string;

		if (!token || !username) {
			setError(new Error("Missing VITE_GITHUB_TOKEN or VITE_GITHUB_USERNAME"));
			setLoading(false);
			return;
		}

		const to = new Date();
		const from = new Date();
		from.setDate(to.getDate() - (days - 1));
		// Rewind to the nearest past Sunday so the grid starts on a full week
		from.setDate(from.getDate() - from.getDay());

		fetch("https://api.github.com/graphql", {
			method: "POST",
			headers: {
				Authorization: `bearer ${token}`,
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				query: QUERY,
				variables: {
					username,
					from: from.toISOString(),
					to: to.toISOString(),
				},
			}),
		})
			.then((res) => res.json())
			.then((json) => {
				const weeks =
					json.data?.user?.contributionsCollection?.contributionCalendar
						?.weeks ?? [];

				const result: DayActivity[] = weeks
					.flatMap(
						(w: {
							contributionDays: { date: string; contributionCount: number }[];
						}) => w.contributionDays,
					)
					.map((d: { date: string; contributionCount: number }) => ({
						date: d.date,
						commits: d.contributionCount,
					}));

				setData(result);
			})
			.catch(setError)
			.finally(() => setLoading(false));
	}, [days]);

	return { data, loading, error };
}
