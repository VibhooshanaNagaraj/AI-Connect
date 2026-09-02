import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PROCESS_STEPS } from '../data/contentData';

export default function ProcessTimeline() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="space-y-12">
      {/* Editorial Header */}
      <div className="max-w-3xl space-y-4">
        <span className="text-xs font-mono text-brand-red uppercase tracking-widest flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-red shadow-[0_0_8px_#FF2638]" />
          IMPLEMENTATION METHODOLOGY
        </span>
        <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
          From Idea <br />
          <span className="text-secondary-text font-normal">To Impact.</span>
        </h2>
      </div>

      {/* Connected Timeline */}
      <div className="relative pt-6">
        {/* Continuous Connecting Thin Red Line */}
        <div className="hidden md:block absolute top-[28px] left-8 right-8 h-[1px] bg-dark-border z-0" />
        
        {/* Active Red Fill Line */}
        <motion.div
          className="hidden md:block absolute top-[28px] left-8 h-[1px] bg-brand-red shadow-[0_0_10px_#FF2638] z-0"
          animate={{
            width: `${(activeStep / (PROCESS_STEPS.length - 1)) * 85}%`,
          }}
          transition={{ duration: 0.4 }}
        />

        {/* 4 Connected Nodes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
          {PROCESS_STEPS.map((step, idx) => {
            const isSelected = activeStep === idx;
            return (
              <div
                key={step.number}
                onClick={() => setActiveStep(idx)}
                onMouseEnter={() => setActiveStep(idx)}
                className="cursor-pointer group flex flex-col items-start"
              >
                {/* Glowing Node Dot / Badge */}
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`w-11 h-11 rounded-full flex items-center justify-center font-mono text-xs font-bold transition-all duration-300 ${
                      isSelected
                        ? 'bg-brand-red text-white shadow-red-glow scale-110 border border-white'
                        : 'bg-dark-surface text-white border border-dark-border group-hover:border-brand-red'
                    }`}
                  >
                    {step.number}
                  </div>
                  {/* Glowing Node point */}
                  <span
                    className={`w-2 h-2 rounded-full transition-all ${
                      isSelected ? 'bg-brand-red shadow-[0_0_8px_#FF2638]' : 'bg-dark-border'
                    }`}
                  />
                </div>

                {/* Step Content */}
                <div className="space-y-2">
                  <h3
                    className={`text-xl font-display font-bold transition-colors ${
                      isSelected ? 'text-white' : 'text-secondary-text group-hover:text-white'
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-secondary-text leading-relaxed font-normal">
                    "{step.description}"
                  </p>
                  <div className="pt-2 text-[11px] font-mono text-brand-red font-semibold">
                    {step.detail}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
