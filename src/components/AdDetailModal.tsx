import React, { useEffect } from 'react';
import { AdItem } from '../data/portfolioData';
import { PhoneMockup } from './PhoneMockup';
import { X } from 'lucide-react';

interface AdDetailModalProps {
  ad: AdItem | null;
  onClose: () => void;
  onOrderCreative?: (ad: AdItem) => void;
}

export const AdDetailModal: React.FC<AdDetailModalProps> = ({
  ad,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (ad) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [ad, onClose]);

  if (!ad) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-lg overflow-y-auto">
      {/* Click backdrop to close */}
      <div className="fixed inset-0 -z-10" onClick={onClose}></div>

      {/* Pure Centered Video Lightbox Container */}
      <div className="relative flex flex-col items-center max-w-sm sm:max-w-md w-full my-auto">
        {/* Top Floating Control Bar */}
        <div className="w-full flex items-center justify-between mb-3 px-2 text-white">
          <div className="flex items-center gap-2 truncate">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse shrink-0"></span>
            <span className="text-sm font-bold truncate font-heading">
              {ad.brandName} · {ad.productName}
            </span>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-slate-800/90 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer border border-slate-700 shrink-0 ml-3 shadow-lg"
            aria-label="Close video pop-up"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Pure Video Player */}
        <div className="relative shadow-2xl">
          <PhoneMockup
            ad={ad}
            autoPlay={true}
            defaultMuted={false}
            showBottomLink={false}
          />
        </div>
      </div>
    </div>
  );
};
