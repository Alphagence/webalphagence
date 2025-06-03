
import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";

const PricingSection = () => {
  const scrollToCalendly = () => {
    const calendlySection = document.getElementById('calendly-booking');
    if (calendlySection) {
      calendlySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const pricingPlans = [
    {
      name: "Essentiel",
      description: "Idéal pour les petites entreprises qui débutent leur présence en ligne",
      features: [
        "Site vitrine jusqu'à 5 pages",
        "Design responsive",
        "Formulaire de contact",
        "Intégration des réseaux sociaux",
        "Optimisation SEO de base",
        "Hébergement et domaine (1 an)",
        "Support par email"
      ],
      buttonText: "En savoir plus",
      isPopular: false
    },
    {
      name: "Business",
      description: "Pour les PME qui souhaitent une présence en ligne professionnelle et complète",
      features: [
        "Site jusqu'à 10 pages",
        "Design premium personnalisé",
        "Blog intégré",
        "Optimisation SEO avancée",
        "Intégration Google Analytics",
        "Formulaires avancés",
        "Chat en direct",
        "Support prioritaire 7j/7"
      ],
      buttonText: "Commencer maintenant",
      isPopular: true
    },
    {
      name: "Premium 3D",
      description: "Solution complète avec expériences immersives 3D pour se démarquer",
      features: [
        "Tout du pack Business",
        "Site immersif avec éléments 3D",
        "Animations et interactions avancées",
        "Expérience utilisateur immersive",
        "Visites virtuelles 3D",
        "Configurateurs de produits 3D",
        "Formation complète à l'administration",
        "Support dédié 24/7"
      ],
      buttonText: "Découvrir le 3D",
      isPopular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{
                y: plan.isPopular ? -20 : 0,
                opacity: 1,
                scale: plan.isPopular ? 1.05 : 1,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                type: "spring",
                stiffness: 100,
                damping: 30,
                delay: index * 0.1,
              }}
              className={`rounded-2xl border-2 p-8 bg-gray-900 text-center relative flex flex-col ${
                plan.isPopular ? "border-alphagence-gold shadow-2xl shadow-alphagence-gold/20" : "border-gray-700"
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-alphagence-gold text-black px-6 py-2 rounded-full flex items-center">
                  <Star className="h-4 w-4 fill-current mr-1" />
                  <span className="font-semibold">Le plus populaire</span>
                </div>
              )}
              
              <div className="flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-alphagence-gold mb-2">
                  {plan.name}
                </h3>

                <p className="text-gray-300 mb-6">{plan.description}</p>

                <ul className="space-y-4 mb-8 flex-1">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-alphagence-gold mt-0.5 flex-shrink-0" />
                      <span className="text-left text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={scrollToCalendly}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                    plan.isPopular
                      ? "bg-alphagence-gold text-black hover:bg-alphagence-gold/90"
                      : "bg-gray-800 text-white border-2 border-alphagence-gold hover:bg-alphagence-gold hover:text-black"
                  }`}
                >
                  {plan.buttonText}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="container mx-auto px-4 mt-16">
          <div className="text-center p-8 bg-gray-900 rounded-xl max-w-4xl mx-auto border border-gray-700">
            <h3 className="text-2xl font-bold mb-4 text-alphagence-gold">Besoin d'une solution sur mesure?</h3>
            <p className="text-gray-300 mb-6">
              Nous proposons également des solutions personnalisées pour les projets complexes ou spécifiques.
              Contactez-nous pour discuter de vos besoins et découvrir nos possibilités d'intégration 3D avancées.
            </p>
            <button 
              onClick={scrollToCalendly}
              className="bg-alphagence-gold hover:bg-alphagence-gold/90 text-black px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Demander un devis personnalisé
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
