
import { useEffect, useRef, useState } from 'react';

interface TestimonialProps {
  quote: string;
  author: string;
  position: string;
  company: string;
}

const Testimonial = ({ quote, author, position, company }: TestimonialProps) => {
  return (
    <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 relative">
      <div className="absolute -top-5 left-8 text-6xl text-alphagence-gold opacity-40">"</div>
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
  const sliderRef = useRef<HTMLDivElement>(null);
  
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

  // Apply drag effect for testimonial slider
  useEffect(() => {
    if (sliderRef.current) {
      let isDragging = false;
      let startX = 0;
      let scrollLeft = 0;

      const slider = sliderRef.current;

      const onMouseDown = (e: MouseEvent) => {
        isDragging = true;
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
        slider.style.cursor = 'grabbing';
      };

      const onMouseMove = (e: MouseEvent) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 2;
        slider.scrollLeft = scrollLeft - walk;
      };

      const onMouseUp = () => {
        isDragging = false;
        slider.style.cursor = 'grab';
      };

      slider.addEventListener('mousedown', onMouseDown);
      slider.addEventListener('mousemove', onMouseMove);
      slider.addEventListener('mouseup', onMouseUp);
      slider.addEventListener('mouseleave', onMouseUp);

      return () => {
        slider.removeEventListener('mousedown', onMouseDown);
        slider.removeEventListener('mousemove', onMouseMove);
        slider.removeEventListener('mouseup', onMouseUp);
        slider.removeEventListener('mouseleave', onMouseUp);
      };
    }
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
    <section ref={sectionRef} className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="animate-on-scroll section-heading inline-block mx-auto">
            Ce Que Nos Clients Disent
          </h2>
          <p className="animate-on-scroll text-lg text-gray-600 max-w-3xl mx-auto mt-8">
            La satisfaction de nos clients est notre priorité. Voici quelques témoignages de ceux qui nous ont fait confiance.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Slider with drag effect */}
          <div ref={sliderRef} className="animate-on-scroll overflow-hidden cursor-grab" style={{ touchAction: 'pan-y' }}>
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="min-w-full px-4">
                  <Testimonial
                    quote={testimonial.quote}
                    author={testimonial.author}
                    position={testimonial.position}
                    company={testimonial.company}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Animated dots */}
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
            <div className="text-4xl font-bold text-alphagence-gold mb-2 counter" data-count="100">100+</div>
            <div className="text-gray-600">Projets Livrés</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-alphagence-gold mb-2 counter" data-count="95">95%</div>
            <div className="text-gray-600">Clients Satisfaits</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-alphagence-gold mb-2 counter" data-count="40">+40%</div>
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
