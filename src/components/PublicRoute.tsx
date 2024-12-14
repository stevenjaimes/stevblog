import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext'; // Asegúrate de usar tu contexto de autenticación

interface PublicRouteProps {
  children: JSX.Element;
}

export const PublicRoute: React.FC<PublicRouteProps> = ({ children }) => {
  const { user } = useAuth(); // currentUser indica si hay un usuario autenticado

  // Si hay un usuario autenticado, redirigir a la página de inicio segura (ejemplo: /admin)
  if (user) {
    return <Navigate to="/" replace />;
  }

  // Si no hay usuario autenticado, renderizar la página solicitada
  return children;
};
