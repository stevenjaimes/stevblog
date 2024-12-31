import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { LoginForm } from '../components/auth/LoginForm';
import { SocialLogin } from '../components/auth/SocialLogin';
import { AuthError } from '../components/auth/AuthError';

const Login = () => {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { signIn, loginWithGoogle } = useAuth();

  const handleSubmit = async (email: string, password: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const { error } = await signIn(email, password);
      if (error) throw error;
      navigate('/admin');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al iniciar sesión');
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
      navigate('/admin');
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Error al iniciar sesión con Google');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50">
      <div className="container relative flex min-h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:px-0">
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-3xl font-semibold tracking-tight text-gray-900">
                Bienvenido de nuevo
              </h1>
              <p className="text-sm text-gray-500">
                Ingresa tus credenciales para acceder a tu cuenta
              </p>
            </div>

            <div className="grid gap-6">
              {error && <AuthError message={error} />}
              
              <LoginForm onSubmit={handleSubmit} isLoading={isLoading} />
              
              <SocialLogin onGoogleLogin={handleGoogleLogin} />
            </div>

            <p className="px-8 text-center text-sm text-gray-500">
              ¿No tienes una cuenta?{' '}
              <Link 
                to="/signup" 
                className="underline underline-offset-4 hover:text-gray-900"
              >
                Regístrate aquí
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;