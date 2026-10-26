import React from 'react';
import { TESTIMONIALS } from '../data/portfolioData';
import { Star, Quote, TrendingUp } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="results" className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-800/80">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <div className="text-xs sm:text-sm font-semibold tracking-wider text-blue-400 uppercase font-mono mb-2">
          Verified US Client Wins
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-heading tracking-tight">
          What 7 & 8-Figure E-Commerce Founders Say.
        </h2>
        <p className="text-sm sm:text-base text-slate-400 mt-3">
          Real feedback from US brand operators scaling on TikTok Shop, Meta Reels, and Amazon.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {TESTIMONIALS.map((t) => (
          <div
            key={t.id}
            className="rounded-3xl p-7 bg-slate-900/40 border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-colors"
          >
            <div>
              {/* Star Rating & Spend Tag */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <span className="text-[11px] font-mono text-slate-400">
                  {t.location}
                </span>
              </div>

              {/* Quote Body */}
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 italic">
                "{t.quote}"
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800/80">
              {/* Key Metric Highlight */}
              <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-400 mb-3 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20 w-fit">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>{t.metric}</span>
              </div>

              {/* Author Info */}
              <div>
                <div className="font-bold text-white text-sm font-heading">{t.author}</div>
                <div className="text-xs text-slate-400">
                  {t.role} · <span className="text-slate-200">{t.company}</span>
                </div>
                <div className="text-[11px] font-mono text-slate-500 mt-0.5">
                  {t.spend}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
