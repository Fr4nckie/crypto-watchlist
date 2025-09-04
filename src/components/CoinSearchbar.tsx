import { useSearchStore } from "@/store/useSearchStore.ts";
import { Input } from "./ui/input.tsx";
import { type ChangeEvent, type JSX } from "react";

const CoinSearchbar = (): JSX.Element => {
  const searchTerm = useSearchStore((state) => state.searchTerm);
  const setSearchTerm = useSearchStore((state) => state.setSearchTerm);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="flex-1">
      <Input
        type="search"
        placeholder="Search a coin..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default CoinSearchbar;
