import { Github, Linkedin, Mail } from 'lucide-react';

export const AboutContent = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Mi Pasión por la Ingeniería
            </h2>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Desde que escribí mi primera línea de código, supe que había encontrado mi verdadera pasión. 
              Como programador, me fascina la capacidad de crear soluciones que impactan 
              positivamente en la vida de las personas. Mi enfoque se centra en el desarrollo de 
              aplicaciones web robustas y escalables, siempre buscando el equilibrio perfecto entre 
              la innovación tecnológica y la experiencia del usuario.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Experiencia y Especialización
            </h2>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Mi experiencia abarca desde el desarrollo frontend con React y TypeScript hasta la 
              implementación de arquitecturas backend complejas. Me apasiona especialmente el 
              diseño de sistemas distribuidos y la optimización de rendimiento. Constantemente 
              me mantengo actualizado con las últimas tendencias y tecnologías, participando 
              activamente en la comunidad de desarrollo.
            </p>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl mb-12">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Áreas de Interés
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Arquitectura de Software y Patrones de Diseño</li>
                <li>• Desarrollo Full-Stack con tecnologías modernas</li>
                <li>• Sistemas Distribuidos y Microservicios</li>
                <li>• DevOps y Automatización de Procesos</li>
                <li>• Inteligencia Artificial y Machine Learning</li>
              </ul>
            </div>

            <div className="bg-gray-900 text-white p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-6">Conectemos</h3>
              <p className="mb-6">
                ¿Tienes un proyecto interesante o simplemente quieres charlar sobre tecnología? 
                ¡Me encantaría conectar contigo!
              </p>
              <div className="flex justify-center space-x-6">
                <a href="#" className="hover:text-blue-400 transition-colors">
                  <Github className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};