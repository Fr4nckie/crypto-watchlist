/**
 * Calcutate the percentage change between the first and last value in a number array
 * @param data - Array of number (e.g., prices over time)
 * @return The percentage change from the first value to last value. Return 0 if data is missing or invalid.
 */
export const calculateChangePercent = (data: number[] | undefined): number => {
  if (!data || data.length === 0) return 0;

  const first = data[0];
  const last = data[data.length - 1];

  if (!first || isNaN(first) || isNaN(last)) return 0;

  return ((last - first) / first) * 100;
};
