import React, { useState } from 'react';
import {
  PRESET_PACKAGES,
  calculateCustomPricing,
  PresetPackage,
  CalculatorOptions,
} from '../utils/pricingCalculator';
import { Check, Sparkles, ArrowRight, Zap, Calculator } from 'lucide-react';

interface PricingSectionProps {
  onSelectPackage: (pkg: PresetPackage | { name: string; price: number; details: string }) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPackage }) => {
  // Custom calculator state
  const [calcOptions, setCalcOptions] = useState<CalculatorOptions>({
    adCount: 5,
    hooksPerAd: 3,
    isRushDelivery: false,
    includeSparkAdSetup: true,
  });

  const pricing = calculateCustomPricing(calcOptions);

  return (
    <section id="pricing" className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-800/80">
      {/* Section Header */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <div className="text-xs sm:text-sm font-semibold tracking-wider text-blue-400 uppercase font-mono mb-2">
          Transparent US Brand Packages
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-heading tracking-tight">
          Flexible Pricing Engineered for Fast Creative Testing.
        </h2>
        <p className="text-sm sm:text-base text-slate-400 mt-3">
          Zero long-term contracts. 100% full commercial usage rights forever.
          Choose a battle-tested package or customize your exact creative volume below.
        </p>
      </div>

      {/* Preset Packages Grid (3 Columns) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 items-stretch">
        {PRESET_PACKAGES.map((pkg) => {
          const isFeatured = pkg.id === 'scaling';

          return (
            <div
              key={pkg.id}
              className={`relative rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 ${
                isFeatured
                  ? 'bg-gradient-to-b from-blue-950/40 via-slate-900 to-slate-950 border-2 border-blue-500 shadow-2xl shadow-blue-600/20'
                  : 'bg-slate-900/40 border border-slate-800 hover:border-slate-700'
              }`}
            >
              {pkg.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-blue-600 text-[11px] font-bold text-white uppercase tracking-wider shadow-md whitespace-nowrap">
                  {pkg.badge}
                </div>
              )}

              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-1">
                  {pkg.turnaround} Delivery
                </div>
                <h3 className="text-xl font-bold text-white font-heading mb-2">
                  {pkg.name}
                </h3>
                <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                  {pkg.description}
                </p>

                {/* Price Display with Tabular Numerals */}
                <div className="flex items-baseline gap-1 mb-6 pb-6 border-b border-slate-800">
                  <span className="text-4xl font-extrabold text-white font-mono tabular-nums">
                    ${pkg.price}
                  </span>
                  {pkg.period && (
                    <span className="text-xs text-slate-400 font-mono">{pkg.period}</span>
                  )}
                  <span className="text-xs text-slate-400 ml-2 font-mono">
                    ({pkg.adCount * pkg.hooksPerAd} Creatives)
                  </span>
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-8 text-xs text-slate-300">
                  {pkg.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <button
                  onClick={() => onSelectPackage(pkg)}
                  className={`w-full py-3 px-4 rounded-xl font-semibold text-xs tracking-wide uppercase transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer ${
                    isFeatured
                      ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-blue-600/30'
                      : 'bg-slate-800 hover:bg-slate-700 text-slate-200'
                  }`}
                >
                  <span>Select {pkg.name}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <div className="text-[10px] text-slate-500 text-center mt-2.5 font-mono">
                  Best for: {pkg.recommendedFor}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Interactive Custom Package & Savings Calculator */}
      <div className="bg-[#0B0D14] border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
        <div className="flex items-center gap-2.5 text-xs font-mono font-bold uppercase tracking-wider text-blue-400 mb-2">
          <Calculator className="w-4 h-4" />
          <span>Interactive US Agency Savings Calculator</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-white font-heading mb-3">
          Build Your Custom AI UGC Volume & See Your Cost Savings
        </h3>
        <p className="text-xs sm:text-sm text-slate-400 mb-8 max-w-2xl">
          Move the sliders to tailor your base ad concepts and hook testing variations.
          See how much you save compared to traditional US creator fees ($450/creator).
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Controls (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Slider 1: Ad Count */}
            <div>
              <div className="flex items-center justify-between text-xs font-mono mb-2">
                <span className="text-slate-300 font-semibold">
                  1. Base AI UGC Video Concepts:
                </span>
                <span className="text-blue-400 font-bold text-sm tabular-nums">
                  {calcOptions.adCount} Concepts
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="20"
                step="1"
                value={calcOptions.adCount}
                onChange={(e) =>
                  setCalcOptions({ ...calcOptions, adCount: parseInt(e.target.value) })
                }
                className="w-full accent-blue-500 h-2 bg-slate-800 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-500 mt-1">
                <span>1 Ad (Test)</span>
                <span>10 Ads (Growth)</span>
                <span>20 Ads (Enterprise)</span>
              </div>
            </div>

            {/* Slider 2: Hooks Per Ad */}
            <div>
              <div className="flex items-center justify-between text-xs font-mono mb-2">
                <span className="text-slate-300 font-semibold">
                  2. Viral Hook Variations Per Ad:
                </span>
                <span className="text-amber-400 font-bold text-sm tabular-nums">
                  {calcOptions.hooksPerAd} Hooks Each ({calcOptions.adCount * calcOptions.hooksPerAd} Total Creatives)
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="5"
                step="1"
                value={calcOptions.hooksPerAd}
                onChange={(e) =>
                  setCalcOptions({ ...calcOptions, hooksPerAd: parseInt(e.target.value) })
                }
                className="w-full accent-amber-500 h-2 bg-slate-800 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-500 mt-1">
                <span>1 Hook (Standard)</span>
                <span>3 Hooks (Recommended for TikTok)</span>
                <span>5 Hooks (Aggressive Scaling)</span>
              </div>
            </div>

            {/* Addon Checkboxes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-800/80">
              <label className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/50 border border-slate-800 cursor-pointer hover:border-slate-700 transition-colors">
                <input
                  type="checkbox"
                  checked={calcOptions.isRushDelivery || false}
                  onChange={(e) =>
                    setCalcOptions({ ...calcOptions, isRushDelivery: e.target.checked })
                  }
                  className="rounded accent-blue-500 w-4 h-4 cursor-pointer"
                />
                <div className="text-xs">
                  <span className="text-white font-semibold block">24-Hour Express Rush</span>
                  <span className="text-slate-400 text-[11px]">+$149 for emergency launches</span>
                </div>
              </label>

              <label className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/50 border border-slate-800 cursor-pointer hover:border-slate-700 transition-colors">
                <input
                  type="checkbox"
                  checked={calcOptions.includeSparkAdSetup || false}
                  onChange={(e) =>
                    setCalcOptions({ ...calcOptions, includeSparkAdSetup: e.target.checked })
                  }
                  className="rounded accent-blue-500 w-4 h-4 cursor-pointer"
                />
                <div className="text-xs">
                  <span className="text-white font-semibold block">Spark Ads & Meta Setup</span>
                  <span className="text-slate-400 text-[11px]">+$79 authorization assist</span>
                </div>
              </label>
            </div>
          </div>

          {/* Savings Calculation Summary Card (5 Cols) */}
          <div className="lg:col-span-5 bg-gradient-to-b from-blue-950/30 to-slate-900/80 border border-blue-500/30 rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-blue-400 mb-1">
                Estimated Production Comparison
              </div>

              {/* Your Price */}
              <div className="mt-3">
                <span className="text-xs text-slate-400 block font-mono">Your AI UGC Investment</span>
                <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tabular-nums">
                  ${pricing.totalCost}
                </div>
                <span className="text-xs text-slate-400 font-mono">
                  for {pricing.totalCreatives} testable video files (${Math.round(pricing.totalCost / pricing.totalCreatives)}/creative)
                </span>
              </div>

              {/* Traditional Comparison */}
              <div className="mt-5 pt-4 border-t border-slate-800 text-xs font-mono space-y-2">
                <div className="flex items-center justify-between text-slate-400">
                  <span>Traditional US Agency Cost:</span>
                  <span className="line-through tabular-nums">${pricing.traditionalCost}</span>
                </div>
                <div className="flex items-center justify-between text-emerald-400 font-bold">
                  <span>Total Budget Saved:</span>
                  <span className="tabular-nums">${pricing.totalSavings} ({pricing.savingsPercentage}% Off)</span>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span>Estimated Paid Reach:</span>
                  <span className="tabular-nums">{pricing.estimatedImpressions}</span>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span>Target ROAS Band:</span>
                  <span className="text-blue-400 font-bold tabular-nums">{pricing.expectedRoasRange}</span>
                </div>
              </div>
            </div>

            <button
              onClick={() =>
                onSelectPackage({
                  name: `Custom Package (${calcOptions.adCount} Ads, ${pricing.totalCreatives} Creatives)`,
                  price: pricing.totalCost,
                  details: `${calcOptions.adCount} base ads with ${calcOptions.hooksPerAd} hooks each, ${
                    calcOptions.isRushDelivery ? '24h Rush' : '48h Standard'
                  }`,
                })
              }
              className="mt-6 w-full py-3.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-semibold text-xs tracking-wide uppercase shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 cursor-pointer transition-all"
            >
              <Zap className="w-4 h-4 text-amber-300" />
              <span>Book This Custom Volume (${pricing.totalCost})</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
