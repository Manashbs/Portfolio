import React, { useState } from 'react';
import { RESUME_DATA } from '../data/content';
import { Hammer, ArrowRight, Sparkles, CheckCircle2, Code, Cpu, Wrench, BookOpen } from 'lucide-react';

export default function CraftingSkills() {
  const { craftingTable, skillsCategorized } = RESUME_DATA;
  const [activeRecipeIndex, setActiveRecipeIndex] = useState(0);

  const activeRecipe = craftingTable.recipes[activeRecipeIndex];

  return (
    <section id="skills" className="py-16 px-4 max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <div className="w-8 h-8 bg-[#E5B80B] rounded border-2 border-[#b89309] flex items-center justify-center">
          <Hammer className="w-5 h-5 text-[#10101C]" />
        </div>
        <div>
          <h2 className="font-pixel text-lg md:text-xl text-[#E5B80B]">
            CRAFTING TABLE // SKILLS
          </h2>
          <p className="text-xs text-gray-400 font-sans">
            Combine technical ingredients in the 3x3 grid to synthesize core engineering competencies.
          </p>
        </div>
      </div>

      {/* 3x3 Crafting Table GUI Interface */}
      <div className="bg-[#262638] dark:bg-[#262638] light:bg-[#EAE4D3] border-4 border-[#3D3D56] rounded-lg p-6 mb-12 shadow-xl">
        {/* Preset Recipe Selector Buttons */}
        <div className="mb-6 pb-4 border-b-2 border-[#3D3D56]">
          <span className="font-pixel text-[10px] text-gray-400 block mb-2">SELECT CRAFTING RECIPE:</span>
          <div className="flex flex-wrap gap-2">
            {craftingTable.recipes.map((recipe, idx) => (
              <button
                key={recipe.id}
                onClick={() => setActiveRecipeIndex(idx)}
                className={`font-pixel text-[10px] px-3 py-1.5 rounded border-2 transition-all ${
                  activeRecipeIndex === idx
                    ? 'border-[#E5B80B] bg-[#E5B80B]/20 text-[#E5B80B] shadow-sm'
                    : 'border-[#3D3D56] bg-[#10101C]/60 text-gray-300 hover:border-[#E5B80B]/50'
                }`}
              >
                {recipe.name}
              </button>
            ))}
          </div>
        </div>

        {/* The Crafting Table Visual Layout */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 py-4">
          {/* 3x3 Input Grid */}
          <div className="bg-[#10101C] border-2 border-[#3D3D56] p-3 rounded-lg shadow-inner">
            <div className="font-pixel text-[9px] text-[#5DD5E0] mb-2 text-center">3x3 INPUT GRID</div>
            <div className="grid grid-cols-3 gap-2">
              {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((slotIdx) => {
                const item = activeRecipe.inputs[slotIdx];
                return (
                  <div
                    key={slotIdx}
                    className={`w-16 h-16 sm:w-20 sm:h-20 rounded border-2 flex flex-col items-center justify-center p-1 text-center transition-all ${
                      item
                        ? 'border-[#5DD5E0] bg-[#262638] shadow-[0_0_8px_rgba(93,213,224,0.2)]'
                        : 'border-[#3D3D56]/60 bg-[#1B1B2E]/40'
                    }`}
                  >
                    {item ? (
                      <>
                        <Sparkles className="w-4 h-4 text-[#5DD5E0] mb-1 animate-pulse" />
                        <span className="font-pixel text-[9px] text-gray-200 line-clamp-2 leading-tight">
                          {item}
                        </span>
                      </>
                    ) : (
                      <span className="font-pixel text-[9px] text-gray-700">EMPTY</span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Arrow Indicator */}
          <div className="flex flex-col items-center gap-1">
            <ArrowRight className="w-8 h-8 text-[#E5B80B] animate-pulse hidden md:block" />
            <span className="font-pixel text-[10px] text-[#E5B80B]">CRAFTS INTO</span>
          </div>

          {/* Output Slot Box */}
          <div className="w-full md:w-64 bg-[#10101C] border-4 border-[#E5B80B] p-4 rounded-lg text-center shadow-lg relative">
            <div className="w-12 h-12 mx-auto bg-[#E5B80B]/20 border-2 border-[#E5B80B] rounded flex items-center justify-center mb-3">
              <CheckCircle2 className="w-6 h-6 text-[#E5B80B]" />
            </div>

            <span className="font-pixel text-[9px] text-[#E5B80B] px-2 py-0.5 border border-[#E5B80B] rounded inline-block mb-1">
              {activeRecipe.output.rarity}
            </span>

            <h4 className="font-pixel text-xs text-white mt-1 mb-2">
              {activeRecipe.output.title}
            </h4>

            <p className="text-xs text-gray-300 font-sans leading-relaxed">
              {activeRecipe.output.desc}
            </p>
          </div>
        </div>
      </div>

      {/* Categorized Technical Skills List (Clean accessibility pills) */}
      <div className="space-y-6">
        <h3 className="font-pixel text-sm text-[#5DD5E0] flex items-center gap-2">
          <span>CATEGORIZED ARSENAL</span>
          <span className="h-[2px] bg-[#5DD5E0]/40 flex-1 inline-block" />
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Languages */}
          <div className="bg-[#262638] border-2 border-[#3D3D56] p-4 rounded-lg">
            <div className="flex items-center gap-2 font-pixel text-xs text-[#5D8A3A] mb-3">
              <Code className="w-4 h-4" />
              <span>PROGRAMMING LANGUAGES</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {skillsCategorized.languages.map((lang, idx) => (
                <span
                  key={idx}
                  className="bg-[#10101C] text-gray-200 border border-[#5D8A3A]/50 font-mono text-xs px-2.5 py-1 rounded hover:border-[#5D8A3A] transition-colors"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>

          {/* Frameworks */}
          <div className="bg-[#262638] border-2 border-[#3D3D56] p-4 rounded-lg">
            <div className="flex items-center gap-2 font-pixel text-xs text-[#5DD5E0] mb-3">
              <Cpu className="w-4 h-4" />
              <span>FRAMEWORKS & LIBRARIES</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {skillsCategorized.frameworks.map((fw, idx) => (
                <span
                  key={idx}
                  className="bg-[#10101C] text-gray-200 border border-[#5DD5E0]/50 font-mono text-xs px-2.5 py-1 rounded hover:border-[#5DD5E0] transition-colors"
                >
                  {fw}
                </span>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="bg-[#262638] border-2 border-[#3D3D56] p-4 rounded-lg">
            <div className="flex items-center gap-2 font-pixel text-xs text-[#E5B80B] mb-3">
              <Wrench className="w-4 h-4" />
              <span>TOOLS & TECHNOLOGIES</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {skillsCategorized.tools.map((tool, idx) => (
                <span
                  key={idx}
                  className="bg-[#10101C] text-gray-200 border border-[#E5B80B]/50 font-mono text-xs px-2.5 py-1 rounded hover:border-[#E5B80B] transition-colors"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Concepts */}
          <div className="bg-[#262638] border-2 border-[#3D3D56] p-4 rounded-lg">
            <div className="flex items-center gap-2 font-pixel text-xs text-[#B02E26] mb-3">
              <BookOpen className="w-4 h-4" />
              <span>CORE CONCEPTS & DOMAINS</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {skillsCategorized.concepts.map((concept, idx) => (
                <span
                  key={idx}
                  className="bg-[#10101C] text-gray-200 border border-[#B02E26]/50 font-mono text-xs px-2.5 py-1 rounded hover:border-[#B02E26] transition-colors"
                >
                  {concept}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
