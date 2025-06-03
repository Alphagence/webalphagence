
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
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-alphagence-gold text-center leading-tight">
          Faites passer votre entreprise à l'ère numérique
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-white mb-6 sm:mb-8 md:mb-10 text-center px-2 leading-relaxed">
          Un site web professionnel qui attire et convertit vos visiteurs en clients fidèles.
        </p>
        
        <div className="flex flex-col gap-3 sm:gap-4 w-full max-w-2xl mx-auto px-2">
          <Button className="w-full bg-alphagence-gold hover:bg-alphagence-gold/90 text-black text-base sm:text-lg py-4 sm:py-6 px-6 sm:px-8 font-semibold">
            Demander un devis gratuit
          </Button>
          <Button variant="outline" className="w-full border-2 border-alphagence-gold text-alphagence-gold hover:bg-alphagence-gold hover:text-black text-base sm:text-lg py-4 sm:py-6 px-6 sm:px-8 font-semibold">
            Découvrir nos services
          </Button>
          <Button 
            asChild
            variant="outline" 
            className="w-full border-2 border-alphagence-gold text-alphagence-gold hover:bg-alphagence-gold hover:text-black text-base sm:text-lg py-4 sm:py-6 px-6 sm:px-8 font-semibold"
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
