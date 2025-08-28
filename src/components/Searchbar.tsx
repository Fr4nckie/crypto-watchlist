import { useEffect, useRef, useState } from "react";
import { Input } from "./ui/input.tsx";
import SearchResults from "./SearchResults.tsx";
import { useDebounce } from "@/hooks/useDebounce.ts";

const Searchbar = () => {
  const [term, setTerm] = useState("");
  const [isActive, setIsActive] = useState(false);
  const deboucedTerm = useDebounce(term, 350);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsActive(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="w-full relative" ref={containerRef}>
      <form className="flex-1">
        <Input
          type="search"
          placeholder="Search a coin..."
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          onFocus={() => setIsActive(true)}
        />
      </form>
      {isActive && (
        <div className="absolute w-full bg-card z-10 h-auto min-h-28 max-h-55 overflow-y-auto shadow-lg rounded p-4">
          <SearchResults term={deboucedTerm} />
        </div>
      )}
    </div>
  );
};

export default Searchbar;
