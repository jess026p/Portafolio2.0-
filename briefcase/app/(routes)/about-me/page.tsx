'use client'
import TransitionPage from "@/components/transition-page";
import ContainerPage from "@/components/container";
import Carousel from "./carousel";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';



const AboutMePage = () => {
  return (
    <>
      <TransitionPage />
      
      <ContainerPage >
      <h1 className="text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-20 px-20">
        Quien{' '}
        <span className="font-bold text-secondary">
          soy Yo?
        </span>
      </h1>
      <div className="text-2xl leading-tight text-center md:text-left md:text-5xl px-20">
        <a
          href="../CV Jessica.pdf"
          className="bg-blue-500 text-white px-3 py-1 rounded inline-block mt-3 hover:bg-blue-600 text-sm"
          download="hoja-de-vida.pdf" >
          <FontAwesomeIcon icon={faDownload} /> Descargar CV
        </a>

      </div>
        <div >
          <Carousel />
        </div>
      </ContainerPage>
    </>
  );
};

export default AboutMePage;
