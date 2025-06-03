
import { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import ScrollExpandMedia from "@/components/ui/scroll-expansion-hero";

const ImmersiveHeroSection = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Force page to the top
    document.body.style.overflow = 'hidden';
    
    const timeout = setTimeout(() => {
      document.body.style.overflow = '';
    }, 100);
    
    return () => {
      clearTimeout(timeout);
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <ScrollExpandMedia
      mediaType="video"
      mediaSrc="/2025-05-20-15_44_19.mp4"
      bgImageSrc="/lovable-uploads/fb79ecdd-06c0-45df-9f81-e2f90615b669.png"
      title="Un site moderne et performant"
      date="Adapté aux besoins des PME"
      scrollToExpand="Défiler pour découvrir"
      textBlend
    >
      <div className="w-full max-w-3xl mx-auto text-center px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-alphagence-gold text-center">
          Faites passer votre entreprise à l'ère numérique
        </h2>
        <p className="text-base md:text-lg lg:text-xl text-white mb-8 md:mb-10 text-center">
          Un site web professionnel qui attire et convertit vos visiteurs en clients fidèles.
        </p>
        
        <div className="flex flex-col gap-3 md:gap-4 justify-center items-center w-full">
          <Button className="w-full max-w-sm bg-alphagence-gold hover:bg-alphagence-gold/90 text-black text-base md:text-lg py-4 md:py-6 px-6 md:px-8">
            Demander un devis gratuit
          </Button>
          <Button variant="outline" className="w-full max-w-sm border-alphagence-gold text-alphagence-gold hover:bg-alphagence-gold/10 text-base md:text-lg py-4 md:py-6 px-6 md:px-8">
            Découvrir nos services
          </Button>
          <Button 
            asChild
            variant="outline" 
            className="w-full max-w-sm border-alphagence-gold text-alphagence-gold hover:bg-alphagence-gold/10 text-base md:text-lg py-4 md:py-6 px-6 md:px-8"
          >
            <a href="https://www.alphagence.com" target="_blank" rel="noopener noreferrer">
              Consulter toutes nos offres et prix
            </a>
          </Button>
        </div>
      </div>
    </ScrollExpandMedia>
  );
};

export default ImmersiveHeroSection;
