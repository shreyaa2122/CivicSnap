
import React from 'react';
import { ShieldAlert, Twitter, Github, Linkedin, Mail, Globe, CheckCircle2 } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/5 pt-24 pb-12 overflow-hidden relative">
      {/* Subtle Background Gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-t from-amber-500/[0.03] to-transparent -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          {/* 1. BRAND & MISSION */}
          <div className="lg:col-span-5 space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center shadow-lg shadow-amber-500/10">
                <ShieldAlert className="text-black w-6 h-6" />
              </div>
              <span className="text-2xl font-black tracking-tighter text-white">
                Civic<span className="text-amber-500">Snap</span>
              </span>
            </div>
            
            <div className="space-y-4 max-w-md">
              <p className="text-gray-400 text-lg leading-relaxed font-medium">
                Empowering citizens to take charge of their urban environments. 
                Making city maintenance transparent, efficient, and systematically driven.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                CivicSnap is an institutional-grade platform designed to bridge the data gap 
                between residents and municipal authorities through systematic precision.
              </p>
            </div>

            {/* 2. SOCIAL & CONNECT */}
            <div className="flex items-center gap-3">
              {[
                { Icon: Twitter, href: "#", label: "Twitter" },
                { Icon: Github, href: "#", label: "GitHub" },
                { Icon: Linkedin, href: "#", label: "LinkedIn" },
                { Icon: Mail, href: "mailto:contact@civicsnap.gov", label: "Email" }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full border border-white/10 bg-white/[0.02] flex items-center justify-center text-gray-500 hover:text-amber-500 hover:border-amber-500/40 hover:bg-amber-500/5 transition-all duration-300 group"
                >
                  <social.Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* 3. PLATFORM LINKS */}
          <div className="lg:col-span-3 lg:pl-12">
            <h4 className="text-white font-black text-sm uppercase tracking-[0.2em] mb-8">Platform</h4>
            <ul className="space-y-4">
              {[
                { label: 'How It Works', href: '#' },
                { label: 'Departments', href: '#' },
                { label: 'Report Dashboard', href: '#' },
                { label: 'Emergency Portal', href: '#' },
                { label: 'Live Issue Tracking', href: '#' }
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-500 hover:text-white transition-colors duration-200 text-base font-medium flex items-center group">
                    <span className="w-0 group-hover:w-2 h-px bg-amber-500 mr-0 group-hover:mr-2 transition-all"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. SUPPORT & LEGAL */}
          <div className="lg:col-span-4 lg:pl-12">
            <h4 className="text-white font-black text-sm uppercase tracking-[0.2em] mb-8">Support</h4>
            <ul className="space-y-4">
              {[
                { label: 'Contact Us', href: '#' },
                { label: 'Help Center / FAQs', href: '#' },
                { label: 'Privacy Policy', href: '#' },
                { label: 'Terms of Service', href: '#' },
                { label: 'Cookie Policy', href: '#' }
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-500 hover:text-white transition-colors duration-200 text-base font-medium flex items-center group">
                    <span className="w-0 group-hover:w-2 h-px bg-amber-500 mr-0 group-hover:mr-2 transition-all"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 text-sm">
          {/* 6. COPYRIGHT */}
          <div className="text-gray-600 font-medium">
            © {currentYear} CivicSnap Inc. All rights reserved. Built for modern governance.
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8">
            {/* REGION / LANGUAGE SELECTOR */}
            <button className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors group">
              <Globe className="w-4 h-4 group-hover:text-amber-500 transition-colors" />
              <span className="font-bold uppercase tracking-widest text-[10px]">Region: North America (EN)</span>
            </button>

            {/* 5. SYSTEM STATUS INDICATOR */}
            <div className="flex items-center gap-3 px-4 py-2 bg-white/[0.02] border border-white/5 rounded-full shadow-inner">
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                All systems operational
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
