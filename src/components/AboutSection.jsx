import React from 'react';
import Button from './Button';

export default function AboutSection({ onLearnMore }) {
  return (
    <div className="rounded-3xl bg-dark-card border border-dark-border p-8 sm:p-14 md:p-16 relative overflow-hidden shadow-2xl">
      {/* Red Glow Accent */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-deep-red/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-8 right-8 w-2 h-2 rounded-full bg-brand-red shadow-[0_0_8px_#FF2638]" />

      <div className="max-w-4xl space-y-6 relative z-10">
        <span className="text-xs font-mono text-brand-red uppercase tracking-widest flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-red shadow-[0_0_8px_#FF2638]" />
          OUR PHILOSOPHY
        </span>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold text-white tracking-tight leading-[1.1]">
          "AI is powerful. <br />
          <span className="text-secondary-text font-normal">Knowing where to use it is what matters."</span>
        </h2>

        <p className="text-base sm:text-lg text-secondary-text max-w-2xl leading-relaxed font-normal pt-2">
          AI CONNECT helps businesses turn AI from an idea into practical, measurable systems.
        </p>

        <div className="pt-4">
          <Button onClick={onLearnMore} variant="secondary" size="md">
            More About Us
          </Button>
        </div>
      </div>
    </div>
  );
}
