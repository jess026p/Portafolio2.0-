'use client'
import TransitionPage from "@/components/transition-page";
import ContainerPage from "@/components/container";
import CoverParticles from '@/components/cover-particles';
import { FaJs, FaReact, FaNodeJs, FaPython, FaJava, FaVuejs, FaAngular } from 'react-icons/fa';

import React from 'react';

const SkillsPage = () => {
    return (
        <>
            <TransitionPage />
            <CoverParticles/>
            <ContainerPage>
            <div className="max-w-3xl mx-auto bg-secondary rounded-lg p-6">
                    <h1 className="text-3xl text-center font-bold mb-4">Mis Habilidades de Desarrollo</h1>
                    <p className="text-lg mb-4">
                        Aquí puedes encontrar información sobre mis habilidades en desarrollo de software.
                    </p>
                    <div className="mb-4">
                        <h2 className="text-xl font-semibold mb-2">Lenguajes de Programación</h2>
                        <ul className="list-disc pl-6">
                            <li><FaJs style={{ color: '#f7df1e' }} /> JavaScript</li> {/* Amarillo */}
                            <li><FaReact style={{ color: '#61dafb' }} /> React.js</li> {/* Azul */}
                            <li><FaNodeJs style={{ color: '#43853d' }} /> Node.js</li> {/* Verde */}
                            <li><FaPython style={{ color: '#306998' }} /> Python</li> {/* Azul Oscuro */}
                            <li><FaJava style={{ color: '#007396' }} /> Java</li> {/* Azul Marino */}
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold mb-2">Frameworks y Tecnologías</h2>
                        <ul className="list-disc pl-6">
                            <li><FaReact style={{ color: '#61dafb' }} /> React.js</li> {/* Azul */}
                            <li><FaVuejs style={{ color: '#42b883' }} /> Vue.js</li> {/* Verde */}
                            <li><FaAngular style={{ color: '#dd1b16' }} /> Angular</li> {/* Rojo */}
                            <li>
                                <div>
                                    <img src="/ionic.png" alt="Ionic Logo" width="20" height="20" style={{ verticalAlign: 'middle', marginRight: '8px' }} />
                                    <span>Ionic</span> {/* Azul */}
                                </div>
                            </li>
                            {/* Agrega más frameworks y tecnologías */}
                        </ul>
                    </div>
                </div>
            </ContainerPage>
        </>
    );
};

export default SkillsPage;
