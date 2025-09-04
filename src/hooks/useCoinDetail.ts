import { getCoinDetail } from "@/services/getCoinDetail.ts";
import { useQuery } from "@tanstack/react-query";

export const useCoinDetail = (id: string) => {
  return useQuery({
    queryKey: ["coin detail", id],
    queryFn: () => getCoinDetail(id),
    enabled: !!id,
  });
};
