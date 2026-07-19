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
  TrendingUp,
  Award,
  Bell,
  Cpu,
  Zap,
  ChevronRight
} from 'lucide-react';

import FallingCash from './components/FallingCash';
import LiveMemeTicker from './components/LiveMemeTicker';
import LegendStory from './components/LegendStory';
import Tokenomics from './components/Tokenomics';
import HowToBuy from './components/HowToBuy';
import ProfitFetcher from './components/ProfitFetcher';

export default function App() {
  const CONTRACT_ADDRESS = 'Fu9x3VvrNwgbfr2VBqNLuVadrzDAXpHL7ij1Lxynpump';
  const [copied, setCopied] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Custom futuristic toast notification
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  // FAQs State
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleCopy = () => {
    navigator.clipboard.writeText(CONTRACT_ADDRESS);
    setCopied(true);
    triggerToast('📋 Contract address successfully copied to clipboard!');
    setTimeout(() => setCopied(false), 2000);
  };

  const faqs = [
    {
      q: 'What is Gold Cat ($goldcat)?',
      a: 'Gold Cat is the supreme, gilded feline mascot of wealth on Solana. Inspired by the legendary and viral cashcat, this gold version is well-known to be much more valuable than simple cash, and is here to turn Solana trading into an empire of real gilded fortune.'
    },
    {
      q: 'What is the story of Gold Cat?',
      a: 'Solana\'s most viral feline has evolved! Cash is just paper, and paper burns. Under the cosmic rays of Solana\'s high-speed blockchain, Cash Cat went through a complete physical transmutation—emerging as pure, solid Gold Cat. In a world of paper fiat, Gold Cat reigns supreme.'
    },
    {
      q: 'Is there any tax or team allocation?',
      a: 'Absolutely not. In accordance with pure decentralized standards, there are 0% buy/sell taxes, 100% of the token supply is on the bonding curve, and the contract is immutable with the mint authority permanently revoked.'
    },
    {
      q: 'How do I join the Gold Cat community?',
      a: 'The Telegram channel is being fully encrypted and secured by our elite engineering team. You can check back very soon! Keep your eyes on this terminal for updates.'
    }
  ];

  // Custom Telegram Icon SVG
  const TelegramIcon = () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current shrink-0">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.11.02-1.93 1.23-5.46 3.62-.51.35-.98.53-1.39.52-.46-.01-1.35-.26-2.01-.48-.81-.27-1.46-.42-1.4-.88.03-.24.36-.49.99-.75 3.88-1.69 6.46-2.8 7.74-3.32 3.68-1.5 4.44-1.76 4.94-1.77.11 0 .36.03.52.16.14.12.18.28.2.43-.02.07-.01.12-.02.21z"/>
    </svg>
  );

  return (
    <div className="min-h-screen text-slate-800 bg-[#f8fafc] font-sans relative selection:bg-primary selection:text-white">
      {/* Background Falling Cash Canvas */}
      <FallingCash />

      {/* Futuristic Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(212,175,55,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(212,175,55,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none z-0" />

      {/* Header / Navigation */}
      <nav className="sticky top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 px-4 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          
          {/* Logo Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg border border-primary/20 overflow-hidden shadow-sm group-hover:scale-105 transition-transform cyber-glow-gold bg-white">
              <img 
                src="https://cdn.shopify.com/s/files/1/0967/8087/8151/files/goldcat.jpg?v=1784478811" 
                alt="Gold Cat Logo" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="font-display font-extrabold text-slate-900 text-lg tracking-tight group-hover:text-primary transition-colors uppercase">
              GOLD CAT <span className="text-primary text-xs font-mono font-bold ml-1">$goldcat</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 text-xs font-mono font-bold text-slate-500">
            <a href="#story" className="hover:text-primary transition-colors">The Legend</a>
            <a href="#tokenomics" className="hover:text-primary transition-colors">Goldnomics</a>
            <a href="#calculator" className="hover:text-primary transition-colors">Curve Impact</a>
            <a href="#how-to-buy" className="hover:text-primary transition-colors">How to Buy</a>
          </div>

          {/* Nav CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <button 
              className="px-4 py-2 bg-slate-50 border border-slate-200 hover:border-primary/45 hover:bg-slate-100 text-slate-700 rounded-lg transition-all duration-150 flex items-center gap-2 cursor-pointer text-xs font-mono font-bold"
              onClick={() => triggerToast('📡 SECURING VAULT: The royal team is configuring the encrypted Gold Cat Telegram channel. Stand by!')}
            >
              <TelegramIcon />
              TELEGRAM (SOON)
            </button>
            
            <a 
              href="#how-to-buy"
              className="px-4 py-2 bg-primary text-black font-display font-black text-xs border border-primary/40 rounded-lg transition-all duration-150 hover:bg-emerald-600 hover:text-white shadow-md"
            >
              BUY $goldcat
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-700 hover:text-primary focus:outline-none cursor-pointer border border-slate-200 rounded-lg bg-white"
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
              className="md:hidden mt-4 pt-4 border-t border-slate-100 flex flex-col gap-3 font-mono text-xs bg-white p-4 rounded-xl shadow-lg border border-slate-200"
            >
              <a 
                href="#story" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-600 hover:text-primary py-1 font-bold"
              >
                The Legend
              </a>
              <a 
                href="#tokenomics" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-600 hover:text-primary py-1 font-bold"
              >
                Goldnomics
              </a>
              <a 
                href="#calculator" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-600 hover:text-primary py-1 font-bold"
              >
                Curve Impact
              </a>
              <a 
                href="#how-to-buy" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-600 hover:text-primary py-1 font-bold"
              >
                How to Buy
              </a>

              <div className="flex flex-col gap-2 pt-2">
                <button 
                  className="w-full justify-center px-4 py-2.5 bg-slate-50 border border-slate-200 text-slate-700 rounded-lg flex items-center gap-2 text-xs font-mono font-bold"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    triggerToast('📡 SECURING VAULT: The royal team is configuring the encrypted Gold Cat Telegram channel. Stand by!');
                  }}
                >
                  <TelegramIcon />
                  TELEGRAM (SOON)
                </button>
                <a 
                  href="#how-to-buy"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full justify-center px-4 py-2.5 bg-primary hover:bg-emerald-600 text-black font-display font-black text-xs border border-primary/20 rounded-lg text-center"
                >
                  BUY $goldcat
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 px-4 overflow-hidden z-20">
        <div className="max-w-6xl mx-auto">
          
          {/* Main Dual-Column Hero Layout */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 w-full text-center md:text-left">
            
            {/* Left Column: Brand Details, Story, CTAs, CA Copy */}
            <div className="flex-1 flex flex-col items-center md:items-start">
              {/* Top Pill badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 border border-primary/20 text-primary font-mono text-[10px] sm:text-xs font-bold uppercase tracking-widest rounded-lg mb-6"
              >
                <ShieldCheck className="w-4 h-4 text-primary" />
                <span>THE SUPREME FEline GOld STANDARD</span>
              </motion.div>

              {/* Title and Ticker */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="space-y-2"
              >
                <h1 className="text-5xl sm:text-7xl md:text-8xl font-display font-black text-slate-900 tracking-tight leading-none uppercase select-none">
                  GOLD CAT
                </h1>
                
                <div className="text-2xl sm:text-3xl md:text-4xl font-display font-black text-primary uppercase tracking-wide text-glow-gold">
                  $goldcat
                </div>

                <p className="mt-6 max-w-xl text-slate-600 font-sans text-sm sm:text-base leading-relaxed">
                  The viral cashcat has evolved. Paper money burns, but solid 24k gold is indestructible. Gold Cat ($goldcat) is here to reign over Solana, turning your standard paper gains into pure, immutable gold.
                </p>
              </motion.div>

              {/* Main Action CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
              >
                <a 
                  href="#how-to-buy"
                  className="w-full sm:w-auto px-8 py-4 bg-primary text-black font-display font-black text-sm tracking-wider border border-primary/20 rounded-xl hover:bg-emerald-600 hover:text-white hover:translate-y-[-2px] transition-all duration-200 uppercase text-center cursor-pointer shadow-md"
                >
                  BUY $goldcat 👑
                </a>

                <button 
                  className="w-full sm:w-auto px-8 py-4 bg-white border border-slate-200 hover:border-primary/40 hover:bg-slate-50 text-slate-700 font-mono font-bold text-sm rounded-xl transition-all duration-200 flex items-center justify-center gap-3 cursor-pointer shadow-sm"
                  onClick={() => triggerToast('📡 SECURING VAULT: The royal team is configuring the encrypted Gold Cat Telegram channel. Stand by!')}
                >
                  <TelegramIcon />
                  JOIN TELEGRAM (SOON)
                </button>
              </motion.div>

              {/* Quick Contract Copy Bar */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mt-8 w-full max-w-xl p-4 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 cyber-card"
              >
                <div className="text-center sm:text-left">
                  <span className="block text-[9px] font-mono text-slate-500 uppercase font-bold tracking-widest">SOLANA CONTRACT ADDRESS</span>
                  <span className="font-mono text-xs text-primary font-bold break-all text-glow-gold">{CONTRACT_ADDRESS}</span>
                </div>

                <button
                  onClick={handleCopy}
                  className="px-4 py-2 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl text-xs font-mono font-bold text-slate-700 flex items-center gap-2 shrink-0 cursor-pointer active:scale-95 transition-all"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-secondary" />
                      <span>COPIED!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-primary" />
                      <span>COPY CA</span>
                    </>
                  )}
                </button>
              </motion.div>
            </div>

            {/* Right Column: Master Logo Token Showcase */}
            <div className="flex-1 flex justify-center items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, type: 'spring', damping: 15 }}
                className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full border border-primary/25 p-3 bg-gradient-to-br from-primary/15 via-white to-secondary/15"
                style={{ boxShadow: '0 12px 50px rgba(212, 175, 55, 0.25)' }}
              >
                <div className="w-full h-full rounded-full overflow-hidden border border-primary/20 bg-white shadow-inner">
                  <img 
                    src="https://cdn.shopify.com/s/files/1/0967/8087/8151/files/goldcat.jpg?v=1784478811" 
                    alt="Gold Cat Master Logo" 
                    className="w-full h-full object-cover select-none pointer-events-none scale-105 hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                
                {/* Luxurious decorative orbit circles */}
                <div className="absolute -inset-4 border border-dashed border-primary/30 rounded-full animate-[spin_35s_linear_infinite] pointer-events-none" />
                <div className="absolute -inset-8 border border-dashed border-secondary/20 rounded-full animate-[spin_55s_linear_infinite_reverse] pointer-events-none" />
                <div className="absolute -inset-12 border border-dotted border-primary/10 rounded-full animate-[spin_80s_linear_infinite] pointer-events-none" />
              </motion.div>
            </div>

          </div>

          {/* Interactive Badges Grid (Full width below the columns) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 w-full"
          >
            <div className="p-4 rounded-xl text-center cyber-card cyber-card-hover">
              <span className="text-2xl block mb-1">🔥</span>
              <span className="font-mono text-xs text-slate-400 block uppercase font-bold">LP STATUS</span>
              <span className="font-display font-extrabold text-slate-100 text-sm text-glow-gold">100% BURNT</span>
            </div>
            <div className="p-4 rounded-xl text-center cyber-card cyber-card-hover">
              <span className="text-2xl block mb-1">⚡</span>
              <span className="font-mono text-xs text-slate-400 block uppercase font-bold">TAX RATE</span>
              <span className="font-display font-extrabold text-slate-100 text-sm text-glow-gold">0% FOREVER</span>
            </div>
            <div className="p-4 rounded-xl text-center cyber-card cyber-card-hover">
              <span className="text-2xl block mb-1">🛡️</span>
              <span className="font-mono text-xs text-slate-400 block uppercase font-bold">MINT AUTHORITY</span>
              <span className="font-display font-extrabold text-slate-100 text-sm text-glow-gold">REVOKED</span>
            </div>
            <div className="p-4 rounded-xl text-center cyber-card cyber-card-hover">
              <span className="text-2xl block mb-1">👑</span>
              <span className="font-mono text-xs text-slate-400 block uppercase font-bold">TREASURY</span>
              <span className="font-display font-extrabold text-slate-100 text-sm text-glow-gold">100% IMMUTABLE</span>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Scrolling Memetic Slogans spacer (Forward direction) */}
      <LiveMemeTicker speed={25} />

      {/* The Legend of Alonbull */}
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
      <section className="relative py-24 px-4 bg-bg-dark border-t border-border-dark z-20 overflow-hidden">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-16">
            <span className="px-4 py-1.5 bg-secondary/10 border border-secondary/30 text-secondary text-xs font-mono font-bold tracking-widest rounded-lg uppercase inline-block cyber-glow-gold">
              Feline Knowledge
            </span>
            <h2 className="mt-6 text-4xl sm:text-5xl font-display font-black text-slate-100 tracking-tight uppercase">
              🐱 FAQ & <span className="text-gradient bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-glow-gold">ANSWERS</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx}
                  className="rounded-xl overflow-hidden transition-all duration-200 cyber-card"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left font-display font-bold text-slate-100 sm:text-lg focus:outline-none cursor-pointer group"
                  >
                    <span className="group-hover:text-primary transition-colors">{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-primary' : ''}`} />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="px-6 pb-5 pt-1 text-sm sm:text-base text-slate-300 font-sans leading-relaxed border-t border-border-dark">
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
      <section className="relative py-24 px-4 bg-bg-dark border-t border-border-dark text-center z-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-80 bg-primary/5 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="max-w-2xl mx-auto relative z-10 space-y-8">
          <div className="w-20 h-20 rounded-xl overflow-hidden border border-primary/20 mx-auto shadow-md bg-white">
            <img 
              src="https://cdn.shopify.com/s/files/1/0967/8087/8151/files/goldcat.jpg?v=1784478811" 
              alt="Gold Cat Badge"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <h2 className="text-4xl sm:text-5xl font-display font-black text-slate-100 leading-none uppercase">
            ENTER THE VAULT TODAY
          </h2>
          
          <p className="text-slate-300 font-sans text-sm sm:text-base leading-relaxed">
            Don't sit on the sidelines while Gold Cat turns paper into solid gold. Stash your wealth, monitor the live ticker, spread the golden standard, and trade like an elite member of the treasury.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              className="w-full sm:w-auto px-8 py-4 bg-primary text-black border border-primary/20 font-display font-black text-sm rounded-xl transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer shadow-md active:scale-95 hover:bg-emerald-600 hover:text-white"
              onClick={() => triggerToast('📡 SECURING VAULT: The royal team is configuring the encrypted Gold Cat Telegram channel. Stand by!')}
            >
              <TelegramIcon />
              TELEGRAM CHANNEL (SOON)
            </button>
          </div>
        </div>
      </section>

      {/* Final Footer & Disclaimer */}
      <footer className="py-12 px-4 bg-slate-900 border-t border-slate-200 text-center text-xs font-mono text-slate-400 z-20 relative">
        <div className="max-w-4xl mx-auto space-y-6">
          
          <div className="flex items-center justify-center gap-2 font-display font-black text-white uppercase text-sm tracking-wide">
            <div className="w-7 h-7 rounded-lg overflow-hidden border border-primary/20 bg-white">
              <img 
                src="https://cdn.shopify.com/s/files/1/0967/8087/8151/files/goldcat.jpg?v=1784478811" 
                alt="Gold Cat Mini Logo"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <span>GOLD CAT $goldcat</span>
          </div>

          <p className="leading-relaxed max-w-2xl mx-auto font-sans text-[11px] text-slate-300">
            <Info className="w-4 h-4 text-primary inline-block mr-1.5 align-text-bottom" />
            <strong>Disclaimer:</strong> $goldcat is a tribute meme token with absolutely no intrinsic utility, financial guarantees, or promises of investment returns. It is born straight out of meme culture on Solana and is not affiliated directly with any financial regulatory authorities. Markets are highly volatile; trade responsibly at your own risk.
          </p>

          <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-bold text-slate-500">
            <span>© 2026 GOLD CAT. ALL RIGHTS RESERVED.</span>
            <span>POWERED BY PUMP.FUN GOLD VAULTERS</span>
          </div>

        </div>
      </footer>

      {/* Custom Encrypted Notification Toast */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 p-4 max-w-sm rounded-xl bg-white border border-primary text-slate-900 shadow-[0_8px_30px_rgba(212,175,55,0.15)] flex items-start gap-3"
          >
            <div className="p-1.5 bg-primary/10 rounded-lg border border-primary/20 shrink-0 text-primary">
              <Cpu className="w-4 h-4 animate-pulse" />
            </div>
            <div>
              <div className="text-[10px] font-mono font-bold text-primary tracking-widest uppercase">TERMINAL SECURED</div>
              <p className="text-xs font-sans text-slate-700 mt-0.5 leading-relaxed font-semibold">
                {toastMessage}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
