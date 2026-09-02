import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Compass, Users, Cpu, ArrowUpRight } from 'lucide-react';
import { SERVICES_DATA } from '../data/contentData';

export default function EditorialServices({ onSelectService }) {
  const [activeServiceId, setActiveServiceId] = useState('01');

  const activeService = SERVICES_DATA.find((s) => s.number === activeServiceId) || SERVICES_DATA[0];

  return (
    <div className="space-y-12">
      {/* Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-dark-border">
        <div>
          <span className="text-xs font-mono text-brand-red uppercase tracking-widest flex items-center gap-2 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-red shadow-[0_0_8px_#FF2638]" />
            CORE CAPABILITIES
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
            What We Build
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-secondary-text max-w-md leading-relaxed">
          Tailored AI strategy, enduring partnership, and autonomous automation built specifically around your operational goals.
        </p>
      </div>

      {/* 3 Large Editorial Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Numbered Editorial Cards */}
        <div className="lg:col-span-6 space-y-4">
          {SERVICES_DATA.map((service) => {
            const isActive = activeServiceId === service.number;
            return (
              <motion.div
                key={service.number}
                onClick={() => setActiveServiceId(service.number)}
                className={`p-6 sm:p-8 rounded-2xl transition-all duration-300 cursor-pointer border relative overflow-hidden group ${
                  isActive
                    ? 'bg-dark-card border-brand-red shadow-red-glow'
                    : 'bg-dark-surface border-dark-border hover:border-brand-red/50 hover:bg-dark-hover'
                }`}
              >
                {/* Animated Red Line Accent on Top when active */}
                {isActive && (
                  <motion.div
                    layoutId="activeServiceLine"
                    className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-brand-red via-brand-red-bright to-transparent shadow-[0_0_10px_#FF2638]"
                  />
                )}

                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <span
                      className={`text-sm font-mono font-bold ${
                        isActive ? 'text-brand-red font-extrabold' : 'text-secondary-muted'
                      }`}
                    >
                      {service.number}
                    </span>
                    <h3
                      className={`text-xl sm:text-2xl font-display font-bold tracking-tight uppercase ${
                        isActive ? 'text-white' : 'text-secondary-text group-hover:text-white'
                      }`}
                    >
                      {service.title}
                    </h3>
                  </div>

                  <span
                    className={`w-2 h-2 rounded-full transition-all ${
                      isActive ? 'bg-brand-red shadow-[0_0_8px_#FF2638] scale-125' : 'bg-dark-border'
                    }`}
                  />
                </div>

                <p className="mt-3 text-xs sm:text-sm text-secondary-text leading-relaxed font-normal">
                  "{service.summary}"
                </p>

                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-6 pt-6 border-t border-dark-border space-y-4"
                  >
                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-2">
                      {service.points.map((point, idx) => (
                        <div key={idx} className="flex items-center gap-2.5 text-xs text-secondary-text">
                          <Check className="w-3.5 h-3.5 text-brand-red shrink-0" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          if (onSelectService) onSelectService(service);
                        }}
                        className="inline-flex items-center gap-2 text-xs font-bold text-white hover:text-brand-red transition-colors"
                      >
                        <span>Request Custom Blueprint</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-brand-red" />
                      </button>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Right: Dynamic Dark Visual Representation */}
        <div className="lg:col-span-6 sticky top-28">
          <div className="rounded-2xl bg-dark-card border border-dark-border p-8 min-h-[420px] flex flex-col justify-between shadow-2xl relative overflow-hidden">
            {/* Background Red Glow */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-deep-red/40 rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-center justify-between border-b border-dark-border pb-4">
              <span className="text-xs font-mono text-secondary-text uppercase tracking-wider">
                ARCHITECTURE // {activeService.number}
              </span>
              <span className="text-[11px] font-mono text-brand-red font-semibold bg-deep-red/50 border border-brand-red/30 px-2.5 py-0.5 rounded-full">
                ACTIVE PIPELINE
              </span>
            </div>

            {/* Dynamic Diagram */}
            <div className="my-8 flex-1 flex flex-col items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService.number}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="w-full space-y-5"
                >
                  {activeService.number === '01' && (
                    <div className="space-y-4">
                      <div className="p-4 rounded-xl bg-dark-surface border border-dark-border flex items-center justify-between text-xs font-mono">
                        <span className="text-secondary-text">01 Operational Audit</span>
                        <span className="text-brand-red font-bold">Identified Bottlenecks</span>
                      </div>
                      <div className="w-0.5 h-6 bg-brand-red/40 mx-auto" />
                      <div className="p-4 rounded-xl bg-dark-hover border border-brand-red/40 text-white flex items-center justify-between text-xs font-mono shadow-red-glow">
                        <span>02 Strategic AI Blueprint</span>
                        <span className="text-brand-red font-bold">Custom Roadmap</span>
                      </div>
                      <div className="w-0.5 h-6 bg-brand-red/40 mx-auto" />
                      <div className="p-4 rounded-xl bg-dark-surface border border-dark-border flex items-center justify-between text-xs font-mono">
                        <span className="text-secondary-text">03 Execution & ROI Setup</span>
                        <span className="text-white font-bold">Target Milestones</span>
                      </div>
                    </div>
                  )}

                  {activeService.number === '02' && (
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-5 rounded-xl bg-dark-surface border border-dark-border space-y-2 text-center">
                        <Compass className="w-5 h-5 text-brand-red mx-auto" />
                        <div className="text-xs font-bold text-white">Strategic Advisory</div>
                        <div className="text-[11px] text-secondary-text">Continuous model tuning</div>
                      </div>
                      <div className="p-5 rounded-xl bg-dark-hover border border-brand-red/40 text-white space-y-2 text-center shadow-red-glow">
                        <Users className="w-5 h-5 text-brand-red mx-auto" />
                        <div className="text-xs font-bold">Dedicated Team</div>
                        <div className="text-[11px] text-secondary-text">24/7 technical oversight</div>
                      </div>
                      <div className="col-span-2 p-4 rounded-xl bg-dark-surface border border-dark-border text-center text-xs font-mono text-secondary-text">
                        Perpetual upgrades as new AI models & LLMs emerge
                      </div>
                    </div>
                  )}

                  {activeService.number === '03' && (
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-brand-red text-white flex items-center justify-center text-xs font-bold shrink-0 shadow-[0_0_10px_#FF2638]">
                          AI
                        </div>
                        <div className="flex-1 p-3 rounded-lg bg-dark-surface border border-dark-border text-xs font-mono text-white">
                          Autonomous Voice & Chat Response Engine
                        </div>
                      </div>
                      <div className="pl-11 border-l-2 border-brand-red/40 space-y-3">
                        <div className="p-3 rounded-lg bg-dark-surface border border-dark-border text-xs text-secondary-text flex justify-between">
                          <span>CRM Synchronization</span>
                          <span className="text-brand-red font-mono font-bold">Real-time</span>
                        </div>
                        <div className="p-3 rounded-lg bg-dark-surface border border-dark-border text-xs text-secondary-text flex justify-between">
                          <span>Workflow Trigger</span>
                          <span className="text-brand-red font-mono font-bold">Zero Manual Touch</span>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="border-t border-dark-border pt-4 flex items-center justify-between text-xs text-secondary-text font-mono">
              <span>{activeService.title}</span>
              <span className="text-brand-red font-bold">Enterprise Grade</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
