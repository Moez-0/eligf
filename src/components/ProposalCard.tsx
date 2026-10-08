import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PixelHeart, PixelStar } from './PixelIcons';
import { sounds } from '../utils/audio';

interface ProposalCardProps {
  onAccept: () => void;
}

const ESCAPE_MESSAGES = [
  "Are you sure?",
  "That button seems to be malfunctioning.",
  "Interesting. You seem very committed to this.",
  "CRITICAL MISS! The [NO] button fled.",
  "ERROR 404: Rejection protocol crashed.",
  "Moez used Charm! It is super effective.",
  "Our statistical model did not anticipate this level of stubbornness.",
  "The [YES] button grants +999 Max Happiness.",
  "HP of [NO] button is dropping fast.",
  "Are you testing my persistence? Moez has high battery life.",
  "Warning: Continued dodging may trigger puppy eyes cutscene.",
  "Okay, now you're just grinding evasion XP.",
  "Eliza, look at how shiny the [YES] button is.",
  "Resistance is mathematically sub-optimal.",
];

export const ProposalCard: React.FC<ProposalCardProps> = ({ onAccept }) => {
  const [attempt, setAttempt] = useState<number>(0);
  const [noPosition, setNoPosition] = useState<{ x: number; y: number } | null>(null);
  const [rotation, setRotation] = useState<number>(0);
  const [lastMessage, setLastMessage] = useState<string>('');
  const arenaRef = useRef<HTMLDivElement>(null);
  const noButtonRef = useRef<HTMLButtonElement>(null);
  const yesButtonRef = useRef<HTMLButtonElement>(null);

  // Calculate safe evasive position strictly inside the arena without overlapping YES
  const calculateSafePosition = useCallback(() => {
    if (!arenaRef.current) return { x: 0, y: 0 };
    const arenaRect = arenaRef.current.getBoundingClientRect();
    const yesRect = yesButtonRef.current?.getBoundingClientRect();

    const padding = 12;
    const btnWidth = noButtonRef.current?.offsetWidth || 80;
    const btnHeight = noButtonRef.current?.offsetHeight || 40;

    const maxX = Math.max(0, arenaRect.width - btnWidth - padding);
    const maxY = Math.max(0, arenaRect.height - btnHeight - padding);

    let bestX = padding;
    let bestY = padding;
    let found = false;

    for (let i = 0; i < 25; i++) {
      const candidateX = Math.floor(padding + Math.random() * (maxX - padding));
      const candidateY = Math.floor(padding + Math.random() * (maxY - padding));

      if (yesRect) {
        const relativeYesLeft = yesRect.left - arenaRect.left;
        const relativeYesTop = yesRect.top - arenaRect.top;
        const relativeYesRight = relativeYesLeft + yesRect.width;
        const relativeYesBottom = relativeYesTop + yesRect.height;

        const buffer = 32;
        const candidateRight = candidateX + btnWidth;
        const candidateBottom = candidateY + btnHeight;

        const overlaps = !(
          candidateRight < relativeYesLeft - buffer ||
          candidateX > relativeYesRight + buffer ||
          candidateBottom < relativeYesTop - buffer ||
          candidateY > relativeYesBottom + buffer
        );

        if (!overlaps) {
          bestX = candidateX;
          bestY = candidateY;
          found = true;
          break;
        }
      } else {
        bestX = candidateX;
        bestY = candidateY;
        found = true;
        break;
      }
    }

    if (!found) {
      if (yesRect && arenaRect.width > 340) {
        const relativeYesLeft = yesRect.left - arenaRect.left;
        bestX = relativeYesLeft < arenaRect.width / 2
          ? Math.max(padding, arenaRect.width - btnWidth - padding)
          : padding;
        bestY = Math.min(maxY, padding + 8);
      } else {
        bestX = Math.min(maxX, Math.max(padding, (arenaRect.width - btnWidth) / 2));
        bestY = Math.min(maxY, Math.max(padding, arenaRect.height - btnHeight - 6));
      }
    }

    return { x: bestX, y: bestY };
  }, []);

  const handleEvade = useCallback(
    (e?: React.SyntheticEvent) => {
      if (e) {
        e.preventDefault();
      }

      const nextAttempt = attempt + 1;
      setAttempt(nextAttempt);
      sounds.playDodge(nextAttempt);

      const msgIndex = Math.min(nextAttempt - 1, ESCAPE_MESSAGES.length - 1);
      setLastMessage(ESCAPE_MESSAGES[msgIndex]);

      const pos = calculateSafePosition();
      setNoPosition(pos);

      if (nextAttempt >= 3) {
        const angles = [-6, 6, -4, 5, -8, 7, -3, 4];
        setRotation(angles[Math.floor(Math.random() * angles.length)]);
      } else {
        setRotation(0);
      }

      if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
        try {
          navigator.vibrate(35);
        } catch {
          // ignore
        }
      }
    },
    [attempt, calculateSafePosition]
  );

  useEffect(() => {
    const handleResize = () => {
      if (noPosition && arenaRef.current) {
        setNoPosition(calculateSafePosition());
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [noPosition, calculateSafePosition]);

  const getNoButtonText = () => {
    if (attempt === 0) return "NO";
    if (attempt === 1) return "NO";
    if (attempt === 2) return "NO WAY";
    if (attempt === 3) return "STILL NO";
    if (attempt === 4) return "NOPE";
    if (attempt === 5) return "PASS";
    if (attempt >= 10) return "no";
    return "NO";
  };

  const getNoScale = () => {
    if (attempt === 0) return 1;
    if (attempt === 1) return 0.95;
    if (attempt === 2) return 0.88;
    if (attempt === 3) return 0.8;
    if (attempt === 4) return 0.72;
    if (attempt === 5) return 0.65;
    return Math.max(0.48, 0.65 - (attempt - 5) * 0.035);
  };

  return (
    <div className="relative w-full max-w-xl mx-auto px-1 sm:px-4 z-10">
      {/* 8-bit RPG Main Dialogue Box (Strictly square, retro pixel border) */}
      <div className="bg-white border-3 sm:border-4 border-[#1a1215] shadow-[4px_4px_0px_#1a1215] sm:shadow-[6px_6px_0px_#1a1215] p-3.5 sm:p-7 relative">
        {/* Retro Header Kicker Bar */}
        <div className="border-b-2 border-[#1a1215] pb-2 mb-4 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <PixelStar size={13} color="#ff2d55" />
            <span className="font-pixel-heading text-[9px] sm:text-xs text-[#1a1215] uppercase tracking-wider">
              PROPOSER: MOEZ
            </span>
          </div>
          <div className="font-pixel-mono text-xs sm:text-sm text-[#ff2d55] font-bold">
            TARGET: ELIZA
          </div>
        </div>

        {/* Pixel Icon Crest */}
        <div className="text-center mb-3">
          <div className="inline-block p-1.5 sm:p-2 bg-[#ffebee] border-2 border-[#1a1215] shadow-[2px_2px_0px_#1a1215]">
            <PixelHeart size={26} color="#ff2d55" className="pixel-beat" />
          </div>
        </div>

        {/* Pixel Main Headline */}
        <div className="text-center space-y-2 mb-4">
          <h1 className="font-pixel-heading text-base sm:text-2xl text-[#1a1215] leading-relaxed tracking-wide">
            ELIZA, WILL YOU BE <br />
            <span className="text-[#ff2d55] bg-[#fff0f3] px-2 py-0.5 inline-block mt-1 border-2 border-[#1a1215]">
              MY GIRLFRIEND?
            </span>
          </h1>

          {/* Subtitle Dialogue in clean retro pixel font */}
          <div className="p-2 sm:p-2.5 bg-[#faf5f6] border-2 border-[#1a1215] mt-2.5 text-left">
            <p className="font-pixel-body text-xs sm:text-base text-[#2a2024] leading-relaxed">
              <span className="text-[#ff2d55] font-bold">MOEZ:</span> “I have carefully calculated the risks. I am still choosing you.”
            </p>
          </div>

          {/* 8-bit stats ribbon */}
          <div className="flex items-center justify-center gap-2 sm:gap-4 text-[9px] sm:text-xs font-pixel-heading text-[#6b5860] pt-1 flex-wrap">
            <span>RISK: 0.04%</span>
            <span>·</span>
            <span>JOY: 99.8%</span>
            <span>·</span>
            <span className="text-[#10b981]">CHANCE: 100%</span>
          </div>
        </div>

        {/* Evasive Status / Combat Log Message */}
        <div className="min-h-[30px] flex items-center justify-center mb-3">
          <AnimatePresence mode="wait">
            {lastMessage && (
              <motion.div
                key={lastMessage}
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="bg-[#ffeef2] border-2 border-[#ff2d55] px-2.5 py-1 text-center font-pixel-body text-xs sm:text-sm text-[#ff2d55] font-medium"
              >
                <span>&gt; {lastMessage}</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Action Arena */}
        <div
          ref={arenaRef}
          className="relative w-full h-36 sm:h-40 bg-[#f7edf0] border-2 border-[#1a1215] p-3 overflow-hidden flex items-center justify-center"
        >
          {/* Subtle 8-bit floor pattern */}
          <div
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(#1a1215 1px, transparent 1px)',
              backgroundSize: '12px 12px',
            }}
          />

          {attempt === 0 ? (
            <div className="relative z-10 flex items-center gap-4 sm:gap-6 flex-wrap justify-center">
              {/* Primary YES Button (Pixel arcade CTA) */}
              <button
                ref={yesButtonRef}
                onClick={() => {
                  sounds.playCelebration();
                  onAccept();
                }}
                className="pixel-btn-primary bg-[#ff2d55] hover:bg-[#ff1744] text-white font-pixel-heading text-xs sm:text-sm px-6 sm:px-8 py-3.5 tracking-wider cursor-pointer"
              >
                ▶ YES
              </button>

              {/* Secondary NO Button */}
              <button
                ref={noButtonRef}
                onMouseEnter={() => handleEvade()}
                onTouchStart={(e) => handleEvade(e)}
                onPointerDown={(e) => handleEvade(e)}
                onClick={(e) => handleEvade(e)}
                className="pixel-btn-secondary bg-white hover:bg-[#fff5f7] text-[#1a1215] font-pixel-heading text-xs sm:text-sm px-6 py-3.5 tracking-wider cursor-pointer select-none"
              >
                NO
              </button>
            </div>
          ) : (
            <>
              {/* Anchored YES button */}
              <div className="relative z-10 flex items-center justify-center">
                <button
                  ref={yesButtonRef}
                  onClick={() => {
                    sounds.playCelebration();
                    onAccept();
                  }}
                  className="pixel-btn-primary bg-[#ff2d55] hover:bg-[#ff1744] text-white font-pixel-heading text-xs sm:text-sm px-7 sm:px-9 py-3.5 tracking-wider cursor-pointer"
                >
                  ▶ YES
                </button>
              </div>

              {/* Escaping NO button */}
              {noPosition && (
                <button
                  ref={noButtonRef}
                  onMouseEnter={() => handleEvade()}
                  onTouchStart={(e) => handleEvade(e)}
                  onPointerDown={(e) => handleEvade(e)}
                  onClick={(e) => handleEvade(e)}
                  style={{
                    position: 'absolute',
                    left: `${noPosition.x}px`,
                    top: `${noPosition.y}px`,
                    transform: `rotate(${rotation}deg) scale(${getNoScale()})`,
                    transformOrigin: 'center center',
                    touchAction: 'none',
                  }}
                  className="z-20 bg-white border-2 border-[#1a1215] shadow-[2px_2px_0px_#1a1215] text-[#1a1215] font-pixel-heading text-[10px] px-3 py-1.5 transition-all duration-200 ease-out cursor-pointer select-none"
                  aria-label="No option"
                >
                  {getNoButtonText()}
                </button>
              )}
            </>
          )}
        </div>

        {/* Footer Note */}
        <div className="mt-4 text-center font-pixel-mono text-xs text-[#8c7882]">
          * QUEST OBJECTIVE: CHOOSE YES TO UNLOCK CO-OP MODE WITH MOEZ
        </div>
      </div>
    </div>
  );
};
