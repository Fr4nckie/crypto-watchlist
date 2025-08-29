import Searchbar from "./Searchbar.tsx";

const Header = () => {
  return (
    <header className="w-full shadow py-3 sticky top-0 z-20 bg-card mb-6">
      <div className="container mx-auto px-4">
        <Searchbar />
      </div>
    </header>
  );
};

export default Header;
