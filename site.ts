export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  category: string;
  icon: string;
  ctaText: string;
  startingPrice?: string;
  features: string[];
}

export interface DemoProject {
  id: string;
  title: string;
  category: string;
  description: string;
  url: string;
  displayUrl: string;
  tags: string[];
  gradient: string;
  accentColor: string;
  highlight: string;
}
export const SITE_CONFIG = {
  name: 'Build Technology',
  tagline: 'We Build Digital Experiences That Grow Your Business.',
  heroHeadline: 'Build Better. Grow Faster.',
  heroSupportingText:
    'We turn your ideas into powerful websites, digital marketing strategies, and intelligent AI solutions.',
  brandDescription:
    'Build Technology is a digital marketing agency helping businesses grow through professional website development, digital marketing, Meta Ads, Google Ads, SEO, branding, and AI-powered customer support solutions.',
  primaryCta: 'Let’s Build Your Project',
  secondaryCta: 'Explore Our Services',
  aboutHeadline: 'Technology That Turns Ideas Into Growth.',
  
  founders: [
    { role: 'Co-Founder', name: 'Syed Haider Rizvi' },
    { role: 'Co-Founder', name: 'Syefa Haniya Rizvi' },
  ],
  
  contact: {
    whatsappNumber: '03172673711',
    whatsappInternational: '923172673711',
    whatsappLink: 'https://wa.me/923172673711',
    email: 'buildtecnology56@gmail.com',
    location: 'Pakistan (Global Remote & On-Site Deployments)',
    availability: 'Monday - Saturday: 9:00 AM - 9:00 PM PKT',
  },

  // Official social media links
  social: {
    whatsapp: 'https://wa.me/923172673711',
    instagram: 'https://www.instagram.com/buildtechnology35/',
    facebook: 'https://www.facebook.com/share/1HuXNBYBsx/',
    linkedin: 'https://linkedin.com/company/buildtechnology-pk',
    github: 'https://github.com/buildtechnology',
  },

  services: [
    {
      id: 'website-development',
      title: 'Website Development',
      shortDesc: 'Business websites, company websites, landing pages, portfolio websites, and responsive web applications.',
      fullDesc: 'From lightning-fast corporate websites to high-converting landing pages and dynamic SaaS web apps. Built with modern React, Next.js, responsive layouts, high performance, and airtight security.',
      category: 'Engineering',
      icon: 'Code2',
      ctaText: 'Build My Website',
      startingPrice: '$150 (Basic) / $250 (Premium)',
      features: [
        'Custom Responsive Corporate & Business Websites',
        'High-Converting Landing Pages & Portfolio Hubs',
        'Next.js / React Modern Framework Architecture',
        'Mobile-First Optimization & Core Web Vitals',
        'Secure Content Management & Fast Deployment',
      ],
    },
    {
      id: 'digital-marketing',
      title: 'Digital Marketing',
      shortDesc: 'Digital strategy, online brand growth, campaign planning, and lead generation.',
      fullDesc: 'Comprehensive full-funnel digital marketing tailored to your market. We combine data-backed audience research, content positioning, and multi-channel marketing to drive qualified leads.',
      category: 'Growth',
      icon: 'TrendingUp',
      ctaText: 'Grow My Business',
      startingPrice: '$100 (Growth Plan)',
      features: [
        'Holistic Brand Growth & Market Positioning',
        'Multi-Channel Lead Generation Strategies',
        'Funnel Architecture & Conversion Optimization',
        'Data-Driven Audience Persona Profiling',
        'Comprehensive Analytics & ROI Reporting',
      ],
    },
    {
      id: 'meta-ads',
      title: 'Meta Ads',
      shortDesc: 'Facebook and Instagram advertising, audience targeting, campaign setup, and performance optimization.',
      fullDesc: 'Harness the immense reach of Facebook and Instagram. We construct laser-targeted custom audiences, high-impact creative ad sets, and ROAS-focused retargeting sequences.',
      category: 'Paid Media',
      icon: 'Share2',
      ctaText: 'Launch My Ads',
      startingPrice: '$25 (Management Fee)',
      features: [
        'Facebook & Instagram Paid Ad Management',
        'Laser-Targeted Demographics & Lookalike Audiences',
        'Dynamic Creative Testing & Ad Copywriting',
        'Pixel & Conversion API (CAPI) Integration',
        'Continuous Budget & Bid Optimization',
      ],
    },
    {
      id: 'google-ads',
      title: 'Google Ads',
      shortDesc: 'Search advertising, campaign management, keyword planning, and conversion-focused optimization.',
      fullDesc: 'Capture high-intent buyers exactly when they are searching for your services. We craft intent-driven Google Search, Display, and Performance Max campaigns.',
      category: 'Search Marketing',
      icon: 'Target',
      ctaText: 'Get More Customers',
      startingPrice: '$25 (Management Fee)',
      features: [
        'High-Intent Google Search & Display Campaigns',
        'In-Depth Keyword Planning & Negative Match Filtering',
        'Quality Score & Ad Rank Maximization',
        'Conversion Tracking & Goal Setup',
        'Weekly Performance Audit & Bid Adjustments',
      ],
    },
    {
      id: 'seo',
      title: 'Search Engine Optimization (SEO)',
      shortDesc: 'On-page SEO, technical SEO, keyword research, and organic visibility improvement.',
      fullDesc: 'Dominate organic search rankings and build sustainable long-term traffic without relying solely on ads. Comprehensive technical audits, on-page optimization, and site speed enhancement.',
      category: 'Search Optimization',
      icon: 'Search',
      ctaText: 'Improve My Rankings',
      startingPrice: 'Custom Plan',
      features: [
        'On-Page Optimization (Titles, Meta, Hierarchy)',
        'Technical SEO (Schema, Sitemaps, Crawlability)',
        'High-Value Keyword & Competitor Research',
        'Core Web Vitals & Page Speed Acceleration',
        'Organic Search Authority & Google Search Console',
      ],
    },
    {
      id: 'branding-design',
      title: 'Logo & Brand Design',
      shortDesc: 'Professional logos, brand identity, social media creatives, and visual consistency.',
      fullDesc: 'Craft an unforgettable brand aesthetic that inspires trust. We design sleek logos, brand guidelines, color palettes, typography systems, and modern social media kits.',
      category: 'Creative Design',
      icon: 'Palette',
      ctaText: 'Design My Brand',
      startingPrice: 'Custom Plan',
      features: [
        'Distinctive Modern Vector Logo Design',
        'Comprehensive Brand Guidelines & Typography',
        'Color Palettes & Visual Style Direction',
        'Social Media Kit & Digital Marketing Creatives',
        'Vector Assets & High-Resolution Export Formats',
      ],
    },
    {
      id: 'ai-chatbots',
      title: 'AI Chatbots & Automation',
      shortDesc: 'Website AI chatbots, customer support automation, FAQs, and lead qualification.',
      fullDesc: 'Transform your website into a 24/7 client acquisition machine. Intelligent AI conversational agents that engage visitors, answer complex questions, qualify leads, and route inquiries to WhatsApp.',
      category: 'Artificial Intelligence',
      icon: 'Bot',
      ctaText: 'Explore AI Solutions',
      startingPrice: 'Custom Plan',
      features: [
        '24/7 Intelligent AI Website Chatbots',
        'Lead Capture & Automatic Qualification',
        'Seamless WhatsApp & CRM Handoff Integration',
        'Custom Business Knowledge Base Training',
        'Automated Customer Support Workflows',
      ],
    },
    {
      id: 'web-hosting-deployment',
      title: 'Web Hosting & Deployment',
      shortDesc: 'Website deployment, domain guidance, hosting setup, and website maintenance.',
      fullDesc: 'Worry-free infrastructure management. We handle secure domain configuration, modern SSL certificates, ultra-fast cloud server hosting, automated backups, and 99.9% uptime maintenance.',
      category: 'DevOps & Cloud',
      icon: 'Server',
      ctaText: 'Launch My Website',
      startingPrice: 'Custom Plan',
      features: [
        'High-Speed Cloud Hosting Setup & Configuration',
        'Domain DNS Configuration & Free SSL Certificates',
        'Continuous Automated Backups & Monitoring',
        '99.9% Uptime Guarantee & Security Firewalls',
        'Ongoing Maintenance & Version Updates',
      ],
    },
  ] as ServiceItem[],

  pricing: [
    {
      id: 'basic-website',
      title: 'Basic Website',
      subtitle: 'Professional, Clean & Mobile-Ready Web Launch',
      price: '$150',
      period: 'One-Time Project Rate',
      popular: false,
      tag: 'Starter Tier',
      features: [
        'Professional basic website',
        'Responsive mobile-friendly design',
        'Essential pages and sections',
        'Contact information and inquiry button',
        'Basic SEO setup',
      ],
      note: 'Perfect for local businesses & personal portfolios needing an immediate high-quality web presence.',
      serviceId: 'website-development',
      ctaText: 'Get Basic Website',
    },
    {
      id: 'premium-website',
      title: 'Premium Website',
      subtitle: 'Advanced Interactive 3D & High-Conversion Experience',
      price: '$250',
      period: 'Complete Bespoke Solution',
      popular: true,
      tag: 'Best Value',
      features: [
        'Premium modern website design',
        'Advanced animations and interactive effects',
        'Responsive desktop and mobile layouts',
        'Professional service sections',
        'Contact form and WhatsApp integration',
        'Basic SEO setup',
      ],
      note: 'Ideal for established businesses wanting stunning 3D micro-interactions, custom styling, and lead capture.',
      serviceId: 'website-development',
      ctaText: 'Get Premium Website',
    },
    {
      id: 'ads-management',
      title: 'Meta Ads & Google Ads Management',
      subtitle: 'Targeted Campaign Setup & Continuous Optimization',
      price: '$25',
      period: 'Management Service Fee',
      popular: false,
      tag: 'Ads Management',
      features: [
        'Meta Ads campaign management',
        'Facebook and Instagram advertising management',
        'Google Ads campaign management',
        'Basic campaign monitoring and optimization',
      ],
      note: 'Notice: $25 is the management service fee only. Advertising spend paid to Meta or Google is separate. Billing period and campaign scope clarified before project commencement.',
      serviceId: 'google-ads',
      ctaText: 'Manage My Ads',
    },
    {
      id: 'digital-marketing',
      title: 'Digital Marketing Growth',
      subtitle: 'Full Strategic Brand Growth & Planning Roadmap',
      price: '$100',
      period: 'Growth Strategy Package',
      popular: false,
      tag: 'Brand Scale',
      features: [
        'Digital marketing strategy',
        'Social media content planning',
        'Brand visibility improvement',
        'Marketing campaign planning',
        'Basic performance reporting',
      ],
      note: 'Notice: Comprehensive digital growth & social media strategy roadmap. Paid advertising budgets are separate. Billing period clarified based on scope.',
      serviceId: 'digital-marketing',
      ctaText: 'Grow My Business',
    },
  ],

  portfolioDemos: [
    {
      id: 'estate1',
      title: 'Estate 1',
      category: 'Real Estate & Property Platform',
      description: 'A modern real estate portal featuring property discovery, high-end listings, interactive filters, and client inquiry systems.',
      url: 'https://estate1.pk/',
      displayUrl: 'estate1.pk',
      tags: ['Real Estate', 'Property Listings', 'Lead Portal', 'Responsive'],
      gradient: 'from-blue-600/20 via-cyan-500/20 to-sky-900/30',
      accentColor: '#38BDF8',
      highlight: 'Property Search & Showcase Architecture',
    },
    {
      id: 'megpakistan',
      title: 'MEG Pakistan',
      category: 'Corporate & Industrial Engineering',
      description: 'An authoritative corporate presence representing engineering excellence, industrial solutions, and organizational infrastructure.',
      url: 'https://megpakistan.com/',
      displayUrl: 'megpakistan.com',
      tags: ['Corporate', 'Industrial', 'Engineering', 'Global Services'],
      gradient: 'from-emerald-600/20 via-teal-500/20 to-slate-900/30',
      accentColor: '#34D399',
      highlight: 'Industrial Brand Authority & Services',
    },
    {
      id: 'coffeebean',
      title: 'Coffee Bean',
      category: 'Food, Beverage & Lifestyle Cafe',
      description: 'A rich culinary lifestyle and cafe brand experience showcasing gourmet menus, branch locators, and aesthetic brand identity.',
      url: 'https://www.coffeebean.pk/',
      displayUrl: 'coffeebean.pk',
      tags: ['Lifestyle & Dining', 'Gourmet Cafe', 'Brand Experience', 'Visual Menu'],
      gradient: 'from-amber-600/20 via-orange-500/20 to-amber-950/30',
      accentColor: '#F59E0B',
      highlight: 'Immersive Lifestyle & Menu Showcase',
    },
    {
      id: 'rosebeautyparlour',
      title: 'Rose Beauty Parlour',
      category: 'Luxury Salon & Aesthetic Services',
      description: 'A stylish, elegant beauty and aesthetic services showcase featuring appointment inquiries, service catalogs, and luxury presentation.',
      url: 'https://www.rosebeautyparlourofficial.com/',
      displayUrl: 'rosebeautyparlourofficial.com',
      tags: ['Beauty & Salon', 'Aesthetic Luxury', 'Service Catalog', 'Mobile First'],
      gradient: 'from-rose-600/20 via-pink-500/20 to-purple-950/30',
      accentColor: '#F43F5E',
      highlight: 'Luxury Aesthetic & Booking Catalog',
    },
    {
      id: 'pakedrive',
      title: 'PakeDrive',
      category: 'Automotive & Vehicle Rental Marketplace',
      description: 'A dynamic automotive vehicle fleet and rental portal designed for intuitive search, vehicle specifications, and fast booking inquiries.',
      url: 'https://www.pakedrive.com/',
      displayUrl: 'pakedrive.com',
      tags: ['Automotive', 'Fleet & Rentals', 'Booking Inquiry', 'Vehicle Specs'],
      gradient: 'from-indigo-600/20 via-purple-500/20 to-slate-950/30',
      accentColor: '#818CF8',
      highlight: 'Vehicle Fleet & On-Demand Booking UX',
    },
  ] as DemoProject[],

  processSteps: [
    {
      number: '01',
      title: 'Discovery',
      desc: 'We analyze your business model, target audience, competitive landscape, and digital growth objectives.',
    },
    {
      number: '02',
      title: 'Planning',
      desc: 'Developing a bulletproof architecture, technical blueprint, milestone timeline, and marketing funnel strategy.',
    },
    {
      number: '03',
      title: 'Design',
      desc: 'Creating interactive 3D concepts, wireframes, modern UI/UX design systems, and brand assets that mesmerize users.',
    },
    {
      number: '04',
      title: 'Development',
      desc: 'Writing clean, scalable code with cutting-edge frameworks, robust database schemas, and AI workflow integrations.',
    },
    {
      number: '05',
      title: 'Testing',
      desc: 'Rigorous cross-browser QA, mobile responsiveness auditing, speed optimization, and security verification.',
    },
    {
      number: '06',
      title: 'Launch & Support',
      desc: 'Seamless production deployment, DNS setup, marketing campaign kick-off, and ongoing technical maintenance.',
    },
  ],

  whyChooseUs: [
    {
      title: 'Creative Digital Solutions',
      desc: 'Every design and software application is tailored to solve concrete problems with visual flair and unmatched performance.',
      icon: 'Sparkles',
    },
    {
      title: 'Business-Focused Strategy',
      desc: 'We do not build technology for technology’s sake. Every line of code and ad campaign is tuned for measurable business ROI.',
      icon: 'Target',
    },
    {
      title: 'Modern Technology',
      desc: 'Built on future-ready frameworks, 3D WebGL visuals, cloud-native infrastructure, and cutting-edge AI automation.',
      icon: 'Cpu',
    },
    {
      title: 'Customer-Centered Support',
      desc: 'Direct, transparent communication with senior engineering leadership and dedicated WhatsApp project channels.',
      icon: 'Headphones',
    },
  ],

  faqs: [
    {
      question: 'What services does Build Technology specialize in?',
      answer:
        'Build Technology specializes in full-stack Website Development, Digital Marketing Strategy, Meta Ads (Facebook & Instagram), Google Ads Search Marketing, Search Engine Optimization (SEO), Logo & Brand Design, Custom AI Chatbots & Automation, and Web Hosting & Cloud Deployment.',
    },
    {
      question: 'How do I start a new project with Build Technology?',
      answer:
        'You can get started in seconds! Use our online project inquiry form on this website, chat with our BuildTech AI Assistant, or directly message our team on WhatsApp at 03172673711 (or click the floating WhatsApp button). We typically review requirements and reply within a few hours.',
    },
    {
      question: 'How are project pricing and payment structures handled?',
      answer:
        'Our reference rates are transparent: Basic Website is $150, Premium Website is $250, Meta & Google Ads management has a service fee of $25 (ad spend paid directly to platforms), and Digital Marketing Growth is $100. Each engagement is tailored with a clear scope of work and milestones before commencement.',
    },
    {
      question: 'Can you help integrate AI chatbots into our existing business website?',
      answer:
        'Yes! We build intelligent conversational AI assistants capable of answering customer questions, qualifying leads, booking consultations, and handing off conversations directly to WhatsApp or your CRM.',
    },
    {
      question: 'Are external inspiration websites owned by Build Technology?',
      answer:
        'The websites in our Inspiration & Live Examples showcase (Estate 1, MEG Pakistan, Coffee Bean, Rose Beauty Parlour, PakeDrive) are high-standard live web benchmarks selected for industry inspiration, demonstration, and visual benchmarks.',
    },
  ],
};
