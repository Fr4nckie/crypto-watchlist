import type { ReactNode } from "react";
import { TableHead, TableHeader, TableRow } from "./ui/table.tsx";

const CoinTableHeader = (): ReactNode => {
  return (
    <TableHeader>
      <TableRow>
        <TableHead className="w-8 md:w-10">Rank</TableHead>
        <TableHead className="md:w-48">Name</TableHead>
        <TableHead className="md:w-32 md:text-right">Price</TableHead>
        <TableHead className="md:w-24 md:text-right">24h Change</TableHead>
        <TableHead className="md:w-40 md:text-right truncate">
          Market Cap
        </TableHead>
      </TableRow>
    </TableHeader>
  );
};

export default CoinTableHeader;
