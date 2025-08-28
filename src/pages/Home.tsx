import CryptoWatchlist from "@/components/CryptoWatchlist.tsx";
import Searchbar from "@/components/Searchbar.tsx";

const Home = () => {
  return (
    <div className="mx-auto container px-4 mb-6">
      <header className="w-full flex items-center gap-4 py-3">
        <Searchbar />
      </header>
      <div>
        <CryptoWatchlist />
      </div>
    </div>
  );
};

export default Home;
