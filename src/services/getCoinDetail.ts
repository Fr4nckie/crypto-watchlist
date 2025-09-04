import type { CoinDetailLite } from "@/types/types.ts";
import { coinApi } from "./coinApi.ts";

export const getCoinDetail = async (
  id: string
): Promise<CoinDetailLite | null> => {
  try {
    const response = await coinApi.get(`/coins/${id}`, {
      params: {
        localization: false,
        tickers: false,
        market_data: true,
        community_data: false,
        developer_data: false,
        sparkline: true,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
