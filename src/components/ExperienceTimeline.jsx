import React from 'react';
import { RESUME_DATA } from '../data/content';
import { Briefcase, MapPin, Calendar, CheckSquare } from 'lucide-react';

export default function ExperienceTimeline() {
  const { experience } = RESUME_DATA;

  return (
    <section id="experience" className="py-16 px-4 max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex items-center gap-3 mb-10">
        <div className="w-8 h-8 bg-[#5D8A3A] rounded border-2 border-[#3d6023] flex items-center justify-center">
          <Briefcase className="w-5 h-5 text-white" />
        </div>
        <div>
          <h2 className="font-pixel text-lg md:text-xl text-[#5D8A3A]">
            ADVENTURE QUEST LOG // EXPERIENCE
          </h2>
          <p className="text-xs text-gray-400 font-sans">
            Chronological path of research internships and engineering roles.
          </p>
        </div>
      </div>

      {/* Minecraft Path Timeline */}
      <div className="relative border-l-4 border-[#5D8A3A] ml-4 md:ml-8 pl-6 md:pl-10 space-y-10">
        {experience.map((item, idx) => (
          <div key={idx} className="relative group">
            {/* Timeline Block Marker */}
            <div className="absolute -left-[35px] md:-left-[51px] top-1.5 w-6 h-6 bg-[#5D8A3A] border-2 border-white rounded shadow flex items-center justify-center group-hover:scale-125 transition-transform">
              <span className="w-2 h-2 bg-white rounded-sm" />
            </div>

            {/* Role Card */}
            <div className="mc-slot bg-[#262638] dark:bg-[#262638] light:bg-[#EAE4D3] border-2 border-[#3D3D56] p-5 rounded-lg">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-pixel text-sm md:text-base text-[#5DD5E0]">
                      {item.company}
                    </h3>
                    <span className="font-pixel text-[9px] bg-[#5D8A3A]/20 text-[#5D8A3A] border border-[#5D8A3A] px-2 py-0.5 rounded">
                      {item.badge}
                    </span>
                  </div>
                  <p className="font-pixel text-xs text-[#E5B80B] mt-1">
                    {item.role}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs text-gray-400 font-mono">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#5DD5E0]" />
                    {item.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#E5B80B]" />
                    {item.location}
                  </span>
                </div>
              </div>

              {/* Bullet Points */}
              <ul className="space-y-2 text-sm text-gray-300 font-sans mt-3 border-t border-[#3D3D56]/60 pt-3">
                {item.highlights.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2">
                    <CheckSquare className="w-4 h-4 text-[#5D8A3A] shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
