import { useEffect, useState } from "react";

export const useDebounce = <T>(value: T, delay: number = 300) => {
  const [debouncedValue, setDeboucedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDeboucedValue(value);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
};
