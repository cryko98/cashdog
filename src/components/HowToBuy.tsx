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
      icon: <Wallet className="w-6 h-6 text-black" />,
      link: 'https://phantom.app/',
      linkText: 'Download Phantom',
    },
    {
      num: '02',
      title: 'Fund with SOL',
      desc: 'Acquire SOL (Solana tokens) on a centralized exchange like Binance or Coinbase, or buy SOL directly in your wallet using integrated payment providers.',
      icon: <Download className="w-6 h-6 text-black" />,
    },
    {
      num: '03',
      title: 'Connect to Pump.fun / Jupiter',
      desc: 'Visit pump.fun during the bonding curve, or jup.ag/raydium.io after graduation. Open the interface inside your wallet browser or connect your desktop browser.',
      icon: <Compass className="w-6 h-6 text-black" />,
      link: 'https://jup.ag/',
      linkText: 'Go to Jupiter Exchange',
    },
    {
      num: '04',
      title: 'Swap for $PUMPCAT',
      desc: 'Paste the official Contract Address into the swap panel, select the amount of SOL you want to swap, adjust slippage, and lock in! Wear your green cap with pride!',
      icon: <RefreshCw className="w-6 h-6 text-black" />,
    }
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="how-to-buy" className="relative py-24 px-4 bg-white border-t-2 border-black z-20 overflow-hidden">
      {/* Decorative ambient visual background */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        
        {/* Title */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="px-4 py-1.5 bg-primary/20 border-2 border-black text-slate-900 text-xs font-mono font-black tracking-widest rounded-lg uppercase inline-block pump-shadow">
              How To Acquire
            </span>
            <h2 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-slate-900 tracking-tight uppercase">
              🛒 How to Buy <span className="text-gradient bg-gradient-to-r from-primary to-emerald-600 bg-clip-text text-transparent text-glow-green">$PUMPCAT</span>
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-slate-600 text-sm sm:text-base font-sans font-medium">
              Follow these simple steps to swap your SOL for $PUMPCAT and join the ultimate green hat gang on Solana.
            </p>
          </motion.div>
        </div>

        {/* Contract Address Callout Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 p-6 sm:p-8 bg-white border-2 border-black rounded-2xl shadow-2xl relative overflow-hidden pump-shadow-lg"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-2xl rounded-full pointer-events-none" />
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
            <div className="text-center md:text-left">
              <span className="inline-block text-[10px] font-mono font-black uppercase tracking-widest px-2.5 py-1 bg-primary/10 border-2 border-black text-slate-900 rounded-lg mb-2">
                Official Smart Contract Address (Solana)
              </span>
              <h3 className="text-lg sm:text-xl font-display font-black text-slate-900 mb-1 uppercase">
                Copy $PUMPCAT CA to swap safely
              </h3>
              <p className="text-xs text-slate-600 font-sans max-w-xl font-medium">
                Always double check the CA before trading! Accept no lookalikes. There is only one genuine crying Pump Cat wearing the green hat.
              </p>
            </div>

            <div className="w-full md:w-auto flex flex-col sm:flex-row items-center gap-3">
              <div className="w-full sm:w-auto px-4 py-3 bg-slate-50 border-2 border-black rounded-xl font-mono text-xs sm:text-sm text-primary font-black break-all select-all flex items-center justify-center min-h-[46px] pump-shadow">
                {contractAddress}
              </div>
              
              <button
                onClick={handleCopy}
                className="w-full sm:w-auto px-6 py-3 bg-primary hover:bg-[#13b06c] text-black border-2 border-black font-display font-black text-sm rounded-xl transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-lg active:scale-95 pump-shadow"
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
              className="p-6 bg-white border-2 border-black rounded-2xl flex flex-col justify-between transition-all duration-200 relative group pump-shadow hover:translate-y-[-4px] hover:translate-x-[-4px] hover:shadow-[6px_6px_0px_0px_#000000]"
            >
              {/* Number overlay */}
              <div className="absolute top-4 right-4 text-4xl font-display font-black text-slate-100 select-none group-hover:text-primary/20 transition-colors duration-200">
                {step.num}
              </div>

              <div>
                <div className="p-3 bg-primary/10 rounded-xl border-2 border-black w-fit mb-6">
                  {step.icon}
                </div>
                
                <h3 className="text-lg sm:text-xl font-display font-extrabold text-slate-900 mb-2 uppercase">
                  {step.title}
                </h3>
                
                <p className="text-slate-600 font-sans text-xs sm:text-sm leading-relaxed mb-6 font-medium">
                  {step.desc}
                </p>
              </div>

              {step.link ? (
                <a
                  href={step.link}
                  target="_blank"
                  referrerPolicy="no-referrer"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-mono font-black text-slate-900 hover:text-primary transition-colors duration-150"
                >
                  <span>{step.linkText}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ) : (
                <span className="text-xs font-mono text-slate-400 font-bold">
                  Pump-Ready 🐱💚
                </span>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
