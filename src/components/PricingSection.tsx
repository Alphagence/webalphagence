
import { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";

interface PriceItemProps {
  tier: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  index: number;
}

const PriceItem = ({ tier, price, description, features, isPopular = false, index }: PriceItemProps) => {
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={itemRef}
      className={`animate-on-scroll rounded-xl p-8 transition-all duration-300 transform hover:-translate-y-2 ${
        isPopular 
          ? 'bg-alphagence-gold/10 border-2 border-alphagence-gold relative shadow-xl' 
          : 'bg-white border border-gray-200 shadow-lg hover:border-alphagence-gold/20'
      }`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-alphagence-gold text-white px-4 py-1 rounded-full text-sm font-semibold">
          Le plus populaire
        </div>
      )}
      <h3 className="text-2xl font-bold text-center mb-2">{tier}</h3>
      <div className="text-center mb-6">
        <span className="text-4xl font-bold">{price}</span>
        {price !== 'Sur mesure' && <span className="text-gray-500"> /mois</span>}
      </div>
      <p className="text-gray-600 text-center mb-8">{description}</p>
      <ul className="space-y-4 mb-10">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start">
            <svg className="w-5 h-5 text-alphagence-gold mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Button className={`w-full py-6 ${
        isPopular 
          ? 'bg-alphagence-gold hover:bg-alphagence-gold/90 text-black' 
          : 'bg-alphagence-black hover:bg-alphagence-black/90 text-white'
      }`}>
        {isPopular ? 'Commencer maintenant' : 'En savoir plus'}
      </Button>
    </div>
  );
};

const PricingSection = () => {
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

  const pricingPlans = [
    {
      tier: "Essentiel",
      price: "79€",
      description: "Idéal pour les petites entreprises qui débutent leur présence en ligne",
      features: [
        "Site vitrine jusqu'à 5 pages",
        "Design responsive",
        "Formulaire de contact",
        "Intégration des réseaux sociaux",
        "Optimisation SEO de base",
        "Hébergement et domaine (1 an)",
        "Support par email"
      ],
      isPopular: false
    },
    {
      tier: "Business",
      price: "149€",
      description: "Pour les PME qui souhaitent une présence en ligne professionnelle et complète",
      features: [
        "Site jusqu'à 10 pages",
        "Design premium personnalisé",
        "Blog intégré",
        "Optimisation SEO avancée",
        "Intégration Google Analytics",
        "Formulaires avancés",
        "Chat en direct",
        "Support prioritaire 7j/7"
      ],
      isPopular: true
    },
    {
      tier: "Commerce",
      price: "299€",
      description: "Solution e-commerce complète pour vendre vos produits en ligne",
      features: [
        "Boutique en ligne complète",
        "Jusqu'à 100 produits",
        "Système de paiement sécurisé",
        "Gestion des stocks",
        "Paniers abandonnés",
        "Emails transactionnels",
        "Optimisation des conversions",
        "Formation à l'administration",
        "Support dédié 24/7"
      ],
      isPopular: false
    }
  ];

  return (
    <section id="pricing" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="animate-on-scroll section-heading inline-block mx-auto">
            Tarification Transparente
          </h2>
          <p className="animate-on-scroll text-lg text-gray-600 max-w-3xl mx-auto mt-8">
            Des forfaits adaptés à tous les besoins et budgets, sans frais cachés.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <PriceItem
              key={index}
              tier={plan.tier}
              price={plan.price}
              description={plan.description}
              features={plan.features}
              isPopular={plan.isPopular}
              index={index}
            />
          ))}
        </div>

        <div className="animate-on-scroll text-center mt-12 p-8 bg-gray-50 rounded-xl max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Besoin d'une solution sur mesure?</h3>
          <p className="text-gray-600 mb-6">
            Nous proposons également des solutions personnalisées pour les projets complexes ou spécifiques.
            Contactez-nous pour discuter de vos besoins.
          </p>
          <Button className="bg-alphagence-black hover:bg-alphagence-black/90 text-white">
            Demander un devis personnalisé
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
