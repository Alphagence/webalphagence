
import { useRef } from 'react';
import { Button } from "@/components/ui/button";
import { 
  ContainerAnimated,
  ContainerStagger
} from "@/components/ui/animated-gallery";
import PortfolioGallery from "./portfolio/PortfolioGallery";

const PortfolioSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section id="portfolio" ref={sectionRef} className="py-1 md:py-16 bg-black text-white">
      <div className="container mx-auto px-1 md:px-4">
        <ContainerStagger className="text-center mb-1 md:mb-12">
          <ContainerAnimated>
            <h2 className="section-heading inline-block mx-auto text-white">
              Nos Dernières Réalisations
            </h2>
          </ContainerAnimated>
          <ContainerAnimated>
            <p className="text-base md:text-lg text-white/80 max-w-3xl mx-auto mt-1 md:mt-6 px-2">
              Découvrez comment nous transformons les idées de nos clients en expériences numériques performantes et esthétiques dans tous les secteurs d'activité.
            </p>
          </ContainerAnimated>
        </ContainerStagger>

        <PortfolioGallery />

        <div className="text-center pt-1 md:pt-12">
          <Button className="bg-alphagence-gold hover:bg-alphagence-gold/90 text-black text-base py-5 px-6">
            Voir tous nos projets
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
