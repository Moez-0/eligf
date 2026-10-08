import React from 'react';
import { motion } from 'motion/react';
import { PixelHeart, PixelStar, PixelCrown } from './PixelIcons';
import { sounds } from '../utils/audio';

interface AcceptedCardProps {
  onContinue: () => void;
}

export const AcceptedCard: React.FC<AcceptedCardProps> = ({ onContinue }) => {
  return (
    <div className="relative w-full max-w-xl mx-auto px-3 sm:px-4 z-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-white border-4 border-[#1a1215] shadow-[6px_6px_0px_#1a1215] p-5 sm:p-8 text-center relative"
      >
        {/* Retro Header Kicker */}
        <div className="border-b-2 border-[#1a1215] pb-2.5 mb-6 flex items-center justify-between text-xs font-pixel-heading">
          <span className="text-[#10b981]">★ QUEST COMPLETE!</span>
          <span className="text-[#ff2d55]">PARTY STATUS: UNLOCKED</span>
        </div>

        {/* Pixel Icon Showcase */}
        <div className="flex items-center justify-center gap-3 mb-5">
          <PixelStar size={20} color="#ffb800" className="pixel-blink" />
          <div className="p-3 bg-[#ffebee] border-2 border-[#1a1215] shadow-[3px_3px_0px_#1a1215]">
            <PixelHeart size={36} color="#ff2d55" className="pixel-beat" />
          </div>
          <PixelCrown size={22} color="#f59e0b" />
        </div>

        {/* Big Pixel Headline */}
        <div className="space-y-3 mb-6">
          <h2 className="font-pixel-heading text-2xl sm:text-3xl md:text-4xl text-[#1a1215] tracking-wide leading-tight">
            I KNEW IT.
          </h2>

          <div className="font-pixel-body text-lg sm:text-xl text-[#ff2d55] font-bold">
            Excellent decision, Eliza.
          </div>

          <div className="p-3 bg-[#faf5f6] border-2 border-[#1a1215] font-pixel-body text-base sm:text-lg text-[#2a2024] leading-relaxed max-w-md mx-auto">
            Congratulations! You are now officially <strong className="text-[#ff2d55]">Moez’s girlfriend</strong>.
          </div>
        </div>

        {/* Retro RPG Achievement Box */}
        <div className="mb-6 p-4 bg-[#fff0f3] border-2 border-[#1a1215] text-left max-w-sm mx-auto">
          <div className="text-[10px] sm:text-xs font-pixel-heading text-[#ff2d55] mb-2 flex items-center gap-1.5">
            <PixelStar size={12} color="#ff2d55" />
            <span>SAVE FILE UPDATED</span>
          </div>
          <div className="space-y-1.5 font-pixel-mono text-sm sm:text-base text-[#1a1215]">
            <div className="flex justify-between">
              <span>PLAYER 1:</span>
              <span className="font-bold">MOEZ</span>
            </div>
            <div className="flex justify-between">
              <span>PLAYER 2:</span>
              <span className="font-bold text-[#ff2d55]">ELIZA</span>
            </div>
            <div className="flex justify-between">
              <span>COMPATIBILITY:</span>
              <span className="font-bold text-[#10b981]">100% (MAX)</span>
            </div>
            <div className="flex justify-between">
              <span>STATUS:</span>
              <span className="font-bold text-[#ff2d55]">CO-OP FOR LIFE</span>
            </div>
          </div>
        </div>

        {/* Continue Button */}
        <div className="flex flex-col items-center gap-3">
          <button
            onClick={() => {
              sounds.playClick();
              onContinue();
            }}
            className="pixel-btn-primary bg-[#1a1215] hover:bg-[#332228] text-white font-pixel-heading text-xs sm:text-sm px-6 sm:px-8 py-3.5 tracking-wider cursor-pointer"
          >
            REVIEW TERMS & CONDITIONS ▶
          </button>
          <span className="font-pixel-mono text-xs text-[#8c7882]">
            PRESS TO SIGN OFFICIAL RELATIONSHIP CONTRACT
          </span>
        </div>
      </motion.div>
    </div>
  );
};
