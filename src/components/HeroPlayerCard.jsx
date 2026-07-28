import React from 'react';
import { RESUME_DATA } from '../data/content';
import { Shield, Sparkles, Terminal, Award, FileText, Download } from 'lucide-react';

export default function HeroPlayerCard() {
  const { personal } = RESUME_DATA;

  return (
    <section id="about" className="pt-28 pb-16 px-4 max-w-5xl mx-auto">
      {/* Player Inventory HUD Box */}
      <div className="bg-[#262638] dark:bg-[#262638] light:bg-[#EAE4D3] border-4 border-[#3D3D56] dark:border-[#3D3D56] light:border-[#C8C0A8] rounded-lg p-6 md:p-8 shadow-xl relative overflow-hidden">
        {/* Top Decorative Minecraft HUD Bar */}
        <div className="flex items-center justify-between border-b-2 border-[#3D3D56] pb-4 mb-6">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-[#5D8A3A] inline-block" />
            <span className="w-3 h-3 bg-[#5DD5E0] inline-block" />
            <span className="w-3 h-3 bg-[#E5B80B] inline-block" />
            <h1 className="font-pixel text-xs text-[#5DD5E0] ml-2 tracking-wide uppercase">
              PLAYER CARD // STATS & LORE
            </h1>
          </div>
          <div className="flex items-center gap-1 font-pixel text-[10px] text-gray-400">
            <Shield className="w-4 h-4 text-[#5DD5E0]" />
            <span>ID: MANASH_SRI</span>
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-start">
          {/* Avatar Slot */}
          <div className="relative group shrink-0">
            <div className="w-32 h-32 md:w-40 md:h-40 bg-[#10101C] dark:bg-[#10101C] light:bg-[#D5CDB5] border-4 border-[#5DD5E0] rounded-lg flex flex-col items-center justify-center p-2 relative shadow-inner">
              {/* Inner Initials Avatar */}
              <div className="w-full h-full bg-gradient-to-br from-[#5D8A3A] to-[#8B5A2B] rounded flex items-center justify-center border-2 border-[#8E8E8E] shadow">
                <span className="font-pixel text-3xl md:text-4xl text-[#F5F0E1] drop-shadow-md">
                  {personal.avatarInitials}
                </span>
              </div>

              {/* Level Badge Overlay */}
              <div className="absolute -bottom-3 bg-[#5D8A3A] text-white border-2 border-[#3d6023] font-pixel text-[10px] px-2 py-0.5 rounded shadow">
                LVL {personal.level}
              </div>
            </div>
          </div>

          {/* Details Column */}
          <div className="flex-1 text-center md:text-left space-y-3">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
              <div>
                <h2 className="font-pixel text-xl md:text-3xl text-[#5DD5E0] dark:text-[#5DD5E0] light:text-[#3d6023] leading-tight">
                  {personal.name}
                </h2>
                <p className="font-pixel text-xs text-[#E5B80B] mt-1">
                  {personal.role}
                </p>
              </div>

              <a
                href={personal.socials.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 self-center md:self-auto bg-[#5D8A3A] hover:bg-[#4d752f] text-white font-pixel text-[10px] px-3 py-2 rounded border-2 border-[#3d6023] transition-all hover:scale-105"
              >
                <Terminal className="w-3.5 h-3.5" />
                <span>VIEW GITHUB</span>
              </a>
            </div>

            <p className="text-sm text-gray-300 dark:text-gray-300 light:text-gray-700 font-sans leading-relaxed pt-1">
              {personal.summary}
            </p>

            {/* Quick Stat Pills */}
            <div className="flex flex-wrap justify-center md:justify-start gap-2 pt-2">
              {personal.quickStats.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-[#10101C]/80 border border-[#3D3D56] px-2.5 py-1 rounded text-xs flex items-center gap-1.5"
                >
                  <Sparkles className="w-3 h-3 text-[#E5B80B]" />
                  <span className="font-semibold text-gray-200">{stat.label}:</span>
                  <span className="text-[#5DD5E0] font-mono">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* XP Bar Component */}
        <div className="mt-8 pt-4 border-t-2 border-[#3D3D56]">
          <div className="flex justify-between items-center mb-1.5 font-pixel text-[10px]">
            <span className="text-[#5D8A3A] flex items-center gap-1">
              <Award className="w-3.5 h-3.5" /> XP PROGRESS
            </span>
            <span className="text-gray-400">{personal.xpLabel}</span>
          </div>

          {/* Segmented XP Bar */}
          <div className="h-4 bg-[#10101C] border-2 border-[#3D3D56] rounded p-0.5 flex gap-1">
            {[...Array(14)].map((_, i) => (
              <div
                key={i}
                className={`h-full flex-1 rounded-sm ${
                  i < 11
                    ? 'bg-[#5D8A3A] border-t border-l border-white/20'
                    : 'bg-[#1B1B2E]'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
