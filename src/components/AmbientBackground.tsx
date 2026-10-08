import React from 'react';
import { PixelHeart, PixelStar } from './PixelIcons';

export const AmbientBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {/* Subtle pixel grid */}
      <div className="absolute inset-0 pixel-bg opacity-70" />

      {/* Subtle scanline overlay for retro CRT monitor feel */}
      <div className="absolute inset-0 scanlines pointer-events-none opacity-30" />

      {/* Floating 8-bit clouds */}
      <div className="absolute top-6 left-[8%] opacity-35 hidden md:block">
        <svg width="64" height="24" viewBox="0 0 32 12" fill="#ffccd5" style={{ shapeRendering: 'crispEdges' }}>
          <rect x="8" y="2" width="16" height="2" />
          <rect x="4" y="4" width="24" height="4" />
          <rect x="2" y="6" width="28" height="4" />
        </svg>
      </div>

      <div className="absolute top-16 right-[12%] opacity-35 hidden md:block">
        <svg width="80" height="30" viewBox="0 0 32 12" fill="#ffccd5" style={{ shapeRendering: 'crispEdges' }}>
          <rect x="8" y="2" width="16" height="2" />
          <rect x="4" y="4" width="24" height="4" />
          <rect x="2" y="6" width="28" height="4" />
        </svg>
      </div>

      {/* Twinkling Pixel Stars */}
      <div className="absolute top-[20%] left-[5%] opacity-50 pixel-blink hidden sm:block">
        <PixelStar size={16} color="#ff8da1" />
      </div>

      <div className="absolute top-[35%] right-[6%] opacity-50 pixel-blink hidden sm:block" style={{ animationDelay: '0.4s' }}>
        <PixelStar size={14} color="#ff8da1" />
      </div>

      <div className="absolute bottom-[22%] left-[8%] opacity-40 pixel-blink hidden sm:block" style={{ animationDelay: '0.7s' }}>
        <PixelStar size={18} color="#ff8da1" />
      </div>

      <div className="absolute bottom-[18%] right-[8%] opacity-40 pixel-blink hidden sm:block" style={{ animationDelay: '0.2s' }}>
        <PixelHeart size={16} color="#ffa5b6" />
      </div>
    </div>
  );
};
