import { motion } from 'motion/react';
import { Percent, Flame, Key, ShieldCheck, Coins } from 'lucide-react';

export default function Tokenomics() {
  const stats = [
    {
      label: 'Buy / Sell Tax',
      value: '0%',
      desc: 'No taxes. No friction. Pure charging speed.',
      icon: <Percent className="w-6 h-6 text-emerald-400" />,
      bg: 'bg-emerald-500/10 border-emerald-500/20',
    },
    {
      label: 'Liquidity Pool (LP)',
      value: '100% BURNT 🔥',
      desc: 'LP tokens sent to the incinerator. Buried in the sand forever.',
      icon: <Flame className="w-6 h-6 text-red-400" />,
      bg: 'bg-red-500/10 border-red-500/20',
    },
    {
      label: 'Mint Authority',
      value: 'REVOKED 🚫',
      desc: 'Owner key destroyed. Contract is 100% immutable and rug-proof.',
      icon: <Key className="w-6 h-6 text-blue-400" />,
      bg: 'bg-blue-500/10 border-blue-500/20',
    },
    {
      label: 'Security Audit',
      value: 'HERD TRUSTED',
      desc: 'Zero backdoor. Certified community-driven bull-run action.',
      icon: <ShieldCheck className="w-6 h-6 text-primary" />,
      bg: 'bg-emerald-500/10 border-primary/20',
    }
  ];

  return (
    <section id="tokenomics" className="relative py-24 px-4 bg-bg-dark border-t border-border-dark z-20 overflow-hidden">
      {/* Decorative absolute background spots */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="px-3 py-1 bg-emerald-500/10 border border-primary/30 text-primary text-xs font-mono font-bold tracking-widest rounded-full uppercase">
              The Bullish Math
            </span>
            <h2 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight uppercase">
              🐂 <span className="text-gradient bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent text-glow-green">BULLONOMICS</span>
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-gray-400 text-sm sm:text-base font-sans">
              Fair, transparent, and built for maximum loyalty. No VC allocations, no hidden unlocks. Just raw meme strength.
            </p>
          </motion.div>
        </div>

        {/* Core Token Distribution Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Stats breakdown */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 order-2 lg:order-1">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className={`p-6 rounded-2xl bg-bg-card border-2 ${stat.bg} hover:scale-[1.02] transition-transform duration-200 shadow-xl`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                    {stat.icon}
                  </div>
                  <h4 className="text-xs font-mono font-bold tracking-wider text-gray-400 uppercase">
                    {stat.label}
                  </h4>
                </div>
                <div className="text-2xl sm:text-3xl font-display font-black text-white mb-2">
                  {stat.value}
                </div>
                <p className="text-sm text-gray-400 font-sans">
                  {stat.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Core Supply Display Banner */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 p-8 bg-gradient-to-b from-bg-card to-black rounded-3xl border-2 border-primary/20 relative overflow-hidden order-1 lg:order-2 flex flex-col justify-between h-full min-h-[350px] shadow-2xl"
          >
            <div className="absolute top-0 right-0 p-8 text-white/5 font-display font-black text-9xl pointer-events-none select-none leading-none">
              $
            </div>
            
            <div>
              <div className="flex items-center gap-2 text-primary font-mono text-xs font-bold uppercase tracking-widest mb-6">
                <Coins className="w-4 h-4" />
                <span>Token Supply Allocation</span>
              </div>
              
              <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-white mb-2 uppercase leading-tight">
                100% Community Owned
              </h3>
              <p className="text-gray-400 font-sans text-sm mb-6 leading-relaxed">
                We didn't keep any bones or horn fees for ourselves. The entire supply of $CASHBULL is released into the wild, distributed directly to the herd.
              </p>
            </div>

            <div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs font-mono font-bold text-gray-400 mb-2 uppercase">
                    <span>Liquidity & Circulating Supply</span>
                    <span className="text-primary">100%</span>
                  </div>
                  <div className="w-full bg-white/5 h-3.5 rounded-full overflow-hidden border border-white/10">
                    <div className="bg-gradient-to-r from-emerald-500 via-primary to-green-300 h-full w-full rounded-full" />
                  </div>
                </div>

                <div className="pt-2">
                  <div className="flex justify-between text-xs font-mono font-bold text-gray-500 mb-2 uppercase">
                    <span>Developer / VC Allocation</span>
                    <span className="text-red-400">0%</span>
                  </div>
                  <div className="w-full bg-white/5 h-3.5 rounded-full overflow-hidden border border-white/10">
                    <div className="bg-red-500/20 h-full w-0 rounded-full" />
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/5 text-center">
                <span className="text-xs font-mono font-black text-primary uppercase tracking-widest text-glow-green">
                  TOTAL SUPPLY: 1,000,000,000 $CASHBULL
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
