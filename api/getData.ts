import { Token } from "@/hook/createColumns";

interface FetchResult {
  data: Token[];
  error?: unknown;
}

export default async function getData(): Promise<FetchResult> {
  try {
    const res = await fetch(
      "https://api.mobula.io/api/1/market/query?filters=liquidity:100000:,volume:100000,price:0,market_cap:1000000:&sortBy=price_change_24h&limit=9999",
      {
        headers: {
          // This should be on ENV but for simplicity will just put it here
          authorization: "Bearer b86d4602-7fc8-4aee-9dff-1da30f572c93 ",
        },
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await res.json();
    return { data };
  } catch (error) {
    return { data: [], error };
  }
}
