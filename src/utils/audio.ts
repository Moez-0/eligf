/**
 * Authentic 8-bit Chiptune Sound Effects
 * Synthesized with Web Audio API square waves & noise.
 */

class SoundEffects {
  private ctx: AudioContext | null = null;
  public enabled: boolean = true;

  private getContext(): AudioContext | null {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
    return this.ctx;
  }

  // 8-bit dodge sound: classic retro jump / slide
  playDodge(attempt: number) {
    if (!this.enabled) return;
    try {
      const ctx = this.getContext();
      if (!ctx) return;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'square';
      const baseFreq = 220 + Math.min(attempt * 45, 500);

      osc.frequency.setValueAtTime(baseFreq, ctx.currentTime);
      osc.frequency.linearRampToValueAtTime(baseFreq * 1.8, ctx.currentTime + 0.08);

      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.01, ctx.currentTime + 0.1);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.11);
    } catch {
      // Audio not permitted
    }
  }

  // 8-bit victory fanfare: classic RPG item / quest complete jingle
  playCelebration() {
    if (!this.enabled) return;
    try {
      const ctx = this.getContext();
      if (!ctx) return;

      // Jingle notes (C5, G5, A5, C6)
      const sequence = [
        { freq: 523.25, time: 0.0, dur: 0.1 },
        { freq: 659.25, time: 0.1, dur: 0.1 },
        { freq: 783.99, time: 0.2, dur: 0.1 },
        { freq: 1046.5, time: 0.32, dur: 0.35 },
      ];

      sequence.forEach((note) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'square';
        const start = ctx.currentTime + note.time;

        osc.frequency.setValueAtTime(note.freq, start);

        gain.gain.setValueAtTime(0.09, start);
        gain.gain.linearRampToValueAtTime(0.07, start + note.dur * 0.7);
        gain.gain.exponentialRampToValueAtTime(0.001, start + note.dur);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(start);
        osc.stop(start + note.dur + 0.02);
      });
    } catch {
      // Audio not permitted
    }
  }

  // 8-bit menu blip
  playClick() {
    if (!this.enabled) return;
    try {
      const ctx = this.getContext();
      if (!ctx) return;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'square';
      osc.frequency.setValueAtTime(880, ctx.currentTime);
      osc.frequency.setValueAtTime(1760, ctx.currentTime + 0.03);

      gain.gain.setValueAtTime(0.06, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.001, ctx.currentTime + 0.06);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.07);
    } catch {
      // Audio not permitted
    }
  }
}

export const sounds = new SoundEffects();
