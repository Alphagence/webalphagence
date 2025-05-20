
import { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";

const CtaSection = () => {
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
    <section ref={sectionRef} className="py-20 bg-alphagence-black text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="animate-on-scroll text-4xl md:text-5xl font-bold mb-6">
            Prêt à transformer votre présence en ligne?
          </h2>
          <p className="animate-on-scroll text-lg text-white/80 mb-10">
            Démarquez-vous de la concurrence avec un site web professionnel qui convertit vos visiteurs en clients. Contactez-nous dès aujourd'hui pour discuter de votre projet!
          </p>
          <div className="animate-on-scroll flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-alphagence-gold hover:bg-alphagence-gold/90 text-black text-lg py-6 px-8">
              Demander un devis gratuit
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 text-lg py-6 px-8">
              Voir nos réalisations
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
