
import AlphagenceLogo from "@/assets/logo";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <AlphagenceLogo className="h-10 w-10 mr-3" />
              <span className="text-2xl font-bold text-alphagence-gold">Alphagence</span>
            </div>
            <p className="text-gray-300 mb-6">
              Votre partenaire digital pour créer des sites web 3D immersifs et performants. 
              Nous transformons votre vision en réalité digitale.
            </p>
            <div className="space-y-2 text-gray-300">
              <p>📍 Z.I la palaz 3A, 1530 Payerne</p>
              <p>📞 +41 76 797 26 83</p>
              <p>✉️ info@alphagence.com</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-alphagence-gold">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#services" className="hover:text-alphagence-gold transition-colors">Sites Web 3D</a></li>
              <li><a href="#services" className="hover:text-alphagence-gold transition-colors">E-commerce</a></li>
              <li><a href="#services" className="hover:text-alphagence-gold transition-colors">Applications Web</a></li>
              <li><a href="#services" className="hover:text-alphagence-gold transition-colors">Maintenance</a></li>
              <li><a href="#services" className="hover:text-alphagence-gold transition-colors">SEO</a></li>
            </ul>
          </div>

          {/* Liens rapides */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-alphagence-gold">Liens rapides</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#about" className="hover:text-alphagence-gold transition-colors">À propos</a></li>
              <li><a href="#portfolio" className="hover:text-alphagence-gold transition-colors">Portfolio</a></li>
              <li><a href="#pricing" className="hover:text-alphagence-gold transition-colors">Tarifs</a></li>
              <li><a href="#contact" className="hover:text-alphagence-gold transition-colors">Contact</a></li>
              <li><a href="#faq" className="hover:text-alphagence-gold transition-colors">FAQ</a></li>
            </ul>
          </div>
        </div>

        {/* Ligne de séparation et copyright */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Alphagence. Tous droits réservés.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-alphagence-gold transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-alphagence-gold transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.348-1.051-2.348-2.348c0-1.297 1.051-2.348 2.348-2.348c1.297 0 2.348 1.051 2.348 2.348C10.797 15.937 9.746 16.988 8.449 16.988z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-alphagence-gold transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
