import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Copy, 
  Check, 
  MessageSquare, 
  ArrowUpRight, 
  Menu, 
  X, 
  ShieldCheck, 
  Users, 
  ChevronDown,
  Info
} from 'lucide-react';

import FallingCash from './components/FallingCash';
import LiveMemeTicker from './components/LiveMemeTicker';
import LegendStory from './components/LegendStory';
import Tokenomics from './components/Tokenomics';
import HowToBuy from './components/HowToBuy';
import ProfitFetcher from './components/ProfitFetcher';

export default function App() {
  const CONTRACT_ADDRESS = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';
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
      q: 'What is Cash Dog ($cashdog)?',
      a: 'Cash Dog is a legend born in 2021 on the Solana blockchain. He is a relentless street dog with one basic instinct: sniffing out bags and delivering them straight to his pack. No complicated tech-larping, no fake promises. Just pure loyalty and tokenized energy.'
    },
    {
      q: 'Why Solana?',
      a: 'Solana is the native playground of degens, characterized by low fees, rapid blocktimes, and absolute decentralization. Cash Dog runs these streets because Solana provides the perfect ecosystem for fetching real cash with absolute efficiency.'
    },
    {
      q: 'Is there a presale or developer tax?',
      a: 'Absolutely not! 100% of the token liquidity is burnt in the celestial incinerator, owner key is fully revoked, and buy/sell tax is locked at a perfect 0%. The team is entirely decentralized. No VC holds any leverage over the pack.'
    },
    {
      q: 'Is there any utility?',
      a: 'Zero utility. Just loyalty and gains. $cashdog is here purely as a tribute to community unity and the thrill of the Solana bull run. Always fetch, never scratch.'
    }
  ];

  // Helper Custom Telegram Logo SVG
  const TelegramIcon = () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current shrink-0">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.11.02-1.93 1.23-5.46 3.62-.51.35-.98.53-1.39.52-.46-.01-1.35-.26-2.01-.48-.81-.27-1.46-.42-1.4-.88.03-.24.36-.49.99-.75 3.88-1.69 6.46-2.8 7.74-3.32 3.68-1.5 4.44-1.76 4.94-1.77.11 0 .36.03.52.16.14.12.18.28.2.43-.02.07-.01.12-.02.21z"/>
    </svg>
  );

  return (
    <div className="min-h-screen text-gray-200 bg-bg-dark font-sans relative selection:bg-primary selection:text-black">
      {/* Background Falling Cash Canvas */}
      <FallingCash />

      {/* Decorative top blur gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-gradient-to-b from-primary/10 via-transparent to-transparent blur-[120px] pointer-events-none" />

      {/* Header / Navigation */}
      <nav className="sticky top-0 w-full z-50 bg-bg-dark/80 backdrop-blur-md border-b border-border-dark px-4 py-4 transition-all duration-300">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          
          {/* Logo Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full border-2 border-primary overflow-hidden shadow-md group-hover:scale-105 transition-transform">
              <img 
                src="https://cdn.shopify.com/s/files/1/0967/8087/8151/files/cashdog.jpg?v=1783685482" 
                alt="Cash Dog" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="font-display font-extrabold text-white text-lg tracking-tight group-hover:text-primary transition-colors">
              CASH DOG <span className="text-primary text-xs font-mono font-bold ml-1">$CASHDOG</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 text-sm font-mono font-bold">
            <a href="#story" className="text-gray-400 hover:text-white transition-colors">Story</a>
            <a href="#tokenomics" className="text-gray-400 hover:text-white transition-colors">Dogonomics</a>
            <a href="#how-to-buy" className="text-gray-400 hover:text-white transition-colors">How To Buy</a>
            <a href="#calculator" className="text-gray-400 hover:text-white transition-colors">Rank Calculator</a>
          </div>

          {/* Nav CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <a 
              href="https://t.me/cashdog_sol" // placeholder telegram, customizable later
              target="_blank"
              referrerPolicy="no-referrer"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-white/5 border border-white/10 hover:border-primary/40 hover:bg-white/10 text-white rounded-xl transition-all duration-150 flex items-center gap-2 cursor-pointer text-xs font-mono font-black"
            >
              <TelegramIcon />
              TELEGRAM
            </a>
            
            <a 
              href="#how-to-buy"
              className="px-4 py-2 bg-gradient-to-r from-primary to-amber-500 hover:from-amber-500 hover:to-yellow-400 text-black font-display font-black text-xs rounded-xl shadow-lg hover:shadow-primary/20 transition-all duration-150"
            >
              BUY $CASHDOG
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-400 hover:text-white focus:outline-none cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pt-4 border-t border-border-dark flex flex-col gap-4 font-mono text-sm"
            >
              <a 
                href="#story" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-400 hover:text-white py-1 transition-colors"
              >
                Story
              </a>
              <a 
                href="#tokenomics" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-400 hover:text-white py-1 transition-colors"
              >
                Dogonomics
              </a>
              <a 
                href="#how-to-buy" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-400 hover:text-white py-1 transition-colors"
              >
                How To Buy
              </a>
              <a 
                href="#calculator" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-400 hover:text-white py-1 transition-colors"
              >
                Rank Calculator
              </a>

              <div className="flex flex-col gap-2 pt-2">
                <a 
                  href="https://t.me/cashdog_sol"
                  target="_blank"
                  referrerPolicy="no-referrer"
                  rel="noopener noreferrer"
                  className="w-full justify-center px-4 py-2.5 bg-white/5 border border-white/10 text-white rounded-xl flex items-center gap-2 text-xs font-mono font-black"
                >
                  <TelegramIcon />
                  TELEGRAM
                </a>
                <a 
                  href="#how-to-buy"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full justify-center px-4 py-2.5 bg-primary text-black font-display font-black text-xs rounded-xl text-center"
                >
                  BUY $CASHDOG
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
            className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/30 text-primary font-mono text-[10px] sm:text-xs font-black uppercase tracking-widest rounded-full mb-8"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>100% COMMUNITY BULL RUN DEGEN FORCE</span>
          </motion.div>

          {/* Master Logo Token Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, type: 'spring', damping: 15 }}
            className="relative w-44 h-44 sm:w-52 sm:h-52 md:w-60 md:h-60 rounded-full border-4 border-primary p-2 shadow-[0_0_50px_rgba(251,191,36,0.3)] bg-gradient-to-br from-yellow-300 via-primary to-amber-600 mb-8"
          >
            <div className="w-full h-full rounded-full overflow-hidden border-2 border-black">
              <img 
                src="https://cdn.shopify.com/s/files/1/0967/8087/8151/files/cashdog.jpg?v=1783685482" 
                alt="Cash Dog Logo" 
                className="w-full h-full object-cover select-none pointer-events-none scale-105 hover:scale-110 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Spinning decorative orbit circles */}
            <div className="absolute -inset-4 border border-dashed border-primary/40 rounded-full animate-[spin_35s_linear_infinite] pointer-events-none" />
            <div className="absolute -inset-8 border border-dashed border-amber-500/20 rounded-full animate-[spin_55s_linear_infinite_reverse] pointer-events-none" />
          </motion.div>

          {/* Title and Slogan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-4xl"
          >
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-display font-black text-white tracking-tight leading-none uppercase select-none">
              CASH DOG
            </h1>
            
            <div className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-primary uppercase mt-2 tracking-wide text-glow-gold">
              $CASHDOG
            </div>

            <p className="mt-6 max-w-xl mx-auto text-gray-300 font-sans text-sm sm:text-base leading-relaxed">
              While Cash Cat is busy taking selfies in the Robinhood wallet, Cash Dog is out here on Solana hunting real money and delivering it straight to the pack.
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
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-primary via-amber-500 to-yellow-400 hover:from-amber-500 hover:to-yellow-300 text-black font-display font-black text-sm tracking-wider rounded-xl shadow-[0_4px_25px_rgba(251,191,36,0.35)] hover:shadow-primary/50 hover:scale-[1.03] transition-all duration-200 uppercase text-center cursor-pointer"
            >
              Buy $CASHDOG 💰
            </a>

            <a 
              href="https://t.me/cashdog_sol"
              target="_blank"
              referrerPolicy="no-referrer"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 hover:border-primary/40 hover:bg-white/10 text-white font-mono font-black text-sm rounded-xl transition-all duration-200 flex items-center justify-center gap-3 cursor-pointer"
            >
              <TelegramIcon />
              JOIN TELEGRAM
            </a>
          </motion.div>

          {/* Quick Contract Copy Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-12 w-full max-w-xl p-4 bg-bg-card border border-white/5 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4"
          >
            <div className="text-center sm:text-left">
              <span className="block text-[10px] font-mono text-gray-500 uppercase font-black">SOLANA CONTRACT ADDRESS</span>
              <span className="font-mono text-xs text-yellow-200 break-all">{CONTRACT_ADDRESS}</span>
            </div>

            <button
              onClick={handleCopy}
              className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-xs font-mono font-bold text-gray-300 hover:text-white flex items-center gap-2 shrink-0 cursor-pointer active:scale-95 transition-all"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>COPIED!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>COPY</span>
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
            <div className="p-4 bg-bg-card/50 border border-white/5 rounded-xl text-center">
              <span className="text-2xl block mb-1">🔥</span>
              <span className="font-mono text-xs text-gray-400 block uppercase">LP BURNT</span>
              <span className="font-display font-extrabold text-white text-sm">100% GONE</span>
            </div>
            <div className="p-4 bg-bg-card/50 border border-white/5 rounded-xl text-center">
              <span className="text-2xl block mb-1">⚡</span>
              <span className="font-mono text-xs text-gray-400 block uppercase">TAX</span>
              <span className="font-display font-extrabold text-white text-sm">0% NO SLIPPAGE</span>
            </div>
            <div className="p-4 bg-bg-card/50 border border-white/5 rounded-xl text-center">
              <span className="text-2xl block mb-1">🛡️</span>
              <span className="font-mono text-xs text-gray-400 block uppercase">MINT AUTH</span>
              <span className="font-display font-extrabold text-white text-sm">REVOKED</span>
            </div>
            <div className="p-4 bg-bg-card/50 border border-white/5 rounded-xl text-center">
              <span className="text-2xl block mb-1">👥</span>
              <span className="font-mono text-xs text-gray-400 block uppercase">OWNERSHIP</span>
              <span className="font-display font-extrabold text-white text-sm">RENOUNCED</span>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Scrolling Memetic Slogans spacer (Forward direction) */}
      <LiveMemeTicker speed={25} />

      {/* The Legend of Cash Dog */}
      <LegendStory />

      {/* Reverse Scrolling Ticker spacer */}
      <LiveMemeTicker speed={30} reverse={true} />

      {/* Tokenomics section */}
      <Tokenomics />

      {/* Profit / Bag Size ranking interactive calculator */}
      <div id="calculator" className="border-t border-border-dark">
        <ProfitFetcher />
      </div>

      {/* How to Buy instructions */}
      <HowToBuy contractAddress={CONTRACT_ADDRESS} />

      {/* Frequently Asked Questions */}
      <section className="relative py-24 px-4 bg-bg-card border-t border-border-dark z-20 overflow-hidden">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-16">
            <span className="px-3 py-1 bg-amber-500/10 border border-primary/30 text-primary text-xs font-mono font-bold tracking-widest rounded-full uppercase">
              Curious Pups
            </span>
            <h2 className="mt-4 text-4xl sm:text-5xl font-display font-extrabold text-white tracking-tight uppercase">
              🐶 FAQ <span className="text-gradient bg-gradient-to-r from-primary to-amber-500 bg-clip-text text-transparent text-glow-gold">UNLEASHED</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx}
                  className="bg-bg-dark border border-white/5 hover:border-primary/20 rounded-2xl overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left font-display font-bold text-white sm:text-lg focus:outline-none cursor-pointer group"
                  >
                    <span className="group-hover:text-primary transition-colors">{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-primary' : ''}`} />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="px-6 pb-5 pt-1 text-sm sm:text-base text-gray-400 font-sans leading-relaxed border-t border-white/5">
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
      <section className="relative py-20 px-4 bg-gradient-to-b from-bg-dark to-black border-t border-border-dark text-center z-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-80 bg-primary/5 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="max-w-2xl mx-auto relative z-10 space-y-8">
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary mx-auto shadow-lg shadow-primary/20">
            <img 
              src="https://cdn.shopify.com/s/files/1/0967/8087/8151/files/cashdog.jpg?v=1783685482" 
              alt="Cash Dog Badge"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <h2 className="text-4xl sm:text-5xl font-display font-black text-white leading-tight uppercase">
            JOIN THE PACK TODAY
          </h2>
          
          <p className="text-gray-400 font-sans text-sm sm:text-base leading-relaxed">
            Don't sit back while the dog fetches all the cash! Jump in the Telegram group, share the memes, and stand loyal with the pack of $CASHDOG handlers.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="https://t.me/cashdog_sol"
              target="_blank"
              referrerPolicy="no-referrer"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-primary to-amber-500 hover:from-amber-500 hover:to-yellow-300 text-black font-display font-black text-sm rounded-xl transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer shadow-lg active:scale-95"
            >
              <TelegramIcon />
              JOIN OFFICIAL TELEGRAM
            </a>
          </div>
        </div>
      </section>

      {/* Final Footer & Disclaimer */}
      <footer className="py-12 px-4 bg-black border-t border-white/5 text-center text-xs font-mono text-gray-500 z-20 relative">
        <div className="max-w-4xl mx-auto space-y-6">
          
          <div className="flex items-center justify-center gap-2 font-display font-black text-white uppercase text-sm tracking-wide">
            <div className="w-6 h-6 rounded-full overflow-hidden border border-primary">
              <img 
                src="https://cdn.shopify.com/s/files/1/0967/8087/8151/files/cashdog.jpg?v=1783685482" 
                alt="Cash Dog Mini Logo"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <span>CASH DOG $CASHDOG</span>
          </div>

          <p className="leading-relaxed max-w-2xl mx-auto font-sans text-[11px] text-gray-500">
            <Info className="w-4 h-4 text-amber-500/60 inline-block mr-1.5 align-text-bottom" />
            <strong>Disclaimer:</strong> $cashdog is a memecoin with absolutely no utility or financial expectation of returns. It is purely built for community loyalty, memes, and canine glory. Cryptocurrencies and memecoins are highly volatile. Invest responsibly and do not trade with capital you cannot afford to lose.
          </p>

          <div className="pt-4 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px]">
            <span>© 2026 CASH DOG. ALL RIGHTS RESERVED.</span>
            <span>POWERED BY SOLANA DEGENS</span>
          </div>

        </div>
      </footer>
    </div>
  );
}
