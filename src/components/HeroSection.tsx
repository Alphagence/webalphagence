
import { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";
import { InteractiveSpotlight } from "@/components/ui/interactive-spotlight";
import { motion } from "framer-motion";
import TypewriterEffect from './TypewriterEffect';

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    if (sectionRef.current) {
      // Add initial animations without waiting for scroll
      const title = sectionRef.current.querySelector('.hero-title');
      const paragraph = sectionRef.current.querySelector('.hero-description');
      const buttons = sectionRef.current.querySelectorAll('.btn-group button');
      
      setTimeout(() => {
        title?.classList.add('animated');
      }, 300);
      
      setTimeout(() => {
        paragraph?.classList.add('animated');
      }, 600);
      
      buttons.forEach((btn, index) => {
        setTimeout(() => {
          btn.classList.add('animated');
        }, 900 + (index * 200));
      });
    }
  }, []);

  // Animation variants for framer-motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section 
      ref={sectionRef} 
      id="hero"
      className="relative min-h-screen flex items-center bg-alphagence-black overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-alphagence-black opacity-90"></div>
      
      {/* Spline 3D animation background */}
      <div className="absolute inset-0 opacity-40">
        <SplineScene 
          scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode" 
          className="w-full h-full"
        />
      </div>

      {/* Interactive spotlight effect */}
      <InteractiveSpotlight 
        className="z-10" 
        size={600}
        springOptions={{ stiffness: 100, damping: 30 }}
      />
      
      {/* Static spotlight effects */}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="#B08D57"
      />
      <Spotlight
        className="top-40 right-0 md:right-60 md:top-20 rotate-180"
        fill="#B08D57"
      />
      
      {/* Animated lines */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[20%] left-0 w-full h-px bg-gradient-to-r from-transparent via-alphagence-gold/20 to-transparent"></div>
        <div className="absolute top-[40%] left-0 w-full h-px bg-gradient-to-r from-transparent via-alphagence-gold/15 to-transparent"></div>
        <div className="absolute top-[60%] left-0 w-full h-px bg-gradient-to-r from-transparent via-alphagence-gold/10 to-transparent"></div>
        <div className="absolute top-[80%] left-0 w-full h-px bg-gradient-to-r from-transparent via-alphagence-gold/5 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 py-24 relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto md:mx-0"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            className="hero-title text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            variants={itemVariants}
          >
            <span className="text-alphagence-gold block mb-2">Un site moderne</span> 
            et performant,<br />
            adapté aux besoins des <span className="text-alphagence-gold">PME</span>
          </motion.h1>
          
          <motion.p 
            className="hero-description text-lg md:text-xl text-white/80 mb-10"
            variants={itemVariants}
          >
            Faites passer votre entreprise à l'ère du numérique avec un site web professionnel qui attire et convertit vos visiteurs en clients fidèles.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 btn-group"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <Button className="bg-alphagence-gold hover:bg-alphagence-gold/90 text-black text-lg py-6 px-8 w-full sm:w-auto">
                Demander un devis gratuit
              </Button>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 text-lg py-6 px-8 w-full sm:w-auto">
                Découvrir nos services
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Add animated typing text at the bottom */}
      <div className="absolute bottom-6 right-6 bg-black/60 text-alphagence-gold px-4 py-2 rounded-full text-sm font-mono border border-alphagence-gold/20 backdrop-blur-sm">
        <TypewriterEffect />
      </div>
    </section>
  );
};

export default HeroSection;
