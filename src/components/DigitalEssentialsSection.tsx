
import { useEffect, useRef } from 'react';
import { CardSpotlight } from '@/components/ui/card-spotlight';
import { 
  Globe, 
  Users, 
  TrendingUp, 
  Shield, 
  Zap, 
  Star 
} from 'lucide-react';
import { scrollToContact } from '@/utils/scrollToContact';

const DigitalEssentialsSection = () => {
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

  const digitalEssentials = [
    {
      title: "Présence Digitale",
      description: "Établissez votre autorité en ligne avec un site web professionnel qui reflète votre expertise et attire vos clients idéaux.",
      icon: <Globe className="w-6 h-6 text-alphagence-gold" />,
    },
    {
      title: "Crédibilité Instantanée",
      description: "Renforcez la confiance de vos prospects avec un design moderne et professionnel qui vous distingue de la concurrence.",
      icon: <Star className="w-6 h-6 text-alphagence-gold" />,
    },
    {
      title: "Génération de Leads",
      description: "Convertissez vos visiteurs en clients potentiels grâce à des stratégies d'optimisation éprouvées et des parcours utilisateur intelligents.",
      icon: <TrendingUp className="w-6 h-6 text-alphagence-gold" />,
    },
    {
      title: "Expérience Client",
      description: "Offrez une navigation intuitive et engageante qui guide naturellement vos visiteurs vers l'action souhaitée.",
      icon: <Users className="w-6 h-6 text-alphagence-gold" />,
    },
    {
      title: "Sécurité Garantie",
      description: "Protégez vos données et celles de vos clients avec nos protocoles de sécurité avancés et nos certifications SSL.",
      icon: <Shield className="w-6 h-6 text-alphagence-gold" />,
    },
    {
      title: "Performance Optimale",
      description: "Bénéficiez de temps de chargement ultra-rapides et d'une disponibilité 24/7 pour ne jamais perdre une opportunité.",
      icon: <Zap className="w-6 h-6 text-alphagence-gold" />,
    }
  ];

  return (
    <section id="digital-essentials" ref={sectionRef} className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="animate-on-scroll section-heading inline-block mx-auto text-white mb-8">
            L'Essentiel Numérique
          </h2>
          <p className="animate-on-scroll text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
            À l'ère du numérique, un site web professionnel est essentiel pour développer votre activité et renforcer votre crédibilité. 
            Découvrez les éléments clés qui transformeront votre présence en ligne en véritable moteur de croissance.
          </p>
        </div>

        <div className="animate-on-scroll">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {digitalEssentials.map((essential, index) => (
              <CardSpotlight key={index} className="h-full">
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    {essential.icon}
                    <h3 className="text-xl font-bold text-alphagence-gold">
                      {essential.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    {essential.description}
                  </p>
                </div>
              </CardSpotlight>
            ))}
          </div>
        </div>

        <div className="animate-on-scroll text-center mt-12">
          <p className="text-lg mb-6 text-white">Prêt à établir votre autorité numérique?</p>
          <button 
            onClick={scrollToContact}
            className="inline-flex items-center px-8 py-3 bg-alphagence-gold text-black font-semibold rounded-lg hover:bg-alphagence-gold/90 transition-colors"
          >
            Démarrer votre transformation
            <svg 
              className="w-4 h-4 ml-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default DigitalEssentialsSection;
