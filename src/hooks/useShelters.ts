import { useQuery } from "@tanstack/react-query";
import { fetchShelters } from "@/lib/api";

export function useShelters() {
  return useQuery({
    queryKey: ["shelters"],
    queryFn: fetchShelters,
  });
}
