
import { useEffect, useRef } from 'react';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  index: number;
}

const ServiceCard = ({ icon, title, description, index }: ServiceCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

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

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={cardRef}
      className="animate-on-scroll bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-alphagence-gold/20"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="w-16 h-16 bg-alphagence-gold/10 rounded-full flex items-center justify-center mb-6">
        <div className="text-3xl text-alphagence-gold">{icon}</div>
      </div>
      <h3 className="text-xl font-semibold mb-3 text-alphagence-black">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const ServicesSection = () => {
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

  const services = [
    {
      icon: "💻",
      title: "Création de Site Web",
      description: "Des sites web sur mesure, esthétiques et fonctionnels, adaptés aux objectifs de votre entreprise et aux attentes de vos clients."
    },
    {
      icon: "🛒",
      title: "E-commerce",
      description: "Des boutiques en ligne performantes pour vendre vos produits et services, avec une expérience d'achat optimisée pour la conversion."
    },
    {
      icon: "📱",
      title: "Responsive Design",
      description: "Votre site s'adapte parfaitement à tous les appareils, offrant une expérience utilisateur optimale sur ordinateur, tablette et mobile."
    },
    {
      icon: "🔍",
      title: "Référencement SEO",
      description: "Optimisation technique et éditoriale pour améliorer votre visibilité sur les moteurs de recherche et attirer un trafic qualifié."
    },
    {
      icon: "⚡",
      title: "Performance Web",
      description: "Optimisation de la vitesse de chargement et des performances pour réduire le taux de rebond et améliorer l'expérience utilisateur."
    },
    {
      icon: "🔒",
      title: "Sécurité Web",
      description: "Protection de votre site et des données de vos utilisateurs contre les menaces en ligne avec les meilleures pratiques de sécurité."
    }
  ];

  return (
    <section id="services" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="animate-on-scroll section-heading inline-block mx-auto">
            Pourquoi Avoir Un Site Web?
          </h2>
          <p className="animate-on-scroll text-lg text-gray-600 max-w-3xl mx-auto mt-8">
            À l'ère du numérique, un site web professionnel est essentiel pour développer votre activité et renforcer votre crédibilité.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
