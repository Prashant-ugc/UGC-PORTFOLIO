import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MetricsBar } from './components/MetricsBar';
import { ShowcaseGrid } from './components/ShowcaseGrid';
import { ComparisonSection } from './components/ComparisonSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { AdDetailModal } from './components/AdDetailModal';
import { Footer } from './components/Footer';
import { AdItem } from './data/portfolioData';

export default function App() {
  const [selectedAd, setSelectedAd] = useState<AdItem | null>(null);

  return (
    <div className="min-h-screen bg-[#090A0F] text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Top Bar Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Split Hero with Live Autoplaying Phone Mockup */}
        <Hero onOpenAdDetail={(ad) => setSelectedAd(ad)} />

        {/* 4-Column KPI Tabular Strip */}
        <MetricsBar />

        {/* All Live Autoplaying Video Ads */}
        <ShowcaseGrid onSelectAd={(ad) => setSelectedAd(ad)} />

        {/* Side-by-Side Agency vs AI UGC Comparison */}
        <ComparisonSection />

        {/* Verified US Client Founder Testimonials */}
        <TestimonialsSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Pure Centered Pop-up Video Ad Modal */}
      <AdDetailModal
        ad={selectedAd}
        onClose={() => setSelectedAd(null)}
      />
    </div>
  );
}
