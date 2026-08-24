import React from 'react';
import { Instagram, Facebook, ArrowRight } from 'lucide-react';
import { useSiteContent } from '../context/SiteContext';
import { states } from '../constants/states';

export const Footer = () => {
  const { content } = useSiteContent();
  return (
    <footer className="bg-brand-dark pt-24 pb-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <span className="text-xl font-display font-black tracking-tighter text-white uppercase">
                JBMR<span className="text-brand-primary"> SPORTS</span>
              </span>
            </div>
            <p className="text-white/70 leading-relaxed text-sm">
              {content.footer.description}
            </p>
            <div className="flex gap-4">
              {content.footer.socials.map((social, i) => {
                const iconByName = {
                  Instagram,
                  Facebook,
                };
                const SocialIcon = iconByName[social.icon as keyof typeof iconByName] || Instagram;
                return (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Follow JBMR Sports on ${social.icon || 'Social Media'}`}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-brand-primary hover:text-white transition-all"
                >
                  <SocialIcon className="w-5 h-5" />
                </a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Quick Links</h4>
            <ul className="space-y-3">
              {content.footer.quickLinks.map(item => (
                <li key={item.label}>
                  <a href={item.href} className="text-white/40 hover:text-brand-primary transition-colors text-sm">{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Our Platforms</h4>
            <ul className="space-y-3 mb-6">
              <li>
                <a href="https://jbmrsports.com" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:text-white transition-colors text-sm font-bold flex items-center gap-2">
                  JBMR OTT PLATFORM
                  <ArrowRight className="w-3 h-3" />
                </a>
                <p className="text-white/20 text-[10px] mt-1 uppercase tracking-wider">4K Ultra HD Coverage</p>
              </li>
            </ul>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Services</h4>
            <ul className="space-y-3">
              {content.footer.serviceLinks.map(item => (
                <li key={item.label}>
                  <a href={item.href} className="text-white/40 hover:text-brand-primary transition-colors text-sm">{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12 mb-12">
          <h4 className="text-white font-bold mb-8 uppercase tracking-[0.3em] text-[10px] text-center opacity-40">Service Areas Across India</h4>
          <ul className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-x-4 gap-y-4">
            {Object.entries(states).map(([path, name]) => (
              <li key={path}>
                <a href={path} className="text-white/30 hover:text-brand-primary transition-all text-[9px] font-bold uppercase tracking-wider block text-center py-1.5 rounded-lg hover:bg-white/5 border border-transparent hover:border-white/10">
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/20 text-sm">
            {content.footer.copyright}
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-white/30">
            <a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-white transition-colors">Terms & Conditions</a>
            <a href="/disclaimer" className="hover:text-white transition-colors">Disclaimer</a>
          </div>
        </div>

        {content.footer.corporateInfo && (
          <div className="mt-8 pt-8 border-t border-white/5 grid grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-4">
            <div className="space-y-1">
              <p className="text-white/10 text-[8px] font-bold uppercase tracking-widest mb-1">CIN</p>
              <p className="text-white/30 text-[10px] font-medium tracking-wider">{content.footer.corporateInfo.cin}</p>
            </div>
            <div className="space-y-1">
              <p className="text-white/10 text-[8px] font-bold uppercase tracking-widest mb-1">Date of Inc.</p>
              <p className="text-white/30 text-[10px] font-medium tracking-wider">{content.footer.corporateInfo.dateOfInc}</p>
            </div>
            <div className="space-y-1">
              <p className="text-white/10 text-[8px] font-bold uppercase tracking-widest mb-1">ROC Code</p>
              <p className="text-white/30 text-[10px] font-medium tracking-wider">{content.footer.corporateInfo.rocCode}</p>
            </div>
          </div>
        )}
      </div>
    </footer>
  );
};
