import axios from "axios";

const BASE_URL = "https://api.coingecko.com/api/v3";
const COIN_API_KEY = import.meta.env.VITE_COIN_API_KEY;

export const coinApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: "application/json",
    "x-cg-demo-api-key": COIN_API_KEY,
  },
});
