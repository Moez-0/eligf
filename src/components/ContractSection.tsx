import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PixelHeart, PixelStar, PixelCheck, PixelScroll, PixelGem, PixelCrown } from './PixelIcons';
import { sounds } from '../utils/audio';

interface ContractSectionProps {
  onRestart: () => void;
  onOpenCertificate: () => void;
}

interface TermItem {
  id: string;
  title: string;
  code: string;
  description: string;
  penaltyClause: string;
}

const TERMS: TermItem[] = [
  {
    id: 'affection',
    title: 'Unlimited affection',
    code: 'RULE 1.1',
    description:
      'Eliza is granted an unlimited, uncapped supply of warm hugs, forehead kisses, hand-holding, and cuddles from Moez. No cooldown period shall ever apply.',
    penaltyClause: 'Violation by Moez results in immediate penalty bubble tea or dessert.',
  },
  {
    id: 'compliments',
    title: 'Mandatory random compliments',
    code: 'RULE 2.4',
    description:
      'A minimum of three (3) unprompted reminders per day detailing how breathtaking, funny, smart, and cute Eliza is. Delivered in person, via text, or random staring.',
    penaltyClause: 'Unused compliments roll over with 200% compound interest.',
  },
  {
    id: 'latenight',
    title: 'Occasional late-night conversations',
    code: 'RULE 3.2',
    description:
      'Authorization for spontaneous late-night voice calls covering existential thoughts, random memes, hypothetical adventures, and reviewing snacks at 1:30 AM.',
    penaltyClause: 'Sleepy mumbling is officially classified as adorable.',
  },
  {
    id: 'jokes',
    title: 'You are legally required to tolerate my terrible jokes',
    code: 'RULE 4.7',
    description:
      'Eliza grants Moez statutory immunity for awful dad puns, goofy jokes, and overconfident punchlines. A fond eye-roll or gentle groan legally counts as laughter.',
    penaltyClause: 'Extreme puns may be countered with teasing.',
  },
  {
    id: 'cancellation',
    title: 'Cancellation is currently unavailable',
    code: 'RULE 5.0',
    description:
      'The unsubscribe button was unfortunately lost during initial compilation and cannot be recovered. Mutual happiness and devotion remain perpetual.',
    penaltyClause: 'All romantic stats are permanently saved.',
  },
];

export const ContractSection: React.FC<ContractSectionProps> = ({
  onRestart,
  onOpenCertificate,
}) => {
  const [signedTerms, setSignedTerms] = useState<Record<string, boolean>>({
    affection: true,
    compliments: true,
    latenight: true,
    jokes: true,
    cancellation: true,
  });

  const [copyToast, setCopyToast] = useState<boolean>(false);

  const toggleTerm = (id: string) => {
    sounds.playClick();
    setSignedTerms((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleShare = () => {
    sounds.playClick();
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopyToast(true);
      setTimeout(() => setCopyToast(false), 2500);
    }
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto px-3 sm:px-4 py-4 z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-white border-4 border-[#1a1215] shadow-[6px_6px_0px_#1a1215] p-4 sm:p-8"
      >
        {/* Header */}
        <div className="border-b-2 border-[#1a1215] pb-4 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <PixelScroll size={18} color="#ff2d55" />
              <span className="font-pixel-heading text-[10px] sm:text-xs text-[#ff2d55] tracking-wider">
                OFFICIAL CONTRACT
              </span>
            </div>
            <h2 className="font-pixel-heading text-lg sm:text-xl text-[#1a1215] tracking-wide">
              TERMS & CONDITIONS
            </h2>
          </div>

          <div className="self-start sm:self-auto bg-[#e6f4ea] border-2 border-[#10b981] px-2.5 py-1 text-[10px] font-pixel-heading text-[#10b981]">
            STATUS: ACTIVE
          </div>
        </div>

        {/* Narrative Box */}
        <div className="mb-6 p-3 bg-[#faf5f6] border-2 border-[#1a1215] font-pixel-body text-sm sm:text-base text-[#2a2024] leading-relaxed">
          This binding agreement is ratified between <strong className="text-[#ff2d55]">Moez</strong> (Party A) and <strong className="text-[#ff2d55]">Eliza</strong> (Party B), establishing the official rules of engagement and romantic partnership.
        </div>

        {/* 5 Terms Cards */}
        <div className="space-y-3.5 mb-6">
          {TERMS.map((term) => {
            const isChecked = signedTerms[term.id];

            return (
              <div
                key={term.id}
                onClick={() => toggleTerm(term.id)}
                className={`p-3.5 sm:p-4 border-2 transition-all cursor-pointer ${
                  isChecked
                    ? 'bg-white border-[#1a1215] shadow-[3px_3px_0px_#1a1215]'
                    : 'bg-[#faf7f8] border-[#9c8e94] opacity-75'
                }`}
              >
                <div className="flex items-start gap-3">
                  {/* Pixel Checkbox */}
                  <div className="pt-0.5 shrink-0">
                    <div
                      className={`w-6 h-6 border-2 border-[#1a1215] flex items-center justify-center font-pixel-heading text-xs ${
                        isChecked ? 'bg-[#ff2d55] text-white' : 'bg-white text-transparent'
                      }`}
                    >
                      X
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                      <h3 className="font-pixel-heading text-xs sm:text-sm text-[#1a1215]">
                        {term.title}
                      </h3>
                      <span className="font-pixel-mono text-xs text-[#ff2d55] font-bold">
                        [{term.code}]
                      </span>
                    </div>

                    <p className="font-pixel-body text-sm text-[#403036] leading-relaxed mb-2">
                      {term.description}
                    </p>

                    <div className="bg-[#fff0f3] border border-[#ffccd5] px-2 py-1 text-[11px] font-pixel-mono text-[#d61e47]">
                      * {term.penaltyClause}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Signatures Block */}
        <div className="p-4 bg-[#fff5f7] border-2 border-[#1a1215] mb-6">
          <div className="font-pixel-heading text-[10px] sm:text-xs text-[#1a1215] uppercase tracking-wider mb-3 border-b border-[#ffd6df] pb-2 flex justify-between items-center">
            <span>COUNTERSIGNED IN PIXELS</span>
            <span className="text-[#10b981]">VERIFIED ✓</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-pixel-body">
            <div className="border border-[#1a1215] bg-white p-3">
              <div className="text-xs text-[#705862] font-pixel-mono">PARTY A (PROPOSER)</div>
              <div className="font-pixel-heading text-sm text-[#1a1215] pt-1">MOEZ</div>
              <div className="text-xs text-[#10b981] font-pixel-mono pt-1">[STATUS: READY]</div>
            </div>

            <div className="border border-[#1a1215] bg-white p-3">
              <div className="text-xs text-[#705862] font-pixel-mono">PARTY B (GIRLFRIEND)</div>
              <div className="font-pixel-heading text-sm text-[#ff2d55] pt-1">ELIZA ♡</div>
              <div className="text-xs text-[#ff2d55] font-pixel-mono pt-1">[STATUS: ACCEPTED]</div>
            </div>
          </div>
        </div>

        {/* Required Final Line */}
        <div className="p-3 bg-[#faf5f6] border-2 border-[#1a1215] text-center mb-6">
          <p className="font-pixel-body text-sm sm:text-base text-[#1a1215] italic leading-relaxed">
            “By continuing, you acknowledge that this was a very serious and scientifically rigorous proposal.”
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => {
              sounds.playClick();
              onOpenCertificate();
            }}
            className="w-full sm:w-auto pixel-btn-primary bg-[#ff2d55] hover:bg-[#ff1744] text-white font-pixel-heading text-[11px] sm:text-xs px-5 py-3 tracking-wider cursor-pointer"
          >
            VIEW PIXEL CERTIFICATE ▶
          </button>

          <button
            onClick={handleShare}
            className="w-full sm:w-auto pixel-btn-secondary bg-white hover:bg-[#fff0f3] text-[#1a1215] font-pixel-heading text-[11px] sm:text-xs px-4 py-3 tracking-wider cursor-pointer"
          >
            {copyToast ? 'LINK COPIED!' : 'SHARE LINK'}
          </button>

          <button
            onClick={() => {
              sounds.playClick();
              onRestart();
            }}
            className="w-full sm:w-auto pixel-btn-secondary bg-[#f0eaec] hover:bg-[#e4dcde] text-[#1a1215] font-pixel-heading text-[11px] sm:text-xs px-4 py-3 tracking-wider cursor-pointer"
          >
            [ REPLAY ]
          </button>
        </div>
      </motion.div>
    </div>
  );
};
