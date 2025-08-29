import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface SearchState {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}

export const useSearchStore = create(
  immer<SearchState>((set) => ({
    searchTerm: "",
    setSearchTerm: (value) =>
      set((state) => {
        state.searchTerm = value;
      }),
  }))
);
