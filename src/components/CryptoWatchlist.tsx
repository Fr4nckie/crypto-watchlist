import { useCoinsMarkets } from "@/hooks/useCoinsMarkets.ts";
import CryptoTableRow from "./CryptoTableRow.tsx";
import { Table, TableBody } from "./ui/table.tsx";
import CryptoTableRowSkeleton from "./CryptoTableRowSkeleton.tsx";
import CryptopTableHeader from "./CryptopTableHeader.tsx";

const CryptoWatchlist = () => {
  const { data: coins, isLoading, isError, error } = useCoinsMarkets();

  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1 className="text-2xl mb-2 font-semibold">Crypto Watchlist</h1>
      <Table className="table-fixed w-full">
        <CryptopTableHeader />
        <TableBody>
          {isLoading
            ? Array.from({ length: 10 }).map((_, i) => (
                <CryptoTableRowSkeleton key={i} />
              ))
            : coins?.map((coin, index) => (
                <CryptoTableRow key={coin.id} coin={coin} index={index + 1} />
              ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default CryptoWatchlist;
