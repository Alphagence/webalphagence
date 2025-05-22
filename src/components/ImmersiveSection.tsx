
import { useEffect } from 'react';
import ScrollExpandMedia from '@/components/ui/scroll-expansion-hero';
import { motion } from 'framer-motion';

const ImmersiveSection = () => {
  const mediaContent = {
    src: '/2025-05-20-15_44_19.mp4',
    background: 'https://images.unsplash.com/photo-1557682250-33bd709cbe85?q=80&w=1920&auto=format&fit=crop',
    title: 'Solutions Digitales Créatives',
    date: 'Alphagence',
    scrollToExpand: 'Défilez pour explorer',
  };

  useEffect(() => {
    // Force reset scroll position to top
    window.scrollTo(0, 0);
    
    // Dispatch a reset event to reset the scroll expansion state
    const resetEvent = new Event('resetSection');
    window.dispatchEvent(resetEvent);

    // Force page to be at top initially and prevent any scrolling
    const preventScroll = (e: Event) => {
      if (window.scrollY !== 0) {
        window.scrollTo(0, 0);
      }
    };

    // Add an immediate scroll handler with high priority
    window.addEventListener('scroll', preventScroll, { capture: true });

    // Remove the handler after a short delay
    const timeout = setTimeout(() => {
      window.removeEventListener('scroll', preventScroll, { capture: true });
    }, 1000);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener('scroll', preventScroll, { capture: true });
    };
  }, []);

  return (
    <div className="min-h-screen bg-alphagence-black" id="immersive-section">
      <ScrollExpandMedia
        mediaType="video"
        mediaSrc={mediaContent.src}
        bgImageSrc={mediaContent.background}
        title={mediaContent.title}
        date={mediaContent.date}
        scrollToExpand={mediaContent.scrollToExpand}
        textBlend
        bgColor="bg-alphagence-black"
      >
        <div className="max-w-4xl mx-auto text-white">
          <motion.h2 
            className="animate-on-scroll text-3xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Notre approche créative
          </motion.h2>
          
          <motion.p 
            className="animate-on-scroll text-lg mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Chez Alphagence, nous combinons créativité et technologie pour créer des expériences digitales immersives et mémorables. 
            Notre approche intuitive et innovante permet de transformer votre vision en une réalité numérique qui captive et convertit.
          </motion.p>
          
          <motion.p 
            className="animate-on-scroll text-lg mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            Chaque projet est une nouvelle opportunité de repousser les limites du design et de l'expérience utilisateur, 
            en créant des solutions sur mesure qui répondent parfaitement à vos objectifs commerciaux et à l'identité de votre marque.
          </motion.p>
          
          <motion.div 
            className="animate-on-scroll grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <motion.div 
              className="bg-alphagence-black/50 backdrop-blur-sm p-6 rounded-xl border border-alphagence-gold/30"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              whileHover={{ 
                y: -5,
                boxShadow: "0 10px 20px rgba(176, 141, 87, 0.2)",
                borderColor: "rgba(176, 141, 87, 0.6)",
              }}
            >
              <h3 className="text-xl font-semibold mb-3 text-alphagence-gold">Innovation</h3>
              <p>Nous explorons constamment de nouvelles technologies et tendances pour garder votre présence numérique à la pointe.</p>
            </motion.div>
            
            <motion.div 
              className="bg-alphagence-black/50 backdrop-blur-sm p-6 rounded-xl border border-alphagence-gold/30"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              whileHover={{ 
                y: -5,
                boxShadow: "0 10px 20px rgba(176, 141, 87, 0.2)",
                borderColor: "rgba(176, 141, 87, 0.6)",
              }}
            >
              <h3 className="text-xl font-semibold mb-3 text-alphagence-gold">Stratégie</h3>
              <p>Chaque élément de design est pensé pour atteindre vos objectifs commerciaux et engager votre audience cible.</p>
            </motion.div>
            
            <motion.div 
              className="bg-alphagence-black/50 backdrop-blur-sm p-6 rounded-xl border border-alphagence-gold/30"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.4 }}
              whileHover={{ 
                y: -5,
                boxShadow: "0 10px 20px rgba(176, 141, 87, 0.2)",
                borderColor: "rgba(176, 141, 87, 0.6)",
              }}
            >
              <h3 className="text-xl font-semibold mb-3 text-alphagence-gold">Excellence</h3>
              <p>Nous nous engageons à offrir un travail de qualité exceptionnelle, avec une attention méticuleuse aux détails.</p>
            </motion.div>
          </motion.div>
        </div>
      </ScrollExpandMedia>
    </div>
  );
};

export default ImmersiveSection;
