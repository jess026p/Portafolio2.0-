'use client'
'use client'
import TransitionPage from "@/components/transition-page";
import ContainerPage from "@/components/container";
import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaComment, FaPhone } from 'react-icons/fa'; // Importa los iconos necesarios

const Page = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes agregar la lógica para enviar los datos del formulario
        console.log(formData);
        // Por ejemplo, puedes enviarlos a una API o hacer alguna otra acción
    };

    return (
        <>
            <TransitionPage />
            <ContainerPage>
                <div className="flex justify-center items-center h-full" > {/* Aplica las clases flex, justify-center e items-center para centrar vertical y horizontalmente */}
                <div className="bg-secondary max-w-md p-4 rounded-md">
                        <h1 className="text-3xl font-bold mb-4">Formulario de Contacto</h1>
                        <form  onSubmit={handleSubmit} className=" text-center">
                            <div className="mb-4">
                                <div className="flex items-center border border-secondary rounded-md focus:border-blue-500 focus:ring-blue-500">
                                    <FaUser className="inline-block text-gray-400 mx-2" /> {/* Icono de usuario */}
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="rounded-md w-full focus:outline-none"
                                        placeholder="Nombre"
                                    />
                                </div>
                            </div>
                            <div className="mb-4">
                                <div className="flex items-center border border-secondary rounded-md focus:border-blue-500 focus:ring-blue-500">
                                    <FaEnvelope className="inline-block text-gray-400 mx-2" /> {/* Icono de correo */}
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full rounded-md focus:outline-none"
                                        placeholder="Correo Electrónico"
                                    />
                                </div>
                            </div>
                            <div className="mb-4">
                                <div className="flex items-center border border-secondary rounded-md focus:border-blue-500 focus:ring-blue-500">
                                    <FaPhone className="inline-block text-gray-400 mx-2" /> {/* Icono de teléfono */}
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        className="rounded-md w-full focus:outline-none"
                                        placeholder="Número de Teléfono"
                                    />
                                </div>
                            </div>
                            <div className="mb-4">
                                <div className="flex items-center border border-secondary rounded-md focus:border-blue-500 focus:ring-blue-500">
                                    <FaComment className="inline-block text-gray-400 mx-2" /> {/* Icono de mensaje */}
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        className="w-full rounded-md focus:outline-none"
                                        placeholder="Mensaje"
                                        rows={5}
                                    ></textarea>
                                </div>
                            </div>
                            <button type="submit" className=" animate-pulse bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300">
                                Enviar Mensaje
                            </button>
                        </form>
                    </div>
                </div>
            </ContainerPage>
        </>
    );
};

export default Page;
