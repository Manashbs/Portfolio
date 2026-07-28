import React from 'react';
import { RESUME_DATA } from '../data/content';
import { GraduationCap, Award, BookOpen, MapPin, Calendar, CheckCircle2 } from 'lucide-react';

export default function EducationCertifications() {
  const { education, accomplishments } = RESUME_DATA;

  return (
    <section id="education" className="py-16 px-4 max-w-5xl mx-auto space-y-16">
      {/* Education Block */}
      <div>
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-8 bg-[#8B5A2B] rounded border-2 border-[#66401c] flex items-center justify-center">
            <GraduationCap className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="font-pixel text-lg md:text-xl text-[#8B5A2B] dark:text-[#E5B80B]">
              ACADEMIC LORE // EDUCATION
            </h2>
            <p className="text-xs text-gray-400 font-sans">
              Degree programs and foundation schooling.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {education.map((edu, idx) => (
            <div
              key={idx}
              className="mc-slot bg-[#262638] dark:bg-[#262638] light:bg-[#EAE4D3] border-2 border-[#3D3D56] p-5 rounded-lg flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="font-pixel text-sm text-[#5DD5E0]">
                    {edu.institution}
                  </h3>
                  <span className="font-mono text-xs text-[#E5B80B] flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> {edu.period}
                  </span>
                </div>
                <h4 className="font-pixel text-xs text-white mb-2 leading-snug">
                  {edu.degree}
                </h4>
                <p className="text-xs text-gray-300 font-sans leading-relaxed mb-3">
                  {edu.details}
                </p>
              </div>

              <div className="flex items-center gap-1 font-mono text-[11px] text-gray-400 pt-2 border-t border-[#3D3D56]/50">
                <MapPin className="w-3 h-3 text-[#5D8A3A]" />
                <span>{edu.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Accomplishments & Recognition Grid */}
      <div>
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-8 bg-[#5DD5E0] rounded border-2 border-[#3aaab4] flex items-center justify-center">
            <Award className="w-5 h-5 text-[#10101C]" />
          </div>
          <div>
            <h2 className="font-pixel text-lg md:text-xl text-[#5DD5E0]">
              TROPHY ROOM // ACCOMPLISHMENTS
            </h2>
            <p className="text-xs text-gray-400 font-sans">
              Recognitions, certifications, quantum workshops, and hackathons.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {accomplishments.map((acc, idx) => (
            <div
              key={idx}
              className="bg-[#262638] border-2 border-[#3D3D56] hover:border-[#5DD5E0] p-4 rounded-lg flex flex-col justify-between transition-colors group"
            >
              <div>
                <span className="font-pixel text-[9px] text-[#5D8A3A] bg-[#5D8A3A]/10 border border-[#5D8A3A]/40 px-2 py-0.5 rounded inline-block mb-2">
                  {acc.type}
                </span>
                <h4 className="font-pixel text-xs text-white group-hover:text-[#5DD5E0] transition-colors mb-2">
                  {acc.title}
                </h4>
                <p className="text-xs text-gray-300 font-sans leading-relaxed">
                  {acc.description}
                </p>
              </div>
              <div className="mt-3 pt-2 border-t border-[#3D3D56]/40 flex justify-end">
                <CheckCircle2 className="w-4 h-4 text-[#5D8A3A]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
