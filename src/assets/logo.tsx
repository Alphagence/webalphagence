
import React from 'react';

interface LogoProps {
  className?: string;
}

const AlphagenceLogo: React.FC<LogoProps> = ({ className }) => {
  return (
    <img
      src="/assets/logo.png"
      alt="Alphagence Logo"
      className={className}
    />
  );
};

export default AlphagenceLogo;
