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
  };

  const handleContinueToContract = () => {
    setStep('contract');
  };

  const handleRestart = () => {
    setStep('proposal');
  };

  return (
    <div className="relative min-h-screen pixel-bg flex flex-col justify-between selection:bg-[#ff2d55] selection:text-white overflow-x-hidden">
      {/* 8-bit Pixel Sky Background */}
      <AmbientBackground />

      {/* Square Pixel Confetti Burst on Acceptance */}
      <CelebrationParticles active={step === 'accepted'} />

      {/* 8-bit Retro Header */}
      <HeaderNav
        soundEnabled={soundEnabled}
        onToggleSound={handleToggleSound}
        onReset={handleRestart}
        showReset={step !== 'proposal'}
      />

      {/* Main Interactive Stage */}
      <main className="flex-1 flex items-center justify-center pt-16 sm:pt-20 pb-12 relative z-10">
        <AnimatePresence mode="wait">
          {step === 'proposal' && (
            <motion.div
              key="proposal-step"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              <ProposalCard onAccept={handleAccept} />
            </motion.div>
          )}

          {step === 'accepted' && (
            <motion.div
              key="accepted-step"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              <AcceptedCard onContinue={handleContinueToContract} />
            </motion.div>
          )}

          {step === 'contract' && (
            <motion.div
              key="contract-step"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
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
      <footer className="relative z-10 py-4 text-center pointer-events-none">
        <div className="font-pixel-mono text-xs text-[#7d6872] tracking-wider">
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
