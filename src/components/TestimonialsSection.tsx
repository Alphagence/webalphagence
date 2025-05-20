
import { useEffect, useRef, useState } from 'react';

interface TestimonialProps {
  quote: string;
  author: string;
  position: string;
  company: string;
}

const Testimonial = ({ quote, author, position, company }: TestimonialProps) => {
  return (
    <div className="bg-white rounded-xl p-8 shadow-lg relative">
      <div className="absolute -top-5 left-8 text-6xl text-alphagence-gold opacity-50">"</div>
      <p className="text-lg italic text-gray-700 mb-6 relative z-10">{quote}</p>
      <div className="flex items-center">
        <div className="w-12 h-12 bg-alphagence-gold/20 rounded-full flex items-center justify-center text-alphagence-gold font-bold text-xl">
          {author.charAt(0)}
        </div>
        <div className="ml-4">
          <h4 className="font-semibold text-alphagence-black">{author}</h4>
          <p className="text-sm text-gray-500">{position}, {company}</p>
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
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

  const testimonials = [
    {
      quote: "L'équipe d'Alphagence a complètement transformé notre présence en ligne. Notre site génère maintenant des leads qualifiés chaque jour, et notre chiffre d'affaires a augmenté de 40% en 6 mois.",
      author: "Sophie Laurent",
      position: "Directrice Marketing",
      company: "Maison Élégance"
    },
    {
      quote: "Professionnalisme, réactivité et créativité : voilà comment je décrirais Alphagence. Ils ont su parfaitement traduire l'identité de notre entreprise dans notre site web.",
      author: "Marc Dupont",
      position: "Fondateur",
      company: "Atelier Cuisine"
    },
    {
      quote: "Nous avions besoin d'un site qui reflète notre expertise et qui génère de la confiance. Alphagence a dépassé nos attentes et notre taux de conversion a doublé.",
      author: "Julie Mercier",
      position: "Responsable Commercial",
      company: "ConseilPro"
    },
    {
      quote: "Investir dans un site web professionnel avec Alphagence a été la meilleure décision pour notre entreprise. Le retour sur investissement est rapidement visible.",
      author: "Thomas Lefort",
      position: "CEO",
      company: "InnoTech Solutions"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="animate-on-scroll section-heading inline-block mx-auto">
            Ce Que Nos Clients Disent
          </h2>
          <p className="animate-on-scroll text-lg text-gray-600 max-w-3xl mx-auto mt-8">
            La satisfaction de nos clients est notre priorité. Voici quelques témoignages de ceux qui nous ont fait confiance.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="animate-on-scroll relative h-[280px] md:h-[220px]">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={`absolute w-full transition-all duration-500 ease-in-out ${
                  index === activeIndex 
                    ? 'opacity-100 translate-x-0 z-20' 
                    : index === (activeIndex - 1 + testimonials.length) % testimonials.length
                      ? 'opacity-0 -translate-x-full z-10' 
                      : 'opacity-0 translate-x-full z-10'
                }`}
              >
                <Testimonial
                  quote={testimonial.quote}
                  author={testimonial.author}
                  position={testimonial.position}
                  company={testimonial.company}
                />
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-10">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 mx-1 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? 'bg-alphagence-gold w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="animate-on-scroll mt-16 flex flex-wrap justify-center gap-12">
          <div className="text-center">
            <div className="text-4xl font-bold text-alphagence-gold mb-2">100+</div>
            <div className="text-gray-600">Projets Livrés</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-alphagence-gold mb-2">95%</div>
            <div className="text-gray-600">Clients Satisfaits</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-alphagence-gold mb-2">+40%</div>
            <div className="text-gray-600">Conversion Moyenne</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-alphagence-gold mb-2">24/7</div>
            <div className="text-gray-600">Support Client</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
