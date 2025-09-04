import { AlertCircleIcon } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert.tsx";
import type { ReactNode } from "react";

type ErrorElementProps = {
  message: string;
  children?: ReactNode;
};

const ErrorElement = ({ message, children }: ErrorElementProps) => {
  return (
    <Alert variant={"destructive"} className="w-fit">
      <AlertCircleIcon />
      <AlertTitle>{message}</AlertTitle>
      {children && <AlertDescription>{children}</AlertDescription>}
    </Alert>
  );
};

export default ErrorElement;
