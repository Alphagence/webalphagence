
import { useEffect, useRef } from 'react';
import { PulseBeams } from '@/components/ui/pulse-beams';

const CtaSection = () => {
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

  const beams = [
    {
      path: "M269 220.5H16.5C10.9772 220.5 6.5 224.977 6.5 230.5V398.5",
      gradientConfig: {
        initial: {
          x1: "0%",
          x2: "0%",
          y1: "80%",
          y2: "100%",
        },
        animate: {
          x1: ["0%", "0%", "200%"],
          x2: ["0%", "0%", "180%"],
          y1: ["80%", "0%", "0%"],
          y2: ["100%", "20%", "20%"],
        },
        transition: {
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          repeatDelay: 2,
          delay: Math.random() * 2,
        },
      },
      connectionPoints: [
        { cx: 6.5, cy: 398.5, r: 6 },
        { cx: 269, cy: 220.5, r: 6 }
      ]
    },
    {
      path: "M568 200H841C846.523 200 851 195.523 851 190V40",
      gradientConfig: {
        initial: {
          x1: "0%",
          x2: "0%",
          y1: "80%",
          y2: "100%",
        },
        animate: {
          x1: ["20%", "100%", "100%"],
          x2: ["0%", "90%", "90%"],
          y1: ["80%", "80%", "-20%"],
          y2: ["100%", "100%", "0%"],
        },
        transition: {
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          repeatDelay: 2,
          delay: Math.random() * 2,
        },
      },
      connectionPoints: [
        { cx: 851, cy: 34, r: 6.5 },
        { cx: 568, cy: 200, r: 6 }
      ]
    },
    {
      path: "M425.5 274V333C425.5 338.523 421.023 343 415.5 343H152C146.477 343 142 347.477 142 353V426.5",
      gradientConfig: {
        initial: {
          x1: "0%",
          x2: "0%",
          y1: "80%",
          y2: "100%",
        },
        animate: {
          x1: ["20%", "100%", "100%"],
          x2: ["0%", "90%", "90%"],
          y1: ["80%", "80%", "-20%"],
          y2: ["100%", "100%", "0%"],
        },
        transition: {
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          repeatDelay: 2,
          delay: Math.random() * 2,
        },
      },
      connectionPoints: [
        { cx: 142, cy: 427, r: 6.5 },
        { cx: 425.5, cy: 274, r: 6 }
      ]
    },
    {
      path: "M493 274V333.226C493 338.749 497.477 343.226 503 343.226H760C765.523 343.226 770 347.703 770 353.226V427",
      gradientConfig: {
        initial: {
          x1: "40%",
          x2: "50%",
          y1: "160%",
          y2: "180%",
        },
        animate: {
          x1: "0%",
          x2: "10%",
          y1: "-40%",
          y2: "-20%",
        },
        transition: {
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          repeatDelay: 2,
          delay: Math.random() * 2,
        },
      },
      connectionPoints: [
        { cx: 770, cy: 427, r: 6.5 },
        { cx: 493, cy: 274, r: 6 }
      ]
    },
    {
      path: "M380 168V17C380 11.4772 384.477 7 390 7H414",
      gradientConfig: {
        initial: {
          x1: "-40%",
          x2: "-10%",
          y1: "0%",
          y2: "20%",
        },
        animate: {
          x1: ["40%", "0%", "0%"],
          x2: ["10%", "0%", "0%"],
          y1: ["0%", "0%", "180%"],
          y2: ["20%", "20%", "200%"],
        },
        transition: {
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          repeatDelay: 2,
          delay: Math.random() * 2,
        },
      },
      connectionPoints: [
        { cx: 420.5, cy: 6.5, r: 6 },
        { cx: 380, cy: 168, r: 6 }
      ]
    }
  ];

  const gradientColors = {
    start: "#B08D57",
    middle: "#B08D57",
    end: "#B08D57"
  };

  return (
    <section id="contact" ref={sectionRef} className="relative py-20 bg-black overflow-hidden">
      <PulseBeams
        beams={beams}
        gradientColors={gradientColors}
        className="absolute inset-0 bg-black"
        baseColor="#333333"
        accentColor="#B08D57"
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <h2 className="animate-on-scroll section-heading inline-block mx-auto text-white">
            Prêt à transformer votre présence en ligne?
          </h2>
          <p className="animate-on-scroll text-lg text-gray-300 max-w-2xl mx-auto mt-8 mb-12">
            Rejoignez les entreprises qui ont choisi Alphagence pour leur transformation digitale. 
            Obtenez un site web 3D qui vous démarque de la concurrence.
          </p>

          <div className="animate-on-scroll flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a 
              href="tel:+41767972683"
              className="inline-flex items-center px-8 py-4 bg-alphagence-gold text-black font-bold rounded-lg hover:bg-alphagence-gold/90 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
              +41 76 797 26 83
            </a>
            
            <a 
              href="mailto:info@alphagence.com"
              className="inline-flex items-center px-8 py-4 border-2 border-alphagence-gold text-alphagence-gold font-bold rounded-lg hover:bg-alphagence-gold hover:text-black transition-all duration-300 transform hover:scale-105 shadow-lg backdrop-blur-sm"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              info@alphagence.com
            </a>
          </div>

          <div className="animate-on-scroll mt-8 text-center">
            <p className="text-gray-400 mb-2">📍 Z.I la palaz 3A, 1530 Payerne</p>
            <p className="text-sm text-gray-500">Réponse garantie sous 24h</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
