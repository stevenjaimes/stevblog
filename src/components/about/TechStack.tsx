import { 
    Blocks, 
    Brain,
    Code,
    Database,
    Globe,
    Layout,
    Server,
    Zap
  } from 'lucide-react';
  
  const technologies = [
    { icon: <Code className="w-6 h-6" />, name: "React", description: "Desarrollo de interfaces modernas" },
    { icon: <Layout className="w-6 h-6" />, name: "TypeScript", description: "Código tipado y seguro" },
    { icon: <Zap className="w-6 h-6" />, name: "Node.js", description: "Backend robusto y escalable" },
    { icon: <Database className="w-6 h-6" />, name: "Supabase", description: "Base de datos en tiempo real" },
    { icon: <Globe className="w-6 h-6" />, name: "Next.js", description: "Aplicaciones web full-stack" },
    { icon: <Server className="w-6 h-6" />, name: "AWS", description: "Infraestructura en la nube" },
    { icon: <Blocks className="w-6 h-6" />, name: "Docker", description: "Containerización" },
    { icon: <Brain className="w-6 h-6" />, name: "ML/AI", description: "Inteligencia artificial" }
  ];
  
  export const TechStack = () => {
    return (
      <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Stack Tecnológico
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div 
                key={index}
                className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors mb-4">
                    {tech.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{tech.name}</h3>
                  <p className="text-sm text-gray-600">{tech.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };