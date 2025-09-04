import HomeHeader from "@/components/HomeHeader.tsx";
import CryptoWatchlist from "./CryptoWatchlist.tsx";

const Home = () => {
  return (
    <div>
      <HomeHeader />
      <div className="container mx-auto px-4 mb-12">
        <CryptoWatchlist />
      </div>
    </div>
  );
};

export default Home;
