import React from 'react';
import LanguageToggle from './LanguageToggle';

export default function Header({ onHomeClick }) {
  return (
    <header className="w-full bg-slate-900 border-b border-slate-800 px-3 py-2.5">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">

        {/* Title & Logo */}
        <div
          onClick={onHomeClick}
          className="flex items-center gap-2 cursor-pointer shrink min-w-0"
        >
          <div className="p-1.5 bg-emerald-500/10 border border-emerald-500/30 rounded-lg text-emerald-400 shrink-0">
            <span className="text-lg">🏛️</span>
          </div>
          <h1 className="text-xs sm:text-base font-bold text-white leading-tight truncate">
            Marginalized Entrepreneur Scheme Matcher
          </h1>
        </div>

        {/* Language Toggle & API Status Badge */}
        <div className="flex items-center gap-2 shrink-0 ml-auto">
          <LanguageToggle />

          <div className="flex items-center gap-1.5 px-2 py-1 bg-emerald-950/80 border border-emerald-500/40 rounded-full text-emerald-400 text-[11px] sm:text-xs font-semibold whitespace-nowrap">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>API Online</span>
          </div>
        </div>

      </div>
    </header>
  );
}