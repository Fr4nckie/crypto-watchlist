import CryptoWatchlist from "@/components/CryptoWatchlist.tsx";
import Header from "@/components/Header.tsx";

const Root = () => {
  return (
    <div>
      <Header />
      <div className="container mx-auto px-4 mb-12">
        <CryptoWatchlist />
      </div>
    </div>
  );
};

export default Root;
