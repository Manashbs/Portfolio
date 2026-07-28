import React, { useState, useEffect } from 'react';
import { User, Briefcase, Hammer, Package, GraduationCap, Mail, Sun, Moon, Menu, X } from 'lucide-react';

const NAV_ITEMS = [
  { id: 'about', label: 'About', icon: User, slot: 1 },
  { id: 'experience', label: 'Experience', icon: Briefcase, slot: 2 },
  { id: 'skills', label: 'Crafting', icon: Hammer, slot: 3 },
  { id: 'projects', label: 'Inventory', icon: Package, slot: 4 },
  { id: 'education', label: 'Lore', icon: GraduationCap, slot: 5 },
  { id: 'contact', label: 'Contact', icon: Mail, slot: 6 },
];

export default function HotbarNavbar({ activeSection, darkMode, setDarkMode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-3 transition-all duration-200 pointer-events-none">
      <div className="max-w-5xl mx-auto flex items-center justify-between pointer-events-auto">
        {/* Brand Block */}
        <button
          onClick={() => scrollTo('about')}
          className="flex items-center gap-2 bg-[#5D8A3A] hover:bg-[#4d752f] text-white px-3 py-2 rounded font-pixel text-xs border-2 border-[#3d6023] shadow-sm transition-transform active:scale-95"
        >
          <span className="w-3 h-3 bg-[#5DD5E0] rounded-sm animate-pulse inline-block" />
          <span>MS_PORTFOLIO</span>
        </button>

        {/* Desktop Hotbar Row */}
        <nav className="hidden md:flex items-center gap-1.5 bg-[#10101C]/90 dark:bg-[#10101C]/95 light:bg-[#EAE4D3]/95 backdrop-blur border-2 border-[#5DD5E0]/40 p-1.5 rounded-lg shadow-lg">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`relative group w-12 h-12 flex flex-col items-center justify-center rounded border-2 transition-all duration-150 ${
                  isActive
                    ? 'border-[#5DD5E0] bg-[#5DD5E0]/20 shadow-[0_0_8px_rgba(93,213,224,0.4)] scale-105'
                    : 'border-[#3D3D56] hover:border-[#5DD5E0]/60 bg-[#262638]/60 hover:bg-[#262638] dark:bg-[#262638]/80 light:bg-[#D5CDB5]/80'
                }`}
                title={item.label}
              >
                {/* Hotbar Slot Number Overlay */}
                <span className="absolute top-0.5 left-1 text-[9px] font-pixel text-gray-400 group-hover:text-[#5DD5E0]">
                  {item.slot}
                </span>

                <Icon className={`w-5 h-5 ${isActive ? 'text-[#5DD5E0]' : 'text-gray-300 dark:text-gray-200 light:text-gray-800'}`} />

                {/* Tooltip on Hover */}
                <span className="absolute top-14 hidden group-hover:block bg-[#10101C] text-[#5DD5E0] border border-[#5DD5E0] text-[10px] font-pixel px-2 py-1 rounded whitespace-nowrap shadow-md pointer-events-none">
                  {item.label}
                </span>
              </button>
            );
          })}

          <div className="w-[1px] h-8 bg-gray-700/50 mx-1" />

          {/* Dark / Light Mode Slot */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="w-12 h-12 flex flex-col items-center justify-center rounded border-2 border-[#E5B80B]/60 bg-[#E5B80B]/10 hover:bg-[#E5B80B]/20 transition-all"
            title="Toggle Light / Dark Mode"
          >
            {darkMode ? (
              <Sun className="w-5 h-5 text-[#E5B80B]" />
            ) : (
              <Moon className="w-5 h-5 text-[#5DD5E0]" />
            )}
          </button>
        </nav>

        {/* Mobile Controls */}
        <div className="flex items-center gap-2 md:hidden pointer-events-auto">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded bg-[#262638] border-2 border-[#E5B80B]/60 text-[#E5B80B]"
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5 text-[#5DD5E0]" />}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded bg-[#5D8A3A] text-white border-2 border-[#3d6023]"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <div className="md:hidden mt-2 max-w-5xl mx-auto bg-[#10101C] border-2 border-[#5DD5E0] p-4 rounded-lg shadow-xl pointer-events-auto">
          <div className="grid grid-cols-3 gap-2">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`p-3 flex flex-col items-center justify-center rounded border-2 gap-1 text-center font-pixel text-[10px] ${
                    isActive
                      ? 'border-[#5DD5E0] bg-[#5DD5E0]/20 text-[#5DD5E0]'
                      : 'border-[#3D3D56] bg-[#262638] text-gray-200'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
