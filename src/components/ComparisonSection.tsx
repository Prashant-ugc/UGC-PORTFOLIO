import React from 'react';
import { COMPARISON_ROWS } from '../data/portfolioData';
import { Check, X, Zap } from 'lucide-react';

export const ComparisonSection: React.FC = () => {
  return (
    <section id="why-ai-ugc" className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-800/80">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <div className="text-xs sm:text-sm font-semibold tracking-wider text-blue-400 uppercase font-mono mb-2">
          The Unfair Advantage
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-heading tracking-tight">
          Traditional Creator Agencies vs. My AI UGC Engine.
        </h2>
        <p className="text-sm sm:text-base text-slate-400 mt-3">
          Why leading US TikTok Shop and Meta advertisers are replacing $600 creator contracts
          with rapid, multi-hook AI creatives.
        </p>
      </div>

      {/* Comparison Table */}
      <div className="w-full overflow-x-auto">
        <div className="min-w-[720px] bg-slate-900/40 border border-slate-800 rounded-2xl overflow-hidden divide-y divide-slate-800/80">
          {/* Table Header */}
          <div className="grid grid-cols-12 bg-slate-900/90 text-xs font-mono font-bold uppercase tracking-wider text-slate-400 py-4 px-6">
            <div className="col-span-4 text-slate-300">Dimension / Factor</div>
            <div className="col-span-4 text-rose-400/90 flex items-center gap-1.5">
              <X className="w-3.5 h-3.5" />
              <span>Traditional US UGC Agency</span>
            </div>
            <div className="col-span-4 text-blue-400 flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5" />
              <span>My AI UGC Studio</span>
            </div>
          </div>

          {/* Rows */}
          {COMPARISON_ROWS.map((row, idx) => (
            <div
              key={idx}
              className="grid grid-cols-12 py-5 px-6 items-start gap-4 hover:bg-slate-800/20 transition-colors text-xs sm:text-sm"
            >
              <div className="col-span-4">
                <div className="font-bold text-white font-heading">{row.aspect}</div>
                <div className="text-xs text-blue-400/80 mt-1 font-mono font-medium">
                  {row.advantage}
                </div>
              </div>

              <div className="col-span-4 text-slate-400 flex items-start gap-2">
                <span className="text-rose-500 font-bold shrink-0">✕</span>
                <span>{row.traditional}</span>
              </div>

              <div className="col-span-4 text-slate-200 font-medium flex items-start gap-2">
                <span className="text-emerald-400 font-bold shrink-0">✓</span>
                <span className="text-white">{row.aiUgc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
