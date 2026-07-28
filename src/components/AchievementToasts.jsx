import React, { useState, useEffect } from 'react';
import { Award, X } from 'lucide-react';

const ACHIEVEMENTS = {
  about: {
    id: 'about',
    title: 'Player Spawned',
    desc: 'Met Manash Srivastav - AI & Full-Stack Technologist',
  },
  experience: {
    id: 'experience',
    title: 'Quest Log Discovered',
    desc: 'Uncovered 5 Research & Engineering Internships',
  },
  skills: {
    id: 'skills',
    title: 'Master Crafter',
    desc: 'Accessed the 3x3 Skill Crafting Table',
  },
  projects: {
    id: 'projects',
    title: 'Vault Explorer',
    desc: 'Discovered IEEE Papers & AyurSync AI',
  },
  education: {
    id: 'education',
    title: 'Scholar of Lore',
    desc: 'Inspected UPES MCA & Quantum Certifications',
  },
  contact: {
    id: 'contact',
    title: 'Signal Transmitted',
    desc: 'Reached Contact Beacon & Resume Slot',
  },
};

export default function AchievementToasts({ activeSection }) {
  const [unlocked, setUnlocked] = useState(new Set());
  const [currentToast, setCurrentToast] = useState(null);

  useEffect(() => {
    if (activeSection && ACHIEVEMENTS[activeSection] && !unlocked.has(activeSection)) {
      const ach = ACHIEVEMENTS[activeSection];
      setUnlocked((prev) => new Set([...prev, activeSection]));
      setCurrentToast(ach);

      const timer = setTimeout(() => {
        setCurrentToast((prev) => (prev?.id === ach.id ? null : prev));
      }, 4500);

      return () => clearTimeout(timer);
    }
  }, [activeSection, unlocked]);

  if (!currentToast) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce-short pointer-events-auto">
      <div className="bg-[#10101C] border-2 border-[#E5B80B] p-3.5 rounded-lg shadow-2xl flex items-center gap-3 max-w-xs md:max-w-sm">
        {/* Yellow Trophy Icon Box */}
        <div className="w-10 h-10 bg-[#E5B80B]/20 border-2 border-[#E5B80B] rounded flex items-center justify-center shrink-0">
          <Award className="w-6 h-6 text-[#E5B80B]" />
        </div>

        {/* Text Details */}
        <div className="flex-1 pr-2">
          <span className="font-pixel text-[9px] text-[#E5B80B] uppercase tracking-wider block">
            ACHIEVEMENT UNLOCKED!
          </span>
          <h4 className="font-pixel text-xs text-white mt-0.5 leading-tight">
            {currentToast.title}
          </h4>
          <p className="text-[11px] text-gray-300 font-sans mt-0.5 line-clamp-1">
            {currentToast.desc}
          </p>
        </div>

        {/* Close Button */}
        <button
          onClick={() => setCurrentToast(null)}
          className="text-gray-400 hover:text-white p-1 rounded hover:bg-[#262638]"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
