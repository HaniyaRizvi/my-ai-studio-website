import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { SITE_CONFIG } from '../config/site';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="relative py-24 bg-[#050a18] overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Common Questions</span>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight mb-4">
            Frequently Asked Questions
          </h2>

          <p className="text-slate-400 text-sm sm:text-base">
            Everything you need to know about working with Build Technology.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {SITE_CONFIG.faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl bg-slate-900/80 border border-slate-800/80 overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-semibold text-base sm:text-lg text-slate-100 hover:text-cyan-300 transition-colors">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center shrink-0 border border-slate-700/80 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-cyan-500/20 border-cyan-400/50 text-cyan-300' : 'text-slate-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 text-sm text-slate-300 leading-relaxed border-t border-slate-800/50 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
