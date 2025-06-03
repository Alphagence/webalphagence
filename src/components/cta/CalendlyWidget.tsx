
const CalendlyWidget = () => {
  return (
    <div className="animate-on-scroll bg-gray-900/50 rounded-xl p-3 md:p-6 backdrop-blur-sm border border-gray-700">
      <h3 className="text-xl md:text-2xl font-bold text-alphagence-gold mb-3 md:mb-4 text-center">
        Réservez votre consultation gratuite
      </h3>
      <p className="text-gray-300 mb-4 md:mb-6 text-sm md:text-base text-center px-2">
        Discutons de votre projet et découvrez comment nous pouvons transformer votre présence digitale.
      </p>
      <div 
        className="calendly-inline-widget bg-white rounded-lg w-full overflow-hidden" 
        data-url="https://calendly.com/alphameed/rendez-vous-informations-et-renseignements?hide_event_type_details=1&hide_gdpr_banner=1" 
        style={{
          minWidth: '280px',
          width: '100%',
          height: '500px'
        }}
      ></div>
    </div>
  );
};

export default CalendlyWidget;
