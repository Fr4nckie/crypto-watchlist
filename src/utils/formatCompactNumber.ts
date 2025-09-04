type FormatCompactNumberOptions = {
  decimals?: number;
  currencySymbol?: string;
};

export const formatCompactNumber = (
  value: number,
  options: FormatCompactNumberOptions = {}
) => {
  const { decimals, currencySymbol = "$" } = options;

  if (value === 0) {
    return `${currencySymbol}0`;
  }

  const isNegative = value < 0;
  const absValue = Math.abs(value);

  const tiers = [
    { value: 1e12, symbol: "T" },
    { value: 1e9, symbol: "B" },
    { value: 1e6, symbol: "M" },
    { value: 1e3, symbol: "k" },
  ];

  const foundTier = tiers.find((tier) => absValue >= tier.value);

  let formattedValue: string;

  if (foundTier) {
    const formattedNum = (absValue / foundTier.value).toFixed(decimals);
    formattedValue = `${parseFloat(formattedNum)}${foundTier.symbol}`;
  } else {
    formattedValue = absValue.toString();
  }

  return `${isNegative ? "-" : ""}${currencySymbol}${formattedValue}`;
};
