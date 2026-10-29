import React from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { projectsData } from '../../data/portfolioData';
import { Github, CheckCircle2, ArrowUpRight, Compass } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [firstPatch, myDreamVacation] = projectsData;

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-arc-navy/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeader
          chapter="CHAPTER 03 / MISSIONS & BUILDS"
          kanji="戦"
          title="EXPEDITIONS & DEPLOYMENTS"
          subtitle="Real projects built during hackathons and engineering sprints. Every line of code serves an actual mission."
          badgeColor="ember"
        />

        <div className="space-y-16 mt-8">
          
          {/* PROJECT 01: FIRSTPATCH (Large Featured Cinematic Card) */}
          <div className="rounded-3xl glass-panel-glow overflow-hidden relative group">
            {/* Ambient Water & Cyan Elemental Sheen */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-arc-cyan/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-10 lg:p-12">
              
              {/* Content info column */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Meta header */}
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-arc-cyan/15 border border-arc-cyan/40 text-xs font-mono font-bold text-arc-cyan uppercase tracking-wider">
                    FEATURED MISSION #01
                  </span>
                  <span className="text-xs font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2.5 py-1 rounded-full flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    {firstPatch.statusText}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h3 className="text-2xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
                    {firstPatch.title}
                  </h3>
                  <p className="text-sm font-mono text-arc-water-light mt-1">
                    {firstPatch.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-base text-slate-300 leading-relaxed font-sans">
                  {firstPatch.description}
                </p>

                {/* Key Context Highlights */}
                <div className="space-y-2.5 pt-2">
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-widest block">
                    MISSION CAPABILITIES:
                  </span>
                  <ul className="space-y-2">
                    {firstPatch.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-arc-cyan shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {firstPatch.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md bg-arc-void/80 border border-slate-800 text-xs font-mono text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-800/80">
                  {firstPatch.liveUrl && (
                    <a
                      href={firstPatch.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-arc-cyan to-arc-water text-slate-950 font-display font-bold text-xs uppercase tracking-wider hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all duration-200"
                    >
                      <span>{firstPatch.primaryActionLabel}</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}

                  {firstPatch.repoUrl && (
                    <a
                      href={firstPatch.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-arc-panel hover:bg-slate-800 text-white font-mono text-xs uppercase tracking-wider border border-slate-700 hover:border-arc-cyan transition-all duration-200"
                    >
                      <Github className="w-4 h-4 text-arc-cyan" />
                      <span>{firstPatch.secondaryActionLabel}</span>
                    </a>
                  )}
                </div>

              </div>

              {/* Graphic / Visual Terminal Presentation */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl bg-arc-void/90 border border-arc-border p-5 overflow-hidden shadow-2xl">
                  {/* Terminal Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
                    <div className="flex items-center gap-1.5">
                      <span className="w-3 h-3 rounded-full bg-red-500/80" />
                      <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                      <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    </div>
                    <span className="text-[10px] font-mono text-slate-500">
                      FIRSTPATCH // REPLIT DEPLOY
                    </span>
                  </div>

                  {/* High-Fidelity Thematic Mock Screen */}
                  <div className="space-y-4 font-mono text-xs">
                    <div className="p-3.5 rounded-lg bg-arc-panel/90 border border-arc-cyan/20">
                      <div className="text-[10px] text-slate-500 mb-1">$ github.search --difficulty="good first issue"</div>
                      <div className="text-arc-cyan font-bold">Querying verified repository issues...</div>
                      <div className="text-[11px] text-slate-300 mt-1">Filtering by user skills & beginner readiness.</div>
                    </div>

                    <div className="p-3.5 rounded-lg bg-arc-deep/70 border border-slate-800 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-white font-bold text-xs">PR_Pumpkins_HackDay2026</span>
                        <span className="text-[10px] text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/30">
                          MATCH FOUND
                        </span>
                      </div>
                      <p className="text-slate-400 text-[11px] leading-relaxed">
                        Evaluates beginner issues, context breakdown, and readiness markers for new contributors.
                      </p>
                    </div>

                    <div className="pt-2 flex items-center justify-between text-[10px] text-slate-500">
                      <span>STATUS: HTTP 200 OK</span>
                      <span className="text-arc-water-light">LIVE DEMO READY</span>
                    </div>
                  </div>

                  {/* Water Aura Graphic flourish */}
                  <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-arc-cyan/10 rounded-full blur-xl" />
                </div>
              </div>

            </div>
          </div>


          {/* PROJECT 02: MY DREAM VACATION (Asymmetrical Complementary Card) */}
          <div className="rounded-3xl glass-panel-ember overflow-hidden relative group">
            {/* Ambient Flame / Ember Sheen */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-arc-ember/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-10 lg:p-12">
              
              {/* Graphic / Discovery Visual on Left */}
              <div className="lg:col-span-5 order-2 lg:order-1">
                <div className="relative rounded-2xl bg-arc-void/90 border border-arc-ember/30 p-5 overflow-hidden shadow-2xl">
                  {/* Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
                    <div className="flex items-center gap-1.5">
                      <span className="w-3 h-3 rounded-full bg-arc-ember/80" />
                      <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    </div>
                    <span className="text-[10px] font-mono text-slate-500">
                      VERCEL // NIRMAN DEPLOYMENT
                    </span>
                  </div>

                  {/* Graphic Card Visual */}
                  <div className="space-y-4 font-mono text-xs">
                    <div className="p-4 rounded-lg bg-gradient-to-br from-arc-deep to-arc-void border border-arc-ember/20">
                      <div className="flex items-center gap-2 text-arc-ember mb-2">
                        <Compass className="w-4 h-4" />
                        <span className="font-bold text-xs">DESTINATION EXPLORER</span>
                      </div>
                      <div className="text-white text-sm font-display font-bold">Curating Dream Escapes</div>
                      <p className="text-[11px] text-slate-400 mt-1">
                        Interactive exploration interface designed for cataloging world destinations.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-[10px]">
                      <div className="p-2.5 rounded bg-arc-panel/80 border border-slate-800 text-center">
                        <span className="text-slate-400 block">HOST</span>
                        <span className="text-arc-ember font-bold">Vercel Edge</span>
                      </div>
                      <div className="p-2.5 rounded bg-arc-panel/80 border border-slate-800 text-center">
                        <span className="text-slate-400 block">THEME</span>
                        <span className="text-white font-bold">Travel & Discovery</span>
                      </div>
                    </div>
                  </div>

                  <div className="absolute -top-10 -left-10 w-32 h-32 bg-arc-ember/15 rounded-full blur-xl" />
                </div>
              </div>

              {/* Info Column on Right */}
              <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
                
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-arc-ember/15 border border-arc-ember/40 text-xs font-mono font-bold text-arc-ember uppercase tracking-wider">
                    EXPEDITION MISSION #02
                  </span>
                  <span className="text-xs font-mono text-amber-400 bg-amber-950/60 border border-amber-500/30 px-2.5 py-1 rounded-full flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    {myDreamVacation.statusText}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
                    {myDreamVacation.title}
                  </h3>
                  <p className="text-sm font-mono text-arc-ember mt-1">
                    {myDreamVacation.subtitle}
                  </p>
                </div>

                <p className="text-base text-slate-300 leading-relaxed font-sans">
                  {myDreamVacation.description}
                </p>

                <div className="space-y-2.5 pt-2">
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-widest block">
                    PROJECT FOCUS:
                  </span>
                  <ul className="space-y-2">
                    {myDreamVacation.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-arc-ember shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {myDreamVacation.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md bg-arc-void/80 border border-slate-800 text-xs font-mono text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-slate-800/80">
                  {myDreamVacation.liveUrl && (
                    <a
                      href={myDreamVacation.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-arc-ember to-amber-500 text-slate-950 font-display font-bold text-xs uppercase tracking-wider hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] transition-all duration-200"
                    >
                      <span>{myDreamVacation.primaryActionLabel}</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
