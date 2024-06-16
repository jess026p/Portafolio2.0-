import { UserRoundCog,Github,FolderGit2, Brain,Mails, HomeIcon, UserRound, Linkedin, Instagram, Hammer, Pencil, Computer, Cuboid, MonitorPause , Speech } from "lucide-react";

export const socialNetworks = [
    {
        id: 1,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "https://ec.linkedin.com/in/jessica-titua%C3%B1a-b3582b272?original_referer=https%3A%2F%2Fwww.bing.com%2F",
    },
    {
        id: 2,
        logo: <Instagram size={30} strokeWidth={1} />,
        src: "https://www.instagram.com/jesin.n/",
    },
    {
        id: 3,
        logo: <Github size={30} strokeWidth={1} />,
        src: "https://github.com/jess026p/",
    },
   
];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Experiencia",
        icon: <MonitorPause   color="#fff" strokeWidth={1} />,
        link: "/experiencia",
      },
    {
        id: 4,
        title: "Proyectos",
        icon: <FolderGit2 size={25} color="#fff" strokeWidth={1} />,
        link: "/proyects",
      },
      {
        id: 5,
        title: "Habilidades",
        icon: <Brain size={25} color="#fff" strokeWidth={1} />,
        link: "/skills",
      },
      {
        id: 6,
        title: "Contacto",
        icon: <Mails size={25} color="#fff" strokeWidth={1} />,
        link: "/Contact",
      },
    
];


export const serviceData = [
 
    {
        icon: <Pencil />,
        title: "Diseño web-movil",
        description: "Diseño creativo y profesional de interfaces web intuitivas y atractivas",
    },
    {
        icon: <Computer />,
        title: "Mantenimiento PCs",
        description: " Limpieza y Formateo de computadoras e instalación de programas",
    },
    {
        icon: <Hammer />,
        title: "Soporte Tecnico",
        description: "Brindar asistencia técnica a usuarios ",
    },
    {
        icon: <Cuboid />,
        title: "Pruebas de Caja Negra",
        description: "Verificar que el sistema funciona como espera el usuario final ",
    },
];


export const dataPortfolio = [
    {
        id: 1,
        title: "Web Pro",
        image: "/image-1.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 2,
        title: "Desarrollo Web Ágil",
        image: "/image-2.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 3,
        title: "Estrategias Web",
        image: "/image-3.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 4,
        title: "Ideas Creativas",
        image: "/image-4.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 5,
        title: "Webs Impactantes",
        image: "/image-5.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 6,
        title: "Web Dinámica",
        image: "/image-6.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 7,
        title: "Dark Web ",
        image: "/image-7.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 8,
        title: "E-commerce web",
        image: "/image-8.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    }
];

export const dataTestimonials = [
    {
        id: 1,
        name: "George Snow",
        description:
            "¡Increíble plataforma! Los testimonios aquí son genuinos y me han ayudado a tomar decisiones informadas. ¡Altamente recomendado!",
        imageUrl: "/profile1.png",
    },
    {
        id: 2,
        name: "Juan Pérez",
        description:
            "Me encanta la variedad de testimonios disponibles en esta página. Es inspirador ver cómo otras personas han superado desafíos similares a los míos. ¡Gracias por esta invaluable fuente de motivación!",
        imageUrl: "/profile2.png",
    },
    {
        id: 3,
        name: "María García",
        description:
            "Excelente recurso para obtener opiniones auténticas sobre diferentes productos y servicios. Me ha ayudado mucho en mis compras en línea. ¡Bravo por este sitio!",
        imageUrl: "/profile3.png",
    },
    {
        id: 4,
        name: "Laura Snow",
        description:
            "¡Qué descubrimiento tan fantástico! Los testimonios aquí son honestos y detallados. Me siento más seguro al tomar decisiones después de leer las experiencias compartidas por otros usuarios.",
        imageUrl: "/profile4.png",
    },
    {
        id: 5,
        name: "Carlos Sánchez",
        description:
            "Una joya en la web. Los testimonios son fáciles de encontrar y están bien organizados. ¡Definitivamente mi destino número uno cuando necesito referencias confiables!",
        imageUrl: "/profile5.png",
    },
    {
        id: 6,
        name: "Antonio Martínez",
        description:
            "¡Fantástico recurso para aquellos que buscan validación antes de tomar decisiones importantes! Los testimonios aquí son veraces y realmente útiles. ¡Gracias por simplificar mi proceso de toma de decisiones!",
        imageUrl: "/profile6.png",
    },
];