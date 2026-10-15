import React, { useState, useEffect } from 'react';
import {
  Send,
  MessageCircle,
  Mail,
  Clock,
  Sparkles,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
} from 'lucide-react';
import { SITE_CONFIG } from '../config/site';

interface ContactSectionProps {
  initialService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialService }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    email: '',
    whatsappNumber: '',
    serviceRequired: initialService || 'Website Development',
    projectDetails: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [lastSubmittedText, setLastSubmittedText] = useState('');

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, serviceRequired: initialService }));
    }
  }, [initialService]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Package inquiry details into WhatsApp formatted string
    const message = `*New Project Inquiry - Build Technology*\n\n` +
      `👤 *Full Name:* ${formData.fullName}\n` +
      `🏢 *Business Name:* ${formData.businessName || 'Not specified'}\n` +
      `📧 *Email:* ${formData.email}\n` +
      `📱 *WhatsApp:* ${formData.whatsappNumber}\n` +
      `🛠️ *Service Required:* ${formData.serviceRequired}\n\n` +
      `📝 *Project Details:*\n${formData.projectDetails}`;

    setLastSubmittedText(message);
    setSubmitted(true);

    const encoded = encodeURIComponent(message);
    const waUrl = `${SITE_CONFIG.contact.whatsappLink}?text=${encoded}`;
    
    // Automatically launch WhatsApp in new tab
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="relative py-24 bg-[#030712] overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-cyan-600/5 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-violet-600/5 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Initiate Collaboration</span>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight mb-4">
            Let's Build Your Project
          </h2>

          <p className="text-slate-400 text-base sm:text-lg">
            Have a project in mind or need expert technical advisory? Fill out the inquiry form below or message our leadership directly on WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-start">
          
          {/* Left Column: Direct Contact Details & WhatsApp Callout */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Primary WhatsApp Direct Box */}
            <div className="relative rounded-3xl p-7 bg-gradient-to-br from-emerald-950/40 via-slate-900 to-slate-950 border border-emerald-500/30 shadow-2xl shadow-emerald-950/30">
              <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-mono w-fit mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>Direct WhatsApp Hotline</span>
              </div>

              <h3 className="font-display font-bold text-2xl text-white mb-2">
                Fastest Response via WhatsApp
              </h3>

              <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                Skip the wait. Chat directly with our technical & marketing team for project scoping, quotes, and rapid project onboarding.
              </p>

              <div className="p-4 rounded-2xl bg-emerald-900/20 border border-emerald-500/25 mb-6">
                <span className="text-xs font-mono text-emerald-400 block mb-1">
                  Official WhatsApp Contact Number:
                </span>
                <span className="font-mono font-bold text-2xl text-white tracking-wider">
                  03172673711
                </span>
                <span className="text-[11px] font-mono text-slate-400 block mt-1">
                  International format: +92 317 2673711
                </span>
              </div>

              <a
                href={SITE_CONFIG.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-sm text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 shadow-xl shadow-emerald-500/20 transition-all transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4 text-slate-950" />
                <span>Open WhatsApp Chat Now</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Official Business Email Box */}
            <div className="rounded-3xl p-6 bg-gradient-to-br from-slate-900 to-slate-950 border border-cyan-500/30 hover:border-cyan-400/60 transition-all shadow-xl">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block mb-1">
                    Official Business Email
                  </span>
                  <a
                    href="mailto:buildtecnology56@gmail.com"
                    className="font-mono text-sm sm:text-base font-bold text-white hover:text-cyan-300 transition-colors break-all inline-flex items-center gap-1.5"
                    title="Send email to buildtecnology56@gmail.com"
                  >
                    <span>buildtecnology56@gmail.com</span>
                    <ExternalLink className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  </a>
                  <p className="text-xs text-slate-400 font-mono mt-1.5 leading-relaxed">
                    Click to launch your email client for proposals, project scoping, and formal inquiries.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Contact Specs */}
            <div className="rounded-3xl p-6 bg-slate-900/60 border border-slate-800 space-y-4">
              <a
                href="mailto:buildtecnology56@gmail.com"
                className="flex items-center gap-3 p-1 -m-1 rounded-xl hover:bg-slate-800/60 transition-colors group"
                title="Send email to buildtecnology56@gmail.com"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center border border-slate-700 text-cyan-400 group-hover:border-cyan-400/50 group-hover:scale-105 transition-all">
                  <Mail className="w-4 h-4 text-cyan-400" />
                </div>
                <div className="min-w-0">
                  <span className="text-xs font-mono text-slate-400 block">Direct Inquiries</span>
                  <span className="text-sm font-medium text-slate-200 group-hover:text-cyan-300 transition-colors break-all">
                    buildtecnology56@gmail.com
                  </span>
                </div>
              </a>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center border border-slate-700">
                  <Clock className="w-4 h-4 text-violet-400" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400 block">Operating Hours</span>
                  <span className="text-sm font-medium text-slate-200">{SITE_CONFIG.contact.availability}</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center border border-slate-700">
                  <ShieldCheck className="w-4 h-4 text-sky-400" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400 block">Privacy Guarantee</span>
                  <span className="text-sm font-medium text-slate-200">NDA Protected & Strict Confidentiality</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl p-8 sm:p-10 bg-slate-900/80 border border-slate-800 backdrop-blur-md shadow-2xl relative">
              
              <h3 className="font-display font-bold text-2xl text-white mb-2">
                Send Project Inquiry
              </h3>
              <p className="text-slate-400 text-sm mb-8">
                Tell us about your requirements. Submitting this form routes your project specs instantly to our team on WhatsApp for prompt review.
              </p>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center animate-fadeIn">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-display font-bold text-lg text-white mb-2">
                    Inquiry Form Prepared & Routed
                  </h4>
                  <p className="text-slate-300 text-sm mb-5 leading-relaxed">
                    Your inquiry details have been formatted for our WhatsApp hotline at <strong className="text-emerald-300">03172673711</strong>. If the WhatsApp window did not open automatically, click the button below:
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <a
                      href={`${SITE_CONFIG.contact.whatsappLink}?text=${encodeURIComponent(lastSubmittedText)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold text-xs"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Continue to WhatsApp</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-xs border border-slate-700"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                        Full Name <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Asad Ali"
                        className="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>

                    {/* Business Name (Optional) */}
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                        Business Name <span className="text-slate-500">(Optional)</span>
                      </label>
                      <input
                        type="text"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleChange}
                        placeholder="e.g. Apex Enterprises"
                        className="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Email Address */}
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                        Email Address <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. asad@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>

                    {/* WhatsApp Number */}
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                        WhatsApp Number <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="tel"
                        name="whatsappNumber"
                        required
                        value={formData.whatsappNumber}
                        onChange={handleChange}
                        placeholder="e.g. 03001234567"
                        className="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Service Required Dropdown */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                      Service Required <span className="text-cyan-400">*</span>
                    </label>
                    <select
                      name="serviceRequired"
                      value={formData.serviceRequired}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                    >
                      <optgroup label="Pricing Plans (USD)">
                        <option value="Basic Website" className="bg-slate-900 text-white">
                          Basic Website ($150)
                        </option>
                        <option value="Premium Website" className="bg-slate-900 text-white">
                          Premium Website ($250)
                        </option>
                        <option value="Meta Ads & Google Ads Management" className="bg-slate-900 text-white">
                          Meta Ads & Google Ads Management ($25)
                        </option>
                        <option value="Digital Marketing Growth" className="bg-slate-900 text-white">
                          Digital Marketing Growth ($100)
                        </option>
                      </optgroup>
                      <optgroup label="Core Services">
                        {SITE_CONFIG.services.map((s) => (
                          <option key={s.id} value={s.title} className="bg-slate-900 text-white">
                            {s.title}
                          </option>
                        ))}
                      </optgroup>
                      <option value="Complete Digital Transformation" className="bg-slate-900 text-white">
                        Complete Digital Transformation (Full Package)
                      </option>
                      <option value="Other Project Inquiry" className="bg-slate-900 text-white">
                        Other Project Inquiry
                      </option>
                    </select>
                  </div>

                  {/* Project Details */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                      Project Details <span className="text-cyan-400">*</span>
                    </label>
                    <textarea
                      name="projectDetails"
                      rows={4}
                      required
                      value={formData.projectDetails}
                      onChange={handleChange}
                      placeholder="Tell us about your target goals, timeline, brand vision, or any reference websites you admire..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-xl font-bold text-sm text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-300 hover:from-cyan-300 hover:to-sky-200 shadow-xl shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4 text-slate-950" />
                    <span>Send Project Inquiry</span>
                  </button>

                  <p className="text-center text-[11px] font-mono text-slate-400 mt-2">
                    Direct submission securely opens WhatsApp with your pre-filled inquiry. No spam guaranteed.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
