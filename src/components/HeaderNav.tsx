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
    <header className="fixed top-0 left-0 right-0 z-40 px-3 sm:px-6 py-3 pointer-events-none">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        {/* Brand Kicker / Status Bar */}
        <div className="pointer-events-auto bg-white border-2 border-[#1a1215] shadow-[3px_3px_0px_#1a1215] px-3 py-1.5 flex items-center gap-2">
          <PixelHeart size={14} color="#ff2d55" className="pixel-beat" />
          <span className="font-pixel-heading text-[10px] sm:text-xs text-[#1a1215] tracking-wider">
            QUEST: MOEZ &hearts; ELIZA
          </span>
          <span className="hidden sm:inline font-pixel-mono text-sm text-[#ff2d55]">
            [LVL 99]
          </span>
        </div>

        {/* Action Controls */}
        <div className="pointer-events-auto flex items-center gap-2">
          {showReset && (
            <button
              onClick={() => {
                sounds.playClick();
                onReset();
              }}
              className="bg-white hover:bg-[#fff0f3] border-2 border-[#1a1215] shadow-[2px_2px_0px_#1a1215] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none px-2.5 py-1 text-[10px] font-pixel-heading text-[#1a1215] cursor-pointer"
              title="Reset Quest"
            >
              [ REPLAY ]
            </button>
          )}

          <button
            onClick={() => {
              onToggleSound();
              sounds.playClick();
            }}
            className="bg-white hover:bg-[#fff0f3] border-2 border-[#1a1215] shadow-[2px_2px_0px_#1a1215] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none px-2.5 py-1 text-[10px] font-pixel-heading text-[#1a1215] cursor-pointer"
            aria-label={soundEnabled ? 'Mute 8-bit sound' : 'Enable 8-bit sound'}
            title="Toggle 8-bit Sound"
          >
            {soundEnabled ? '[ SFX: ON ]' : '[ SFX: OFF ]'}
          </button>
        </div>
      </div>
    </header>
  );
};
