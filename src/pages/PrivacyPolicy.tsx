import { Shield, Lock, Eye, FileText, Bell, Users, Globe, HelpCircle } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <div className="text-center mb-12">
          <Shield className="w-16 h-16 mx-auto text-indigo-600 mb-4" />
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Política de Privacidad</h1>
          <p className="text-gray-600">Última actualización: {new Date().toLocaleDateString()}</p>
        </div>

        <div className="space-y-8">
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Lock className="w-6 h-6 text-indigo-600" />
              <h2 className="text-xl font-semibold text-gray-900">Información que recopilamos</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Recopilamos la información que nos proporcionas directamente cuando utilizas nuestro blog, incluyendo tu nombre, dirección de correo electrónico y cualquier comentario o contenido que publiques.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-2 mb-4">
              <Eye className="w-6 h-6 text-indigo-600" />
              <h2 className="text-xl font-semibold text-gray-900">Cómo usamos tu información</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Usamos la información que recopilamos para proporcionar y mejorar los servicios de nuestro blog, comunicarnos contigo y garantizar una mejor experiencia de usuario.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-2 mb-4">
              <FileText className="w-6 h-6 text-indigo-600" />
              <h2 className="text-xl font-semibold text-gray-900">Cookies y seguimiento</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Usamos cookies y tecnologías de seguimiento similares para rastrear la actividad en nuestro blog y almacenar cierta información para mejorar tu experiencia.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-2 mb-4">
              <Bell className="w-6 h-6 text-indigo-600" />
              <h2 className="text-xl font-semibold text-gray-900">Comunicaciones</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Podemos usar tu dirección de correo electrónico para enviarte actualizaciones del blog, boletines informativos o comunicaciones de marketing. Puedes darte de baja de estas comunicaciones en cualquier momento.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-2 mb-4">
              <Users className="w-6 h-6 text-indigo-600" />
              <h2 className="text-xl font-semibold text-gray-900">Compartir información</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              No vendemos, comercializamos ni transferimos tu información personal identificable a terceros sin tu consentimiento.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-2 mb-4">
              <Globe className="w-6 h-6 text-indigo-600" />
              <h2 className="text-xl font-semibold text-gray-900">Seguridad de los datos</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Implementamos medidas de seguridad adecuadas para proteger tu información personal contra el acceso, alteración o divulgación no autorizados.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-2 mb-4">
              <HelpCircle className="w-6 h-6 text-indigo-600" />
              <h2 className="text-xl font-semibold text-gray-900">Contáctanos</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Si tienes alguna pregunta sobre esta Política de Privacidad, por favor contáctanos en hensteve250@gmail.com.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
