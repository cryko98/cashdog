import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Download, Compass, RefreshCw, Check, Copy, ExternalLink, Wallet } from 'lucide-react';

interface HowToBuyProps {
  contractAddress: string;
}

export default function HowToBuy({ contractAddress }: HowToBuyProps) {
  const [copied, setCopied] = useState(false);

  const steps = [
    {
      num: '01',
      title: 'Create Solana Wallet',
      desc: 'Download Phantom, Solflare, or your preferred Solana wallet. Available as a free browser extension or mobile app on App Store/Google Play.',
      icon: <Wallet className="w-6 h-6 text-emerald-400" />,
      link: 'https://phantom.app/',
      linkText: 'Download Phantom',
    },
    {
      num: '02',
      title: 'Fund with SOL',
      desc: 'Acquire SOL (Solana tokens) on a centralized exchange like Binance or Coinbase, or buy SOL directly in your wallet using integrated services like MoonPay.',
      icon: <Download className="w-6 h-6 text-emerald-500" />,
    },
    {
      num: '03',
      title: 'Go to Raydium or Jupiter',
      desc: 'Visit jup.ag or raydium.io. Open the exchange interface inside your wallet browser or connect your desktop browser to the site.',
      icon: <Compass className="w-6 h-6 text-green-400" />,
      link: 'https://jup.ag/',
      linkText: 'Go to Jupiter Exchange',
    },
    {
      num: '04',
      title: 'Swap for $CASHBULL',
      desc: 'Paste the Contract Address into Jupiter/Raydium, select the amount of SOL you want to swap, confirm your slippage, and swap! Welcome to the Herd!',
      icon: <RefreshCw className="w-6 h-6 text-primary" />,
    }
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="how-to-buy" className="relative py-24 px-4 bg-gradient-to-t from-bg-dark to-black border-t border-border-dark z-20 overflow-hidden">
      {/* Decorative ambient visual background */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        
        {/* Title */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="px-3 py-1 bg-emerald-500/10 border border-primary/30 text-primary text-xs font-mono font-bold tracking-widest rounded-full uppercase">
              How To Acquire
            </span>
            <h2 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight uppercase">
              🛒 How to Buy <span className="text-gradient bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent text-glow-green">$CASHBULL</span>
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-gray-400 text-sm sm:text-base font-sans">
              Follow these simple steps to swap your SOL for $CASHBULL and join the squad of alpha money chargers.
            </p>
          </motion.div>
        </div>

        {/* Contract Address Callout Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 p-6 sm:p-8 bg-bg-card border-2 border-primary/20 rounded-3xl glow-border-green shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-2xl rounded-full pointer-events-none" />
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
            <div className="text-center md:text-left">
              <span className="inline-block text-[10px] font-mono font-bold uppercase tracking-widest px-2 py-0.5 bg-primary/10 border border-primary/30 text-primary rounded-md mb-2">
                Official Smart Contract Address (Solana)
              </span>
              <h3 className="text-lg sm:text-xl font-display font-black text-white mb-1">
                Copy $CASHBULL CA to swap safely
              </h3>
              <p className="text-xs text-gray-400 font-sans max-w-xl">
                Always double check the CA before trading! Accept no lookalikes. There is only one genuine street-charging Cash Bull.
              </p>
            </div>

            <div className="w-full md:w-auto flex flex-col sm:flex-row items-center gap-3">
              <div className="w-full sm:w-auto px-4 py-3 bg-black/50 border border-white/10 rounded-xl font-mono text-xs sm:text-sm text-green-300 break-all select-all flex items-center justify-center min-h-[46px]">
                {contractAddress}
              </div>
              
              <button
                onClick={handleCopy}
                className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-primary to-emerald-500 hover:from-emerald-500 hover:to-green-400 text-black font-display font-bold text-sm rounded-xl transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-lg active:scale-95"
              >
                <AnimatePresence mode="wait">
                  {copied ? (
                    <motion.span
                      key="copied"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2"
                    >
                      <Check className="w-4 h-4 shrink-0" />
                      COPIED!
                    </motion.span>
                  ) : (
                    <motion.span
                      key="copy"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2"
                    >
                      <Copy className="w-4 h-4 shrink-0" />
                      COPY CA
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 bg-bg-card border border-white/5 hover:border-primary/20 rounded-2xl flex flex-col justify-between transition-colors duration-200 relative group"
            >
              {/* Number overlay */}
              <div className="absolute top-4 right-4 text-4xl font-display font-black text-white/5 select-none group-hover:text-primary/10 transition-colors duration-200">
                {step.num}
              </div>

              <div>
                <div className="p-3 bg-white/5 rounded-xl border border-white/10 w-fit mb-6">
                  {step.icon}
                </div>
                
                <h3 className="text-lg sm:text-xl font-display font-extrabold text-white mb-2">
                  {step.title}
                </h3>
                
                <p className="text-gray-400 font-sans text-xs sm:text-sm leading-relaxed mb-6">
                  {step.desc}
                </p>
              </div>

              {step.link ? (
                <a
                  href={step.link}
                  target="_blank"
                  referrerPolicy="no-referrer"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-mono font-bold text-primary hover:text-amber-400 transition-colors duration-150"
                >
                  <span>{step.linkText}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ) : (
                <span className="text-xs font-mono text-gray-500">
                  Ready to fetch
                </span>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
