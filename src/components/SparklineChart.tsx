"use client";

import type { FormattedPoint } from "@/types/types.ts";
import { useMemo } from "react";
import { LineChart, Line, YAxis } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "./ui/chart.tsx";
import { TrendingDown, TrendingUp } from "lucide-react";

type SparklineChartProps = {
  data: number[];
};

export default function SparklineChart({ data }: SparklineChartProps) {
  const { formattedData, isTrendingUp } = useMemo(() => {
    if (!data || data.length < 2) {
      const singlePointData = (data || []).map((v, i) => ({
        index: i,
        value: 50,
        raw: v,
      }));

      return { formattedData: singlePointData, isTrendingUp: true };
    }

    const min = Math.min(...data);
    const max = Math.max(...data);
    const delta = max - min;

    const processedData: FormattedPoint[] = data.map((v, i) => ({
      index: i,
      value: delta === 0 ? 50 : ((v - min) / delta) * 100,
      raw: v,
    }));
    const trend = data[data.length - 1] >= data[0];

    return { formattedData: processedData, isTrendingUp: trend };
  }, [data]);

  const chartConfig = {
    value: {
      label: "Price",
      color: isTrendingUp ? "var(--color-chart-2)" : "var(--color-chart-5)",
      icon: isTrendingUp ? TrendingUp : TrendingDown,
    },
  } satisfies ChartConfig;

  return (
    <div className="flex-1">
      <ChartContainer config={chartConfig} className="w-full h-[180px]">
        <LineChart data={formattedData}>
          <YAxis domain={[0, 100]} hide />
          <ChartTooltip
            cursor
            content={
              <ChartTooltipContent
                indicator="dot"
                formatter={(_value, _name, props) =>
                  `$${props.payload.raw.toFixed(2)}`
                }
              />
            }
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke="var(--color-value)"
            strokeWidth={2}
            dot={false}
            isAnimationActive={true}
          />
        </LineChart>
      </ChartContainer>
    </div>
  );
}
