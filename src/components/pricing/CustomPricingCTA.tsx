
import { Button } from "@/components/ui/button";

const CustomPricingCTA = () => {
  return (
    <div className="animate-on-scroll text-center mt-12 p-8 bg-gray-50 rounded-xl max-w-3xl mx-auto">
      <h3 className="text-2xl font-bold mb-4">Besoin d'une solution sur mesure?</h3>
      <p className="text-gray-600 mb-6">
        Nous proposons également des solutions personnalisées pour les projets complexes ou spécifiques.
        Contactez-nous pour discuter de vos besoins.
      </p>
      <Button className="bg-alphagence-black hover:bg-alphagence-black/90 text-white">
        Demander un devis personnalisé
      </Button>
    </div>
  );
};

export default CustomPricingCTA;
