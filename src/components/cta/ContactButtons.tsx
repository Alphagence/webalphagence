
const ContactButtons = () => {
  return (
    <div className="animate-on-scroll flex flex-col gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16 w-full max-w-2xl mx-auto px-4">
      <a 
        href="tel:+41767972683"
        className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-alphagence-gold text-black font-bold rounded-lg hover:bg-alphagence-gold/90 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base"
      >
        <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
        </svg>
        <span className="whitespace-nowrap">+41 76 797 26 83</span>
      </a>
      
      <a 
        href="mailto:info@alphagence.com"
        className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-alphagence-gold text-alphagence-gold font-bold rounded-lg hover:bg-alphagence-gold hover:text-black transition-all duration-300 transform hover:scale-105 shadow-lg backdrop-blur-sm text-sm sm:text-base"
      >
        <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
        <span className="text-center">info@alphagence.com</span>
      </a>

      <a 
        href="https://www.alphagence.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-alphagence-gold text-alphagence-gold font-bold rounded-lg hover:bg-alphagence-gold hover:text-black transition-all duration-300 transform hover:scale-105 shadow-lg backdrop-blur-sm text-sm sm:text-base"
      >
        <span className="text-center">Consulter toutes nos offres et prix</span>
      </a>
    </div>
  );
};

export default ContactButtons;
