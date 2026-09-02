import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TECH_ECOSYSTEM } from '../data/contentData';
import { Layers, CheckCircle2 } from 'lucide-react';

export default function TechEcosystem() {
  const [activeItem, setActiveItem] = useState(0);

  return (
    <div className="relative rounded-3xl bg-surface-card border border-surface-border p-8 md:p-12 overflow-hidden">
      {/* Background Gradient & Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-radial-gradient from-brand-purple/10 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center mb-10">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono tracking-wider uppercase bg-surface border border-surface-border text-brand-purple-light mb-4">
          <Layers className="w-3.5 h-3.5" />
          <span>CONNECTED ECOSYSTEM</span>
        </span>
        <h3 className="text-2xl md:text-4xl font-display font-extrabold text-white tracking-tight">
          Connected intelligence across the tools your business already uses.
        </h3>
        <p className="mt-3 text-slate-400 text-sm md:text-base">
          We construct native bridges between enterprise software platforms, LLM frameworks, and localized business stacks.
        </p>
      </div>

      {/* Grid of Ecosystem Tech Nodes */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {TECH_ECOSYSTEM.map((item, idx) => {
          const isSelected = activeItem === idx;

          return (
            <motion.div
              key={item.name}
              onMouseEnter={() => setActiveItem(idx)}
              whileHover={{ y: -4 }}
              className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                isSelected
                  ? 'bg-surface-hover border-brand-purple/50 shadow-[0_10px_30px_-10px_rgba(139,92,246,0.3)]'
                  : 'bg-surface/80 border-surface-border hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-mono uppercase tracking-wider text-brand-purple-light bg-brand-purple/10 px-2.5 py-0.5 rounded-full border border-brand-purple/20">
                  {item.category}
                </span>
                <CheckCircle2
                  className={`w-4 h-4 transition-colors ${
                    isSelected ? 'text-brand-purple-light' : 'text-slate-600'
                  }`}
                />
              </div>

              <h4 className="text-lg font-display font-bold text-white mb-1.5">
                {item.name}
              </h4>

              <p className="text-xs text-slate-400 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
