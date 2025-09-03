import { cn } from "@/lib/utils.ts";
import { Loader2 } from "lucide-react";
import type { ReactNode } from "react";

interface SpinnerProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

const Spinner = ({ size = "md", className }: SpinnerProps): ReactNode => {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-6 w-6",
    lg: "h-8 w-8",
    xl: "h-12 w-12",
  };

  return (
    <Loader2
      className={cn("animate-spin text-current", sizeClasses[size], className)}
    />
  );
};

export default Spinner;
