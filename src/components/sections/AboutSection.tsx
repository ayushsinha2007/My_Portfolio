import React from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { personalInfo } from '../../data/portfolioData';
import { Compass, Sparkles, Waves } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeader
          chapter="CHAPTER 01 / THE PROTAGONIST"
          kanji="壱"
          title="MORE THAN JUST A DEVELOPER IN PROGRESS."
          subtitle="A protagonist's journey is defined not by where they start, but by the discipline and curiosity they bring to every trial."
          badgeColor="cyan"
        />

        {/* Asymmetrical Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-8">
          
          {/* Main Story Narrative Column */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="p-8 rounded-2xl glass-panel relative overflow-hidden group">
              {/* Subtle top anime line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-arc-cyan via-arc-water-light to-transparent" />
              
              <div className="space-y-5 text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
                <p>
                  I'm <strong className="text-white font-semibold">Ayush Kumar Sinha</strong>, a computer science student at{' '}
                  <span className="text-arc-water-light font-medium">Newton School of Technology, Ajeenkya DY Patil University</span>.
                  I'm working towards becoming an <span className="text-arc-cyan font-semibold">AI engineer</span> while strengthening
                  my programming fundamentals and exploring how computational technology can solve real problems.
                </p>

                <p>
                  I enjoy understanding how things work under the hood, experimenting with new ideas, and turning what I learn into functional projects. Beyond coding, I'm deeply interested in anime, sketching, cooking, travelling, reading, badminton, and video editing.
                </p>

                <p className="text-slate-400">
                  I'm still early in my journey, and that's exactly what makes it exciting. Every project, collaboration, and new concept is another opportunity to level up and improve.
                </p>
              </div>

              {/* Technical annotations */}
              <div className="mt-8 pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-mono">
                <div>
                  <span className="text-slate-500 block">CURRENT MISSION</span>
                  <span className="text-arc-cyan font-medium">Core Mastery & AI Lab</span>
                </div>
                <div>
                  <span className="text-slate-500 block">BASE CLASS</span>
                  <span className="text-slate-200">CS & Engineering '26</span>
                </div>
                <div>
                  <span className="text-slate-500 block">CREATIVE ARC</span>
                  <span className="text-arc-ember">Anime × Visual Tech</span>
                </div>
              </div>
            </div>

            {/* Personal Philosophy Statement Callout */}
            <div className="relative rounded-2xl p-7 bg-gradient-to-r from-arc-panel via-arc-deep to-arc-navy border border-arc-border-active shadow-[0_0_25px_rgba(0,240,255,0.08)]">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-arc-cyan/10 border border-arc-cyan/30 text-arc-cyan shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-arc-cyan block">
                    GUIDING CREED // CORE PHILOSOPHY
                  </span>
                  <blockquote className="text-lg sm:text-xl font-display font-bold text-white italic tracking-wide">
                    "{personalInfo.philosophyStatement}"
                  </blockquote>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Editorial Visual & Dual-Influence Anatomy */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* The Dual Pillars Card (Pokémon & Demon Slayer thematic breakdown) */}
            <div className="p-7 rounded-2xl glass-panel space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-xs font-mono text-arc-water-light tracking-widest uppercase">
                  CREATIVE ARCHITECTURE
                </span>
                <span className="text-[10px] font-mono text-slate-500">CANON V2.6</span>
              </div>

              {/* Pillar 1: Pokémon exploration motif */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-arc-cyan/10 border border-arc-cyan/30 flex items-center justify-center shrink-0">
                  <Compass className="w-5 h-5 text-arc-cyan" />
                </div>
                <div>
                  <h4 className="text-sm font-display font-bold text-white tracking-wide flex items-center gap-2">
                    POKÉDEX & EXPLORATION
                    <span className="text-[9px] font-mono text-arc-cyan bg-arc-cyan/10 px-1.5 py-0.5 rounded">
                      CURIOSITY
                    </span>
                  </h4>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    Treating every programming language as an evolving ability, each hackathon as an adventure mission, and every technical roadblock as a discovery challenge.
                  </p>
                </div>
              </div>

              {/* Pillar 2: Demon Slayer cinematic discipline motif */}
              <div className="flex items-start gap-4 pt-4 border-t border-slate-800/80">
                <div className="w-10 h-10 rounded-xl bg-arc-ember/10 border border-arc-ember/30 flex items-center justify-center shrink-0">
                  <Waves className="w-5 h-5 text-arc-ember" />
                </div>
                <div>
                  <h4 className="text-sm font-display font-bold text-white tracking-wide flex items-center gap-2">
                    ELEMENTAL FOCUS & DISCIPLINE
                    <span className="text-[9px] font-mono text-arc-ember bg-arc-ember/10 px-1.5 py-0.5 rounded">
                      WATER BREATHING
                    </span>
                  </h4>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    Embracing fluidity, calm precision under pressure, iterative mastery, and intense dedication to craft—building code with elemental clarity and resilient focus.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Stats / Identity HUD */}
            <div className="p-6 rounded-2xl bg-arc-panel/60 border border-slate-800/80">
              <div className="text-[11px] font-mono uppercase tracking-widest text-slate-500 mb-3">
                ACADEMIC AFFILIATION // METRICS
              </div>
              <div className="space-y-2.5 text-xs font-mono">
                <div className="flex justify-between py-1 border-b border-slate-800/50">
                  <span className="text-slate-400">INSTITUTION</span>
                  <span className="text-white font-medium text-right">Newton School of Tech</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800/50">
                  <span className="text-slate-400">UNIVERSITY</span>
                  <span className="text-white font-medium text-right">Ajeenkya DY Patil Univ.</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800/50">
                  <span className="text-slate-400">TARGET DISCIPLINE</span>
                  <span className="text-arc-cyan font-bold text-right">AI Engineering</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-400">STATUS</span>
                  <span className="text-emerald-400 font-bold text-right">Undergraduate Batch 2026</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
