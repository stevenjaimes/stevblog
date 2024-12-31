import { Link } from 'react-router-dom';
import { BookOpen, Code, Sparkles } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="relative w-full h-[70vh] text-white overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 min-w-full min-h-full w-auto h-auto object-cover z-0"
      >
        <source
          src="https://res.cloudinary.com/dwbe8zbpn/video/upload/v1735595677/5364-183788428_tiny_wfv3q9.webm"
          type="video/mp4"
        />
          {/* Fallback image if video fails to load */}
                <img 
          src=""
          alt="Coding background"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </video>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70 h-auto"></div>
      
      <div className="container mx-auto relative h-full flex items-center">
        <div className="max-w-3xl mx-auto text-center px-4">
          <div className="flex items-center justify-center mb-6 animate-bounce">
            <Code className="w-12 h-12" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Bienvenido a <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">stevdevblog</span>
          </h1>
          <p className="text-xl mb-8 text-gray-200 leading-relaxed">
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
              className="inline-flex items-center bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-600 transition-all duration-200 transform hover:-translate-y-1 border border-purple-500"
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