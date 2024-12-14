import { AlertCircle } from 'lucide-react';
import { Alert, AlertDescription } from '../ui/Alert';

interface AuthErrorProps {
  message: string;
}

export const AuthError = ({ message }: AuthErrorProps) => {
  return (
    <Alert variant="destructive" className="mb-6">
      <AlertCircle className="h-4 w-4" />
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  );
};