
import React from 'react';
import SectionWithMockup from './ui/section-with-mockup';

const WebsiteBenefitsSection = () => {
  const benefitsData = [
    {
      title: (
        <>
          Visibilité 24/7,
          <br />
          <span className="text-alphagence-gold">Clients Illimités</span>
        </>
      ),
      description: (
        <>
          Votre site web travaille pendant que vous dormez.
          <br />
          Contrairement à un magasin physique, votre présence
          <br />
          digitale accueille vos clients 24h/24, 7j/7, générant
          <br />
          des leads et des ventes même la nuit.
        </>
      ),
      primaryImageSrc: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      secondaryImageSrc: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      reverseLayout: false,
    },
    {
      title: (
        <>
          Crédibilité Instant,
          <br />
          <span className="text-alphagence-gold">Confiance Maximale</span>
        </>
      ),
      description: (
        <>
          85% des consommateurs recherchent une entreprise
          <br />
          en ligne avant d'acheter. Sans site web professionnel,
          <br />
          vous perdez instantanément en crédibilité face à
          <br />
          vos concurrents qui en possèdent un.
        </>
      ),
      primaryImageSrc: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      secondaryImageSrc: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      reverseLayout: true,
    },
    {
      title: (
        <>
          Marketing Automatique,
          <br />
          <span className="text-alphagence-gold">ROI Explosif</span>
        </>
      ),
      description: (
        <>
          Votre site web est votre meilleur commercial.
          <br />
          Il présente vos services, capture des leads,
          <br />
          génère des devis automatiques et convertit
          <br />
          les visiteurs en clients payants.
        </>
      ),
      primaryImageSrc: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      secondaryImageSrc: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      reverseLayout: false,
    },
    {
      title: (
        <>
          Données Précieuses,
          <br />
          <span className="text-alphagence-gold">Décisions Éclairées</span>
        </>
      ),
      description: (
        <>
          Analysez le comportement de vos visiteurs,
          <br />
          identifiez vos pages les plus performantes,
          <br />
          optimisez votre contenu et prenez des décisions
          <br />
          basées sur des données réelles, pas des suppositions.
        </>
      ),
      primaryImageSrc: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      secondaryImageSrc: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      reverseLayout: true,
    },
    {
      title: (
        <>
          Portée Globale,
          <br />
          <span className="text-alphagence-gold">Croissance Infinie</span>
        </>
      ),
      description: (
        <>
          Étendez votre marché au-delà de votre région.
          <br />
          Avec un site web, vos services peuvent atteindre
          <br />
          des clients partout en Suisse et même à l'international,
          <br />
          multipliant vos opportunités de business.
        </>
      ),
      primaryImageSrc: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      secondaryImageSrc: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      reverseLayout: false,
    },
  ];

  return (
    <div className="bg-black">
      {/* Section Header */}
      <section className="py-20 bg-black text-center">
        <div className="container mx-auto px-4">
          <h2 className="animate-on-scroll section-heading inline-block mx-auto text-white mb-8">
            Pourquoi Avoir Un Site Web?
          </h2>
          <p className="animate-on-scroll text-lg text-gray-300 max-w-3xl mx-auto">
            Découvrez comment un site web professionnel peut transformer votre entreprise et multiplier vos opportunités de croissance.
          </p>
        </div>
      </section>

      {/* Benefits Sections */}
      {benefitsData.map((benefit, index) => (
        <SectionWithMockup
          key={index}
          title={benefit.title}
          description={benefit.description}
          primaryImageSrc={benefit.primaryImageSrc}
          secondaryImageSrc={benefit.secondaryImageSrc}
          reverseLayout={benefit.reverseLayout}
        />
      ))}
    </div>
  );
};

export default WebsiteBenefitsSection;
