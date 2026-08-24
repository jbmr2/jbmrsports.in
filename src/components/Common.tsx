import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { cn } from '../utils/cn';

export const Counter = ({ value, suffix = "" }: { value: number, suffix?: string }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [inView, value]);

  return (
    <span ref={ref} className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white">
      {count}{suffix}
    </span>
  );
};

export const SectionHeading = ({ title, subtitle, centered = false }: { title: string, subtitle?: string, centered?: boolean }) => (
  <div className={cn("mb-8 sm:mb-12", centered && "text-center")}>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-3 sm:mb-4"
    >
      <div className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse" />
      {subtitle || "Broadcast Excellence"}
    </motion.div>
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-3 sm:mb-4 tracking-tight"
    >
      {title}
    </motion.h2>
    <div className={cn("h-1 w-16 sm:w-20 bg-brand-primary rounded-full", centered && "mx-auto")} />
  </div>
);
