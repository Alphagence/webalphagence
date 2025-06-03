
import { useEffect, useRef } from 'react';

const UpdatedHeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const animatedElements = entry.target.querySelectorAll('.animate-on-scroll');
            animatedElements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('animated');
              }, index * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="text-center max-w-5xl mx-auto">
        <h1 className="animate-on-scroll text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
          Créez Un Site Web Qui
          <span className="block text-alphagence-gold">Transforme Vos Visiteurs</span>
          En Clients Fidèles
        </h1>
        <p className="animate-on-scroll text-lg md:text-xl text-white max-w-3xl mx-auto mb-12 leading-relaxed">
          Un site web professionnel qui attire et convertit vos visiteurs en clients fidèles.
        </p>
        <div className="animate-on-scroll flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a 
            href="#contact" 
            className="inline-flex items-center px-8 py-4 bg-alphagence-gold text-black text-lg font-semibold rounded-lg hover:bg-alphagence-gold/90 transition-colors"
          >
            Démarrer Mon Projet
            <svg 
              className="w-5 h-5 ml-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
          <a 
            href="#portfolio" 
            className="inline-flex items-center px-8 py-4 border-2 border-alphagence-gold text-alphagence-gold text-lg font-semibold rounded-lg hover:bg-alphagence-gold hover:text-black transition-colors"
          >
            Voir Nos Réalisations
          </a>
        </div>
      </div>
    </section>
  );
};

export default UpdatedHeroSection;
