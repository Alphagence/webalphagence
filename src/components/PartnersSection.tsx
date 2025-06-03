
"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const PartnersSection = () => {
  const partners = [
    {
      id: "wordpress",
      description: "WordPress Partner",
      image: "/lovable-uploads/05ad3960-ee9c-468e-8bc7-2a6211e6490a.png",
      className: "h-12 w-auto",
    },
    {
      id: "pinterest",
      description: "Pinterest Marketing Partners",
      image: "/lovable-uploads/426f72fe-76b2-40a4-92d8-e0e1406b7e02.png",
      className: "h-12 w-auto",
    },
    {
      id: "tiktok",
      description: "TikTok Marketing Partners",
      image: "/lovable-uploads/c98cc64f-a49c-4de2-9212-0edaff8767a7.png",
      className: "h-12 w-auto",
    },
    {
      id: "linkedin",
      description: "LinkedIn Marketing Partner",
      image: "/lovable-uploads/c02002b4-58c7-4ee5-8436-a04b8922f85f.png",
      className: "h-12 w-auto",
    },
    {
      id: "meta",
      description: "Meta Business Partner",
      image: "/lovable-uploads/732b237f-9e0a-4716-8df3-f661c96a9cf3.png",
      className: "h-12 w-auto",
    },
    {
      id: "snapchat",
      description: "Snapchat Advanced Partner",
      image: "/lovable-uploads/c1e39cc1-0d3e-47af-a1c7-af0c6cb91381.png",
      className: "h-12 w-auto",
    },
    {
      id: "google",
      description: "Google Partner",
      image: "/lovable-uploads/eb8f32c0-b7d9-43ae-a10d-fe997db8b92c.png",
      className: "h-12 w-auto",
    },
    {
      id: "shopify",
      description: "Shopify Certified Partner",
      image: "/lovable-uploads/518272df-13ef-4290-9d84-527baa85d4a6.png",
      className: "h-12 w-auto",
    },
    {
      id: "webflow",
      description: "Webflow Premium Partner",
      image: "/lovable-uploads/dd159132-29b2-4a3a-a38a-187a0542646d.png",
      className: "h-12 w-auto",
    },
    {
      id: "google-analytics",
      description: "Google Analytics Certified Partner",
      image: "/lovable-uploads/7cdbf023-9e45-452c-8ba9-68d4de32cbae.png",
      className: "h-12 w-auto",
    },
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-heading inline-block mx-auto text-white">
            Nos Partenaires de Confiance
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mt-8">
            Nous collaborons avec les leaders du marché pour vous offrir les meilleures solutions digitales
          </p>
        </div>
        
        <div className="pt-10 md:pt-16 lg:pt-20">
          <div className="relative mx-auto flex items-center justify-center lg:max-w-6xl">
            <Carousel
              opts={{ loop: true }}
              plugins={[AutoScroll({ playOnInit: true, speed: 1 })]}
            >
              <CarouselContent className="ml-0">
                {partners.map((partner) => (
                  <CarouselItem
                    key={partner.id}
                    className="flex basis-1/2 justify-center pl-0 sm:basis-1/3 md:basis-1/4 lg:basis-1/5"
                  >
                    <div className="mx-8 flex shrink-0 items-center justify-center h-20">
                      <img
                        src={partner.image}
                        alt={partner.description}
                        className={`${partner.className} opacity-70 hover:opacity-100 transition-opacity duration-300 filter brightness-0 invert`}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-black to-transparent pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-black to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
