import { getCoinsMarkets } from "@/services/getCoinsMarkets.ts";
import { useQuery } from "@tanstack/react-query";

export const useCoinsMarkets = () => {
  return useQuery({
    queryKey: ["coins markets"],
    queryFn: getCoinsMarkets,
  });
};
