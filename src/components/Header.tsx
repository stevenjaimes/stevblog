import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { user, isAdmin, signOut } = useAuth();

  const isActiveRoute = (path: string) => {
    return location.pathname === path;
  };

  const navItems = [
    { path: '/', label: 'Inicio' },
    { path: '/blog', label: 'Blog' },
    { path: '/about', label: 'Acerca de' }
  ];

  // Si el usuario es admin, añadimos el enlace al panel de administración
  if (isAdmin) {
    navItems.push({ path: '/admin', label: 'Admin' });
  }

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-lg">
      <div className="max-w-[2000px] mx-auto">
        <nav className="flex justify-between items-center h-16 px-6">
          <Link to="/" className="text-2xl font-bold tracking-tight hover:text-purple-100 transition-colors flex items-center">
            <span className="text-3xl mr-2">📝</span>
            <span className="hidden sm:inline">stevdevblog</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map(item => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                  isActiveRoute(item.path)
                    ? 'bg-white/20 text-white font-medium'
                    : 'hover:bg-white/10 text-white/90 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}

            {user ? (
              <button
                onClick={handleSignOut}
                className="ml-4 px-4 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
              >
                Cerrar Sesión
              </button>
            ) : (
              <Link
                to="/login"
                className="ml-4 px-4 py-2 rounded-lg bg-white text-purple-600 hover:bg-purple-50 transition-colors"
              >
                Iniciar Sesión
              </Link>
            )}
          </div>

          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </nav>

        {/* Menú móvil */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-gradient-to-r from-purple-600 to-blue-500 shadow-lg">
            <div className="px-4 py-2">
              {navItems.map(item => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block py-2 px-4 rounded-lg my-1 transition-colors ${
                    isActiveRoute(item.path)
                      ? 'bg-white/20 text-white font-medium'
                      : 'text-white/90 hover:bg-white/10 hover:text-white'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              {user ? (
                <button
                  onClick={() => {
                    handleSignOut();
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left py-2 px-4 rounded-lg my-1 text-white/90 hover:bg-white/10 hover:text-white transition-colors"
                >
                  Cerrar Sesión
                </button>
              ) : (
                <Link
                  to="/login"
                  className="block py-2 px-4 rounded-lg my-1 bg-white text-purple-600 hover:bg-purple-50 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Iniciar Sesión
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
