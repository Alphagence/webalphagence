
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-black overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-alphagence-black opacity-90"></div>
      
      {/* Gold accent */}
      <div className="absolute top-32 right-[-100px] w-96 h-96 rounded-full bg-alphagence-gold opacity-20 blur-3xl"></div>
      <div className="absolute bottom-[-150px] left-[-150px] w-96 h-96 rounded-full bg-alphagence-gold opacity-10 blur-3xl"></div>
      
      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="max-w-3xl mx-auto md:mx-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
            <span className="text-alphagence-gold">Un site moderne</span> et performant,<br />
            adapté aux besoins des <span className="text-alphagence-gold">PME</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 mb-10 animate-fade-in">
            Faites passer votre entreprise à l'ère du numérique avec un site web professionnel qui attire et convertit vos visiteurs en clients fidèles.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up">
            <Button className="bg-alphagence-gold hover:bg-alphagence-gold/90 text-black text-lg py-6 px-8">
              Demander un devis gratuit
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 text-lg py-6 px-8">
              Découvrir nos services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
