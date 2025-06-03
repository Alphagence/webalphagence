
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
      image: "/lovable-uploads/0bead145-45fe-4394-b3c1-b0fbb5ab9675.png",
      className: "h-12 w-auto",
    },
    {
      id: "pinterest",
      description: "Pinterest Marketing Partners",
      image: "/lovable-uploads/92202a81-849a-4156-80db-b36d122d96f9.png",
      className: "h-12 w-auto",
    },
    {
      id: "tiktok",
      description: "TikTok Marketing Partners",
      image: "/lovable-uploads/4c5e5813-a204-4c5e-a153-20d688879570.png",
      className: "h-12 w-auto",
    },
    {
      id: "linkedin",
      description: "LinkedIn Marketing Partner",
      image: "/lovable-uploads/16889fcf-6c23-4902-996d-ac4a4f4b597c.png",
      className: "h-12 w-auto",
    },
    {
      id: "meta",
      description: "Meta Business Partner",
      image: "/lovable-uploads/78cf4873-ad2b-4f5b-9e06-df24f2106f46.png",
      className: "h-12 w-auto",
    },
    {
      id: "snapchat",
      description: "Snapchat Advanced Partner",
      image: "/lovable-uploads/ae757d06-b55c-493f-941e-1f6844827e16.png",
      className: "h-12 w-auto",
    },
    {
      id: "google",
      description: "Google Partner",
      image: "/lovable-uploads/d64b68b0-773e-4aea-bbee-41c3aa23d60f.png",
      className: "h-12 w-auto",
    },
    {
      id: "shopify",
      description: "Shopify Certified Partner",
      image: "/lovable-uploads/bc35bddf-23f5-40a7-8488-59d11d6ff97c.png",
      className: "h-12 w-auto",
    },
    {
      id: "webflow",
      description: "Webflow Premium Partner",
      image: "/lovable-uploads/b5b531ac-1139-4e64-85c9-84ee374b74e8.png",
      className: "h-12 w-auto",
    },
    {
      id: "google-analytics",
      description: "Google Analytics Certified Partner",
      image: "/lovable-uploads/1e858a52-aa9e-49d5-895c-47b0a95f97be.png",
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
