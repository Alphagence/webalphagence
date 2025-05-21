
import { useEffect } from 'react';
import ScrollExpandMedia from '@/components/ui/scroll-expansion-hero';

const ImmersiveSection = () => {
  const mediaContent = {
    src: '/2025-05-20-15_44_19.mp4',
    background: 'https://images.unsplash.com/photo-1557682250-33bd709cbe85?q=80&w=1920&auto=format&fit=crop',
    title: 'Solutions Digitales Créatives',
    date: 'Alphagence',
    scrollToExpand: 'Défilez pour explorer',
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    const resetEvent = new Event('resetSection');
    window.dispatchEvent(resetEvent);
  }, []);

  return (
    <div className="min-h-screen" id="immersive-section">
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
          <h2 className="animate-on-scroll text-3xl font-bold mb-6">Notre approche créative</h2>
          <p className="animate-on-scroll text-lg mb-8">
            Chez Alphagence, nous combinons créativité et technologie pour créer des expériences digitales immersives et mémorables. 
            Notre approche intuitive et innovante permet de transformer votre vision en une réalité numérique qui captive et convertit.
          </p>
          <p className="animate-on-scroll text-lg mb-8">
            Chaque projet est une nouvelle opportunité de repousser les limites du design et de l'expérience utilisateur, 
            en créant des solutions sur mesure qui répondent parfaitement à vos objectifs commerciaux et à l'identité de votre marque.
          </p>
          <div className="animate-on-scroll grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-alphagence-black/50 backdrop-blur-sm p-6 rounded-xl border border-alphagence-gold/30">
              <h3 className="text-xl font-semibold mb-3 text-alphagence-gold">Innovation</h3>
              <p>Nous explorons constamment de nouvelles technologies et tendances pour garder votre présence numérique à la pointe.</p>
            </div>
            <div className="bg-alphagence-black/50 backdrop-blur-sm p-6 rounded-xl border border-alphagence-gold/30">
              <h3 className="text-xl font-semibold mb-3 text-alphagence-gold">Stratégie</h3>
              <p>Chaque élément de design est pensé pour atteindre vos objectifs commerciaux et engager votre audience cible.</p>
            </div>
            <div className="bg-alphagence-black/50 backdrop-blur-sm p-6 rounded-xl border border-alphagence-gold/30">
              <h3 className="text-xl font-semibold mb-3 text-alphagence-gold">Excellence</h3>
              <p>Nous nous engageons à offrir un travail de qualité exceptionnelle, avec une attention méticuleuse aux détails.</p>
            </div>
          </div>
        </div>
      </ScrollExpandMedia>
    </div>
  );
};

export default ImmersiveSection;
