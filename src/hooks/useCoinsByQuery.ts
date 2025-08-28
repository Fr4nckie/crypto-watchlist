import { getCoinsByQuery } from "@/services/getCoinsByQuery.ts";
import { useQuery } from "@tanstack/react-query";

export const useCoinsByQuery = (query: string) => {
  return useQuery({
    queryKey: ["coin by query", query],
    queryFn: () => getCoinsByQuery(query),
    enabled: !!query,
  });
};
