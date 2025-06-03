
import React from 'react';

interface LogoProps {
  className?: string;
}

const AlphagenceLogo: React.FC<LogoProps> = ({ className }) => {
  return (
    <img
      src="/da364dba-9327-4d4d-8301-8db7f83007f6.png"
      alt="Alphagence Logo"
      className={className}
    />
  );
};

export default AlphagenceLogo;
