import React from 'react';
import { ArrowDown, Code2, Compass, ChevronRight, Send } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 lg:py-0 overflow-hidden"
    >
      {/* Anime opening subtle vignette & light shafts */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-arc-cyan/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-arc-ember/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Expressive Typography & Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            
            {/* Top Status Badge / Pokédex Interface Header */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-arc-panel/80 border border-arc-cyan/30 backdrop-blur-md mb-6 w-fit shadow-[0_0_15px_rgba(0,240,255,0.1)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-arc-cyan opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-arc-cyan"></span>
              </span>
              <span className="text-[11px] font-mono tracking-widest text-arc-water-light uppercase">
                CURRENTLY LEARNING & BUILDING
              </span>
              <span className="text-slate-600 font-mono text-[10px]">|</span>
              <span className="text-[10px] font-mono text-arc-ember font-semibold tracking-wider">
                ARC 2026
              </span>
            </div>

            {/* Sub-heading / Identity */}
            <div className="space-y-1 mb-2">
              <span className="text-xs sm:text-sm font-mono tracking-widest uppercase text-arc-cyan font-semibold flex items-center gap-2">
                <span className="h-px w-6 bg-arc-cyan inline-block"></span>
                AYUSH KUMAR SINHA
              </span>
              <p className="text-sm sm:text-base font-mono text-slate-300 tracking-wide">
                COMPUTER SCIENCE STUDENT <span className="text-arc-ember">|</span> ASPIRING AI ENGINEER
              </p>
            </div>

            {/* Main Cinematic Hero Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-display tracking-tight text-white leading-[1.08] mb-6">
              THE NEXT ARC <br />
              <span className="cyan-gradient-text">STARTS HERE.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl mb-8 font-sans">
              {personalInfo.heroSupportingCopy}
            </p>

            {/* Core Tagline Quote */}
            <div className="relative pl-4 border-l-2 border-arc-cyan/60 mb-10 py-1">
              <p className="text-sm font-mono italic text-slate-300">
                "{personalInfo.tagline}"
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              {/* Primary Action */}
              <a
                href="#about"
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-gradient-to-r from-arc-cyan to-arc-water text-slate-950 font-display font-bold text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(0,240,255,0.35)] hover:shadow-[0_0_30px_rgba(0,240,255,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <Compass className="w-4 h-4 text-slate-950 transition-transform group-hover:rotate-45" />
                <span>EXPLORE MY JOURNEY</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Secondary Action */}
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-arc-panel/80 hover:bg-arc-panel text-white font-mono font-semibold text-xs uppercase tracking-wider border border-arc-border hover:border-arc-cyan/50 hover:shadow-[0_0_15px_rgba(56,189,248,0.2)] transition-all duration-200"
              >
                <Code2 className="w-4 h-4 text-arc-cyan" />
                <span>VIEW MY PROJECTS</span>
              </a>

              {/* Third Action */}
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 px-4 py-3.5 text-xs font-mono text-slate-400 hover:text-arc-ember transition-colors"
              >
                <Send className="w-3.5 h-3.5" />
                <span>CONNECT WITH ME</span>
              </a>
            </div>

          </div>

          {/* Right Column: Protagonist Photograph with Water-Breathing Frame & Status HUD */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Elemental Water Breathing Aura Glow behind photo */}
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-arc-cyan/30 via-arc-water/20 to-arc-ember/20 blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />

              {/* Pokédex Outer HUD Frame */}
              <div className="relative rounded-2xl p-1 bg-gradient-to-b from-arc-cyan/40 via-arc-border to-arc-ember/30 backdrop-blur-xl">
                
                {/* HUD Header Bar */}
                <div className="bg-arc-panel/95 rounded-t-xl px-4 py-2.5 flex items-center justify-between border-b border-arc-border">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-arc-ember shadow-[0_0_8px_rgba(249,115,22,0.8)]" />
                    <span className="w-2 h-2 rounded-full bg-amber-400 opacity-60" />
                    <span className="w-2 h-2 rounded-full bg-emerald-400 opacity-60" />
                    <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase ml-1">
                      PROTAGONIST_ID #2026
                    </span>
                  </div>
                  <div className="text-[10px] font-mono text-arc-cyan font-bold tracking-widest">
                    SYNC 98.4%
                  </div>
                </div>

                {/* Profile Image Container with Water Breathing styling */}
                <div className="relative aspect-[3/4] overflow-hidden bg-arc-deep group">
                  <img
                    src={personalInfo.profilePhoto}
                    alt="Ayush Kumar Sinha - Protagonist"
                    className="w-full h-full object-cover object-center filter saturate-[1.08] contrast-[1.05] transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      // Fallback if optimized image is missing
                      const target = e.currentTarget;
                      if (!target.src.endsWith('AyushLv.jpg')) {
                        target.src = '/assets/AyushLv.jpg';
                      }
                    }}
                  />

                  {/* Subtle anime vignette and technical scanlines */}
                  <div className="absolute inset-0 bg-gradient-to-t from-arc-navy via-transparent to-transparent opacity-70 pointer-events-none" />
                  <div className="absolute inset-0 pokedex-scanline opacity-15 pointer-events-none" />

                  {/* Flowing Water Energy Corner Ribbons */}
                  <div className="absolute top-3 left-3 px-2 py-1 bg-arc-void/80 border border-arc-cyan/40 rounded text-[9px] font-mono text-arc-cyan uppercase tracking-widest backdrop-blur-sm">
                    WATER BREATHING // ARC
                  </div>

                  {/* Floating Pokédex Status Card Overlay at bottom */}
                  <div className="absolute bottom-3 inset-x-3 p-3 rounded-xl bg-arc-navy/90 border border-arc-border/90 backdrop-blur-md shadow-lg">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[11px] font-display font-bold text-white tracking-wider">
                        AYUSH KUMAR SINHA
                      </span>
                      <span className="text-[9px] font-mono text-emerald-400 bg-emerald-950/70 px-1.5 py-0.5 rounded border border-emerald-500/30">
                        ACTIVE QUEST
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-[10px] font-mono text-slate-400 pt-1 border-t border-slate-800">
                      <div>
                        <span className="text-slate-500">CLASS: </span>
                        <span className="text-slate-300">CS & AI Aspirant</span>
                      </div>
                      <div>
                        <span className="text-slate-500">BASE: </span>
                        <span className="text-slate-300">NST · ADYPU</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* HUD Footer status bar */}
                <div className="bg-arc-panel/95 rounded-b-xl px-4 py-2 flex items-center justify-between text-[10px] font-mono text-slate-400 border-t border-arc-border">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-arc-cyan animate-pulse" />
                    <span>TRAINING PROTOCOL // ENGAGED</span>
                  </div>
                  <span className="text-arc-water-light">BATCH: 2026</span>
                </div>

              </div>

              {/* Decorative side tech ticks */}
              <div className="hidden sm:block absolute -right-4 top-1/3 space-y-2 pointer-events-none">
                <div className="w-2 h-[2px] bg-arc-cyan" />
                <div className="w-4 h-[2px] bg-arc-water" />
                <div className="w-2 h-[2px] bg-arc-ember" />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Discreet Animated Scroll Down Indicator */}
      <a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-500 hover:text-arc-cyan transition-colors group focus:outline-none"
        aria-label="Scroll down to Chapter 01"
      >
        <span className="text-[10px] font-mono uppercase tracking-widest group-hover:text-arc-cyan">
          SCROLL TO EXPLORE
        </span>
        <ArrowDown className="w-4 h-4 animate-bounce text-arc-cyan" />
      </a>
    </section>
  );
};
