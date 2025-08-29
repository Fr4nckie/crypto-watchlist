import { AlertCircleIcon } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert.tsx";
import { Button } from "./ui/button.tsx";

type ErrorElementProps = {
  message: string;
  refetch: () => void;
};

const ErrorElement = ({ message, refetch }: ErrorElementProps) => {
  return (
    <Alert variant={"destructive"} className="w-fit">
      <AlertCircleIcon />
      <AlertTitle>{message}</AlertTitle>
      <AlertDescription className="mt-2">
        <Button onClick={refetch} variant={"destructive"} size={"sm"} className="w-full">Reload</Button>
      </AlertDescription>
    </Alert>
  );
};

export default ErrorElement;
