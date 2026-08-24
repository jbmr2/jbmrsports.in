import React from 'react';
import { motion } from 'motion/react';
import { Camera, Tv, Mic2, Layout, Video, Users, Trophy, Play, CheckCircle2 } from 'lucide-react';
import { SectionHeading } from './Common';
import { LazyImage } from './LazyImage';
import { cn } from '../utils/cn';
import { serviceBroadcastTech } from '../constants/assets';

export const CricketProduction = () => {
  const features = [
    { icon: Video, title: 'Multi-Camera Production', desc: 'From 4-Cam setups to 18-Cam international standard cinematic coverage.' },
    { icon: Tv, title: 'Live Broadcasting', desc: 'Zero-latency live telecast feeds and digital streaming across networks.' },
    { icon: Layout, title: 'Replay & Multi-Angle', desc: 'Ultra slow-motion, third-umpire capabilities, and action replays.' },
    { icon: Mic2, title: 'Commentary & Graphics', desc: 'Professional commentary panels paired with real-time broadcast graphics.' },
  ];

  return (
    <section id="cricket-production" className="py-24 px-6 bg-brand-navy relative overflow-hidden">
      {/* Background aesthetic */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-brand-primary rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-4">
              <span className="text-brand-primary font-bold uppercase tracking-[0.2em] text-xs">Cricket Broadcast Production</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-white mb-6 uppercase leading-tight tracking-tight">
              JBMR SPORTS — <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-yellow-200">CRICKET PRODUCTION</span> & BROADCASTING
            </h2>
            
            <p className="text-white/80 text-lg sm:text-xl font-medium mb-6 leading-relaxed">
              Professional multi-camera cricket production, live broadcasting and digital coverage for tournaments, leagues, academies and cricket events across India.
            </p>

            <p className="text-white/60 text-base leading-relaxed mb-10">
              As a leading <strong className="text-white">Cricket Production Company India</strong> and <strong className="text-white">Cricket Broadcasting Company India</strong>, we bring international TV standards to your local and national leagues. Our specialized <strong className="text-white">Cricket Live Streaming Production</strong> capabilities include everything from 4-Cam setups to robust 10+ Cam deployments with full graphics, live commentary, highlights, and post-match interviews.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              {features.map((feature, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center shrink-0">
                    <feature.icon className="w-6 h-6 text-brand-primary" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm mb-1 uppercase tracking-wide">{feature.title}</h4>
                    <p className="text-white/50 text-xs leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a 
              href="#contact" 
              className="inline-flex items-center justify-center gap-3 bg-brand-primary hover:bg-brand-primary-hover text-brand-dark px-8 py-4 rounded-full font-black text-sm uppercase tracking-widest transition-all hover:scale-105 shadow-xl shadow-brand-primary/20"
            >
              Book Cricket Production <Camera className="w-5 h-5" />
            </a>
          </motion.div>

          {/* Visual Content */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-[32px] overflow-hidden border border-white/10 relative group shadow-2xl">
              <LazyImage 
                src={serviceBroadcastTech}
                alt="Cricket Broadcast Production India"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                containerClassName="w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent opacity-80" />
              
              <div className="absolute bottom-8 left-8 right-8">
                <div className="glass-card p-6 rounded-2xl border-white/10 backdrop-blur-xl">
                  <h4 className="text-white font-black text-xl mb-3 uppercase tracking-wider">Production Portfolio</h4>
                  <ul className="space-y-3">
                    {['National Premier Leagues', 'State Level Championships', 'Corporate Cricket Tournaments', 'Academy & Youth Leagues'].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-white/80 text-sm font-medium">
                        <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-6 -left-6 md:-left-12">
              <div className="glass-card p-6 rounded-3xl border-brand-primary/20 bg-brand-dark/90 backdrop-blur-xl shadow-2xl animate-bounce-slow">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-red rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-white rounded-full animate-pulse" />
                  </div>
                  <div>
                    <div className="text-white font-black text-xl">LIVE</div>
                    <div className="text-brand-primary text-[10px] font-bold uppercase tracking-widest">Streaming</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
