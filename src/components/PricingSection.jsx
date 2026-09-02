import React from 'react';
import Button from './Button';
import { Check } from 'lucide-react';

export default function PricingSection({ onOpenQuoteModal }) {
  const customScopePoints = [
    "Workflow & ROI evaluation prior to build",
    "Custom AI agent engineering tailored to your software stack",
    "End-to-end CRM, WhatsApp & API integrations",
    "Continuous system monitoring & model optimization",
    "Dedicated hands-on team onboarding and guidance"
  ];

  return (
    <div className="space-y-12">
      <div className="max-w-3xl space-y-4">
        <span className="text-xs font-mono text-brand-red uppercase tracking-widest flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-red shadow-[0_0_8px_#FF2638]" />
          SOLUTIONS & PRICING
        </span>
        <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight leading-tight">
          AI Solutions <br />
          <span className="text-secondary-text font-normal">Built Around Your Business.</span>
        </h2>
        <p className="text-base sm:text-lg text-secondary-text leading-relaxed font-normal">
          Every business is different. We create solutions based on your goals, workflows and requirements.
        </p>
      </div>

      {/* Editorial Custom Quote Panel */}
      <div className="rounded-3xl bg-dark-card border border-dark-border p-8 sm:p-12 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-deep-red/30 rounded-full blur-3xl pointer-events-none" />

        <div className="lg:col-span-7 space-y-6 relative z-10">
          <h3 className="text-2xl font-display font-bold text-white">
            Tailored Engineering & Partnership
          </h3>
          <p className="text-xs sm:text-sm text-secondary-text leading-relaxed">
            We avoid generic monthly tiers that force you into fixed software caps. Every engagement begins with an objective assessment of your operational workflow to deliver custom automation with clear ROI.
          </p>

          <div className="space-y-2.5 pt-2">
            {customScopePoints.map((point, idx) => (
              <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-white font-medium">
                <Check className="w-4 h-4 text-brand-red shrink-0" />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 p-8 rounded-2xl bg-dark-surface border border-dark-border text-center space-y-6 relative z-10">
          <span className="text-xs font-mono text-secondary-text uppercase tracking-widest block">
            CUSTOM PROJECT SCOPE
          </span>
          <div className="text-2xl sm:text-3xl font-display font-bold text-white">
            Transparent & Scalable
          </div>
          <p className="text-xs text-secondary-text leading-relaxed">
            Receive a detailed project blueprint and scope breakdown based directly on your business needs.
          </p>

          <div className="pt-2">
            <Button onClick={onOpenQuoteModal} variant="primary" size="lg" className="w-full">
              Get a Custom Quote
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
