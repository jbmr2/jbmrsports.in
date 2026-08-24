import React, { useEffect, useMemo } from 'react';
import { motion } from 'motion/react';
import { cn } from '../utils/cn';

export const IndependenceSplash = ({ onComplete }: { onComplete: () => void }) => {
  useEffect(() => {
    // Show splash for 4 seconds then auto-dismiss
    const timer = setTimeout(() => {
      onComplete();
    }, 4000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  // Calculate the number of years dynamically
  const currentYear = new Date().getFullYear();
  const independenceYear = 1947;
  const yearsOfIndependence = currentYear - independenceYear + 1;

  const getOrdinalSuffix = (i: number) => {
    const j = i % 10;
    const k = i % 100;
    if (j === 1 && k !== 11) return "st";
    if (j === 2 && k !== 12) return "nd";
    if (j === 3 && k !== 13) return "rd";
    return "th";
  };

  // Generate random particles (tricolor confetti)
  const particles = useMemo(() => {
    const colors = ['#FF9933', '#FFFFFF', '#138808'];
    return Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      color: colors[i % colors.length],
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 2,
      duration: 2 + Math.random() * 3,
      size: 4 + Math.random() * 8,
      yOffset: Math.random() * 100
    }));
  }, []);

  // Text Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 10 }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[1000] flex flex-col items-center justify-center bg-brand-navy overflow-hidden perspective-1000"
    >
      {/* Skip Button */}
      <button
        onClick={onComplete}
        className="absolute top-6 right-6 z-50 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white border border-white/20 text-xs font-black uppercase tracking-widest backdrop-blur-md transition-all shadow-lg hover:scale-105"
      >
        Skip ✕
      </button>

      {/* Dynamic Background Pulses */}
      <motion.div 
        animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.1, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vh] rounded-full bg-[#FF9933]/20 blur-[100px] pointer-events-none" 
      />
      <motion.div 
        animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.1, 1] }}
        transition={{ duration: 4, delay: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-20%] right-[-10%] w-[70vw] h-[70vh] rounded-full bg-[#138808]/20 blur-[100px] pointer-events-none" 
      />

      {/* Floating Particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ opacity: 0, y: `100vh`, x: 0 }}
          animate={{ 
            opacity: [0, 1, 1, 0], 
            y: `-20vh`,
            x: Math.random() > 0.5 ? 50 : -50,
            rotate: 360 
          }}
          transition={{ 
            duration: p.duration, 
            delay: p.delay, 
            repeat: Infinity,
            ease: "linear" 
          }}
          className="absolute rounded-full shadow-[0_0_10px_currentColor]"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            color: p.color,
          }}
        />
      ))}

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center px-6 text-center mt-[-5vh]">
        
        {/* Years of Independence Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0, rotateX: 90 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ duration: 1, delay: 0.5, type: "spring", bounce: 0.5 }}
          className="mb-8 md:mb-12"
        >
          <div className="inline-flex items-center justify-center px-4 py-2 sm:px-8 sm:py-3 rounded-full border border-[#FF9933]/30 bg-white/5 backdrop-blur-md shadow-[0_0_30px_rgba(255,153,51,0.2)]">
            <span className="text-white font-black text-sm sm:text-xl md:text-3xl tracking-[0.1em] sm:tracking-[0.2em] uppercase whitespace-nowrap">
              {yearsOfIndependence}<span className="text-[#FF9933] text-[10px] sm:text-sm md:text-lg align-top ml-0.5 sm:ml-1 mr-1 sm:mr-2">{getOrdinalSuffix(yearsOfIndependence)}</span> 
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF9933] via-white to-[#138808]">Year of Freedom</span>
            </span>
          </div>
        </motion.div>

        {/* Ashoka Chakra */}
        <motion.div
          initial={{ scale: 0, opacity: 0, rotate: -270 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ duration: 1.5, delay: 0.2, type: "spring", bounce: 0.4 }}
          className="mb-8 sm:mb-12 relative flex items-center justify-center group"
        >
          <div className="w-28 h-28 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full border-[6px] sm:border-[8px] border-[#000080] flex items-center justify-center animate-[spin_8s_linear_infinite] shadow-[0_0_40px_rgba(0,0,128,0.5)]">
            <div 
              className="w-full h-full rounded-full opacity-80"
              style={{
                background: 'repeating-conic-gradient(from 0deg, transparent 0deg, transparent 6deg, #000080 6deg, #000080 9deg)'
              }}
            />
          </div>
          <div className="absolute w-3 h-3 sm:w-5 sm:h-5 bg-[#000080] rounded-full shadow-[0_0_10px_rgba(0,0,128,1)]" />
        </motion.div>

        {/* Staggered Text */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-1 sm:gap-2 md:gap-4 w-full"
        >
          <motion.h1 variants={itemVariants} className="text-[14vw] sm:text-7xl md:text-8xl lg:text-9xl font-display font-black uppercase tracking-widest leading-none text-transparent bg-clip-text bg-gradient-to-r from-[#FF9933] to-[#FF9933] drop-shadow-[0_0_25px_rgba(255,153,51,0.6)]">
            Happy
          </motion.h1>
          <motion.h1 variants={itemVariants} className="text-[9.5vw] sm:text-6xl md:text-7xl lg:text-8xl font-display font-black uppercase tracking-widest leading-none text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">
            Independence
          </motion.h1>
          <motion.h1 variants={itemVariants} className="text-[14vw] sm:text-7xl md:text-8xl lg:text-9xl font-display font-black uppercase tracking-widest leading-none text-transparent bg-clip-text bg-gradient-to-r from-[#138808] to-[#138808] drop-shadow-[0_0_25px_rgba(19,136,8,0.6)]">
            Day
          </motion.h1>
        </motion.div>

        {/* Branding */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="mt-10 sm:mt-16 overflow-hidden relative"
        >
          <p className="text-white/60 tracking-[0.4em] uppercase text-sm md:text-lg font-bold relative z-10">
            JBMR Sports
          </p>
          {/* Shimmer Effect */}
          <motion.div 
            animate={{ left: ['-100%', '200%'] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 3 }}
            className="absolute top-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg] z-20"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};
