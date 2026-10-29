import React from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { trainingAreasData, personalInfo } from '../../data/portfolioData';
import { Terminal, Laptop, Cpu, Eye, Target } from 'lucide-react';

const iconMap = {
  Terminal,
  Laptop,
  Cpu,
  Eye,
};

const accentStyles = {
  cyan: {
    border: 'border-arc-cyan/30 hover:border-arc-cyan',
    badge: 'bg-arc-cyan/10 text-arc-cyan border-arc-cyan/30',
    icon: 'text-arc-cyan bg-arc-cyan/10',
    dot: 'bg-arc-cyan',
  },
  water: {
    border: 'border-arc-water-light/30 hover:border-arc-water-light',
    badge: 'bg-arc-water-light/10 text-arc-water-light border-arc-water-light/30',
    icon: 'text-arc-water-light bg-arc-water-light/10',
    dot: 'bg-arc-water-light',
  },
  ember: {
    border: 'border-arc-ember/30 hover:border-arc-ember',
    badge: 'bg-arc-ember/10 text-arc-ember border-arc-ember/30',
    icon: 'text-arc-ember bg-arc-ember/10',
    dot: 'bg-arc-ember',
  },
  violet: {
    border: 'border-arc-violet/30 hover:border-arc-violet',
    badge: 'bg-arc-violet/10 text-arc-violet border-arc-violet/30',
    icon: 'text-arc-violet bg-arc-violet/10',
    dot: 'bg-arc-violet',
  },
};

export const TrainingSection: React.FC = () => {
  return (
    <section id="training" className="py-24 relative overflow-hidden bg-arc-navy/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeader
          chapter="CHAPTER 05 / CURRENT TRAINING"
          kanji="修"
          title="CURRENTLY IN TRAINING"
          subtitle="A transparent developmental dashboard tracking 4 core training disciplines for the Next Arc."
          badgeColor="water"
        />

        {/* Compelling Core Creed Banner */}
        <div className="mb-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-arc-deep via-arc-panel to-arc-navy border border-arc-border shadow-xl relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-mono text-arc-cyan uppercase tracking-widest flex items-center gap-2">
                <Target className="w-4 h-4 text-arc-ember" />
                TRAINING ETHOS // NEXT ARC GOAL
              </span>
              <p className="text-xl sm:text-2xl font-display font-extrabold text-white leading-snug">
                "{personalInfo.nextArcStatement}"
              </p>
            </div>

            <div className="px-4 py-2 rounded-xl bg-arc-void/80 border border-slate-800 text-xs font-mono text-slate-400 shrink-0">
              <span className="text-emerald-400 font-bold">4 DISCIPLINES</span> · CONSTANT REFINEMENT
            </div>
          </div>
        </div>

        {/* 4 Training Area Cards Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {trainingAreasData.map((area) => {
            const IconComp = iconMap[area.icon as keyof typeof iconMap] || Terminal;
            const style = accentStyles[area.elementAccent];

            return (
              <div
                key={area.id}
                className={`p-7 rounded-2xl glass-panel border transition-all duration-300 relative group hover:shadow-xl ${style.border}`}
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border border-white/10 ${style.icon}`}>
                      <IconComp className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-bold text-white group-hover:text-arc-cyan transition-colors">
                        {area.title}
                      </h3>
                      <span className={`inline-block mt-1 px-2.5 py-0.5 rounded text-[10px] font-mono font-bold tracking-wider border ${style.badge}`}>
                        {area.status}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed font-sans mb-6">
                  {area.description}
                </p>

                {/* Sub-Topics / Drills */}
                <div className="space-y-2 pt-4 border-t border-slate-800/80">
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block">
                    ACTIVE DRILLS & GOALS:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {area.focusTopics.map((topic, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-mono text-slate-300 bg-arc-void/40 p-2 rounded border border-slate-800/60">
                        <span className={`w-1.5 h-1.5 rounded-full ${style.dot}`} />
                        <span className="truncate">{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
