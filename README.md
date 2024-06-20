# Portafolio2.0-
Mi Portafolio
Este es mi portafolio personal donde muestro mis proyectos y habilidades como desarrolladora web.

Creación del Proyecto
Para crear este proyecto, he utilizado la herramienta create-next-app con TypeScript y ESLint para mantener un código limpio y organizado.

bash
Copiar código
npx create-next-app@latest myPortfolio --typescript --eslint
Configuración de Tailwind CSS
He configurado Tailwind CSS para gestionar los estilos de mi proyecto. Aquí están los archivos relevantes:

tailwind.conf.mjs: Configuración de Tailwind.
global.css: Estilos globales para toda la aplicación.
layout.tsx y page.tsx: Componentes principales de la aplicación.
bash
Copiar código
config tailwind.conf.mjs
global.css
layout.tsx
page.tsx
Partículas Animadas
Para crear efectos visuales interesantes, he integrado las partículas animadas utilizando @tsparticles/react.

bash
Copiar código
npm install @tsparticles/react
Navegación
He configurado la barra de navegación y creado un archivo data.tsx para gestionar los datos de mi aplicación.

bash
Copiar código
configuro navbar y creo una carpeta data.tsx
Carrusel de Proyectos
Para mostrar mis proyectos de manera dinámica, he creado un carrusel utilizando Swiper.

bash
Copiar código
npm install swiper
Iconos y Animaciones
Utilizo varios recursos para iconos y animaciones:

react-icons para diversos iconos en la aplicación.
react-type-animation para efectos de animación en textos.
react-icons/io5 para el icono de Ionic.
bash
Copiar código
npm install react-icons
npm install react-type-animation
npm install react-icons/io5
Formulario de Contacto
Implementé un formulario de contacto utilizando @types/react-slick y react-fontawesome para iconos personalizados.

bash
Copiar código
npm install --save-dev @types/react-slick
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Swiper, SwiperSlide } from 'swiper/react';
¡Gracias por visitar mi portafolio!
