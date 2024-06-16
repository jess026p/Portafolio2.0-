import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faLink, faMountain, faUtensils, faMusic, faWind } from '@fortawesome/free-solid-svg-icons';

const ProfileCard = () => (
  <div className="bg-darkBg p-4 shadow-md rounded-lg mx-2 card-size my-4 ">
    <div className="flex items-center animate-pulse space-x-4">
      <img src="../perfil.jpeg" alt="Perfil" className="w-20 h-20 rounded-full mr-4" />
      <div>
        <h2 className="text-xl font-semibold mb-2 text-white">Jessica Tituaña</h2>
        <p className="text-white mb-2">Ingeniera en Software</p>
        <div className="flex items-center">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="text-gray-400 mr-2" />
          <a href="https://maps.app.goo.gl/FLf3BKGzSBKFv6Hb8" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600">Dirección</a>
        </div>
      </div>
    </div>
    <p className="text-white mt-5 break-normal text-sm">
  Hola, mi nombre es Jessica Tituaña, originaria de la ciudad de Santiago de Píllaro, graduada de Ingeniera en Software, en la Universidad Técnica de Ambato. Tengo experiencia en áreas como desarrollo web y móvil, con una visión comprometida con el aprendizaje continuo y la mejora constante en mi campo profesional.
</p>
  </div>
);

const HobbyCard = () => (
  <div className="bg-darkBg p-4 shadow-md rounded-lg mx-2 card-size my-4">
    <div  className="animate-pulse ">
    <h2 className="text-xl font-semibold mb-2 text-white rounded-t-lg p-5">Mis Hobbies</h2>
    <div className="flex flex-wrap items-center">
      <ul>
      <div className="mb-4 flex items-center">
        <img src="../icoD.png" alt="Danza" className="w-6 h-6 rounded-full mr-2" />
        Danza
      </div>
      <div className="mb-4 flex items-center">
        <FontAwesomeIcon icon={faMountain} className="w-6 h-6 rounded-full mr-2" /> Senderismo
      </div>
      <div className="mb-4 flex items-center">
        <FontAwesomeIcon icon={faUtensils} className="w-6 h-6 rounded-full mr-2" /> Cocinar comida deliciosa
      </div>
      <div className="mb-4 flex items-center">
        <FontAwesomeIcon icon={faMusic} className="w-6 h-6 rounded-full mr-2" /> Escuchar Música
      </div>
      <div className="mb-4 flex items-center">
        <FontAwesomeIcon icon={faWind} className="w-6 h-6 rounded-full mr-2" /> Entonar instrumentos de viento
      </div>
      </ul>
    </div>
    </div>
  </div>
);

const PublicationCard = () => (
  <div className="bg-darkBg p-4 shadow-md rounded-lg mx-2 card-size my-4 relative">  

    <div >
      {/* Ícono circular en la esquina superior derecha */}
    <a href="/ruta" className="animate-pulse absolute top-0 right-0 bg-blue-500 text-white rounded-full px-2 py-1 hover:bg-blue-600">
      <FontAwesomeIcon icon={faLink} />
    </a>
      <div className="bg-gray-900 text-white text-center rounded-t-lg p-2">
        <p className="text-lg font-semibold">Publicaciones Científicas</p>
        <h2 className="text-lg font-bold">Ciencia Latina</h2>
        <h3 className="text-base font-semibold mb-2 text-center sm:text-sm break-normal">Tema: Análisis de frameworks frontend para aplicar UX/UI en desarrollo web: una revisión sistemática</h3>
      </div>
      <div className="flex items-center mt-1 ">
  {/* La clase 'hidden sm:block' oculta la imagen en dispositivos móviles */}
  <img src="../CCL.png" alt="Imagen de la Publicación" className="w-1/3 md:w-1/3 sm:w-1/3 h-auto rounded-lg mr-2 hidden sm:block" />
  <div className="flex-1 ml-2">
    <p className="mb-1 sm:text-xs break-normal">Análisis exhaustivo de varios frameworks populares, evaluando sus características, ventajas y desventajas en términos de experiencia de usuario (UX) e interfaz de usuario (UI).</p>
  </div>
</div>

    </div>
  </div>
);



const CourseCard = () => (
  <div className="bg-darkBg p-4 shadow-md card-size rounded-lg mx-2 my-4 w-30rem">
    <h2 className="text-lg font-bold mb-2 text-center mt-3">Cursos</h2>
    <ul className="divide-y divide-gray-300  ">
      {/* Curso 1 */}
      <li className="flex items-center py-2">
        <img src="../py1.png" alt="Nombre del Curso 1" className="w-1/4 h-auto rounded-full mr-2" />
        <a href="https://www.credly.com/badges/9807c9e6-9961-4f79-a2d1-ed3f3ba3c18f/print">
          <p className="card-text text-white text-xs animate-pulse">1. Python_Essentials_1<FontAwesomeIcon icon={faLink} className="ml-1" /></p>
        </a>
      </li>
      {/* Curso 2 */}
      <li className="flex items-center py-2">
        <img src="../py2.png" alt="Nombre del Curso 2" className="w-1/4 h-auto rounded-full mr-2" />
        <a href="https://www.credly.com/badges/14019e22-014b-42dd-94a8-e67bf1aa5a45/print">
          <p className="card-text text-white text-xs animate-pulse">2. Python_Essentials_2 <FontAwesomeIcon icon={faLink} className="ml-1" /></p>
        </a>
      </li>
      {/* Curso 3 */}
      <li className="flex items-center py-2">
        <img src="../py2.png" alt="Nombre del Curso 3" className="w-1/4 h-auto rounded-full mr-2" />
        <a href="/link-del-curso-3">
          <p className="card-text text-white text-xs animate-pulse">3. Javascript<FontAwesomeIcon icon={faLink} className="ml-1" /></p>
        </a>
      </li>
    </ul>
  </div>
);



const Carousel = () => (
  <div className="carousel-container">
    <div className="carousel-scroll  relative" >
      <ProfileCard />
      <HobbyCard />
      <PublicationCard />
      <CourseCard />
    </div>
  </div>
);

export default Carousel;