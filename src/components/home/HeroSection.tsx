import { Link } from 'react-router-dom';
import { BookOpen, Code, Sparkles } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="relative w-full bg-gradient-to-br from-purple-600 via-purple-700 to-blue-800 text-white py-24 -mt-16 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97')] bg-cover bg-center opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/90 via-purple-700/90 to-blue-800/90"></div>
      
      <div className="container mx-auto relative">
        <div className="max-w-3xl mx-auto text-center px-4">
          <div className="flex items-center justify-center mb-6 animate-bounce">
            <Code className="w-12 h-12" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Bienvenido a <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-blue-200">stevdevblog</span>
          </h1>
          <p className="text-xl mb-8 text-purple-100 leading-relaxed">
            Explora artículos sobre desarrollo web, React, TypeScript y más. 
            Aprende las mejores prácticas y mantente actualizado con las últimas tecnologías.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/blog" 
              className="inline-flex items-center bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-all duration-200 transform hover:-translate-y-1"
            >
              <BookOpen className="w-5 h-5 mr-2" />
              Explorar Blog
            </Link>
            <Link 
              to="/categories" 
              className="inline-flex items-center bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-600 transition-all duration-200 transform hover:-translate-y-1"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Ver Categorías
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};