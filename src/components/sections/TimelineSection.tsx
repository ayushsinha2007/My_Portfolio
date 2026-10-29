import React from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { milestonesData } from '../../data/portfolioData';
import { GraduationCap, Trophy, Globe2, Eye, Sparkles } from 'lucide-react';

const typeIconMap = {
  academic: GraduationCap,
  hackathon: Trophy,
  diplomacy: Globe2,
  technical: Eye,
};

const typeColorMap = {
  academic: 'text-arc-cyan border-arc-cyan/30 bg-arc-cyan/10',
  hackathon: 'text-arc-ember border-arc-ember/30 bg-arc-ember/10',
  diplomacy: 'text-amber-400 border-amber-500/30 bg-amber-950/40',
  technical: 'text-arc-violet border-arc-violet/30 bg-arc-violet/10',
};

export const TimelineSection: React.FC = () => {
  return (
    <section id="journey" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeader
          chapter="CHAPTER 04 / EVERY MILESTONE MATTERS"
          kanji="路"
          title="THE ADVENTURE PROGRESSION"
          subtitle="A verifiable expedition record tracing key milestones, hackathon sprints, diplomatic simulations, and technical trials."
          badgeColor="cyan"
        />

        {/* Adventure Map / Vertical Timeline */}
        <div className="relative mt-12">
          
          {/* Vertical connecting elemental beam */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-8 -translate-x-1/2 w-0.5 bg-gradient-to-b from-arc-cyan via-arc-water to-arc-ember/60 opacity-60" />

          <div className="space-y-12 relative">
            {milestonesData.map((item, index) => {
              const IconComp = typeIconMap[item.type] || Sparkles;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.id}
                  className={`flex flex-col md:flex-row items-center gap-6 md:gap-12 ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content Card */}
                  <div className={`w-full md:w-1/2 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="p-6 sm:p-7 rounded-2xl glass-panel border border-slate-800 hover:border-slate-700 transition-all duration-300 relative group">
                      
                      {/* Top milestone badge */}
                      <div className={`flex items-center gap-2 mb-3 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                        <span className={`px-2.5 py-1 rounded text-[10px] font-mono font-bold tracking-widest border uppercase ${typeColorMap[item.type]}`}>
                          {item.badge}
                        </span>
                        <span className="text-xs font-mono text-slate-500">
                          {item.dateOrBatch}
                        </span>
                      </div>

                      {/* Title & Organization */}
                      <h3 className="text-xl font-display font-extrabold text-white group-hover:text-arc-cyan transition-colors">
                        {item.title}
                      </h3>
                      <div className="text-xs font-mono text-arc-water-light mt-0.5">
                        {item.organization} · <span className="text-slate-400">{item.roleOrContext}</span>
                      </div>

                      {/* Description */}
                      <p className="mt-4 text-sm text-slate-300 leading-relaxed font-sans">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Central Node Badge */}
                  <div className="relative z-10 flex items-center justify-center">
                    <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center shadow-lg transition-transform group-hover:scale-110 ${typeColorMap[item.type]}`}>
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Empty counterpart spacer for desktop layout balance */}
                  <div className="hidden md:block w-1/2" />
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
