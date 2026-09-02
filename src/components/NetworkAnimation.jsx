import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function NetworkAnimation() {
  const [activeStream, setActiveStream] = useState(null);

  // Wavy Chaotic Incoming Stream Bezier Paths (Left Inputs)
  const incomingStreams = [
    { id: 'in1', label: 'UNSTRUCTURED DATA', path: 'M -180 -110 C -100 -130 -80 -50 0 -25', speed: '3.8s' },
    { id: 'in2', label: 'CUSTOMER REQUESTS', path: 'M -180 -35 C -120 -25 -60 -15 0 -8', speed: '3.2s' },
    { id: 'in3', label: 'MANUAL TASKS', path: 'M -180 35 C -120 25 -60 15 0 8', speed: '4.2s' },
    { id: 'in4', label: 'WORKFLOW LATENCY', path: 'M -180 110 C -100 130 -80 50 0 25', speed: '4.8s' },
  ];

  // Outgoing Parallel Clean Stream Paths (Right Outcomes)
  const outgoingStreams = [
    { id: 'out1', label: 'AUTONOMOUS WORKFLOWS', path: 'M 0 -25 L 120 -25 L 180 -25', speed: '3.0s' },
    { id: 'out2', label: 'REAL-TIME CRM SYNC', path: 'M 0 -8 L 120 -8 L 180 -8', speed: '2.5s' },
    { id: 'out3', label: '24/7 AGENT RESPONSE', path: 'M 0 8 L 120 8 L 180 8', speed: '3.2s' },
    { id: 'out4', label: 'MEASURABLE GROWTH', path: 'M 0 25 L 120 25 L 180 25', speed: '2.8s' },
  ];

  return (
    <div className="relative w-full aspect-[5/4] max-w-[500px] mx-auto flex items-center justify-center p-2 select-none">
      {/* Ambient Red Bloom Atmosphere */}
      <motion.div
        animate={{ opacity: [0.7, 0.95, 0.7], scale: [0.98, 1.03, 0.98] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute inset-0 bg-radial-gradient from-deep-red/60 via-deep-red/15 to-transparent blur-3xl pointer-events-none"
      />

      {/* Subtle Slow-Moving Background Grid */}
      <div className="absolute inset-4 border border-dark-border/40 rounded-2xl pointer-events-none overflow-hidden">
        <motion.div
          animate={{ x: [0, 10, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          className="w-full h-full"
        >
          <div className="w-full h-[1px] bg-dark-border/20 absolute top-1/3" />
          <div className="w-full h-[1px] bg-dark-border/20 absolute top-2/3" />
          <div className="h-full w-[1px] bg-dark-border/20 absolute left-1/3" />
          <div className="h-full w-[1px] bg-dark-border/20 absolute left-2/3" />
        </motion.div>
      </div>

      {/* SVG Flow Canvas */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="-200 -160 400 320">
        <defs>
          <filter id="stream-red-glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="center-point-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* 1. INCOMING DATA STREAMS */}
        {incomingStreams.map((stream) => {
          const isHovered = activeStream === stream.id;
          return (
            <g key={stream.id} onMouseEnter={() => setActiveStream(stream.id)} onMouseLeave={() => setActiveStream(null)}>
              <path
                d={stream.path}
                fill="none"
                stroke={isHovered ? '#FF2638' : 'rgba(255, 38, 56, 0.4)'}
                strokeWidth={isHovered ? '2' : '1.2'}
                strokeDasharray={isHovered ? 'none' : '4 3'}
                filter={isHovered ? 'url(#stream-red-glow)' : undefined}
                className="transition-all duration-300 pointer-events-auto cursor-pointer"
              />

              <circle
                cx="-180"
                cy={stream.id === 'in1' ? -110 : stream.id === 'in2' ? -35 : stream.id === 'in3' ? 35 : 110}
                r="2.5"
                fill="#FF2638"
                className="animate-pulse"
              />

              <circle r="2" fill="#FF4050" filter="url(#stream-red-glow)">
                <animateMotion path={stream.path} dur={stream.speed} repeatCount="indefinite" />
              </circle>

              <circle r="1.2" fill="#FFFFFF" opacity="0.9">
                <animateMotion path={stream.path} dur={stream.speed} begin="1.4s" repeatCount="indefinite" />
              </circle>
            </g>
          );
        })}

        {/* 2. CENTER INTELLIGENCE TRANSFORMATION ZONE */}
        <g transform="translate(0, 0)">
          {/* Layered Outer Framework */}
          <rect
            x="-36"
            y="-46"
            width="72"
            height="92"
            rx="8"
            fill="#10090D"
            stroke="#292126"
            strokeWidth="1.2"
            opacity="0.9"
          />

          {/* Internal Structural Alignment Lines */}
          <line x1="-30" y1="-20" x2="30" y2="-20" stroke="#292126" strokeWidth="0.8" strokeDasharray="2 2" />
          <line x1="-30" y1="0" x2="30" y2="0" stroke="#FF2638" strokeWidth="1" opacity="0.4" />
          <line x1="-30" y1="20" x2="30" y2="20" stroke="#292126" strokeWidth="0.8" strokeDasharray="2 2" />
          <line x1="0" y1="-40" x2="0" y2="40" stroke="#292126" strokeWidth="0.8" strokeDasharray="2 2" />

          {/* Central Pulsing Intelligence Light Point */}
          <motion.circle
            cx="0"
            cy="0"
            r="4"
            fill="#FF2638"
            filter="url(#center-point-glow)"
            animate={{ scale: [1, 1.3, 1], opacity: [0.75, 1, 0.75] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          />
          <circle cx="0" cy="0" r="1.5" fill="#FFFFFF" />

          {/* Corner Alignment Indicators */}
          <circle cx="-30" cy="-40" r="1" fill="#FF2638" opacity="0.7" />
          <circle cx="30" cy="-40" r="1" fill="#FF2638" opacity="0.7" />
          <circle cx="-30" cy="40" r="1" fill="#FF2638" opacity="0.7" />
          <circle cx="30" cy="40" r="1" fill="#FF2638" opacity="0.7" />
        </g>

        {/* 3. OUTGOING ORGANIZED STREAMS */}
        {outgoingStreams.map((stream) => {
          const isHovered = activeStream === stream.id;
          return (
            <g key={stream.id} onMouseEnter={() => setActiveStream(stream.id)} onMouseLeave={() => setActiveStream(null)}>
              <line
                x1="36"
                y1={stream.id === 'out1' ? -25 : stream.id === 'out2' ? -8 : stream.id === 'out3' ? 8 : 25}
                x2="180"
                y2={stream.id === 'out1' ? -25 : stream.id === 'out2' ? -8 : stream.id === 'out3' ? 8 : 25}
                stroke={isHovered ? '#FF4050' : '#FF2638'}
                strokeWidth={isHovered ? '2' : '1.5'}
                opacity={isHovered ? '1' : '0.85'}
                filter="url(#stream-red-glow)"
                className="transition-all duration-300 pointer-events-auto cursor-pointer"
              />

              <circle
                cx="180"
                cy={stream.id === 'out1' ? -25 : stream.id === 'out2' ? -8 : stream.id === 'out3' ? 8 : 25}
                r="3"
                fill="#FF4050"
                filter="url(#stream-red-glow)"
                className="animate-pulse"
              />

              <circle r="2" fill="#FFFFFF" filter="url(#stream-red-glow)">
                <animateMotion path={stream.path} dur={stream.speed} repeatCount="indefinite" />
              </circle>
            </g>
          );
        })}
      </svg>

      {/* Floating System Badges */}
      <div className="absolute top-2 left-4 text-[9px] font-mono text-secondary-text flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-brand-red opacity-60" />
        <span>BUSINESS INPUTS</span>
      </div>

      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 rounded-md bg-dark-surface border border-dark-border text-[9px] font-mono font-bold text-white shadow-red-glow flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse shadow-[0_0_6px_#FF2638]" />
        <span>INTELLIGENCE TRANSFORMATION</span>
      </div>

      <div className="absolute top-2 right-4 text-[9px] font-mono text-brand-red font-semibold flex items-center gap-1.5">
        <span>AUTOMATED OUTCOMES</span>
        <span className="w-1.5 h-1.5 rounded-full bg-brand-red shadow-[0_0_6px_#FF2638]" />
      </div>
    </div>
  );
}
