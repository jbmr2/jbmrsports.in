import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Tv, 
  Globe, 
  Phone,
  Camera,
  Mic2,
  Layout,
  RotateCcw,
  Video,
  Users,
  Trophy,
  Mail,
  CheckCircle2,
  MapPin,
  Rocket,
  Target,
  BarChart3,
  Zap
} from 'lucide-react';
import { useSiteContent } from '../context/SiteContext';

const iconMap = {
  Camera,
  Tv,
  Mic2,
  Layout,
  RotateCcw,
  Video,
  Users,
  Trophy,
  Phone,
  Mail,
  CheckCircle2,
  Globe,
  MapPin,
  Rocket,
  Target,
  BarChart3,
  Zap,
};

export const Hero = ({ currentState = '', startTyping = true, onTypingComplete }: { currentState?: string, startTyping?: boolean, onTypingComplete?: () => void }) => {
  const { content } = useSiteContent();
  const [typedLine1, setTypedLine1] = useState('');
  const [typedLine2, setTypedLine2] = useState('');
  const [typingPhase, setTypingPhase] = useState<'idle' | 'line1' | 'line2' | 'done'>('idle');

  const displayTitleLine1 = currentState ? `TOP BROADCASTING IN` : content.hero.titleLine1;
  const displayTitleHighlight = currentState ? currentState.toUpperCase() : content.hero.titleHighlight;
  const displayDescription = currentState 
    ? `Professional 18-camera 4K cricket, football, and hockey broadcasting services in ${currentState}. JBMR Sports is your premier production partner with 6+ years of experience delivering national-level standards.`
    : content.hero.description;

  useEffect(() => {
    if (startTyping && typingPhase === 'idle') {
      setTypingPhase('line1');
    }
  }, [startTyping, typingPhase]);

  useEffect(() => {
    setTypedLine1('');
    setTypedLine2('');
    setTypingPhase(startTyping ? 'line1' : 'idle');
  }, [displayTitleLine1, displayTitleHighlight, startTyping]);

  useEffect(() => {
    const line1 = displayTitleLine1;
    const line2 = displayTitleHighlight;
    const totalChars = line1.length + line2.length;
    // Smooth natural typing speed (~3.5 seconds total typing time)
    const speed = totalChars > 0 ? Math.max(45, Math.floor(3500 / totalChars)) : 60;

    if (typingPhase === 'line1') {
      if (typedLine1.length < line1.length) {
        const timer = window.setTimeout(() => {
          setTypedLine1(line1.slice(0, typedLine1.length + 1));
        }, speed);
        return () => window.clearTimeout(timer);
      }
      // Brief natural pause between line 1 and line 2
      const timer = window.setTimeout(() => setTypingPhase('line2'), 250);
      return () => window.clearTimeout(timer);
    }

    if (typingPhase === 'line2') {
      if (typedLine2.length < line2.length) {
        const timer = window.setTimeout(() => {
          setTypedLine2(line2.slice(0, typedLine2.length + 1));
        }, speed);
        return () => window.clearTimeout(timer);
      }
      // Line 2 completed - mark typing as done
      const timer = window.setTimeout(() => setTypingPhase('done'), 200);
      return () => window.clearTimeout(timer);
    }
  }, [typingPhase, typedLine1, typedLine2, displayTitleLine1, displayTitleHighlight]);

  useEffect(() => {
    if (typingPhase === 'done' && onTypingComplete) {
      // Wait 2.5 seconds so the user can read the complete full text before transitioning to video
      const timer = window.setTimeout(() => {
        onTypingComplete();
      }, 2500);
      return () => window.clearTimeout(timer);
    }
  }, [typingPhase, onTypingComplete]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden stadium-glow">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={content.hero.backgroundImage}
          alt={`Live Cricket Match Stadium in ${currentState || 'India'} - Professional Sports Broadcasting Background`} 
          className="w-full h-full object-cover opacity-50 scale-105"
          referrerPolicy="no-referrer"
          loading="eager"
          decoding="async"
          width="1280"
          height="720"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 via-brand-dark/40 to-brand-dark" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-transparent to-brand-dark" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black tracking-tight text-white mb-4 sm:mb-6 leading-tight uppercase break-words"
        >
          {typedLine1 || <span className="opacity-0">{displayTitleLine1}</span>}
          {typingPhase === 'line1' && <span className="inline-block ml-1 animate-pulse">|</span>}
          <br />
          <span className="text-brand-primary block mt-1 sm:mt-2">
            {typedLine2 || <span className="opacity-0">{displayTitleHighlight}</span>}
          </span>
          {typingPhase === 'line2' && <span className="inline-block ml-1 animate-pulse">|</span>}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-8 sm:mb-10 font-medium leading-relaxed px-4"
        >
          {displayDescription}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-3 sm:gap-6 md:gap-12 mb-8 sm:mb-12"
        >
          {content.hero.stats.map((stat, i) => {
            const StatIcon = iconMap[stat.icon as keyof typeof iconMap] || Tv;
            return (
            <div key={i} className="flex items-center gap-1.5 sm:gap-2 text-white/40">
              <StatIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-primary shrink-0" />
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider sm:tracking-widest">{stat.label}</span>
            </div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 w-full max-w-lg sm:max-w-none mx-auto"
        >
          <a href="https://jbmrsports.com" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto group bg-brand-primary hover:bg-brand-primary-hover text-white px-6 py-3.5 sm:px-8 sm:py-4 md:px-10 md:py-5 rounded-full font-black text-sm sm:text-base md:text-lg transition-all flex items-center justify-center gap-2.5 sm:gap-3 shadow-[0_0_30px_rgba(14,165,233,0.3)] hover:scale-105 active:scale-95 uppercase tracking-wider whitespace-nowrap">
            VISIT OTT NETWORK
            <Globe className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
          </a>
          <a href="tel:+917988879238" className="w-full sm:w-auto bg-white/5 hover:bg-white/10 text-white border border-white/20 px-6 py-3.5 sm:px-8 sm:py-4 md:px-10 md:py-5 rounded-full font-black text-sm sm:text-base md:text-lg transition-all backdrop-blur-md flex items-center justify-center gap-2.5 sm:gap-3 hover:scale-105 active:scale-95 uppercase tracking-wider whitespace-nowrap">
            {content.hero.primaryCta}
            <Phone className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
          </a>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};
