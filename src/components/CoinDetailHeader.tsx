import { cn } from "@/lib/utils.ts";
import { ChevronsDown, ChevronsUp } from "lucide-react";

type CoinDetailHeaderProps = {
  coinName: string;
  coinSymbol: string;
  coinImageUrl: string;
  currentPrice: number;
  priceChangePercentaga24h: number;
};

const CoinDetailHeader = ({
  coinName,
  coinSymbol,
  coinImageUrl,
  currentPrice,
  priceChangePercentaga24h,
}: CoinDetailHeaderProps) => {
  const isPriceNegative = priceChangePercentaga24h < 0;

  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <img src={coinImageUrl} alt={`${coinName} logo`} />
        <div>
          <h1 className="text-xl md:text-2xl font-semibold">{coinName}</h1>
          <p className="text-lg md:text-xl font-medium text-muted-foreground uppercase">
            {coinSymbol}
          </p>
        </div>
      </div>
      <div>
        <p className="text-2xl md:text-3xl font-semibold text-right">
          ${currentPrice?.toLocaleString("en-US")}
        </p>
        <p
          className={cn(
            isPriceNegative ? "text-red-500" : "text-green-500",
            "text-xl md:text-3xl flex items-center gap-1 text-right"
          )}
        >
          <span>{isPriceNegative ? <ChevronsDown /> : <ChevronsUp />}</span>
          {priceChangePercentaga24h.toFixed(2)}%
        </p>
      </div>
    </header>
  );
};

export default CoinDetailHeader;
