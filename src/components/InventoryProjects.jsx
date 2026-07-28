import React, { useState } from 'react';
import { RESUME_DATA } from '../data/content';
import { HeartPulse, FileText, ShieldAlert, Code, Globe, Brain, ExternalLink, Github, X, Package, Sparkles } from 'lucide-react';

const ICON_MAP = {
  HeartPulse: HeartPulse,
  FileText: FileText,
  ShieldAlert: ShieldAlert,
  Code: Code,
  Globe: Globe,
  Brain: Brain,
};

export default function InventoryProjects() {
  const { projects } = RESUME_DATA;
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredProject, setHoveredProject] = useState(null);

  const getRarityColor = (rarity) => {
    switch (rarity) {
      case 'Legendary Scroll':
        return 'text-[#E5B80B] border-[#E5B80B] bg-[#E5B80B]/10';
      case 'Epic Artifact':
        return 'text-[#A335EE] border-[#A335EE] bg-[#A335EE]/10';
      case 'Rare Item':
      default:
        return 'text-[#5DD5E0] border-[#5DD5E0] bg-[#5DD5E0]/10';
    }
  };

  return (
    <section id="projects" className="py-16 px-4 max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-8">
        <div className="w-8 h-8 bg-[#5DD5E0] rounded border-2 border-[#2b909a] flex items-center justify-center">
          <Package className="w-5 h-5 text-[#10101C]" />
        </div>
        <div>
          <h2 className="font-pixel text-lg md:text-xl text-[#5DD5E0]">
            INVENTORY VAULT // PROJECTS
          </h2>
          <p className="text-xs text-gray-400 font-sans">
            Click any item slot to inspect full project lore & case study.
          </p>
        </div>
      </div>

      {/* Grid of Item Slots */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => {
          const IconComponent = ICON_MAP[project.icon] || Code;
          const rarityStyle = getRarityColor(project.rarity);

          return (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              onMouseEnter={() => setHoveredProject(project)}
              onMouseLeave={() => setHoveredProject(null)}
              className="mc-slot group cursor-pointer p-4 bg-[#262638] dark:bg-[#262638] light:bg-[#EAE4D3] border-2 border-[#3D3D56] rounded-lg relative flex flex-col justify-between"
            >
              {/* Item Slot Top Bar */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 bg-[#10101C] border-2 border-[#5DD5E0]/50 rounded flex items-center justify-center group-hover:border-[#5DD5E0] transition-colors">
                    <IconComponent className="w-5 h-5 text-[#5DD5E0]" />
                  </div>
                  <span className={`font-pixel text-[9px] px-2 py-0.5 border rounded ${rarityStyle}`}>
                    {project.rarity}
                  </span>
                </div>

                <h3 className="font-pixel text-xs text-[#F5F0E1] dark:text-[#F5F0E1] light:text-[#1B1B2E] mb-1 group-hover:text-[#5DD5E0] transition-colors line-clamp-1">
                  {project.title}
                </h3>
                <p className="text-xs text-gray-400 dark:text-gray-400 light:text-gray-600 font-sans line-clamp-2 mb-3">
                  {project.summary}
                </p>
              </div>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-1 mt-2 pt-2 border-t border-[#3D3D56]/50">
                {project.tech.slice(0, 3).map((t, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] font-mono bg-[#10101C] dark:bg-[#10101C] light:bg-[#D5CDB5] text-[#5DD5E0] px-2 py-0.5 rounded border border-[#3D3D56]"
                  >
                    {t}
                  </span>
                ))}
                {project.tech.length > 3 && (
                  <span className="text-[10px] text-gray-400 font-mono self-center">
                    +{project.tech.length - 3}
                  </span>
                )}
              </div>
            </div>
          );
        })}

        {/* Decorative Empty Crafting Slot */}
        <div className="mc-slot border-2 border-dashed border-[#3D3D56] bg-[#10101C]/30 p-4 rounded-lg flex flex-col items-center justify-center text-center opacity-60 hover:opacity-100 transition-opacity">
          <div className="w-10 h-10 rounded border border-dashed border-gray-600 flex items-center justify-center mb-2">
            <Sparkles className="w-5 h-5 text-gray-500" />
          </div>
          <span className="font-pixel text-[10px] text-gray-500">CRAFTING SLOT</span>
          <span className="text-xs text-gray-600 font-sans mt-0.5">Next AI Research Project</span>
        </div>
      </div>

      {/* Case Study Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-[#1B1B2E] border-4 border-[#5DD5E0] rounded-lg max-w-2xl w-full p-6 relative shadow-2xl max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white bg-[#262638] p-1.5 rounded border border-[#3D3D56]"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="flex items-center gap-3 mb-4 pr-8">
              <div className="w-12 h-12 bg-[#262638] border-2 border-[#5DD5E0] rounded flex items-center justify-center shrink-0">
                {React.createElement(ICON_MAP[selectedProject.icon] || Code, { className: 'w-6 h-6 text-[#5DD5E0]' })}
              </div>
              <div>
                <span className={`font-pixel text-[9px] px-2 py-0.5 border rounded inline-block mb-1 ${getRarityColor(selectedProject.rarity)}`}>
                  {selectedProject.rarity}
                </span>
                <h3 className="font-pixel text-base md:text-lg text-[#5DD5E0]">
                  {selectedProject.title}
                </h3>
              </div>
            </div>

            {/* Content Sections */}
            <div className="space-y-4 text-sm font-sans text-gray-300">
              <div className="bg-[#262638] p-3.5 rounded border border-[#3D3D56]">
                <h4 className="font-pixel text-xs text-[#E5B80B] mb-1">THE PROBLEM</h4>
                <p>{selectedProject.problem}</p>
              </div>

              <div className="bg-[#262638] p-3.5 rounded border border-[#3D3D56]">
                <h4 className="font-pixel text-xs text-[#5D8A3A] mb-1">OUR APPROACH</h4>
                <p>{selectedProject.approach}</p>
              </div>

              <div className="bg-[#262638] p-3.5 rounded border border-[#3D3D56]">
                <h4 className="font-pixel text-xs text-[#5DD5E0] mb-1">OUTCOME & IMPACT</h4>
                <p>{selectedProject.outcome}</p>
              </div>

              {/* Tech Stack */}
              <div>
                <h4 className="font-pixel text-xs text-gray-400 mb-2">CRAFTED WITH:</h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.tech.map((t, i) => (
                    <span key={i} className="bg-[#5D8A3A]/20 text-[#5D8A3A] border border-[#5D8A3A]/40 font-mono text-xs px-2.5 py-1 rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links CTA */}
              <div className="flex flex-wrap gap-3 pt-4 border-t border-[#3D3D56]">
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-[#5DD5E0] hover:bg-[#4bc2cd] text-[#10101C] font-pixel text-xs px-4 py-2.5 rounded border-2 border-[#3aaab4] transition-transform active:scale-95 font-semibold"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>LAUNCH PROJECT / PAPER</span>
                  </a>
                )}
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-[#262638] hover:bg-[#32324a] text-white font-pixel text-xs px-4 py-2.5 rounded border-2 border-[#3D3D56] transition-transform active:scale-95"
                  >
                    <Github className="w-4 h-4" />
                    <span>VIEW SOURCE CODE</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
