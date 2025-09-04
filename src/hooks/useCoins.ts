import { fetchMarkets } from "@/services/fetchMarkets.ts";
import { fetchSearch } from "@/services/fetchSearch.ts";
import { useQuery } from "@tanstack/react-query";

export const useCoins = (searchTerm: string) => {
  const { data: searchResults, isFetching: isSearching } = useQuery({
    queryKey: ["search", searchTerm],
    queryFn: () => fetchSearch(searchTerm),
    enabled: !!searchTerm,
  });

  const searchIds = searchResults?.map((coin) => coin.id);

  const hasSearchedWithNoResults =
    !!searchTerm && !isSearching && searchResults?.length === 0;

  const {
    data: markets,
    isLoading: isLoadingMarkets,
    isError: isMarketsError,
    error: marketsError,
    refetch,
  } = useQuery({
    queryKey: ["markets", searchTerm, searchIds],
    queryFn: () => {
      if (hasSearchedWithNoResults) {
        return [];
      }

      return fetchMarkets(searchIds);
    },

    enabled: !searchTerm || !isSearching,
  });

  return {
    coins: markets ?? [],
    isError: isMarketsError,
    isLoading: isLoadingMarkets || isSearching,
    error: marketsError,
    refetch,
  };
};
