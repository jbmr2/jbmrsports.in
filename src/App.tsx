/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { 
  Camera, 
  Tv, 
  Mic2, 
  Layout, 
  RotateCcw, 
  Drone, 
  Video, 
  Users, 
  Trophy, 
  Eye, 
  Phone, 
  Mail, 
  MessageSquare, 
  ChevronRight, 
  Play, 
  CheckCircle2,
  Globe,
  MapPin,
  Clock,
  Menu,
  X,
  ArrowRight,
  Zap,
  Instagram,
  Facebook,
  Rocket,
  Plus,
  Minus,
  Target,
  BarChart3,
} from 'lucide-react';
import googleReviewsData from './reviews.json';

// Constants & Utilities
import { cn } from './utils/cn';
import { 
  headerLogo, 
  internationalShowreel, 
  lokeshImage, 
  deepakImage, 
  pankajImage, 
  dharamImage, 
  satishImage, 
  tinuImage, 
  sahilImage, 
  keshavImage, 
  nageshImage, 
  rishabhImage,
  serviceBroadcastTech,
  serviceScoringAnalytics,
  serviceCommentary,
  serviceReplay,
  serviceStreaming,
  serviceEventManagement,
  imaging16Cam,
  equipmentAudioSystems,
  equipmentStreamingInfra
} from './constants/assets';
import { defaultSiteContent, type SiteContent } from './constants/siteContent';
import { states } from './constants/states';

// Context
import { SiteContentProvider, useSiteContent } from './context/SiteContext';

// Components
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Counter, SectionHeading } from './components/Common';
import { PageSkeleton } from './components/Skeleton';
import { LazyImage } from './components/LazyImage';
import { CricketProduction } from './components/CricketProduction';
import { AuctionProduction } from './components/AuctionProduction';
import { LmsSuperSeries } from './components/LmsSuperSeries';
import { IndependenceSplash } from './components/IndependenceSplash';

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

// --- Sub-page Layout Wrapper ---
const PageWrapper = ({ children, title, subtitle }: { children: React.ReactNode, title?: string, subtitle?: string }) => (
  <div className="min-h-screen bg-brand-dark text-white pt-32 pb-16 relative overflow-hidden">
    <div className="absolute inset-0 opacity-10 pointer-events-none">
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-primary rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-brand-primary rounded-full blur-[150px]" />
    </div>
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      {(title || subtitle) && (
        <div className="mb-16">
          <SectionHeading title={title || ""} subtitle={subtitle} />
        </div>
      )}
      {children}
    </div>
  </div>
);


const FAQItem = ({ question, answer }: { question: string; answer: string; key?: any }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="border-b border-white/10"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group transition-all"
      >
        <span className={cn(
          "text-lg md:text-xl font-bold transition-colors",
          isOpen ? "text-brand-primary" : "text-white group-hover:text-brand-primary/80"
        )}>
          {question}
        </span>
        <div className={cn(
          "w-8 h-8 rounded-full flex items-center justify-center border transition-all",
          isOpen ? "bg-brand-primary border-brand-primary text-white" : "border-white/20 text-white/40 group-hover:border-brand-primary group-hover:text-brand-primary"
        )}>
          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-white/60 leading-relaxed max-w-4xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ = () => {
  const { content } = useSiteContent();
  return (
    <section id="faq" className="py-24 px-6 bg-brand-navy relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <SectionHeading 
          title={content.faq.title}
          subtitle={content.faq.subtitle}
          centered
        />
        <div className="mt-12">
          {content.faq.items.map((item, i) => (
            <FAQItem key={i} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Sections ---



const OTTShowcase = () => {
  const { content } = useSiteContent();
  const benefits = [
    { icon: 'Tv', title: 'Multi-device support', desc: 'Watch on Mobile, Web, and Smart TVs.' },
    { icon: 'Zap', title: 'Low-latency 4K streaming', desc: 'Ultra-fast delivery for real-time engagement.' },
    { icon: 'BarChart3', title: 'AI-driven match analytics', desc: 'Real-time stats and insights for every match.' },
  ];

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-brand-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-primary rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-primary rounded-full blur-[120px]" />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading 
          title="Our Proprietary Streaming Network"
          subtitle="Global Network Strategy"
          centered
        />
        
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <p className="text-base sm:text-lg md:text-xl text-white/60 leading-relaxed">
            We offer an end-to-end broadcasting ecosystem. From 4K production to global delivery on our dedicated OTT platform, <a href="https://jbmrsports.com" className="text-brand-primary font-bold hover:underline">jbmrsports.com</a>.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {benefits.map((benefit, i) => {
            const Icon = iconMap[benefit.icon as keyof typeof iconMap] || Tv;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6 sm:p-8 rounded-[28px] sm:rounded-[40px] border-white/5 hover:border-brand-primary/30 transition-all group"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-brand-primary/10 flex items-center justify-center mb-5 sm:mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-brand-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 uppercase">{benefit.title}</h3>
                <p className="text-white/40 text-xs sm:text-sm leading-relaxed">{benefit.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};


const Showreel = ({ autoStart = false }: { autoStart?: boolean }) => {
  const { content } = useSiteContent();
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasAutoStarted, setHasAutoStarted] = useState(false);

  useEffect(() => {
    if (autoStart && !hasAutoStarted) {
      const timer = setTimeout(() => {
        setIsPlaying(true);
        setHasAutoStarted(true);
        const el = document.getElementById('showreel');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 800); // Wait for splash screen to fade out
      return () => clearTimeout(timer);
    }
  }, [autoStart, hasAutoStarted]);

  return (
    <section id="showreel" className="py-16 sm:py-24 px-4 sm:px-6 bg-brand-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionHeading 
          title={content.showreel.title}
          subtitle={content.showreel.subtitle}
          centered
        />
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative group aspect-video rounded-[20px] sm:rounded-[30px] md:rounded-[40px] overflow-hidden border border-white/10 shadow-2xl bg-brand-navy mx-auto w-full max-w-5xl"
        >
          {!isPlaying ? (
            <div className="absolute inset-0 z-10 flex items-center justify-center">
              <video
                src={content.showreel.videoUrl}
                title="JBMR Sports Cricket & Sports Broadcasting Work Showreel"
                aria-label="JBMR Sports Broadcast Production Work Video"
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                muted
                loop
                autoPlay
                playsInline
              />
              <div className="absolute inset-0 bg-brand-dark/40 group-hover:bg-brand-dark/20 transition-colors" />
              
              <button 
                onClick={() => setIsPlaying(true)}
                aria-label="Play Work Showreel Video"
                className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-brand-primary rounded-full flex items-center justify-center shadow-2xl shadow-brand-primary/40 transform group-hover:scale-110 transition-all duration-300"
              >
                <Play className="text-white fill-current w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 ml-1" />
                <div className="absolute inset-0 rounded-full bg-brand-primary animate-ping opacity-20" />
              </button>
              
            </div>
          ) : (
            <div className="absolute inset-0 bg-black">
              <video
                src={content.showreel.videoUrl}
                title="JBMR Sports Cricket & Sports Broadcasting Work Showreel"
                aria-label="JBMR Sports Broadcast Production Work Video"
                className="w-full h-full"
                controls
                autoPlay
              />
              <button 
                onClick={() => setIsPlaying(false)}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 w-8 h-8 sm:w-10 sm:h-10 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

const About = ({ currentState = '' }: { currentState?: string }) => {
  const { content } = useSiteContent();
  
  const displayTitle = currentState 
    ? `Premier Sports Broadcasting & Production in ${currentState}`
    : content.about.title;
    
  const displaySubtitle = currentState 
    ? `Serving all districts of ${currentState}`
    : content.about.subtitle;

  const displayDescription1 = currentState
    ? `JBMR Sports provides world-class sports broadcasting services across ${currentState}. From major tournaments to local championships, we deliver professional 18-camera 4K coverage that meets international standards.`
    : content.about.description1;

  const displayDescription2 = currentState
    ? `Headquartered in Gurugram, our fully mobile production unit serves ${currentState} with zero-latency streaming and high-end broadcast technology integration.`
    : content.about.description2;

  return (
    <section id="about" className="py-16 sm:py-24 px-4 sm:px-6 bg-brand-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-video rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative group">
            <LazyImage 
              src={content.about.image}
              alt={`Professional Sports Broadcasting Production in ${currentState || 'India'} - JBMR Sports`} 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              containerClassName="w-full h-full"
            />
            <div className="absolute inset-0 bg-brand-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-brand-primary rounded-full flex items-center justify-center shadow-2xl cursor-pointer hover:scale-110 transition-transform">
                <Play className="text-white fill-current w-5 h-5 sm:w-6 sm:h-6 ml-1" />
              </div>
            </div>
          </div>
          {/* Experience Badge */}
          <div className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:-right-8 bg-brand-primary p-4 sm:p-8 rounded-2xl sm:rounded-3xl shadow-2xl hidden sm:block">
            <div className="text-2xl sm:text-4xl font-display font-black text-white">{content.about.experienceBadgeValue}</div>
            <div className="text-white/80 font-bold text-xs sm:text-sm uppercase tracking-widest">{content.about.experienceBadgeLabel.split(' ').map((word, i) => i === 1 ? <React.Fragment key={i}>{word} <br /></React.Fragment> : <React.Fragment key={i}>{word} </React.Fragment>)}</div>
          </div>
        </motion.div>

        <div>
          <SectionHeading 
            title={displayTitle}
            subtitle={displaySubtitle}
          />
          <p className="text-white/60 text-base sm:text-lg mb-4 leading-relaxed">
            {content.about.foundedLine}
          </p>
          <p className="text-white/60 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
            {displayDescription1}
          </p>
          <p className="text-white/60 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
            {displayDescription2}
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-10">
            {content.about.highlights.map((item, i) => {
              const HighlightIcon = iconMap[item.icon as keyof typeof iconMap] || Trophy;
              return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-3 sm:gap-4"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-brand-primary/10 flex items-center justify-center shrink-0">
                  <HighlightIcon className="text-brand-primary w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm sm:text-base">{item.title}</h4>
                  <p className="text-white/40 text-xs sm:text-sm">{item.desc}</p>
                </div>
              </motion.div>
              );
            })}
          </div>

          <a href="/services" className="text-brand-primary font-bold text-sm sm:text-base flex items-center gap-2 hover:gap-4 transition-all group">
            {content.about.learnMoreLabel}
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const { content } = useSiteContent();
  const [selectedService, setSelectedService] = useState<any>(null);

  const ServiceModal = ({ service, onClose }: { service: any, onClose: () => void }) => (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-brand-dark/95 backdrop-blur-xl"
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.9, y: 20, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.9, y: 20, opacity: 0 }}
        className="glass-card max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-[24px] sm:rounded-[40px] border-white/10 relative"
        onClick={e => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 bg-white/5 hover:bg-brand-primary rounded-full flex items-center justify-center text-white transition-all z-10"
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <div className="grid md:grid-cols-2 gap-0">
          <div className="aspect-video md:aspect-auto overflow-hidden">
            <LazyImage src={service.image} alt={service.title} className="w-full h-full object-cover" containerClassName="w-full h-full" />
          </div>
          <div className="p-6 sm:p-10 md:p-16">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center mb-6 sm:mb-8 border border-brand-primary/20">
              {React.createElement(iconMap[service.icon as keyof typeof iconMap] || Camera, { className: "text-brand-primary w-6 h-6 sm:w-8 sm:h-8" })}
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-black text-white mb-4 sm:mb-6 uppercase tracking-tight">{service.title}</h3>
            <p className="text-white/60 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-10">{service.desc}</p>
            
            <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
              <h4 className="text-[10px] sm:text-xs font-black text-brand-primary uppercase tracking-[0.2em]">Key Features</h4>
              <ul className="grid grid-cols-1 gap-2.5 sm:gap-3">
                {service.tags.map((tag: string) => (
                  <li key={tag} className="flex items-center gap-2.5 sm:gap-3 text-white/80 font-bold text-xs sm:text-sm">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-brand-primary shrink-0" />
                    {tag}
                  </li>
                ))}
                <li className="flex items-center gap-2.5 sm:gap-3 text-white/80 font-bold text-xs sm:text-sm">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-brand-primary shrink-0" />
                  National TV Standards
                </li>
              </ul>
            </div>

            <a 
              href="tel:+917988879238" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 sm:gap-3 bg-brand-primary text-white px-6 py-3.5 sm:px-10 sm:py-5 rounded-full font-black uppercase tracking-widest text-xs sm:text-sm hover:scale-105 transition-all shadow-2xl shadow-brand-primary/20"
            >
              Book Service <Phone className="w-4 h-4" />
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );

  return (
    <section id="services" className="py-16 sm:py-24 px-4 sm:px-6 bg-brand-navy/30 relative">
      <AnimatePresence>
        {selectedService && <ServiceModal service={selectedService} onClose={() => setSelectedService(null)} />}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto">
        <SectionHeading 
          title={content.services.title}
          subtitle={content.services.subtitle}
          centered
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {content.services.items.map((service, i) => {
            const ServiceIcon = iconMap[service.icon as keyof typeof iconMap] || Camera;
            const isSponsorship = service.title.includes('Sponsorship');
            return (
              <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setSelectedService(service)}
              className={cn(
                "glass-card p-8 rounded-[40px] transition-all group flex flex-col relative overflow-hidden cursor-pointer",
                isSponsorship ? "border-brand-primary/40 bg-brand-primary/5 ring-1 ring-brand-primary/20" : "hover:border-brand-primary/30"
              )}
            >
              {isSponsorship && (
                <div className="absolute top-0 right-0">
                  <div className="bg-brand-primary text-white text-[10px] font-black px-6 py-1.5 rounded-bl-2xl uppercase tracking-[0.2em] shadow-lg">
                    Platinum
                  </div>
                </div>
              )}
              
              <div className="mb-8 rounded-3xl overflow-hidden border border-white/10 aspect-video bg-brand-dark/60 relative">
                <LazyImage
                  src={service.image}
                  alt={`JBMR Sports - ${service.title} Services`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  containerClassName="w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 bg-brand-dark/80 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/10 shadow-2xl">
                    <ServiceIcon className="text-brand-primary w-6 h-6" />
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{service.title}</h3>
              <p className="text-white/50 mb-8 leading-relaxed text-sm flex-grow">{service.desc}</p>
              
              {isSponsorship && (
                <a 
                  href="/proposal" 
                  className="inline-flex items-center gap-2 bg-brand-primary/10 text-brand-primary border border-brand-primary/20 px-6 py-3 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] mb-8 hover:bg-brand-primary hover:text-white transition-all w-fit"
                >
                  View Proposal <ArrowRight className="w-3 h-3" />
                </a>
              )}

              <div className="flex flex-wrap gap-2 mt-auto">
                {service.tags.map(tag => (
                  <span key={tag} className="text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-xl bg-white/5 text-white/30 border border-white/5 group-hover:border-brand-primary/20 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const BroadcastPackages = () => {
  const [cameraCount, setCameraCount] = useState(12);

  const getDetails = (count: number) => {
    if (count <= 2) return {
      name: "ENTRY LEVEL",
      crew: `${count} Operators`,
      infra: "Wireless Streaming Kit",
      internet: "10-20 Mbps (Stable)",
      backup: "Portable UPS System",
      content: "Basic Match Highlights",
      production: "Single Angle HD",
      comms: "Direct Voice",
      color: "from-blue-500"
    };
    if (count <= 6) return {
      name: "STANDARD PRO",
      crew: `${count + 2} Specialists`,
      infra: "Digital PCR + SDI Links",
      internet: "50 Mbps (Dedicated Fiber)",
      backup: "5kVA GenSet + Online UPS",
      content: "Auto-Replays & Graphics",
      production: "Multi-Angle Slow-Mo",
      comms: "Wired Intercom System",
      color: "from-green-500"
    };
    if (count <= 12) return {
      name: "ELITE LEAGUE",
      crew: `${Math.floor(count * 1.5)} Experts`,
      infra: "Full Blackmagic PCR Unit",
      internet: "100 Mbps (Dual-Wan Fiber)",
      backup: "15kVA Silent GenSet",
      content: "Powerplay & Milestones",
      production: "Ultra Slow-Mo + 3rd Umpire",
      comms: "Wireless Tally + Comms",
      color: "from-purple-500"
    };
    return {
      name: "TV BROADCAST",
      crew: "25+ Professional Crew",
      infra: "National Tier PCR + OFC",
      internet: "200 Mbps (Leased + Sat Link)",
      backup: "Twin-Sync 30kVA GenSet",
      content: "Full Analysis & TV Packages",
      production: "18-Cam 4K Cinematic System",
      comms: "Studio Grade Tally/Intercom",
      color: "from-brand-primary"
    };
  };

  const details = getDetails(cameraCount);

  return (
    <section className="py-20 px-6 bg-brand-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-display font-black text-white mb-4 uppercase tracking-tighter">
            Production <span className="text-brand-primary">Architecture</span>
          </h2>
          <p className="text-white/40 text-sm md:text-base max-w-xl mx-auto font-medium">
            Real-time scaling of technical infrastructure and logistics.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left: Slider Control */}
          <div className="lg:col-span-4 space-y-6">
            <div className="glass-card p-8 rounded-[32px] border-white/5 bg-white/[0.02] shadow-2xl">
              <div className="flex justify-between text-[9px] font-black text-brand-primary uppercase tracking-[0.2em] mb-8">
                <span>01 CAM</span>
                <span className="text-white/20">Scaling</span>
                <span>18 CAM</span>
              </div>
              
              <div className="relative h-8 flex items-center mb-10">
                <input 
                  type="range" 
                  min="1" 
                  max="18" 
                  value={cameraCount} 
                  onChange={(e) => setCameraCount(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-white/10 rounded-full appearance-none cursor-pointer accent-brand-primary z-10"
                />
                <div 
                  className="absolute h-1.5 bg-brand-primary rounded-full left-0 top-1/2 -translate-y-1/2 transition-all duration-300 shadow-[0_0_15px_rgba(249,205,5,0.4)]"
                  style={{ width: `${((cameraCount - 1) / 17) * 100}%` }}
                />
              </div>

              <div className="text-center">
                <div className="text-[10px] font-bold text-white/30 uppercase tracking-[0.3em] mb-2">Deployed Units</div>
                <div className={cn("inline-block px-10 py-4 rounded-2xl bg-gradient-to-r text-white font-black text-4xl shadow-2xl border border-white/10 transition-all duration-500", details.color, "to-black")}>
                  {cameraCount.toString().padStart(2, '0')}
                </div>
                <div className="mt-4 text-brand-primary font-black text-xs tracking-widest uppercase">{details.name}</div>
              </div>
            </div>

            {/* Crew Snapshot Mini-Card */}
            <div className="glass-card p-6 rounded-3xl border-white/5 bg-white/[0.01] flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-primary/10 flex items-center justify-center">
                  <Users className="w-5 h-5 text-brand-primary" />
                </div>
                <div>
                  <div className="text-[8px] font-bold text-white/30 uppercase tracking-widest">Active Crew</div>
                  <div className="text-white font-black text-sm">{details.crew}</div>
                </div>
              </div>
              <div className="text-brand-primary font-black text-xs">ULTRA-LOW LATENCY</div>
            </div>
          </div>

          {/* Right: Technical Specs Detail */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={details.name}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="grid md:grid-cols-2 gap-4"
              >
                {[
                  { label: "Infrastructure", val: details.infra, icon: Tv, sub: "Hardware & SDI/OFC Links" },
                  { label: "Communication", val: details.comms, icon: Mic2, sub: "Tally & Intercom Comms" },
                  { label: "Network Bandwidth", val: details.internet, icon: Globe, sub: "Required Uplink Speed" },
                  { label: "Power Redundancy", val: details.backup, icon: Rocket, sub: "GenSet & Online UPS" },
                  { label: "Content Delivery", val: details.content, icon: Trophy, sub: "Automated Milestone Pkgs" },
                  { label: "Production Tier", val: details.production, icon: Video, sub: "Replay & Quality Standard" }
                ].map((spec, idx) => (
                  <div key={idx} className="glass-card p-5 rounded-[24px] border-white/5 bg-white/[0.02] flex items-start gap-4 hover:bg-white/[0.04] transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                      <spec.icon className="w-5 h-5 text-brand-primary" />
                    </div>
                    <div>
                      <div className="text-[9px] font-bold text-brand-primary uppercase tracking-[0.2em] mb-1">{spec.label}</div>
                      <div className="text-white font-bold text-[13px] leading-tight mb-1">{spec.val}</div>
                      <div className="text-white/20 text-[9px] font-medium uppercase tracking-wider">{spec.sub}</div>
                    </div>
                  </div>
                ))}

                {/* Direct Booking CTA */}
                <div className="md:col-span-2 mt-2">
                  <motion.a
                    href="#contact"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className={cn(
                      "w-full py-5 rounded-[24px] bg-gradient-to-r font-black text-sm text-white shadow-2xl flex items-center justify-center gap-3 transition-all duration-500 border border-white/10 uppercase tracking-widest",
                      details.color, "to-black"
                    )}
                  >
                    BOOK {cameraCount} CAMERA PRODUCTION
                    <ArrowRight className="w-5 h-5" />
                  </motion.a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Background Accent */}
      <div className={cn("absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-primary/5 rounded-full blur-[150px] pointer-events-none transition-all duration-1000", details.color)} />
    </section>
  );
};

const Equipment = () => {
  const { content } = useSiteContent();

  return (
    <section id="equipment" className="py-24 px-6 bg-brand-dark">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <SectionHeading 
            title={content.equipment.title}
            subtitle={content.equipment.subtitle}
          />
          <p className="text-white/40 max-w-md mb-12">
            {content.equipment.description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {content.equipment.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative rounded-3xl overflow-hidden aspect-[4/5]"
            >
              <LazyImage 
                src={item.image} 
                alt={`JBMR Sports ${item.category} - ${item.name}`} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                containerClassName="w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-0 left-0 p-6">
                <span className="text-[10px] font-bold text-brand-red uppercase tracking-widest mb-1 block">{item.category}</span>
                <h4 className="text-lg font-bold text-white">{item.name}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Stats = () => {
  const { content } = useSiteContent();
  return (
    <section className="py-20 px-6 bg-brand-red relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto mb-12 text-center">
        <span className="text-white/40 font-bold uppercase tracking-[0.3em] text-[10px]">{content.stats.title}</span>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-12 relative z-10">
        {content.stats.items.map((stat, i) => (
          <div key={i} className="text-center">
            <Counter value={stat.value} suffix={stat.suffix} />
            <div className="text-white/80 font-bold uppercase tracking-widest text-xs mt-2">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Projects = () => {
  const { content } = useSiteContent();

  return (
    <section id="projects" className="py-24 px-6 bg-brand-dark">
      <div className="max-w-7xl mx-auto">
        <SectionHeading 
          title={content.projects.title}
          subtitle={content.projects.subtitle}
          centered
        />

        <div className="overflow-x-auto pb-8">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10">
                <th className="py-6 px-4 text-white/40 font-bold uppercase tracking-widest text-xs">Tournament</th>
                <th className="py-6 px-4 text-white/40 font-bold uppercase tracking-widest text-xs">Year</th>
                <th className="py-6 px-4 text-white/40 font-bold uppercase tracking-widest text-xs">Location</th>
                <th className="py-6 px-4 text-white/40 font-bold uppercase tracking-widest text-xs">Matches</th>
                <th className="py-6 px-4 text-white/40 font-bold uppercase tracking-widest text-xs">Platform</th>
                <th className="py-6 px-4 text-white/40 font-bold uppercase tracking-widest text-xs"></th>
              </tr>
            </thead>
            <tbody>
              {content.projects.items.map((project, i) => (
                <motion.tr 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="border-b border-white/5 hover:bg-white/5 transition-colors group cursor-pointer"
                >
                  <td className="py-6 px-4 font-bold text-white">{project.name}</td>
                  <td className="py-6 px-4 text-white/60">{project.year}</td>
                  <td className="py-6 px-4 text-white/60">{project.loc}</td>
                  <td className="py-6 px-4 text-white/60">{project.matches}</td>
                  <td className="py-6 px-4">
                    <span className="px-3 py-1 rounded-full bg-brand-red/10 text-brand-red text-[10px] font-bold uppercase tracking-wider border border-brand-red/20">
                      {project.platform}
                    </span>
                  </td>
                  <td className="py-6 px-4 text-right">
                    <ChevronRight className="w-5 h-5 text-white/20 group-hover:text-brand-red transition-colors inline" />
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

const SuccessStories = () => {
  const { content } = useSiteContent();
  const s = content.successStories;

  return (
    <section id="success-stories" className="py-24 px-6 bg-brand-navy/10">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title={s.title} subtitle="Case Studies" centered />
        <p className="text-white/60 text-center max-w-4xl mx-auto mb-10">{s.subtitle}</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {s.highlights.map((item, i) => (
            <div key={i} className="glass-card rounded-2xl p-4 text-center">
              <div className="text-white font-bold text-sm uppercase tracking-widest">{item}</div>
            </div>
          ))}
        </div>

        <div className="glass-card rounded-3xl p-8 mb-16 border-brand-primary/30">
          <div className="text-brand-primary font-bold uppercase tracking-widest text-xs mb-2">{s.viralSuccess.label}</div>
          <h3 className="text-3xl font-display font-black text-white mb-2">{s.viralSuccess.title}</h3>
          <p className="text-white/60 mb-6">{s.viralSuccess.subtitle}</p>
          <div className="grid md:grid-cols-3 gap-6 mb-6 text-sm text-white/70">
            <div><span className="text-white font-bold">Venue:</span> {s.viralSuccess.venue}</div>
            <div><span className="text-white font-bold">Date:</span> {s.viralSuccess.date}</div>
            <div><span className="text-white font-bold">Champion:</span> {s.viralSuccess.champion}</div>
          </div>
          <p className="text-white/80 mb-6">
            <span className="text-brand-primary font-bold">Viral Moment:</span> {s.viralSuccess.viralMoment}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {s.viralSuccess.stats.map((stat, i) => (
              <div key={i} className="bg-white/5 rounded-2xl p-4 text-center border border-white/10">
                <div className="text-2xl font-display font-black text-white">{stat.value}</div>
                <div className="text-xs text-white/60 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {s.viralSuccess.platforms.map((platform, i) => (
              <span key={i} className="px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/30 text-brand-primary text-xs font-bold uppercase tracking-widest">
                {platform}
              </span>
            ))}
          </div>
        </div>

        <SectionHeading title={s.majorTournaments.title} subtitle="Major Tournaments" />
        <p className="text-white/60 mb-10">{s.majorTournaments.subtitle}</p>
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {s.majorTournaments.items.map((item, i) => (
            <div key={i} className="glass-card rounded-3xl p-8 border-white/10">
              <div className="text-brand-primary text-xs font-bold uppercase tracking-widest mb-2">{item.category}</div>
              <h4 className="text-xl font-bold text-white mb-2">{item.name}</h4>
              <p className="text-white/60 mb-4">{item.line}</p>
              <div className="space-y-4">
                {item.blocks.map((block, j) => (
                  <div key={j} className="border-l-2 border-white/10 pl-4">
                    <div className="text-white font-bold text-sm mb-2">{block.title}</div>
                    <div className="space-y-1">
                      {block.points.map((point, k) => (
                        <div key={k} className="text-white/60 text-sm">{point}</div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <SectionHeading title={s.nationalStateCoverage.title} subtitle="Live Production & Telecast Feeds" />
        <p className="text-white/60 mb-10">{s.nationalStateCoverage.subtitle}</p>
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {s.nationalStateCoverage.items.map((item: any, i: number) => (
            <div key={i} className={cn(
              "glass-card rounded-3xl p-8 border-white/10 relative overflow-hidden transition-all duration-500 flex flex-col justify-between",
              item.highlight && "border-brand-primary/50 shadow-[0_0_40px_rgba(var(--brand-primary-rgb),0.1)] bg-brand-primary/[0.03]"
            )}>
              {item.highlight && (
                <div className="absolute top-0 right-0">
                  <div className="bg-brand-primary text-white text-[10px] font-black px-4 py-1 rounded-bl-xl uppercase tracking-widest shadow-lg">
                    FEATURED
                  </div>
                </div>
              )}
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="text-brand-primary text-xs font-bold uppercase tracking-widest">{item.category}</span>
                  {item.productionBadge && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-white/10 text-brand-primary border border-brand-primary/30">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse" />
                      {item.productionBadge}
                    </span>
                  )}
                </div>
                <h4 className="text-xl font-bold text-white mb-4">{item.name}</h4>
                <div className="space-y-2.5">
                  {item.points.map((point: string, j: number) => {
                    const isProductionHighlight = point.startsWith('JBMR Production') || point.startsWith('Specialty:');
                    return (
                      <div 
                        key={j} 
                        className={cn(
                          "text-sm leading-relaxed",
                          isProductionHighlight 
                            ? "text-brand-primary font-semibold bg-brand-primary/10 p-2.5 rounded-xl border border-brand-primary/20" 
                            : item.highlight ? "text-white/80" : "text-white/60"
                        )}
                      >
                        {point}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

        <SectionHeading title={s.specializedCoverage.title} subtitle="Specialized Coverage" />
        <p className="text-white/60 mb-10">{s.specializedCoverage.subtitle}</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {s.specializedCoverage.items.map((item: any, i: number) => (
            <div key={i} className="glass-card rounded-3xl p-6 border-white/10 flex flex-col justify-between hover:border-brand-primary/40 transition-all duration-300">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="text-brand-primary text-xs font-bold uppercase tracking-widest">{item.location}</span>
                </div>
                {item.productionBadge && (
                  <div className="mb-3">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-brand-primary/10 text-brand-primary border border-brand-primary/30">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse" />
                      {item.productionBadge}
                    </span>
                  </div>
                )}
                <h4 className="text-white font-bold mb-3 text-lg">{item.name}</h4>
                <div className="space-y-2">
                  {item.points.map((point: string, j: number) => {
                    const isProductionHighlight = point.startsWith('JBMR Production');
                    return (
                      <div 
                        key={j} 
                        className={cn(
                          "text-sm leading-relaxed",
                          isProductionHighlight 
                            ? "text-brand-primary font-medium bg-brand-primary/10 p-2 rounded-lg border border-brand-primary/20 mt-3 text-xs" 
                            : "text-white/60 text-xs"
                        )}
                      >
                        {point}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Journey = () => {
  const { content } = useSiteContent();

  return (
    <section id="journey" className="py-24 px-6 bg-brand-navy/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionHeading 
          title={content.journey.title}
          subtitle={content.journey.subtitle}
          centered
        />

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-white/10 hidden md:block" />

          <div className="space-y-12">
            {content.journey.milestones.map((m, i) => {
              const MilestoneIcon = iconMap[m.icon as keyof typeof iconMap] || Rocket;
              return (
                <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className={cn(
                  "flex flex-col md:flex-row items-center gap-8 md:gap-0",
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                )}
              >
                <div className="flex-1 md:px-12 text-center md:text-left">
                  <div className={cn("flex flex-col", i % 2 === 0 ? "md:items-end" : "md:items-start")}>
                    <span className="text-brand-primary font-display font-black text-4xl mb-2">{m.year}</span>
                    <h3 className="text-xl font-bold text-white mb-2">{m.title}</h3>
                    <p className="text-white/50 max-w-sm leading-relaxed">{m.desc}</p>
                  </div>
                </div>

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-full bg-brand-primary flex items-center justify-center shadow-xl shadow-brand-primary/20">
                    <MilestoneIcon className="text-white w-6 h-6" />
                  </div>
                </div>

                <div className="flex-1 hidden md:block" />
              </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

const Leadership = () => {
  const { content } = useSiteContent();
  return (
    <section id="leadership" className="py-24 px-6 bg-brand-dark overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionHeading 
          title={content.leadership.title}
          subtitle={content.leadership.subtitle}
          centered
        />
        
        <div className="grid lg:grid-cols-2 gap-6 mt-12">
          {content.leadership.directors.map((director, index) => (
            <motion.div
              key={index}
              id={director.name.toLowerCase().replace(/\s+/g, '-')}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="glass-card p-6 rounded-[32px] border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 flex flex-col sm:flex-row gap-6 items-center sm:items-start h-full">
                <div className="relative flex-shrink-0">
                  <div className="w-24 h-24 rounded-2xl overflow-hidden border border-brand-primary/20 p-0.5 bg-brand-dark/50">
                    <LazyImage 
                      src={director.image}
                      alt={`${director.name} - ${director.role} & Professional Sports Broadcasting Expert at JBMR Sports`}
                      title={`${director.name} | JBMR Sports ${director.role}`}
                      className="w-full h-full object-cover rounded-[14px] transition-transform duration-500 group-hover:scale-110"
                      containerClassName="w-full h-full rounded-[14px]"
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 bg-brand-primary w-6 h-6 rounded-md flex items-center justify-center shadow-lg border border-brand-dark">
                    <CheckCircle2 className="w-3 h-3 text-white" />
                  </div>
                </div>
                
                <div className="flex flex-col flex-grow text-center sm:text-left">
                  <div className="mb-3">
                    <span className="text-brand-primary font-bold uppercase tracking-[0.15em] text-[10px] block mb-1">
                      {director.role}
                    </span>
                    <h3 className="text-white font-display font-bold text-xl tracking-tight">
                      {director.name}
                    </h3>
                  </div>
                  
                  <div className="space-y-3 mb-4">
                    <p className="text-white/60 text-sm leading-relaxed">
                      {director.bio1}
                    </p>
                  </div>

                  <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-center sm:justify-start gap-3">
                    {director.socials.map((social, i) => {
                      const iconByName: Record<string, any> = {
                        Instagram,
                        Facebook,
                      };
                      const SocialIcon = iconByName[social.icon] || Globe;
                      return (
                        <a
                          key={i}
                          href={social.href}
                          target="_blank"
                          rel="noreferrer"
                          className="text-white/30 hover:text-brand-primary transition-colors"
                        >
                          <SocialIcon className="w-4 h-4" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-white/5 border border-white/10">
            <div className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
            <p className="text-white/60 font-medium text-sm tracking-wide">
              {content.leadership.directorNote}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Team = () => {
  const { content } = useSiteContent();

  return (
    <section id="team" className="py-24 px-6 bg-brand-dark/50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading 
          title={content.team.title}
          subtitle={content.team.subtitle}
          centered
        />

        <div className="space-y-16 mt-16">
          {content.team.groups.map((group, i) => (
            <div key={i}>
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px flex-grow bg-gradient-to-r from-transparent via-white/10 to-transparent md:to-white/10" />
                <h3 className="text-brand-primary font-display font-bold text-lg uppercase tracking-[0.2em] whitespace-nowrap">
                  {group.title}
                </h3>
                <div className="hidden md:block h-px flex-grow bg-gradient-to-r from-white/10 to-transparent" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {group.members.map((member, j) => (
                  <motion.div
                    key={j}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (i * 0.1) + (j * 0.05) }}
                    className="group"
                  >
                    <div className="glass-card p-5 rounded-3xl border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 h-full flex flex-col">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-16 h-16 rounded-2xl overflow-hidden border border-white/10 p-0.5 bg-brand-dark/50 flex-shrink-0">
                          <LazyImage
                            src={member.image}
                            alt={`${member.name} - Professional Sports Broadcast Crew at JBMR Sports`}
                            className="w-full h-full object-cover rounded-[14px] transition-transform duration-500 group-hover:scale-110"
                            containerClassName="w-full h-full rounded-[14px]"
                          />
                        </div>
                        <div className="flex flex-col min-w-0">
                          <h4 className="text-white font-bold text-base truncate">{member.name}</h4>
                          <span className="text-brand-primary/80 text-[10px] uppercase tracking-widest font-semibold">{member.role}</span>
                        </div>
                      </div>
                      
                      {member.bio && (
                        <p className="text-white/40 text-xs leading-relaxed mt-auto pt-3 border-t border-white/5 italic">
                          "{member.bio}"
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SponsorshipCTA = () => {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-brand-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-primary/20 blur-[150px] rounded-full" />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="glass-card p-6 sm:p-12 md:p-16 rounded-[32px] sm:rounded-[60px] border-brand-primary/30 bg-gradient-to-br from-brand-primary/10 to-transparent">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <div>
              <span className="text-brand-primary font-bold uppercase tracking-[0.3em] text-[10px] sm:text-xs mb-4 sm:mb-6 block">Big League Opportunity</span>
              <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-black text-white mb-6 sm:mb-8 leading-tight uppercase italic">
                Hosting a <span className="text-brand-primary underline decoration-brand-primary/30 underline-offset-8">Big League?</span>
              </h2>
              <p className="text-white/60 text-base sm:text-lg md:text-xl leading-relaxed mb-8 sm:mb-10 max-w-xl">
                We specialize in professionalizing large-scale tournaments. For premier leagues, we provide a <span className="text-white font-bold">Minimum 8-Camera Setup</span> with international broadcasting standards.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-brand-primary/20 flex items-center justify-center shrink-0">
                    <Trophy className="w-5 h-5 sm:w-6 sm:h-6 text-brand-primary" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-xs sm:text-sm">8-18 CAMERAS</div>
                    <div className="text-white/40 text-[9px] sm:text-[10px] uppercase tracking-widest">Scalable Production</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-brand-primary/20 flex items-center justify-center shrink-0">
                    <Tv className="w-5 h-5 sm:w-6 sm:h-6 text-brand-primary" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-xs sm:text-sm">NATIONAL TV READY</div>
                    <div className="text-white/40 text-[9px] sm:text-[10px] uppercase tracking-widest">Broadcast Standard</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 sm:gap-6">
                <a 
                  href="/proposal" 
                  className="w-full sm:w-auto justify-center bg-brand-primary hover:bg-brand-primary-hover text-white px-6 py-3.5 sm:px-8 sm:py-4 md:px-10 md:py-5 rounded-full font-bold text-sm sm:text-base md:text-lg transition-all flex items-center gap-2.5 sm:gap-3 shadow-[0_0_30px_rgba(14,165,233,0.3)] whitespace-nowrap"
                >
                  VIEW SPONSORSHIP PROPOSAL
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-[24px] sm:rounded-[40px] overflow-hidden border border-white/10 relative group">
                <img 
                  src={serviceBroadcastTech} 
                  alt="JBMR Sports Professional Production" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-8 sm:left-8 sm:right-8">
                  <div className="glass-card p-4 sm:p-6 rounded-2xl border-white/10 backdrop-blur-md">
                    <div className="flex items-center gap-3 sm:gap-4 mb-2 sm:mb-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-brand-primary flex items-center justify-center">
                        <Camera className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </div>
                      <div className="text-white font-bold text-base sm:text-lg">Elite Production Tier</div>
                    </div>
                    <p className="text-white/60 text-xs sm:text-sm italic">"Delivering the same quality as international sports networks for your local league."</p>
                  </div>
                </div>
              </div>
              
              {/* Floating Stat Card */}
              <div className="absolute -top-6 -right-6 hidden md:block">
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  className="glass-card p-6 sm:p-8 rounded-3xl border-brand-primary/20 bg-brand-dark/80 backdrop-blur-xl shadow-2xl"
                >
                  <div className="text-brand-primary font-black text-4xl sm:text-5xl mb-1">8+</div>
                  <div className="text-white font-bold text-[10px] sm:text-xs uppercase tracking-widest">Cam Setup Min.</div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Clients = () => {
  const { content } = useSiteContent();
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 bg-brand-navy/20 border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <span className="text-white/30 font-bold uppercase tracking-[0.3em] text-[10px]">{content.clients.title}</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 items-center justify-center opacity-60">
          {content.clients.items.map((client, i) => (
            <div key={i} className="text-center p-3 sm:p-4 border border-white/5 rounded-xl">
              <span className="text-white font-bold text-sm sm:text-base">{client.name}</span>
              <p className="text-[9px] sm:text-[10px] text-white/40 uppercase tracking-widest">{client.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const { content } = useSiteContent();
  // Double the reviews for seamless loop
  const duplicatedReviews = [...googleReviewsData, ...googleReviewsData];
  
  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-brand-navy/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-12 sm:mb-16">
        <div className="flex flex-col md:flex-row items-end justify-between gap-6 sm:gap-8">
          <SectionHeading 
            title="What People Say About Us"
            subtitle="Google Reviews"
          />
          <div className="flex items-center gap-4 mb-6 sm:mb-12">
            <div className="text-right hidden sm:block">
              <div className="text-white font-bold text-xl uppercase">EXCELLENT</div>
              <div className="flex gap-1 justify-end">
                {[...Array(5)].map((_, i) => (
                  <Trophy key={i} className="w-4 h-4 text-[#FBBC04] fill-[#FBBC04]" />
                ))}
              </div>
              <div className="text-white/40 text-[10px] font-bold uppercase tracking-widest mt-1">Based on 50+ Verified Reviews</div>
            </div>
            <a 
              href="https://maps.app.goo.gl/cwKZUYrwEpcNmiBh9" 
              target="_blank" 
              rel="noreferrer"
              className="bg-white text-brand-dark px-4 py-2.5 sm:px-6 sm:py-3 rounded-xl font-bold text-xs hover:bg-brand-primary hover:text-white transition-all flex items-center gap-2 shadow-xl shrink-0"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                <path d="M12.48 10.92v3.28h4.74c-.2 1.22-.97 2.22-2.25 2.77v2.3h3.64c2.13-1.96 3.36-4.85 3.36-8.27 0-.58-.05-1.15-.14-1.71H12.48z" fill="#4285F4"/>
                <path d="M12.48 24c3.24 0 5.95-1.08 7.93-2.91l-3.64-2.3c-1.01.67-2.31 1.07-3.79 1.07-2.92 0-5.39-1.97-6.27-4.62H2.98v2.39C5.01 21.64 8.52 24 12.48 24z" fill="#34A853"/>
                <path d="M6.21 15.24a7.16 7.16 0 0 1 0-4.48V8.37H2.98a12.18 12.18 0 0 0 0 11.26l3.23-2.39z" fill="#FBBC05"/>
                <path d="M12.48 4.75c1.76 0 3.35.61 4.6 1.8l3.45-3.45C18.43 1.07 15.72 0 12.48 0 8.52 0 5.01 2.36 2.98 6.01l3.23 2.36c.88-2.65 3.35-4.62 6.27-4.62z" fill="#EA4335"/>
              </svg>
              REVIEW ON GOOGLE
            </a>
          </div>
        </div>
      </div>

      {/* Infinite Horizontal Scroll Container */}
      <div className="relative flex overflow-hidden">
        {/* Gradients for smooth fade in/out edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-brand-dark to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-brand-dark to-transparent z-10 pointer-events-none" />
        
        <motion.div 
          className="flex gap-4 sm:gap-8 whitespace-nowrap py-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 120, // Slower speed for better readability
              ease: "linear"
            }
          }}
          whileHover={{ transition: { x: { repeat: Infinity, repeatType: "loop", duration: 240, ease: "linear" } } }} // Slow down significantly on hover
        >
          {duplicatedReviews.map((item, i) => (
            <div
              key={`${item.id}-${i}`}
              className="inline-block w-[280px] sm:w-[350px] md:w-[450px] glass-card p-5 sm:p-8 rounded-[24px] sm:rounded-[32px] border-white/5 relative group hover:border-[#FBBC04]/20 transition-all flex flex-col shrink-0"
            >
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden bg-brand-navy border border-white/10 flex items-center justify-center text-white/20 text-[10px] font-bold uppercase shrink-0">
                    {item.profile_photo_url.includes('default-user') ? item.name.charAt(0) : (
                      <img src={item.profile_photo_url} alt={item.name} className="w-full h-full object-cover opacity-80" />
                    )}
                  </div>
                  <div className="min-w-0">
                    <div className="text-white font-bold text-xs truncate">{item.name}</div>
                    <div className="text-white/40 text-[9px] uppercase tracking-widest">{item.relative_time_description}</div>
                  </div>
                </div>
                <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="currentColor">
                  <path d="M12.48 10.92v3.28h4.74c-.2 1.22-.97 2.22-2.25 2.77v2.3h3.64c2.13-1.96 3.36-4.85 3.36-8.27 0-.58-.05-1.15-.14-1.71H12.48z" fill="#4285F4"/>
                  <path d="M12.48 24c3.24 0 5.95-1.08 7.93-2.91l-3.64-2.3c-1.01.67-2.31 1.07-3.79 1.07-2.92 0-5.39-1.97-6.27-4.62H2.98v2.39C5.01 21.64 8.52 24 12.48 24z" fill="#34A853"/>
                  <path d="M6.21 15.24a7.16 7.16 0 0 1 0-4.48V8.37H2.98a12.18 12.18 0 0 0 0 11.26l3.23-2.39z" fill="#FBBC05"/>
                  <path d="M12.48 4.75c1.76 0 3.35.61 4.6 1.8l3.45-3.45C18.43 1.07 15.72 0 12.48 0 8.52 0 5.01 2.36 2.98 6.01l3.23 2.36c.88-2.65 3.35-4.62 6.27-4.62z" fill="#EA4335"/>
                </svg>
              </div>

              <div className="flex gap-0.5 mb-3 sm:mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} viewBox="0 0 24 24" className="w-3 h-3 text-[#FBBC04] fill-[#FBBC04]">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>

              <p className="text-white/70 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 italic whitespace-normal line-clamp-4">{item.text}</p>
              
              <div className="mt-auto flex items-center gap-2 text-[9px] font-bold text-[#FBBC04] uppercase tracking-widest pt-3 sm:pt-4 border-t border-white/5">
                <CheckCircle2 className="w-2.5 h-2.5 shrink-0" />
                Verified Google Review
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const DownloadCTA = () => {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="glass-card p-6 sm:p-12 md:p-20 rounded-[32px] sm:rounded-[60px] border-brand-primary/20 bg-gradient-to-br from-brand-primary/10 to-transparent relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-primary/10 blur-[100px] rounded-full -mr-40 -mt-40 pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
            <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 text-center md:text-left">
              <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-3xl overflow-hidden bg-white p-2 shadow-2xl shrink-0 rotate-3">
                <img src={headerLogo} alt="JBMR Sports - Professional Cricket, Football & Kabaddi Live Streaming Company" className="w-full h-full object-contain" />
              </div>
              <div className="max-w-xl">
                <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-black text-white mb-4 sm:mb-6 leading-tight">Ready to Elevate Your Tournament?</h2>
                <p className="text-white/60 text-base sm:text-lg md:text-xl leading-relaxed">Download our full company profile and technical specifications in PDF for your next professional broadcast production.</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 shrink-0 w-full md:w-auto">
              <a href="/assets/JBMR_Sports_Profile.pdf" download className="w-full sm:w-auto justify-center group bg-white text-brand-dark px-6 py-3.5 sm:px-8 sm:py-4 md:px-10 md:py-5 rounded-full font-bold text-sm sm:text-base md:text-lg hover:bg-brand-primary hover:text-white transition-all flex items-center gap-2.5 sm:gap-3 whitespace-nowrap">
                DOWNLOAD PDF
                <Layout className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
              </a>
              <a href="#contact" className="w-full sm:w-auto justify-center bg-white/5 hover:bg-white/10 text-white border border-white/20 px-6 py-3.5 sm:px-8 sm:py-4 md:px-10 md:py-5 rounded-full font-bold text-sm sm:text-base md:text-lg transition-all backdrop-blur-sm flex items-center gap-2.5 sm:gap-3 whitespace-nowrap">
                GET A QUOTE
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const { content } = useSiteContent();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    tournament: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Broadcast Inquiry: ${formData.tournament || 'New Tournament'}`);
    const body = encodeURIComponent(
      `Name: ${formData.fullName}\nEmail: ${formData.email}\nTournament: ${formData.tournament}\n\nRequirements:\n${formData.message}`,
    );
    window.location.href = `mailto:${content.contact.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 bg-brand-dark relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <SectionHeading 
              title={content.contact.title}
              subtitle={content.contact.subtitle}
            />
            <p className="text-white/60 text-base sm:text-lg mb-8 sm:mb-10 leading-relaxed">
              {content.intro || content.contact.intro}
            </p>

            <div className="space-y-4 sm:space-y-6">
              {content.contact.details.map((item, i) => {
                const DetailIcon = iconMap[item.icon as keyof typeof iconMap] || Phone;
                return (
                <div key={i} className="flex items-center gap-4 sm:gap-6 group">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-brand-navy border border-white/5 flex items-center justify-center group-hover:border-brand-primary/50 transition-colors shrink-0">
                    <DetailIcon className="text-brand-primary w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <div className="text-white/40 text-[10px] sm:text-xs font-bold uppercase tracking-widest">{item.label}</div>
                    {item.href ? (
                      <a href={item.href} target={item.href.startsWith('http') ? "_blank" : undefined} rel={item.href.startsWith('http') ? "noreferrer" : undefined} className="text-white font-bold text-base sm:text-lg hover:text-brand-primary transition-colors break-all sm:break-normal">
                        {item.value}
                      </a>
                    ) : (
                      <div className="text-white font-bold text-base sm:text-lg break-all sm:break-normal">{item.value}</div>
                    )}
                  </div>
                </div>
                );
              })}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6 sm:p-8 md:p-10 rounded-[28px] sm:rounded-[40px] border-white/10"
          >
            <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-2">
                  <label htmlFor="fullName" className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-white/80 ml-1">Full Name</label>
                  <input 
                    id="fullName"
                    name="fullName"
                    type="text" 
                    placeholder="John Doe"
                    value={formData.fullName}
                    onChange={(e) => setFormData((prev) => ({ ...prev, fullName: e.target.value }))}
                    required
                    className="w-full bg-brand-dark border border-white/10 rounded-2xl px-4 sm:px-6 py-3.5 sm:py-4 text-sm sm:text-base text-white focus:outline-none focus:border-brand-primary transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-white/80 ml-1">Email Address</label>
                  <input 
                    id="email"
                    name="email"
                    type="email" 
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                    required
                    className="w-full bg-brand-dark border border-white/10 rounded-2xl px-4 sm:px-6 py-3.5 sm:py-4 text-sm sm:text-base text-white focus:outline-none focus:border-brand-primary transition-colors"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-2">
                  <label htmlFor="serviceType" className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-white/80 ml-1">Inquiry Type</label>
                  <select 
                    id="serviceType"
                    name="serviceType"
                    className="w-full bg-brand-dark border border-white/10 rounded-2xl px-4 sm:px-6 py-3.5 sm:py-4 text-sm sm:text-base text-white focus:outline-none focus:border-brand-primary transition-colors appearance-none"
                    onChange={(e) => setFormData((prev) => ({ ...prev, tournament: e.target.value === 'Demo' ? 'Demo Request' : prev.tournament }))}
                  >
                    <option value="Booking">Book Tournament</option>
                    <option value="Demo">Request Live Demo</option>
                    <option value="Consultation">Technical Help</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="tournament" className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-white/80 ml-1">Tournament Name</label>
                  <input 
                    id="tournament"
                    name="tournament"
                    type="text" 
                    placeholder="e.g. Mumbai T20 League"
                    value={formData.tournament}
                    onChange={(e) => setFormData((prev) => ({ ...prev, tournament: e.target.value }))}
                    required
                    className="w-full bg-brand-dark border border-white/10 rounded-2xl px-4 sm:px-6 py-3.5 sm:py-4 text-sm sm:text-base text-white focus:outline-none focus:border-brand-primary transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-white/80 ml-1">Message / Requirements</label>
                <textarea 
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell us about your production needs or demo requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                  required
                  className="w-full bg-brand-dark border border-white/10 rounded-2xl px-4 sm:px-6 py-3.5 sm:py-4 text-sm sm:text-base text-white focus:outline-none focus:border-brand-primary transition-colors resize-none"
                />
              </div>
              <button type="submit" className="w-full bg-brand-primary hover:bg-brand-primary-hover text-white font-bold py-3.5 sm:py-5 text-sm sm:text-base rounded-2xl shadow-xl shadow-brand-primary/20 transition-all transform active:scale-[0.98]">
                SEND INQUIRY
              </button>
              {submitted && (
                <p className="text-xs sm:text-sm text-white/60">
                  Your email app should open with the inquiry details pre-filled.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const MatchesSection = () => {
  const [matches, setMatches] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await fetch('/api/kabaddi/tournaments');
        const tournaments = await response.json();
        
        if (tournaments && Array.isArray(tournaments)) {
          const teamsResponse = await fetch('/api/kabaddi/teams');
          const teams = await teamsResponse.json();
          const teamsMap = (teams || []).reduce((acc: any, team: any) => {
            acc[team.id] = team.name;
            return acc;
          }, {});

          const allMatches: any[] = [];
          tournaments.forEach((tournament: any) => {
            if (tournament.matches && Array.isArray(tournament.matches)) {
              tournament.matches.forEach((m: any) => {
                if (m) {
                  allMatches.push({
                    ...m,
                    team1Name: teamsMap[m.team1] || 'Team A',
                    team2Name: teamsMap[m.team2] || 'Team B',
                    tournamentName: tournament.name,
                    venue: tournament.venue || 'TBD'
                  });
                }
              });
            }
          });

          setMatches(allMatches);
        }
      } catch (error) {
        console.error('Error fetching matches:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMatches();
  }, []);

  if (loading || matches.length === 0) return null;

  return (
    <section id="kabaddi" className="bg-brand-dark py-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-display font-black text-white uppercase tracking-tighter">
              Kabaddi Matches <span className="text-brand-primary">Latest Updates</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {matches.map((match, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group bg-white/5 rounded-3xl p-6 border border-white/10 hover:border-brand-primary/50 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(249,205,5,0.1)] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-brand-primary/10 transition-colors" />
              
              <div className="flex justify-between items-center mb-6 relative z-10">
                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-brand-primary bg-brand-primary/10 px-3 py-1.5 rounded-full border border-brand-primary/20">
                  {match.status}
                </span>
                <div className="flex items-center gap-1.5 text-white/40">
                  <Clock className="w-3 h-3" />
                  <span className="text-[9px] font-black uppercase tracking-[0.2em]">
                    {match.time}
                  </span>
                </div>
              </div>
              
              <div className="space-y-6 relative z-10">
                <div className="flex justify-between items-center group/team">
                  <div className="flex flex-col">
                    <span className="text-white font-black text-sm uppercase tracking-wider group-hover/team:text-brand-primary transition-colors">{match.team1Name}</span>
                    <span className="text-white/20 text-[8px] font-bold uppercase tracking-widest mt-1">SQUAD A</span>
                  </div>
                  <span className="text-2xl font-display font-black text-white group-hover:scale-110 transition-transform duration-500">{match.score1}</span>
                </div>
                
                <div className="relative py-2">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full h-px bg-white/5" />
                  </div>
                  <div className="relative flex justify-center">
                    <span className="bg-brand-dark px-3 text-[10px] font-black text-brand-primary/40 italic">VS</span>
                  </div>
                </div>

                <div className="flex justify-between items-center group/team">
                  <div className="flex flex-col">
                    <span className="text-white font-black text-sm uppercase tracking-wider group-hover/team:text-brand-primary transition-colors">{match.team2Name}</span>
                    <span className="text-white/20 text-[8px] font-bold uppercase tracking-widest mt-1">SQUAD B</span>
                  </div>
                  <span className="text-2xl font-display font-black text-white group-hover:scale-110 transition-transform duration-500">{match.score2}</span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/5 flex flex-col gap-2 relative z-10">
                <div className="flex items-center gap-2 text-white/60">
                  <MapPin className="w-3 h-3 text-brand-primary" />
                  <span className="text-[10px] font-black uppercase tracking-[0.15em]">{match.venue}</span>
                </div>
                <div className="flex items-center gap-2 text-white/30">
                  <Trophy className="w-3 h-3" />
                  <span className="text-[9px] font-bold uppercase tracking-[0.15em]">{match.tournamentName}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SEOKeywords = () => {
  const categories = [
    {
      name: "High-Intent Broadcast Keywords",
      items: ["Cricket Live Streaming Service", "Live Cricket Match Streaming", "Cricket Tournament Live Streaming", "Sports Live Streaming Company", "Cricket Match Broadcasting Service", "Professional Sports Broadcasting", "Live Sports Production Company", "Multi Camera Live Streaming Service", "Sports Event Live Streaming", "Cricket Broadcast Production"]
    },
    {
      name: "Tournament Organizer Solutions",
      items: ["Live Streaming for Cricket Tournament", "Broadcast Cricket Tournament Live", "How to Live Stream Cricket Match", "Live Streaming for Local Cricket League", "Cricket Tournament Live Production", "Football Tournament Live Streaming", "Kabaddi Live Streaming Service", "Sports Event Broadcast Service", "Cricket Final Match Live Streaming", "Tournament Match Live Streaming Service"]
    },
    {
      name: "Production & Multi-Camera Setup",
      items: ["Cricket Match Production Setup", "Sports Broadcasting Setup", "Live Cricket Camera Setup", "Sports Video Production Company", "Multi Camera Sports Production", "Cricket Match Video Production", "Live Sports Camera Crew", "Cricket Broadcast Setup", "Professional Sports Production Team", "Sports Streaming Equipment Setup"]
    },
    {
      name: "Location Based Services",
      items: ["Cricket Live Streaming India", "Cricket Live Streaming Delhi", "Cricket Live Streaming Gurgaon", "Cricket Live Streaming Haryana", "Sports Broadcasting Company India", "Live Cricket Streaming Delhi NCR", "Sports Live Streaming Gurgaon", "Tournament Streaming Haryana", "Cricket Broadcast Company India", "Sports Production Company Delhi"]
    },
    {
      name: "Social & Digital Streaming",
      items: ["YouTube Live Cricket Streaming Service", "Facebook Live Cricket Streaming", "Instagram Live Sports Streaming", "YouTube Sports Live Streaming Production", "Live Cricket Match on YouTube Setup", "Social Media Sports Streaming Service", "Cricket Match Facebook Live Production", "Sports Event Social Media Streaming", "Tournament Streaming on YouTube", "Live Sports Streaming Online"]
    },
    {
      name: "Hire & Commercial Intent",
      items: ["Hire Cricket Live Streaming Company", "Hire Sports Broadcast Team", "Cricket Streaming Service Provider", "Sports Event Broadcasting Service", "Live Sports Production Hire", "Tournament Streaming Service Provider", "Cricket Live Broadcast Company", "Sports Live Streaming Provider", "Professional Sports Streaming Company", "Cricket Broadcast Service Provider"]
    }
  ];

  return (
    <section className="py-16 px-6 bg-brand-dark/50 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 text-center md:text-left">
          <h2 className="text-xl font-display font-black text-white/40 uppercase tracking-[0.3em] mb-2">Service Areas & Expertise</h2>
          <div className="h-1 w-20 bg-brand-primary/20 rounded-full mx-auto md:mx-0" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {categories.map((cat, idx) => (
            <div key={idx} className="space-y-4">
              <h3 className="text-[10px] font-black text-brand-primary uppercase tracking-widest">{cat.name}</h3>
              <ul className="space-y-2">
                {cat.items.map((item, i) => (
                  <li key={i} className="text-[11px] text-white/30 hover:text-brand-primary transition-colors cursor-default leading-tight">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-white/5 text-[10px] text-white/20 font-medium uppercase tracking-[0.2em] text-center">
          JBMR SPORTS — INDIA'S #1 PROFESSIONAL SPORTS BROADCASTING & LIVE STREAMING PARTNER
        </div>
      </div>
    </section>
  );
};

const SponsorshipProposalPage = () => (
  <div className="min-h-screen bg-brand-dark text-white pt-32 pb-16">
    <div className="max-w-5xl mx-auto px-6">
      <a href="/" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-white/60 hover:text-brand-primary transition-colors mb-10">
        <ArrowRight className="w-4 h-4 rotate-180" /> Back to Home
      </a>
      
      <div className="mb-16">
        <p className="text-brand-primary text-xs font-bold uppercase tracking-[0.25em] mb-4">Production & Partnerships</p>
        <h1 className="text-4xl md:text-6xl font-display font-black tracking-tight mb-6 uppercase">Sponsorship <span className="text-brand-primary">Proposal</span></h1>
        <p className="text-white/60 text-lg max-w-2xl">
          Elevate your tournament with broadcast-quality production. We provide scalable elite solutions for leagues seeking professional visibility.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="glass-card p-10 rounded-[40px] border-brand-primary/20 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-6">
            <Trophy className="w-8 h-8 text-brand-primary opacity-20" />
          </div>
          <h3 className="text-2xl font-bold mb-4 uppercase italic">Elite Tier</h3>
          <p className="text-brand-primary font-bold text-sm mb-6 uppercase tracking-widest">For National & State Leagues</p>
          <ul className="space-y-4 text-white/70 text-sm">
            <li className="flex items-center gap-3 font-bold text-white"><CheckCircle2 className="w-4 h-4 text-brand-primary" /> Minimum 8-Camera Setup</li>
            <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-brand-primary" /> Full 4K Broadcast Stream</li>
            <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-brand-primary" /> 3rd Umpire & Stump Mic</li>
            <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-brand-primary" /> Professional Commentary Panel</li>
            <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-brand-primary" /> National TV Ready Feed</li>
          </ul>
        </div>

        <div className="glass-card p-10 rounded-[40px] border-white/5 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-6">
            <Target className="w-8 h-8 text-white opacity-20" />
          </div>
          <h3 className="text-2xl font-bold mb-4 uppercase italic">Growth Tier</h3>
          <p className="text-white/40 font-bold text-sm mb-6 uppercase tracking-widest">For Corporate & Regional Leagues</p>
          <ul className="space-y-4 text-white/70 text-sm">
            <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-brand-primary" /> 4-6 Camera Production</li>
            <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-brand-primary" /> Live Graphics & Scoring</li>
            <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-brand-primary" /> High-Bitrate Social Streaming</li>
            <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-brand-primary" /> Post-Match Highlights</li>
            <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-brand-primary" /> Brand Logo Integration</li>
          </ul>
        </div>
      </div>

      <div className="glass-card p-12 rounded-[40px] border-brand-primary/30 mb-16">
        <h2 className="text-3xl font-bold mb-8 uppercase italic">Sponsor <span className="text-brand-primary">Benefits</span></h2>
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <div className="text-brand-primary font-black text-4xl mb-2">10M+</div>
            <div className="text-white font-bold text-sm uppercase mb-2">Potential Reach</div>
            <p className="text-white/40 text-xs">Direct visibility across multiple digital and broadcast platforms.</p>
          </div>
          <div>
            <div className="text-brand-primary font-black text-4xl mb-2">100%</div>
            <div className="text-white font-bold text-sm uppercase mb-2">Brand Recall</div>
            <p className="text-white/40 text-xs">High-frequency logo placement during key match moments.</p>
          </div>
          <div>
            <div className="text-brand-primary font-black text-4xl mb-2">4K</div>
            <div className="text-white font-bold text-sm uppercase mb-2">Elite Clarity</div>
            <p className="text-white/40 text-xs">Showcase your brand with international broadcasting standards.</p>
          </div>
        </div>
      </div>

      <div className="text-center bg-brand-navy/30 p-12 rounded-[40px] border border-white/5">
        <h3 className="text-2xl font-bold mb-6 uppercase">Ready to Sponsor or Partner?</h3>
        <p className="text-white/60 mb-8 max-w-xl mx-auto">Contact our partnership division to receive a custom proposal for your tournament level.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="tel:+917988879238" className="bg-brand-primary hover:bg-brand-primary-hover text-white px-8 py-4 rounded-full font-bold transition-all">CALL DIRECTOR</a>
          <a href="/contact" className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-4 rounded-full font-bold transition-all">CONTACT US</a>
        </div>
      </div>
    </div>
  </div>
);



const PrivacyPolicyPage = () => (
  <div className="min-h-screen bg-brand-dark text-white">
    <div className="max-w-5xl mx-auto px-6 pt-32 pb-16 md:pt-36 md:pb-20">
      <a
        href="/"
        className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-white/60 hover:text-brand-primary transition-colors mb-10"
      >
        <ArrowRight className="w-4 h-4 rotate-180" />
        Back to Home
      </a>

      <div className="mb-12">
        <p className="text-brand-primary text-xs font-bold uppercase tracking-[0.25em] mb-4">Privacy Policy</p>
        <h1 className="text-4xl md:text-6xl font-display font-black tracking-tight mb-4">Your Privacy Matters to Us</h1>
        <p className="text-white/60 text-lg">
          Learn how JBMR Sports protects your personal information and respects your privacy.
        </p>
      </div>

      <div className="space-y-6">
        <section className="glass-card rounded-3xl p-8">
          <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
          <p className="text-white/70 mb-3">JBMR Sports collects information to provide better services to our users. We collect information in the following ways:</p>
          <ul className="space-y-2 text-white/70">
            <li><span className="text-white font-semibold">Contact Information:</span> When you contact us via phone, email, or WhatsApp, we collect your name, phone number, and email address.</li>
            <li><span className="text-white font-semibold">Service Information:</span> Details about the sports broadcasting services you request or inquire about.</li>
            <li><span className="text-white font-semibold">Website Usage:</span> Basic information about how you use our website, including pages visited and time spent.</li>
          </ul>
        </section>

        <section className="glass-card rounded-3xl p-8">
          <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
          <p className="text-white/70 mb-3">We use the information we collect for the following purposes:</p>
          <ul className="space-y-2 text-white/70">
            <li>To provide and improve our sports broadcasting services</li>
            <li>To respond to your inquiries and provide customer support</li>
            <li>To communicate with you about our services and updates</li>
            <li>To process service requests and bookings</li>
            <li>To comply with legal obligations</li>
          </ul>
        </section>

        <section className="glass-card rounded-3xl p-8">
          <h2 className="text-2xl font-bold mb-4">3. Information Sharing</h2>
          <p className="text-white/70 mb-3">JBMR Sports does not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
          <ul className="space-y-2 text-white/70">
            <li>With your explicit consent</li>
            <li>To comply with legal requirements or court orders</li>
            <li>To protect our rights, property, or safety, or that of our users</li>
            <li>With trusted service providers who assist us in operating our business (under strict confidentiality agreements)</li>
          </ul>
        </section>

        <section className="glass-card rounded-3xl p-8">
          <h2 className="text-2xl font-bold mb-4">4. Data Security</h2>
          <p className="text-white/70 mb-3">We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:</p>
          <ul className="space-y-2 text-white/70">
            <li>Secure data transmission protocols</li>
            <li>Limited access to personal information on a need-to-know basis</li>
            <li>Regular security assessments and updates</li>
            <li>Secure storage of physical and digital records</li>
          </ul>
        </section>

        <section className="glass-card rounded-3xl p-8">
          <h2 className="text-2xl font-bold mb-4">5. Your Rights</h2>
          <p className="text-white/70 mb-3">You have the following rights regarding your personal information:</p>
          <ul className="space-y-2 text-white/70">
            <li><span className="text-white font-semibold">Access:</span> Request access to your personal information we hold</li>
            <li><span className="text-white font-semibold">Correction:</span> Request correction of inaccurate or incomplete information</li>
            <li><span className="text-white font-semibold">Deletion:</span> Request deletion of your personal information (subject to legal requirements)</li>
            <li><span className="text-white font-semibold">Opt-out:</span> Unsubscribe from marketing communications at any time</li>
          </ul>
        </section>

        <section className="glass-card rounded-3xl p-8 border border-sky-500/20">
          <h2 className="text-2xl font-bold mb-4">6. Cookies & Google AdSense Advertising</h2>
          <p className="text-white/70 mb-3">We use cookies and similar technologies to enhance your experience, analyze web traffic, and serve personalized advertising through Google AdSense.</p>
          <ul className="space-y-2 text-white/70 mb-3">
            <li><span className="text-white font-semibold">Google AdSense:</span> Third-party vendors, including Google, use cookies (such as the DoubleClick cookie) to serve ads based on a user's prior visits to our website or other websites.</li>
            <li><span className="text-white font-semibold">Personalized Advertising:</span> Google's use of advertising cookies enables it and its partners to serve ads to our users based on their visit to our sites and/or other sites on the Internet.</li>
            <li><span className="text-white font-semibold">Opting Out:</span> Users may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-brand-primary underline">Google Ads Settings</a>. Alternatively, users can opt out of a third-party vendor's use of cookies for personalized advertising by visiting <a href="https://www.aboutads.info" target="_blank" rel="noopener noreferrer" className="text-brand-primary underline">aboutads.info</a>.</li>
          </ul>
        </section>

        <section className="glass-card rounded-3xl p-8">
          <h2 className="text-2xl font-bold mb-4">7. Third-Party Services</h2>
          <p className="text-white/70 mb-3">Our website may contain links to third-party services such as:</p>
          <ul className="space-y-2 text-white/70 mb-3">
            <li>WhatsApp for direct communication</li>
            <li>Email services for contact</li>
            <li>Social media platforms</li>
          </ul>
          <p className="text-white/70">These third-party services have their own privacy policies, and we are not responsible for their practices.</p>
        </section>

        <section className="glass-card rounded-3xl p-8">
          <h2 className="text-2xl font-bold mb-4">8. Data Retention</h2>
          <p className="text-white/70 mb-3">We retain your personal information only for as long as necessary to:</p>
          <ul className="space-y-2 text-white/70 mb-3">
            <li>Provide our services to you</li>
            <li>Comply with legal obligations</li>
            <li>Resolve disputes and enforce agreements</li>
          </ul>
          <p className="text-white/70">When information is no longer needed, we securely delete or anonymize it.</p>
        </section>

        <section className="glass-card rounded-3xl p-8">
          <h2 className="text-2xl font-bold mb-4">9. Updates to This Policy</h2>
          <p className="text-white/70 mb-3">We may update this privacy policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any significant changes by:</p>
          <ul className="space-y-2 text-white/70 mb-3">
            <li>Posting the updated policy on our website</li>
            <li>Sending you a notification if you have provided contact information</li>
          </ul>
          <p className="text-white/70">The &quot;Last Updated&quot; date at the bottom of this policy indicates when it was last revised.</p>
        </section>

        <section className="glass-card rounded-3xl p-8 border border-brand-primary/30">
          <h2 className="text-2xl font-bold mb-6">Contact Us About Privacy</h2>
          <p className="text-white/70 mb-6">If you have any questions about this privacy policy or how we handle your personal information, please contact us:</p>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-2">Phone</p>
              <a href="tel:+917988879238" className="text-white font-bold hover:text-brand-primary transition-colors">+91 79888 79238</a>
            </div>
            <div>
              <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-2">Email</p>
              <a href="mailto:jbmrsports@gmail.com" className="text-white font-bold hover:text-brand-primary transition-colors">jbmrsports@gmail.com</a>
            </div>
            <div>
              <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-2">Address</p>
              <p className="text-white font-bold">JBMR Sports, Gurugram, Haryana, India</p>
            </div>
          </div>
        </section>
      </div>

      <p className="text-white/40 text-sm mt-10">Last Updated: February 28, 2026</p>
    </div>
  </div>
);

const TermsPage = () => (
  <div className="min-h-screen bg-brand-dark text-white">
    <div className="max-w-5xl mx-auto px-6 pt-32 pb-16 md:pt-36 md:pb-20">
      <a
        href="/"
        className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-white/60 hover:text-brand-primary transition-colors mb-10"
      >
        <ArrowRight className="w-4 h-4 rotate-180" />
        Back to Home
      </a>

      <div className="mb-12">
        <p className="text-brand-primary text-xs font-bold uppercase tracking-[0.25em] mb-4">Legal Agreement</p>
        <h1 className="text-4xl md:text-6xl font-display font-black tracking-tight mb-4">Terms & Conditions</h1>
        <p className="text-white/60 text-lg">
          Please read these terms and conditions carefully before using JBMR Sports services or website.
        </p>
      </div>

      <div className="space-y-6">
        <section className="glass-card rounded-3xl p-8">
          <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
          <p className="text-white/70">
            By accessing or using the website <strong className="text-white">jbmrsports.com</strong> and services offered by JBMR Sports Pvt. Ltd., you agree to be bound by these Terms and Conditions. If you do not agree, please do not use our services.
          </p>
        </section>

        <section className="glass-card rounded-3xl p-8">
          <h2 className="text-2xl font-bold mb-4">2. Services Offered</h2>
          <p className="text-white/70">
            JBMR Sports Pvt. Ltd. provides professional live streaming, multi-camera sports broadcasting, OTT delivery, graphics engine production, and tournament broadcast setup across India. Service quotes and scheduling are provided upon formal contact and contract agreement.
          </p>
        </section>

        <section className="glass-card rounded-3xl p-8">
          <h2 className="text-2xl font-bold mb-4">3. Intellectual Property</h2>
          <p className="text-white/70">
            All text, logos, videos, showreels, graphics, and trademarks published on this site are the property of JBMR Sports Pvt. Ltd. or used with permission. Unauthorized copying, distribution, or commercial use without prior written consent is strictly prohibited.
          </p>
        </section>

        <section className="glass-card rounded-3xl p-8">
          <h2 className="text-2xl font-bold mb-4">4. User Conduct & Advertising</h2>
          <p className="text-white/70">
            Users agree not to misuse the website, attempt unauthorized access, or disrupt network operations. This site displays Google AdSense advertising. Users must respect ad guidelines and avoid artificial clicks or invalid activity.
          </p>
        </section>

        <section className="glass-card rounded-3xl p-8">
          <h2 className="text-2xl font-bold mb-4">5. Limitation of Liability</h2>
          <p className="text-white/70">
            JBMR Sports Pvt. Ltd. strives for 100% uptime and HD streaming reliability. However, we are not liable for temporary internet service provider outages, platform-level third-party failures, or unforeseen severe weather disruptions outside our control.
          </p>
        </section>

        <section className="glass-card rounded-3xl p-8 border border-brand-primary/30">
          <h2 className="text-2xl font-bold mb-4">6. Contact Information</h2>
          <p className="text-white/70 mb-4">For any inquiries regarding these terms, please contact:</p>
          <p className="text-white font-bold">JBMR Sports Pvt. Ltd.</p>
          <p className="text-white/80">Email: jbmrsports@gmail.com | Phone: +91 79888 79238</p>
        </section>
      </div>

      <p className="text-white/40 text-sm mt-10">Last Updated: February 28, 2026</p>
    </div>
  </div>
);

const DisclaimerPage = () => (
  <div className="min-h-screen bg-brand-dark text-white">
    <div className="max-w-5xl mx-auto px-6 pt-32 pb-16 md:pt-36 md:pb-20">
      <a
        href="/"
        className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-white/60 hover:text-brand-primary transition-colors mb-10"
      >
        <ArrowRight className="w-4 h-4 rotate-180" />
        Back to Home
      </a>

      <div className="mb-12">
        <p className="text-brand-primary text-xs font-bold uppercase tracking-[0.25em] mb-4">Disclaimer Notice</p>
        <h1 className="text-4xl md:text-6xl font-display font-black tracking-tight mb-4">Website Disclaimer</h1>
        <p className="text-white/60 text-lg">
          Important disclosures and general information regarding JBMR Sports.
        </p>
      </div>

      <div className="space-y-6">
        <section className="glass-card rounded-3xl p-8">
          <h2 className="text-2xl font-bold mb-4">1. General Information</h2>
          <p className="text-white/70">
            All information on <strong className="text-white">jbmrsports.com</strong> is published in good faith and for general broadcasting and sports production service information purposes only. JBMR Sports Pvt. Ltd. makes no warranties about the absolute completeness or accuracy of third-party external links.
          </p>
        </section>

        <section className="glass-card rounded-3xl p-8">
          <h2 className="text-2xl font-bold mb-4">2. External Links & Third-Party Advertising</h2>
          <p className="text-white/70">
            From our website, you can visit other websites by following hyperlinks to external sites or Google AdSense advertisement banners. While we strive to provide only quality links, we have no control over the content and nature of external advertising sites.
          </p>
        </section>

        <section className="glass-card rounded-3xl p-8">
          <h2 className="text-2xl font-bold mb-4">3. Consent</h2>
          <p className="text-white/70">
            By using our website, you hereby consent to our disclaimer and agree to its terms.
          </p>
        </section>
      </div>

      <p className="text-white/40 text-sm mt-10">Last Updated: February 28, 2026</p>
    </div>
  </div>
);

const NotFoundPage = () => (
  <div className="min-h-screen bg-brand-dark text-white pt-36 pb-20 px-6">
    <div className="max-w-3xl mx-auto text-center">
      <p className="text-brand-primary text-xs font-bold uppercase tracking-[0.25em] mb-4">Page Not Found</p>
      <h1 className="text-4xl md:text-6xl font-display font-black tracking-tight mb-6">404</h1>
      <p className="text-white/60 mb-8">The page you requested does not exist.</p>
      <a href="/" className="inline-flex items-center gap-2 bg-brand-primary hover:bg-brand-primary-hover text-white px-6 py-3 rounded-full font-bold transition-colors">
        Go to Home
      </a>
    </div>
  </div>
);


export default function App() {
  return (
    <SiteContentProvider>
      <AppContent />
    </SiteContentProvider>
  );
}

function AppContent() {
  const normalizedPath = window.location.pathname.toLowerCase().replace(/\/+$/, '') || '/';
  const isTeamPage = normalizedPath === '/team' || normalizedPath === '/teams';
  const isSuccessPage = normalizedPath === '/success' || normalizedPath === '/portfolio';
  const isSponsorshipPage = normalizedPath === '/proposal' || normalizedPath === '/sponsorship';
  const isLmsPage = normalizedPath === '/lms' || normalizedPath === '/lms-super-series' || normalizedPath === '/lms-india-super-series';
  const isAuctionPage = normalizedPath === '/auction' || normalizedPath === '/player-auction';

  const isStatePage = normalizedPath in states;
  const currentState = isStatePage ? states[normalizedPath] : '';

  const { content } = useSiteContent();
  const [isLoading, setIsLoading] = useState(false);
  const [showSplash, setShowSplash] = useState(false);
  const [isTypingDone, setIsTypingDone] = useState(false);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  useEffect(() => {
    // Control body scroll while splash is active
    if (showSplash) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [showSplash]);

  useEffect(() => {
    const updateCanonical = (url: string) => {
      let link: HTMLLinkElement | null = document.querySelector('link[rel="canonical"]');
      if (link) {
        link.setAttribute('href', url);
      }
    };

    const updateMeta = (selector: string, value: string) => {
      const el = document.querySelector(selector);
      if (el) {
        el.setAttribute('content', value);
      }
    };

    if (isStatePage) {
      const title = `JBMR Sports | #1 Cricket, Football & Hockey Live Streaming in ${currentState}`;
      const description = `Watch our showreel video. Professional 18-camera 4K cricket, football, and hockey broadcasting and live sports streaming services across all districts of ${currentState}. JBMR Sports is your premier production partner with 6+ years of experience.`;
      
      document.title = title;
      updateCanonical(`https://jbmrsports.in${normalizedPath}`);
      updateMeta('meta[name="description"]', description);
      updateMeta('meta[property="og:title"]', title);
      updateMeta('meta[property="og:description"]', description);
      updateMeta('meta[property="og:url"]', `https://jbmrsports.in${normalizedPath}`);
      updateMeta('meta[name="twitter:title"]', title);
      updateMeta('meta[name="twitter:description"]', description);
    } else {
      let title = "JBMR Sports Pvt. Ltd. | Live Cricket, Football, Hockey & Sports Broadcasting India";
      let description = "JBMR Sports Pvt. Ltd. is India's premier sports broadcasting company. Professional 18-camera 4K live streaming and sponsorship opportunities for Cricket, Football, and Hockey across all states and districts of India.";

      if (normalizedPath === '/about') {
        title = "About JBMR Sports Pvt. Ltd. | India's Leading Sports Production Company";
        description = "Discover JBMR Sports Pvt. Ltd., founded by Lokesh Yadav and Deepak Kumar. With 6+ years of excellence, 200+ tournaments produced, and certified LMS Super Series broadcasting across India.";
      } else if (isAuctionPage) {
        title = "Cricket Player Auction Live Camera Production & Streaming | JBMR Sports";
        description = "Professional multi-camera live broadcast and video switching for cricket player auctions. Dedicated bidding table angles, auctioneer podium cameras, and on-stream broadcast lower-thirds.";
      } else if (normalizedPath === '/services') {
        title = "Sports Broadcasting & Live Production Services | JBMR Sports Pvt. Ltd.";
        description = "Explore JBMR Sports services: 18-camera 4K cricket broadcasting, player auction live camera setups, drone stadium flyovers, ultra slow-motion replays, third umpire systems, and multi-platform OTT streaming.";
      } else if (normalizedPath === '/journey') {
        title = "Our Journey & Milestones | JBMR Sports Pvt. Ltd.";
        description = "Discover the history and growth of JBMR Sports, from our founding in 2020 to producing over 200+ live cricket and multi-sport tournaments across India.";
      } else if (isTeamPage) {
        title = "Our Expert Technical Crew & Directors | JBMR Sports";
        description = "Meet the visionary leaders and technical experts behind JBMR Sports. Professional camera crew, PCR directors, and broadcast engineers for elite sports production.";
      } else if (normalizedPath === '/leadership') {
        title = "Leadership & Directors | JBMR Sports Pvt. Ltd.";
        description = "Meet the founders and owners behind JBMR Sports: Founder, Owner & CEO Lokesh Yadav and Founder, Owner & Technical Director Deepak Kumar.";
      } else if (isLmsPage) {
        title = "LMS India Super Series Official Broadcast Partner | JBMR Sports";
        description = "Official live streaming and multi-camera broadcast production for Last Man Stands (LMS) India Super Series tournaments and international cricket events.";
      } else if (isSuccessPage) {
        title = "Broadcast Portfolio & Success Stories | JBMR Sports Pvt. Ltd.";
        description = "Explore JBMR Sports track record across 200+ major tournaments including AEPL Season 8 (7-camera live setup), BOPL, APL, and LMS Super Series.";
      } else if (isSponsorshipPage) {
        title = "Tournament Sponsorship & Broadcast Proposal | JBMR Sports";
        description = "Download customized sports broadcasting proposals and brand sponsorship packages for live cricket tournaments, digital scoreboard branding, and OTT streaming.";
      } else if (normalizedPath === '/contact') {
        title = "Contact JBMR Sports | Book Tournament Live Streaming & Auction Crew";
        description = "Get in touch with JBMR Sports Pvt. Ltd. to book professional multi-camera live streaming, player auction camera production, and commentary teams for your sports tournament.";
      } else if (normalizedPath === '/') {
        description = "JBMR Sports Pvt. Ltd. is India's premier sports broadcasting company. Professional 18-camera 4K live streaming, player auction camera production, and multi-camera cricket match coverage across all states of India.";
      }
      
      document.title = title;
      updateCanonical(`https://jbmrsports.in${normalizedPath === '/' ? '' : normalizedPath}`);
      updateMeta('meta[name="description"]', description);
      updateMeta('meta[property="og:title"]', title);
      updateMeta('meta[property="og:description"]', description);
      updateMeta('meta[property="og:url"]', `https://jbmrsports.in${normalizedPath === '/' ? '' : normalizedPath}`);
      updateMeta('meta[name="twitter:title"]', title);
      updateMeta('meta[name="twitter:description"]', description);
    }
  }, [normalizedPath, isStatePage, currentState, isLmsPage, isTeamPage, isSuccessPage, isSponsorshipPage, isAuctionPage]);

  if (isLoading) {
    return <PageSkeleton />;
  }

  const allKnownRoutes = [
    '/', 
    '/about', 
    '/journey', 
    '/services', 
    '/auction',
    '/player-auction',
    '/success', 
    '/portfolio', 
    '/leadership', 
    '/team', 
    '/teams', 
    '/contact', 
    '/privacy-policy', 
    '/terms', 
    '/disclaimer', 
    '/proposal', 
    '/sponsorship', 
    '/lms',
    '/lms-super-series',
    '/lms-india-super-series',
    ...Object.keys(states)
  ];

  return (
    <div className="min-h-screen bg-brand-dark selection:bg-brand-primary selection:text-white">
      <AnimatePresence>
        {showSplash && <IndependenceSplash onComplete={handleSplashComplete} />}
      </AnimatePresence>
      <Navbar />
      {(normalizedPath === '/' || isStatePage) && (
        <>
          <Hero currentState={currentState} startTyping={!showSplash} onTypingComplete={() => setIsTypingDone(true)} />
          <Showreel autoStart={isTypingDone} />
          <CricketProduction />
          <LmsSuperSeries />
          <BroadcastPackages />
          <Stats />
          <OTTShowcase />
          <About currentState={currentState} />
          <Services />
          <Equipment />
          <Projects />
          <SuccessStories />
          <SponsorshipCTA />
          <Clients />
          <Journey />
          <Leadership />
          <Team />
          <Testimonials />
          <FAQ />
          <DownloadCTA />
          <Contact />
        </>
      )}
      {normalizedPath === '/about' && (
        <PageWrapper title="Professional Cricket, Football & Kabaddi Broadcasting Company" subtitle="About JBMR Sports Pvt. Ltd.">
          <About />
        </PageWrapper>
      )}
      {normalizedPath === '/journey' && (
        <PageWrapper title="Our Journey" subtitle="Milestones">
          <Journey />
        </PageWrapper>
      )}
      {normalizedPath === '/services' && (
        <PageWrapper title="Professional Sports Broadcasting Solutions" subtitle="Our Services">
          <Services />
          <AuctionProduction />
          <Equipment />
        </PageWrapper>
      )}
      {isAuctionPage && (
        <PageWrapper title="Cricket Player Auction & League Production" subtitle="Turnkey Digital Bidding Software & Live Stage Telecast">
          <AuctionProduction />
        </PageWrapper>
      )}
      {isSuccessPage && (
        <PageWrapper title="Our Success Stories" subtitle="Past Projects">
          <LmsSuperSeries />
          <Projects />
          <SuccessStories />
        </PageWrapper>
      )}
      {isLmsPage && (
        <PageWrapper title="LMS India Super Series" subtitle="International Cricket Production Experience">
          <LmsSuperSeries isStandalonePage />
        </PageWrapper>
      )}
      {normalizedPath === '/leadership' && (
        <PageWrapper title="The Visionaries Behind JBMR Sports" subtitle="Leadership">
          <Leadership />
        </PageWrapper>
      )}
      {isTeamPage && (
        <PageWrapper title="Operations & Technical Team" subtitle="Our Experts">
          <Team />
        </PageWrapper>
      )}
      {isSponsorshipPage && <SponsorshipProposalPage />}
      {normalizedPath === '/contact' && (
        <PageWrapper title="Let's Produce Your Next Big Tournament" subtitle="Get In Touch">
          <FAQ />
          <Contact />
        </PageWrapper>
      )}
      {normalizedPath === '/privacy-policy' && <PrivacyPolicyPage />}
      {normalizedPath === '/terms' && <TermsPage />}
      {normalizedPath === '/disclaimer' && <DisclaimerPage />}
      {!allKnownRoutes.includes(normalizedPath) && <NotFoundPage />}
      <SEOKeywords />
      <Footer />
    </div>
  );
}


