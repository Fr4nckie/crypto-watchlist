import type { JSX } from "react";
import { Skeleton } from "./ui/skeleton.tsx";
import { TableCell, TableRow } from "./ui/table.tsx";

const CoinTableRowSkeleton = (): JSX.Element => {
  return (
    <TableRow>
      {/* Colonne index */}
      <TableCell className="md:w-10">
        <Skeleton className="h-3 w-3 rounded" />
      </TableCell>

      {/* Colonne Name */}
      <TableCell className="md:w-48 flex items-center gap-2">
        <Skeleton className="w-8 h-8 rounded-full" />
        <Skeleton className="h-3 w-24" />
      </TableCell>

      {/* Colonne Price */}
      <TableCell className="md:w-32 md:text-right">
        <Skeleton className="h-3 w-20 ml-auto" />
      </TableCell>

      {/* Colonne 24h */}
      <TableCell className="md:w-24 md:text-right">
        <Skeleton className="h-3 w-16 ml-auto" />
      </TableCell>

      {/* Colonne Market Cap */}
      <TableCell className="md:w-40 md:text-right">
        <Skeleton className="h-3 w-24 ml-auto" />
      </TableCell>
    </TableRow>
  );
};

export default CoinTableRowSkeleton;
