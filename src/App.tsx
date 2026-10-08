import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { AmbientBackground } from './components/AmbientBackground';
import { HeaderNav } from './components/HeaderNav';
import { ProposalCard } from './components/ProposalCard';
import { AcceptedCard } from './components/AcceptedCard';
import { ContractSection } from './components/ContractSection';
import { CertificateModal } from './components/CertificateModal';
import { CelebrationParticles } from './components/CelebrationParticles';
import { sounds } from './utils/audio';

type Step = 'proposal' | 'accepted' | 'contract';

export default function App() {
  const [step, setStep] = useState<Step>('proposal');
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [isCertificateOpen, setIsCertificateOpen] = useState<boolean>(false);

  const handleToggleSound = () => {
    const next = !soundEnabled;
    setSoundEnabled(next);
    sounds.enabled = next;
  };

  const handleAccept = () => {
    setStep('accepted');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleContinueToContract = () => {
    setStep('contract');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRestart = () => {
    setStep('proposal');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen pixel-bg flex flex-col justify-between selection:bg-[#ff2d55] selection:text-white overflow-x-hidden">
      {/* 8-bit Pixel Sky Background */}
      <AmbientBackground />

      {/* Square Pixel Confetti Burst on Acceptance */}
      <CelebrationParticles active={step === 'accepted'} />

      {/* 8-bit Retro Sticky Header (Never overlaps content) */}
      <HeaderNav
        soundEnabled={soundEnabled}
        onToggleSound={handleToggleSound}
        onReset={handleRestart}
        showReset={step !== 'proposal'}
      />

      {/* Main Interactive Stage: starts from top with proper padding */}
      <main className="flex-1 w-full max-w-3xl mx-auto px-2 sm:px-4 py-3 sm:py-6 flex flex-col justify-start items-center relative z-10">
        <AnimatePresence mode="wait">
          {step === 'proposal' && (
            <motion.div
              key="proposal-step"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="w-full my-auto"
            >
              <ProposalCard onAccept={handleAccept} />
            </motion.div>
          )}

          {step === 'accepted' && (
            <motion.div
              key="accepted-step"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="w-full my-auto"
            >
              <AcceptedCard onContinue={handleContinueToContract} />
            </motion.div>
          )}

          {step === 'contract' && (
            <motion.div
              key="contract-step"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="w-full"
            >
              <ContractSection
                onRestart={handleRestart}
                onOpenCertificate={() => setIsCertificateOpen(true)}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* 8-bit Footer */}
      <footer className="relative z-10 py-3 text-center pointer-events-none pb-[max(0.75rem,env(safe-area-inset-bottom))]">
        <div className="font-pixel-mono text-[11px] sm:text-xs text-[#7d6872] tracking-wider px-2">
          [ DESIGNED WITH PIXELS BY MOEZ FOR ELIZA ]
        </div>
      </footer>

      {/* Responsive Pixel Certificate Modal */}
      <CertificateModal
        isOpen={isCertificateOpen}
        onClose={() => setIsCertificateOpen(false)}
      />
    </div>
  );
}
