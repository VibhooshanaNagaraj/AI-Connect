import React from 'react';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import { COMPANY_INFO } from '../data/contentData';
import { ShieldCheck, Target, Zap, Heart, Lock, CheckCircle2 } from 'lucide-react';

export default function AboutPage({ setActiveTab, onOpenBookModal }) {
  const values = [
    {
      title: "Driving Innovation Forward",
      desc: "We embrace state-of-the-art AI research and automation tools to deliver smarter, more resilient systems.",
      icon: Zap
    },
    {
      title: "Committed to Integrity & Trust",
      desc: "Transparency and uncompromising data privacy form the absolute foundation of every client engagement.",
      icon: ShieldCheck
    },
    {
      title: "Empowering Business Growth",
      desc: "We measure success exclusively through tangible client productivity gains, operational scale, and ROI.",
      icon: Target
    },
    {
      title: "Putting Customers First",
      desc: "Your strategic goals guide our technical architecture. We tailor solutions to solve your specific challenges.",
      icon: Heart
    }
  ];

  return (
    <div className="pt-28 md:pt-36 pb-20 space-y-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Editorial Hero */}
      <div className="max-w-4xl space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dark-surface border border-dark-border text-xs font-mono text-secondary-text">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-red shadow-[0_0_8px_#FF2638]" />
          <span>ABOUT AI CONNECT</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-display font-extrabold text-white tracking-tight leading-tight">
          Building Smarter Businesses With AI
        </h1>
        <p className="text-base md:text-lg text-secondary-text leading-relaxed font-normal">
          AI CONNECT helps businesses turn AI from an idea into practical, measurable systems. We manage AI strategy and workflow engineering so you can focus on leading your business.
        </p>
      </div>

      {/* Split Layout: Philosophy */}
      <div className="rounded-3xl bg-dark-card border border-dark-border p-8 md:p-14 relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-80 h-80 bg-deep-red/30 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-red">
              OUR MISSION & APPROACH
            </span>
            <h2 className="text-2xl md:text-4xl font-display font-bold text-white leading-snug">
              "We believe AI should solve operational challenges, not create technical confusion."
            </h2>
            <div className="p-4 rounded-xl bg-dark-surface border border-dark-border flex items-center gap-3">
              <Lock className="w-5 h-5 text-brand-red shrink-0" />
              <span className="text-xs text-secondary-text">
                Strict enterprise data privacy & security standards. Zero unauthorized model training.
              </span>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-5 text-secondary-text text-sm md:text-base leading-relaxed">
            <p>
              In today's competitive landscape, business owners don't have time to navigate the daily influx of new AI tools. Missing out on intelligent automation leads to operational latency, high overhead costs, and lost momentum.
            </p>
            <p>
              That's where AI CONNECT steps in as your long-term AI companion. We audit your existing workflows, construct custom automations, and seamlessly integrate them into the CRM and communication tools your team uses every day.
            </p>
          </div>
        </div>
      </div>

      {/* Values Grid */}
      <div className="space-y-8">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-mono text-brand-red uppercase tracking-widest flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-red shadow-[0_0_8px_#FF2638]" />
            OUR VALUES
          </span>
          <h2 className="text-3xl font-display font-bold text-white">
            The Principles That Drive AI CONNECT
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v) => {
            const Icon = v.icon;
            return (
              <div
                key={v.title}
                className="p-6 rounded-2xl bg-dark-card border border-dark-border hover:border-brand-red/40 transition-all duration-300 space-y-4"
              >
                <div className="w-10 h-10 rounded-xl bg-deep-red/60 border border-brand-red/30 flex items-center justify-center text-brand-red">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-display font-bold text-white">
                  {v.title}
                </h3>
                <p className="text-xs text-secondary-text leading-relaxed">
                  {v.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Leadership */}
      <div className="space-y-8">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-mono text-brand-red uppercase tracking-widest flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-red shadow-[0_0_8px_#FF2638]" />
            LEADERSHIP
          </span>
          <h2 className="text-3xl font-display font-bold text-white">
            Meet the Founders
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
          {COMPANY_INFO.founders.map((member) => (
            <div
              key={member.name}
              className="p-8 rounded-2xl bg-dark-card border border-dark-border flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-deep-red/60 text-xs font-mono text-brand-red border border-brand-red/30">
                  {member.role}
                </div>
                <h3 className="text-2xl font-display font-bold text-white">
                  {member.name}
                </h3>
                <p className="text-xs sm:text-sm text-secondary-text leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="rounded-3xl bg-dark-card border border-dark-border p-10 text-center space-y-6 shadow-2xl">
        <h2 className="text-3xl font-display font-bold text-white">
          Ready to transform your business operations?
        </h2>
        <p className="text-secondary-text max-w-xl mx-auto text-xs sm:text-sm">
          Schedule a strategy call with our team and receive a custom AI adoption roadmap.
        </p>
        <div className="flex justify-center">
          <Button onClick={onOpenBookModal} variant="primary" size="lg">
            Book a Call
          </Button>
        </div>
      </div>
    </div>
  );
}
