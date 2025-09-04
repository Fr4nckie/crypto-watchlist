import { useMemo } from "react";
import SparklineChart from "./SparklineChart.tsx";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card.tsx";
import { cn } from "@/lib/utils.ts";
import { ChevronsDown, ChevronsUp } from "lucide-react";
import { calculateChangePercent } from "@/utils/calculateChangePercent.ts";

type PriceTrendCardProps = {
  priceData: number[];
};

const PriceTrendCard = ({ priceData }: PriceTrendCardProps) => {
  const changePercent = useMemo(
    () => calculateChangePercent(priceData),
    [priceData]
  );

  const isPositive = changePercent >= 0;

  return (
    <Card className="w-full max-h-96 h-auto p-4">
      <CardHeader className="flex justify-between md:flex-col">
        <CardTitle className="text-xl md:text-2xl">7d Trend</CardTitle>
        <CardDescription
          className={cn(
            isPositive ? "text-green-500" : "text-red-500",
            "text-xl md:text-2xl flex items-center gap-2 font-medium"
          )}
        >
          <span>{isPositive ? <ChevronsUp /> : <ChevronsDown />}</span>
          <span>{changePercent.toFixed(2)}%</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="h-full p-0 flex flex-col justify-between">
        <SparklineChart data={priceData} />
      </CardContent>
    </Card>
  );
};

export default PriceTrendCard;
