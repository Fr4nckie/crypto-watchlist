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

  const {
    data: markets,
    isLoading: isLoadingMarkets,
    isError: isMarketsError,
    error: marketsError,
    refetch,
  } = useQuery({
    queryKey: ["markets", searchTerm, searchIds],
    queryFn: () => {
      if (searchTerm && searchResults?.length === 0) {
        return Promise.resolve([]);
      }

      return fetchMarkets(
        searchIds && searchIds.length > 0 ? searchIds : undefined
      );
    },
    enabled: Boolean(
      !isSearching && (!searchTerm || (searchTerm && !!searchIds))
    ),
  });

  return {
    coins: markets ?? [],
    isError: isMarketsError,
    isLoading: isSearching || isLoadingMarkets,
    error: marketsError,
    refetch,
  };
};
