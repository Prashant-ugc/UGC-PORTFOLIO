import React from 'react';

export const MetricsBar: React.FC = () => {
  const metrics = [
    {
      value: '$2.4M+',
      label: 'US Paid Ad Spend Managed',
      sublabel: 'Across TikTok Shop, Meta Reels & Shorts',
    },
    {
      value: '3.4x',
      label: 'Average Client ROAS',
      sublabel: 'Tested across 180+ video variations',
    },
    {
      value: '71.4%',
      label: 'Average 3-Sec Hook Rate',
      sublabel: 'Beats industry benchmark (35-45%)',
    },
    {
      value: '48h',
      label: 'Guaranteed Turnaround',
      sublabel: 'From script approval to final 4K render',
    },
  ];

  return (
    <div className="w-full border-y border-slate-800/80 bg-slate-900/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-slate-800/80">
          {metrics.map((m, idx) => (
            <div
              key={idx}
              className={`flex flex-col ${
                idx !== 0 ? 'pt-6 lg:pt-0 lg:pl-8' : ''
              }`}
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-white font-heading tracking-tight font-mono tabular-nums">
                {m.value}
              </div>
              <div className="text-sm font-semibold text-slate-200 mt-1">
                {m.label}
              </div>
              <div className="text-xs text-slate-400 mt-0.5">
                {m.sublabel}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
