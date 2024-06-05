import React, { useEffect, useRef } from "react";
import { Stock } from "@antv/g2plot";

interface StockData {
  date: string;
  open: number;
  high: number;
  low: number;
  close: number;
}

interface StockChartProps {
  stockData: StockData[];
}

const StockChart: React.FC<StockChartProps> = ({ stockData }) => {
  const stockChartContainer = useRef<HTMLDivElement>(null);

  console.log(stockData);

  useEffect(() => {
    if (stockData.length > 0 && stockChartContainer.current) {
      const chart = new Stock(stockChartContainer.current, {
        data: stockData,
        xField: "date",
        yField: ["open", "close", "high", "low"],
        meta: {
          open: { alias: "Open" },
          close: { alias: "Close" },
          high: { alias: "High" },
          low: { alias: "Low" },
        },
        height: 300,
      });
      chart.render();
      return () => chart.destroy(); // Clean up the chart instance on component unmount
    }
  }, [stockData]);

  return <div ref={stockChartContainer}></div>;
};

export default StockChart;
