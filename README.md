<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body>
  <h1>Mi Portafolio</h1>

  <p>Este es mi portafolio personal donde muestro mis proyectos y habilidades como desarrolladora web.</p>

  <h2>Creación del Proyecto</h2>
  <p>Para crear este proyecto, he utilizado la herramienta <code>create-next-app</code> con TypeScript y ESLint para mantener un código limpio y organizado.</p>

  <pre><code>npx create-next-app@latest myPortfolio --typescript --eslint
  </code></pre>

  <h2>Configuración de Tailwind CSS</h2>
  <p>He configurado Tailwind CSS para gestionar los estilos de mi proyecto. Aquí están los archivos relevantes:</p>
  <ul>
    <li><code>tailwind.conf.mjs</code>: Configuración de Tailwind.</li>
    <li><code>global.css</code>: Estilos globales para toda la aplicación.</li>
    <li><code>layout.tsx</code> y <code>page.tsx</code>: Componentes principales de la aplicación.</li>
  </ul>

  <h2>Partículas Animadas</h2>
  <p>Para crear efectos visuales interesantes, he integrado las partículas animadas utilizando <code>@tsparticles/react</code>.</p>

  <pre><code>npm install @tsparticles/react
  </code></pre>

  <h2>Navegación</h2>
  <p>He configurado la barra de navegación y creado un archivo <code>data.tsx</code> para gestionar los datos de mi aplicación.</p>

  <h2>Carrusel de Proyectos</h2>
  <p>Para mostrar mis proyectos de manera dinámica, he creado un carrusel utilizando Swiper.</p>

  <pre><code>npm install swiper
  </code></pre>

  <h2>Iconos y Animaciones</h2>
  <p>Utilizo varios recursos para iconos y animaciones:</p>
  <ul>
    <li><code>react-icons</code> para diversos iconos en la aplicación.</li>
    <li><code>react-type-animation</code> para efectos de animación en textos.</li>
    <li><code>react-icons/io5</code> para el icono de Ionic.</li>
  </ul>

  <pre><code>npm install react-icons
  npm install react-type-animation
  npm install react-icons/io5
  </code></pre>

  <h2>Formulario de Contacto</h2>
  <p>Implementé un formulario de contacto utilizando <code>@types/react-slick</code> y <code>react-fontawesome</code> para iconos personalizados.</p>

  <pre><code>npm install --save-dev @types/react-slick
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { Swiper, SwiperSlide } from 'swiper/react';
  </code></pre>

  <h2>Correo Electrónico</h2>
  <h2>Configuración de ReSend</h2>
  <p>Para configurar ReSend, sigue estos pasos:</p>
  <ol>
    <li>Inicia sesión en <a href="https://resend.com" target="_blank" rel="noreferrer">ReSend</a>.</li>
    <li>Crea una cuenta enlazada a Git y obtén tu API key.</li>
    <li>Consuma la API key en tu formulario para enviar correos electrónicos desde tu portafolio.</li>
  </ol>
  <p>Utilizo la siguiente estructura  para enviar correos electrónicos desde mi formulario de contacto:</p>

  <pre><code>
    to: 'jesifv1999@gmail.com', // Utilizar el email del formulario
    subject: 'Mensaje de contacto desde mi portafolio', // Asunto del correo
    react: EmailTemplate({ firstName: name, email, phone, message })
  </code></pre>

  <h3>Plantilla de Email</h3>
  <p>Aquí está la plantilla que utilizo para el correo electrónico:</p>

  <pre><code>
    {firstName}, {email}, {phone}, {message}
  </code></pre>

  

  <p>¡Gracias por visitar mi portafolio!</p>
</body>
</html>
