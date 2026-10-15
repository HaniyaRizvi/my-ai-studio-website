import React from 'react';
import {
  MessageCircle,
  Mail,
  ArrowUp,
  ExternalLink,
} from 'lucide-react';
import { SITE_CONFIG } from '../config/site';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#02050e] border-t border-slate-800/80 pt-16 pb-12 overflow-hidden text-slate-400">
      {/* Background radial accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-cyan-600/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          
          {/* Col 1 & 2: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 to-violet-600 p-[1px] flex items-center justify-center shadow-lg shadow-cyan-500/20">
                <div className="w-full h-full rounded-xl bg-[#081124] flex items-center justify-center">
                  <span className="font-display font-black text-transparent bg-clip-text bg-gradient-to-tr from-cyan-400 to-violet-400 text-sm">
                    BT
                  </span>
                </div>
              </div>
              <span className="font-display font-extrabold text-xl text-white tracking-tight">
                Build Technology
              </span>
            </div>

            <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
              Build Technology is a digital marketing agency helping businesses grow through professional websites, Meta & Google Ads, SEO, branding, and AI customer support.
            </p>

            {/* Official Email Link in Brand Info */}
            <div className="pt-1">
              <a
                href="mailto:buildtecnology56@gmail.com"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/50 text-slate-300 hover:text-cyan-300 text-xs font-mono transition-all"
                title="Email buildtecnology56@gmail.com"
              >
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <span>buildtecnology56@gmail.com</span>
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              {/* WhatsApp */}
              <a
                href={SITE_CONFIG.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-emerald-500/50 hover:bg-emerald-500/10 text-slate-300 hover:text-emerald-400 flex items-center justify-center transition-all"
                title="WhatsApp: 03172673711"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              {/* Facebook */}
              <a
                href={SITE_CONFIG.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 hover:bg-blue-500/10 text-slate-300 hover:text-blue-400 flex items-center justify-center transition-all"
                title="Facebook (Build Technology)"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href={SITE_CONFIG.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-pink-500/50 hover:bg-pink-500/10 text-slate-300 hover:text-pink-400 flex items-center justify-center transition-all"
                title="Instagram (Build Technology)"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div>
            <h4 className="font-display font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="hover:text-cyan-300 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-300 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-cyan-300 transition-colors">
                  Projects & Inspiration
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-cyan-300 transition-colors">
                  Work Process
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-cyan-300 transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-cyan-300 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-300 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Services */}
          <div>
            <h4 className="font-display font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Our Services
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#services" className="hover:text-cyan-300 transition-colors">
                  Website Development
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-300 transition-colors">
                  Digital Marketing
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-300 transition-colors">
                  Google & Meta Ads
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-300 transition-colors">
                  Search Engine Optimization (SEO)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-300 transition-colors">
                  Logo & Brand Design
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-300 transition-colors">
                  AI Chatbots & Automation
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-300 transition-colors">
                  Web Hosting & Deployment
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Official Contact & Direct Connect */}
          <div>
            <h4 className="font-display font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Direct Contact
            </h4>
            <div className="space-y-3 text-xs">
              {/* Clickable Email */}
              <a
                href="mailto:buildtecnology56@gmail.com"
                className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 transition-colors group block"
                title="Send email to buildtecnology56@gmail.com"
              >
                <Mail className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div className="min-w-0">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Official Email</span>
                  <span className="text-white group-hover:text-cyan-300 font-mono text-xs break-all">
                    buildtecnology56@gmail.com
                  </span>
                </div>
              </a>

              {/* Clickable WhatsApp */}
              <a
                href={SITE_CONFIG.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-emerald-500/50 transition-colors group block"
                title="Chat on WhatsApp: 03172673711"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div className="min-w-0">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">WhatsApp Hotline</span>
                  <span className="text-white group-hover:text-emerald-300 font-mono text-xs">
                    03172673711
                  </span>
                </div>
              </a>

              <div className="px-1 text-[11px] font-mono text-slate-500">
                {SITE_CONFIG.contact.availability}
              </div>
            </div>
          </div>

        </div>

        {/* Founders */}
        <div className="py-6 border-t border-slate-900/90 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
            <span className="text-xs font-display font-semibold uppercase tracking-wider text-slate-300">
              Founders
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs font-mono">
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800/80 hover:border-cyan-500/30 transition-colors">
              <span className="text-slate-400">Co-Founder:</span>
              <strong className="text-white font-semibold">Syed Haider Rizvi</strong>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800/80 hover:border-violet-500/30 transition-colors">
              <span className="text-slate-400">Co-Founder:</span>
              <strong className="text-white font-semibold">Syefa Haniya Rizvi</strong>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © {new Date().getFullYear()} Build Technology. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span>Pakistan • Global Digital Delivery</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-slate-400 hover:text-cyan-300 transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
