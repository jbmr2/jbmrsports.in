import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Trophy, 
  Tv, 
  Camera, 
  Monitor, 
  Users, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  Phone, 
  Radio, 
  Layers, 
  Award,
  Video,
  Eye
} from 'lucide-react';
import { SectionHeading } from './Common';
import { serviceEventManagement, serviceBroadcastTech } from '../constants/assets';
import { LazyImage } from './LazyImage';
import { cn } from '../utils/cn';

interface AuctionCameraFeature {
  icon: any;
  title: string;
  subtitle: string;
  description: string;
  points: string[];
}

const AuctionInquiryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    tournamentName: '',
    city: '',
    auctionDate: '',
    teamsCount: '8 Teams',
    cameraSetup: '4-Camera Pro Setup (Podium + Tables + Wide)',
    services: {
      multiCam: true,
      graphics: true,
      liveStream: true,
      audioFeed: true,
      seasonMatches: false,
    },
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    // Format WhatsApp message
    const reqServices = [
      formData.services.multiCam ? `• ${formData.cameraSetup}` : '',
      formData.services.graphics ? '• On-Stream Broadcast Lower-Thirds & Bid Ticker' : '',
      formData.services.liveStream ? '• 1080p/4K YouTube & OTT Live Broadcast' : '',
      formData.services.audioFeed ? '• Podium Audio Integration into Broadcast' : '',
      formData.services.seasonMatches ? '• Complete Season Multi-Cam Match Production' : '',
    ].filter(Boolean).join('%0A');

    const message = `🏏 *NEW PLAYER AUCTION LIVE CAMERA INQUIRY - JBMR SPORTS*%0A%0A` +
      `👤 *Organizer:* ${encodeURIComponent(formData.name)}%0A` +
      `📞 *Phone:* ${encodeURIComponent(formData.phone)}%0A` +
      `🏆 *Tournament:* ${encodeURIComponent(formData.tournamentName || 'Not specified')}%0A` +
      `📍 *Location / City:* ${encodeURIComponent(formData.city || 'India')}%0A` +
      `📅 *Auction Date:* ${encodeURIComponent(formData.auctionDate || 'Upcoming')}%0A` +
      `👥 *Teams Count:* ${encodeURIComponent(formData.teamsCount)}%0A` +
      `🎥 *Camera Setup & Services:*%0A${reqServices}%0A` +
      (formData.notes ? `📝 *Notes:* ${encodeURIComponent(formData.notes)}%0A` : '') +
      `%0A_Sent via JBMR Sports Auction Production Portal_`;

    setSubmitted(true);
    
    // Open WhatsApp after brief delay
    setTimeout(() => {
      window.open(`https://wa.me/917988879238?text=${message}`, '_blank');
    }, 600);
  };

  if (submitted) {
    return (
      <div className="bg-brand-primary/10 border border-brand-primary/40 rounded-3xl p-8 text-center animate-in fade-in zoom-in-95 duration-400">
        <div className="w-16 h-16 rounded-full bg-brand-primary/20 text-brand-primary flex items-center justify-center mx-auto mb-4 border border-brand-primary/40">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h4 className="text-2xl font-bold text-white mb-2 uppercase">Inquiry Received Successfully!</h4>
        <p className="text-white/70 text-sm max-w-md mx-auto mb-6">
          Thank you <span className="text-brand-primary font-bold">{formData.name}</span>. Our technical broadcast director will review your camera setup requirements and connect within 1 hour.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="tel:+917988879238"
            className="inline-flex items-center gap-2 bg-brand-primary text-brand-dark px-6 py-3 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-brand-primary-hover shadow-lg"
          >
            <Phone className="w-4 h-4" /> Call Direct +91 79888 79238
          </a>
          <button
            onClick={() => setSubmitted(false)}
            className="inline-flex items-center gap-2 bg-white/10 text-white px-5 py-3 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-white/20 border border-white/10"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="auction-organizer-name" className="block text-xs font-bold text-white/80 uppercase tracking-wider mb-2">
            Organizer / Contact Name <span className="text-brand-primary">*</span>
          </label>
          <input
            id="auction-organizer-name"
            name="organizerName"
            type="text"
            required
            placeholder="e.g. Rahul Sharma"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all"
          />
        </div>

        <div>
          <label htmlFor="auction-phone-number" className="block text-xs font-bold text-white/80 uppercase tracking-wider mb-2">
            Phone / WhatsApp Number <span className="text-brand-primary">*</span>
          </label>
          <input
            id="auction-phone-number"
            name="phoneNumber"
            type="tel"
            required
            placeholder="e.g. +91 98765 43210"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all"
          />
        </div>

        <div>
          <label htmlFor="auction-tournament-name" className="block text-xs font-bold text-white/80 uppercase tracking-wider mb-2">
            Tournament / League Name
          </label>
          <input
            id="auction-tournament-name"
            name="tournamentName"
            type="text"
            placeholder="e.g. Delhi Premier League / Corporate Cup"
            value={formData.tournamentName}
            onChange={(e) => setFormData({ ...formData, tournamentName: e.target.value })}
            className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all"
          />
        </div>

        <div>
          <label htmlFor="auction-city-location" className="block text-xs font-bold text-white/80 uppercase tracking-wider mb-2">
            City / Location
          </label>
          <input
            id="auction-city-location"
            name="cityLocation"
            type="text"
            placeholder="e.g. Gurugram, Delhi NCR, Mumbai, Jaipur"
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all"
          />
        </div>

        <div>
          <label htmlFor="auction-camera-setup" className="block text-xs font-bold text-white/80 uppercase tracking-wider mb-2">
            Auction Camera Setup Option
          </label>
          <select
            id="auction-camera-setup"
            name="cameraSetup"
            value={formData.cameraSetup}
            onChange={(e) => setFormData({ ...formData, cameraSetup: e.target.value })}
            className="w-full bg-brand-navy border border-white/10 rounded-2xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all"
          >
            <option value="2-Camera Setup (Podium + Wide Table View)">2-Camera Setup (Podium + Wide Table View)</option>
            <option value="4-Camera Pro Setup (Podium + Tables + Wide)">4-Camera Pro Setup (Podium + Tables + Wide)</option>
            <option value="7-Camera Elite Setup (AEPL Standard PCR Switching)">7-Camera Elite Setup (AEPL Standard PCR Switching)</option>
          </select>
        </div>

        <div>
          <label htmlFor="auction-tentative-date" className="block text-xs font-bold text-white/80 uppercase tracking-wider mb-2">
            Tentative Auction Date
          </label>
          <input
            id="auction-tentative-date"
            name="auctionDate"
            type="date"
            value={formData.auctionDate}
            onChange={(e) => setFormData({ ...formData, auctionDate: e.target.value })}
            className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all [color-scheme:dark]"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold text-white/80 uppercase tracking-wider mb-3">
          Broadcast Production Checklist
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {[
            { key: 'multiCam', label: 'Multi-Camera Live PCR Video Switching' },
            { key: 'graphics', label: 'On-Stream Lower-Thirds & Current Bid Graphics' },
            { key: 'liveStream', label: '1080p60 / 4K YouTube & OTT Live Broadcast' },
            { key: 'audioFeed', label: 'Direct Auctioneer & Stage Audio Feed Integration' },
            { key: 'seasonMatches', label: 'Also Need Multi-Cam Live Broadcast for All Matches' },
          ].map((item) => (
            <label
              key={item.key}
              htmlFor={`auction-service-${item.key}`}
              className={cn(
                "flex items-center gap-3 p-3.5 rounded-2xl border cursor-pointer transition-all text-xs font-medium",
                formData.services[item.key as keyof typeof formData.services]
                  ? "bg-brand-primary/10 border-brand-primary/40 text-white"
                  : "bg-white/5 border-white/10 text-white/60 hover:bg-white/10"
              )}
            >
              <input
                id={`auction-service-${item.key}`}
                name={`service_${item.key}`}
                type="checkbox"
                checked={formData.services[item.key as keyof typeof formData.services]}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    services: {
                      ...formData.services,
                      [item.key]: e.target.checked,
                    },
                  })
                }
                className="rounded border-white/20 text-brand-primary focus:ring-brand-primary w-4 h-4 bg-white/10"
              />
              <span>{item.label}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="auction-venue-notes" className="block text-xs font-bold text-white/80 uppercase tracking-wider mb-2">
          Venue & Streaming Requirements (Optional)
        </label>
        <textarea
          id="auction-venue-notes"
          name="venueNotes"
          rows={2}
          placeholder="e.g. 8 team owner tables, need close-up camera on paddle raises, streaming to YouTube channel."
          value={formData.notes}
          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
          className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all resize-none"
        />
      </div>

      <div className="pt-2">
        <button
          type="submit"
          className="w-full bg-brand-primary hover:bg-brand-primary-hover text-brand-dark py-4 px-8 rounded-2xl font-black text-sm uppercase tracking-widest transition-all shadow-xl shadow-brand-primary/20 flex items-center justify-center gap-2 transform hover:scale-[1.01] active:scale-[0.99]"
        >
          <Camera className="w-4 h-4" /> Get Live Camera Production Quote on WhatsApp <ArrowRight className="w-4 h-4" />
        </button>
        <p className="text-center text-[11px] text-white/40 mt-2">
          ⚡ Direct quotation & camera crew availability confirmed within 1 hour.
        </p>
      </div>
    </form>
  );
};

export const AuctionProduction = () => {
  const auctionCameraFeatures: AuctionCameraFeature[] = [
    {
      icon: Camera,
      title: 'Multi-Camera Table & Stage Setup',
      subtitle: 'Dedicated Angle Coverage',
      description: 'Multiple high-definition cameras strategically positioned to capture the auctioneer podium, team owner bidding tables, paddle raises, and room reactions.',
      points: [
        'Dedicated tight-zoom camera on auctioneer podium',
        'Multi-angle coverage of team owner bidding tables',
        'Instant reaction shots during bidding wars',
        'Wide hall perspective for complete event immersion',
      ],
    },
    {
      icon: Tv,
      title: 'Real-Time Video Switching & PCR Control',
      subtitle: 'Live Director Production',
      description: 'Professional Production Control Room (PCR) setup with real-time multi-camera switching, seamlessly following the fast-paced bidding action as paddles go up.',
      points: [
        'Instantaneous live camera angle transitions',
        'Director communication with field camera operators',
        'Multi-view monitoring of all live feeds',
        'Split-screen view (Auctioneer + Bidding Table)',
      ],
    },
    {
      icon: Layers,
      title: 'On-Stream Broadcast Lower-Thirds',
      subtitle: 'Live TV Graphics & Tickers',
      description: 'Broadcast-grade overlay graphics rendered directly on the live stream, displaying player lot numbers, current highest bids, leading bidder name, and sold status.',
      points: [
        'Dynamic on-screen player profile & base price graphic',
        'Real-time current bid counter & bidder lower-third',
        'Instant animated "SOLD" banner on video feed',
        'Custom tournament & sponsor branding overlays',
      ],
    },
    {
      icon: Radio,
      title: '1080p / 4K Multi-Platform Live Broadcast',
      subtitle: 'Zero-Lag High-Bitrate Telecast',
      description: 'Rock-solid live broadcasting to YouTube, Facebook, and OTT channels with direct audio feed integration from the auctioneer microphone.',
      points: [
        'Bonded multi-network streaming with zero dropouts',
        'Clean direct line-in audio from podium mixer',
        'Simultaneous multi-destination live broadcast',
        'Instant full-HD stream recording for post-event archive',
      ],
    },
  ];

  const auctionTrackRecord = [
    {
      title: 'Artist Event Premier League (AEPL) Season 8',
      badge: 'Season 8: 7-Cam Setup & Live PCR',
      featured: true,
      role: '7-Camera Live Video Switching & Auction Broadcast',
      details: 'JBMR Sports delivered the complete live camera production for AEPL Season 8: featuring a dedicated 7-camera live setup with real-time multi-cam video switching, dynamic on-screen broadcast graphics, and multi-angle auction table telecast.',
      highlights: ['7-Camera Live Setup', 'Real-Time Multi-Cam Switching', 'Live On-Stream Bid Graphics', 'Dedicated Table & Stage Feeds'],
    },
    {
      title: 'Advocates Premier League (APL)',
      badge: 'Live YouTube Auction Stream',
      featured: false,
      role: 'Multi-Camera Auction Broadcast',
      details: 'Delivered professional multi-camera live video coverage for India’s premier auction-format legal league, streamed live on YouTube with on-screen graphics.',
      highlights: ['Multi-Cam Stage Coverage', 'Owner Table Bidding Angles', 'Full HD YouTube Telecast'],
    },
    {
      title: 'Business Owners Premier League (BOPL)',
      badge: 'Live Entrepreneur Auction Telecast',
      featured: false,
      role: 'Live Camera Auction Production',
      details: 'Provided multi-camera live streaming and video switching for elite entrepreneur auctions across Season 5 and Season 6 with broadcast lower-thirds.',
      highlights: ['Live Camera Switching', 'Paddle Raise Tracking', 'Multi-Platform Stream'],
    },
  ];

  return (
    <section id="auction" className="py-20 sm:py-28 px-4 sm:px-6 bg-brand-dark relative overflow-hidden">
      {/* Dynamic Background Glows */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-brand-primary rounded-full blur-[160px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-amber-500 rounded-full blur-[160px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/30 text-brand-primary text-xs sm:text-sm font-bold uppercase tracking-widest mb-4">
            <Camera className="w-4 h-4 text-brand-primary" />
            Live Camera Production & Broadcast
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-black text-white uppercase tracking-tight leading-tight">
            PLAYER AUCTION <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-yellow-300 to-amber-400">LIVE CAMERA PRODUCTION</span>
          </h2>

          <p className="text-white/70 text-base sm:text-lg md:text-xl mt-4 leading-relaxed">
            Professional multi-camera setup, real-time video switching, dedicated bidding table angles, on-stream TV graphics, and 1080p/4K live streaming for sports league player auctions.
          </p>
        </div>

        {/* Highlight Banner: Artist Event Premier League */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 glass-card p-6 sm:p-10 rounded-[32px] sm:rounded-[40px] border-brand-primary/40 bg-gradient-to-br from-brand-primary/15 via-brand-dark to-brand-navy/60 relative overflow-hidden shadow-2xl"
        >
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-brand-primary/20 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="bg-brand-primary text-brand-dark px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider flex items-center gap-1.5 shadow-md">
                  <Award className="w-3.5 h-3.5" />
                  Season 8 Landmark Production
                </span>
                <span className="bg-white/10 text-white/90 border border-white/10 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  7-Cam Live Setup & Video Switching
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-black text-white uppercase tracking-tight">
                Artist Event Premier League (AEPL) Season 8
              </h3>

              <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                JBMR Sports successfully executed the live sports broadcasting and auction camera production for <strong>Artist Event Premier League (AEPL) Season 8</strong>, deploying a dedicated <strong>7-Camera Live Setup</strong> with real-time video switching and dynamic on-stream graphics:
              </p>

              <div className="grid sm:grid-cols-2 gap-3 pt-2">
                {[
                  'Live 7-Camera Setup covering Auctioneer Stage & Owner Tables',
                  'Real-Time Live Video Switching (Seamless PCR Camera Cutting)',
                  'Dynamic Broadcast On-Stream Graphics & Bid Lower-Thirds',
                  'High-Bitrate 1080p Multi-Platform Live Streaming to YouTube & OTT',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/90 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center gap-4">
              <div className="p-5 rounded-2xl bg-brand-dark/80 border border-brand-primary/30 w-full text-center sm:text-left backdrop-blur-md">
                <div className="text-[10px] font-bold text-brand-primary uppercase tracking-widest mb-1">JBMR Sports Camera Production</div>
                <div className="text-xl font-bold text-white mb-2">AEPL Season 8 Camera Setup</div>
                <div className="text-xs text-white/70">7-Camera Live Setup • Real-Time Switching • Dynamic On-Stream TV Graphics</div>
              </div>

              <a 
                href="#auction-booking" 
                className="w-full inline-flex items-center justify-center gap-2 bg-brand-primary hover:bg-brand-primary-hover text-brand-dark px-6 py-3.5 rounded-full font-black text-xs uppercase tracking-widest transition-all hover:scale-105 shadow-xl shadow-brand-primary/20"
              >
                Book Auction Camera Production <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* 4 Pillars of Auction Live Camera Production */}
        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold text-brand-primary uppercase tracking-[0.2em]">Broadcast Capabilities</span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-black text-white uppercase tracking-tight mt-1">
              OUR AUCTION LIVE CAMERA SERVICES
            </h3>
            <p className="text-white/60 text-sm mt-2">
              We specialize exclusively in high-end live camera production, multi-camera video switching, and broadcast streaming for player auctions.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {auctionCameraFeatures.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass-card p-6 rounded-[28px] border-white/5 hover:border-brand-primary/30 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-brand-primary" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-1 uppercase tracking-tight">{feat.title}</h4>
                    <div className="text-[10px] font-bold text-brand-primary uppercase tracking-wider mb-3">{feat.subtitle}</div>
                    <p className="text-white/60 text-xs sm:text-sm leading-relaxed mb-4">{feat.description}</p>
                  </div>

                  <div className="space-y-2 pt-3 border-t border-white/5">
                    {feat.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2 text-[11px] sm:text-xs text-white/70">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-primary shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Proven Track Record in Player Auctions */}
        <div className="mt-16 pt-12 border-t border-white/10">
          <div className="text-center mb-10">
            <span className="text-xs font-bold text-brand-primary uppercase tracking-[0.2em]">Our Production Portfolio</span>
            <h3 className="text-2xl sm:text-3xl font-display font-black text-white uppercase tracking-tight mt-1">
              AUCTION LIVE BROADCAST PORTFOLIO
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {auctionTrackRecord.map((item, idx) => (
              <div 
                key={idx}
                className={cn(
                  "glass-card p-6 sm:p-8 rounded-[30px] border flex flex-col justify-between transition-all",
                  item.featured ? "border-brand-primary/40 bg-brand-primary/5 ring-1 ring-brand-primary/20" : "border-white/5 hover:border-white/20"
                )}
              >
                <div>
                  <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-brand-primary/10 text-brand-primary border border-brand-primary/20 mb-4">
                    {item.badge}
                  </span>
                  <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                  <div className="text-xs font-bold text-white/80 mb-3">{item.role}</div>
                  <p className="text-white/60 text-xs leading-relaxed mb-6">{item.details}</p>
                </div>

                <div className="space-y-2 pt-4 border-t border-white/5">
                  {item.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-center gap-2 text-xs text-white/80 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-primary shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Auction Camera Booking & Inquiry Form */}
        <div id="auction-booking" className="mt-20 glass-card p-8 sm:p-12 rounded-[36px] border-brand-primary/40 bg-gradient-to-b from-brand-navy/90 to-brand-dark relative overflow-hidden shadow-2xl">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/30 text-brand-primary text-xs font-bold uppercase tracking-widest mb-3">
                <Sparkles className="w-3.5 h-3.5" /> Fast 1-Hour Quote
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-black text-white uppercase tracking-tight">
                BOOK AUCTION LIVE CAMERA PRODUCTION
              </h3>
              <p className="text-white/70 text-xs sm:text-sm mt-2">
                Fill your requirements below to get a customized camera setup quote and broadcast plan for your league auction.
              </p>
            </div>

            <AuctionInquiryForm />
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20 pt-16 border-t border-white/10">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-brand-primary uppercase tracking-[0.2em]">Common Questions</span>
            <h3 className="text-2xl sm:text-3xl font-display font-black text-white uppercase tracking-tight mt-1">
              FREQUENTLY ASKED QUESTIONS - AUCTION CAMERA PRODUCTION
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
            {[
              {
                q: "What does JBMR Sports provide for Player Auctions?",
                a: "JBMR Sports specializes exclusively in professional live camera production and broadcasting. We deploy multi-camera setups covering auctioneer stage, bidding tables, and paddle raises, live video switching (PCR), on-stream lower-thirds graphics, and 1080p/4K live streaming to YouTube & OTT."
              },
              {
                q: "How many cameras do you deploy for an auction event?",
                a: "Depending on your venue and league scale, we provide 2-Camera, 4-Camera, or up to 7-Camera live setups with live video switching to capture all team owner reactions and podium moments seamlessly."
              },
              {
                q: "Can you stream directly to our YouTube / Facebook channel?",
                a: "Yes! We connect directly to your YouTube, Facebook, or custom OTT streaming keys, providing a broadcast-quality live telecast with crystal clear line-in audio."
              },
              {
                q: "In which cities do you provide auction camera production?",
                a: "We travel nationwide across Delhi NCR, Gurugram, Noida, Mumbai, Bangalore, Jaipur, Chandigarh, Hyderabad, Pune, Lucknow, Kolkata, and across India."
              }
            ].map((faq, fIdx) => (
              <div key={fIdx} className="glass-card p-6 rounded-2xl border border-white/5 hover:border-brand-primary/30 transition-all">
                <h4 className="text-sm sm:text-base font-bold text-white mb-2 flex items-start gap-2">
                  <span className="text-brand-primary font-black">Q:</span>
                  <span>{faq.q}</span>
                </h4>
                <p className="text-xs sm:text-sm text-white/60 leading-relaxed pl-5">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Booking Callout */}
        <div className="mt-16 p-8 sm:p-12 rounded-[32px] bg-gradient-to-r from-brand-navy via-brand-dark to-brand-navy border border-brand-primary/30 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h4 className="text-2xl font-display font-black text-white uppercase">
              Need Live Camera Production for Your Player Auction?
            </h4>
            <p className="text-white/60 text-sm mt-1 max-w-xl">
              Get professional multi-camera live video switching, owner table coverage, on-stream lower-thirds, and high-definition live streaming.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a 
              href="tel:+917988879238" 
              className="inline-flex items-center gap-2 bg-brand-primary hover:bg-brand-primary-hover text-brand-dark px-6 py-3.5 rounded-full font-black text-xs uppercase tracking-widest transition-all shadow-xl"
            >
              <Phone className="w-4 h-4" /> Call +91 79888 79238
            </a>
            <a 
              href="https://wa.me/917988879238?text=Hello%20JBMR%20Sports,%20I%20want%20to%20inquire%20about%20Player%20Auction%20Live%20Camera%20Production%20for%20our%20tournament." 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3.5 rounded-full font-bold text-xs uppercase tracking-widest transition-all border border-white/10"
            >
              WhatsApp Inquiry
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
