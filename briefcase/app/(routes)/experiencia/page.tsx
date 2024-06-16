'use client'
import TransitionPage from "@/components/transition-page";
import CircleImage from "@/components/circle-image";
import SliderServices from "@/components/slider-services";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const Experiencia = () => {
  

    return (
            <>
            <TransitionPage/>
            <CircleImage/>
            <div className="grid items-center justify-center h-screen max-w-5xl gap-6 mx-auto md:grid-cols-2 mt-40 md:mt-10 sm:mt-40 sm:px20">
                <div className="max-w-[450px]">

                    <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">Mi <span className="font-bold text-secondary"> Experiencia.</span></h1>
                    <p className="mb-3 text-xl text-gray-300">Cuento con experiencia en desarrollo web y móvil, dominado tecnologías clave como Angular, Ionic, React, y HTML para crear soluciones web innovadoras.
                        Ademas cuento con habilidades en mantenimiento de computadoras y soporte técnico.
                    </p>
                    <button className="px-3 py-2 rounded-lg bg-secondary hover:bg-secondary/65">Contacta conmigo</button>
                </div>

                {/* <div className="grid items-center justify-center sm:items-start sm:justify-start h-screen max-w-5xl gap-6 mx-auto mt-40 md:mt-10 sm:mt-40">
    */}
                <div>
                    <SliderServices />
                </div>
            </div>
            </>
       
    );
}

export default Experiencia;