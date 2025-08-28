import { Table, TableBody, TableCell, TableRow } from "./ui/table.tsx";
import { useCoinsByQuery } from "@/hooks/useCoinsByQuery.ts";
import { Link } from "react-router-dom";

type SearchResultsProps = {
  term: string;
};

const SearchResults = ({ term }: SearchResultsProps) => {
  const { data: results, isLoading, isError, error } = useCoinsByQuery(term);

  if (isLoading) return <div>Search...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <Table className="table-fixed w-full">
      <TableBody>
        {results &&
          results.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="w-20">
                <Link to={`/coin/${item.id}`}>
                  <img src={item.thumb} alt={item.name} />
                </Link>
              </TableCell>
              <TableCell className="font-semibold truncate">
                <Link to={`/coin/${item.id}`} className="hover:underline">
                  {item.name}
                </Link>
              </TableCell>
              <TableCell className="hidden sm:block">
                <Link to={`/coin/${item.id}`} className="hover:underline">
                  Market Rank: {item.market_cap_rank}
                </Link>
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
};

export default SearchResults;
