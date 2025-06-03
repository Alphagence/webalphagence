
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import AlphagenceLogo from "@/assets/logo";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setIsScrolled(currentScrollY > 50);
      
      // Hide navbar when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/95 backdrop-blur-sm border-b border-gray-800' : 'bg-transparent'
    } ${isHidden ? '-translate-y-full' : 'translate-y-0'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <AlphagenceLogo className="h-8 w-8" />
            <span className="text-xl font-bold text-alphagence-gold">Alphagence</span>
          </div>

          {/* Navigation desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('benefits')}
              className="text-white hover:text-alphagence-gold transition-colors"
            >
              Avantages
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="text-white hover:text-alphagence-gold transition-colors"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-white hover:text-alphagence-gold transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="text-white hover:text-alphagence-gold transition-colors"
            >
              Tarifs
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-alphagence-gold text-black px-6 py-2 rounded-lg font-semibold hover:bg-alphagence-gold/90 transition-colors"
            >
              Contact
            </button>
          </div>

          {/* Menu mobile */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-alphagence-gold transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Menu mobile déroulant */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-sm border-t border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection('benefits')}
                className="block w-full text-left px-3 py-2 text-white hover:text-alphagence-gold transition-colors"
              >
                Avantages
              </button>
              <button
                onClick={() => scrollToSection('portfolio')}
                className="block w-full text-left px-3 py-2 text-white hover:text-alphagence-gold transition-colors"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="block w-full text-left px-3 py-2 text-white hover:text-alphagence-gold transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('pricing')}
                className="block w-full text-left px-3 py-2 text-white hover:text-alphagence-gold transition-colors"
              >
                Tarifs
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-3 py-2 bg-alphagence-gold text-black rounded-lg font-semibold mt-2"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
