import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Trophy, 
  Globe, 
  Video, 
  Camera, 
  Users, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  MapPin, 
  Calendar, 
  Tv, 
  Layers, 
  Sparkles,
  Phone,
  Radio,
  Medal,
  Award,
  FileCheck2,
  ExternalLink,
  BadgeCheck
} from 'lucide-react';
import { cn } from '../utils/cn';
import { lokeshImage, serviceBroadcastTech, internationalShowreel } from '../constants/assets';

interface LmsSuperSeriesProps {
  isStandalonePage?: boolean;
}

export const LmsSuperSeries: React.FC<LmsSuperSeriesProps> = ({ isStandalonePage = false }) => {
  const [activeTab, setActiveTab] = useState<'all' | '2024' | '2023'>('all');
  const [showCertModal, setShowCertModal] = useState(false);

  const productionRoles = [
    {
      icon: Video,
      title: 'Live Stream Production',
      desc: 'Broadcast-grade low-latency multi-platform streaming delivering crisp live cricket action to international audiences worldwide.',
    },
    {
      icon: Camera,
      title: 'Match Videography & Multi-Cam',
      desc: 'Cinematic pitch-level coverage, high-speed tracking, dynamic boundary angles, and multi-camera cricket angles.',
    },
    {
      icon: Tv,
      title: 'Global Telecast Standards',
      desc: 'Real-time graphic overlays, ball-by-ball score integration, milestone cards, and high-impact international TV styling.',
    },
    {
      icon: Users,
      title: 'Production Crew & Technical Support',
      desc: 'Full on-ground technical operations, vision mixing, audio systems, and robust redundancy managed by our elite sports crew.',
    },
  ];

  return (
    <section id="lms-super-series" className={cn(
      "relative bg-brand-dark text-white overflow-hidden",
      isStandalonePage ? "pt-8 pb-20" : "py-24 border-t border-white/5"
    )}>
      {/* Dynamic Background Glows */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-brand-primary rounded-full blur-[160px]" />
        <div className="absolute bottom-10 right-10 w-[600px] h-[600px] bg-amber-500/20 rounded-full blur-[180px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header Badge & Title */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/30 text-brand-primary text-xs font-black uppercase tracking-[0.25em] mb-6 shadow-[0_0_20px_rgba(249,205,5,0.15)]"
          >
            <Trophy className="w-4 h-4 text-brand-primary" />
            <span>International Cricket Production Experience</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl md:text-6xl font-display font-black tracking-tight uppercase leading-none mb-6"
          >
            LMS INDIA <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-yellow-300 to-amber-400">SUPER SERIES</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-base sm:text-xl text-white/80 leading-relaxed font-medium"
          >
            <strong className="text-white">JBMR Sports</strong> was proud to provide <span className="text-brand-primary font-bold">Live Stream Production and Videography Support</span> for the <strong className="text-white">Last Man Stands (LMS) India Super Series</strong>, one of the world’s leading amateur T20 cricket platforms.
          </motion.p>
        </div>

        {/* Highlight Banner / Tagline Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-[32px] p-6 sm:p-10 mb-16 border border-white/10 bg-gradient-to-r from-white/[0.04] via-brand-navy/60 to-white/[0.02] backdrop-blur-xl shadow-2xl overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-primary/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2 text-xs font-black text-brand-primary uppercase tracking-[0.2em]">
                <Radio className="w-4 h-4 animate-pulse text-brand-primary" />
                <span>Official Production Partnership</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-black text-white uppercase tracking-tight">
                TWO EDITIONS. <span className="text-brand-primary">ONE INTERNATIONAL STANDARD.</span>
              </h3>
              <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                Through its work with the <strong className="text-white font-bold">LMS India Super Series</strong>, JBMR Sports gained valuable experience delivering live cricket production in an international sporting environment, working alongside a tournament featuring teams and players from multiple countries.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-bold text-white/50">
                <span className="flex items-center gap-1.5 text-white/90">
                  <MapPin className="w-3.5 h-3.5 text-brand-primary" />
                  2023 — New Delhi
                </span>
                <span className="text-white/20">•</span>
                <span className="flex items-center gap-1.5 text-white/90">
                  <MapPin className="w-3.5 h-3.5 text-brand-primary" />
                  2024 — Chandigarh
                </span>
                <span className="text-white/20">•</span>
                <span className="flex items-center gap-1.5 text-brand-primary font-bold">
                  <Medal className="w-3.5 h-3.5" />
                  Global Amateur T20 Stage
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 bg-brand-dark/80 rounded-2xl p-6 border border-white/10 flex flex-col justify-center text-center">
              <div className="text-[10px] font-black text-brand-primary uppercase tracking-[0.3em] mb-2">
                Broadcast Slogan
              </div>
              <blockquote className="text-lg sm:text-xl font-display font-black text-white italic mb-2 tracking-tight">
                “Live Cricket Production. Every Moment. Everywhere.”
              </blockquote>
              <div className="text-xs text-white/50 font-bold uppercase tracking-wider">
                — JBMR Sports Production Crew
              </div>
            </div>
          </div>
        </motion.div>

        {/* Edition Selector Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            {[
              { id: 'all', label: 'All Editions Overview' },
              { id: '2024', label: '2024 — Chandigarh' },
              { id: '2023', label: '2023 — New Delhi' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={cn(
                  "px-5 sm:px-7 py-2.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300",
                  activeTab === tab.id
                    ? "bg-brand-primary text-brand-dark shadow-lg shadow-brand-primary/20 font-black"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content Display */}
        <AnimatePresence>
          
          {/* 2024 Edition View */}
          {(activeTab === 'all' || activeTab === '2024') && (
            <motion.div
              key="2024-section"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mb-16"
            >
              <div className="glass-card rounded-[36px] p-6 sm:p-10 border-white/10 relative overflow-hidden">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-brand-primary/20 text-brand-primary border border-brand-primary/30">
                        Second Edition
                      </span>
                      <span className="text-white/40 text-xs font-bold flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-brand-primary" /> Chandigarh, India
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-4xl font-display font-black text-white uppercase tracking-tight">
                      LMS India Super Series 2024 — Chandigarh
                    </h3>
                  </div>
                  <div className="bg-white/5 px-5 py-3 rounded-2xl border border-white/10 text-center md:text-right shrink-0">
                    <div className="text-2xl font-black text-brand-primary">20 TEAMS</div>
                    <div className="text-[10px] uppercase font-bold text-white/50 tracking-wider">Global & Domestic Contenders</div>
                  </div>
                </div>

                <div className="grid lg:grid-cols-12 gap-8 mb-10">
                  <div className="lg:col-span-8 space-y-4">
                    <p className="text-white/80 text-base sm:text-lg leading-relaxed">
                      JBMR Sports continued its association with LMS for the <strong className="text-white">2024 India Super Series</strong>, hosted in <strong className="text-white">Chandigarh, India</strong>.
                    </p>
                    <p className="text-white/60 text-sm sm:text-base leading-relaxed">
                      The 2024 edition brought together <span className="text-brand-primary font-bold">20 teams from India and around the world</span>, including international teams and overseas players. LMS officially described the tournament as a global-facing competition with live-streamed matches for its international audience.
                    </p>

                    <div className="pt-4">
                      <h4 className="text-xs font-black text-brand-primary uppercase tracking-[0.2em] mb-4">
                        JBMR Sports Production Deliverables:
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {[
                          'Live Stream Production',
                          'Cricket Videography',
                          'Multi-Angle Match Coverage',
                          'Production & Technical Support'
                        ].map((role, idx) => (
                          <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-white/90 bg-white/5 p-3 rounded-xl border border-white/5">
                            <CheckCircle2 className="w-4 h-4 text-brand-primary shrink-0" />
                            <span className="font-bold">{role}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Highlights Summary Card */}
                  <div className="lg:col-span-4 bg-brand-navy/60 rounded-3xl p-6 border border-white/10 flex flex-col justify-center">
                    <div className="flex items-center gap-2 text-xs font-black text-brand-primary uppercase tracking-[0.2em] mb-3">
                      <Globe className="w-4 h-4 text-brand-primary" />
                      Global T20 Stage
                    </div>
                    <h4 className="text-xl font-display font-black text-white uppercase tracking-tight mb-2">
                      International League Experience
                    </h4>
                    <p className="text-xs text-white/70 leading-relaxed mb-4">
                      Comprehensive multi-camera cricket broadcasting delivered for international audience streams with high-impact live graphics.
                    </p>
                    <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-brand-primary bg-brand-primary/10 border border-brand-primary/20 px-3 py-1.5 rounded-full w-fit">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      Official Production Partner
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* 2023 Edition View */}
          {(activeTab === 'all' || activeTab === '2023') && (
            <motion.div
              key="2023-section"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mb-16"
            >
              <div className="glass-card rounded-[36px] p-6 sm:p-10 border-white/10 relative overflow-hidden">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-yellow-500/20 text-yellow-300 border border-yellow-500/30">
                        Inaugural Edition
                      </span>
                      <span className="text-white/40 text-xs font-bold flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-brand-primary" /> New Delhi, India
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-4xl font-display font-black text-white uppercase tracking-tight">
                      LMS India Super Series 2023 — New Delhi
                    </h3>
                  </div>
                  <div className="bg-white/5 px-5 py-3 rounded-2xl border border-white/10 text-center md:text-right shrink-0">
                    <div className="text-xl font-black text-white">INAUGURAL</div>
                    <div className="text-[10px] uppercase font-bold text-brand-primary tracking-wider">Landmark LMS Stage</div>
                  </div>
                </div>

                <div className="grid lg:grid-cols-12 gap-8 mb-6">
                  <div className="lg:col-span-7 space-y-4">
                    <p className="text-white/80 text-base sm:text-lg leading-relaxed">
                      JBMR Sports provided live-stream production and videography support for the inaugural <strong className="text-white">LMS India Super Series 2023</strong>, held in <strong className="text-white">New Delhi, India</strong>.
                    </p>
                    <p className="text-white/60 text-sm sm:text-base leading-relaxed">
                      The tournament featured teams and players from India and overseas, bringing an authentic international cricket environment to India.
                    </p>

                    {/* Roles Matrix */}
                    <div className="pt-4">
                      <h4 className="text-xs font-black text-brand-primary uppercase tracking-[0.2em] mb-4">
                        JBMR Sports Production Role:
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {[
                          'Live Stream Production',
                          'Match Videography',
                          'Multi-camera Cricket Coverage',
                          'Production Crew & Technical Support'
                        ].map((role, idx) => (
                          <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-white/90 bg-white/5 p-3 rounded-xl border border-white/5">
                            <CheckCircle2 className="w-4 h-4 text-brand-primary shrink-0" />
                            <span className="font-bold">{role}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Production Head Leadership & Certificate Box */}
                  <div className="lg:col-span-5 space-y-4">
                    {/* Production Head Card */}
                    <div className="bg-gradient-to-br from-brand-primary/10 to-brand-navy/90 p-5 rounded-2xl border border-brand-primary/30 flex items-center gap-4">
                      <img
                        src={lokeshImage}
                        alt="Lokesh Yadav - Production Head"
                        className="w-16 h-16 rounded-xl object-cover border border-brand-primary/40 shadow-lg shrink-0"
                      />
                      <div>
                        <span className="text-[9px] font-black uppercase tracking-[0.2em] text-brand-primary block mb-0.5">
                          Production Leadership
                        </span>
                        <h5 className="text-lg font-display font-black text-white">Lokesh Yadav</h5>
                        <p className="text-xs text-white/70 font-medium">Production Head — LMS Super Series</p>
                        <span className="inline-flex items-center gap-1 text-[10px] text-brand-primary/90 mt-1 font-mono">
                          <CheckCircle2 className="w-3 h-3 text-brand-primary" /> Certified Production Head
                        </span>
                      </div>
                    </div>

                    {/* Official Certificate of Completion Card */}
                    <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-5 relative overflow-hidden backdrop-blur-sm">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <Award className="w-4 h-4 text-brand-primary" />
                          <span className="text-xs font-black uppercase tracking-wider text-white">
                            Official Certificate of Completion
                          </span>
                        </div>
                        <span className="px-2 py-0.5 rounded-full bg-brand-primary/20 text-brand-primary text-[9px] font-black uppercase">
                          Verified
                        </span>
                      </div>

                      <p className="text-xs text-white/70 leading-relaxed mb-4">
                        Awarded to <strong>JBMR Sports</strong> by <strong>LMS Global Enterprises LTD</strong> in recognition of outstanding live stream production and videography support for the LMS India Super Series.
                      </p>

                      <div className="bg-brand-dark/60 p-3 rounded-xl border border-white/5 text-[11px] mb-4">
                        <div className="flex items-center justify-between text-white/70">
                          <span className="font-bold text-white uppercase text-[9px] tracking-wider">Tournament</span>
                          <span>LMS India Super Series</span>
                        </div>
                        <div className="flex items-center justify-between text-white/70 pt-1.5 mt-1.5 border-t border-white/5">
                          <span className="font-bold text-white uppercase text-[9px] tracking-wider">Production Scope</span>
                          <span className="text-brand-primary">Live Streaming & Videography</span>
                        </div>
                      </div>

                      <button
                        onClick={() => setShowCertModal(true)}
                        className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-brand-primary/10 hover:bg-brand-primary/20 text-brand-primary border border-brand-primary/30 text-xs font-bold transition-all"
                      >
                        <FileCheck2 className="w-4 h-4" />
                        <span>View Verified Certificate</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

        </AnimatePresence>

        {/* Global Production Capabilities Grid */}
        <div className="mt-16 mb-16">
          <div className="text-center mb-10">
            <span className="text-[10px] font-black text-brand-primary uppercase tracking-[0.3em]">
              Broadcast Engineering & Delivery
            </span>
            <h3 className="text-2xl sm:text-4xl font-display font-black text-white uppercase mt-2">
              JBMR Sports Production Standards
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {productionRoles.map((role, idx) => {
              const Icon = role.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass-card p-6 rounded-3xl border-white/5 hover:border-brand-primary/30 transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-brand-primary/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-brand-primary" />
                    </div>
                    <h4 className="text-base font-bold text-white uppercase tracking-tight mb-2">
                      {role.title}
                    </h4>
                    <p className="text-xs text-white/60 leading-relaxed">
                      {role.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA Card */}
        <div className="rounded-[32px] bg-gradient-to-r from-brand-navy via-brand-dark to-brand-navy p-8 sm:p-12 border border-brand-primary/30 text-center relative overflow-hidden shadow-2xl">
          <div className="max-w-3xl mx-auto space-y-6">
            <span className="text-xs font-black text-brand-primary uppercase tracking-[0.25em]">
              Host or Broadcast Your Tournament
            </span>
            <h3 className="text-2xl sm:text-4xl font-display font-black text-white uppercase tracking-tight">
              Bring International Broadcast Quality to Your League
            </h3>
            <p className="text-white/70 text-sm sm:text-base leading-relaxed">
              Whether you are organizing an international invitational, a national T20 championship, or a premier corporate league, partner with JBMR Sports for world-class multi-camera live streaming and videography.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <a
                href="tel:+917988879238"
                className="inline-flex items-center gap-2 bg-brand-primary hover:bg-brand-primary-hover text-brand-dark font-black px-8 py-4 rounded-full text-xs sm:text-sm uppercase tracking-widest shadow-xl shadow-brand-primary/20 hover:scale-105 transition-all"
              >
                <Phone className="w-4 h-4" />
                Book Production Now
              </a>
              <a
                href="/proposal"
                className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white font-bold px-8 py-4 rounded-full text-xs sm:text-sm uppercase tracking-widest border border-white/10 hover:border-white/20 transition-all"
              >
                <span>View League Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Certificate of Completion Modal */}
      <AnimatePresence>
        {showCertModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-[#0b1324] border border-brand-primary/40 rounded-3xl max-w-2xl w-full p-6 sm:p-10 shadow-2xl relative max-h-[90vh] overflow-y-auto text-center"
            >
              <button
                onClick={() => setShowCertModal(false)}
                className="absolute top-4 right-4 text-white/60 hover:text-white bg-white/10 hover:bg-white/20 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all"
              >
                ✕
              </button>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/30 text-brand-primary text-[10px] font-black uppercase tracking-widest mb-4">
                <BadgeCheck className="w-4 h-4 text-brand-primary" />
                Official Accreditation Certificate
              </div>

              {/* Certificate Border Box */}
              <div className="bg-[#f7f9fa] text-[#111e38] rounded-2xl p-6 sm:p-8 border-4 border-[#0b6584]/30 shadow-inner text-left my-2">
                <div className="text-center mb-6 border-b border-gray-200 pb-4">
                  <div className="text-xs font-black uppercase tracking-[0.3em] text-[#0b6584]">
                    Last Man Stands (LMS) Global Enterprises LTD
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-display font-black tracking-tight text-[#ffaa00] uppercase mt-2">
                    CERTIFICATE OF COMPLETION
                  </h3>
                  <p className="text-[11px] font-mono tracking-widest text-gray-500 uppercase mt-1">
                    THIS IS TO CERTIFY THAT
                  </p>
                  <div className="text-2xl sm:text-3xl font-black bg-[#111e38] text-white py-2 px-6 rounded-lg inline-block my-3 shadow-md">
                    JBMR SPORTS
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-medium mb-6">
                  Have provided invaluable <strong>Live Stream Production and Videography Support</strong> for the <strong>LMS India Super Series</strong> event organized by <strong>LMS Global Enterprises LTD</strong> at <strong>New Delhi, India</strong>.
                </p>

                <p className="text-xs text-gray-600 italic leading-relaxed mb-6 bg-gray-50 p-4 rounded-xl border border-gray-200">
                  “Their exceptional skills and dedication greatly contributed to the success of the event. We extend our heartfelt gratitude for their outstanding collaboration and commitment to excellence.”
                </p>

                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                  <div>
                    <div className="text-[10px] text-gray-400 uppercase font-mono">Event & Host</div>
                    <div className="text-xs font-bold text-gray-800">LMS India Super Series 2023</div>
                  </div>
                  <div className="text-right">
                    <div className="font-display font-black text-xs text-[#0b6584] uppercase tracking-wider">
                      LMS Global Enterprises LTD
                    </div>
                    <div className="text-[10px] text-gray-500 font-medium">Official Digital Broadcasting Accreditation</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex justify-center">
                <button
                  onClick={() => setShowCertModal(false)}
                  className="bg-brand-primary text-brand-dark font-black px-6 py-2.5 rounded-full text-xs uppercase tracking-wider hover:bg-brand-primary-hover transition-all"
                >
                  Close Document
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
