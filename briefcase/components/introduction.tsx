"use client";

import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

const Introduction = () => {
    return (
        <div className="z-20 w-full bg-darkBg/60">
            <div className="z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2">
                <Image src="/home.png" priority width="800" height="800" alt="Avatar" />
                <div className="flex flex-col justify-center max-w-md">
                    <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10">Hola,soy Jessica Tituaña <br />
                        <TypeAnimation
                            sequence={[
                                'Desarrolladora Web',
                                1000,
                                'Desarrolladora Movil',
                                1000,
                                'Amante de la tecnologia',
                               
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="font-bold text-secondary"
                        />
                    </h1>

                    <p className="mx-auto mb-2 text-xl md:text-xl md:mx-0 md:mb-8">
                    Desarrolladora de software full-stack con una sólida experiencia en Back-end y pasión por el desarrollo Front-end. Cuento con una amplia experiencia en el diseño y desarrollo
                    </p>

                  
                </div>
            </div>
        </div>
    );
}

export default Introduction;
