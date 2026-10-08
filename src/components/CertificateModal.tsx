import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PixelHeart, PixelCrown, PixelStar } from './PixelIcons';
import { sounds } from '../utils/audio';

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ isOpen, onClose }) => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  const handlePrint = () => {
    sounds.playClick();
    window.print();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-4 overflow-y-auto">
          {/* Retro Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#1a1215]/70"
          />

          {/* Modal Container: Compact, clean, readable */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative w-full max-w-lg bg-white border-3 border-[#1a1215] shadow-[4px_4px_0px_#1a1215] p-3 sm:p-5 z-10 my-4 text-[#1a1215] max-h-[90vh] overflow-y-auto"
          >
            {/* Top Close Bar */}
            <div className="flex items-center justify-between border-b-2 border-[#1a1215] pb-1.5 mb-2.5">
              <span className="font-pixel-heading text-[8px] sm:text-[9px] text-[#ff2d55]">
                [CERTIFICATE.EXE]
              </span>
              <button
                onClick={() => {
                  sounds.playClick();
                  onClose();
                }}
                className="bg-[#1a1215] hover:bg-[#ff2d55] text-white font-pixel-heading text-[9px] px-2 py-0.5 cursor-pointer"
              >
                [X] CLOSE
              </button>
            </div>

            {/* Inner Certificate Parchment */}
            <div className="border-2 border-[#1a1215] bg-[#fffbfd] p-3 sm:p-5 text-center relative">
              {/* Corner pixel markers */}
              <div className="absolute top-1 left-1 w-1.5 h-1.5 bg-[#ff2d55]" />
              <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-[#ff2d55]" />
              <div className="absolute bottom-1 left-1 w-1.5 h-1.5 bg-[#ff2d55]" />
              <div className="absolute bottom-1 right-1 w-1.5 h-1.5 bg-[#ff2d55]" />

              {/* Pixel Crest */}
              <div className="flex items-center justify-center gap-1.5 mb-1.5">
                <PixelStar size={14} color="#ffb800" />
                <PixelCrown size={22} color="#f59e0b" />
                <PixelStar size={14} color="#ffb800" />
              </div>

              <div className="font-pixel-heading text-[8px] text-[#785966] tracking-wider uppercase mb-1">
                ★ 8-BIT CREDENTIAL ★
              </div>

              <h2 className="font-pixel-heading text-xs sm:text-base text-[#1a1215] leading-snug mb-2">
                CERTIFICATE OF GIRLFRIENDHOOD
              </h2>

              <p className="font-pixel-body text-[11px] sm:text-xs text-[#4a3a41] mb-2 leading-relaxed">
                This document certifies that following decisive action:
              </p>

              {/* Eliza's Name in Pixel Display */}
              <div className="my-2 py-1.5 bg-[#fff0f3] border-2 border-[#ff2d55]">
                <div className="font-pixel-heading text-base sm:text-2xl text-[#ff2d55] tracking-wide">
                  ELIZA
                </div>
              </div>

              <p className="font-pixel-body text-[11px] sm:text-xs text-[#2b1f24] leading-relaxed mb-3">
                is officially the girlfriend of <strong className="text-[#ff2d55]">Moez</strong>, entitled to unlimited adoration, snack priority, and lifetime co-op status.
              </p>

              {/* 8-bit Certified Clauses Grid */}
              <div className="grid grid-cols-2 gap-1.5 text-left mb-3">
                <div className="p-1 border border-[#1a1215] bg-white font-pixel-mono text-[10px] sm:text-xs flex items-center gap-1">
                  <span className="text-[#10b981] font-bold">[✓]</span>
                  <span className="truncate">AFFECTION</span>
                </div>
                <div className="p-1 border border-[#1a1215] bg-white font-pixel-mono text-[10px] sm:text-xs flex items-center gap-1">
                  <span className="text-[#10b981] font-bold">[✓]</span>
                  <span className="truncate">COMPLIMENTS</span>
                </div>
                <div className="p-1 border border-[#1a1215] bg-white font-pixel-mono text-[10px] sm:text-xs flex items-center gap-1">
                  <span className="text-[#10b981] font-bold">[✓]</span>
                  <span className="truncate">LATE TALKS</span>
                </div>
                <div className="p-1 border border-[#1a1215] bg-white font-pixel-mono text-[10px] sm:text-xs flex items-center gap-1">
                  <span className="text-[#10b981] font-bold">[✓]</span>
                  <span className="truncate">PUN IMMUNITY</span>
                </div>
              </div>

              {/* Signature Footer */}
              <div className="pt-2 border-t-2 border-[#1a1215] flex items-end justify-between text-left">
                <div>
                  <div className="font-pixel-mono text-[9px] text-[#7a656e]">PROPOSER:</div>
                  <div className="font-pixel-heading text-[10px] sm:text-xs text-[#1a1215]">MOEZ</div>
                  <div className="font-pixel-mono text-[8px] text-[#10b981]">[DEVOTED]</div>
                </div>

                <div className="text-center px-1">
                  <PixelHeart size={16} color="#ff2d55" className="pixel-beat mx-auto mb-0.5" />
                  <div className="font-pixel-mono text-[9px] text-[#7a656e]">{currentDate}</div>
                </div>

                <div className="text-right">
                  <div className="font-pixel-mono text-[9px] text-[#7a656e]">GIRLFRIEND:</div>
                  <div className="font-pixel-heading text-[10px] sm:text-xs text-[#ff2d55]">ELIZA ♡</div>
                  <div className="font-pixel-mono text-[8px] text-[#ff2d55]">[CONFIRMED]</div>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="mt-2.5 flex items-center justify-end gap-2 print:hidden">
              <button
                onClick={handlePrint}
                className="pixel-btn-secondary bg-[#faf5f6] hover:bg-[#f0e6e9] text-[#1a1215] font-pixel-heading text-[9px] px-2.5 py-1.5 cursor-pointer"
              >
                [ PRINT / PDF ]
              </button>

              <button
                onClick={() => {
                  sounds.playClick();
                  onClose();
                }}
                className="pixel-btn-primary bg-[#ff2d55] text-white font-pixel-heading text-[9px] px-3.5 py-1.5 cursor-pointer"
              >
                DONE
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
