import React from 'react';

export default function LanguageToggle({ currentLang = 'en', onToggle }) {
  return (
    <div className="relative inline-flex items-center shrink-0">
      <span className="absolute left-2 text-xs pointer-events-none text-slate-400">
        🌐
      </span>
      <select
        value={currentLang}
        onChange={(e) => onToggle && onToggle(e.target.value)}
        className="pl-6 pr-2 py-1 bg-slate-800 border border-slate-700 rounded-lg text-xs font-medium text-white appearance-none cursor-pointer focus:outline-none focus:border-emerald-500"
      >
        <option value="en">English</option>
        <option value="hi">हिंदी</option>
      </select>
    </div>
  );
}