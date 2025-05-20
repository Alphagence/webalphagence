
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import AlphagenceLogo from "../assets/logo.tsx";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black py-3 shadow-md' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="text-white flex items-center gap-2">
            <AlphagenceLogo className="h-10 w-auto" />
            <span className={`font-bold text-xl transition-opacity duration-300 ${isScrolled ? 'opacity-100' : 'opacity-100'}`}>
              <span className="text-alphagence-gold">Alpha</span>gence
            </span>
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#portfolio" className="text-white hover:text-alphagence-gold transition-colors">
            Portfolio
          </a>
          <a href="#services" className="text-white hover:text-alphagence-gold transition-colors">
            Services
          </a>
          <a href="#process" className="text-white hover:text-alphagence-gold transition-colors">
            Processus
          </a>
          <a href="#pricing" className="text-white hover:text-alphagence-gold transition-colors">
            Tarifs
          </a>
          <a href="#faq" className="text-white hover:text-alphagence-gold transition-colors">
            FAQ
          </a>
          <Button className="bg-alphagence-gold hover:bg-alphagence-gold/90 text-black">
            Contact
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white focus:outline-none"
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a 
              href="#portfolio" 
              className="text-white hover:text-alphagence-gold transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Portfolio
            </a>
            <a 
              href="#services" 
              className="text-white hover:text-alphagence-gold transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#process" 
              className="text-white hover:text-alphagence-gold transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Processus
            </a>
            <a 
              href="#pricing" 
              className="text-white hover:text-alphagence-gold transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Tarifs
            </a>
            <a 
              href="#faq" 
              className="text-white hover:text-alphagence-gold transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              FAQ
            </a>
            <Button 
              className="bg-alphagence-gold hover:bg-alphagence-gold/90 text-black w-full"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
