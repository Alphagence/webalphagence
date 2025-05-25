
export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  technologies: string[];
  link?: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: "1",
    title: "Site E-commerce Premium",
    category: "E-commerce",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&auto=format&fit=crop&q=60",
    description: "Plateforme e-commerce moderne avec système de paiement intégré et gestion d'inventaire avancée.",
    technologies: ["React", "Node.js", "Stripe", "MongoDB"],
    link: "#"
  },
  {
    id: "2", 
    title: "Cabinet Médical Moderne",
    category: "Santé",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&auto=format&fit=crop&q=60",
    description: "Site web pour cabinet médical avec prise de rendez-vous en ligne et gestion des patients.",
    technologies: ["WordPress", "PHP", "MySQL", "Calendly"],
    link: "#"
  },
  {
    id: "3",
    title: "Restaurant Gastronomique",
    category: "Restauration", 
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&auto=format&fit=crop&q=60",
    description: "Site vitrine élégant avec menu interactif et système de réservation en ligne.",
    technologies: ["React", "Tailwind", "Framer Motion", "Sanity"],
    link: "#"
  },
  {
    id: "4",
    title: "Agence Immobilière",
    category: "Immobilier",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&auto=format&fit=crop&q=60",
    description: "Plateforme immobilière avec recherche avancée et visite virtuelle 360°.",
    technologies: ["Vue.js", "Laravel", "MySQL", "Maps API"],
    link: "#"
  },
  {
    id: "5",
    title: "Studio de Fitness",
    category: "Sport & Bien-être",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&auto=format&fit=crop&q=60",
    description: "Site dynamique pour studio de fitness avec planning des cours et abonnements en ligne.",
    technologies: ["React", "Firebase", "Stripe", "PWA"],
    link: "#"
  },
  {
    id: "6",
    title: "Entreprise de Construction",
    category: "BTP",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&auto=format&fit=crop&q=60",
    description: "Site corporate avec portfolio de projets et formulaire de devis personnalisé.",
    technologies: ["Next.js", "Tailwind", "Contentful", "Netlify"],
    link: "#"
  }
];
