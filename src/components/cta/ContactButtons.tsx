
const ContactButtons = () => {
  return (
    <div className="animate-on-scroll flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
      <a 
        href="tel:+41767972683"
        className="inline-flex items-center px-8 py-4 bg-alphagence-gold text-black font-bold rounded-lg hover:bg-alphagence-gold/90 transition-all duration-300 transform hover:scale-105 shadow-lg"
      >
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
        </svg>
        +41 76 797 26 83
      </a>
      
      <a 
        href="mailto:info@alphagence.com"
        className="inline-flex items-center px-8 py-4 border-2 border-alphagence-gold text-alphagence-gold font-bold rounded-lg hover:bg-alphagence-gold hover:text-black transition-all duration-300 transform hover:scale-105 shadow-lg backdrop-blur-sm"
      >
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
        info@alphagence.com
      </a>

      <a 
        href="https://www.alphagence.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-flex items-center px-8 py-4 border-2 border-alphagence-gold text-alphagence-gold font-bold rounded-lg hover:bg-alphagence-gold hover:text-black transition-all duration-300 transform hover:scale-105 shadow-lg backdrop-blur-sm"
      >
        Consulter toutes nos offres et prix
      </a>
    </div>
  );
};

export default ContactButtons;
