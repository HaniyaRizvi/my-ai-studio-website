import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { SITE_CONFIG } from '../config/site';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 left-6 z-40 flex items-center">
      {/* Informative Tooltip */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 mr-3 px-3.5 py-2 rounded-2xl bg-slate-900/95 border border-emerald-500/30 text-xs shadow-2xl backdrop-blur-md animate-fadeIn">
          <div className="flex flex-col">
            <span className="font-semibold text-white">Instant WhatsApp Support</span>
            <span className="text-[11px] font-mono text-emerald-400">03172673711</span>
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            className="p-1 text-slate-400 hover:text-white rounded-lg"
            title="Dismiss"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Circular WhatsApp Button */}
      <a
        href={SITE_CONFIG.contact.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 to-teal-500 text-white shadow-2xl shadow-emerald-600/40 hover:shadow-emerald-500/60 transition-all transform hover:scale-110 active:scale-95"
        aria-label="Chat on WhatsApp: 03172673711"
        title="Chat on WhatsApp: 03172673711"
      >
        <MessageCircle className="w-7 h-7 text-white fill-white/10" />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-slate-950"></span>
      </a>
    </div>
  );
};
