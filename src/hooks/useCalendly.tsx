
import { useState } from 'react';
import CalendlyModal from '@/components/CalendlyModal';

export const useCalendly = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openCalendly = () => setIsOpen(true);
  const closeCalendly = () => setIsOpen(false);

  const CalendlyComponent = () => (
    <CalendlyModal isOpen={isOpen} onClose={closeCalendly} />
  );

  return {
    openCalendly,
    closeCalendly,
    CalendlyComponent,
    isOpen
  };
};
