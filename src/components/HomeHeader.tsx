import type { JSX } from "react";
import CoinSearchbar from "./CoinSearchbar.tsx";

const HomeHeader = (): JSX.Element => {
  return (
    <header className="w-full shadow py-3 sticky top-0 z-20 bg-card mb-6">
      <div className="container mx-auto px-4">
        <CoinSearchbar />
      </div>
    </header>
  );
};

export default HomeHeader;
