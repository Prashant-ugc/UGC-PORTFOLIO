import React, { useState } from 'react';
import {
  generateAdConcept,
  NICHE_CONFIGS,
  ANGLE_CONFIGS,
  NicheId,
  AngleId,
  GeneratedConcept,
} from '../utils/creativeStudio';
import { Sparkles, Copy, Check, ArrowRight, Wand2, Music2, Gauge } from 'lucide-react';

interface CreativeLabProps {
  onOrderConcept: (concept: GeneratedConcept) => void;
}

export const CreativeLab: React.FC<CreativeLabProps> = ({ onOrderConcept }) => {
  const [selectedNiche, setSelectedNiche] = useState<NicheId>('skincare_beauty');
  const [selectedAngle, setSelectedAngle] = useState<AngleId>('problem_agitate_solve');
  const [productName, setProductName] = useState('');
  const [targetAudience, setTargetAudience] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [concept, setConcept] = useState<GeneratedConcept>(() =>
    generateAdConcept('skincare_beauty', 'problem_agitate_solve')
  );
  const [copied, setCopied] = useState(false);

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);
    setTimeout(() => {
      const newConcept = generateAdConcept(
        selectedNiche,
        selectedAngle,
        productName,
        targetAudience
      );
      setConcept(newConcept);
      setIsGenerating(false);
    }, 400);
  };

  const handleCopyScript = () => {
    const fullText = concept.scenes
      .map(
        (s) =>
          `[${s.timeframe}] ${s.stage}\nSpoken: "${s.spokenAudio}"\nOverlay: "${s.onScreenText}"\nVisual Shot: ${s.visualPrompt}`
      )
      .join('\n\n');

    navigator.clipboard.writeText(
      `Product: ${concept.productName}\nAngle: ${ANGLE_CONFIGS[concept.angle].name}\nSound: ${concept.soundVibe}\n\n${fullText}`
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="creative-lab" className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-800/80">
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <div className="text-xs sm:text-sm font-semibold tracking-wider text-blue-400 uppercase font-mono mb-2">
          Interactive AI UGC Studio
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-heading tracking-tight">
          Test Your Product's Viral AI UGC Angle Right Now.
        </h2>
        <p className="text-sm sm:text-base text-slate-400 mt-3">
          Select your e-commerce category, choose an angle, and see the exact 3-second hooks
          and 30-second script our AI engine would produce for your US campaign.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Form: Parameters (5 Cols) */}
        <div className="lg:col-span-5 bg-slate-900/60 border border-slate-800 rounded-3xl p-6 shadow-xl">
          <form onSubmit={handleGenerate} className="space-y-5">
            {/* 1. Niche Selector */}
            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-2">
                1. Select E-Commerce Niche
              </label>
              <div className="grid grid-cols-2 gap-2">
                {(Object.keys(NICHE_CONFIGS) as NicheId[]).map((nId) => (
                  <button
                    type="button"
                    key={nId}
                    onClick={() => {
                      setSelectedNiche(nId);
                      setProductName('');
                    }}
                    className={`p-2.5 rounded-xl text-xs font-medium text-left transition-all border cursor-pointer ${
                      selectedNiche === nId
                        ? 'bg-blue-600/30 border-blue-500 text-white font-semibold'
                        : 'bg-slate-900/40 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                    }`}
                  >
                    {NICHE_CONFIGS[nId].name}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Angle Selector */}
            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-2">
                2. Choose Viral Hook Angle
              </label>
              <select
                value={selectedAngle}
                onChange={(e) => setSelectedAngle(e.target.value as AngleId)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-blue-500"
              >
                {(Object.keys(ANGLE_CONFIGS) as AngleId[]).map((aId) => (
                  <option key={aId} value={aId}>
                    {ANGLE_CONFIGS[aId].name}
                  </option>
                ))}
              </select>
              <p className="text-[11px] text-slate-400 mt-1.5 leading-relaxed">
                {ANGLE_CONFIGS[selectedAngle].summary}
              </p>
            </div>

            {/* 3. Product Name Input */}
            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-2">
                3. Your Product Name (Optional)
              </label>
              <input
                type="text"
                placeholder={NICHE_CONFIGS[selectedNiche].defaultProduct}
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* 4. Target Audience */}
            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-2">
                4. Target Demographic
              </label>
              <input
                type="text"
                placeholder={NICHE_CONFIGS[selectedNiche].defaultAudience}
                value={targetAudience}
                onChange={(e) => setTargetAudience(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Generate Button */}
            <button
              type="submit"
              disabled={isGenerating}
              className="w-full py-3.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-semibold text-xs tracking-wide uppercase transition-all shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              <Wand2 className="w-4 h-4" />
              <span>{isGenerating ? 'Generating Script...' : 'Generate AI UGC Creative Concept'}</span>
            </button>
          </form>
        </div>

        {/* Right Output Pane: Generated Concept (7 Cols) */}
        <div className="lg:col-span-7 bg-[#0B0D14] border border-slate-800 rounded-3xl p-6 shadow-xl flex flex-col gap-6">
          {/* Header Strip */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                <span className="text-blue-400 font-bold">{NICHE_CONFIGS[concept.niche].name}</span>
                <span>·</span>
                <span>{ANGLE_CONFIGS[concept.angle].name}</span>
              </div>
              <h3 className="text-lg font-bold text-white font-heading mt-1">
                {concept.productName}
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyScript}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium transition-colors cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 font-bold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Script</span>
                  </>
                )}
              </button>

              <button
                onClick={() => onOrderConcept(concept)}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-sm transition-all cursor-pointer whitespace-nowrap"
              >
                <span>Produce This Ad</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Metric Projections */}
          <div className="grid grid-cols-3 gap-3 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 text-xs font-mono">
            <div>
              <span className="text-slate-500 text-[10px] block">EST. 3S HOOK RATE</span>
              <span className="text-white font-bold text-sm tabular-nums">{concept.estimatedHookRate}</span>
            </div>
            <div>
              <span className="text-slate-500 text-[10px] block">PREDICTED CTR</span>
              <span className="text-emerald-400 font-bold text-sm tabular-nums">{concept.predictedCtr}</span>
            </div>
            <div>
              <span className="text-slate-500 text-[10px] block">VOICE ACCENT</span>
              <span className="text-blue-400 font-bold text-xs truncate block">US Native</span>
            </div>
          </div>

          {/* 3 Viral Hook Options */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>3 Viral Hook Variations for A/B Testing</span>
            </h4>
            <div className="space-y-2">
              {concept.hookVariations.map((h, i) => (
                <div
                  key={i}
                  className="p-3 rounded-xl bg-slate-900/40 border border-slate-800 text-xs flex flex-col gap-1"
                >
                  <div className="flex items-center justify-between text-slate-400 font-mono text-[11px]">
                    <span className="font-semibold text-slate-200">{h.label}</span>
                    <span className="text-blue-400 font-bold tabular-nums">
                      {h.predictedRetention} Retention
                    </span>
                  </div>
                  <p className="text-slate-200 font-medium italic">
                    "{h.hookText}"
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Script Scene Breakdown */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
              <Gauge className="w-3.5 h-3.5 text-blue-400" />
              <span>Full 30-Second Script & Shot List</span>
            </h4>
            <div className="border border-slate-800 rounded-2xl overflow-hidden divide-y divide-slate-800/70 bg-slate-900/20 text-xs">
              {concept.scenes.map((scene, idx) => (
                <div key={idx} className="p-3">
                  <div className="flex items-center justify-between font-mono text-[11px] text-slate-400 mb-1">
                    <span className="text-blue-400 font-bold">{scene.timeframe}</span>
                    <span className="font-medium text-slate-300">{scene.stage}</span>
                  </div>
                  <p className="font-semibold text-white mb-1">
                    "{scene.spokenAudio}"
                  </p>
                  <div className="flex items-center gap-2 text-[11px] text-amber-300/90 font-mono mb-1">
                    <span>On-Screen Overlay:</span>
                    <span className="bg-amber-400/10 px-1.5 py-0.5 rounded text-amber-200 font-bold">
                      {scene.onScreenText}
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-400">
                    <span className="font-mono text-slate-500 uppercase text-[10px] mr-1">Visual Prompt:</span>
                    <span>{scene.visualPrompt}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sound & Audio Suggestion */}
          <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-800/80 flex items-center gap-2.5 text-xs text-slate-300">
            <Music2 className="w-4 h-4 text-blue-400 shrink-0" />
            <div>
              <span className="font-semibold text-white">Recommended TikTok Audio Vibe: </span>
              <span className="text-slate-400">{concept.soundVibe}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
