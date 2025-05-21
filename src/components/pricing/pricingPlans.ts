
export interface PricingPlan {
  tier: string;
  price: string;
  description: string;
  features: string[];
  isPopular: boolean;
}

export const pricingPlans: PricingPlan[] = [
  {
    tier: "Essentiel",
    price: "79€",
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
    isPopular: false
  },
  {
    tier: "Business",
    price: "149€",
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
    isPopular: true
  },
  {
    tier: "Commerce",
    price: "299€",
    description: "Solution e-commerce complète pour vendre vos produits en ligne",
    features: [
      "Boutique en ligne complète",
      "Jusqu'à 100 produits",
      "Système de paiement sécurisé",
      "Gestion des stocks",
      "Paniers abandonnés",
      "Emails transactionnels",
      "Optimisation des conversions",
      "Formation à l'administration",
      "Support dédié 24/7"
    ],
    isPopular: false
  }
];
