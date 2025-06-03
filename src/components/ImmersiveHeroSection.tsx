
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
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-alphagence-gold text-center">
            Faites passer votre entreprise à l'ère numérique
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white mb-6 sm:mb-10 text-center px-2 sm:px-0">
            Un site web professionnel qui attire et convertit vos visiteurs en clients fidèles.
          </p>
          
          <div className="flex flex-col gap-3 sm:gap-4 items-center justify-center w-full">
            <Button className="bg-alphagence-gold hover:bg-alphagence-gold/90 text-black text-base sm:text-lg py-4 sm:py-6 px-6 sm:px-8 w-full max-w-xs sm:max-w-none sm:w-auto">
              Demander un devis gratuit
            </Button>
            <Button variant="outline" className="border-alphagence-gold text-alphagence-gold hover:bg-alphagence-gold/10 text-base sm:text-lg py-4 sm:py-6 px-6 sm:px-8 w-full max-w-xs sm:max-w-none sm:w-auto">
              Découvrir nos services
            </Button>
            <Button 
              asChild
              variant="outline" 
              className="border-alphagence-gold text-alphagence-gold hover:bg-alphagence-gold/10 text-base sm:text-lg py-4 sm:py-6 px-6 sm:px-8 w-full max-w-xs sm:max-w-none sm:w-auto"
            >
              <a href="https://www.alphagence.com" target="_blank" rel="noopener noreferrer">
                Consulter toutes nos offres et prix
              </a>
            </Button>
          </div>
        </div>
      </div>
    </ScrollExpandMedia>
  );
};

export default ImmersiveHeroSection;
