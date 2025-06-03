
import { useEffect, useRef } from 'react';
import AnimatedCounter from '@/components/ui/animated-counter';

const StatsSection = () => {
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

  const stats = [
    { target: 200, label: "Projets Livrés", suffix: "+" },
    { target: 100, label: "Clients Satisfaits", suffix: "%" },
    { target: 50, label: "Conversion Moyenne", suffix: "%+" },
    { target: 24, label: "Support Client", suffix: "/7" },
    { target: 7, label: "Experts Qualifiés", suffix: "" }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="animate-on-scroll section-heading inline-block mx-auto text-white">
            Nos Performances
          </h2>
          <p className="animate-on-scroll text-lg text-gray-300 max-w-3xl mx-auto mt-8">
            Des chiffres qui parlent d'eux-mêmes et témoignent de notre expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="animate-on-scroll text-center bg-gray-900 p-6 rounded-xl border border-gray-700">
              <div className="text-4xl font-bold text-alphagence-gold mb-2">
                <AnimatedCounter 
                  target={stat.target} 
                  suffix={stat.suffix}
                  duration={2000 + index * 200}
                />
              </div>
              <div className="text-gray-300 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
