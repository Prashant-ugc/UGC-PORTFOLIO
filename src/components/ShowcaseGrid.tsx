import React, { useState } from 'react';
import { PORTFOLIO_ADS, AdItem } from '../data/portfolioData';
import { PhoneMockup } from './PhoneMockup';
import { ArrowUpRight, Sparkles, TrendingUp, DollarSign } from 'lucide-react';

interface ShowcaseGridProps {
  onSelectAd: (ad: AdItem) => void;
}

export const ShowcaseGrid: React.FC<ShowcaseGridProps> = ({ onSelectAd }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Live Ad Creatives' },
    { id: 'fashion', label: 'Home, DTC & Apparel' },
    { id: 'skincare', label: 'Skincare & Grooming' },
    { id: 'fitness', label: 'Health & Supplements' },
  ];

  const filteredAds =
    activeCategory === 'all'
      ? PORTFOLIO_ADS
      : PORTFOLIO_ADS.filter((ad) => ad.niche === activeCategory);

  return (
    <section id="work" className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <div className="text-xs sm:text-sm font-semibold tracking-wider text-blue-400 uppercase font-mono mb-2">
            Live Running Portfolio
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-heading tracking-tight">
            High-Converting AI UGC Ads (Live Autoplay)
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-2xl">
            All videos play automatically (muted). Click the <span className="text-blue-400 font-bold">Mute button</span> on the right of any video to hear audio, or <span className="text-white font-bold">click anywhere on the video</span> to open it in full pop-up view.
          </p>
        </div>

        <div className="text-xs font-mono text-slate-400 shrink-0">
          Showing <span className="text-white font-bold">{filteredAds.length}</span> Active Commercial Ads
        </div>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 border-b border-slate-800/80 scrollbar-none">
        {categories.map((cat) => {
          const count =
            cat.id === 'all'
              ? PORTFOLIO_ADS.length
              : PORTFOLIO_ADS.filter((a) => a.niche === cat.id).length;

          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap cursor-pointer shrink-0 ${
                activeCategory === cat.id
                  ? 'bg-blue-600 text-white shadow-sm font-semibold'
                  : 'bg-slate-900/60 text-slate-400 hover:text-slate-200 hover:bg-slate-800/60 border border-slate-800'
              }`}
            >
              {cat.label} ({count})
            </button>
          );
        })}
      </div>

      {/* Grid of Live Autoplaying Video Ads */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
        {filteredAds.map((ad) => {
          return (
            <div
              key={ad.id}
              className="flex flex-col items-center bg-slate-900/40 border border-slate-800 rounded-3xl p-5 hover:border-slate-700 transition-all duration-300 shadow-xl"
            >
              {/* Ad Card Meta Header */}
              <div className="w-full flex items-center justify-between text-xs mb-3">
                <span className="px-2.5 py-0.5 rounded-md bg-blue-600/20 text-blue-300 font-mono text-[11px] font-semibold border border-blue-500/30">
                  {ad.nicheLabel}
                </span>

                <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 font-mono font-bold text-xs">
                  <TrendingUp className="w-3 h-3" />
                  <span>{ad.roas} ROAS</span>
                </div>
              </div>

              {/* Title & Brand */}
              <div className="w-full text-left mb-3">
                <h3 className="text-base font-bold text-white font-heading truncate">
                  {ad.brandName} · {ad.productName}
                </h3>
                <div className="text-xs text-slate-400 flex items-center gap-2 mt-0.5 font-mono">
                  <span>Spend: {ad.adSpend}</span>
                  <span>·</span>
                  <span className="text-emerald-400">Rev: {ad.revenue}</span>
                </div>
              </div>

              {/* Live Running Video Player */}
              <div className="my-2">
                <PhoneMockup
                  ad={ad}
                  isCompact={true}
                  autoPlay={true}
                  defaultMuted={true}
                  showBottomLink={false}
                  onOpenDetails={() => onSelectAd(ad)}
                />
              </div>

              {/* Bottom Quick Button */}
              <div className="w-full pt-3 mt-2 border-t border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-mono text-[11px]">
                  3s Hook Rate: <strong className="text-white">{ad.hookRate}</strong>
                </span>

                <button
                  onClick={() => onSelectAd(ad)}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-blue-400 hover:text-blue-300 cursor-pointer"
                >
                  <span>Open Full Pop-up</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
