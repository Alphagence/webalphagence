
import { useEffect, useRef } from 'react';

interface ComparisonItemProps {
  title: string;
  traditional: string;
  alphagence: string;
  index: number;
}

const ComparisonItem = ({ title, traditional, alphagence, index }: ComparisonItemProps) => {
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
      className={`animate-on-scroll grid grid-cols-3 py-6 ${
        index % 2 === 0 ? 'bg-black' : 'bg-gray-900'
      }`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="col-span-1 px-6 font-semibold text-white">{title}</div>
      <div className="col-span-1 px-6 border-x border-gray-700 text-gray-300">{traditional}</div>
      <div className="col-span-1 px-6 text-alphagence-gold font-medium">{alphagence}</div>
    </div>
  );
};

const ComparisonSection = () => {
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

  const comparisonItems = [
    {
      title: "Délai de livraison",
      traditional: "2-3 mois",
      alphagence: "2-4 semaines"
    },
    {
      title: "Prix initial",
      traditional: "5 000€ - 15 000€",
      alphagence: "À partir de 1 500€"
    },
    {
      title: "Maintenance mensuelle",
      traditional: "200€ - 500€",
      alphagence: "Incluse dans nos forfaits"
    },
    {
      title: "Mises à jour",
      traditional: "Facturation supplémentaire",
      alphagence: "Gratuites et régulières"
    },
    {
      title: "Support client",
      traditional: "Heures de bureau uniquement",
      alphagence: "7j/7, réponse sous 24h"
    },
    {
      title: "Modifications de contenu",
      traditional: "Facturation à l'heure",
      alphagence: "Interface simple et intuitive"
    },
    {
      title: "Transparence",
      traditional: "Devis souvent complexes",
      alphagence: "Prix clairs et sans surprise"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="animate-on-scroll section-heading inline-block mx-auto text-white">
            Quelles sont les différences?
          </h2>
          <p className="animate-on-scroll text-lg text-gray-300 max-w-3xl mx-auto mt-8">
            Découvrez ce qui distingue Alphagence des agences web traditionnelles
          </p>
        </div>

        <div className="overflow-x-auto max-w-5xl mx-auto rounded-xl shadow-lg">
          <div className="min-w-[768px]">
            {/* Table Header */}
            <div className="grid grid-cols-3 bg-alphagence-black text-white py-4 rounded-t-xl">
              <div className="col-span-1 px-6 font-semibold">Critère</div>
              <div className="col-span-1 px-6 font-semibold">Agence Traditionnelle</div>
              <div className="col-span-1 px-6 font-semibold">Alphagence</div>
            </div>
            
            {/* Table Body */}
            {comparisonItems.map((item, index) => (
              <ComparisonItem
                key={index}
                title={item.title}
                traditional={item.traditional}
                alphagence={item.alphagence}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
