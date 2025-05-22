
import React from 'react';

interface LogoProps {
  className?: string;
}

const AlphagenceLogo: React.FC<LogoProps> = ({ className }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Gold circle */}
      <circle cx="100" cy="100" r="90" fill="none" stroke="#B08D57" strokeWidth="10" />
      
      {/* Triangle shape */}
      <polygon 
        points="100,20 170,160 30,160" 
        fill="#333333" 
        stroke="#333333"
        strokeWidth="2"
      />
      
      {/* Center vertical line */}
      <rect x="90" y="20" width="20" height="140" fill="#B08D57" />
    </svg>
  );
};

export default AlphagenceLogo;
