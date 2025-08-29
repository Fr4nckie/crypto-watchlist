import { useSearchStore } from "@/store/useSearchStore.ts";
import { Input } from "./ui/input.tsx";
import type { ChangeEvent } from "react";

const Searchbar = () => {
  const searchTerm = useSearchStore((state) => state.searchTerm);
  const setSearchTerm = useSearchStore((state) => state.setSearchTerm);

  const onSearchTermChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <form className="flex-1">
      <Input
        type="search"
        placeholder="Search a coin..."
        value={searchTerm}
        onChange={onSearchTermChange}
      />
    </form>
  );
};

export default Searchbar;
