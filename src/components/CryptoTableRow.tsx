import { formatMarketCap } from "@/utils/formatMarketCap.ts";
import { TableCell, TableRow } from "./ui/table.tsx";
import type { Coin } from "@/types/types.ts";
import { Link } from "react-router-dom";

type CryptoTableRowProps = {
  index: number;
  coin: Coin;
};

const CryptoTableRow = ({ index, coin }: CryptoTableRowProps) => {
  const {
    name,
    image,
    current_price,
    price_change_percentage_24h,
    market_cap,
  } = coin;

  return (
    <TableRow>
      <TableCell className="md:w-10">{index}</TableCell>
      <TableCell>
        <Link
          to={`/coin/${coin.id}`}
          className="md:w-48 flex items-center gap-2"
        >
          <img
            src={image}
            alt={name}
            className="w-8 h-8 object-cover"
            loading="lazy"
          />
          <span className="font-semibold truncate hover:underline">{name}</span>
        </Link>
      </TableCell>
      <TableCell className="md:w-32 md:text-right">
        <Link to={`/coin/${coin.id}`}>
          ${current_price.toLocaleString("en-US")}
        </Link>
      </TableCell>
      <TableCell
        className={`md:w-24 md:text-right ${
          price_change_percentage_24h > 0 ? "text-green-500" : "text-red-500"
        }`}
      >
        {price_change_percentage_24h
          ? price_change_percentage_24h.toFixed(2)
          : 0}
        %
      </TableCell>
      <TableCell className="md:w-40 md:text-right">
        {formatMarketCap(market_cap)}
      </TableCell>
    </TableRow>
  );
};

export default CryptoTableRow;
