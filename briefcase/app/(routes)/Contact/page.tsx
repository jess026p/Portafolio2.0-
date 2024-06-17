'use client'
import TransitionPage from "@/components/transition-page";
import ContainerPage from "@/components/container";
import CoverParticles from '@/components/cover-particles';

import { FaUser, FaEnvelope, FaComment, FaPhone } from 'react-icons/fa'; // Importa los iconos necesarios

const Page = () => {


return (
    <>
        <TransitionPage />
        <CoverParticles/>
        <ContainerPage>
            <div className="flex justify-center items-center h-full">
                <div className="bg-secondary cardM shadow-md rounded-lg p-6 max-w-sm w-full">
                    <h1 className="text-3xl font-bold mb-6 text-center text-white-800">Contactame</h1>
                    <form  className="text-center">
                    <div className="mb-3">
                        <div className="bg-secondary flex items-center border border-gray-300 rounded-md focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500">
                            <FaUser className="inline-block text-gray-400 mx-2" /> {/* Icono de usuario */}
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="bg-secondary rounded-md w-full py-2 px-3 focus:outline-none text-white-800" // Añadir color al texto
                                placeholder="Nombre"
                               
                            />
                        </div>
                    </div>
                    <div className="mb-3">
                        <div className="bg-secondary flex items-center border border-gray-300 rounded-md focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500">
                            <FaEnvelope className="inline-block text-gray-400 mx-2" /> {/* Icono de correo */}
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="bg-secondary w-full py-2 px-3 rounded-md focus:outline-none text-white-800" // Añadir color al texto
                                placeholder="Correo Electrónico"
                                
                            />
                        </div>
                    </div>
                    <div className="mb-3">
                        <div className="bg-secondary flex items-center border border-gray-300 rounded-md focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500">
                            <FaPhone className="inline-block text-gray-400 mx-2" /> {/* Icono de teléfono */}
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                required
                                className="bg-secondary w-full py-2 px-3 rounded-md focus:outline-none text-white-800" // Añadir color al texto
                                placeholder="Número de Teléfono"
                               
                            />
                        </div>
                    </div>
                    <div className="mb-3">
                        <div className="bg-secondary messageC flex items-center border border-gray-300 rounded-md focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500">
                            <FaComment className="inline-block text-gray-400 mx-2" /> {/* Icono de mensaje */}
                            <textarea
                                id="message"
                                name="message"
                                required
                                className="bg-secondary messageCC w-full py-2 px-3 rounded-md focus:outline-none text-white" // Añadir color al texto
                                placeholder="Mensaje"
                                rows={4}
                              
                            ></textarea>
                        </div>
                    </div>
                        <button onClick={async()=>{
                           const res= await fetch('/api/send',{
                                method:'POST',
                                
                            })
                            const data= await res.json()
                            console.log(data)
                        }}
                
                           
                            className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300"
                            // Deshabilitar el botón mientras se carga
                        >Enviar
                        </button>
                    </form>
                    
                </div>
            </div>
        </ContainerPage>
    </>
);
};

export default Page;