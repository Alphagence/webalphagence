
const CalendlyWidget = () => {
  return (
    <div className="animate-on-scroll bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700">
      <h3 className="text-2xl font-bold text-alphagence-gold mb-4">Réservez votre consultation gratuite</h3>
      <p className="text-gray-300 mb-6">
        Discutons de votre projet et découvrez comment nous pouvons transformer votre présence digitale.
      </p>
      <div 
        className="calendly-inline-widget bg-white rounded-lg" 
        data-url="https://calendly.com/alphameed/rendez-vous-informations-et-renseignements?hide_event_type_details=1&hide_gdpr_banner=1" 
        style={{minWidth: '320px', height: '700px'}}
      ></div>
    </div>
  );
};

export default CalendlyWidget;
