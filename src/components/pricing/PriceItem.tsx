
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

export default PriceItem;
