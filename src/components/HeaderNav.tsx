import React from 'react';
import { PixelHeart } from './PixelIcons';
import { sounds } from '../utils/audio';

interface HeaderNavProps {
  soundEnabled: boolean;
  onToggleSound: () => void;
  onReset: () => void;
  showReset: boolean;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({
  soundEnabled,
  onToggleSound,
  onReset,
  showReset,
}) => {
  return (
    <header className="sticky top-0 z-40 w-full bg-[#fceef2]/95 backdrop-blur-xs border-b-2 border-[#1a1215] px-2.5 sm:px-6 py-2 pt-[max(0.5rem,env(safe-area-inset-top))]">
      <div className="max-w-3xl mx-auto flex items-center justify-between gap-2">
        {/* Brand Kicker / Status Bar */}
        <div className="bg-white border-2 border-[#1a1215] shadow-[2px_2px_0px_#1a1215] px-2 sm:px-3 py-1 flex items-center gap-1.5 shrink-0">
          <PixelHeart size={12} color="#ff2d55" className="pixel-beat" />
          <span className="font-pixel-heading text-[9px] sm:text-xs text-[#1a1215] tracking-wide">
            MOEZ &hearts; ELIZA
          </span>
          <span className="hidden sm:inline font-pixel-mono text-xs text-[#ff2d55] font-bold">
            [LVL 99]
          </span>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-1.5 shrink-0">
          {showReset && (
            <button
              onClick={() => {
                sounds.playClick();
                onReset();
              }}
              className="bg-white hover:bg-[#fff0f3] border-2 border-[#1a1215] shadow-[2px_2px_0px_#1a1215] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none px-2 py-1 text-[9px] sm:text-[10px] font-pixel-heading text-[#1a1215] cursor-pointer"
              title="Reset Quest"
            >
              [REPLAY]
            </button>
          )}

          <button
            onClick={() => {
              onToggleSound();
              sounds.playClick();
            }}
            className="bg-white hover:bg-[#fff0f3] border-2 border-[#1a1215] shadow-[2px_2px_0px_#1a1215] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none px-2 py-1 text-[9px] sm:text-[10px] font-pixel-heading text-[#1a1215] cursor-pointer"
            aria-label={soundEnabled ? 'Mute 8-bit sound' : 'Enable 8-bit sound'}
            title="Toggle 8-bit Sound"
          >
            {soundEnabled ? '[SFX: ON]' : '[SFX: OFF]'}
          </button>
        </div>
      </div>
    </header>
  );
};
