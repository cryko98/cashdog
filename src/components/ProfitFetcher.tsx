import { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Coins, HelpCircle } from 'lucide-react';

export default function ProfitFetcher() {
  const [solAmount, setSolAmount] = useState(5);
  
  // Swap rate: 1 SOL = 50,000,000 $goldcat
  const RATE = 50000000;
  const goldcatAmount = solAmount * RATE;

  // Base bonding curve progress: let's start at 84.6%
  const baseProgress = 84.6;
  const curveImpact = solAmount * 0.12; // 0.12% progress per SOL
  const simulatedProgress = Math.min(100, baseProgress + curveImpact);

  // Derive bag sizes and descriptions
  const getTierDetails = (amount: number) => {
    if (amount < 2) {
      return {
        title: 'Paper Jeet 🧻',
        desc: "You are holding a tiny fraction of gold. Careful not to drop your gold coin, little kitten!",
        color: 'text-red-400 font-bold',
        bg: 'border-red-500/20 bg-red-500/5',
      };
    } else if (amount < 10) {
      return {
        title: 'Gilded Believer ✨',
        desc: 'Steady and solid. You believe in feline gold and are actively stacking 24k bars!',
        color: 'text-emerald-400 font-bold',
        bg: 'border-emerald-500/20 bg-emerald-500/5',
      };
    } else if (amount < 30) {
      return {
        title: 'Royal Vault Graduate 👑🔥',
        desc: 'A powerful force! You are the absolute pillar of our golden treasury, prepping to catapult $goldcat into millions.',
        color: 'text-primary font-black',
        bg: 'border-primary/25 bg-primary/5',
      };
    } else {
      return {
        title: '🐳 SUPREME GIGA GOLDEN WHALE 🔱👑',
        desc: 'The ultimate monarch. Your paws are made of solid diamonds and gold. You do not just ride the curve—you ARE the treasury!',
        color: 'text-secondary font-black',
        bg: 'border-secondary/25 bg-secondary/5',
      };
    }
  };

  const tier = getTierDetails(solAmount);

  return (
    <section id="calculator" className="relative py-24 px-4 bg-bg-dark z-20 overflow-hidden border-t border-border-dark">
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

                <h3 className="text-3xl sm:text-4xl font-display font-black text-slate-100 leading-none uppercase mt-6">
                  CHOOSE YOUR <br />
                  <span className="text-gradient bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-glow-gold">GOLD WEIGHT</span>
                </h3>

                <p className="text-slate-300 font-sans text-sm leading-relaxed mt-4">
                  Enter your intended SOL purchase size to see how many millions of $goldcat you can claim and see your live impact on the bonding curve.
                </p>
              </div>

              {/* Slider Input */}
              <div className="space-y-4 pt-4">
                <div className="flex justify-between items-center text-sm font-mono">
                  <span className="text-slate-400 font-bold">YOUR BUY SIZE:</span>
                  <span className="text-primary font-black text-lg bg-primary/10 border border-primary/20 px-2.5 py-1 rounded-md text-glow-gold">{solAmount} SOL</span>
                </div>

                <input
                  type="range"
                  min="0.1"
                  max="100"
                  step="0.1"
                  value={solAmount}
                  onChange={(e) => setSolAmount(parseFloat(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary border border-white/5"
                />

                <div className="flex justify-between text-[10px] font-mono text-slate-400 font-bold">
                  <span>0.1 SOL (Kitten)</span>
                  <span>50 SOL (Gold Stacker)</span>
                  <span>100 SOL (Giga Lion)</span>
                </div>
              </div>
            </div>

            {/* Column 2: Outputs and Visual feedback */}
            <div className="w-full md:w-1/2 flex flex-col justify-between p-6 bg-white/5 border border-primary/10 rounded-xl min-h-[320px]">
              
              {/* Output Token count */}
              <div>
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-1 font-black">
                  Estimated $goldcat Reward
                </span>
                
                <div className="flex items-baseline gap-2 flex-wrap">
                  <span className="text-2xl sm:text-3xl md:text-4xl font-display font-black text-slate-100 text-glow-gold">
                    {goldcatAmount.toLocaleString()}
                  </span>
                  <span className="text-primary font-mono text-xs font-black bg-primary/10 border border-primary/20 px-1.5 py-0.5 rounded uppercase">$goldcat</span>
                </div>
                
                <div className="mt-2 flex items-center gap-1.5 text-[10px] font-mono text-slate-400 font-bold">
                  <Coins className="w-3.5 h-3.5 text-primary" />
                  <span>Rate: 1 SOL = {RATE.toLocaleString()} $goldcat</span>
                </div>
              </div>

              {/* Simulated Bonding Curve Progress */}
              <div className="mt-4 pt-4 border-t border-white/10">
                <div className="flex justify-between text-xs font-mono font-bold text-slate-400 mb-1.5">
                  <span>BONDING CURVE IMPACT</span>
                  <span className="text-secondary font-bold text-glow-green">{simulatedProgress.toFixed(2)}%</span>
                </div>
                <div className="w-full bg-white/10 h-3 rounded-full overflow-hidden border border-white/5 p-[1px]">
                  <div 
                    className="bg-gradient-to-r from-primary to-secondary h-full rounded-full transition-all duration-300" 
                    style={{ width: `${simulatedProgress}%` }}
                  />
                </div>
                <span className="text-[9px] font-mono text-slate-400 mt-1.5 block">
                  * Graduates to Raydium at 100% (only {(100 - simulatedProgress).toFixed(2)}% remaining!)
                </span>
              </div>

              {/* Status rank card */}
              <div className={`mt-4 p-4 rounded-xl border transition-all duration-300 ${tier.bg}`}>
                <div className="text-[10px] font-mono text-slate-400 mb-1 uppercase tracking-wider font-bold">
                  OFFICIAL CAT RANKING:
                </div>
                <div className={`text-base sm:text-lg font-display font-black ${tier.color} mb-1 uppercase`}>
                  {tier.title}
                </div>
                <p className="text-xs text-slate-300 font-sans leading-relaxed">
                  {tier.desc}
                </p>
              </div>

              {/* Small disclaimer footer */}
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center gap-1.5 text-[10px] font-mono text-slate-400 font-bold">
                <HelpCircle className="w-3.5 h-3.5 text-primary" />
                <span>Simulated price rate. Green caps, green candles!</span>
              </div>

            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
