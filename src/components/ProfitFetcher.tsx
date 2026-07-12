import { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Coins, HelpCircle } from 'lucide-react';

export default function ProfitFetcher() {
  const [solAmount, setSolAmount] = useState(5);
  
  // Swap rate: 1 SOL = 50,000,000 $PUMPCAT
  const RATE = 50000000;
  const pumpcatAmount = solAmount * RATE;

  // Base bonding curve progress: let's start at 84.6%
  const baseProgress = 84.6;
  const curveImpact = solAmount * 0.12; // 0.12% progress per SOL
  const simulatedProgress = Math.min(100, baseProgress + curveImpact);

  // Derive bag sizes and descriptions
  const getTierDetails = (amount: number) => {
    if (amount < 2) {
      return {
        title: 'Jeet Kitten 😿',
        desc: "You are holding a tiny bag of cat food. Careful not to get shaken out of the trenches, little kitten!",
        color: 'text-red-500',
        bg: 'border-black bg-red-50/50',
      };
    } else if (amount < 10) {
      return {
        title: 'Bonding Believer 📈',
        desc: 'Steady and solid. You believe in those big watery eyes and are actively pushing Pump Cat up the curve!',
        color: 'text-slate-800 font-bold',
        bg: 'border-black bg-emerald-50/50',
      };
    } else if (amount < 30) {
      return {
        title: 'Raydium Graduate 🎓🔥',
        desc: 'A powerful force! You are the pillar of our liquidity pool, prepping to catapult Pump Cat into millions.',
        color: 'text-primary font-black',
        bg: 'border-black bg-emerald-100/50',
      };
    } else {
      return {
        title: '🚨 SUPREME GIGA PUMPCAT WHALE 🐳🔱',
        desc: 'The ultimate alpha handler. Your green hat is encrusted with emerald diamonds. You do not just ride the curve—you ARE the curve!',
        color: 'text-primary font-black',
        bg: 'border-black bg-primary/20',
      };
    }
  };

  const tier = getTierDetails(solAmount);

  return (
    <section id="calculator" className="relative py-24 px-4 bg-[#fafafa] z-20 overflow-hidden border-t-2 border-black">
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-primary/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        
        {/* Card Frame */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 bg-white border-2 border-black rounded-2xl shadow-2xl relative overflow-hidden pump-shadow-lg"
        >
          {/* Decorative design pill */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-primary/20 to-transparent blur-xl rounded-full" />

          <div className="flex flex-col md:flex-row gap-8 items-stretch justify-between">
            
            {/* Column 1: Info and Controls */}
            <div className="w-full md:w-1/2 flex flex-col justify-between space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 border-2 border-black rounded-lg">
                  <Sparkles className="w-4 h-4 text-black animate-pulse" />
                  <span className="text-xs font-mono font-black text-slate-900 uppercase tracking-wider">
                    Bonding Curve Simulator
                  </span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-display font-black text-slate-900 leading-none uppercase mt-6">
                  CHOOSE YOUR <br />
                  <span className="text-gradient bg-gradient-to-r from-primary to-emerald-600 bg-clip-text text-transparent text-glow-green">CAT WEIGHT</span>
                </h3>

                <p className="text-slate-600 font-sans text-sm leading-relaxed mt-4 font-medium">
                  Enter your intended SOL purchase size to see how many millions of $PUMPCAT you can claim and see your live impact on our pump.fun bonding curve.
                </p>
              </div>

              {/* Slider Input */}
              <div className="space-y-4 pt-4">
                <div className="flex justify-between items-center text-sm font-mono">
                  <span className="text-slate-500 font-bold">YOUR BUY SIZE:</span>
                  <span className="text-slate-900 font-black text-lg bg-primary/20 border-2 border-black px-2.5 py-1 rounded-md">{solAmount} SOL</span>
                </div>

                <input
                  type="range"
                  min="0.1"
                  max="100"
                  step="0.1"
                  value={solAmount}
                  onChange={(e) => setSolAmount(parseFloat(e.target.value))}
                  className="w-full h-3 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-primary border-2 border-black"
                />

                <div className="flex justify-between text-[10px] font-mono text-slate-500 font-bold">
                  <span>0.1 SOL (Kitten)</span>
                  <span>50 SOL (Cat)</span>
                  <span>100 SOL (Whale)</span>
                </div>
              </div>
            </div>

            {/* Column 2: Outputs and Visual feedback */}
            <div className="w-full md:w-1/2 flex flex-col justify-between p-6 bg-slate-50 border-2 border-black rounded-xl min-h-[320px] pump-shadow">
              
              {/* Output Token count */}
              <div>
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block mb-1 font-black">
                  Estimated $PUMPCAT Reward
                </span>
                
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-display font-black text-slate-900 text-glow-green">
                    {pumpcatAmount.toLocaleString()}
                  </span>
                  <span className="text-primary font-mono text-xs font-black bg-primary/10 border border-primary px-1.5 py-0.5 rounded">$PUMPCAT</span>
                </div>
                
                <div className="mt-2 flex items-center gap-1.5 text-[10px] font-mono text-slate-500 font-bold">
                  <Coins className="w-3.5 h-3.5 text-black" />
                  <span>Rate: 1 SOL = {RATE.toLocaleString()} $PUMPCAT</span>
                </div>
              </div>

              {/* Simulated Bonding Curve Progress */}
              <div className="mt-4 pt-4 border-t border-slate-200">
                <div className="flex justify-between text-xs font-mono font-black text-slate-600 mb-1.5">
                  <span>BONDING CURVE IMPACT</span>
                  <span className="text-primary font-black">{simulatedProgress.toFixed(2)}%</span>
                </div>
                <div className="w-full bg-white h-4 rounded-full overflow-hidden border-2 border-black p-[2px]">
                  <div 
                    className="bg-primary h-full rounded-full transition-all duration-300" 
                    style={{ width: `${simulatedProgress}%` }}
                  />
                </div>
                <span className="text-[9px] font-mono text-slate-500 mt-1 block font-bold">
                  * Graduates to Raydium at 100% (only {(100 - simulatedProgress).toFixed(2)}% remaining!)
                </span>
              </div>

              {/* Status rank card */}
              <div className={`mt-4 p-4 rounded-xl border-2 transition-all duration-300 ${tier.bg}`}>
                <div className="text-xs font-mono font-black text-slate-500 mb-1 uppercase tracking-wider">
                  OFFICIAL CAT RANKING:
                </div>
                <div className={`text-lg sm:text-xl font-display font-black ${tier.color} mb-1 uppercase`}>
                  {tier.title}
                </div>
                <p className="text-xs text-slate-700 font-sans leading-relaxed font-medium">
                  {tier.desc}
                </p>
              </div>

              {/* Small disclaimer footer */}
              <div className="mt-4 pt-3 border-t-2 border-dashed border-slate-200 flex items-center gap-1.5 text-[10px] font-mono text-slate-500 font-bold">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Simulated price rate. Keep your eyes watery and caps green!</span>
              </div>

            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
