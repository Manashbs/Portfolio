import React from 'react';
import { RESUME_DATA } from '../data/content';
import { Mail, Linkedin, Github, Globe, Download, Heart } from 'lucide-react';

export default function ContactFooter() {
  const { personal } = RESUME_DATA;

  return (
    <footer id="contact" className="py-16 px-4 max-w-5xl mx-auto">
      {/* Contact Main HUD Block */}
      <div className="bg-[#262638] dark:bg-[#262638] light:bg-[#EAE4D3] border-4 border-[#3D3D56] rounded-lg p-6 md:p-10 shadow-xl relative">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-8 border-b-2 border-[#3D3D56]">
          <div>
            <span className="font-pixel text-[10px] text-[#5DD5E0] uppercase tracking-wide block mb-1">
              COMMUNICATION BEACON
            </span>
            <h2 className="font-pixel text-xl md:text-3xl text-white">
              LET'S CRAFT TOGETHER
            </h2>
            <p className="text-sm text-gray-300 font-sans mt-2 max-w-md">
              Open for full-stack AI roles, deep learning research collaborations, and scalable software engineering projects.
            </p>
          </div>

          {/* Download Resume Diamond Button */}
          <a
            href="./Manash_Srivastav_Resume.pdf"
            download="Manash_Srivastav_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="mc-slot inline-flex items-center gap-2 bg-[#5DD5E0] hover:bg-[#48c2ce] text-[#10101C] font-pixel text-xs px-5 py-3 rounded border-2 border-[#36a6b1] transition-transform active:scale-95 shadow-lg font-bold"
          >
            <Download className="w-4 h-4" />
            <span>DOWNLOAD RESUME PDF</span>
          </a>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-8">
          {/* Email */}
          <a
            href={`mailto:${personal.email}`}
            className="mc-slot bg-[#10101C] p-4 rounded border-2 border-[#3D3D56] hover:border-[#5DD5E0] flex items-center gap-3 transition-colors group"
          >
            <div className="w-10 h-10 bg-[#5DD5E0]/20 border border-[#5DD5E0] rounded flex items-center justify-center shrink-0">
              <Mail className="w-5 h-5 text-[#5DD5E0]" />
            </div>
            <div className="overflow-hidden">
              <span className="font-pixel text-[9px] text-gray-400 block">DIRECT MAIL</span>
              <span className="text-xs font-mono text-white group-hover:text-[#5DD5E0] truncate block">
                {personal.email}
              </span>
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href={personal.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="mc-slot bg-[#10101C] p-4 rounded border-2 border-[#3D3D56] hover:border-[#5DD5E0] flex items-center gap-3 transition-colors group"
          >
            <div className="w-10 h-10 bg-[#5D8A3A]/20 border border-[#5D8A3A] rounded flex items-center justify-center shrink-0">
              <Linkedin className="w-5 h-5 text-[#5D8A3A]" />
            </div>
            <div className="overflow-hidden">
              <span className="font-pixel text-[9px] text-gray-400 block">LINKEDIN</span>
              <span className="text-xs font-mono text-white group-hover:text-[#5D8A3A] truncate block">
                manash-srivastava
              </span>
            </div>
          </a>

          {/* GitHub */}
          <a
            href={personal.socials.github}
            target="_blank"
            rel="noreferrer"
            className="mc-slot bg-[#10101C] p-4 rounded border-2 border-[#3D3D56] hover:border-[#5DD5E0] flex items-center gap-3 transition-colors group"
          >
            <div className="w-10 h-10 bg-[#E5B80B]/20 border border-[#E5B80B] rounded flex items-center justify-center shrink-0">
              <Github className="w-5 h-5 text-[#E5B80B]" />
            </div>
            <div className="overflow-hidden">
              <span className="font-pixel text-[9px] text-gray-400 block">GITHUB</span>
              <span className="text-xs font-mono text-white group-hover:text-[#E5B80B] truncate block">
                @Manashbs
              </span>
            </div>
          </a>

          {/* Phone / Website */}
          <a
            href={personal.socials.portfolio}
            target="_blank"
            rel="noreferrer"
            className="mc-slot bg-[#10101C] p-4 rounded border-2 border-[#3D3D56] hover:border-[#5DD5E0] flex items-center gap-3 transition-colors group"
          >
            <div className="w-10 h-10 bg-[#B02E26]/20 border border-[#B02E26] rounded flex items-center justify-center shrink-0">
              <Globe className="w-5 h-5 text-[#B02E26]" />
            </div>
            <div className="overflow-hidden">
              <span className="font-pixel text-[9px] text-gray-400 block">PORTFOLIO SITE</span>
              <span className="text-xs font-mono text-white group-hover:text-[#B02E26] truncate block">
                manashbs.github.io
              </span>
            </div>
          </a>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-4 border-t border-[#3D3D56]/60 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-400 font-mono gap-2">
          <span>© 2026 Manash Srivastav. Built with React & Tailwind.</span>
          <span className="flex items-center gap-1 text-[11px] text-[#5D8A3A]">
            <Heart className="w-3.5 h-3.5 text-[#B02E26]" /> Minecraft Flat Design System
          </span>
        </div>
      </div>
    </footer>
  );
}
