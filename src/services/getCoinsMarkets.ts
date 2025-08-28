import type { Coin } from "@/types/types.ts";
import { coinApi } from "./coinApi.ts";

export const getCoinsMarkets = async (): Promise<Coin[] | null> => {
  try {
    const response = await coinApi.get("/coins/markets", {
      params: { vs_currency: "usd" },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
