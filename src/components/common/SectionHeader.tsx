import React from 'react';

interface SectionHeaderProps {
  chapter: string;
  kanji?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  badgeColor?: 'cyan' | 'ember' | 'water' | 'violet';
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  chapter,
  kanji = "壱",
  title,
  subtitle,
  align = 'left',
  badgeColor = 'cyan'
}) => {
  const colorMap = {
    cyan: 'border-arc-cyan/40 text-arc-cyan bg-arc-cyan/5 shadow-[0_0_12px_rgba(0,240,255,0.15)]',
    ember: 'border-arc-ember/40 text-arc-ember bg-arc-ember/5 shadow-[0_0_12px_rgba(249,115,22,0.15)]',
    water: 'border-arc-water-light/40 text-arc-water-light bg-arc-water-light/5 shadow-[0_0_12px_rgba(56,189,248,0.15)]',
    violet: 'border-arc-violet/40 text-arc-violet bg-arc-violet/5 shadow-[0_0_12px_rgba(139,92,246,0.15)]',
  };

  const isCenter = align === 'center';

  return (
    <div className={`mb-12 md:mb-16 relative ${isCenter ? 'text-center' : 'text-left'}`}>
      {/* Chapter Indicator Tag */}
      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded border text-xs font-mono uppercase tracking-widest mb-3 backdrop-blur-md ${colorMap[badgeColor]}`}>
        <span className="w-1.5 h-1.5 rounded-full bg-current animate-ping" />
        <span>{chapter}</span>
        {kanji && (
          <span className="text-sm font-japanese opacity-75 border-l border-current/30 pl-2">
            {kanji}
          </span>
        )}
      </div>

      {/* Main Heading */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-display text-white mt-1 leading-[1.15]">
        {title}
      </h2>

      {/* Optional Subtitle */}
      {subtitle && (
        <p className={`mt-3 text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed ${isCenter ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}

      {/* Decorative elemental rule */}
      <div className={`mt-5 flex items-center gap-2 ${isCenter ? 'justify-center' : 'justify-start'}`}>
        <span className="h-[2px] w-12 bg-arc-cyan" />
        <span className="h-[2px] w-4 bg-arc-ember" />
        <span className="h-[2px] w-20 bg-slate-800" />
      </div>
    </div>
  );
};
