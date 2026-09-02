import React from 'react';
import EditorialServices from '../components/EditorialServices';
import Button from '../components/Button';
import { Zap, Workflow, Shield } from 'lucide-react';

export default function ServicesPage({ setActiveTab, onOpenQuoteModal }) {
  return (
    <div className="pt-28 md:pt-36 pb-20 space-y-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Page Header */}
      <div className="max-w-4xl space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dark-surface border border-dark-border text-xs font-mono text-secondary-text">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-red shadow-[0_0_8px_#FF2638]" />
          <span>OUR SERVICES</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-display font-extrabold text-white tracking-tight leading-tight">
          What We Build
        </h1>
        <p className="text-base sm:text-lg text-secondary-text leading-relaxed font-normal">
          From strategic direction to continuous optimization and autonomous automation, AI CONNECT constructs tailored AI solutions built around your business goals.
        </p>
      </div>

      {/* Editorial Services Section */}
      <EditorialServices onSelectService={onOpenQuoteModal} />

      {/* Quality Standards */}
      <div className="rounded-3xl bg-dark-card border border-dark-border p-8 md:p-12 space-y-8 shadow-2xl">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-mono text-brand-red uppercase tracking-widest flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-red shadow-[0_0_8px_#FF2638]" />
            ENGINEERING STANDARDS
          </span>
          <h2 className="text-3xl font-display font-bold text-white">
            What Every AI CONNECT Engagement Delivers
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-dark-surface border border-dark-border space-y-3">
            <div className="w-10 h-10 rounded-xl bg-deep-red/60 border border-brand-red/30 flex items-center justify-center text-brand-red">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-display font-bold text-white">24/7 Availability</h3>
            <p className="text-xs text-secondary-text leading-relaxed">
              Autonomous agents operating continuously without manual latency or fatigue.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-dark-surface border border-dark-border space-y-3">
            <div className="w-10 h-10 rounded-xl bg-deep-red/60 border border-brand-red/30 flex items-center justify-center text-brand-red">
              <Workflow className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-display font-bold text-white">Native Software Sync</h3>
            <p className="text-xs text-secondary-text leading-relaxed">
              Direct two-way integrations with your existing CRMs, WhatsApp Business API, and databases.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-dark-surface border border-dark-border space-y-3">
            <div className="w-10 h-10 rounded-xl bg-deep-red/60 border border-brand-red/30 flex items-center justify-center text-brand-red">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-display font-bold text-white">Enterprise Privacy</h3>
            <p className="text-xs text-secondary-text leading-relaxed">
              Strict governance ensuring your internal data is completely secure and protected.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="rounded-3xl bg-dark-card border border-dark-border p-10 text-center space-y-6 shadow-2xl">
        <h2 className="text-3xl font-display font-bold text-white">
          Need a custom AI solution tailored to your stack?
        </h2>
        <p className="text-secondary-text max-w-xl mx-auto text-xs sm:text-sm">
          Request a custom quote or strategy session directly from our team.
        </p>
        <div className="flex justify-center">
          <Button onClick={onOpenQuoteModal} variant="primary" size="lg">
            Get a Custom Quote
          </Button>
        </div>
      </div>
    </div>
  );
}
