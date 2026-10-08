import React from 'react';

interface PixelIconProps {
  className?: string;
  size?: number;
  color?: string;
}

// Crisp 8-bit pixel heart drawn on a 16x16 grid
export const PixelHeart: React.FC<PixelIconProps> = ({
  className = '',
  size = 24,
  color = '#ff2d55',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill={color}
      className={`shrink-0 ${className}`}
      style={{ shapeRendering: 'crispEdges' }}
      aria-hidden="true"
    >
      {/* 16x16 pixel heart */}
      <rect x="2" y="3" width="4" height="1" />
      <rect x="10" y="3" width="4" height="1" />
      <rect x="1" y="4" width="6" height="1" />
      <rect x="9" y="4" width="6" height="1" />
      <rect x="1" y="5" width="14" height="4" />
      <rect x="2" y="9" width="12" height="1" />
      <rect x="3" y="10" width="10" height="1" />
      <rect x="4" y="11" width="8" height="1" />
      <rect x="5" y="12" width="6" height="1" />
      <rect x="6" y="13" width="4" height="1" />
      <rect x="7" y="14" width="2" height="1" />
      {/* pixel highlight */}
      <rect x="3" y="5" width="2" height="2" fill="#ffffff" />
    </svg>
  );
};

// 8-bit pixel star
export const PixelStar: React.FC<PixelIconProps> = ({
  className = '',
  size = 20,
  color = '#ffb800',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill={color}
      className={`shrink-0 ${className}`}
      style={{ shapeRendering: 'crispEdges' }}
      aria-hidden="true"
    >
      <rect x="7" y="1" width="2" height="1" />
      <rect x="6" y="2" width="4" height="1" />
      <rect x="7" y="3" width="2" height="1" />
      <rect x="1" y="6" width="14" height="1" />
      <rect x="0" y="7" width="16" height="2" />
      <rect x="1" y="9" width="14" height="1" />
      <rect x="5" y="10" width="6" height="1" />
      <rect x="4" y="11" width="8" height="1" />
      <rect x="3" y="12" width="3" height="2" />
      <rect x="10" y="12" width="3" height="2" />
      <rect x="2" y="14" width="2" height="1" />
      <rect x="12" y="14" width="2" height="1" />
    </svg>
  );
};

// 8-bit pixel checkmark
export const PixelCheck: React.FC<PixelIconProps> = ({
  className = '',
  size = 18,
  color = '#10b981',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill={color}
      className={`shrink-0 ${className}`}
      style={{ shapeRendering: 'crispEdges' }}
      aria-hidden="true"
    >
      <rect x="12" y="3" width="2" height="2" />
      <rect x="10" y="5" width="2" height="2" />
      <rect x="8" y="7" width="2" height="2" />
      <rect x="6" y="9" width="2" height="2" />
      <rect x="4" y="7" width="2" height="2" />
      <rect x="2" y="5" width="2" height="2" />
    </svg>
  );
};

// 8-bit pixel diamond/gem
export const PixelGem: React.FC<PixelIconProps> = ({
  className = '',
  size = 20,
  color = '#38bdf8',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill={color}
      className={`shrink-0 ${className}`}
      style={{ shapeRendering: 'crispEdges' }}
      aria-hidden="true"
    >
      <rect x="4" y="2" width="8" height="2" />
      <rect x="2" y="4" width="12" height="3" />
      <rect x="3" y="7" width="10" height="2" />
      <rect x="5" y="9" width="6" height="2" />
      <rect x="6" y="11" width="4" height="2" />
      <rect x="7" y="13" width="2" height="2" />
      {/* shine */}
      <rect x="5" y="4" width="2" height="2" fill="#ffffff" />
    </svg>
  );
};

// 8-bit pixel scroll / contract
export const PixelScroll: React.FC<PixelIconProps> = ({
  className = '',
  size = 22,
  color = '#d97706',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill={color}
      className={`shrink-0 ${className}`}
      style={{ shapeRendering: 'crispEdges' }}
      aria-hidden="true"
    >
      <rect x="2" y="1" width="10" height="2" fill="#78350f" />
      <rect x="3" y="3" width="10" height="11" fill="#fef3c7" />
      <rect x="11" y="2" width="2" height="13" fill="#78350f" />
      <rect x="5" y="5" width="6" height="1" fill="#92400e" />
      <rect x="5" y="7" width="5" height="1" fill="#92400e" />
      <rect x="5" y="9" width="6" height="1" fill="#92400e" />
      <rect x="5" y="11" width="4" height="1" fill="#92400e" />
    </svg>
  );
};

// 8-bit pixel crown
export const PixelCrown: React.FC<PixelIconProps> = ({
  className = '',
  size = 22,
  color = '#f59e0b',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill={color}
      className={`shrink-0 ${className}`}
      style={{ shapeRendering: 'crispEdges' }}
      aria-hidden="true"
    >
      <rect x="2" y="4" width="2" height="2" />
      <rect x="7" y="2" width="2" height="2" />
      <rect x="12" y="4" width="2" height="2" />
      <rect x="2" y="6" width="3" height="6" />
      <rect x="6" y="4" width="4" height="8" />
      <rect x="11" y="6" width="3" height="6" />
      <rect x="2" y="11" width="12" height="2" />
      {/* jewels */}
      <rect x="4" y="11" width="1" height="1" fill="#ef4444" />
      <rect x="7" y="11" width="2" height="1" fill="#3b82f6" />
      <rect x="11" y="11" width="1" height="1" fill="#10b981" />
    </svg>
  );
};
