
import { useEffect, useRef } from 'react';

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  isLast?: boolean;
}

const ProcessStep = ({ number, title, description, isLast = false }: ProcessStepProps) => {
  const stepRef = useRef<HTMLDivElement>(null);

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

    if (stepRef.current) {
      observer.observe(stepRef.current);
    }

    return () => {
      if (stepRef.current) {
        observer.unobserve(stepRef.current);
      }
    };
  }, []);

  return (
    <div ref={stepRef} className="animate-on-scroll relative flex items-start group">
      <div className="flex flex-col items-center">
        <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-alphagence-gold bg-black text-alphagence-gold font-bold text-xl z-10 group-hover:bg-alphagence-gold group-hover:text-black transition-colors duration-300">
          {number}
        </div>
        {!isLast && (
          <div className="w-px h-full bg-alphagence-gold/30 mt-4"></div>
        )}
      </div>
      <div className="ml-6 pb-12">
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
};

const ProcessSection = () => {
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
              }, index * 200);
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

  const processSteps = [
    {
      number: 1,
      title: "Consultation & Analyse",
      description: "Nous commençons par comprendre votre activité, vos objectifs et vos besoins spécifiques. Cette étape est cruciale pour concevoir une solution digitale parfaitement adaptée à votre entreprise."
    },
    {
      number: 2,
      title: "Conception & Design",
      description: "Notre équipe créative élabore un design sur mesure qui reflète l'identité de votre marque. Nous vous présentons des maquettes pour validation avant de passer à l'étape suivante."
    },
    {
      number: 3,
      title: "Développement & Intégration",
      description: "Nos développeurs transforment le design approuvé en un site web fonctionnel, optimisé pour les performances et compatible avec tous les appareils."
    },
    {
      number: 4,
      title: "Tests & Lancement",
      description: "Après une phase rigoureuse de tests pour garantir la qualité, nous procédons au lancement de votre site. Notre équipe reste disponible pour vous accompagner et optimiser votre présence en ligne."
    }
  ];

  return (
    <section id="process" ref={sectionRef} className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="animate-on-scroll section-heading inline-block mx-auto text-white">
            Comment Ça Marche?
          </h2>
          <p className="animate-on-scroll text-lg text-gray-300 max-w-3xl mx-auto mt-8">
            Notre processus simple et efficace en 4 étapes pour créer votre site web professionnel.
          </p>
        </div>

        <div className="max-w-3xl mx-auto mt-16">
          {processSteps.map((step, index) => (
            <ProcessStep
              key={index}
              number={step.number}
              title={step.title}
              description={step.description}
              isLast={index === processSteps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
