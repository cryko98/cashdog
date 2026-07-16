import { motion } from 'motion/react';
import { Percent, Flame, Key, ShieldCheck, Coins } from 'lucide-react';

export default function Tokenomics() {
  const stats = [
    {
      label: 'Buy / Sell Tax',
      value: '0%',
      desc: 'No taxes. No friction. Pure bull action.',
      icon: <Percent className="w-6 h-6 text-primary" />,
    },
    {
      label: 'Liquidity Pool (LP)',
      value: '100% BURNT 🔥',
      desc: 'Graduated Raydium LP is fully locked and burned.',
      icon: <Flame className="w-6 h-6 text-secondary" />,
    },
    {
      label: 'Mint Authority',
      value: 'REVOKED 🚫',
      desc: 'Mint authority revoked. Immutable and 100% rug-proof.',
      icon: <Key className="w-6 h-6 text-primary" />,
    },
    {
      label: 'Security Audit',
      value: '100% SAFU',
      desc: 'Zero backdoor. Elite pump.fun original code.',
      icon: <ShieldCheck className="w-6 h-6 text-primary" />,
    }
  ];

  return (
    <section id="tokenomics" className="relative py-24 px-4 bg-bg-dark border-t border-slate-100 z-20 overflow-hidden">
      {/* Decorative absolute background spots */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="px-4 py-1.5 bg-secondary/10 border border-secondary/30 text-secondary text-xs font-mono font-bold tracking-widest rounded-lg uppercase inline-block cyber-glow-green">
              The Math
            </span>
            <h2 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-slate-900 tracking-tight uppercase">
              🐂 <span className="text-gradient bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-glow-gold">BULLNOMICS</span>
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-slate-600 text-sm sm:text-base font-sans">
              Fair, transparent, and born on the bonding curve. No VC allocations, no team wallets, no hidden unlocks. Just raw community strength.
            </p>
          </motion.div>
        </div>

        {/* Core Token Distribution Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Stats breakdown */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 order-2 lg:order-1">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="p-6 rounded-2xl cyber-card cyber-card-hover"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-150">
                    {stat.icon}
                  </div>
                  <h4 className="text-xs font-mono font-bold tracking-wider text-slate-500 uppercase">
                    {stat.label}
                  </h4>
                </div>
                <div className="text-2xl sm:text-3xl font-display font-black text-slate-900 mb-2 uppercase text-glow-gold">
                  {stat.value}
                </div>
                <p className="text-sm text-slate-600 font-sans leading-relaxed">
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
            className="lg:col-span-5 p-8 rounded-2xl cyber-card relative overflow-hidden order-1 lg:order-2 flex flex-col justify-between h-full min-h-[350px]"
          >
            <div className="absolute top-0 right-0 p-8 text-slate-100/40 font-display font-black text-9xl pointer-events-none select-none leading-none z-0">
              $
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-2 text-primary font-mono text-xs font-bold uppercase tracking-widest mb-6">
                <Coins className="w-4 h-4 text-primary" />
                <span className="text-slate-500">Token Supply Allocation</span>
              </div>
              
              <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 mb-2 uppercase leading-tight">
                100% Community Owned
              </h3>
              <p className="text-slate-600 font-sans text-sm mb-6 leading-relaxed">
                No dev shares. No premium allocation. Every single token is deployed straight into the bonding curve for fair, open purchase on pump.fun.
              </p>
            </div>

            <div className="relative z-10">
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs font-mono font-bold text-slate-500 mb-2 uppercase">
                    <span>Liquidity & Bonding Curve</span>
                    <span className="text-secondary font-bold">100%</span>
                  </div>
                  <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden border border-slate-200">
                    <div className="bg-gradient-to-r from-primary to-secondary h-full w-full rounded-full" />
                  </div>
                </div>

                <div className="pt-2">
                  <div className="flex justify-between text-xs font-mono font-bold text-slate-500 mb-2 uppercase">
                    <span>Developer Allocation</span>
                    <span className="text-slate-400 font-bold">0%</span>
                  </div>
                  <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden border border-slate-200">
                    <div className="bg-red-500 h-full w-0 rounded-full" />
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 text-center">
                <span className="text-xs font-mono font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 px-3 py-1.5 rounded-lg inline-block text-glow-gold">
                  TOTAL SUPPLY: 1,000,000,000 $ALONBULL
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
