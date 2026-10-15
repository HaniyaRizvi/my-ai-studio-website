import React, { useState, useEffect, useRef } from 'react';
import {
  MessageSquare,
  X,
  Send,
  Bot,
  User,
  Sparkles,
  MessageCircle,
  ExternalLink,
  ChevronDown,
  Info,
} from 'lucide-react';
import { SITE_CONFIG } from '../config/site';

interface ChatMessage {
  id: string;
  role: 'assistant' | 'user';
  content: string;
  timestamp: string;
}

export const ChatbotWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [aiMode, setAiMode] = useState<'live' | 'demo'>('live');
  const [hasInteracted, setHasInteracted] = useState(false);
  const [showConfigNotice, setShowConfigNotice] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initial welcome message
  useEffect(() => {
    const welcomeTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setMessages([
      {
        id: 'welcome-1',
        role: 'assistant',
        content: `Hello and welcome to **Build Technology**! I am your **BuildTech AI Assistant**.\n\nWe build high-performance **Websites**, **Digital Marketing Strategies**, **Meta & Google Ads**, **SEO**, **Branding**, and **AI Solutions** that grow your business.\n\nHow can I help you today? You can choose a quick topic below or type your project details!`,
        timestamp: welcomeTime,
      },
    ]);

    // Check backend status
    fetch('/api/status')
      .then((res) => res.json())
      .then((data) => {
        if (data.hasApiKey) {
          setAiMode('live');
        } else {
          setAiMode('demo');
        }
      })
      .catch(() => {
        setAiMode('demo');
      });
  }, []);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping, isOpen]);

  const quickReplies = [
    'How much does a website cost?',
    'Google & Meta Ads services ($25)',
    'Official Business Email',
    'AI Chatbots & Automation',
    'Chat on WhatsApp (03172673711)',
  ];

  const handleSendMessage = async (textToSend?: string) => {
    const text = textToSend || inputValue.trim();
    if (!text || isTyping) return;

    setHasInteracted(true);
    setInputValue('');

    const userTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: text,
      timestamp: userTime,
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, userMessage].map((m) => ({
            role: m.role,
            content: m.content,
          })),
          userMessage: text,
        }),
      });

      if (!response.ok) {
        throw new Error('API response failed');
      }

      const data = await response.json();
      const assistantTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

      if (data.mode === 'live-gemini') {
        setAiMode('live');
      } else {
        setAiMode('demo');
      }

      setMessages((prev) => [
        ...prev,
        {
          id: `assistant-${Date.now()}`,
          role: 'assistant',
          content: data.reply,
          timestamp: assistantTime,
        },
      ]);
    } catch {
      // Local fallback in case network / server is unreachable
      setAiMode('demo');
      const assistantTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      
      let fallbackText = `Thank you for reaching out to Build Technology!\n\nOur official plans include:\n• **Basic Website**: **$150**\n• **Premium Website**: **$250**\n• **Meta & Google Ads Management**: **$25** (management fee; ad spend separate)\n• **Digital Marketing Growth**: **$100**\n\nFor questions, proposals, or project onboarding, please reach us on WhatsApp at [03172673711](https://wa.me/923172673711) or email us directly at [buildtecnology56@gmail.com](mailto:buildtecnology56@gmail.com).`;
      
      const lower = text.toLowerCase();
      if (lower.includes('price') || lower.includes('cost') || lower.includes('usd') || lower.includes('$') || lower.includes('pkr')) {
        fallbackText = `Here is our transparent pricing for Build Technology's core plans:\n\n• **Basic Website**: **$150** (Professional basic website, responsive mobile design, essential pages, basic SEO)\n• **Premium Website**: **$250** (Modern interactive 3D website, advanced animations, WhatsApp integration, basic SEO)\n• **Meta Ads & Google Ads Management**: **$25** (Campaign management service fee for Facebook, Instagram & Google Ads; ad spend paid to platforms is separate)\n• **Digital Marketing Growth**: **$100** (Full digital marketing strategy, social media content planning, brand visibility & reporting)\n\nContact our team directly on WhatsApp at [03172673711](https://wa.me/923172673711) or email [buildtecnology56@gmail.com](mailto:buildtecnology56@gmail.com) for an instant quotation!`;
      } else if (lower.includes('email') || lower.includes('mail') || lower.includes('contact')) {
        fallbackText = `Our official business contact details are:\n\n• **Email**: [buildtecnology56@gmail.com](mailto:buildtecnology56@gmail.com)\n• **WhatsApp**: [03172673711](https://wa.me/923172673711)\n• **Instagram**: [buildtechnology35](https://www.instagram.com/buildtechnology35/)\n• **Facebook**: [Build Technology](https://www.facebook.com/share/1HuXNBYBsx/)\n\nFeel free to write to us or message on WhatsApp anytime!`;
      }

      setMessages((prev) => [
        ...prev,
        {
          id: `assistant-${Date.now()}`,
          role: 'assistant',
          content: fallbackText,
          timestamp: assistantTime,
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Helper to render Markdown-like bold and links in messages safely
  const formatMessage = (content: string) => {
    const parts = content.split('\n');
    return parts.map((line, idx) => {
      // Bold tags
      let parsed = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
      // WhatsApp links
      parsed = parsed.replace(
        /\[(.*?)\]\((https:\/\/wa\.me\/[0-9]+)\)/g,
        '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-emerald-400 font-semibold underline underline-offset-2 hover:text-emerald-300">$1</a>'
      );
      return (
        <span
          key={idx}
          className="block mb-1.5 last:mb-0"
          dangerouslySetInnerHTML={{ __html: parsed }}
        />
      );
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      
      {/* Floating Trigger Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="group relative flex items-center gap-3 px-5 py-3.5 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 text-white font-semibold text-sm shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-400/50 transition-all transform hover:-translate-y-1 active:translate-y-0"
          aria-label="Open BuildTech AI Assistant"
        >
          <div className="relative">
            <Bot className="w-5 h-5 text-white animate-pulse" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-slate-950"></span>
          </div>
          <span className="font-display tracking-wide">BuildTech AI</span>
          <span className="hidden sm:inline-block px-2 py-0.5 rounded-full bg-white/20 text-[10px] font-mono uppercase">
            Online
          </span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="w-[92vw] sm:w-[400px] h-[550px] max-h-[85vh] rounded-3xl bg-[#070e20] border border-cyan-500/30 shadow-2xl shadow-cyan-950/60 flex flex-col overflow-hidden animate-fadeIn backdrop-blur-xl">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-[#0c1836] p-4 border-b border-cyan-500/20 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 to-violet-600 p-[1px] flex items-center justify-center">
                <div className="w-full h-full rounded-xl bg-slate-900 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-cyan-400" />
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border border-slate-900"></span>
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-display font-bold text-sm text-white">
                    BuildTech AI Assistant
                  </h4>
                  <button
                    type="button"
                    onClick={() => setShowConfigNotice(!showConfigNotice)}
                    className="text-slate-400 hover:text-cyan-300"
                    title="AI Mode Status"
                  >
                    <Info className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  <span
                    className={`inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-wider ${
                      aiMode === 'live' ? 'text-emerald-400' : 'text-amber-400'
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        aiMode === 'live' ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'
                      }`}
                    />
                    {aiMode === 'live' ? 'Gemini 3.8 Flash' : 'Demo Mode • WhatsApp Ready'}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label="Close Chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* AI Mode Explanation Banner (Collapsible) */}
          {showConfigNotice && (
            <div className="p-3 bg-slate-900 border-b border-slate-800 text-[11px] text-slate-300 font-mono flex items-start justify-between gap-2">
              <div>
                <strong className="text-cyan-300">Chatbot Architecture:</strong> Powered by server-side Gemini AI. When an API key is attached in Secrets, it runs live via <code className="text-cyan-400">gemini-3.8-flash</code>. In demo mode, it provides comprehensive pre-trained knowledge with instant WhatsApp routing.
              </div>
              <button
                onClick={() => setShowConfigNotice(false)}
                className="text-slate-400 hover:text-white"
              >
                <ChevronDown className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 text-xs">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.role === 'assistant' && (
                  <div className="w-6 h-6 rounded-lg bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 flex items-center justify-center shrink-0 mt-1">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                )}

                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-tr-none'
                      : 'bg-slate-900/90 border border-slate-800 text-slate-200 rounded-tl-none shadow-md'
                  }`}
                >
                  <div className="break-words">{formatMessage(msg.content)}</div>
                  <span className="text-[9px] font-mono text-slate-400/80 block text-right mt-1.5">
                    {msg.timestamp}
                  </span>
                </div>

                {msg.role === 'user' && (
                  <div className="w-6 h-6 rounded-lg bg-blue-600/30 border border-blue-500/40 text-blue-200 flex items-center justify-center shrink-0 mt-1">
                    <User className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-2.5 justify-start items-center">
                <div className="w-6 h-6 rounded-lg bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 flex items-center justify-center shrink-0">
                  <Bot className="w-3.5 h-3.5" />
                </div>
                <div className="bg-slate-900 border border-slate-800 px-4 py-2.5 rounded-2xl rounded-tl-none flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce [animation-delay:0.4s]"></span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Reply Chips */}
          <div className="px-3 py-2 bg-slate-950/60 border-t border-slate-800/80 overflow-x-auto no-scrollbar flex items-center gap-2">
            {quickReplies.map((reply, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleSendMessage(reply)}
                className="shrink-0 px-2.5 py-1 rounded-full bg-slate-900 hover:bg-cyan-500/20 border border-slate-800 hover:border-cyan-400/50 text-[11px] text-slate-300 hover:text-cyan-300 transition-colors"
              >
                {reply}
              </button>
            ))}
          </div>

          {/* WhatsApp Direct Option Bar */}
          <div className="px-4 py-2 bg-emerald-950/30 border-t border-emerald-500/20 flex items-center justify-between text-[11px] font-mono text-emerald-300">
            <span className="flex items-center gap-1.5">
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>Direct WhatsApp: 03172673711</span>
            </span>
            <a
              href={SITE_CONFIG.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-emerald-400 hover:underline"
            >
              <span>Chat</span>
              <ExternalLink className="w-2.5 h-2.5" />
            </a>
          </div>

          {/* Input Bar */}
          <div className="p-3 bg-slate-900 border-t border-slate-800 flex items-center gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask about websites, ads, SEO, quotes..."
              className="flex-1 px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-400 text-xs focus:outline-none focus:border-cyan-400 transition-colors"
            />
            <button
              onClick={() => handleSendMessage()}
              disabled={!inputValue.trim() || isTyping}
              className="p-2.5 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 text-slate-950 font-bold hover:opacity-90 disabled:opacity-40 transition-opacity cursor-pointer"
              aria-label="Send Message"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>

        </div>
      )}

    </div>
  );
};
