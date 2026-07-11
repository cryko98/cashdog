import { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Coins, HelpCircle } from 'lucide-react';

export default function ProfitFetcher() {
  const [solAmount, setSolAmount] = useState(5);
  
  // Hardcoded theoretical swap rate for fun calculator calculations (e.g. 1 SOL = 50,000,000 $CASHBULL)
  const RATE = 50000000;
  const cashbullAmount = solAmount * RATE;

  // Derive bag sizes and descriptions
  const getTierDetails = (amount: number) => {
    if (amount < 2) {
      return {
        title: 'Baby Calf 🐂',
        desc: "You are fresh to the market! Ready to grow, graze on Solana, and prepare for the big charge.",
        color: 'text-yellow-400',
        bg: 'border-yellow-400/20 bg-yellow-400/5',
      };
    } else if (amount < 10) {
      return {
        title: 'Bullish Runner 📈',
        desc: 'Steady and powerful. Charging down the red candles with your heavy horns. Solid gains ahead!',
        color: 'text-emerald-400',
        bg: 'border-emerald-400/20 bg-emerald-400/5',
      };
    } else if (amount < 30) {
      return {
        title: 'Iron Horn Bull 🐂🔥',
        desc: 'A true market driver. Smashing bears and delivering massive green candles straight to the herd.',
        color: 'text-primary',
        bg: 'border-primary/20 bg-primary/5',
      };
    } else {
      return {
        title: '🚨 ULTRA GIGA CASHBULL CHAD 🔱',
        desc: 'The Supreme Herd Leader. You do not just ride the bull market; you ARE the bull market. Relentless wealth power!',
        color: 'text-red-400',
        bg: 'border-red-400/30 bg-red-400/5',
      };
    }
  };

  const tier = getTierDetails(solAmount);

  return (
    <section className="relative py-20 px-4 bg-bg-dark z-20 overflow-hidden">
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-primary/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-emerald-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        
        {/* Card Frame */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 bg-bg-card border-2 border-primary/20 rounded-3xl shadow-2xl relative overflow-hidden"
        >
          {/* Decorative glow lines */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-primary/10 to-transparent blur-xl rounded-full" />

          <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
            
            {/* Column 1: Info and Controls */}
            <div className="w-full md:w-1/2 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full">
                <Sparkles className="w-4 h-4 text-primary animate-pulse" />
                <span className="text-xs font-mono font-bold text-gray-300 uppercase tracking-widest">
                  Bag Size Calculator
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-display font-black text-white leading-tight uppercase">
                WHAT'S YOUR <br />
                <span className="text-gradient bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent text-glow-green">BULL STATUS?</span>
              </h3>

              <p className="text-gray-400 font-sans text-sm leading-relaxed">
                Enter your intended SOL swap size to see how many millions of $CASHBULL you can charge and unlock your official herd ranking status.
              </p>

              {/* Slider Input */}
              <div className="space-y-4 pt-4">
                <div className="flex justify-between items-center text-sm font-mono">
                  <span className="text-gray-400">YOUR SOL WEIGHT:</span>
                  <span className="text-primary font-black text-lg">{solAmount} SOL</span>
                </div>

                <input
                  type="range"
                  min="0.1"
                  max="100"
                  step="0.1"
                  value={solAmount}
                  onChange={(e) => setSolAmount(parseFloat(e.target.value))}
                  className="w-full h-2.5 bg-black rounded-lg appearance-none cursor-pointer accent-primary border border-white/10"
                />

                <div className="flex justify-between text-[10px] font-mono text-gray-500">
                  <span>0.1 SOL (Calf)</span>
                  <span>50 SOL (Bull)</span>
                  <span>100 SOL (Giga Chad)</span>
                </div>
              </div>
            </div>

            {/* Column 2: Outputs and Visual feedback */}
            <div className="w-full md:w-1/2 flex flex-col justify-between p-6 bg-black/60 border border-white/5 rounded-2xl min-h-[300px]">
              
              {/* Output Token count */}
              <div>
                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider block mb-1">
                  Estimated $CASHBULL Reward
                </span>
                
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-display font-black text-white text-glow-green">
                    {cashbullAmount.toLocaleString()}
                  </span>
                  <span className="text-primary font-mono text-xs font-bold">$CASHBULL</span>
                </div>
                
                <div className="mt-1 flex items-center gap-1.5 text-[10px] font-mono text-gray-400">
                  <Coins className="w-3 h-3 text-emerald-400" />
                  <span>Rate: 1 SOL = {RATE.toLocaleString()} $CASHBULL</span>
                </div>
              </div>

              {/* Status rank card */}
              <div className={`mt-6 p-4 rounded-xl border-2 transition-all duration-300 ${tier.bg}`}>
                <div className="text-xs font-mono font-bold text-gray-400 mb-1 uppercase tracking-wider">
                  OFFICIAL RANKING:
                </div>
                <div className={`text-lg sm:text-xl font-display font-extrabold ${tier.color} mb-2`}>
                  {tier.title}
                </div>
                <p className="text-xs text-gray-300 font-sans leading-relaxed">
                  {tier.desc}
                </p>
              </div>

              {/* Small disclaimer footer */}
              <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-1.5 text-[10px] font-mono text-gray-500">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Simulated price rate. DYOR! Memecoins carry high risk.</span>
              </div>

            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
