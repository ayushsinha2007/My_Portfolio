import React from 'react';
import { ScrollProgress } from './components/common/ScrollProgress';
import { ElementalBackground } from './components/common/ElementalBackground';
import { Navbar } from './components/common/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { DossierSection } from './components/sections/DossierSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { TimelineSection } from './components/sections/TimelineSection';
import { TrainingSection } from './components/sections/TrainingSection';
import { SideQuestsSection } from './components/sections/SideQuestsSection';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/sections/Footer';

export const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#030712] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Atmospheric Elemental Motion Canvas Background */}
      <ElementalBackground />

      {/* Glassmorphic Navbar */}
      <Navbar />

      {/* Main Experience Flow */}
      <main className="relative z-10 flex flex-col">
        <HeroSection />
        <AboutSection />
        <DossierSection />
        <SkillsSection />
        <ProjectsSection />
        <TimelineSection />
        <TrainingSection />
        <SideQuestsSection />
        <ContactSection />
      </main>

      {/* Cinematic Signature Footer */}
      <Footer />
    </div>
  );
};

export default App;
