import React, { useState, useEffect, useRef } from 'react';
import {
  Code2,
  TrendingUp,
  Share2,
  Target,
  Search,
  Palette,
  Bot,
  Server,
  ArrowRight,
  CheckCircle2,
  MessageCircle,
} from 'lucide-react';
import { SITE_CONFIG, ServiceItem } from '../config/site';

interface ServicesSectionProps {
  onSelectService?: (serviceTitle: string) => void;
}

interface ServiceCardProps {
  service: ServiceItem;
  index: number;
  onSelectService?: (serviceTitle: string) => void;
  prefersReducedMotion: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  index,
  onSelectService,
  prefersReducedMotion,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rotX: 0, rotY: 0, lightX: 50, lightY: 50, isHovered: false });
  const [isVisible, setIsVisible] = useState(false);

  // Scroll reveal with IntersectionObserver
  useEffect(() => {
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [prefersReducedMotion]);

  // Subtle 3D tilt tracking on hover
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Gentle rotation angles clamped to +/- 5.5 degrees
    const rotX = ((y - centerY) / centerY) * -5.5;
    const rotY = ((x - centerX) / centerX) * 5.5;

    setTilt({
      rotX,
      rotY,
      lightX: (x / rect.width) * 100,
      lightY: (y / rect.height) * 100,
      isHovered: true,
    });
  };

  const handleMouseLeave = () => {
    setTilt({
      rotX: 0,
      rotY: 0,
      lightX: 50,
      lightY: 50,
      isHovered: false,
    });
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-6 h-6 text-cyan-400" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-emerald-400" />;
      case 'Share2':
        return <Share2 className="w-6 h-6 text-blue-400" />;
      case 'Target':
        return <Target className="w-6 h-6 text-rose-400" />;
      case 'Search':
        return <Search className="w-6 h-6 text-amber-400" />;
      case 'Palette':
        return <Palette className="w-6 h-6 text-violet-400" />;
      case 'Bot':
        return <Bot className="w-6 h-6 text-sky-400" />;
      case 'Server':
        return <Server className="w-6 h-6 text-teal-400" />;
      default:
        return <Code2 className="w-6 h-6 text-cyan-400" />;
    }
  };

  const handleCtaClick = () => {
    if (onSelectService) {
      onSelectService(service.title);
    }
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsAppInquiry = () => {
    const text = encodeURIComponent(
      `Hello Build Technology! I am interested in your "${service.title}" service and would like to get a quote and discuss project details.`
    );
    window.open(`${SITE_CONFIG.contact.whatsappLink}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{
        transitionDelay: prefersReducedMotion ? '0ms' : `${index * 60}ms`,
        perspective: '1000px',
      }}
    >
      <div
        className="group relative h-full rounded-2xl bg-gradient-to-b from-slate-900/90 via-slate-900/95 to-slate-950/95 border border-slate-800/80 hover:border-cyan-500/40 p-6 flex flex-col justify-between backdrop-blur-sm overflow-hidden"
        style={{
          transform: prefersReducedMotion
            ? 'none'
            : `perspective(1000px) rotateX(${tilt.rotX}deg) rotateY(${tilt.rotY}deg) ${
                tilt.isHovered ? 'translateZ(6px)' : 'translateZ(0)'
              }`,
          transition: tilt.isHovered
            ? 'transform 0.12s ease-out, border-color 0.3s ease, box-shadow 0.3s ease'
            : 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.4s ease, box-shadow 0.5s ease',
          transformStyle: 'preserve-3d',
          boxShadow: tilt.isHovered
            ? '0 20px 40px -15px rgba(6, 182, 212, 0.18), 0 0 25px -5px rgba(139, 92, 246, 0.15)'
            : '0 4px 20px -2px rgba(0, 0, 0, 0.4)',
        }}
      >
        {/* Dynamic Holographic / Specular Sheen Lighting */}
        {tilt.isHovered && !prefersReducedMotion && (
          <div
            className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-300"
            style={{
              background: `radial-gradient(circle 240px at ${tilt.lightX}% ${tilt.lightY}%, rgba(56, 189, 248, 0.13), rgba(139, 92, 246, 0.08), transparent 70%)`,
            }}
          />
        )}

        {/* Subtle top indicator line on hover */}
        <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/0 to-transparent group-hover:via-cyan-400/70 transition-all duration-500" />

        <div className="relative z-10" style={{ transformStyle: 'preserve-3d' }}>
          {/* Category Badge & 3D Layered Icon */}
          <div className="flex items-center justify-between mb-5">
            <div
              className="p-3 rounded-xl bg-slate-800/90 border border-slate-700/60 group-hover:border-cyan-400/50 shadow-inner group-hover:shadow-[0_0_20px_rgba(56,189,248,0.25)] transition-all duration-300"
              style={{
                transform:
                  !prefersReducedMotion && tilt.isHovered
                    ? 'translateZ(20px) scale(1.06)'
                    : 'translateZ(0px)',
                transition: 'transform 0.25s ease-out, border-color 0.3s ease, box-shadow 0.3s ease',
              }}
            >
              <div className="animate-gentle-float">
                {getIcon(service.icon)}
              </div>
            </div>

            <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 group-hover:text-cyan-300 transition-colors">
              0{index + 1} // {service.category}
            </span>
          </div>

          {/* Service Title */}
          <h3 className="font-display font-bold text-xl text-white group-hover:text-cyan-300 transition-colors mb-2.5">
            {service.title}
          </h3>

          {/* Short Description */}
          <p className="text-slate-400 text-sm leading-relaxed mb-5">
            {service.shortDesc}
          </p>

          {/* Feature Bullet Points */}
          <ul className="space-y-2 mb-6 pt-4 border-t border-slate-800/80">
            {service.features.slice(0, 3).map((feat, fIdx) => (
              <li key={fIdx} className="flex items-start gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom Actions: Primary Service CTA & WhatsApp Quick */}
        <div className="relative z-10 pt-4 border-t border-slate-800/60 flex flex-col gap-2">
          {service.startingPrice && (
            <div className="flex items-center justify-between text-xs text-slate-400 font-mono mb-1">
              <span>Starting Ref:</span>
              <span className="text-cyan-300 font-semibold">{service.startingPrice}</span>
            </div>
          )}

          <button
            type="button"
            onClick={handleCtaClick}
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600 hover:text-white border border-slate-700 hover:border-transparent transition-all shadow-md group-hover:shadow-cyan-500/20 cursor-pointer"
          >
            <span>{service.ctaText}</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            type="button"
            onClick={handleWhatsAppInquiry}
            className="w-full flex items-center justify-center gap-1.5 py-1.5 text-[11px] font-mono text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer"
          >
            <MessageCircle className="w-3 h-3" />
            <span>Inquire via WhatsApp</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return (
    <section id="services" className="relative py-24 bg-[#030712] overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-cyan-600/5 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-violet-600/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-4">
            <span>Specialized Capabilities</span>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight mb-4">
            Engineered For Scale. Built To Dominate.
          </h2>

          <p className="text-slate-400 text-base sm:text-lg">
            From high-conversion web development to multi-channel advertising, SEO, and custom AI systems, we provide end-to-end digital firepower for ambitious businesses.
          </p>
        </div>

        {/* 8 Services Grid with Subtle 3D Card Tilt, Depth Icons & Scroll Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SITE_CONFIG.services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              onSelectService={onSelectService}
              prefersReducedMotion={prefersReducedMotion}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
