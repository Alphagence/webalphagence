
import { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { 
  ContainerAnimated,
  ContainerScroll,
  ContainerStagger,
  ContainerSticky,
  GalleryCol,
  GalleryContainer 
} from "@/components/ui/animated-gallery";

const PortfolioSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  // Portfolio items for the gallery - Column 1 (4 items)
  const portfolioItemsCol1 = [
    {
      title: "Site E-commerce Mode",
      description: "Site de vente en ligne pour une boutique de vêtements haut de gamme",
      imageUrl: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZhc2hpb24lMjB3ZWJzaXRlfGVufDB8fDB8fHww"
    },
    {
      title: "App Restaurant",
      description: "Application de commande en ligne et de réservation pour un restaurant",
      imageUrl: "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmVzdGF1cmFudCUyMGFwcHxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      title: "Plateforme Fintech",
      description: "Application mobile de gestion financière et d'investissement",
      imageUrl: "https://images.unsplash.com/photo-1559526324-593bc073d938?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmluYW5jZSUyMGFwcHxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      title: "Site Médical",
      description: "Plateforme de téléconsultation pour professionnels de santé",
      imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVkaWNhbCUyMHdlYnNpdGV8ZW58MHx8MHx8fDA%3D"
    },
  ];
  
  // Portfolio items for the gallery - Column 2 (4 items)
  const portfolioItemsCol2 = [
    {
      title: "Plateforme SaaS B2B",
      description: "Application web pour la gestion de projet et la collaboration d'équipe",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGFzaGJvYXJkfGVufDB8fDB8fHww"
    },
    {
      title: "Site Événementiel",
      description: "Plateforme pour la gestion et promotion d'événements culturels",
      imageUrl: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZXZlbnR8ZW58MHx8MHx8fDA%3D"
    },
    {
      title: "App Fitness",
      description: "Application de coaching sportif et suivi nutritionnel personnalisé",
      imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zml0bmVzcyUyMGFwcHxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      title: "Plateforme de Livraison",
      description: "Solution complète de livraison à domicile multi-restaurateurs",
      imageUrl: "https://images.unsplash.com/photo-1586816001966-79b736744398?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGVsaXZlcnklMjBhcHB8ZW58MHx8MHx8fDA%3D"
    },
  ];
  
  // Portfolio items for the gallery - Column 3 (4 items)
  const portfolioItemsCol3 = [
    {
      title: "Site Vitrine Immobilier",
      description: "Présentation d'une agence immobilière spécialisée dans le luxe",
      imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      title: "Portail Éducatif",
      description: "Plateforme d'apprentissage en ligne pour une école de commerce",
      imageUrl: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWR1Y2F0aW9ufGVufDB8fDB8fHww"
    },
    {
      title: "App Voyage",
      description: "Application de planification de voyages et réservation d'hébergements",
      imageUrl: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHJhdmVsJTIwYXBwfGVufDB8fDB8fHww"
    },
    {
      title: "Marketplace Artisanat",
      description: "Plateforme de vente en ligne dédiée aux créateurs et artisans locaux",
      imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGFuZGNyYWZ0fGVufDB8fDB8fHww"
    },
  ];

  return (
    <section id="portfolio" ref={sectionRef} className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <ContainerStagger className="text-center mb-12">
          <ContainerAnimated>
            <h2 className="section-heading inline-block mx-auto text-white">
              Nos Dernières Réalisations
            </h2>
          </ContainerAnimated>
          <ContainerAnimated>
            <p className="text-lg text-white/80 max-w-3xl mx-auto mt-6">
              Découvrez comment nous transformons les idées de nos clients en expériences numériques performantes et esthétiques dans tous les secteurs d'activité.
            </p>
          </ContainerAnimated>
        </ContainerStagger>

        <div className="relative bg-black">
          <div className="pointer-events-none absolute z-10 h-[40vh] w-full"
            style={{
              background: "linear-gradient(to right, #111, #B08D57, #333)",
              filter: "blur(94px)",
              mixBlendMode: "overlay",
              opacity: 0.3,
            }}
          />

          <ContainerScroll className="relative h-[250vh]">
            <ContainerSticky className="h-[80vh]">
              <GalleryContainer>
                <GalleryCol yRange={["-10%", "2%"]} className="-mt-2">
                  {portfolioItemsCol1.map((item, index) => (
                    <div key={index} className="relative group">
                      <img
                        className="aspect-video block h-auto w-full rounded-md object-cover shadow transition-transform duration-300 group-hover:scale-[1.02]"
                        src={item.imageUrl}
                        alt={item.title}
                      />
                      <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-md">
                        <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                        <p className="text-sm text-white/80">{item.description}</p>
                        <Button
                          variant="ghost"
                          className="text-alphagence-gold hover:text-alphagence-gold/90 hover:bg-alphagence-gold/10 p-0 text-sm mt-2 w-fit"
                        >
                          Voir le projet
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="ml-2"
                          >
                            <path
                              d="M1 7H13M13 7L7 1M13 7L7 13"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </Button>
                      </div>
                    </div>
                  ))}
                </GalleryCol>

                <GalleryCol className="mt-[-30%]" yRange={["15%", "5%"]}>
                  {portfolioItemsCol2.map((item, index) => (
                    <div key={index} className="relative group">
                      <img
                        className="aspect-video block h-auto w-full rounded-md object-cover shadow transition-transform duration-300 group-hover:scale-[1.02]"
                        src={item.imageUrl}
                        alt={item.title}
                      />
                      <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-md">
                        <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                        <p className="text-sm text-white/80">{item.description}</p>
                        <Button
                          variant="ghost"
                          className="text-alphagence-gold hover:text-alphagence-gold/90 hover:bg-alphagence-gold/10 p-0 text-sm mt-2 w-fit"
                        >
                          Voir le projet
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="ml-2"
                          >
                            <path
                              d="M1 7H13M13 7L7 1M13 7L7 13"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </Button>
                      </div>
                    </div>
                  ))}
                </GalleryCol>

                <GalleryCol yRange={["-10%", "2%"]} className="-mt-2">
                  {portfolioItemsCol3.map((item, index) => (
                    <div key={index} className="relative group">
                      <img
                        className="aspect-video block h-auto w-full rounded-md object-cover shadow transition-transform duration-300 group-hover:scale-[1.02]"
                        src={item.imageUrl}
                        alt={item.title}
                      />
                      <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-md">
                        <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                        <p className="text-sm text-white/80">{item.description}</p>
                        <Button
                          variant="ghost"
                          className="text-alphagence-gold hover:text-alphagence-gold/90 hover:bg-alphagence-gold/10 p-0 text-sm mt-2 w-fit"
                        >
                          Voir le projet
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="ml-2"
                          >
                            <path
                              d="M1 7H13M13 7L7 1M13 7L7 13"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </Button>
                      </div>
                    </div>
                  ))}
                </GalleryCol>
              </GalleryContainer>
            </ContainerSticky>
          </ContainerScroll>

          <div className="text-center pt-12">
            <Button className="bg-alphagence-gold hover:bg-alphagence-gold/90 text-black text-base py-5 px-6">
              Voir tous nos projets
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
