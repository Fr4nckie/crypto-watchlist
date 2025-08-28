export const formatMarketCap = (value: number) => {
  if (value >= 1_000_000_000_000) {
    // Un trillion
    return `$${(value / 1_000_000_000_000).toFixed(1)} T`;
  } else if (value >= 1_000_000_000) {
    // Un milliard
    return `$${(value / 1_000_000_000).toFixed(1)} B`;
  } else if (value >= 1_000_000) {
    // Un million
    return `$${(value / 1_000_000).toFixed(1)} M`;
  } else if (value >= 1_000) {
    // Un millier
    return `$${(value / 1_000).toFixed(1)} K`;
  } else {
    return `$${value}`; // Valeur directe si inférieure à 1000
  }
};
