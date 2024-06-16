// CardList.tsx
import React from 'react';
import { FaAngular, FaLaravel, FaNodeJs } from 'react-icons/fa';
import { FaPhp, FaBootstrap, FaHtml5, FaJs } from 'react-icons/fa';
const CardList: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 ">
      {/* Tarjeta 1 */}
      <div className="bg-secondary  cardL shadow-md rounded-lg overflow-hidden flex flex-col md:flex-row p-2 w-full md:w-96 h-56">
        <img
          src="/facturacion.png"
          alt="Imagen Proyecto 1"
          className=" w-20 h-20 items-center justify-center object-cover md:w-24 md:h-24 border-2 border-purple-900 rounded-md"
        />
        <div className="textCC p-2 flex flex-col justify-center items-center md:flex-grow text-center">
          <h3 className="text-sm md:text-base font-bold mb-1">Facturación Electrónica</h3>
          <p className="text-xs md:text-sm text-gray-600 mb-1">
            Es un software que facilita la generación de Comprobantes Digitales a través de Internet de acuerdo con los requisitos establecidos en las leyes SRI vigentes. Al emitir una factura digital, este software las envía al destinatario por correo electrónico.
          </p>
          <div className="flex gap-1 mb-1 justify-center">
            <FaAngular className="text-red-600" />
            <FaLaravel className="text-pink-600" />
            <FaNodeJs className="text-green-600" />
          </div>
          <a
            href="https://github.com/jess026p/FacturacionElectronica2.0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-1.5 py-0.5 rounded-md transition-colors duration-300 text-xs"
          >
            Visitar GitHub
          </a>
        </div>
      </div>

      {/* Tarjeta 2 */}
      <div className="bg-secondary  cardL shadow-md rounded-lg overflow-hidden flex flex-col md:flex-row p-2 w-full md:w-96 h-56">
        <img
          src="/wpp.png"
          alt="Imagen Proyecto 1"
          className=" w-20 h-20 items-center justify-center object-cover md:w-24 md:h-24 border-2 border-purple-900 rounded-md"
        />
        <div className="textCC p-2 flex flex-col justify-center items-center md:flex-grow text-center">
          <h3 className="text-sm md:text-base font-bold mb-1">Whatsapp  web</h3>
          <p className="text-xs md:text-sm text-gray-600 mb-1">
          WhatsApp es una aplicación de mensajería instantánea con llamadas de audio y vídeo. También cuenta con cifrado de mensajes, manteniendo segura la información de nuestros usuarios.</p>
          <div className="flex gap-1 mb-1 justify-center">
            <FaPhp className="text-violet-700" />
            <FaLaravel className="text-pink-600" />
            <FaJs className="text-yellow-600" />
            <FaBootstrap className="text-blue-300" />
          </div>
          <a
            href="https://github.com/jess026p/WhatsApp-Segurity"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-1.5 py-0.5 rounded-md transition-colors duration-300 text-xs"
          >
            Visitar GitHub
          </a>
        </div>
      </div>

      {/* Tarjeta 3 */}
      <div className="bg-secondary  cardL shadow-md rounded-lg overflow-hidden flex flex-col md:flex-row p-2 w-full md:w-96 h-56">
        <img
          src="/simulador.png"
          alt="Imagen Proyecto 1"
          className=" w-20 h-20 items-center justify-center object-cover md:w-24 md:h-24 border-2 border-purple-900 rounded-md"
        />
        <div className="textCC p-2 flex flex-col justify-center items-center md:flex-grow text-center">
          <h3 className="text-sm md:text-base font-bold mb-1">Simulador de Credito e Inversiones</h3>
          <p className="text-xs md:text-sm text-gray-600 mb-1">
          Este sistema calcula las cuotas y rentabilidad del crédito o inversión según el método alemán o francés, también cuenta con administración de perfiles de usuarios para empresas, además de configurar el tipo de crédito y agregar cargos indirectos al crédito. </p>
          <div className="flex gap-1 mb-1 justify-center">
            <FaPhp className="text-violet-700" />
            <FaBootstrap className="text-blue-300" />
            <FaHtml5 className="text-red-300"/>
            <FaJs className="text-yellow-600" />
          </div>
          <a
            href="https://github.com/jess026p/FacturacionElectronica2.0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-1.5 py-0.5 rounded-md transition-colors duration-300 text-xs"
          >
            Visitar GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardList;
