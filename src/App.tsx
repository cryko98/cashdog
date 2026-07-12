import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Copy, 
  Check, 
  Menu, 
  X, 
  ShieldCheck, 
  ChevronDown,
  Info,
  ExternalLink,
  MessageCircle,
  TrendingUp,
  Award
} from 'lucide-react';

import FallingCash from './components/FallingCash';
import LiveMemeTicker from './components/LiveMemeTicker';
import LegendStory from './components/LegendStory';
import Tokenomics from './components/Tokenomics';
import HowToBuy from './components/HowToBuy';
import ProfitFetcher from './components/ProfitFetcher';

export default function App() {
  const CONTRACT_ADDRESS = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';
  const [copied, setCopied] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // FAQs State
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleCopy = () => {
    navigator.clipboard.writeText(CONTRACT_ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const faqs = [
    {
      q: 'What is Pump Cat ($pumpcat)?',
      a: 'Pump Cat is the legendary crying cat wearing the iconic green pill hat, born directly in the brutal trenches of pump.fun on Solana. Surviving every single early seller, he completed the bonding curve and graduated to become the absolute king of the green candles.'
    },
    {
      q: 'How does the bonding curve work?',
      a: 'On pump.fun, each buy pushes the token price up and fills the progress bar. Once the bonding curve reaches 100% progress (~$69k market cap), the remaining liquidity is automatically migrated to Raydium, LP tokens are burnt, and the token is fully decentralized.'
    },
    {
      q: 'Is there any dev allocation or tax?',
      a: 'Absolutely none! 100% of the token supply was placed straight onto the bonding curve for a fully fair, public launch. LP is permanently burnt upon Raydium graduation, and the buy/sell tax is locked at 0% forever.'
    },
    {
      q: 'Why does Pump Cat wear a green hat?',
      a: 'Because green represents the ultimate salvation in the trenches—the legendary green god candle. While other cats scratch and run away, Pump Cat stands proud under his green hat, fetching gains and pushing curves.'
    }
  ];

  // Helper Custom Telegram Logo SVG (empty link support as requested)
  const TelegramIcon = () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current shrink-0">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.11.02-1.93 1.23-5.46 3.62-.51.35-.98.53-1.39.52-.46-.01-1.35-.26-2.01-.48-.81-.27-1.46-.42-1.4-.88.03-.24.36-.49.99-.75 3.88-1.69 6.46-2.8 7.74-3.32 3.68-1.5 4.44-1.76 4.94-1.77.11 0 .36.03.52.16.14.12.18.28.2.43-.02.07-.01.12-.02.21z"/>
    </svg>
  );

  return (
    <div className="min-h-screen text-slate-800 bg-[#fafafa] font-sans relative selection:bg-primary selection:text-black">
      {/* Background Falling Cash Canvas */}
      <FallingCash />

      {/* Header / Navigation */}
      <nav className="sticky top-0 w-full z-50 bg-white border-b-2 border-black px-4 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          
          {/* Logo Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg border-2 border-black overflow-hidden shadow-sm group-hover:scale-105 transition-transform pump-shadow">
              <img 
                src="https://cdn.shopify.com/s/files/1/0967/8087/8151/files/pcat.jpg?v=1783872952" 
                alt="Pump Cat" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="font-display font-extrabold text-slate-900 text-lg tracking-tight group-hover:text-primary transition-colors uppercase">
              PUMP CAT <span className="text-primary text-xs font-mono font-black ml-1">$PUMPCAT</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 text-sm font-mono font-black text-slate-700">
            <a href="#story" className="hover:text-primary transition-colors">The Legend</a>
            <a href="#tokenomics" className="hover:text-primary transition-colors">Pumponomics</a>
            <a href="#calculator" className="hover:text-primary transition-colors">Curve Impact</a>
            <a href="#how-to-buy" className="hover:text-primary transition-colors">How to Buy</a>
          </div>

          {/* Nav CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <a 
              href="#"
              className="px-4 py-2 bg-white border-2 border-black hover:bg-slate-50 text-slate-800 rounded-lg transition-all duration-150 flex items-center gap-2 cursor-pointer text-xs font-mono font-black pump-shadow"
              onClick={(e) => {
                e.preventDefault();
                alert('Telegram link coming soon! Stay tuned, pack!');
              }}
            >
              <TelegramIcon />
              TELEGRAM (SOON)
            </a>
            
            <a 
              href="#how-to-buy"
              className="px-4 py-2 bg-primary text-black font-display font-black text-xs border-2 border-black rounded-lg transition-all duration-150 pump-shadow"
            >
              BUY $PUMPCAT
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-800 hover:text-primary focus:outline-none cursor-pointer border-2 border-black rounded-lg bg-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pt-4 border-t-2 border-black flex flex-col gap-3 font-mono text-sm"
            >
              <a 
                href="#story" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-700 hover:text-primary py-1 font-bold"
              >
                The Legend
              </a>
              <a 
                href="#tokenomics" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-700 hover:text-primary py-1 font-bold"
              >
                Pumponomics
              </a>
              <a 
                href="#calculator" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-700 hover:text-primary py-1 font-bold"
              >
                Curve Impact
              </a>
              <a 
                href="#how-to-buy" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-700 hover:text-primary py-1 font-bold"
              >
                How to Buy
              </a>

              <div className="flex flex-col gap-2 pt-2">
                <a 
                  href="#"
                  className="w-full justify-center px-4 py-2.5 bg-white border-2 border-black text-slate-800 rounded-lg flex items-center gap-2 text-xs font-mono font-black"
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileMenuOpen(false);
                    alert('Telegram link coming soon! Stay tuned, pack!');
                  }}
                >
                  <TelegramIcon />
                  TELEGRAM (SOON)
                </a>
                <a 
                  href="#how-to-buy"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full justify-center px-4 py-2.5 bg-primary text-black font-display font-black text-xs border-2 border-black rounded-lg text-center"
                >
                  BUY $PUMPCAT
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 px-4 overflow-hidden z-20">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
          
          {/* Top Pill badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/20 border-2 border-black text-slate-900 font-mono text-[10px] sm:text-xs font-black uppercase tracking-widest rounded-lg mb-8 pump-shadow"
          >
            <ShieldCheck className="w-4 h-4 text-black" />
            <span>100% PUMP.FUN ORIGINAL TRENCH GRADUATE</span>
          </motion.div>

          {/* Master Logo Token Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, type: 'spring', damping: 15 }}
            className="relative w-44 h-44 sm:w-52 sm:h-52 md:w-60 md:h-60 rounded-full border-4 border-black p-2 shadow-[0_0_50px_rgba(36,192,126,0.3)] bg-primary mb-8"
          >
            <div className="w-full h-full rounded-full overflow-hidden border-2 border-black">
              <img 
                src="https://cdn.shopify.com/s/files/1/0967/8087/8151/files/pcat.jpg?v=1783872952" 
                alt="Pump Cat Logo" 
                className="w-full h-full object-cover select-none pointer-events-none scale-105 hover:scale-110 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Decorative orbit circles */}
            <div className="absolute -inset-4 border-2 border-dashed border-black/40 rounded-full animate-[spin_35s_linear_infinite] pointer-events-none" />
            <div className="absolute -inset-8 border border-dashed border-black/20 rounded-full animate-[spin_55s_linear_infinite_reverse] pointer-events-none" />
          </motion.div>

          {/* Title and Slogan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-4xl"
          >
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-display font-black text-slate-900 tracking-tight leading-none uppercase select-none">
              PUMP CAT
            </h1>
            
            <div className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-primary uppercase mt-2 tracking-wide text-glow-green">
              $PUMPCAT
            </div>

            <p className="mt-6 max-w-xl mx-auto text-slate-600 font-sans text-sm sm:text-base leading-relaxed font-semibold">
              While other cats are busy taking selfies in the Robinhood wallet, Pump Cat is down in the Solana trenches hunting real money, crushing the bonding curve, and delivering it straight to the pack.
            </p>
          </motion.div>

          {/* Main Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <a 
              href="#how-to-buy"
              className="w-full sm:w-auto px-8 py-4 bg-primary text-black font-display font-black text-sm tracking-wider border-2 border-black rounded-xl hover:bg-[#13b06c] hover:translate-y-[-2px] transition-all duration-200 uppercase text-center cursor-pointer pump-shadow"
            >
              Buy $PUMPCAT 🐱
            </a>

            <a 
              href="#"
              className="w-full sm:w-auto px-8 py-4 bg-white border-2 border-black hover:bg-slate-50 text-slate-800 font-mono font-black text-sm rounded-xl transition-all duration-200 flex items-center justify-center gap-3 cursor-pointer pump-shadow"
              onClick={(e) => {
                e.preventDefault();
                alert('Telegram link coming soon! Stay tuned, pack!');
              }}
            >
              <TelegramIcon />
              JOIN TELEGRAM (SOON)
            </a>
          </motion.div>

          {/* Quick Contract Copy Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-12 w-full max-w-xl p-4 bg-white border-2 border-black rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 pump-shadow"
          >
            <div className="text-center sm:text-left">
              <span className="block text-[10px] font-mono text-slate-500 uppercase font-black">SOLANA CONTRACT ADDRESS</span>
              <span className="font-mono text-xs text-primary font-black break-all">{CONTRACT_ADDRESS}</span>
            </div>

            <button
              onClick={handleCopy}
              className="px-4 py-2 bg-slate-50 hover:bg-slate-100 border-2 border-black rounded-xl text-xs font-mono font-black text-slate-800 flex items-center gap-2 shrink-0 cursor-pointer active:scale-95 transition-all"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-primary" />
                  <span>COPIED!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>COPY CA</span>
                </>
              )}
            </button>
          </motion.div>

          {/* Interactive Badges Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-4xl"
          >
            <div className="p-4 bg-white border-2 border-black rounded-xl text-center pump-shadow">
              <span className="text-2xl block mb-1">🔥</span>
              <span className="font-mono text-xs text-slate-500 block uppercase font-black">LP STATUS</span>
              <span className="font-display font-extrabold text-slate-900 text-sm">100% BURNT</span>
            </div>
            <div className="p-4 bg-white border-2 border-black rounded-xl text-center pump-shadow">
              <span className="text-2xl block mb-1">⚡</span>
              <span className="font-mono text-xs text-slate-500 block uppercase font-black">TAX RATE</span>
              <span className="font-display font-extrabold text-slate-900 text-sm">0% FOREVER</span>
            </div>
            <div className="p-4 bg-white border-2 border-black rounded-xl text-center pump-shadow">
              <span className="text-2xl block mb-1">🛡️</span>
              <span className="font-mono text-xs text-slate-500 block uppercase font-black">MINT AUTHORITY</span>
              <span className="font-display font-extrabold text-slate-900 text-sm">REVOKED</span>
            </div>
            <div className="p-4 bg-white border-2 border-black rounded-xl text-center pump-shadow">
              <span className="text-2xl block mb-1">👥</span>
              <span className="font-mono text-xs text-slate-500 block uppercase font-black">BONDING STATUS</span>
              <span className="font-display font-extrabold text-slate-900 text-sm">100% COMMUNITY</span>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Scrolling Memetic Slogans spacer (Forward direction) */}
      <LiveMemeTicker speed={25} />

      {/* The Legend of Pump Cat */}
      <LegendStory />

      {/* Reverse Scrolling Ticker spacer */}
      <LiveMemeTicker speed={30} reverse={true} />

      {/* Tokenomics section */}
      <Tokenomics />

      {/* Profit / Bag Size ranking interactive calculator */}
      <div id="calculator">
        <ProfitFetcher />
      </div>

      {/* How to Buy instructions */}
      <HowToBuy contractAddress={CONTRACT_ADDRESS} />

      {/* Frequently Asked Questions */}
      <section className="relative py-24 px-4 bg-white border-t-2 border-black z-20 overflow-hidden">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-16">
            <span className="px-4 py-1.5 bg-primary/20 border-2 border-black text-slate-900 text-xs font-mono font-black tracking-widest rounded-lg uppercase inline-block pump-shadow">
              Feline Knowledge
            </span>
            <h2 className="mt-6 text-4xl sm:text-5xl font-display font-black text-slate-900 tracking-tight uppercase">
              🐱 FAQ & <span className="text-gradient bg-gradient-to-r from-primary to-emerald-600 bg-clip-text text-transparent text-glow-green">ANSWERS</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx}
                  className="bg-[#fafafa] border-2 border-black rounded-xl overflow-hidden transition-all duration-200 pump-shadow"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left font-display font-black text-slate-900 sm:text-lg focus:outline-none cursor-pointer group"
                  >
                    <span className="group-hover:text-primary transition-colors">{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-slate-600 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-primary' : ''}`} />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="px-6 pb-5 pt-1 text-sm sm:text-base text-slate-600 font-sans leading-relaxed border-t-2 border-dashed border-slate-200 font-medium">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* CTA Footer Join Section */}
      <section className="relative py-24 px-4 bg-[#fafafa] border-t-2 border-black text-center z-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-80 bg-primary/10 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="max-w-2xl mx-auto relative z-10 space-y-8">
          <div className="w-20 h-20 rounded-xl overflow-hidden border-2 border-black mx-auto shadow-lg pump-shadow">
            <img 
              src="https://cdn.shopify.com/s/files/1/0967/8087/8151/files/pcat.jpg?v=1783872952" 
              alt="Pump Cat Badge"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <h2 className="text-4xl sm:text-5xl font-display font-black text-slate-900 leading-none uppercase">
            JOIN THE PACK TODAY
          </h2>
          
          <p className="text-slate-600 font-sans text-sm sm:text-base leading-relaxed font-semibold">
            Don't sit back while the curve pumps! Connect, check the chart, share the watering cat eyes memes, and stay loyal to the green hat squad.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#"
              className="w-full sm:w-auto px-8 py-4 bg-primary text-black border-2 border-black font-display font-black text-sm rounded-xl transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer shadow-lg active:scale-95 pump-shadow hover:bg-[#13b06c]"
              onClick={(e) => {
                e.preventDefault();
                alert('Telegram link coming soon! Stay tuned, pack!');
              }}
            >
              <TelegramIcon />
              TELEGRAM CHANNEL (SOON)
            </a>
          </div>
        </div>
      </section>

      {/* Final Footer & Disclaimer */}
      <footer className="py-12 px-4 bg-white border-t-2 border-black text-center text-xs font-mono text-slate-500 z-20 relative">
        <div className="max-w-4xl mx-auto space-y-6">
          
          <div className="flex items-center justify-center gap-2 font-display font-black text-slate-950 uppercase text-sm tracking-wide">
            <div className="w-7 h-7 rounded-lg overflow-hidden border-2 border-black pump-shadow-sm">
              <img 
                src="https://cdn.shopify.com/s/files/1/0967/8087/8151/files/pcat.jpg?v=1783872952" 
                alt="Pump Cat Mini Logo"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <span>PUMP CAT $PUMPCAT</span>
          </div>

          <p className="leading-relaxed max-w-2xl mx-auto font-sans text-[11px] text-slate-500 font-medium">
            <Info className="w-4 h-4 text-primary inline-block mr-1.5 align-text-bottom" />
            <strong>Disclaimer:</strong> $PUMPCAT is a pure memecoin born on the pump.fun bonding curve with absolutely no utility, financial backing, or expectation of returns. It exists solely as a monument to crying cats, green pill hats, and community meme culture on Solana. Cryptocurrency and memecoin markets are extremely risky and volatile. Always do your own research (DYOR) and never trade with funds you cannot afford to lose.
          </p>

          <div className="pt-4 border-t-2 border-dashed border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-bold">
            <span>© 2026 PUMP CAT. ALL RIGHTS RESERVED.</span>
            <span>POWERED BY PUMP.FUN TRENCH WARRIORS</span>
          </div>

        </div>
      </footer>
    </div>
  );
}
