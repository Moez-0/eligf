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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 overflow-y-auto">
          {/* Retro Pixel Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#1a1215]/65"
          />

          {/* Modal Container: Strictly Square Pixel Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative w-full max-w-xl bg-white border-4 border-[#1a1215] shadow-[8px_8px_0px_#1a1215] p-4 sm:p-6 z-10 my-6 text-[#1a1215] max-h-[92vh] overflow-y-auto"
          >
            {/* Top Close Bar */}
            <div className="flex items-center justify-between border-b-2 border-[#1a1215] pb-2 mb-4">
              <span className="font-pixel-heading text-[10px] text-[#ff2d55]">
                [CERTIFICATE_OF_GIRLFRIENDHOOD.EXE]
              </span>
              <button
                onClick={() => {
                  sounds.playClick();
                  onClose();
                }}
                className="bg-[#1a1215] hover:bg-[#ff2d55] text-white font-pixel-heading text-[10px] px-2 py-0.5 cursor-pointer"
              >
                [X] CLOSE
              </button>
            </div>

            {/* Inner Certificate Parchment */}
            <div className="border-4 border-[#1a1215] bg-[#fffbfd] p-4 sm:p-6 text-center relative">
              {/* Corner pixel markers */}
              <div className="absolute top-1 left-1 w-2 h-2 bg-[#ff2d55]" />
              <div className="absolute top-1 right-1 w-2 h-2 bg-[#ff2d55]" />
              <div className="absolute bottom-1 left-1 w-2 h-2 bg-[#ff2d55]" />
              <div className="absolute bottom-1 right-1 w-2 h-2 bg-[#ff2d55]" />

              {/* Pixel Crest */}
              <div className="flex items-center justify-center gap-2 mb-3">
                <PixelStar size={16} color="#ffb800" />
                <PixelCrown size={28} color="#f59e0b" />
                <PixelStar size={16} color="#ffb800" />
              </div>

              <div className="font-pixel-heading text-[9px] sm:text-[10px] text-[#785966] tracking-widest uppercase mb-1">
                ★ OFFICIAL 8-BIT CREDENTIAL ★
              </div>

              <h2 className="font-pixel-heading text-base sm:text-xl text-[#1a1215] leading-snug mb-3">
                CERTIFICATE OF GIRLFRIENDHOOD
              </h2>

              <p className="font-pixel-body text-xs sm:text-sm text-[#4a3a41] mb-4">
                This certifies that following an official inquiry and decisive response:
              </p>

              {/* Eliza's Name in Big Pixel Display */}
              <div className="my-3 py-2 bg-[#fff0f3] border-2 border-[#ff2d55]">
                <div className="font-pixel-heading text-xl sm:text-3xl text-[#ff2d55] tracking-wider">
                  ELIZA
                </div>
              </div>

              <p className="font-pixel-body text-xs sm:text-sm text-[#2b1f24] leading-relaxed mb-4">
                has officially agreed to be the girlfriend of <strong className="text-[#ff2d55]">Moez</strong>, entitled to unlimited adoration, first priority on dessert, and lifetime co-op player status.
              </p>

              {/* 8-bit Certified Clauses Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-left mb-5">
                <div className="p-1.5 border border-[#1a1215] bg-white font-pixel-mono text-xs flex items-center gap-1.5">
                  <span className="text-[#10b981] font-bold">[✓]</span>
                  <span>UNLIMITED AFFECTION</span>
                </div>
                <div className="p-1.5 border border-[#1a1215] bg-white font-pixel-mono text-xs flex items-center gap-1.5">
                  <span className="text-[#10b981] font-bold">[✓]</span>
                  <span>DAILY COMPLIMENTS</span>
                </div>
                <div className="p-1.5 border border-[#1a1215] bg-white font-pixel-mono text-xs flex items-center gap-1.5">
                  <span className="text-[#10b981] font-bold">[✓]</span>
                  <span>LATE-NIGHT TALKS</span>
                </div>
                <div className="p-1.5 border border-[#1a1215] bg-white font-pixel-mono text-xs flex items-center gap-1.5">
                  <span className="text-[#10b981] font-bold">[✓]</span>
                  <span>PUN TOLERANCE IMMUNITY</span>
                </div>
              </div>

              {/* Signature Footer */}
              <div className="pt-3 border-t-2 border-[#1a1215] flex items-end justify-between text-left text-xs">
                <div>
                  <div className="font-pixel-mono text-[11px] text-[#7a656e]">PROPOSER:</div>
                  <div className="font-pixel-heading text-xs text-[#1a1215]">MOEZ</div>
                  <div className="font-pixel-mono text-[10px] text-[#10b981]">STATUS: DEVOTED</div>
                </div>

                <div className="text-center px-2">
                  <PixelHeart size={20} color="#ff2d55" className="pixel-beat mx-auto mb-1" />
                  <div className="font-pixel-mono text-[10px] text-[#7a656e]">{currentDate}</div>
                </div>

                <div className="text-right">
                  <div className="font-pixel-mono text-[11px] text-[#7a656e]">GIRLFRIEND:</div>
                  <div className="font-pixel-heading text-xs text-[#ff2d55]">ELIZA ♡</div>
                  <div className="font-pixel-mono text-[10px] text-[#ff2d55]">STATUS: CONFIRMED</div>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="mt-4 flex flex-col sm:flex-row items-center justify-end gap-2 print:hidden">
              <button
                onClick={handlePrint}
                className="w-full sm:w-auto pixel-btn-secondary bg-[#faf5f6] hover:bg-[#f0e6e9] text-[#1a1215] font-pixel-heading text-[10px] px-3 py-2 cursor-pointer"
              >
                [ PRINT / SAVE PDF ]
              </button>

              <button
                onClick={() => {
                  sounds.playClick();
                  onClose();
                }}
                className="w-full sm:w-auto pixel-btn-primary bg-[#ff2d55] text-white font-pixel-heading text-[10px] px-4 py-2 cursor-pointer"
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
