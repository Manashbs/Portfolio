import React, { useState, useEffect } from 'react';
import HotbarNavbar from './components/HotbarNavbar';
import HeroPlayerCard from './components/HeroPlayerCard';
import ExperienceTimeline from './components/ExperienceTimeline';
import CraftingSkills from './components/CraftingSkills';
import InventoryProjects from './components/InventoryProjects';
import EducationCertifications from './components/EducationCertifications';
import ContactFooter from './components/ContactFooter';
import AchievementToasts from './components/AchievementToasts';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('about');

  // Toggle html dark mode class
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  }, [darkMode]);

  // Scroll section detector for active Hotbar slot & Achievement Toasts
  useEffect(() => {
    const sections = ['about', 'experience', 'skills', 'projects', 'education', 'contact'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#1B1B2E] dark:bg-[#1B1B2E] light:bg-[#F5F0E1] text-[#F5F0E1] dark:text-[#F5F0E1] light:text-[#1B1B2E] transition-colors duration-200">
      {/* Sticky Minecraft Hotbar Navigation */}
      <HotbarNavbar
        activeSection={activeSection}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      {/* Main Single Page Content */}
      <main className="space-y-4">
        <HeroPlayerCard />
        <ExperienceTimeline />
        <CraftingSkills />
        <InventoryProjects />
        <EducationCertifications />
        <ContactFooter />
      </main>

      {/* Scroll Achievement Toasts */}
      <AchievementToasts activeSection={activeSection} />
    </div>
  );
}
