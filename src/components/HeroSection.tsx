
import { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    if (sectionRef.current) {
      // Add initial animations without waiting for scroll
      const title = sectionRef.current.querySelector('h1');
      const paragraph = sectionRef.current.querySelector('p');
      const buttons = sectionRef.current.querySelectorAll('.btn-group button');
      
      setTimeout(() => {
        title?.classList.add('animated');
      }, 300);
      
      setTimeout(() => {
        paragraph?.classList.add('animated');
      }, 600);
      
      buttons.forEach((btn, index) => {
        setTimeout(() => {
          btn.classList.add('animated');
        }, 900 + (index * 200));
      });
      
      // Add floating effect to background elements
      const bgElements = sectionRef.current.querySelectorAll('.bg-accent');
      bgElements.forEach((el) => {
        el.classList.add('floating');
      });
    }
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center bg-alphagence-black overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-alphagence-black opacity-90"></div>
      
      {/* Floating gold accents */}
      <div className="absolute top-32 right-[-100px] w-96 h-96 rounded-full bg-alphagence-gold opacity-20 blur-3xl floating" 
           style={{animation: 'float 8s ease-in-out infinite'}}></div>
      <div className="absolute bottom-[-150px] left-[-150px] w-96 h-96 rounded-full bg-alphagence-gold opacity-10 blur-3xl floating-delayed"
           style={{animation: 'float 7s ease-in-out 1s infinite'}}></div>
      
      {/* Animated lines */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[20%] left-0 w-full h-px bg-gradient-to-r from-transparent via-alphagence-gold/20 to-transparent"></div>
        <div className="absolute top-[40%] left-0 w-full h-px bg-gradient-to-r from-transparent via-alphagence-gold/15 to-transparent"></div>
        <div className="absolute top-[60%] left-0 w-full h-px bg-gradient-to-r from-transparent via-alphagence-gold/10 to-transparent"></div>
        <div className="absolute top-[80%] left-0 w-full h-px bg-gradient-to-r from-transparent via-alphagence-gold/5 to-transparent"></div>
      </div>
      
      <div className="w-full px-4 md:px-6 lg:px-8 py-24 relative z-10">
        <div className="max-w-3xl mx-auto md:mx-0 md:ml-8 lg:ml-16">
          <h1 className="animate-on-scroll text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 text-center md:text-left">
            <span className="text-alphagence-gold block mb-2">Un site moderne</span> et performant,<br />
            adapté aux besoins des <span className="text-alphagence-gold">PME</span>
          </h1>
          
          <p className="animate-on-scroll text-base md:text-lg lg:text-xl text-white/80 mb-8 md:mb-10 text-center md:text-left">
            Faites passer votre entreprise à l'ère du numérique avec un site web professionnel qui attire et convertit vos visiteurs en clients fidèles.
          </p>
          
          <div className="flex flex-col md:flex-row gap-3 md:gap-4 btn-group items-center md:items-start">
            <Button className="animate-on-scroll w-full md:w-auto bg-alphagence-gold hover:bg-alphagence-gold/90 text-black text-base md:text-lg py-4 md:py-6 px-6 md:px-8">
              Demander un devis gratuit
            </Button>
            <Button variant="outline" className="animate-on-scroll w-full md:w-auto border-white text-white hover:bg-white/10 text-base md:text-lg py-4 md:py-6 px-6 md:px-8">
              Découvrir nos services
            </Button>
          </div>
        </div>
      </div>
      
      {/* Add floating cards in background */}
      <div className="absolute -right-20 top-1/4 w-64 h-40 bg-white/5 rounded-lg transform rotate-12 blur-sm floating-slow"></div>
      <div className="absolute -left-10 bottom-1/4 w-48 h-32 bg-white/5 rounded-lg transform -rotate-6 blur-sm floating-slower"></div>
    </section>
  );
};

export default HeroSection;
