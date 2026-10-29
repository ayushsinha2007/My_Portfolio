import React, { useState } from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { skillsData } from '../../data/portfolioData';
import { SkillItem, SkillLevel } from '../../types';
import { 
  Code, 
  Binary, 
  Coffee, 
  GitBranch, 
  Layout, 
  Terminal, 
  Apple, 
  Database, 
  Eye, 
  Palette, 
  Crosshair, 
  Scan, 
  Film, 
  Sparkles, 
  PenTool,
  ChevronRight
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Code,
  Binary,
  Coffee,
  GitBranch,
  Layout,
  Terminal,
  Apple,
  Database,
  Eye,
  Palette,
  Crosshair,
  Scan,
  Film,
  Sparkles,
  PenTool,
};

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeSkill, setActiveSkill] = useState<SkillItem>(skillsData[0]);

  const categories = ['All', 'Programming', 'Development Tools', 'Computer Vision', 'Databases', 'Creative Skills'];

  const filteredSkills = selectedCategory === 'All'
    ? skillsData
    : skillsData.filter(s => s.category === selectedCategory);

  const getLevelBadgeClass = (level: SkillLevel) => {
    switch (level) {
      case 'BUILDING WITH':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30';
      case 'PRACTISING':
        return 'bg-arc-cyan/10 text-arc-cyan border-arc-cyan/30';
      case 'LEARNING':
        return 'bg-arc-ember/10 text-arc-ember border-arc-ember/30';
      default:
        return 'bg-slate-800 text-slate-300 border-slate-700';
    }
  };

  const getElementColor = (element: SkillItem['element']) => {
    switch (element) {
      case 'water':
        return 'text-sky-400 border-sky-500/40 bg-sky-950/40';
      case 'fire':
        return 'text-arc-ember border-arc-ember/40 bg-orange-950/40';
      case 'lightning':
        return 'text-amber-400 border-amber-500/40 bg-amber-950/40';
      case 'wind':
        return 'text-teal-400 border-teal-500/40 bg-teal-950/40';
      case 'void':
        return 'text-purple-400 border-purple-500/40 bg-purple-950/40';
    }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeader
          chapter="CHAPTER 02 / SKILL UNLOCKED"
          kanji="技"
          title="THE TECHNICAL SKILL TREE"
          subtitle="Honest developmental telemetry. Abilities unlocked, under active training, or deployed in practical builds."
          badgeColor="cyan"
        />

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all duration-200 shrink-0 ${
                selectedCategory === cat
                  ? 'bg-arc-cyan text-slate-950 font-bold shadow-[0_0_15px_rgba(0,240,255,0.3)]'
                  : 'bg-arc-panel/70 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid & Pokédex Inspection Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Collectible-Style Skill Cards Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filteredSkills.map((skill) => {
              const IconComp = iconMap[skill.iconName] || Code;
              const isSelected = activeSkill.id === skill.id;

              return (
                <div
                  key={skill.id}
                  onClick={() => setActiveSkill(skill)}
                  className={`p-4 rounded-xl border transition-all duration-200 cursor-pointer text-left relative group ${
                    isSelected
                      ? 'bg-arc-panel border-arc-cyan shadow-[0_0_20px_rgba(0,240,255,0.15)] ring-1 ring-arc-cyan'
                      : 'bg-arc-panel/50 border-slate-800/80 hover:border-slate-700 hover:bg-arc-panel/80'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center border ${getElementColor(skill.element)}`}>
                        <IconComp className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-display font-bold text-white group-hover:text-arc-cyan transition-colors">
                          {skill.name}
                        </h4>
                        <span className="text-[10px] font-mono text-slate-500 uppercase">
                          {skill.category}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Level Badge */}
                  <div className="mt-4 flex items-center justify-between pt-3 border-t border-slate-800/60">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold tracking-wider border ${getLevelBadgeClass(skill.level)}`}>
                      {skill.level}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500 flex items-center gap-1 group-hover:text-arc-cyan transition-colors">
                      SCAN <ChevronRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Pokédex Active Scanner Detailed Terminal */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="rounded-2xl glass-panel-glow p-6 sm:p-7 relative overflow-hidden">
              {/* Scanline overlay */}
              <div className="absolute inset-0 pokedex-scanline opacity-10 pointer-events-none" />

              {/* Terminal Header */}
              <div className="flex items-center justify-between pb-4 border-b border-arc-border mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-arc-cyan animate-ping" />
                  <span className="text-xs font-mono font-bold text-arc-cyan uppercase tracking-widest">
                    POKÉDEX SCAN // TELEMETRY
                  </span>
                </div>
                <span className="text-[10px] font-mono text-slate-500">
                  ID: {activeSkill.id.toUpperCase()}
                </span>
              </div>

              {/* Active Skill Presentation */}
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`px-2.5 py-0.5 rounded text-xs font-mono font-bold tracking-wider border ${getLevelBadgeClass(activeSkill.level)}`}>
                      {activeSkill.level}
                    </span>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-mono uppercase border ${getElementColor(activeSkill.element)}`}>
                      AFFINITY: {activeSkill.element}
                    </span>
                  </div>
                  <h3 className="text-2xl font-display font-extrabold text-white">
                    {activeSkill.name}
                  </h3>
                  <p className="text-xs font-mono text-arc-water-light mt-0.5">
                    Category: {activeSkill.category}
                  </p>
                </div>

                {/* Explanation */}
                <div className="p-4 rounded-xl bg-arc-void/60 border border-slate-800">
                  <span className="text-[10px] font-mono uppercase text-slate-500 tracking-wider block mb-1">
                    TECHNICAL BREAKDOWN
                  </span>
                  <p className="text-sm text-slate-300 leading-relaxed font-sans">
                    {activeSkill.description}
                  </p>
                </div>

                {/* Journey Note */}
                <div className="p-4 rounded-xl bg-arc-panel/90 border-l-2 border-arc-ember">
                  <span className="text-[10px] font-mono uppercase text-arc-ember tracking-wider block mb-1">
                    JOURNEY RELEVANCE
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed font-mono">
                    "{activeSkill.journeyNote}"
                  </p>
                </div>

                {/* Level Criteria Guide Legend */}
                <div className="pt-4 border-t border-slate-800/80">
                  <span className="text-[10px] font-mono uppercase text-slate-500 tracking-wider block mb-2">
                    STAGE DEFINITIONS
                  </span>
                  <div className="grid grid-cols-3 gap-2 text-[10px] font-mono">
                    <div className="p-2 rounded bg-arc-void/40 border border-emerald-500/20 text-center">
                      <span className="text-emerald-400 font-bold block">BUILDING</span>
                      <span className="text-slate-500 text-[9px]">Shipped Code</span>
                    </div>
                    <div className="p-2 rounded bg-arc-void/40 border border-arc-cyan/20 text-center">
                      <span className="text-arc-cyan font-bold block">PRACTISING</span>
                      <span className="text-slate-500 text-[9px]">Daily Drills</span>
                    </div>
                    <div className="p-2 rounded bg-arc-void/40 border border-arc-ember/20 text-center">
                      <span className="text-arc-ember font-bold block">LEARNING</span>
                      <span className="text-slate-500 text-[9px]">Active Studies</span>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
