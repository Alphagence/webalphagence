
import { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";

interface PortfolioItemProps {
  title: string;
  description: string;
  imageUrl: string;
  index: number;
}

const PortfolioItem = ({ title, description, imageUrl, index }: PortfolioItemProps) => {
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
      className={`animate-on-scroll bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition-all duration-300`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1 text-alphagence-black">{title}</h3>
        <p className="text-gray-600 text-sm mb-3">{description}</p>
        <Button
          variant="ghost"
          className="text-alphagence-gold hover:text-alphagence-gold/90 hover:bg-alphagence-gold/10 p-0 text-sm"
        >
          Voir le projet
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="ml-2"
          >
            <path
              d="M1 7H13M13 7L7 1M13 7L7 13"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Button>
      </div>
    </div>
  );
};

const PortfolioSection = () => {
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

  const portfolioItems = [
    {
      title: "Site E-commerce Mode",
      description: "Site de vente en ligne pour une boutique de vêtements haut de gamme",
      imageUrl: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZhc2hpb24lMjB3ZWJzaXRlfGVufDB8fDB8fHww"
    },
    {
      title: "Plateforme SaaS B2B",
      description: "Application web pour la gestion de projet et la collaboration d'équipe",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGFzaGJvYXJkfGVufDB8fDB8fHww"
    },
    {
      title: "Site Vitrine Immobilier",
      description: "Présentation d'une agence immobilière spécialisée dans le luxe",
      imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      title: "App Restaurant",
      description: "Application de commande en ligne et de réservation pour un restaurant",
      imageUrl: "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmVzdGF1cmFudCUyMGFwcHxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      title: "Site Événementiel",
      description: "Plateforme pour la gestion et promotion d'événements culturels",
      imageUrl: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZXZlbnR8ZW58MHx8MHx8fDA%3D"
    },
    {
      title: "Portail Éducatif",
      description: "Plateforme d'apprentissage en ligne pour une école de commerce",
      imageUrl: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWR1Y2F0aW9ufGVufDB8fDB8fHww"
    },
  ];

  return (
    <section id="portfolio" ref={sectionRef} className="py-16 bg-alphagence-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="animate-on-scroll section-heading inline-block mx-auto text-white">
            Nos Dernières Réalisations
          </h2>
          <p className="animate-on-scroll text-lg text-white/80 max-w-3xl mx-auto mt-6">
            Découvrez comment nous transformons les idées de nos clients en expériences numériques performantes et esthétiques.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {portfolioItems.map((item, index) => (
            <PortfolioItem
              key={index}
              title={item.title}
              description={item.description}
              imageUrl={item.imageUrl}
              index={index}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-alphagence-gold hover:bg-alphagence-gold/90 text-black text-base py-5 px-6">
            Voir tous nos projets
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
