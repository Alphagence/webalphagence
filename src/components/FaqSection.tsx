
import { useEffect, useRef } from 'react';
import { FaqAccordion } from './ui/faq-chat-accordion';
import { scrollToContact } from '@/utils/scrollToContact';

const FaqSection = () => {
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

  const faqData = [
    {
      id: 1,
      question: "Combien de temps faut-il pour créer un site web?",
      answer: "Pour un site vitrine standard, comptez 2 à 4 semaines. Pour un site e-commerce ou avec des fonctionnalités spécifiques, le délai peut s'étendre de 4 à 8 semaines. Chez Alphagence, nous respectons scrupuleusement les délais convenus.",
      icon: "⏱️",
      iconPosition: "right" as const
    },
    {
      id: 2,
      question: "Comment fonctionne le processus de paiement?",
      answer: "Nous demandons 30% d'acompte à la signature du devis pour démarrer le projet. Le solde est réglé à la livraison après validation. Pour les forfaits mensuels, la facturation débute après la mise en ligne.",
      icon: "💳",
      iconPosition: "left" as const
    },
    {
      id: 3,
      question: "Mon site sera-t-il optimisé pour les moteurs de recherche?",
      answer: "Absolument! Tous nos sites incluent une optimisation SEO de base : structure technique optimisée, balises meta personnalisées, vitesse de chargement rapide et architecture compatible Google. Services SEO avancés disponibles en option.",
      icon: "🚀",
      iconPosition: "right" as const
    },
    {
      id: 4,
      question: "Puis-je modifier moi-même le contenu de mon site?",
      answer: "Oui, tous nos sites sont livrés avec un CMS intuitif qui vous permet de modifier facilement vos contenus sans connaissances techniques. Formation gratuite incluse à la livraison.",
    },
    {
      id: 5,
      question: "Proposez-vous l'hébergement pour mon site web?",
      answer: "Oui, l'hébergement premium est inclus dans tous nos forfaits avec 99.9% de disponibilité garantie et des temps de chargement optimaux pour une expérience utilisateur parfaite.",
      icon: "☁️",
      iconPosition: "left" as const
    },
    {
      id: 6,
      question: "Que se passe-t-il si j'ai besoin de modifications après la livraison?",
      answer: "Les modifications mineures sont gratuites pendant 30 jours. Au-delà, vous pouvez les faire via le CMS ou souscrire à nos forfaits de maintenance incluant des heures de modifications mensuelles.",
    },
    {
      id: 7,
      question: "Créez-vous des sites mobiles et responsives?",
      answer: "Tous nos sites sont responsives par défaut et optimisés pour mobile, tablette et desktop. Nous suivons les dernières tendances du design mobile-first pour une expérience optimale sur tous les appareils.",
      icon: "📱",
      iconPosition: "right" as const
    },
    {
      id: 8,
      question: "Proposez-vous des sites e-commerce?",
      answer: "Oui, nous créons des boutiques en ligne complètes avec paiement sécurisé, gestion des stocks, suivi des commandes et intégration avec les principales solutions de paiement suisses et internationales.",
      icon: "🛒",
      iconPosition: "left" as const
    },
    {
      id: 9,
      question: "Qu'est-ce qui rend vos sites immersifs en 3D uniques?",
      answer: "Nos sites 3D offrent une expérience utilisateur révolutionnaire avec des animations fluides, des interactions immersives et un design futuriste qui captive vos visiteurs et augmente significativement votre taux de conversion.",
      icon: "🌟",
      iconPosition: "right" as const
    },
    {
      id: 10,
      question: "Offrez-vous une garantie sur vos services?",
      answer: "Nous offrons une garantie satisfaction de 30 jours et un support technique gratuit pendant 3 mois après la livraison. Votre réussite en ligne est notre priorité absolue.",
      icon: "✅",
      iconPosition: "left" as const
    }
  ];

  return (
    <section id="faq" ref={sectionRef} className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="animate-on-scroll section-heading inline-block mx-auto text-white">
            Questions Fréquentes
          </h2>
          <p className="animate-on-scroll text-lg text-gray-300 max-w-3xl mx-auto mt-8">
            Vous avez des questions? Nous avons les réponses! Voici les questions les plus fréquemment posées par nos clients.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <FaqAccordion 
            data={faqData}
            className="animate-on-scroll"
            timestamp="Mis à jour quotidiennement - Support 24/7"
          />
        </div>

        <div className="animate-on-scroll text-center mt-12">
          <p className="text-lg mb-4 text-white">Vous ne trouvez pas la réponse à votre question?</p>
          <button 
            onClick={scrollToContact}
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
          </button>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
