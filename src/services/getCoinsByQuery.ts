import type { CoinByQuery } from "@/types/types.ts";
import { coinApi } from "./coinApi.ts";

export const getCoinsByQuery = async (
  query: string
): Promise<CoinByQuery[] | null> => {
  try {
    const response = await coinApi.get(`search?query=${query}`);

    return response.data.coins;
  } catch (error) {
    console.log(error);
    return null;
  }
};
