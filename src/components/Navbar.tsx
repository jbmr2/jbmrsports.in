import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronDown,
  ChevronRight,
  ArrowRight, 
  Menu, 
  X,
  Phone,
  Sparkles,
  Users,
  Compass,
  FileText,
  Mail,
  ShieldCheck
} from 'lucide-react';
import { cn } from '../utils/cn';
import { headerLogo } from '../constants/assets';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCompanyDropdownOpen, setIsCompanyDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const primaryNav = [
    { name: 'Home', href: '/' },
    { name: 'Auction', href: '/auction', isFeatured: true },
    { name: 'Services', href: '/services' },
    { name: 'Success Stories', href: '/success' },
    { name: 'Our Journey', href: '/journey' },
    { name: 'LMS Series', href: '/lms' },
    { name: 'Sponsorship', href: '/proposal' },
  ];

  const companyLinks = [
    { name: 'About Us', href: '/about', desc: '6+ years in sports broadcasting', icon: ShieldCheck },
    { name: 'Our Journey', href: '/journey', desc: 'From 2020 to national leader', icon: Compass },
    { name: 'Leadership', href: '/leadership', desc: 'Directors & executive team', icon: Users },
    { name: 'Production Team', href: '/teams', desc: 'Camera crew & tech engineers', icon: Users },
    { name: 'Contact Us', href: '/contact', desc: 'Bookings & technical inquiries', icon: Mail },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-300 py-3 sm:py-4 px-4 sm:px-6 md:px-8 lg:px-12",
      isScrolled ? "bg-brand-dark/95 backdrop-blur-xl border-b border-white/10 py-2.5 sm:py-3 shadow-2xl shadow-black/40" : "bg-gradient-to-b from-brand-dark/80 via-brand-dark/40 to-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <a href="/" className="group cursor-pointer block flex-shrink-0">
          <img
            src={headerLogo}
            alt="JBMR Sports - Professional Cricket, Football & Kabaddi Live Streaming Service"
            width="160"
            height="40"
            className="h-8 sm:h-9 md:h-10 lg:h-11 w-auto max-w-[130px] sm:max-w-[160px] md:max-w-[190px] object-contain transition-transform group-hover:scale-102"
          />
        </a>

        {/* Desktop Nav - Clean, spacious & uncluttered */}
        <div className="hidden lg:flex items-center gap-2 xl:gap-4">
          {primaryNav.map((link) => {
            if (link.isFeatured) {
              return (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-[11px] font-black uppercase tracking-[0.16em] px-3.5 py-1.5 rounded-full text-brand-primary bg-brand-primary/10 border border-brand-primary/40 hover:bg-brand-primary hover:text-brand-dark transition-all flex items-center gap-1.5 shadow-[0_0_15px_rgba(var(--brand-primary-rgb),0.15)] transform hover:scale-105"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse" />
                  {link.name}
                </a>
              );
            }

            return (
              <a 
                key={link.name} 
                href={link.href}
                className="text-[11px] font-bold text-white/70 hover:text-brand-primary px-3 py-2 rounded-lg hover:bg-white/5 transition-all uppercase tracking-[0.15em] whitespace-nowrap"
              >
                {link.name}
              </a>
            );
          })}

          {/* Company / More Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setIsCompanyDropdownOpen(true)}
            onMouseLeave={() => setIsCompanyDropdownOpen(false)}
          >
            <button
              type="button"
              onClick={() => setIsCompanyDropdownOpen(!isCompanyDropdownOpen)}
              className={cn(
                "text-[11px] font-bold px-3 py-2 rounded-lg transition-all uppercase tracking-[0.15em] inline-flex items-center gap-1 cursor-pointer",
                isCompanyDropdownOpen ? "text-brand-primary bg-white/5" : "text-white/70 hover:text-brand-primary hover:bg-white/5"
              )}
              aria-expanded={isCompanyDropdownOpen}
            >
              Company
              <ChevronDown className={cn("w-3.5 h-3.5 transition-transform duration-200", isCompanyDropdownOpen && "rotate-180 text-brand-primary")} />
            </button>

            {/* Dropdown Menu */}
            <div className={cn(
              "absolute right-0 top-full pt-2 transition-all duration-200",
              isCompanyDropdownOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible pointer-events-none -translate-y-2"
            )}>
              <div className="w-72 rounded-2xl border border-white/10 bg-brand-navy/95 backdrop-blur-2xl p-2 shadow-2xl overflow-hidden">
                <div className="px-3 py-2 border-b border-white/5 flex items-center justify-between">
                  <span className="text-[9px] font-black text-brand-primary uppercase tracking-[0.2em]">JBMR Network</span>
                  <span className="text-[9px] text-white/40">Since 2020</span>
                </div>
                <div className="py-1 space-y-0.5">
                  {companyLinks.map((item) => {
                    const Icon = item.icon;
                    return (
                      <a
                        key={item.name}
                        href={item.href}
                        className="group/item flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/5 transition-all"
                      >
                        <div className="w-8 h-8 rounded-lg bg-white/5 group-hover/item:bg-brand-primary/20 text-white/60 group-hover/item:text-brand-primary flex items-center justify-center transition-all flex-shrink-0">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-xs font-bold text-white/90 group-hover/item:text-brand-primary transition-colors flex items-center justify-between">
                            <span>{item.name}</span>
                            <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all text-brand-primary" />
                          </div>
                          <div className="text-[10px] text-white/40 truncate">{item.desc}</div>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Book Now Action Button */}
          <div className="ml-2 pl-2 border-l border-white/10">
            <a
              href="tel:+917988879238"
              className="inline-flex items-center gap-1.5 bg-brand-primary hover:bg-brand-primary-hover text-brand-dark px-5 py-2.5 rounded-full text-[11px] font-black tracking-wider transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-brand-primary/20 uppercase whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5" />
              BOOK NOW
            </a>
          </div>
        </div>

        {/* Mobile/Tablet Menu Toggle */}
        <button 
          className="lg:hidden text-white p-2 rounded-xl bg-white/5 border border-white/10 transition-transform active:scale-90"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X className="w-5 h-5 text-brand-primary" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile/Tablet Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed inset-x-4 sm:inset-x-6 top-18 sm:top-20 z-50 rounded-3xl bg-brand-navy/98 backdrop-blur-2xl border border-white/15 shadow-2xl overflow-hidden max-h-[82vh] overflow-y-auto"
          >
            <div className="p-5 space-y-4">
              {/* Primary Links */}
              <div>
                <span className="text-[9px] font-black text-brand-primary uppercase tracking-[0.25em] block mb-2 px-1">
                  Main Pages
                </span>
                <div className="space-y-1">
                  {primaryNav.map((link) => (
                    <a 
                      key={link.name} 
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        "text-sm font-bold transition-all px-3 py-2.5 rounded-xl flex items-center justify-between group",
                        link.isFeatured 
                          ? "text-brand-primary bg-brand-primary/10 border border-brand-primary/30" 
                          : "text-white/80 hover:text-brand-primary hover:bg-white/5"
                      )}
                    >
                      <span className="flex items-center gap-2">
                        {link.isFeatured && <span className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse" />}
                        {link.name}
                      </span>
                      <ChevronRight className="w-4 h-4 opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-brand-primary" />
                    </a>
                  ))}
                </div>
              </div>
              
              <div className="h-px bg-white/10" />
              
              {/* Company & Resources */}
              <div>
                <span className="text-[9px] font-black text-brand-primary uppercase tracking-[0.25em] block mb-2 px-1">
                  Company & Team
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {companyLinks.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-xs font-bold text-white/70 hover:text-brand-primary bg-white/5 hover:bg-white/10 px-3 py-2.5 rounded-xl transition-all block truncate"
                    >
                      {item.name}
                    </a>
                  ))}
                  <a
                    href="/privacy-policy"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-xs font-bold text-white/50 hover:text-brand-primary bg-white/5 px-3 py-2.5 rounded-xl transition-all block truncate"
                  >
                    Privacy Policy
                  </a>
                </div>
              </div>
              
              {/* Mobile CTA */}
              <div className="pt-2">
                <a
                  href="tel:+917988879238"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-2 bg-brand-primary hover:bg-brand-primary-hover text-brand-dark px-6 py-3.5 rounded-2xl font-black text-center shadow-xl shadow-brand-primary/20 uppercase tracking-widest text-xs transition-all"
                >
                  <Phone className="w-4 h-4" />
                  BOOK PRODUCTION NOW
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

