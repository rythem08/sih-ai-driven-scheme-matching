import React from 'react';

export default function LanguageToggle({
  currentLang,
  lang,
  onToggle,
  onLanguageChange
}) {
  const activeLang = lang || currentLang || 'en';
  const handleToggle = onLanguageChange || onToggle;
  const isHindi = activeLang === 'hi';

  return (
    <div className="relative inline-flex items-center shrink-0">

      {/* Mobile: simple pill button, no overflow possible */}
      <button
        onClick={() => handleToggle && handleToggle(isHindi ? 'en' : 'hi')}
        className="flex sm:hidden items-center gap-1 px-2.5 py-1.5 
                   bg-slate-800 border border-slate-700 rounded-lg 
                   text-xs font-medium text-white cursor-pointer 
                   focus:outline-none focus:border-emerald-500 
                   touch-manipulation whitespace-nowrap"
      >
        🌐 {isHindi ? 'EN' : 'हिं'}
      </button>

      {/* Desktop: your original select, untouched */}
      <span className="hidden sm:block absolute left-2.5 text-xs 
                       pointer-events-none text-slate-400 z-10">
        🌐
      </span>
      <select
        value={activeLang}
        onChange={(e) => handleToggle && handleToggle(e.target.value)}
        className="hidden sm:block pl-7 pr-3 py-1.5 bg-slate-800 
                   border border-slate-700 rounded-lg text-xs 
                   font-medium text-white appearance-none cursor-pointer 
                   focus:outline-none focus:border-emerald-500 
                   touch-manipulation z-0"
      >
        <option value="en" className="bg-slate-900 text-white">English</option>
        <option value="hi" className="bg-slate-900 text-white">हिंदी</option>
      </select>

    </div>
  );
}