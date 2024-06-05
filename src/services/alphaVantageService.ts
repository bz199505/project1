import axios from "axios"
import { StockData } from "../types/stockData"

const API_KEY = "PVQXQKIZWBNS4W5U"
const BASE_URL = "https://www.alphavantage.co/query"

export const fetchStockData = async (symbol: string): Promise<StockData[]> => {
  const response = await axios.get(BASE_URL, {
    params: {
      function: "TIME_SERIES_DAILY",
      symbol: symbol,
      outputsize: "compact",
      apikey: API_KEY,
    },
  })
  return Object.keys(response.data["Time Series (Daily)"]).map((date) => ({
    date,
    open: parseFloat(response.data["Time Series (Daily)"][date]["1. open"]),
    high: parseFloat(response.data["Time Series (Daily)"][date]["2. high"]),
    low: parseFloat(response.data["Time Series (Daily)"][date]["3. low"]),
    close: parseFloat(response.data["Time Series (Daily)"][date]["4. close"]),
  }))
}
