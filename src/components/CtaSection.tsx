
import { PulseBeams } from "@/components/ui/pulse-beams";

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
  }
];

const gradientColors = {
  start: "#B08D57",
  middle: "#8A6D42", 
  end: "#B08D57"
};

const CtaSection = () => {
  return (
    <section id="contact" className="relative">
      <PulseBeams
        beams={beams}
        gradientColors={gradientColors}
        className="bg-black h-screen flex items-center justify-center"
      >
        <div className="text-center z-40 max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">
            Faites passer votre entreprise à l'ère numérique
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-gray-300 max-w-3xl mx-auto">
            Un site web professionnel qui attire et convertit vos visiteurs en clients fidèles
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button 
              onClick={() => window.open('https://calendly.com/alphameed/rendez-vous-informations-et-renseignements', '_blank')}
              className="bg-alphagence-gold hover:bg-alphagence-gold/90 text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              Réserver un rendez-vous gratuit
            </button>
            <button 
              onClick={() => window.open('https://calendly.com/alphameed/rendez-vous-informations-et-renseignements', '_blank')}
              className="border-2 border-alphagence-gold text-alphagence-gold hover:bg-alphagence-gold hover:text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Demander un devis
            </button>
          </div>
        </div>
      </PulseBeams>
    </section>
  );
};

export default CtaSection;
