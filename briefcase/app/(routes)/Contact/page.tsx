'use client';
import TransitionPage from "@/components/transition-page";
import ContainerPage from "@/components/container";
import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaComment, FaPhone } from 'react-icons/fa'; // Importa los iconos necesarios

const Page = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    // Definir el tipo del evento en handleChange
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Definir el tipo del evento en handleSubmit
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Prevenir el comportamiento por defecto del formulario
        try {
            const res = await fetch('/api/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const data = await res.json();
            console.log(data);
        } catch (error) {
            console.error('Error al enviar el formulario:', error);
        }
    };

    return (
        <>
            <TransitionPage />
            <ContainerPage>
                <div className="flex justify-center items-center h-full"> {/* Aplica las clases flex, justify-center e items-center para centrar vertical y horizontalmente */}
                    <div className="bg-secondary max-w-md p-4 rounded-md">
                        <h1 className="text-3xl font-bold mb-4">Formulario de Contacto</h1>
                        <form onSubmit={handleSubmit} className="text-center">
                            <div className="mb-4">
                                <div className="flex items-center border border-secondary rounded-md focus:border-blue-500 focus:ring-blue-500">
                                    <FaUser className="inline-block text-gray-400 mx-2" /> {/* Icono de usuario */}
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        className="rounded-md w-full focus:outline-none"
                                        placeholder="Nombre"
                                        value={formData.name}
                                        onChange={handleChange}
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
                                        className="w-full rounded-md focus:outline-none"
                                        placeholder="Correo Electrónico"
                                        value={formData.email}
                                        onChange={handleChange}
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
                                        className="rounded-md w-full focus:outline-none"
                                        placeholder="Número de Teléfono"
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="mb-4">
                                <div className="flex items-center border border-secondary rounded-md focus:border-blue-500 focus:ring-blue-500">
                                    <FaComment className="inline-block text-gray-400 mx-2" /> {/* Icono de mensaje */}
                                    <textarea
                                        id="message"
                                        name="message"
                                        className="w-full rounded-md focus:outline-none"
                                        placeholder="Mensaje"
                                        rows={5}
                                        value={formData.message}
                                        onChange={handleChange}
                                    ></textarea>
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="animate-pulse bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
                            >
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
