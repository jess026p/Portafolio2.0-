'use client'
import TransitionPage from "@/components/transition-page";
import ContainerPage from "@/components/container";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CardList from "./cardList";



const PageP = () => {
  return (
    <>
      <TransitionPage />

      <ContainerPage >
        <div className="flex flex-col justify-center h-full">
          <h1 className="text-2xl leading-tight text-center md:text-4xl md:mb-5">Mis últimos <span className="font-bold text-secondary">Proyectos realizados</span></h1>
          <div className="containerCard">
          <CardList />
        </div>
        </div>
        
      </ContainerPage>
    </>
  );
};

export default PageP;
