import React from 'react';
import PricingSection from '../components/PricingSection';
import FaqAccordion from '../components/FaqAccordion';
import { ShieldCheck, Clock, CheckCircle2 } from 'lucide-react';

export default function PricingPage({ setActiveTab, onOpenQuoteModal }) {
  return (
    <div className="pt-28 md:pt-36 pb-20 space-y-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Editorial Pricing Section */}
      <PricingSection onOpenQuoteModal={onOpenQuoteModal} />

      {/* Guarantee banner */}
      <div className="rounded-3xl bg-dark-card border border-dark-border p-8 md:p-10 grid grid-cols-1 md:grid-cols-3 gap-6 shadow-2xl">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-deep-red/60 border border-brand-red/30 flex items-center justify-center text-brand-red shrink-0">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-display font-bold text-white">24-Hour Proposal Turnaround</h4>
            <p className="text-xs text-secondary-text">Receive a detailed scope & quote within 1 business day.</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-deep-red/60 border border-brand-red/30 flex items-center justify-center text-brand-red shrink-0">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-display font-bold text-white">Zero Hidden Costs</h4>
            <p className="text-xs text-secondary-text">Fixed milestone quotes with explicit deliverable scopes.</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-deep-red/60 border border-brand-red/30 flex items-center justify-center text-brand-red shrink-0">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-display font-bold text-white">100% ROI Alignment</h4>
            <p className="text-xs text-secondary-text">Targeting direct speed, productivity, and cost gains.</p>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="pt-8 space-y-8">
        <FaqAccordion />
      </div>
    </div>
  );
}
