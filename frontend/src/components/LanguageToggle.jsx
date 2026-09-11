import React from 'react';
import { useTranslation } from 'react-i18next';

export default function LanguageToggle({ currentLang, onToggle }) {
  const { i18n } = useTranslation();

  // Determine active language from props or i18next instance
  const activeLang = currentLang || i18n?.language || 'en';

  const handleChange = (e) => {
    const selectedLang = e.target.value;

    // Trigger i18next language switch if available
    if (i18n?.changeLanguage) {
      i18n.changeLanguage(selectedLang);
    }

    // Trigger parent callback if passed
    if (onToggle) {
      onToggle(selectedLang);
    }
  };

  return (
    <div className="relative inline-flex items-center shrink-0">
      {/* Icon overlay - pointer-events-none ensures mobile taps pass straight to the select */}
      <span className="absolute left-2.5 text-xs pointer-events-none text-slate-400 z-10">
        🌐
      </span>

      <select
        value={activeLang.startsWith('hi') ? 'hi' : 'en'}
        onChange={handleChange}
        className="pl-7 pr-3 py-1.5 bg-slate-800 border border-slate-700 rounded-lg text-xs font-medium text-white appearance-none cursor-pointer focus:outline-none focus:border-emerald-500 touch-manipulation z-0"
      >
        <option value="en" className="bg-slate-900 text-white">English</option>
        <option value="hi" className="bg-slate-900 text-white">हिंदी</option>
      </select>
    </div>
  );
}