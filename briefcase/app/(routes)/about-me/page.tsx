'use client'
import TransitionPage from "@/components/transition-page";
import ContainerPage from "@/components/container";
import Carousel from "./carousel";


const AboutMePage = () => {
  return (
    <>
      <TransitionPage />
      <ContainerPage>
        <div className="mt-2"><p>boton</p></div>
        <div > 
          <Carousel/>
        </div>
      </ContainerPage>
    </>
  );
};

export default AboutMePage;
