import { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Coins, HelpCircle } from 'lucide-react';

export default function ProfitFetcher() {
  const [solAmount, setSolAmount] = useState(5);
  
  // Swap rate: 1 SOL = 50,000,000 $ALONBULL
  const RATE = 50000000;
  const alonbullAmount = solAmount * RATE;

  // Base bonding curve progress: let's start at 84.6%
  const baseProgress = 84.6;
  const curveImpact = solAmount * 0.12; // 0.12% progress per SOL
  const simulatedProgress = Math.min(100, baseProgress + curveImpact);

  // Derive bag sizes and descriptions
  const getTierDetails = (amount: number) => {
    if (amount < 2) {
      return {
        title: 'Jeet Bear 🐻',
        desc: "You are holding a tiny fraction of a bull. Careful not to get trampled by Alon's fast charge, little bear!",
        color: 'text-red-600 font-bold',
        bg: 'border-red-100 bg-red-50/50',
      };
    } else if (amount < 10) {
      return {
        title: 'Trend Believer 📈',
        desc: 'Steady and solid. You believe in Alon\'s design and are actively pushing Alonbull up the green god candles!',
        color: 'text-emerald-650 font-extrabold',
        bg: 'border-emerald-100 bg-emerald-50/50',
      };
    } else if (amount < 30) {
      return {
        title: 'Raydium Graduate 🎓🔥',
        desc: 'A powerful force! You are the absolute pillar of our liquidity pool, prepping to catapult Alonbull into millions.',
        color: 'text-primary font-black',
        bg: 'border-green-250 bg-green-50/65',
      };
    } else {
      return {
        title: '🚨 SUPREME GIGA ALONBULL WHALE 🐳🔱',
        desc: 'The ultimate alpha master. Your golden horns are encrusted with diamonds. You do not just ride the curve—you ARE the bull market!',
        color: 'text-emerald-700 font-black',
        bg: 'border-emerald-200 bg-emerald-100/50',
      };
    }
  };

  const tier = getTierDetails(solAmount);

  return (
    <section id="calculator" className="relative py-24 px-4 bg-bg-dark z-20 overflow-hidden border-t border-slate-100">
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-primary/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-secondary/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        
        {/* Card Frame */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 rounded-2xl relative overflow-hidden cyber-card cyber-glow-gold"
        >
          {/* Decorative design pill */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-primary/10 to-transparent blur-xl rounded-full pointer-events-none" />

          <div className="flex flex-col md:flex-row gap-8 items-stretch justify-between">
            
            {/* Column 1: Info and Controls */}
            <div className="w-full md:w-1/2 flex flex-col justify-between space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-lg">
                  <Sparkles className="w-4 h-4 text-primary animate-pulse" />
                  <span className="text-xs font-mono font-bold text-primary uppercase tracking-wider text-glow-gold">
                    Bonding Curve Simulator
                  </span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-display font-black text-slate-900 leading-none uppercase mt-6">
                  CHOOSE YOUR <br />
                  <span className="text-gradient bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-glow-gold">BULL WEIGHT</span>
                </h3>

                <p className="text-slate-600 font-sans text-sm leading-relaxed mt-4">
                  Enter your intended SOL purchase size to see how many millions of $ALONBULL you can claim and see your live impact on the pump.fun bonding curve.
                </p>
              </div>

              {/* Slider Input */}
              <div className="space-y-4 pt-4">
                <div className="flex justify-between items-center text-sm font-mono">
                  <span className="text-slate-500 font-bold">YOUR BUY SIZE:</span>
                  <span className="text-primary font-black text-lg bg-primary/10 border border-primary/20 px-2.5 py-1 rounded-md text-glow-gold">{solAmount} SOL</span>
                </div>

                <input
                  type="range"
                  min="0.1"
                  max="100"
                  step="0.1"
                  value={solAmount}
                  onChange={(e) => setSolAmount(parseFloat(e.target.value))}
                  className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-primary border border-slate-200"
                />

                <div className="flex justify-between text-[10px] font-mono text-slate-500 font-bold">
                  <span>0.1 SOL (Bear Cub)</span>
                  <span>50 SOL (Steer)</span>
                  <span>100 SOL (Giga Bull)</span>
                </div>
              </div>
            </div>

            {/* Column 2: Outputs and Visual feedback */}
            <div className="w-full md:w-1/2 flex flex-col justify-between p-6 bg-slate-50 border border-slate-150 rounded-xl min-h-[320px]">
              
              {/* Output Token count */}
              <div>
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block mb-1 font-black">
                  Estimated $ALONBULL Reward
                </span>
                
                <div className="flex items-baseline gap-2 flex-wrap">
                  <span className="text-2xl sm:text-3xl md:text-4xl font-display font-black text-slate-900 text-glow-gold">
                    {alonbullAmount.toLocaleString()}
                  </span>
                  <span className="text-primary font-mono text-xs font-black bg-primary/10 border border-primary/20 px-1.5 py-0.5 rounded uppercase">$ALONBULL</span>
                </div>
                
                <div className="mt-2 flex items-center gap-1.5 text-[10px] font-mono text-slate-500 font-bold">
                  <Coins className="w-3.5 h-3.5 text-primary" />
                  <span>Rate: 1 SOL = {RATE.toLocaleString()} $ALONBULL</span>
                </div>
              </div>

              {/* Simulated Bonding Curve Progress */}
              <div className="mt-4 pt-4 border-t border-slate-200">
                <div className="flex justify-between text-xs font-mono font-bold text-slate-500 mb-1.5">
                  <span>BONDING CURVE IMPACT</span>
                  <span className="text-secondary font-bold text-glow-green">{simulatedProgress.toFixed(2)}%</span>
                </div>
                <div className="w-full bg-slate-200 h-3 rounded-full overflow-hidden border border-slate-300 p-[1px]">
                  <div 
                    className="bg-gradient-to-r from-primary to-secondary h-full rounded-full transition-all duration-300" 
                    style={{ width: `${simulatedProgress}%` }}
                  />
                </div>
                <span className="text-[9px] font-mono text-slate-500 mt-1.5 block">
                  * Graduates to Raydium at 100% (only {(100 - simulatedProgress).toFixed(2)}% remaining!)
                </span>
              </div>

              {/* Status rank card */}
              <div className={`mt-4 p-4 rounded-xl border transition-all duration-300 ${tier.bg}`}>
                <div className="text-[10px] font-mono text-slate-500 mb-1 uppercase tracking-wider font-bold">
                  OFFICIAL BULL RANKING:
                </div>
                <div className={`text-base sm:text-lg font-display font-black ${tier.color} mb-1 uppercase`}>
                  {tier.title}
                </div>
                <p className="text-xs text-slate-700 font-sans leading-relaxed">
                  {tier.desc}
                </p>
              </div>

              {/* Small disclaimer footer */}
              <div className="mt-4 pt-3 border-t border-slate-200 flex items-center gap-1.5 text-[10px] font-mono text-slate-500 font-bold">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Simulated price rate. Green caps, green candles!</span>
              </div>

            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
