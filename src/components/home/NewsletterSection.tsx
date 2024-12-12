import { Mail } from 'lucide-react';

export const NewsletterSection = () => {
  return (
    <section className="w-full py-20 bg-gray-900 text-white">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Mail className="w-12 h-12 mx-auto mb-6 text-purple-400" />
          <h2 className="text-3xl font-bold mb-4">
            Suscríbete a nuestro newsletter
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Recibe las últimas actualizaciones, tutoriales y recursos directamente en tu bandeja de entrada. Sin spam, solo contenido valioso para desarrolladores.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="tu@email.com"
              className="flex-1 px-6 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-200"
            >
              Suscribirse
            </button>
          </form>
          
          <p className="text-sm text-gray-400 mt-4">
            Puedes darte de baja en cualquier momento. Lee nuestra Política de Privacidad.
          </p>
        </div>
      </div>
    </section>
  );
};