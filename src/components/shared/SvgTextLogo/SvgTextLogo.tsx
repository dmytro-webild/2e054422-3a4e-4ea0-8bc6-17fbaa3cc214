import React from 'react';

interface SvgTextLogoProps {
  text: string;
  className?: string;
  fontSize?: number;
  fontWeight?: string | number;
  letterSpacing?: string | number;
}

const SvgTextLogo: React.FC<SvgTextLogoProps> = ({
  text,
  className = '',
  fontSize = 48,
  fontWeight = 'bold',
  letterSpacing = 0,
}) => {
  return (
    <svg
      viewBox="0 0 1200 200"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: '#ffffff', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#e0e0e0', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize={fontSize}
        fontWeight={fontWeight}
        letterSpacing={letterSpacing}
        fill="url(#textGradient)"
        style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
      >
        {text}
      </text>
    </svg>
  );
};

export default SvgTextLogo;