import { useEffect, useRef } from 'react';
import { PulseBeams } from '@/components/ui/pulse-beams';
import ContactButtons from '@/components/cta/ContactButtons';
import ContactInfo from '@/components/cta/ContactInfo';
import CalendlyWidget from '@/components/cta/CalendlyWidget';
import { getBeamConfiguration } from '@/components/cta/BeamAnimation';
const CtaSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
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
    }, {
      threshold: 0.1
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  const {
    beams,
    gradientColors
  } = getBeamConfiguration();
  return <section id="contact" ref={sectionRef} className="relative py-20 bg-black overflow-hidden">
      <PulseBeams beams={beams} gradientColors={gradientColors} className="absolute inset-0 bg-black" baseColor="#333333" accentColor="#B08D57" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="animate-on-scroll section-heading inline-block mx-auto text-white mb-8">
            Prêt à transformer votre présence en ligne?
          </h2>
          <p className="animate-on-scroll text-lg text-gray-300 mb-12">Rejoignez les entreprises qui ont choisi Alphagence pour leur transformation digitale. Obtenez un site web qui vous démarque de la concurrence.</p>

          <ContactButtons />
          <ContactInfo />
          <CalendlyWidget />
        </div>
      </div>
    </section>;
};
export default CtaSection;