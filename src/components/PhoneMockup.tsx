import React, { useState, useEffect, useRef } from 'react';
import {
  Volume2,
  VolumeX,
  Music2,
  Sparkles,
  Maximize2,
} from 'lucide-react';
import { AdItem } from '../data/portfolioData';
import { ugcAudioService } from '../utils/audioPlayer';

interface PhoneMockupProps {
  ad: AdItem;
  onOpenDetails?: () => void;
  isCompact?: boolean;
  autoPlay?: boolean;
  defaultMuted?: boolean;
  showBottomLink?: boolean;
}

export const PhoneMockup: React.FC<PhoneMockupProps> = ({
  ad,
  onOpenDetails,
  isCompact = false,
  autoPlay = true,
  defaultMuted = true,
}) => {
  const [isPlaying] = useState(autoPlay);
  const [isMuted, setIsMuted] = useState(defaultMuted);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Video element synchronization
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
      if (isPlaying) {
        videoRef.current.play().catch(() => {
          // Browser autoplay policy might require mute
        });
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying, isMuted]);

  // Fallback timer when no real video file exists
  useEffect(() => {
    if (!ad.videoUrl) {
      if (isPlaying) {
        timerRef.current = setInterval(() => {
          setProgress((prev) => {
            if (prev >= 99) return 0;
            return prev + 1.2;
          });
        }, 300);
      } else if (timerRef.current) {
        clearInterval(timerRef.current);
      }
      return () => {
        if (timerRef.current) clearInterval(timerRef.current);
      };
    }
  }, [isPlaying, ad.videoUrl]);

  // Audio control for fallback
  useEffect(() => {
    if (!ad.videoUrl) {
      if (!isMuted && isPlaying) {
        ugcAudioService.playAmbientAdAudio();
      } else {
        ugcAudioService.stopAudio();
      }
      return () => {
        ugcAudioService.stopAudio();
      };
    }
  }, [isMuted, isPlaying, ad.videoUrl]);

  const handleToggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    if (videoRef.current) {
      videoRef.current.muted = nextMuted;
      if (!nextMuted) {
        videoRef.current.play().catch(() => {});
      }
    }
  };

  const handleCardClick = () => {
    if (onOpenDetails) {
      onOpenDetails();
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current && videoRef.current.duration) {
      const pct = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(pct);
    }
  };

  // Niche visual themes
  const getNicheVisuals = () => {
    switch (ad.niche) {
      case 'skincare':
        return {
          gradient: 'from-rose-900/40 via-amber-950/30 to-slate-950',
          actorEmoji: '👩🏻‍🦰',
        };
      case 'fitness':
        return {
          gradient: 'from-emerald-950/50 via-teal-950/30 to-slate-950',
          actorEmoji: '🧔🏻‍♂️',
        };
      case 'gadgets':
        return {
          gradient: 'from-blue-950/50 via-indigo-950/30 to-slate-950',
          actorEmoji: '👨🏽‍💻',
        };
      case 'fashion':
        return {
          gradient: 'from-amber-950/50 via-neutral-900 to-slate-950',
          actorEmoji: '👱🏼‍♀️',
        };
      case 'pet':
        return {
          gradient: 'from-orange-950/50 via-amber-950/30 to-slate-950',
          actorEmoji: '🐕',
        };
      default:
        return {
          gradient: 'from-cyan-950/50 via-slate-900 to-slate-950',
          actorEmoji: '👨🏻‍💻',
        };
    }
  };

  const visuals = getNicheVisuals();

  return (
    <div className="relative flex flex-col items-center">
      {/* Smartphone Chassis - Click to open modal */}
      <div
        onClick={handleCardClick}
        className={`relative ${
          isCompact
            ? 'w-[280px] sm:w-[300px] h-[540px] sm:h-[580px]'
            : 'w-[315px] sm:w-[340px] h-[610px] sm:h-[650px]'
        } bg-black rounded-[42px] p-2.5 shadow-2xl shadow-blue-950/40 border-[3px] border-slate-700/80 cursor-pointer select-none overflow-hidden group transition-all duration-300 hover:border-blue-500 hover:scale-[1.01]`}
      >
        {/* Dynamic Island / Camera Notch */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full z-30 flex items-center justify-center gap-2 border border-slate-800/80 shadow-md">
          <div className="w-2.5 h-2.5 rounded-full bg-slate-900 border border-slate-800"></div>
          <div className="w-2 h-2 rounded-full bg-blue-950 border border-blue-900/60"></div>
        </div>

        {/* Video Screen Content */}
        <div
          className={`relative w-full h-full rounded-[34px] overflow-hidden bg-gradient-to-b ${visuals.gradient} flex flex-col justify-between`}
        >
          {/* Actual Video Element if videoUrl exists */}
          {ad.videoUrl ? (
            <video
              ref={videoRef}
              src={ad.videoUrl}
              playsInline
              autoPlay={autoPlay}
              loop
              muted={isMuted}
              onTimeUpdate={handleTimeUpdate}
              className="absolute inset-0 w-full h-full object-cover z-0"
            />
          ) : (
            /* Fallback Aesthetic Actor Simulation */
            <>
              <div className="absolute inset-0 bg-radial from-transparent via-slate-950/40 to-black/80 pointer-events-none"></div>

              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center opacity-90">
                <div className="relative mb-5">
                  <div className="w-24 h-24 rounded-full bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-5xl shadow-2xl backdrop-blur-sm group-hover:scale-105 transition-transform">
                    {visuals.actorEmoji}
                  </div>
                  <div className="absolute -bottom-2 -right-1 px-2 py-0.5 rounded-md bg-blue-600/95 text-[10px] font-bold text-white uppercase tracking-wider shadow">
                    4K AI UGC
                  </div>
                </div>

                <div className="text-xs font-semibold text-slate-200 tracking-wide uppercase font-mono">
                  {ad.creatorProfile.name} · {ad.creatorProfile.location}
                </div>
                <div className="text-[11px] text-slate-400 mt-1 max-w-[210px]">
                  {ad.creatorProfile.archetype}
                </div>

                <div className="mt-3 px-2.5 py-1 rounded-full bg-black/40 border border-white/10 text-[10px] text-slate-300 backdrop-blur-md flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-blue-400 shrink-0" />
                  <span>Native US Accent · 100% Lipsync</span>
                </div>
              </div>
            </>
          )}

          {/* Top Bar: Action Button */}
          <div className="relative z-20 pt-4 px-4 flex items-center justify-end text-white/90">
            {onOpenDetails ? (
              <div className="flex items-center gap-1 text-[11px] bg-blue-600/90 hover:bg-blue-600 text-white font-medium px-2.5 py-1 rounded-full backdrop-blur-md shadow-md transition-colors border border-blue-400/30">
                <Maximize2 className="w-3 h-3" />
                <span>Open Ad</span>
              </div>
            ) : (
              <div className="flex items-center gap-1 text-[11px] bg-emerald-600/80 text-white font-medium px-2.5 py-1 rounded-full backdrop-blur-md shadow-md border border-emerald-400/30">
                <Sparkles className="w-3 h-3" />
                <span>Active Campaign</span>
              </div>
            )}
          </div>

          {/* Middle Spacer */}
          <div className="flex-1"></div>

          {/* Clean Bottom Audio Waveform & Progress Scrubber */}
          <div className="relative z-20 px-4 pb-3">
            <div className="flex items-center justify-between text-white/90 text-[10px] font-mono py-1 mb-1.5 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10 shadow-lg">
              <div className="flex items-center gap-1.5 truncate max-w-[190px]">
                <Music2 className="w-3 h-3 text-blue-400 shrink-0" />
                <span className="truncate">Original Audio · {ad.creatorProfile.name}</span>
              </div>
              <div className="flex items-center gap-0.5 h-3 shrink-0">
                {[4, 10, 6, 12, 8, 14, 5, 11].map((h, i) => (
                  <span
                    key={i}
                    className="w-0.5 bg-blue-400 rounded-full animate-pulse"
                    style={{ height: `${h}px` }}
                  />
                ))}
              </div>
            </div>

            {/* Video Progress Scrubber */}
            <div className="relative w-full h-1 bg-white/20 rounded-full overflow-hidden">
              <div
                className="absolute top-0 left-0 h-full bg-blue-500 transition-all duration-150"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          {/* Right Floating Audio Mute/Unmute Button */}
          <div className="absolute right-3 bottom-14 z-30 flex flex-col items-center text-white">
            <button
              onClick={handleToggleMute}
              className={`w-10 h-10 rounded-full flex items-center justify-center shadow-2xl transition-all duration-200 cursor-pointer ${
                isMuted
                  ? 'bg-slate-900/95 hover:bg-slate-800 text-slate-300 border border-slate-700'
                  : 'bg-blue-600 hover:bg-blue-500 text-white ring-2 ring-blue-400 animate-pulse'
              }`}
              title={isMuted ? 'Click to Unmute Audio' : 'Click to Mute'}
              aria-label={isMuted ? 'Unmute video audio' : 'Mute video audio'}
            >
              {isMuted ? <VolumeX className="w-4 h-4 text-slate-400" /> : <Volume2 className="w-4 h-4 text-white" />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
