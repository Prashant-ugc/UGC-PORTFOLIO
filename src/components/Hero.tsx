import React from 'react';
import { PhoneMockup } from './PhoneMockup';
import { PORTFOLIO_ADS, AdItem } from '../data/portfolioData';
import { CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onOpenAdDetail: (ad: AdItem) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenAdDetail,
}) => {
  const marqueeAd = PORTFOLIO_ADS[0];

  return (
    <section className="relative pt-10 pb-16 lg:pt-16 lg:pb-20 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none -z-10"></div>
      <div className="absolute top-1/3 right-10 w-[400px] h-[350px] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column (7 Cols on desktop) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Clean metadata kicker */}
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs sm:text-sm font-semibold tracking-wider text-blue-400 uppercase font-mono mb-4">
              <span>Freelance AI UGC Specialist</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>US DTC & TikTok Shop Brands</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] font-heading text-balance mb-6">
              Scale TikTok & Meta Ads with AI UGC in{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-sky-400">
                48 Hours
              </span>
              , Not 3 Weeks.
            </h1>

            {/* Value Proposition */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-8">
              Stop paying $600/video to flaky creators who deliver late and refuse revisions.
              I produce hyper-realistic AI UGC video ads with authentic native American accents,
              high-retention viral hooks, and tested 3.4x+ ROAS for US e-commerce brands.
            </p>

            {/* Value Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-800/80 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>48-Hour Turnaround</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Native US Regional Accents</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>100% Commercial Rights</span>
              </div>
            </div>
          </div>

          {/* Right Column: Live Autoplaying Video */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-[48px] blur-xl opacity-70 pointer-events-none"></div>
              
              <PhoneMockup
                ad={marqueeAd}
                autoPlay={true}
                defaultMuted={true}
                onOpenDetails={() => onOpenAdDetail(marqueeAd)}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
