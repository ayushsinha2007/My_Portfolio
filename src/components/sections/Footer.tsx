import React from 'react';
import { personalInfo } from '../../data/portfolioData';
import { Github, Linkedin, Mail, ArrowUp, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-arc-void border-t border-slate-900 pt-16 pb-12 overflow-hidden">
      
      {/* Subtle Glowing Water Ribbon Divider */}
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-arc-cyan to-transparent opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cinematic Closing Arc Manifesto */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-arc-panel border border-arc-border text-[10px] font-mono text-arc-water-light uppercase tracking-widest mb-4">
            <Sparkles className="w-3 h-3 text-arc-ember" />
            EPILOGUE // CONTINUOUS JOURNEY
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display text-white tracking-tight">
            "THIS ISN'T THE END. <span className="cyan-gradient-text">IT'S JUST THE NEXT ARC."</span>
          </h2>
          
          <p className="mt-3 text-sm font-mono text-slate-400">
            {personalInfo.fullName} · {personalInfo.displayTitle}
          </p>
        </div>

        {/* Minimal Navigation & Links */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 py-8 border-y border-slate-800/60">
          
          {/* Brand Monogram */}
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-arc-panel border border-arc-cyan/40 flex items-center justify-center">
              <span className="w-2 h-2 rounded-full bg-arc-cyan animate-pulse" />
            </div>
            <span className="text-xs font-mono font-bold text-white tracking-wider">
              AYUSH // ARC 2026
            </span>
          </div>

          {/* Social Quick-Access */}
          <div className="flex items-center gap-5 text-slate-400">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-arc-cyan transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-arc-cyan transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.primaryEmail}`}
              className="hover:text-arc-cyan transition-colors"
              aria-label="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Scroll Back to Top Button */}
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-arc-cyan transition-colors"
          >
            <span>RETURN TO SUMMIT</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Legal & Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-500 gap-4 text-center sm:text-left">
          <p>
            © {currentYear} {personalInfo.fullName}. Crafted with Pokémon × Demon Slayer elemental inspirations.
          </p>
          <p className="text-[11px] text-slate-600">
            Built with React, TypeScript & Tailwind CSS · Newton School of Technology, ADYPU
          </p>
        </div>

      </div>
    </footer>
  );
};
