import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, ExternalLink } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

interface NavItem {
  name: string;
  href: string;
  chapter: string;
}

const navItems: NavItem[] = [
  { name: 'Home', href: '#hero', chapter: '00' },
  { name: 'About', href: '#about', chapter: '01' },
  { name: 'Dossier', href: '#dossier', chapter: 'DB' },
  { name: 'Skills', href: '#skills', chapter: '02' },
  { name: 'Projects', href: '#projects', chapter: '03' },
  { name: 'Journey', href: '#journey', chapter: '04' },
  { name: 'Training', href: '#training', chapter: '05' },
  { name: 'Side Quests', href: '#quests', chapter: 'SQ' },
  { name: 'Contact', href: '#contact', chapter: '06' },
];

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Active section detection
      const sectionElements = navItems.map(item => document.querySelector(item.href) as HTMLElement | null);
      const scrollPosition = window.scrollY + 220;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const el = sectionElements[i];
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].href.substring(1));
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-arc-navy/90 backdrop-blur-md border-b border-arc-border shadow-lg shadow-black/40 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Monogram */}
          <a
            href="#hero"
            className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-arc-cyan rounded-md"
            aria-label="Ayush Kumar Sinha - The Next Arc"
          >
            {/* Pokédex Core / Elemental Crest */}
            <div className="relative w-9 h-9 rounded-lg bg-arc-panel border border-arc-cyan/30 flex items-center justify-center overflow-hidden transition-transform group-hover:scale-105 group-hover:border-arc-cyan">
              <span className="absolute inset-0 bg-gradient-to-br from-arc-cyan/20 to-transparent" />
              <div className="w-3.5 h-3.5 rounded-full border-2 border-arc-cyan flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-arc-ember animate-pulse" />
              </div>
            </div>
            
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-sm tracking-wider text-white group-hover:text-arc-cyan transition-colors flex items-center gap-1.5">
                AYUSH <span className="text-arc-ember text-xs font-mono font-normal">// ARC.02</span>
              </span>
              <span className="text-[10px] font-mono text-slate-400 tracking-tight flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                NST ADYPU '26
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-arc-panel/50 border border-slate-800/80 rounded-full px-3 py-1.5 backdrop-blur-sm">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`relative px-3 py-1.5 text-xs font-mono uppercase tracking-wider rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-arc-cyan ${
                    isActive
                      ? 'text-arc-cyan font-semibold bg-arc-cyan/10 shadow-[0_0_12px_rgba(0,240,255,0.2)]'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  <span className="text-[10px] opacity-40 mr-1">{item.chapter}</span>
                  {item.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-[2px] bg-arc-cyan rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-mono uppercase tracking-wider font-semibold text-white bg-gradient-to-r from-arc-cyan/20 to-arc-water/30 hover:from-arc-cyan/30 hover:to-arc-water/50 border border-arc-cyan/40 rounded-lg shadow-sm hover:shadow-[0_0_15px_rgba(0,240,255,0.25)] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-arc-cyan"
            >
              <Sparkles className="w-3.5 h-3.5 text-arc-cyan" />
              <span>Initiate Quest</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white bg-arc-panel/80 border border-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-arc-cyan"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-arc-cyan" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] bg-arc-navy/98 backdrop-blur-xl border-b border-arc-border px-6 py-6 shadow-2xl transition-all">
          <div className="flex flex-col space-y-2">
            <div className="text-[11px] font-mono text-arc-cyan/80 tracking-widest uppercase mb-2 border-b border-slate-800 pb-1 flex items-center justify-between">
              <span>SYSTEM NAVIGATION DIRECTORY</span>
              <span className="text-arc-ember">V2.6</span>
            </div>
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-md text-sm font-mono tracking-wider transition-colors ${
                    isActive
                      ? 'bg-arc-cyan/15 text-arc-cyan font-bold border-l-4 border-arc-cyan'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span className="text-xs text-slate-500 font-mono">[{item.chapter}]</span>
                    {item.name}
                  </span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-arc-cyan animate-pulse" />}
                </a>
              );
            })}
            
            <div className="pt-4 border-t border-slate-800 flex flex-col gap-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between px-3 py-2 rounded-md bg-arc-panel text-xs font-mono text-slate-300 hover:text-white border border-slate-800"
              >
                <span>GitHub Archive</span>
                <ExternalLink className="w-3.5 h-3.5 text-arc-cyan" />
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 rounded-lg bg-gradient-to-r from-arc-cyan to-arc-water text-black font-display font-bold text-xs uppercase tracking-wider"
              >
                Connect With Me
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
