import type { CoinByQuery } from "@/types/types.ts";
import { coinApi } from "./coinApi.ts";

export const fetchSearch = async (
  query: string
): Promise<CoinByQuery[] | null> => {
  try {
    const { data } = await coinApi.get(`/search?query=${query}`);
    return data.coins;
  } catch (error) {
    console.log(error);
    return null;
  }
};
