import React from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { sideQuestsData } from '../../data/portfolioData';
import { 
  Tv, 
  PenTool, 
  Utensils, 
  Compass, 
  BookOpen, 
  Activity, 
  Film,
  Sparkles
} from 'lucide-react';

const iconMap = {
  Tv,
  PenTool,
  Utensils,
  Compass,
  BookOpen,
  Activity,
  Film,
};

export const SideQuestsSection: React.FC = () => {
  return (
    <section id="quests" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeader
          chapter="OPTIONAL MISSIONS / LIFE OUTSIDE CODE"
          kanji="遊"
          title="NOT EVERY ADVENTURE HAPPENS IN THE IDE."
          subtitle="Off-screen side quests that sharpen creative intuition, maintain balance, and fuel fresh engineering perspective."
          badgeColor="ember"
        />

        {/* Quest Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10">
          {sideQuestsData.map((quest) => {
            const IconComp = iconMap[quest.icon as keyof typeof iconMap] || Sparkles;

            return (
              <div
                key={quest.id}
                className="p-6 rounded-2xl glass-panel border border-slate-800 hover:border-arc-cyan/40 hover:bg-arc-panel/90 transition-all duration-300 relative group flex flex-col justify-between"
              >
                <div>
                  {/* Top Quest Element & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-arc-void/80 border border-slate-800 flex items-center justify-center text-arc-cyan group-hover:text-arc-ember group-hover:border-arc-ember/40 transition-colors">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-[9px] font-mono tracking-widest text-slate-400 bg-arc-void/60 px-2 py-1 rounded border border-slate-800 uppercase">
                      {quest.elementTag}
                    </span>
                  </div>

                  {/* Title & Category */}
                  <h3 className="text-lg font-display font-bold text-white group-hover:text-arc-cyan transition-colors">
                    {quest.title}
                  </h3>
                  <div className="text-xs font-mono text-arc-water-light mt-0.5 mb-3">
                    {quest.category}
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
                    {quest.description}
                  </p>
                </div>

                {/* Bottom Quest Status Indicator */}
                <div className="mt-6 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono text-slate-500">
                  <span>SIDE QUEST</span>
                  <span className="text-emerald-400 font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    COMPLETED DAILY
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
