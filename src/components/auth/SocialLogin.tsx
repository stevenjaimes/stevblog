import { Button } from '../ui/Button';
import { Chrome } from 'lucide-react';

interface SocialLoginProps {
  onGoogleLogin: () => Promise<void>;
}

export const SocialLogin = ({ onGoogleLogin }: SocialLoginProps) => {
  return (
    <div className="space-y-4">
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-gray-200" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="bg-white px-4 text-gray-500">O continúa con</span>
        </div>
      </div>

      <Button
        type="button"
        variant="outline"
        className="w-full border-2 hover:bg-gray-50"
        onClick={onGoogleLogin}
      >
        <Chrome className="mr-2 h-5 w-5" />
        Iniciar sesión con Google
      </Button>
    </div>
  );
};