
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
      <circle cx="100" cy="100" r="90" fill="none" stroke="#B08D57" strokeWidth="20" />
      
      {/* Stylized 'A' shape */}
      <path
        d="M100 20 L170 180 L100 120 L30 180 L100 20"
        fill="#333333"
        stroke="#333333"
        strokeWidth="2"
      />
      
      {/* Center vertical line */}
      <rect x="90" y="20" width="20" height="160" fill="#B08D57" />
    </svg>
  );
};

export default AlphagenceLogo;
