import React from 'react';
import {
  Sparkles,
  Target,
  Cpu,
  Headphones,
  Award,
} from 'lucide-react';
import { SITE_CONFIG } from '../config/site';

export const AboutSection: React.FC = () => {
  const getWhyIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-cyan-400" />;
      case 'Target':
        return <Target className="w-5 h-5 text-emerald-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-violet-400" />;
      case 'Headphones':
        return <Headphones className="w-5 h-5 text-sky-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="about" className="relative py-24 bg-[#030712] overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-0 w-[550px] h-[550px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-[550px] h-[550px] bg-violet-600/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>About Build Technology</span>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight mb-4">
            {SITE_CONFIG.aboutHeadline}
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            {SITE_CONFIG.brandDescription}
          </p>
        </div>

        {/* 4 Value Statements Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SITE_CONFIG.whyChooseUs.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm"
            >
              <div className="w-11 h-11 rounded-xl bg-slate-800 flex items-center justify-center mb-4 border border-slate-700/80">
                {getWhyIcon(item.icon)}
              </div>
              <h3 className="font-display font-bold text-lg text-white mb-2">
                {item.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
