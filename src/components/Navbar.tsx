import React from 'react';
import { Sparkles, MessageSquare } from 'lucide-react';

interface NavbarProps {
  onBookCallClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#090A0F]/90 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a href="#" className="flex items-center gap-2.5 group whitespace-nowrap shrink-0">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <span className="text-lg font-bold tracking-tight text-white font-heading">
            Prashant<span className="text-blue-400"> Work</span>
          </span>
          <span className="text-xs text-slate-400 font-mono hidden sm:inline-block ml-1">
            / AI Studio
          </span>
        </a>

        {/* Zone 2: 3 clean single-line links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a
            href="#work"
            className="hover:text-blue-400 transition-colors whitespace-nowrap shrink-0"
          >
            Live Video Portfolio
          </a>
          <a
            href="#why-ai-ugc"
            className="hover:text-blue-400 transition-colors whitespace-nowrap shrink-0"
          >
            Why AI UGC
          </a>
          <a
            href="#results"
            className="hover:text-blue-400 transition-colors whitespace-nowrap shrink-0"
          >
            Client Wins & ROAS
          </a>
        </nav>

        {/* Zone 3: Direct WhatsApp Action */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="https://wa.me/919118959922"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 rounded-lg shadow-md shadow-emerald-600/25 transition-all whitespace-nowrap shrink-0 cursor-pointer"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>WhatsApp: +91 9118959922</span>
          </a>
        </div>
      </div>
    </header>
  );
};
