import React from 'react';
import { Sparkles, Mail, MessageSquare, Clock, Globe } from 'lucide-react';

interface FooterProps {
  onBookCallClick?: () => void;
}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="w-full border-t border-slate-800/80 bg-slate-950 py-16 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800/80">
          {/* Col 1: Brand & Bio */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                <Sparkles className="w-3.5 h-3.5" />
              </div>
              <span className="text-base font-bold text-white font-heading">
                Prashant<span className="text-blue-400"> Work</span>
              </span>
              <span className="text-xs text-slate-500 font-mono">/ Freelance AI Ad Studio</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm mb-4">
              Crafting hyper-realistic, high-retention AI UGC video ads engineered for
              US DTC e-commerce brands, TikTok Shop sellers, and performance marketing teams.
            </p>
            <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-blue-400" />
                <span>US Hours: 9 AM - 6 PM EST</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-emerald-400" />
                <span>Worldwide Delivery</span>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <div className="font-bold text-white text-xs uppercase font-mono tracking-wider mb-3">
              Quick Navigation
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#work" className="hover:text-blue-400 transition-colors">
                  Live Video Portfolio
                </a>
              </li>
              <li>
                <a href="#why-ai-ugc" className="hover:text-blue-400 transition-colors">
                  Why AI UGC
                </a>
              </li>
              <li>
                <a href="#results" className="hover:text-blue-400 transition-colors">
                  Client Case Studies & ROAS
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Inquiries */}
          <div>
            <div className="font-bold text-white text-xs uppercase font-mono tracking-wider mb-3">
              Direct Inquiries
            </div>
            <div className="space-y-3">
              {/* Email */}
              <a
                href="mailto:admin@prashantwork.us.ci"
                className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors group"
              >
                <div className="w-7 h-7 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors shrink-0">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <span className="font-mono text-xs">admin@prashantwork.us.ci</span>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/919118959922"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-slate-300 hover:text-emerald-300 transition-colors group"
              >
                <div className="w-7 h-7 rounded-lg bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white transition-colors shrink-0">
                  <MessageSquare className="w-3.5 h-3.5" />
                </div>
                <span className="font-mono text-xs">WhatsApp: +91 9118959922</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px] font-mono">
          <div>
            © {new Date().getFullYear()} Prashant Work. All commercial rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Guaranteed 48h Turnaround</span>
            <span>·</span>
            <span>100% Commercial Usage Rights</span>
            <span>·</span>
            <span>TikTok Shop & Meta Whitelisted</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
