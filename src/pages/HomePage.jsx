import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import NetworkAnimation from '../components/NetworkAnimation';
import EditorialServices from '../components/EditorialServices';
import WhyAiConnect from '../components/WhyAiConnect';
import ProcessTimeline from '../components/ProcessTimeline';
import IndustryWork from '../components/IndustryWork';
import AboutSection from '../components/AboutSection';
import PricingSection from '../components/PricingSection';
import FaqAccordion from '../components/FaqAccordion';
import FinalCta from '../components/FinalCta';
import { FLOW_STEPS } from '../data/contentData';

export default function HomePage({ setActiveTab, onOpenBookModal, onOpenQuoteModal }) {
  return (
    <div className="space-y-24 sm:space-y-32 md:space-y-40 pb-20 pt-28 sm:pt-36">
      {/* ==================================================
          1. HERO SECTION — CINEMATIC DARK ATMOSPHERE
         ================================================== */}
      <section id="home" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Subtle Dark Red Atmospheric Glow Behind Hero */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-hero-glow blur-3xl pointer-events-none opacity-80" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          {/* Left Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-dark-surface border border-dark-border text-xs font-mono text-secondary-text shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-red shadow-[0_0_8px_#FF2638] animate-pulse" />
              <span className="font-semibold text-white tracking-widest">INTELLIGENT AI SOLUTIONS</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold text-white tracking-tight leading-[1.08]">
              Connect Your Business <br className="hidden sm:inline" />
              <span className="text-secondary-text font-normal">With Intelligent AI.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-secondary-text max-w-xl leading-relaxed font-normal">
              Turn repetitive work into intelligent systems that help your business move faster.
            </p>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Button onClick={onOpenBookModal} variant="primary" size="lg">
                Book a Call
              </Button>
              <Button
                onClick={() => {
                  const el = document.getElementById('services');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                  else setActiveTab('services');
                }}
                variant="secondary"
                size="lg"
              >
                Explore Services
              </Button>
            </div>
          </motion.div>

          {/* Right Hero Visual: Connection Network */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <NetworkAnimation />
          </motion.div>
        </div>
      </section>

      {/* ==================================================
          2. SECTION — WHAT WE DO
         ================================================== */}
      <section id="what-we-do" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-dark-card border border-dark-border p-8 sm:p-14 space-y-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-deep-red/20 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl space-y-4 relative z-10">
            <span className="text-xs font-mono text-brand-red uppercase tracking-widest flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-red shadow-[0_0_8px_#FF2638]" />
              WHAT WE DO
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
              AI That Works <br />
              <span className="text-secondary-text font-normal">For Your Business.</span>
            </h2>
            <p className="text-base sm:text-lg text-secondary-text leading-relaxed font-normal">
              We help businesses identify the right AI opportunities, build practical automation, and continuously improve their systems.
            </p>
          </div>

          {/* Visual Flow: STRATEGY → AUTOMATION → GROWTH */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-dark-border relative z-10">
            {FLOW_STEPS.map((step, idx) => (
              <div key={step.step} className="p-6 rounded-2xl bg-dark-surface border border-dark-border space-y-3 relative group hover:border-brand-red/40 transition-all">
                <div className="flex items-center justify-between text-xs font-mono font-bold text-brand-red">
                  <span>{step.step}</span>
                  {idx < FLOW_STEPS.length - 1 && (
                    <span className="hidden md:inline text-secondary-muted">→</span>
                  )}
                </div>
                <h3 className="text-xl font-display font-bold text-white uppercase tracking-wider">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-secondary-text leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
          3. SECTION — SERVICES ("What We Build")
         ================================================== */}
      <section id="services" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <EditorialServices onSelectService={onOpenQuoteModal} />
      </section>

      {/* ==================================================
          4. SECTION — WHY AI CONNECT
         ================================================== */}
      <section id="why-us" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <WhyAiConnect />
      </section>

      {/* ==================================================
          5. SECTION — PROCESS ("From Idea To Impact.")
         ================================================== */}
      <section id="process" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProcessTimeline />
      </section>

      {/* ==================================================
          6. SECTION — WORK & INDUSTRIES
         ================================================== */}
      <section id="work" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <IndustryWork onRequestQuote={onOpenQuoteModal} />
      </section>

      {/* ==================================================
          7. SECTION — ABOUT
         ================================================== */}
      <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AboutSection onLearnMore={() => setActiveTab('about')} />
      </section>

      {/* ==================================================
          8. SECTION — PRICING
         ================================================== */}
      <section id="pricing" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PricingSection onOpenQuoteModal={onOpenQuoteModal} />
      </section>

      {/* ==================================================
          9. SECTION — FAQ
         ================================================== */}
      <section id="faq" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FaqAccordion />
      </section>

      {/* ==================================================
          10. FINAL CTA
         ================================================== */}
      <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FinalCta onBookCall={onOpenBookModal} />
      </section>
    </div>
  );
}
