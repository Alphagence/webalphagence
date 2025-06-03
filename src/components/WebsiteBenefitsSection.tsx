
import { useEffect, useRef } from 'react';
import { CardSpotlight } from '@/components/ui/card-spotlight';
import {
  Globe,
  Clock,
  TrendingUp,
  CheckCircle,
  Star,
  Video,
  Zap,
  Shield,
  Search,
  Users,
  BarChart3
} from 'lucide-react';
import { scrollToContact } from '@/utils/scrollToContact';

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

  const websiteBenefits = [
    {
      title: "Visibilité 24/7",
      description: "Votre entreprise est accessible à tout moment, offrant une vitrine permanente pour vos produits et services.",
      icon: <Clock className="w-6 h-6 text-alphagence-gold" />,
    },
    {
      title: "Portée Mondiale",
      description: "Touchez des clients partout dans le monde et élargissez votre marché au-delà des frontières géographiques.",
      icon: <Globe className="w-6 h-6 text-alphagence-gold" />,
    },
    {
      title: "Croissance Business",
      description: "Augmentez significativement vos ventes grâce à une présence digitale optimisée et professionnelle.",
      icon: <TrendingUp className="w-6 h-6 text-alphagence-gold" />,
    },
    {
      title: "Crédibilité Professionnelle",
      description: "Renforcez la confiance de vos clients avec un site web professionnel qui reflète votre expertise.",
      icon: <CheckCircle className="w-6 h-6 text-alphagence-gold" />,
    },
    {
      title: "Marketing Automatisé",
      description: "Votre site travaille pour vous en permanence, générant des leads et convertissant les visiteurs.",
      icon: <Star className="w-6 h-6 text-alphagence-gold" />,
    },
    {
      title: "Contenu Multimédia",
      description: "Présentez vos produits avec des vidéos, images et animations pour captiver votre audience.",
      icon: <Video className="w-6 h-6 text-alphagence-gold" />,
    },
    {
      title: "Automatisation IA",
      description: "Intégrez des agents IA pour automatiser les tâches répétitives et augmenter l'efficacité.",
      icon: <Zap className="w-6 h-6 text-alphagence-gold" />,
    },
    {
      title: "Sécurité Renforcée",
      description: "Protégez vos données et celles de vos clients avec nos mesures de sécurité avancées.",
      icon: <Shield className="w-6 h-6 text-alphagence-gold" />,
    },
    {
      title: "Référencement SEO",
      description: "Optimisez votre visibilité sur les moteurs de recherche et attirez plus de clients qualifiés.",
      icon: <Search className="w-6 h-6 text-alphagence-gold" />,
    },
    {
      title: "Analytics Avancés",
      description: "Suivez et analysez les performances de votre site pour optimiser continuellement vos résultats.",
      icon: <BarChart3 className="w-6 h-6 text-alphagence-gold" />,
    },
    {
      title: "Communauté Engagée",
      description: "Créez une communauté fidèle autour de votre marque et développez l'engagement client.",
      icon: <Users className="w-6 h-6 text-alphagence-gold" />,
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
              <CardSpotlight key={index} className="h-full">
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    {benefit.icon}
                    <h3 className="text-xl font-bold text-alphagence-gold">
                      {benefit.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </CardSpotlight>
            ))}
          </div>
        </div>

        <div className="animate-on-scroll text-center mt-12">
          <p className="text-lg mb-6 text-white">Prêt à transformer votre présence digitale?</p>
          <button 
            onClick={scrollToContact}
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
          </button>
        </div>
      </div>
    </section>
  );
};

export default WebsiteBenefitsSection;
