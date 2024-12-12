export const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Banner Section */}
      <section className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-20 -mt-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Sobre Nosotros
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Descubre quiénes somos y nuestra pasión por compartir conocimiento 
              en el mundo del desarrollo web y la tecnología.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Nuestro Blog
            </h2>
            <p className="text-gray-600 mb-6">
              Bienvenido a stevdevblog, un espacio dedicado a compartir conocimientos y experiencias 
              sobre desarrollo web, programación y tecnología. Nuestro objetivo es proporcionar 
              contenido de calidad que ayude tanto a principiantes como a desarrolladores experimentados 
              a mantenerse actualizados con las últimas tendencias y mejores prácticas.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Nuestra Misión
            </h2>
            <p className="text-gray-600 mb-6">
              Nuestra misión es hacer que el aprendizaje de la programación sea accesible y 
              agradable para todos. Creemos en el poder de compartir conocimientos y en la 
              importancia de construir una comunidad fuerte de desarrolladores.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Tecnologías
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gray-50 p-4 rounded-lg text-center hover:bg-gray-100 transition-colors">
                <span className="text-4xl mb-2 block">⚛️</span>
                <span className="text-gray-700 font-medium">React</span>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center hover:bg-gray-100 transition-colors">
                <span className="text-4xl mb-2 block">📘</span>
                <span className="text-gray-700 font-medium">TypeScript</span>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center hover:bg-gray-100 transition-colors">
                <span className="text-4xl mb-2 block">🎨</span>
                <span className="text-gray-700 font-medium">Tailwind CSS</span>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center hover:bg-gray-100 transition-colors">
                <span className="text-4xl mb-2 block">⚡</span>
                <span className="text-gray-700 font-medium">Vite</span>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center hover:bg-gray-100 transition-colors">
                <span className="text-4xl mb-2 block">🔥</span>
                <span className="text-gray-700 font-medium">Supabase</span>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center hover:bg-gray-100 transition-colors">
                <span className="text-4xl mb-2 block">🚀</span>
                <span className="text-gray-700 font-medium">Node.js</span>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Contacto
            </h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-600 mb-4">
                ¿Tienes alguna pregunta o sugerencia? No dudes en contactarnos a través de 
                nuestras redes sociales o por correo electrónico.
              </p>
              <div className="flex justify-center space-x-6">
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                  <span className="text-2xl">📧</span>
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                  <span className="text-2xl">💬</span>
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                  <span className="text-2xl">📱</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
