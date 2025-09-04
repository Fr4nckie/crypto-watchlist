import { cn } from "@/lib/utils.ts";
import { TableCell, TableRow } from "./ui/table.tsx";
import type { Coin } from "@/types/types.ts";
import { formatCompactNumber } from "@/utils/formatCompactNumber.ts";
import type { JSX } from "react";
import { Link } from "react-router-dom";

type CoinTableRowProps = {
  rank: number;
  coin: Coin;
};

const CoinTableRow = ({ rank, coin }: CoinTableRowProps): JSX.Element => {
  const {
    id,
    name,
    image,
    current_price,
    price_change_percentage_24h,
    market_cap,
  } = coin;

  const isPriceUp = price_change_percentage_24h > 0;

  return (
    <TableRow>
      <TableCell className="md:w-10">{rank}</TableCell>
      <TableCell>
        <Link to={`/${id}`} className="md:w-48 flex items-center gap-2">
          <img
            src={image}
            alt={`${name} logo`}
            className="w-8 h-8 object-cover"
            loading="lazy"
          />
          <span className="font-semibold truncate hover:underline">{name}</span>
        </Link>
      </TableCell>
      <TableCell className="md:w-32 md:text-right">
        <Link to={`/${id}`}>${current_price.toLocaleString("en-US")}</Link>
      </TableCell>
      <TableCell
        className={cn(
          "md:w-24 md:text-right",
          isPriceUp ? "text-green-500" : "text-red-500"
        )}
      >
        {price_change_percentage_24h
          ? price_change_percentage_24h.toFixed(2)
          : 0}
        %
      </TableCell>
      <TableCell className="md:w-40 md:text-right">
        {formatCompactNumber(market_cap, { decimals: 1 })}
      </TableCell>
    </TableRow>
  );
};

export default CoinTableRow;
