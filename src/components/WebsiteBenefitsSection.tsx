
import { useEffect, useRef } from 'react';
import { BentoGrid, type BentoItem } from './ui/bento-grid';
import {
  Globe,
  Clock,
  TrendingUp,
  CheckCircle,
  Star,
  Video,
  Zap,
  Shield,
  Search
} from 'lucide-react';

const WebsiteBenefitsSection = () => {
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

  const websiteBenefits: BentoItem[] = [
    {
      title: "Visibilité 24/7",
      meta: "365 jours/an",
      description: "Votre entreprise est accessible à tout moment, offrant une vitrine permanente pour vos produits et services.",
      icon: <Clock className="w-4 h-4 text-alphagence-gold" />,
      status: "Essentiel",
      tags: ["Accessibilité", "Présence"],
      colSpan: 1,
      hasPersistentHover: true,
      cta: "Découvrir →"
    },
    {
      title: "Portée Mondiale",
      meta: "Sans limites",
      description: "Touchez des clients partout dans le monde et élargissez votre marché au-delà des frontières géographiques.",
      icon: <Globe className="w-4 h-4 text-gray-600" />,
      status: "Global",
      tags: ["International", "Expansion"],
      colSpan: 1,
      cta: "Explorer →"
    },
    {
      title: "Croissance Business",
      meta: "+300% en moyenne",
      description: "Augmentez significativement vos ventes grâce à une présence digitale optimisée et professionnelle.",
      icon: <TrendingUp className="w-4 h-4 text-green-500" />,
      status: "ROI Prouvé",
      tags: ["Ventes", "Conversion"],
      colSpan: 1,
      cta: "Analyser →"
    },
    {
      title: "Crédibilité Professionnelle",
      meta: "85% des clients",
      description: "Renforcez la confiance de vos clients avec un site web professionnel qui reflète votre expertise.",
      icon: <CheckCircle className="w-4 h-4 text-purple-500" />,
      status: "Confiance",
      tags: ["Réputation", "Trust"],
      colSpan: 1,
      cta: "Voir plus →"
    },
    {
      title: "Marketing Automatisé",
      meta: "24h/24",
      description: "Votre site travaille pour vous en permanence, générant des leads et convertissant les visiteurs.",
      icon: <Star className="w-4 h-4 text-yellow-500" />,
      status: "Automation",
      tags: ["Leads", "Marketing"],
      colSpan: 1,
      cta: "Optimiser →"
    },
    {
      title: "Contenu Multimédia",
      meta: "Engagement +200%",
      description: "Présentez vos produits avec des vidéos, images et animations pour captiver votre audience.",
      icon: <Video className="w-4 h-4 text-red-500" />,
      status: "Interactif",
      tags: ["Média", "Engagement"],
      colSpan: 1,
      cta: "Créer →"
    },
    {
      title: "Automatisation IA",
      meta: "-70% temps employé",
      description: "Intégrez des agents IA pour automatiser les tâches répétitives, réduire les coûts et augmenter l'efficacité de votre équipe.",
      icon: <Zap className="w-4 h-4 text-alphagence-gold" />,
      status: "Innovation",
      tags: ["IA", "Automatisation", "Efficacité"],
      colSpan: 1,
      cta: "Découvrir l'IA →"
    },
    {
      title: "Sécurité Renforcée",
      meta: "Protection SSL",
      description: "Protégez vos données et celles de vos clients avec nos mesures de sécurité avancées et certifications SSL.",
      icon: <Shield className="w-4 h-4 text-gray-600" />,
      status: "Sécurisé",
      tags: ["SSL", "Protection"],
      colSpan: 1,
      cta: "Sécuriser →"
    },
    {
      title: "Référencement SEO",
      meta: "Première page Google",
      description: "Optimisez votre visibilité sur les moteurs de recherche et attirez plus de clients qualifiés.",
      icon: <Search className="w-4 h-4 text-gray-600" />,
      status: "Visibilité",
      tags: ["SEO", "Google"],
      colSpan: 1,
      cta: "Optimiser →"
    }
  ];

  return (
    <section id="benefits" ref={sectionRef} className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="animate-on-scroll section-heading inline-block mx-auto text-white">
            Pourquoi Avoir Un Site Web?
          </h2>
          <p className="animate-on-scroll text-lg text-gray-300 max-w-3xl mx-auto mt-8">
            Découvrez tous les avantages d'une présence digitale professionnelle pour votre entreprise.
            Un site web n'est plus un luxe, c'est une nécessité dans le monde moderne.
          </p>
        </div>

        <div className="animate-on-scroll">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {websiteBenefits.map((benefit, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-200"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    {benefit.icon}
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                      {benefit.status}
                    </span>
                  </div>
                  <span className="text-xs text-gray-500 font-medium">
                    {benefit.meta}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4">
                  {benefit.description}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {benefit.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs bg-gray-50 text-gray-500 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <button className="text-alphagence-gold text-sm font-medium hover:text-alphagence-gold/80 transition-colors">
                  {benefit.cta}
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="animate-on-scroll text-center mt-12">
          <p className="text-lg mb-6 text-white">Prêt à transformer votre présence digitale?</p>
          <a 
            href="#contact" 
            className="inline-flex items-center px-8 py-3 bg-alphagence-gold text-black font-semibold rounded-lg hover:bg-alphagence-gold/90 transition-colors"
          >
            Commencer mon projet
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

export default WebsiteBenefitsSection;
