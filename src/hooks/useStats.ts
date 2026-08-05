import { useQuery } from "@tanstack/react-query";
import { fetchStats } from "@/lib/api";

export function useStats() {
  return useQuery({
    queryKey: ["stats"],
    queryFn: fetchStats,
    // Overrides the global staleTime: the shelter list can be cached for a
    // minute, the totals should be re-read every time the page is opened.
    staleTime: 0,
    refetchInterval: 30_000,
  });
}
