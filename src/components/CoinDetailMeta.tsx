import { formatCompactNumber } from "@/utils/formatCompactNumber.ts";
import type { MarketData } from "@/types/types.ts";
import CoinMetaRow from "./CoinMetaRow.tsx";
import { Separator } from "./ui/separator.tsx";
import type { JSX } from "react";

type CoinDetailMetaProps = {
  marketData: MarketData;
  marketCapRank: number;
};

const CoinDetailMeta = ({
  marketData,
  marketCapRank,
}: CoinDetailMetaProps): JSX.Element => {
  const tradingVolume24h = formatCompactNumber(marketData.total_volume.usd, {
    decimals: 1,
  });
  const marketCap = formatCompactNumber(marketData.market_cap_change_24h, {
    decimals: 1,
  });

  const totalSupply = formatCompactNumber(marketData.total_supply, {
    decimals: 1,
  });

  return (
    <div className="w-full flex flex-col gap-6 sm:flex-row md:justify-between md:h-14">
      <CoinMetaRow label="Rank" value={marketCapRank} />
      <Separator orientation="vertical" className="hidden md:block" />

      <CoinMetaRow
        label="24h High"
        value={`$${marketData.high_24h.usd.toLocaleString("en-US")}`}
      />
      <Separator orientation="vertical" className="hidden md:block" />

      <CoinMetaRow
        label="24h Low"
        value={`$${marketData.low_24h.usd.toLocaleString("en-US")}`}
      />
      <Separator orientation="vertical" className="hidden md:block" />

      <CoinMetaRow label="Market Cap" value={marketCap} />
      <Separator orientation="vertical" className="hidden md:block" />

      <CoinMetaRow label="24h Volume" value={tradingVolume24h} />
      <Separator orientation="vertical" className="hidden md:block" />

      <CoinMetaRow label="Total Supply" value={totalSupply} />
    </div>
  );
};

export default CoinDetailMeta;
