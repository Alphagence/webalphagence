
import { useEffect, useRef } from 'react';
import { BenefitCard } from './ui/benefit-card';
import {
  Globe,
  Clock,
  TrendingUp,
  CheckCircle,
  Star,
  Video,
  Zap
} from 'lucide-react';
import { useCalendly } from "@/hooks/useCalendly";

const WebsiteBenefitsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { openCalendly } = useCalendly();
  
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

  const websiteBenefits = [
    {
      title: "Visibilité 24/7",
      meta: "365 jours/an",
      description: "Votre entreprise est accessible à tout moment, offrant une vitrine permanente pour vos produits et services.",
      icon: <Clock className="w-5 h-5 text-alphagence-gold" />,
      status: "Essentiel",
      tags: ["Accessibilité", "Présence"]
    },
    {
      title: "Portée Mondiale",
      meta: "Sans limites",
      description: "Touchez des clients partout dans le monde et élargissez votre marché au-delà des frontières géographiques.",
      icon: <Globe className="w-5 h-5 text-alphagence-gold" />,
      status: "Global",
      tags: ["International", "Expansion"]
    },
    {
      title: "Croissance Business",
      meta: "+300% en moyenne",
      description: "Augmentez significativement vos ventes grâce à une présence digitale optimisée et professionnelle.",
      icon: <TrendingUp className="w-5 h-5 text-alphagence-gold" />,
      status: "ROI Prouvé",
      tags: ["Ventes", "Conversion"]
    },
    {
      title: "Crédibilité Professionnelle",
      meta: "85% des clients",
      description: "Renforcez la confiance de vos clients avec un site web professionnel qui reflète votre expertise.",
      icon: <CheckCircle className="w-5 h-5 text-alphagence-gold" />,
      status: "Confiance",
      tags: ["Réputation", "Trust"]
    },
    {
      title: "Marketing Automatisé",
      meta: "24h/24",
      description: "Votre site travaille pour vous en permanence, générant des leads et convertissant les visiteurs.",
      icon: <Star className="w-5 h-5 text-alphagence-gold" />,
      status: "Automation",
      tags: ["Leads", "Marketing"]
    },
    {
      title: "Contenu Multimédia",
      meta: "Engagement +200%",
      description: "Présentez vos produits avec des vidéos, images et animations pour captiver votre audience.",
      icon: <Video className="w-5 h-5 text-alphagence-gold" />,
      status: "Interactif",
      tags: ["Média", "Engagement"]
    },
    {
      title: "Automatisation IA",
      meta: "-70% temps employé",
      description: "Intégrez des agents IA pour automatiser les tâches répétitives, réduire les coûts et augmenter l'efficacité de votre équipe.",
      icon: <Zap className="w-5 h-5 text-alphagence-gold" />,
      status: "Innovation",
      tags: ["IA", "Automatisation", "Efficacité"]
    }
  ];

  return (
    <section id="benefits" ref={sectionRef} className="py-12 md:py-20 bg-gradient-to-b from-amber-50/30 to-yellow-50/30">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="animate-on-scroll section-heading inline-block mx-auto text-gray-900 text-2xl md:text-4xl">
            Pourquoi Avoir Un Site Web?
          </h2>
          <p className="animate-on-scroll text-base md:text-lg text-gray-700 max-w-3xl mx-auto mt-6 md:mt-8 px-4">
            Découvrez tous les avantages d'une présence digitale professionnelle pour votre entreprise.
            Un site web n'est plus un luxe, c'est une nécessité dans le monde moderne.
          </p>
        </div>

        <div className="animate-on-scroll">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 justify-items-center max-w-6xl mx-auto">
            {websiteBenefits.map((benefit, index) => (
              <BenefitCard
                key={index}
                title={benefit.title}
                meta={benefit.meta}
                description={benefit.description}
                icon={benefit.icon}
                status={benefit.status}
                tags={benefit.tags}
                className="w-full max-w-[300px]"
              />
            ))}
          </div>
        </div>

        <div className="animate-on-scroll text-center mt-8 md:mt-12 px-4">
          <p className="text-base md:text-lg mb-4 md:mb-6 text-gray-800">Prêt à transformer votre présence digitale?</p>
          <button 
            onClick={openCalendly}
            className="inline-flex items-center px-6 md:px-8 py-3 bg-alphagence-gold text-black font-semibold rounded-lg hover:bg-alphagence-gold/90 transition-colors text-sm md:text-base"
          >
            Réserver un rendez-vous
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

export default WebsiteBenefitsSection;
