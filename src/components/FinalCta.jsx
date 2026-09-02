import React from 'react';
import Button from './Button';

export default function FinalCta({ onBookCall }) {
  return (
    <div className="rounded-3xl bg-dark-card border border-dark-border p-10 sm:p-16 md:p-20 text-center relative overflow-hidden shadow-2xl">
      {/* Subtle Red Atmospheric Glow Behind CTA */}
      <div className="absolute inset-0 bg-red-cta-glow opacity-90 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-deep-red/40 blur-3xl pointer-events-none" />

      {/* Red Glowing Node Accents */}
      <div className="absolute top-6 left-6 w-2 h-2 rounded-full bg-brand-red shadow-[0_0_8px_#FF2638]" />
      <div className="absolute bottom-6 right-6 w-2 h-2 rounded-full bg-brand-red shadow-[0_0_8px_#FF2638]" />

      <div className="relative z-10 max-w-3xl mx-auto space-y-6">
        <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-dark-surface border border-dark-border text-xs font-mono text-secondary-text">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-red shadow-[0_0_6px_#FF2638]" />
          <span>START YOUR AI TRANSFORMATION</span>
        </span>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight leading-tight">
          Ready to Connect?
        </h2>

        <p className="text-base sm:text-lg text-secondary-text max-w-xl mx-auto leading-relaxed font-normal">
          Let's turn your business workflows into intelligent systems.
        </p>

        <div className="pt-4 flex justify-center">
          <Button onClick={onBookCall} variant="primary" size="lg">
            Book a Call
          </Button>
        </div>
      </div>
    </div>
  );
}
