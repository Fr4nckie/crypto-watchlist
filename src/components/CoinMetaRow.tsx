import type { JSX, ReactNode } from "react";

type CoinMetaRowProps = {
  label: string;
  value: ReactNode;
};

const CoinMetaRow = ({ label, value }: CoinMetaRowProps): JSX.Element => {
  return (
    <div className="flex sm:flex-col items-center justify-between">
      <p className="text-gray-700 font-medium truncate">{label}</p>
      <p className="text-xl font-semibold">{value}</p>
    </div>
  );
};

export default CoinMetaRow;
