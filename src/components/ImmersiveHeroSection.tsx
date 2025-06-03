
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
      bgImageSrc="/fb79ecdd-06c0-45df-9f81-e2f90615b669.png"
      title="Un site moderne et performant"
      date="Adapté aux besoins des PME"
      scrollToExpand="Défiler pour découvrir"
      textBlend
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-alphagence-gold text-center">
          Faites passer votre entreprise à l'ère numérique
        </h2>
        <p className="text-lg md:text-xl text-white mb-10 text-center">
          Un site web professionnel qui attire et convertit vos visiteurs en clients fidèles.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-alphagence-gold hover:bg-alphagence-gold/90 text-black text-lg py-6 px-8">
            Demander un devis gratuit
          </Button>
          <Button variant="outline" className="border-alphagence-gold text-alphagence-gold hover:bg-alphagence-gold/10 text-lg py-6 px-8">
            Découvrir nos services
          </Button>
        </div>
      </div>
    </ScrollExpandMedia>
  );
};

export default ImmersiveHeroSection;
