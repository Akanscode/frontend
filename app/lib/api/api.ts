// lib/api.ts

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export interface ForecastResponse {
  commodity: string;
  market: string;
  history: { date: string; price: number }[];
  forecasted_price: number;
  metrics: {
    naive_mape: number;
    naive_r2: number;
    arima_mape: number;
    arima_r2: number;
  };
}

export interface AllocationResponse {
  allocation: Record<string, number>;
  total_net_value: number;
  net_value_per_unit: Record<string, number>;
}

export async function getForecast(commodity: string, market: string): Promise<ForecastResponse> {
  const res = await fetch(
    `${API_BASE}/forecast?commodity=${encodeURIComponent(commodity)}&market=${encodeURIComponent(market)}`,
    { cache: "no-store" }
  );
  if (!res.ok) throw new Error("Failed to fetch forecast");
  return res.json();
}

export async function getAllocation(): Promise<AllocationResponse> {
  const res = await fetch(`${API_BASE}/allocate`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch allocation");
  return res.json();
}