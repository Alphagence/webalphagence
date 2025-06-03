
import { useRef } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  CardTransformed,
  CardsContainer,
  ContainerScroll,
  ReviewStars,
} from "@/components/ui/animated-cards-stack";

const TESTIMONIALS = [
  {
    id: "testimonial-1",
    name: "Sophie Laurent",
    position: "Directrice Marketing",
    company: "Maison Élégance",
    rating: 5,
    quote: "L'équipe d'Alphagence a complètement transformé notre présence en ligne. Notre site génère maintenant des leads qualifiés chaque jour, et notre chiffre d'affaires a augmenté de 40% en 6 mois.",
    avatarUrl: "https://images.unsplash.com/photo-1494790108755-2616b612b898?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    id: "testimonial-2",
    name: "Marc Dupont",
    position: "Fondateur",
    company: "Atelier Cuisine",
    rating: 5,
    quote: "Professionnalisme, réactivité et créativité : voilà comment je décrirais Alphagence. Ils ont su parfaitement traduire l'identité de notre entreprise dans notre site web.",
    avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    id: "testimonial-3",
    name: "Julie Mercier",
    position: "Responsable Commercial",
    company: "ConseilPro",
    rating: 4.5,
    quote: "Nous avions besoin d'un site qui reflète notre expertise et qui génère de la confiance. Alphagence a dépassé nos attentes et notre taux de conversion a doublé.",
    avatarUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    id: "testimonial-4",
    name: "Thomas Lefort",
    position: "CEO",
    company: "InnoTech Solutions",
    rating: 5,
    quote: "Investir dans un site web professionnel avec Alphagence a été la meilleure décision pour notre entreprise. Le retour sur investissement est rapidement visible.",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  }
];

const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section ref={sectionRef} className="bg-black text-white py-10 md:py-20">
      <div className="container mx-auto px-2 md:px-4">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="section-heading inline-block mx-auto text-white">
            Ce Que Nos Clients Disent
          </h2>
          <p className="text-base md:text-lg text-white/80 max-w-3xl mx-auto mt-4 md:mt-8 px-4">
            La satisfaction de nos clients est notre priorité. Voici quelques témoignages de ceux qui nous ont fait confiance.
          </p>
        </div>

        <ContainerScroll className="h-[300vh]">
          <div className="sticky left-0 top-0 h-svh w-full py-6 md:py-12">
            <CardsContainer className="mx-auto size-full h-[400px] md:h-[450px] w-[320px] md:w-[350px]">
              {TESTIMONIALS.map((testimonial, index) => (
                <CardTransformed
                  arrayLength={TESTIMONIALS.length}
                  key={testimonial.id}
                  variant="light"
                  index={index + 2}
                  role="article"
                  aria-labelledby={`card-${testimonial.id}-title`}
                  aria-describedby={`card-${testimonial.id}-content`}
                >
                  <div className="flex flex-col items-center space-y-4 text-center">
                    <ReviewStars
                      className="text-alphagence-gold"
                      rating={testimonial.rating}
                    />
                    <div className="mx-auto w-4/5 text-sm md:text-lg text-gray-700">
                      <blockquote cite="#" className="italic">"{testimonial.quote}"</blockquote>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Avatar className="!size-10 md:!size-12 border border-stone-300">
                      <AvatarImage
                        src={testimonial.avatarUrl}
                        alt={`Portrait of ${testimonial.name}`}
                      />
                      <AvatarFallback className="bg-alphagence-gold/20 text-alphagence-gold font-bold">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <span className="block text-base md:text-lg font-semibold tracking-tight text-alphagence-black">
                        {testimonial.name}
                      </span>
                      <span className="block text-xs md:text-sm text-gray-500">
                        {testimonial.position}, {testimonial.company}
                      </span>
                    </div>
                  </div>
                </CardTransformed>
              ))}
            </CardsContainer>
          </div>
        </ContainerScroll>
      </div>
    </section>
  );
};

export default TestimonialsSection;
