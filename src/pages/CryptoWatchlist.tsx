import CoinTableRow from "../components/CoinTableRow.tsx";
import { Table, TableBody } from "../components/ui/table.tsx";
import CoinTableRowSkeleton from "../components/CoinTableRowSkeleton.tsx";
import CoinTableHeader from "../components/CoinTableHeader.tsx";
import { useCoins } from "@/hooks/useCoins.ts";
import { useSearchStore } from "@/store/useSearchStore.ts";
import { useDebounce } from "@/hooks/useDebounce.ts";
import ErrorElement from "../components/ErrorElement.tsx";
import { Alert, AlertTitle } from "../components/ui/alert.tsx";
import { Frown } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";

const CryptoWatchlist = () => {
  const searchTerm = useSearchStore((state) => state.searchTerm);
  const deboucedSearchTerm = useDebounce(searchTerm, 350);
  const { coins, isLoading, isError, error, refetch } =
    useCoins(deboucedSearchTerm);

  if (isError)
    return (
      <div className="w-full flex justify-center mt-12">
        <ErrorElement message={error?.message as string}>
          <Button onClick={() => refetch()} className="w-full mt-3">
            Reload
          </Button>
        </ErrorElement>
      </div>
    );

  if (coins.length === 0 && !!searchTerm && !isLoading) {
    return (
      <Alert>
        <Frown />
        <AlertTitle>No results found.</AlertTitle>
      </Alert>
    );
  }

  return (
    <div>
      <h1 className="text-2xl mb-2 font-semibold">Crypto Watchlist</h1>
      <Table className="table-fixed w-full">
        <CoinTableHeader />
        <TableBody>
          {isLoading
            ? Array.from({ length: 5 }).map((_, i) => (
                <CoinTableRowSkeleton key={i} />
              ))
            : coins?.map((coin, index) => (
                <CoinTableRow key={coin.id} coin={coin} rank={index + 1} />
              ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default CryptoWatchlist;
