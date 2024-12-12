import { Code2, Cpu, Database, Globe2 } from 'lucide-react';

export const AboutHero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-blue-900 to-blue-950 text-white py-24">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072')] bg-cover bg-center opacity-10"></div>
      <div className="container mx-auto px-4 relative">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-indigo-200">
                Apasionado por la Tecnología
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Ingeniero y programador dedicado a crear soluciones innovadoras y compartir conocimientos 
                en el fascinante mundo del desarrollo web y la tecnología.
              </p>
            </div>
            <div className="w-64 h-64 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full animate-pulse"></div>
              <img 
                src="https://res.cloudinary.com/dwbe8zbpn/image/upload/v1734044211/steven_vsaler.png"
                alt="Tu foto profesional"
                className="absolute  inset-2 object-contain w-full h-full rounded-full border-4 border-white shadow-xl"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {[
              { icon: <Code2 className="w-8 h-8" />, text: "Desarrollo Web" },
              { icon: <Database className="w-8 h-8" />, text: "Arquitectura de Software" },
              { icon: <Cpu className="w-8 h-8" />, text: "Sistemas Distribuidos" },
              { icon: <Globe2 className="w-8 h-8" />, text: "Tecnologías Cloud" },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                {item.icon}
                <span className="mt-2 text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};