import CryptoTableRow from "./CryptoTableRow.tsx";
import { Table, TableBody } from "./ui/table.tsx";
import CryptoTableRowSkeleton from "./CryptoTableRowSkeleton.tsx";
import CryptopTableHeader from "./CryptopTableHeader.tsx";
import { useCoins } from "@/hooks/useCoins.ts";
import { useSearchStore } from "@/store/useSearchStore.ts";
import { useDebounce } from "@/hooks/useDebounce.ts";
import ErrorElement from "./ErrorElement.tsx";
import { Alert, AlertTitle } from "./ui/alert.tsx";
import { Frown } from "lucide-react";

const CryptoWatchlist = () => {
  const searchTerm = useSearchStore((state) => state.searchTerm);
  const deboucedSearchTerm = useDebounce(searchTerm, 350);
  const { coins, isLoading, isError, error, refetch } =
    useCoins(deboucedSearchTerm);

  if (isError)
    return (
      <div className="w-full flex justify-center mt-12">
        <ErrorElement message={error?.message as string} refetch={refetch} />
      </div>
    );

  if (coins.length === 0) {
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
        <CryptopTableHeader />
        <TableBody>
          {isLoading
            ? Array.from({ length: 5 }).map((_, i) => (
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
