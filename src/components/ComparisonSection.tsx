
import { useEffect, useRef } from 'react';
import { PinContainer } from '@/components/ui/3d-pin';
import { Clock, Euro, Headphones, Shield, Zap, Users } from 'lucide-react';

const ComparisonSection = () => {
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

  return (
    <section ref={sectionRef} className="py-20 bg-black relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="animate-on-scroll section-heading inline-block mx-auto text-white">
            Quelles sont les différences?
          </h2>
          <p className="animate-on-scroll text-lg text-gray-300 max-w-3xl mx-auto mt-8">
            Découvrez pourquoi Alphagence révolutionne la création de sites web avec des avantages inégalés
          </p>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-16 max-w-7xl mx-auto mb-20">
          {/* Alphagence */}
          <div className="animate-on-scroll">
            <PinContainer title="Innovation Alphagence">
              <div className="flex flex-col p-6 tracking-tight text-slate-100/90 w-[22rem] h-[28rem] bg-gradient-to-b from-alphagence-gold/20 to-alphagence-gold/5 backdrop-blur-sm border border-alphagence-gold/40 rounded-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="size-3 rounded-full bg-alphagence-gold animate-pulse" />
                  <div className="text-xs text-alphagence-gold font-semibold">Alphagence</div>
                </div>

                <div className="text-2xl font-bold text-alphagence-gold mb-6">
                  Innovation 3D Immersive
                </div>
                
                <div className="space-y-4 flex-1">
                  <div className="flex items-start gap-3">
                    <Zap className="h-5 w-5 text-alphagence-gold mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-medium text-white">Livraison express</div>
                      <div className="text-xs text-gray-300">2-4 semaines garanties</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Euro className="h-5 w-5 text-alphagence-gold mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-medium text-white">Prix transparent</div>
                      <div className="text-xs text-gray-300">À partir de 99 CHF/mois tout inclus</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Headphones className="h-5 w-5 text-alphagence-gold mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-medium text-white">Support 7j/7</div>
                      <div className="text-xs text-gray-300">Réponse sous 24h garantie</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-alphagence-gold mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-medium text-white">Technologie 3D de pointe</div>
                      <div className="text-xs text-gray-300">Expériences immersives uniques</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-alphagence-gold mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-medium text-white">Interface intuitive</div>
                      <div className="text-xs text-gray-300">Modifications en temps réel</div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 p-3 bg-alphagence-gold/20 rounded-lg border border-alphagence-gold/40">
                  <div className="text-xs text-alphagence-gold text-center font-semibold">
                    ✨ Site 3D immersif qui convertit 3x plus
                  </div>
                </div>
              </div>
            </PinContainer>
          </div>

          {/* VS Divider */}
          <div className="animate-on-scroll">
            <div className="text-4xl font-bold text-alphagence-gold">VS</div>
          </div>

          {/* Agence Traditionnelle */}
          <div className="animate-on-scroll">
            <PinContainer title="Méthodes obsolètes">
              <div className="flex flex-col p-6 tracking-tight text-slate-100/70 w-[22rem] h-[28rem] bg-gradient-to-b from-red-900/30 to-red-800/10 backdrop-blur-sm border border-red-500/30 rounded-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="size-3 rounded-full bg-red-500 animate-pulse" />
                  <div className="text-xs text-red-300">Agence Traditionnelle</div>
                </div>

                <div className="text-2xl font-bold text-red-200 mb-6">
                  Méthodes Archaïques
                </div>
                
                <div className="space-y-4 flex-1">
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-red-400 mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-medium text-red-200">Délais interminables</div>
                      <div className="text-xs text-slate-400">3-6 mois de développement</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Euro className="h-5 w-5 text-red-400 mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-medium text-red-200">Coûts cachés</div>
                      <div className="text-xs text-slate-400">5 000€ - 20 000€ + maintenance</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Headphones className="h-5 w-5 text-red-400 mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-medium text-red-200">Support limité</div>
                      <div className="text-xs text-slate-400">Heures de bureau uniquement</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-red-400 mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-medium text-red-200">Technologies obsolètes</div>
                      <div className="text-xs text-slate-400">Sites lents et peu optimisés</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-red-400 mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-medium text-red-200">Communication difficile</div>
                      <div className="text-xs text-slate-400">Modifications complexes</div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 p-3 bg-red-900/20 rounded-lg border border-red-500/20">
                  <div className="text-xs text-red-300 text-center">
                    ❌ Résultat décevant pour un investissement élevé
                  </div>
                </div>
              </div>
            </PinContainer>
          </div>
        </div>

        <div className="text-center">
          <div className="animate-on-scroll max-w-4xl mx-auto p-8 bg-gradient-to-r from-alphagence-gold/10 to-alphagence-gold/5 rounded-2xl border border-alphagence-gold/20">
            <h3 className="text-3xl font-bold mb-4 text-alphagence-gold">Pourquoi choisir Alphagence?</h3>
            <div className="grid md:grid-cols-3 gap-6 mt-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-white">300%</div>
                <div className="text-sm text-gray-300">Plus d'engagement utilisateur</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white">70%</div>
                <div className="text-sm text-gray-300">Réduction des coûts</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white">5x</div>
                <div className="text-sm text-gray-300">Plus rapide à développer</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
