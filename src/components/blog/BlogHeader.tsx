import { BookOpen, Search } from 'lucide-react';


interface BlogHeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export const BlogHeader = ({ searchQuery, onSearchChange }: BlogHeaderProps) => {
  return (
    <section className="relative w-full bg-gradient-to-br from-purple-600 via-purple-700 to-blue-800 text-white py-20 -mt-16">
      <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/dwbe8zbpn/image/upload/v1735667510/programacion_ctpaoj.webp')] bg-cover bg-center opacity-10"></div>
   
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center mb-6">
            <BookOpen className="w-12 h-12" />
          </div>
          <h1 className="text-5xl font-bold mb-6">
            Nuestro Blog
          </h1>
          <p className="text-xl text-purple-100 mb-8">
            Explora artículos sobre desarrollo web, programación y las últimas tendencias tecnológicas.
            Aprende, descubre y mantente actualizado con nuestro contenido.
          </p>
          
          <div className="max-w-2xl mx-auto relative">
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar artículos..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full px-6 py-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-400 pl-12"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/60" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};