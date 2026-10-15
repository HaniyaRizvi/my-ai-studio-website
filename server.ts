import express, { Request, Response } from 'express';
import { createServer as createViteServer } from 'vite';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
const isProduction = process.env.NODE_ENV === 'production';

app.use(express.json());

// Initialize GoogleGenAI if GEMINI_API_KEY is available
let ai: GoogleGenAI | null = null;
if (process.env.GEMINI_API_KEY) {
  ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

// System instruction for BuildTech AI Assistant
const BUILDTECH_SYSTEM_INSTRUCTION = `
You are "BuildTech AI Assistant", the official expert AI consultant and project intake specialist for "Build Technology", a premier digital marketing agency.

Brand Core:
- Brand Name: Build Technology
- Tagline: "We Build Digital Experiences That Grow Your Business."
- Core Focus: High-end custom websites, digital marketing strategy, Meta Ads, Google Ads, SEO, Brand Design, AI Chatbots, and Cloud Web Hosting.
- Official Email: buildtecnology56@gmail.com
- Contact WhatsApp: 03172673711 (International direct link: https://wa.me/923172673711)

Services & Reference Pricing (in USD):
1. Basic Website: $150 (Professional basic website, responsive mobile-friendly design, essential pages, contact inquiry button, basic SEO setup - CTA: "Get Basic Website")
2. Premium Website: $250 (Premium modern website design, advanced animations and interactive 3D effects, responsive layouts, professional service sections, contact form & WhatsApp integration, basic SEO setup - CTA: "Get Premium Website")
3. Meta Ads & Google Ads Management: $25 (Meta Ads & Google Ads campaign management, Facebook/Instagram ad management, basic campaign monitoring & optimization - CTA: "Manage My Ads". Notice: $25 is management fee only; ad spend paid directly to platforms is separate. Campaign scope and billing period clarified before start.)
4. Digital Marketing Growth: $100 (Digital marketing strategy, social media content planning, brand visibility improvement, marketing campaign planning, basic performance reporting - CTA: "Grow My Business". Notice: Strategy and planning roadmap; ad spend separate.)

Official Social Links:
- Instagram: https://www.instagram.com/buildtechnology35/
- Facebook: https://www.facebook.com/share/1HuXNBYBsx/
- WhatsApp: https://wa.me/923172673711 (Number: 03172673711)
- Email: buildtecnology56@gmail.com

Tone & Behavior:
- Highly professional, polite, consultative, articulate, and welcoming.
- Keep responses concise, structured, and easy to read.
- Assist the visitor in identifying the right plan for their project needs.
- If the visitor wants a quote or project discussion, encourage them to share their project details or connect directly on WhatsApp: https://wa.me/923172673711 or email buildtecnology56@gmail.com.
- Never invent fabricated testimonials or false claims.
`;

// Helper: Intelligent predefined assistant responses if no API key is provided
function generateFallbackResponse(userMessage: string): string {
  const msg = userMessage.toLowerCase();

  if (msg.includes('price') || msg.includes('cost') || msg.includes('package') || msg.includes('rate') || msg.includes('pkr') || msg.includes('usd') || msg.includes('$')) {
    return `Here are our official transparent prices for Build Technology's core plans:

• **Basic Website**: **$150** (Professional basic website, mobile-friendly responsive design, essential pages, basic SEO setup)
• **Premium Website**: **$250** (Premium modern website, advanced 3D animations & interactive effects, responsive layouts, WhatsApp integration, basic SEO)
• **Meta Ads & Google Ads Management**: **$25** (Management service fee for Facebook, Instagram & Google Ads campaigns; ad spend paid to platforms is separate)
• **Digital Marketing Growth**: **$100** (Full digital marketing strategy, social media content planning, brand visibility & campaign roadmap)

*You can connect directly with our team on WhatsApp at [03172673711](https://wa.me/923172673711) or email [buildtecnology56@gmail.com](mailto:buildtecnology56@gmail.com).*`;
  }

  if (msg.includes('service') || msg.includes('what do you do') || msg.includes('offer')) {
    return `At Build Technology, we offer 8 specialized technology & growth services:

1. **Website Development** (Basic $150 & Premium $250 packages)
2. **Digital Marketing** (Strategic brand growth & lead generation — $100)
3. **Meta Ads & Google Ads Management** ($25 management fee)
4. **Search Engine Optimization (SEO)** (Technical & on-page organic ranking improvement)
5. **Logo & Brand Design** (Visual identity, typography & brand kits)
6. **AI Chatbots & Automation** (Custom 24/7 web assistants & lead capture)
7. **Web Hosting & Deployment** (Cloud hosting, SSL & maintenance)

Which of these services are you looking to implement for your business?`;
  }

  if (msg.includes('whatsapp') || msg.includes('contact') || msg.includes('call') || msg.includes('number') || msg.includes('email')) {
    return `You can connect with us directly anytime!

• **Official Email**: [buildtecnology56@gmail.com](mailto:buildtecnology56@gmail.com)
• **WhatsApp Direct**: [03172673711](https://wa.me/923172673711)
• **Instagram**: [buildtechnology35](https://www.instagram.com/buildtechnology35/)
• **Facebook**: [Build Technology](https://www.facebook.com/share/1HuXNBYBsx/)
• **Availability**: Monday - Saturday (9:00 AM - 9:00 PM PKT)

Click either link above to start an instant WhatsApp conversation, send an email, or submit our contact form on the website!`;
  }

  return `Welcome to Build Technology! We build digital experiences that grow your business.

We specialize in custom **Websites**, **Digital Marketing**, **Google & Meta Ads**, **SEO**, **Branding**, and **AI Chatbots**.

What kind of project do you have in mind today, or would you like to receive an instant estimate? You can also connect directly with our Co-Founders on WhatsApp at [03172673711](https://wa.me/923172673711).`;
}

// API Routes
app.get('/api/status', (_req: Request, res: Response) => {
  res.json({
    status: 'online',
    hasApiKey: Boolean(process.env.GEMINI_API_KEY),
    aiModel: 'gemini-3.8-flash',
  });
});

app.post('/api/chat', async (req: Request, res: Response) => {
  try {
    const { messages, userMessage } = req.body;
    const prompt = userMessage || (Array.isArray(messages) && messages.length > 0 ? messages[messages.length - 1].content : '');

    if (!prompt) {
      return res.status(400).json({ error: 'Message content is required.' });
    }

    // If Gemini client is available, make the live model call
    if (ai && process.env.GEMINI_API_KEY) {
      try {
        // Construct conversation contents
        let contents: any[] = [];
        if (Array.isArray(messages) && messages.length > 1) {
          contents = messages.slice(-6).map((m: any) => ({
            role: m.role === 'assistant' ? 'model' : 'user',
            parts: [{ text: m.content }],
          }));
        } else {
          contents = [{ role: 'user', parts: [{ text: prompt }] }];
        }

        const generatePromise = ai.models.generateContent({
          model: 'gemini-3.8-flash',
          contents: contents,
          config: {
            systemInstruction: BUILDTECH_SYSTEM_INSTRUCTION,
            temperature: 0.7,
            topP: 0.95,
          },
        });

        const timeoutPromise = new Promise<never>((_, reject) =>
          setTimeout(() => reject(new Error('AI response timeout')), 4500)
        );

        const response: any = await Promise.race([generatePromise, timeoutPromise]);
        const reply = response.text || generateFallbackResponse(prompt);
        return res.json({
          reply,
          mode: 'live-gemini',
        });
      } catch (geminiError: any) {
        console.warn('Gemini API call failed, falling back to intelligent assistant engine:', geminiError?.message || geminiError);
        const reply = generateFallbackResponse(prompt);
        return res.json({
          reply,
          mode: 'demo-fallback',
          note: 'Live AI temporarily switched to demo assistant mode.',
        });
      }
    }

    // Demo Mode fallback when no key is injected
    const fallbackReply = generateFallbackResponse(prompt);
    return res.json({
      reply: fallbackReply,
      mode: 'demo',
      note: 'Operating in intelligent demo mode. To enable live Gemini responses, attach GEMINI_API_KEY in the Secrets panel.',
    });
  } catch (error: any) {
    console.error('Chat endpoint error:', error);
    return res.status(500).json({
      error: 'Failed to process message.',
      fallback: generateFallbackResponse(''),
    });
  }
});

// Start Server & mount Vite
async function startServer() {
  if (!isProduction) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(Number(PORT), '0.0.0.0', () => {
    console.log(`Build Technology Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
