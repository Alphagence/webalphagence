
import { Pricing } from "@/components/ui/pricing";

const PricingSection = () => {
  const pricingPlans = [
    {
      name: "Essentiel",
      price: "99",
      yearlyPrice: "79",
      period: "mois",
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
      href: "/contact",
      isPopular: false
    },
    {
      name: "Business",
      price: "199",
      yearlyPrice: "159",
      period: "mois",
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
      href: "/contact",
      isPopular: true
    },
    {
      name: "Premium 3D",
      price: "299",
      yearlyPrice: "239",
      period: "mois",
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
      href: "/contact",
      isPopular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-heading inline-block mx-auto text-white">
            Tarification Transparente
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mt-8">
            Des forfaits adaptés à tous les besoins et budgets, sans frais cachés.
            <br />
            Découvrez nos solutions avec des expériences 3D immersives.
          </p>
        </div>

        <div className="mt-12">
          <Pricing plans={pricingPlans} />
        </div>
      </div>
      
      <div className="container mx-auto px-4 mt-16">
        <div className="text-center p-8 bg-gray-900 rounded-xl max-w-4xl mx-auto border border-gray-700">
          <h3 className="text-2xl font-bold mb-4 text-alphagence-gold">Besoin d'une solution sur mesure?</h3>
          <p className="text-gray-300 mb-6">
            Nous proposons également des solutions personnalisées pour les projets complexes ou spécifiques.
            Contactez-nous pour discuter de vos besoins et découvrir nos possibilités d'intégration 3D avancées.
          </p>
          <button className="bg-alphagence-gold hover:bg-alphagence-gold/90 text-black px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
            Demander un devis personnalisé
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
