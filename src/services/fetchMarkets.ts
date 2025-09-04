import type { Coin, MarketsParams } from "@/types/types.ts";
import { coinApi } from "./coinApi.ts";

export const fetchMarkets = async (ids?: string[]): Promise<Coin[] | null> => {
  const params: MarketsParams = {
    vs_currency: "usd",
    order: "market_cap_desc",
    per_page: 250,
    page: 1,
    sparkline: false,
  };

  if (ids && ids.length > 0) {
    params.ids = ids.join(",");
  }

  try {
    const { data } = await coinApi.get("/coins/markets", { params });

    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
