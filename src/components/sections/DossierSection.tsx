import React, { useState } from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { personalInfo } from '../../data/portfolioData';
import { 
  Cpu, 
  Layers, 
  GraduationCap, 
  Target, 
  Activity, 
  Compass
} from 'lucide-react';

export const DossierSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'interests' | 'credentials'>('overview');

  return (
    <section id="dossier" className="py-24 relative overflow-hidden bg-arc-navy/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeader
          chapter="CHARACTER DATABASE / POKÉDEX ENTRY"
          kanji="録"
          title="PROTAGONIST DOSSIER"
          subtitle="Direct telemetry and verifiable registry entry for Ayush Kumar Sinha — indexed in the central database."
          badgeColor="water"
        />

        {/* Pokédex High-Tech Dossier Shell */}
        <div className="rounded-3xl glass-panel border border-arc-border-active shadow-2xl overflow-hidden relative">
          
          {/* Pokédex Top Hardware Trim */}
          <div className="bg-arc-panel px-6 py-4 border-b border-arc-border flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {/* Pokédex Sensor Lights */}
              <div className="relative">
                <span className="w-5 h-5 rounded-full bg-arc-cyan flex items-center justify-center shadow-[0_0_12px_rgba(0,240,255,0.8)]">
                  <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                </span>
              </div>
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-arc-ember" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              </div>
              <span className="font-mono text-xs text-slate-300 font-bold tracking-widest uppercase ml-2">
                POKÉDEX ENTRY #0108 // AYUSH_K_SINHA
              </span>
            </div>

            {/* Navigation Tabs */}
            <div className="flex items-center gap-1 bg-arc-deep/80 p-1 rounded-xl border border-slate-800">
              <button
                type="button"
                onClick={() => setActiveTab('overview')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono tracking-wider transition-all ${
                  activeTab === 'overview'
                    ? 'bg-arc-cyan text-slate-950 font-bold shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                OVERVIEW
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('interests')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono tracking-wider transition-all ${
                  activeTab === 'interests'
                    ? 'bg-arc-cyan text-slate-950 font-bold shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                INTERESTS
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('credentials')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono tracking-wider transition-all ${
                  activeTab === 'credentials'
                    ? 'bg-arc-cyan text-slate-950 font-bold shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                ACADEMICS
              </button>
            </div>
          </div>

          {/* Dossier Body */}
          <div className="p-6 sm:p-8 lg:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Visual Profile Card */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden border-2 border-arc-border bg-arc-void/80 p-3 group">
                  <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-arc-navy">
                    <img
                      src={personalInfo.profilePhoto}
                      alt="Ayush Kumar Sinha - Official Dossier Photo"
                      className="w-full h-full object-cover object-center filter contrast-[1.04] transition-all duration-500 group-hover:scale-105"
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (!target.src.endsWith('AyushLv.jpg')) {
                          target.src = '/assets/AyushLv.jpg';
                        }
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-arc-void via-transparent to-transparent opacity-80" />
                    
                    {/* Pokédex Scanner Corner overlay */}
                    <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-arc-void/90 text-arc-cyan text-[10px] font-mono border border-arc-cyan/30">
                      SPECIES: DEVELOPER
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 text-left">
                      <div className="text-white font-display font-bold text-lg leading-tight">
                        {personalInfo.fullName}
                      </div>
                      <div className="text-arc-water-light text-xs font-mono">
                        {personalInfo.careerAspiration} Aspirant
                      </div>
                    </div>
                  </div>

                  {/* Elemental typing tags below photo */}
                  <div className="mt-3 grid grid-cols-2 gap-2 text-center">
                    <div className="py-1.5 rounded-lg bg-arc-cyan/10 border border-arc-cyan/30 text-arc-cyan text-xs font-mono font-bold">
                      TYPE 1: WATER (LOGIC)
                    </div>
                    <div className="py-1.5 rounded-lg bg-arc-ember/10 border border-arc-ember/30 text-arc-ember text-xs font-mono font-bold">
                      TYPE 2: FIRE (AMBITION)
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Tabbed Information Grid */}
              <div className="lg:col-span-7">
                {activeTab === 'overview' && (
                  <div className="space-y-6">
                    <div>
                      <span className="text-xs font-mono text-arc-cyan uppercase tracking-widest block mb-1">
                        CENTRAL REGISTRATION
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
                        {personalInfo.fullName}
                      </h3>
                      <p className="text-sm font-mono text-slate-400 mt-1">
                        Batch {personalInfo.academicBatch} · {personalInfo.field}
                      </p>
                    </div>

                    {/* Verifiable Attributes Matrix */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      
                      <div className="p-4 rounded-xl bg-arc-deep/60 border border-slate-800">
                        <div className="flex items-center gap-2 text-slate-400 text-xs font-mono mb-1">
                          <GraduationCap className="w-4 h-4 text-arc-cyan" />
                          <span>INSTITUTION</span>
                        </div>
                        <div className="text-white font-semibold text-sm">
                          Newton School of Technology
                        </div>
                        <div className="text-slate-400 text-xs">
                          Ajeenkya DY Patil University
                        </div>
                      </div>

                      <div className="p-4 rounded-xl bg-arc-deep/60 border border-slate-800">
                        <div className="flex items-center gap-2 text-slate-400 text-xs font-mono mb-1">
                          <Target className="w-4 h-4 text-arc-ember" />
                          <span>CAREER DIRECTION</span>
                        </div>
                        <div className="text-white font-semibold text-sm">
                          Artificial Intelligence Engineering
                        </div>
                        <div className="text-slate-400 text-xs">
                          Focus: Machine Learning & Perception
                        </div>
                      </div>

                      <div className="p-4 rounded-xl bg-arc-deep/60 border border-slate-800">
                        <div className="flex items-center gap-2 text-slate-400 text-xs font-mono mb-1">
                          <Activity className="w-4 h-4 text-emerald-400" />
                          <span>ACTIVE STATUS</span>
                        </div>
                        <div className="text-emerald-400 font-semibold text-sm">
                          Active Learner & Builder
                        </div>
                        <div className="text-slate-400 text-xs">
                          Class of 2026 Undergraduate
                        </div>
                      </div>

                      <div className="p-4 rounded-xl bg-arc-deep/60 border border-slate-800">
                        <div className="flex items-center gap-2 text-slate-400 text-xs font-mono mb-1">
                          <Layers className="w-4 h-4 text-arc-violet" />
                          <span>EXPEDITION FOCUS</span>
                        </div>
                        <div className="text-white font-semibold text-sm">
                          Programming & Computer Vision
                        </div>
                        <div className="text-slate-400 text-xs">
                          Python, C, OpenCV, Web
                        </div>
                      </div>

                    </div>

                    {/* Mission Quote */}
                    <div className="p-4 rounded-xl bg-arc-panel/80 border-l-4 border-arc-cyan text-sm text-slate-300 leading-relaxed font-sans">
                      "I believe in building real tools to understand complex abstractions. My goal is to bridge software engineering with intelligent vision systems."
                    </div>
                  </div>
                )}

                {activeTab === 'interests' && (
                  <div className="space-y-6">
                    <div>
                      <span className="text-xs font-mono text-arc-cyan uppercase tracking-widest block mb-1">
                        DISCOVERY CLASSIFICATION
                      </span>
                      <h3 className="text-2xl font-display font-bold text-white">
                        Curiosity & Passions
                      </h3>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                          <Cpu className="w-3.5 h-3.5 text-arc-cyan" />
                          Current Technical Interests
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {['Programming Fundamentals', 'Artificial Intelligence', 'Project Development', 'Computer Vision & OpenCV', 'Creative Technology'].map((item) => (
                            <span
                              key={item}
                              className="px-3 py-1.5 rounded-lg bg-arc-cyan/10 border border-arc-cyan/30 text-xs font-mono text-arc-cyan"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="pt-2">
                        <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                          <Compass className="w-3.5 h-3.5 text-arc-ember" />
                          Personal Interests & Side Quests
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {['Anime (Demon Slayer, Pokémon)', 'Sketching', 'Cooking', 'Travelling', 'Reading', 'Badminton', 'Video Editing'].map((item) => (
                            <span
                              key={item}
                              className="px-3 py-1.5 rounded-lg bg-arc-panel border border-slate-800 text-xs font-mono text-slate-300 hover:border-slate-700"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'credentials' && (
                  <div className="space-y-6">
                    <div>
                      <span className="text-xs font-mono text-arc-cyan uppercase tracking-widest block mb-1">
                        ACADEMIC PROFILE
                      </span>
                      <h3 className="text-2xl font-display font-bold text-white">
                        Education & Affiliations
                      </h3>
                    </div>

                    <div className="space-y-4">
                      <div className="p-4 rounded-xl bg-arc-deep/80 border border-slate-800">
                        <div className="flex justify-between items-start">
                          <div>
                            <div className="text-white font-bold text-sm sm:text-base">
                              B.Tech in Computer Science and Technology
                            </div>
                            <div className="text-arc-cyan text-xs font-mono mt-0.5">
                              Newton School of Technology, Ajeenkya DY Patil University
                            </div>
                          </div>
                          <span className="px-2.5 py-1 rounded bg-arc-cyan/10 text-arc-cyan text-xs font-mono font-bold">
                            2026 Batch
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 mt-3 leading-relaxed">
                          Intensive hands-on computer science program focusing on algorithmic rigor, systems programming, and modern software development practices.
                        </p>
                      </div>

                      <div className="p-4 rounded-xl bg-arc-deep/80 border border-slate-800">
                        <div className="text-white font-bold text-sm">
                          Model United Nations Delegation
                        </div>
                        <div className="text-arc-ember text-xs font-mono mt-0.5">
                          IPMUNE — UN Women Committee (Representing Hungary)
                        </div>
                        <p className="text-xs text-slate-400 mt-2">
                          Extensive debate and policy drafting regarding judicial mechanisms to address violence against women.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

            </div>
          </div>

          {/* Pokédex Bottom Technical Ribbon */}
          <div className="bg-arc-panel px-6 py-3 border-t border-arc-border flex flex-wrap items-center justify-between text-[11px] font-mono text-slate-500 gap-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>RECORD VERIFIED // NO FABRICATED METRICS</span>
            </div>
            <div className="flex items-center gap-4">
              <span>LOC: PUNE, INDIA</span>
              <span className="text-arc-cyan">SYSTEM READY</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
