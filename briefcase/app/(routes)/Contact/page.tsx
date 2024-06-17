'use client'
import TransitionPage from "@/components/transition-page";
import ContainerPage from "@/components/container";
import CoverParticles from '@/components/cover-particles';

import { FaUser, FaEnvelope, FaComment, FaPhone } from 'react-icons/fa'; // Importa los iconos necesarios

const Page = () => {

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);

        try {
            const res = await fetch('/api/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await res.json();
            console.log(result);
            if (res.status === 200) {
                alert("Email enviado con éxito");
            } else {
                alert("Error al enviar el email");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Error al enviar el email");
        }
    };

    return (
        <>
            <TransitionPage />
            <CoverParticles />
            <ContainerPage>
                <div className="flex justify-center items-center h-full">
                    <div className="bg-secondary cardM shadow-md rounded-lg p-6 max-w-sm w-full">
                        <h1 className="text-3xl font-bold mb-6 text-center text-white-800">Contactame</h1>
                        <form onSubmit={handleSubmit} className="text-center">
                            <div className="mb-3">
                                <div className="bg-secondary flex items-center border border-gray-300 rounded-md focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500">
                                    <FaUser className="inline-block text-gray-400 mx-2" />
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        className="bg-secondary rounded-md w-full py-2 px-3 focus:outline-none text-white-800"
                                        placeholder="Nombre"
                                    />
                                </div>
                            </div>
                            <div className="mb-3">
                                <div className="bg-secondary flex items-center border border-gray-300 rounded-md focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500">
                                    <FaEnvelope className="inline-block text-gray-400 mx-2" />
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        className="bg-secondary w-full py-2 px-3 rounded-md focus:outline-none text-white-800"
                                        placeholder="Correo Electrónico"
                                    />
                                </div>
                            </div>
                            <div className="mb-3">
                                <div className="bg-secondary flex items-center border border-gray-300 rounded-md focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500">
                                    <FaPhone className="inline-block text-gray-400 mx-2" />
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        required
                                        className="bg-secondary w-full py-2 px-3 rounded-md focus:outline-none text-white-800"
                                        placeholder="Número de Teléfono"
                                    />
                                </div>
                            </div>
                            <div className="mb-3">
                                <div className="bg-secondary messageC flex items-center border border-gray-300 rounded-md focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500">
                                    <FaComment className="inline-block text-gray-400 mx-2" />
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        className="bg-secondary messageCC w-full py-2 px-3 rounded-md focus:outline-none text-white"
                                        placeholder="Mensaje"
                                        rows={4}
                                    ></textarea>
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300"
                            >
                                Enviar
                            </button>
                        </form>
                    </div>
                </div>
            </ContainerPage>
        </>
    );
};

export default Page;
