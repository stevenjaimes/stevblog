import { Code, Layout, Lightbulb, Terminal, Palette, Rocket } from 'lucide-react';

const features = [
  {
    icon: <Code className="w-8 h-8" />,
    title: "Desarrollo Web",
    description: "Tutoriales y guías sobre las últimas tecnologías web"
  },
  {
    icon: <Terminal className="w-8 h-8" />,
    title: "React & TypeScript",
    description: "Mejores prácticas y patrones de diseño modernos"
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "UI/UX",
    description: "Diseño de interfaces y experiencia de usuario"
  },
  {
    icon: <Layout className="w-8 h-8" />,
    title: "Arquitectura",
    description: "Patrones y mejores prácticas de arquitectura de software"
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: "Tips & Trucos",
    description: "Consejos prácticos para mejorar tu código"
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: "Performance",
    description: "Optimización y mejora del rendimiento web"
  }
];

export const FeaturesSection = () => {
  return (
    <section className="w-full py-20 bg-white">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              ¿Qué encontrarás en stevdevblog?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explora nuestras diferentes categorías y temas para mejorar tus habilidades como desarrollador
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="p-8 rounded-xl bg-gray-50 hover:bg-purple-50 transition-colors duration-300 group"
              >
                <div className="text-purple-600 mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};