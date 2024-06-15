import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faLink, faMountain, faUtensils, faMusic, faWind } from '@fortawesome/free-solid-svg-icons';

const ProfileCard = () => (
  <div className="bg-darkBg p-4 shadow-md rounded-lg mx-2 card-size my-4">
    <div className="flex items-center animate-pulse space-x-4">
      <img src="../perfil.jpeg" alt="Profile" className="w-20 h-20 rounded-full mr-4" />
      <div>
        <h2 className="text-xl font-semibold mb-2 text-white">Jessica Tituaña</h2>
        <p className="text-white mb-2">Ingeniera en Software</p>
        <div className="flex items-center">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="text-gray-400 mr-2" />
          <a href="https://maps.app.goo.gl/FLf3BKGzSBKFv6Hb8" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600">Dirección</a>
        </div>
      </div>
    </div>
    <p className="text-white mt-4 text-justify">Hello, my name is Jessica Tituaña, originally from the city Santiago of Pillaro, graduated in Software Engineering from the Technical University of Ambato. I have experience in areas such as web and mobile development, with a vision committed to continuous learning and constant improvement in my professional field.</p>
  
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
  <div className="bg-darkBg p-4 shadow-md rounded-lg mx-2 card-size my-4">
    <div className="bg-gray-900 text-white text-center rounded-t-lg p-2">
      <p className="text-2xl text-lg font-semibold">Publicaciones Cientificas</p>
      <h2 className="text-2xl font-bold">Ciencia Latina</h2>
      <h3 className="text-lg font-semibold mb-2 text-center sm:text-sm">Tema: Análisis de frameworks frontend para aplicar UX/UI en desarrollo web: una revisión sistemática</h3>
   </div>
    <div className="flex items-center mt-4">
      <img src="../CCL.png" alt="Imagen de la Publicación" className="w-1/3 h-auto rounded-lg mr-4" />
      <div className="flex-1">
        <p className="mb-2 sm:text-sm">This article presents a comprehensive analysis of several popular frameworks, evaluating their features, advantages, and disadvantages in terms of user experience (UX) and user interface (UI)</p>
        <a href="/ruta" className="bg-blue-500 text-white px-2 py-1 rounded flex items-center justify-center hover:bg-blue-600 w-24 text-sm  ">
          Visitar <FontAwesomeIcon icon={faLink} className="ml-1" />
        </a>
      </div>
    </div>
  </div>
);

const CourseCard = () => (
  <div className="bg-white p-4 shadow-md rounded-lg mx-2 card-size my-4">
    <h2 className="text-xl font-semibold mb-2 text-darkBg">Cursos</h2>
  </div>
);

import { faFilePdf } from '@fortawesome/free-solid-svg-icons';

const ResumeCard = () => (
  <div className="bg-darkBg p-4 shadow-md rounded-lg mx-2 card-size my-4">
    <div className="flex items-center justify-between mb-3">
      <h2 className="text-xl font-semibold text-darkBg">Hoja de Vida</h2>
      <FontAwesomeIcon icon={faFilePdf} className="text-darkBg text-2xl" />
    </div>
    <p className="text-darkBg">[Resumen de tu hoja de vida]</p>
    <a
      href="/ruta-a-tu-pdf"
      className="bg-blue-500 text-white px-3 py-1 rounded inline-block mt-3 hover:bg-blue-600 text-sm"
      download="hoja-de-vida.pdf"
    >
      Descargar PDF
    </a>
  </div>
);

const Carousel = () => (
  <div className="carousel-container">
    <div className="carousel-scroll " >
      <ProfileCard />
      <HobbyCard />
      <PublicationCard />
      <CourseCard />
      <ResumeCard />
    </div>
  </div>
);

export default Carousel;