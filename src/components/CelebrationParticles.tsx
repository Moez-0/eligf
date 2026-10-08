import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';

interface CelebrationParticlesProps {
  active: boolean;
}

export const firePixelConfetti = () => {
  const count = 80;
  const defaults: confetti.Options = {
    origin: { y: 0.65 },
    colors: ['#ff2d55', '#ff6b8b', '#ffccd5', '#ffffff', '#ffb800', '#10b981'],
    shapes: ['square'],
    scalar: 1.1,
    disableForReducedMotion: true,
  };

  confetti({
    ...defaults,
    particleCount: Math.floor(count * 0.4),
    spread: 60,
    startVelocity: 45,
  });

  confetti({
    ...defaults,
    particleCount: Math.floor(count * 0.6),
    spread: 100,
    startVelocity: 55,
  });
};

export const CelebrationParticles: React.FC<CelebrationParticlesProps> = ({ active }) => {
  useEffect(() => {
    if (!active) return;
    firePixelConfetti();

    const timer = setTimeout(() => {
      firePixelConfetti();
    }, 500);

    return () => clearTimeout(timer);
  }, [active]);

  return null;
};
