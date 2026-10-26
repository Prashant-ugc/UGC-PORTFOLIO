// Lightweight Web Audio synthesizer to provide real ambient sound effects when unmuted
class UGCWebAudioService {
  private ctx: AudioContext | null = null;
  private isPlaying = false;
  private timer: NodeJS.Timeout | null = null;

  private initContext() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public playAmbientAdAudio() {
    try {
      this.initContext();
      if (!this.ctx) return;
      this.isPlaying = true;

      // Play soft ambient lofi rhythm with voice-like cadence pulses
      let step = 0;
      if (this.timer) clearInterval(this.timer);

      this.timer = setInterval(() => {
        if (!this.isPlaying || !this.ctx) return;
        step = (step + 1) % 8;

        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        // Soft melodic chord notes simulating background music track
        const frequencies = [261.63, 329.63, 392.00, 523.25, 440.00, 349.23, 392.00, 293.66];
        osc.frequency.setValueAtTime(frequencies[step], now);
        osc.type = 'sine';

        gain.gain.setValueAtTime(0.04, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now);
        osc.stop(now + 0.35);
      }, 350);
    } catch {
      // Audio context might be restricted before interaction
    }
  }

  public stopAudio() {
    this.isPlaying = false;
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }
}

export const ugcAudioService = new UGCWebAudioService();
