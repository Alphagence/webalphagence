
import { useEffect, useRef, useState } from 'react';

interface FaqItemProps {
  question: string;
  answer: string;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}

const FaqItem = ({ question, answer, index, isOpen, onToggle }: FaqItemProps) => {
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
      className={`animate-on-scroll border-b border-gray-200 last:border-0`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <button
        className="w-full text-left py-5 flex justify-between items-center focus:outline-none"
        onClick={onToggle}
      >
        <h3 className="text-lg font-semibold pr-8">{question}</h3>
        <svg
          className={`w-6 h-6 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100 pb-5' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-gray-600">{answer}</p>
      </div>
    </div>
  );
};

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
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

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "Combien de temps faut-il pour créer un site web?",
      answer: "La durée de création d'un site web dépend de sa complexité. Pour un site vitrine standard, comptez 2 à 4 semaines. Pour un site e-commerce ou avec des fonctionnalités spécifiques, le délai peut s'étendre de 4 à 8 semaines. Chez Alphagence, nous nous engageons à respecter les délais convenus lors du devis initial."
    },
    {
      question: "Comment fonctionne le processus de paiement?",
      answer: "Notre processus de paiement est simple et transparent. Nous demandons généralement un acompte de 30% à la signature du devis pour démarrer le projet. Le solde est réglé à la livraison du site, après validation de votre part. Pour les forfaits mensuels, la facturation débute après la mise en ligne du site."
    },
    {
      question: "Mon site sera-t-il optimisé pour les moteurs de recherche?",
      answer: "Absolument! Tous nos sites sont conçus avec une optimisation SEO de base incluse. Cela comprend une structure technique optimisée, des balises meta personnalisées, une vitesse de chargement rapide et une architecture compatible avec les standards de Google. Des services d'optimisation SEO plus avancés sont disponibles en option."
    },
    {
      question: "Puis-je modifier moi-même le contenu de mon site?",
      answer: "Oui, tous nos sites sont livrés avec un système de gestion de contenu (CMS) intuitif qui vous permet de modifier facilement vos textes, images, et autres contenus sans connaissances techniques. Nous vous formons gratuitement à son utilisation lors de la livraison du site."
    },
    {
      question: "Proposez-vous l'hébergement pour mon site web?",
      answer: "Oui, l'hébergement est inclus dans tous nos forfaits. Nous utilisons des services d'hébergement premium, performants et sécurisés, afin de garantir une disponibilité maximale (99.9% uptime) et des temps de chargement optimaux pour votre site."
    },
    {
      question: "Que se passe-t-il si j'ai besoin de modifications après la livraison?",
      answer: "Les modifications mineures sont incluses gratuitement pendant les 30 jours suivant la livraison. Au-delà, vous pouvez effectuer vous-même les modifications via le CMS ou souscrire à l'un de nos forfaits de maintenance qui incluent un certain nombre d'heures de modifications mensuelles."
    }
  ];

  return (
    <section id="faq" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="animate-on-scroll section-heading inline-block mx-auto">
            Questions Fréquentes
          </h2>
          <p className="animate-on-scroll text-lg text-gray-600 max-w-3xl mx-auto mt-8">
            Vous avez des questions? Nous avons les réponses! Voici les questions les plus fréquemment posées par nos clients.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <FaqItem
              key={index}
              question={item.question}
              answer={item.answer}
              index={index}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>

        <div className="animate-on-scroll text-center mt-12">
          <p className="text-lg mb-4">Vous ne trouvez pas la réponse à votre question?</p>
          <a 
            href="#contact" 
            className="text-alphagence-gold hover:underline font-semibold inline-flex items-center"
          >
            Contactez-nous directement
            <svg 
              className="w-4 h-4 ml-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
