import PriceTrendCard from "@/components/PriceTrendCard";
import CoinDetailHeader from "@/components/CoinDetailHeader.tsx";
import CoinDetailMeta from "@/components/CoinDetailMeta.tsx";
import ErrorElement from "@/components/ErrorElement.tsx";
import Spinner from "@/components/Spinner.tsx";
import { Button } from "@/components/ui/button.tsx";
import { useCoinDetail } from "@/hooks/useCoinDetail.ts";
import { ArrowLeft } from "lucide-react";
import { useEffect, type ReactNode } from "react";
import { useNavigate, useParams } from "react-router-dom";

const CoinDetail = (): ReactNode => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const {
    data: coin,
    isLoading,
    isError,
    error,
    refetch,
  } = useCoinDetail(id as string);

  useEffect(() => {
    document.title = coin
      ? `${coin.name} (${coin.symbol.toUpperCase()}) - CryptoWatchlist`
      : "Loading... - CryptoWatchlist";

    return () => {
      document.title = "CryptoWatchlist";
    };
  }, [coin]);

  if (!id) {
    return (
      <div className="w-full flex justify-center">
        <ErrorElement message="Coin ID is missing from the URL.">
          <Button onClick={() => navigate("/")} className="mt-4">
            Go Back Home
          </Button>
        </ErrorElement>
        ;
      </div>
    );
  }

  if (isLoading)
    return (
      <div className="container mx-auto w-full h-screen grid place-items-center">
        <span>
          <Spinner />
        </span>
      </div>
    );

  if (isError)
    return (
      <div className="w-full flex justify-center">
        <ErrorElement message={error.message}>
          <div className="flex gap-2 mt-4">
            <Button onClick={() => refetch()} variant={"outline"}>
              Reload
            </Button>
            <Button onClick={() => navigate("/")}>Go Back Home</Button>
          </div>
        </ErrorElement>
      </div>
    );

  if (!coin) {
    return (
      <div className="w-full flex justify-center">
        <ErrorElement message={`Coin with ID ${id} not found.`}>
          <Button onClick={() => navigate("/")} className="mt-4">
            Go Back Home
          </Button>
        </ErrorElement>
      </div>
    );
  }

  const { name, symbol, image, market_cap_rank, market_data } = coin;
  const { current_price, price_change_percentage_24h, sparkline_7d } =
    market_data;

  const sparklineData = sparkline_7d.price;

  return (
    <div className="container mx-auto px-4 py-4 w-full min-h-screen flex flex-col">
      <Button className="w-fit cursor-pointer" onClick={() => navigate(-1)}>
        <ArrowLeft /> Back
      </Button>
      <div className="flex-1 flex flex-col justify-center mt-6 md:mt-0">
        <CoinDetailHeader
          coinName={name}
          coinSymbol={symbol}
          coinImageUrl={image.small}
          currentPrice={current_price.usd}
          priceChangePercentaga24h={price_change_percentage_24h}
        />

        <div className="mt-6">
          <PriceTrendCard priceData={sparklineData} />
        </div>
        <div className="mt-6">
          <CoinDetailMeta
            marketData={market_data}
            marketCapRank={market_cap_rank}
          />
        </div>
      </div>
    </div>
  );
};

export default CoinDetail;
