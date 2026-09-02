import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, ArrowRight } from 'lucide-react';

export default function Chatbot({ onNavigate, onOpenBookModal, onOpenQuoteModal }) {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: `Hello, I'm NEXA.\nHow can I help you today?`,
      quickButtons: true
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const quickActions = [
    { label: 'Explore Services', key: 'services', sectionId: 'services' },
    { label: 'Why AI CONNECT?', key: 'why', sectionId: 'why-us' },
    { label: 'View Pricing', key: 'pricing', sectionId: 'pricing' },
    { label: 'Book a Call', key: 'book', action: 'book-modal' }
  ];

  const handleSend = (userText) => {
    const textToSend = userText || input;
    if (!textToSend.trim()) return;

    const userMsg = { id: Date.now(), sender: 'user', text: textToSend };
    setMessages((prev) => [...prev, userMsg]);
    if (!userText) setInput('');
    setIsTyping(true);

    setTimeout(() => {
      let botResponse = '';
      const lower = textToSend.toLowerCase();

      if (lower.includes('service') || lower.includes('explore')) {
        botResponse = `AI CONNECT builds custom AI solutions across three core pillars:\n\n01 AI Strategy — Clear AI direction built around your business goals.\n02 AI Partnership — Ongoing guidance, optimization and support.\n03 AI Automation — Intelligent workflows and autonomous agents.`;
      } else if (lower.includes('why') || lower.includes('benefit') || lower.includes('growth')) {
        botResponse = `AI CONNECT delivers practical ROI:\n\n• Faster Operations\n• Better Customer Experience\n• 24/7 Availability\n• Reduced Repetitive Work\n• Smarter Decisions\n• Built to Scale`;
      } else if (lower.includes('price') || lower.includes('pricing') || lower.includes('quote') || lower.includes('cost')) {
        botResponse = `Every business is different. We create solutions based on your specific goals, workflows and requirements. Request a custom quote anytime.`;
      } else if (lower.includes('book') || lower.includes('call') || lower.includes('consult')) {
        botResponse = `Click 'Book a Call' to schedule an AI strategy consultation directly with our engineering team.`;
      } else {
        botResponse = `AI CONNECT connects business operations with practical AI. How else can NEXA assist your business goals?`;
      }

      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, sender: 'bot', text: botResponse, quickButtons: true }
      ]);
      setIsTyping(false);
    }, 500);
  };

  const handleActionClick = (action) => {
    if (action.action === 'book-modal') {
      handleSend('I want to book a strategy call');
      if (onOpenBookModal) onOpenBookModal();
    } else if (action.sectionId) {
      handleSend(`Tell me about ${action.label}`);
      const el = document.getElementById(action.sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else if (onNavigate) {
        onNavigate(action.key);
      }
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Floating Invitation Pill Above Launcher */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: [0, -4, 0] }}
            exit={{ opacity: 0, y: 8 }}
            transition={{
              y: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
              opacity: { duration: 0.3 }
            }}
            onClick={() => setIsOpen(true)}
            className="mb-2 px-3 py-1 rounded-full bg-dark-card border border-dark-border text-[10px] font-mono font-bold tracking-wider text-white shadow-red-glow flex items-center gap-2 cursor-pointer hover:border-brand-red/60 transition-all select-none"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-red shadow-[0_0_6px_#FF2638] animate-pulse shrink-0" />
            <span>LET'S CONNECT</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Tooltip on Hover */}
      <AnimatePresence>
        {!isOpen && showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            className="mb-1 px-2.5 py-1 rounded-md bg-dark-surface border border-dark-border text-[10px] font-mono text-secondary-text shadow-md flex items-center gap-1.5"
          >
            <span>NEXA — AI Assistant</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Launcher Button */}
      {!isOpen && (
        <motion.button
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          onClick={() => setIsOpen(true)}
          className="relative w-12 h-12 rounded-full bg-dark-surface/95 border border-brand-red/40 flex items-center justify-center shadow-red-glow transition-all backdrop-blur-md group"
        >
          <div className="w-5 h-5 flex items-center justify-center text-brand-red relative">
            <svg viewBox="0 0 24 24" className="w-4.5 h-4.5 fill-none stroke-current stroke-[2.2] group-hover:scale-105 transition-transform">
              <path d="M6 18V6L18 18V6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="absolute inset-0 rounded-full border border-brand-red/40 animate-pulse" />
          </div>

          <span className="absolute top-0 right-0 w-2.5 h-2.5 rounded-full bg-brand-red border-2 border-dark-surface shadow-[0_0_6px_#FF2638]" />
        </motion.button>
      )}

      {/* Premium NEXA Product Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.92, transformOrigin: 'bottom right' }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{ type: 'spring', stiffness: 380, damping: 28 }}
            className="w-[90vw] sm:w-[360px] h-[480px] rounded-2xl bg-dark-surface border border-dark-border shadow-red-glow flex flex-col overflow-hidden backdrop-blur-xl"
          >
            {/* Header */}
            <div className="p-4 px-5 bg-dark-card border-b border-dark-border flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-deep-red/80 border border-brand-red/40 flex items-center justify-center text-brand-red shadow-sm">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-[2.5]">
                    <path d="M6 18V6L18 18V6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs font-display font-bold text-white tracking-tight flex items-center gap-2">
                    <span>NEXA</span>
                    <span className="text-[10px] font-mono text-brand-red font-medium flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-red shadow-[0_0_6px_#FF2638]" />
                      Online
                    </span>
                  </h4>
                  <p className="text-[10px] font-mono text-secondary-text">Intelligent AI Assistant</p>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="w-7 h-7 rounded-lg bg-dark-surface border border-dark-border text-secondary-text hover:text-white flex items-center justify-center transition-colors"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Messages Body */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 text-xs font-sans">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                >
                  <div
                    className={`max-w-[88%] p-3 rounded-xl leading-relaxed whitespace-pre-line ${
                      msg.sender === 'user'
                        ? 'bg-brand-red text-white font-medium rounded-br-none shadow-red-glow'
                        : 'bg-dark-card border border-dark-border text-slate-200 rounded-bl-none'
                    }`}
                  >
                    {msg.text}
                  </div>

                  {/* Command Chips */}
                  {msg.quickButtons && msg.sender === 'bot' && (
                    <div className="mt-3 flex flex-wrap gap-1.5 max-w-[95%]">
                      {quickActions.map((act) => (
                        <button
                          key={act.key}
                          onClick={() => handleActionClick(act)}
                          className="px-2.5 py-1 rounded-md bg-dark-card hover:bg-dark-hover border border-dark-border hover:border-brand-red text-[10px] font-mono text-secondary-text hover:text-white transition-all flex items-center gap-1 shadow-sm"
                        >
                          <span className="text-brand-red">&gt;</span>
                          <span>{act.label}</span>
                          <ArrowRight className="w-2.5 h-2.5 text-secondary-text" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Three-Dot Pulsing Typing Indicator */}
              {isTyping && (
                <div className="flex items-center gap-2 text-secondary-text bg-dark-card px-3 py-2 rounded-xl rounded-bl-none border border-dark-border w-max text-[11px] font-mono">
                  <span className="text-secondary-text">NEXA</span>
                  <div className="flex items-center gap-1 pl-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-bounce" />
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-bounce [animation-delay:0.15s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-bounce [animation-delay:0.3s]" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Bar */}
            <div className="p-3 bg-dark-card border-t border-dark-border flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask NEXA..."
                className="flex-1 bg-dark-surface border border-dark-border rounded-lg px-3 py-2 text-xs text-white placeholder-secondary-muted focus:outline-none focus:border-brand-red"
              />
              <button
                onClick={() => handleSend()}
                className="w-8 h-8 rounded-lg bg-brand-red text-white flex items-center justify-center hover:bg-brand-red-bright transition-colors shrink-0 shadow-red-glow"
              >
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
