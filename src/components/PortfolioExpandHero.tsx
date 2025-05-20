
import { useState, useEffect } from 'react';
import ScrollExpandMedia from '@/components/ui/scroll-expansion-hero';
import { Button } from "@/components/ui/button";

interface ProjectContentType {
  title: string;
  description: string;
  features: string[];
  bgImage: string;
  mainImage: string;
  category: string;
}

const projectContent: ProjectContentType = {
  title: 'Nos Réalisations Portfolio',
  description: "Découvrez nos travaux récents qui illustrent notre approche créative et technique. Chaque projet représente une solution unique adaptée aux besoins spécifiques de nos clients.",
  features: [
    "Sites web créatifs et fonctionnels",
    "Interfaces utilisateur modernes et intuitives",
    "Design responsive pour tous les appareils",
    "Solutions e-commerce avancées",
    "Optimisation des performances",
    "Référencement SEO intégré"
  ],
  bgImage: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1855&auto=format&fit=crop",
  mainImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1415&auto=format&fit=crop",
  category: "Web Design"
};

const ProjectContent = () => {
  return (
    <div className='max-w-4xl mx-auto'>
      <h2 className='text-3xl font-bold mb-6 text-white'>
        Notre Portfolio
      </h2>
      <p className='text-lg mb-8 text-white/80'>
        {projectContent.description}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        {projectContent.features.map((feature, index) => (
          <div key={index} className="flex items-start space-x-3">
            <svg className="w-5 h-5 text-alphagence-gold mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span className="text-white">{feature}</span>
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mt-8">
        <Button className="bg-alphagence-gold hover:bg-alphagence-gold/90 text-black">
          Voir tous nos projets
        </Button>
        <Button variant="outline" className="border-white text-white hover:bg-white/10">
          Demander un devis
        </Button>
      </div>
    </div>
  );
};

const PortfolioExpandHero = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ScrollExpandMedia
      mediaType="image"
      mediaSrc={projectContent.mainImage}
      bgImageSrc={projectContent.bgImage}
      title={projectContent.title}
      date={projectContent.category}
      scrollToExpand="Défilez pour découvrir nos projets"
      bgColor="bg-alphagence-black"
      textBlend
    >
      <ProjectContent />
    </ScrollExpandMedia>
  );
};

export default PortfolioExpandHero;
