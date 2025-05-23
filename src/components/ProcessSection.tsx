
import { Timeline } from "@/components/ui/timeline";

const ProcessSection = () => {
  const processSteps = [
    {
      title: "Étape 1",
      content: (
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-white mb-4">Consultation & Analyse</h3>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Nous commençons par comprendre votre activité, vos objectifs et vos besoins spécifiques. Cette étape est cruciale pour concevoir une solution digitale parfaitement adaptée à votre entreprise.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-alphagence-darkGray p-4 rounded-lg">
              <h4 className="text-alphagence-gold font-semibold mb-2">✓ Audit complet</h4>
              <p className="text-gray-300 text-sm">Analyse de votre présence digitale actuelle</p>
            </div>
            <div className="bg-alphagence-darkGray p-4 rounded-lg">
              <h4 className="text-alphagence-gold font-semibold mb-2">✓ Définition des objectifs</h4>
              <p className="text-gray-300 text-sm">Identification de vos besoins et priorités</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Étape 2",
      content: (
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-white mb-4">Conception & Design</h3>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Notre équipe créative élabore un design sur mesure qui reflète l'identité de votre marque. Nous vous présentons des maquettes pour validation avant de passer à l'étape suivante.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-alphagence-darkGray p-4 rounded-lg">
              <h4 className="text-alphagence-gold font-semibold mb-2">✓ Maquettes personnalisées</h4>
              <p className="text-gray-300 text-sm">Designs uniques adaptés à votre marque</p>
            </div>
            <div className="bg-alphagence-darkGray p-4 rounded-lg">
              <h4 className="text-alphagence-gold font-semibold mb-2">✓ UX/UI optimisée</h4>
              <p className="text-gray-300 text-sm">Interface intuitive et expérience utilisateur fluide</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Étape 3",
      content: (
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-white mb-4">Développement & Intégration</h3>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Nos développeurs transforment le design approuvé en un site web fonctionnel, optimisé pour les performances et compatible avec tous les appareils.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-alphagence-darkGray p-4 rounded-lg">
              <h4 className="text-alphagence-gold font-semibold mb-2">✓ Code optimisé</h4>
              <p className="text-gray-300 text-sm">Développement moderne et performant</p>
            </div>
            <div className="bg-alphagence-darkGray p-4 rounded-lg">
              <h4 className="text-alphagence-gold font-semibold mb-2">✓ Responsive design</h4>
              <p className="text-gray-300 text-sm">Compatible tous appareils et navigateurs</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Étape 4",
      content: (
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-white mb-4">Tests & Lancement</h3>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Après une phase rigoureuse de tests pour garantir la qualité, nous procédons au lancement de votre site. Notre équipe reste disponible pour vous accompagner et optimiser votre présence en ligne.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-alphagence-darkGray p-4 rounded-lg">
              <h4 className="text-alphagence-gold font-semibold mb-2">✓ Tests complets</h4>
              <p className="text-gray-300 text-sm">Vérification de tous les aspects fonctionnels</p>
            </div>
            <div className="bg-alphagence-darkGray p-4 rounded-lg">
              <h4 className="text-alphagence-gold font-semibold mb-2">✓ Support continu</h4>
              <p className="text-gray-300 text-sm">Accompagnement post-lancement et maintenance</p>
            </div>
          </div>
        </div>
      ),
    }
  ];

  return (
    <section id="process" className="bg-black">
      <Timeline data={processSteps} />
    </section>
  );
};

export default ProcessSection;
