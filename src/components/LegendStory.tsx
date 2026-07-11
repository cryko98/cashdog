import { motion } from 'motion/react';
import { Award, ShieldAlert, Sparkles, Trophy } from 'lucide-react';

export default function LegendStory() {
  const chapters = [
    {
      num: '01',
      title: 'The Solana Rampage (2021)',
      text: 'Back in 2021, while Robinhood was still dreaming about becoming the king of finance, a legend was already running wild on Solana. A street bull with one mission: charge and fetch the cash.',
      icon: <Award className="w-6 h-6 text-primary" />,
      accent: 'border-emerald-500/20 hover:border-emerald-400/80',
      badge: 'THE ORIGIN',
    },
    {
      num: '02',
      title: 'The Bear Market Stomper',
      text: 'He was there through every bull run. When degens were crying in the bear market, Cash Bull showed up with the bags. Loyal. Relentless. Always sniffing out the next 100x.',
      icon: <Trophy className="w-6 h-6 text-emerald-500" />,
      accent: 'border-green-500/20 hover:border-green-400/80',
      badge: 'LOYALTY FIRST',
    },
    {
      num: '03',
      title: 'Back with a Vengeance',
      text: 'Now he’s back with a vengeance. While Cash Cat is busy taking selfies in the Robinhood wallet, Cash Bull is out here on Solana hunting real money and delivering it straight to the herd.',
      icon: <ShieldAlert className="w-6 h-6 text-red-500" />,
      accent: 'border-red-500/20 hover:border-red-400/80',
      badge: 'THE VENGEANCE',
    },
    {
      num: '04',
      title: 'Bulls Charge!',
      text: 'Cats scratch. Dogs fetch. Welcome to the era of Cash Bull. No utility. Just loyalty and gains.',
      icon: <Sparkles className="w-6 h-6 text-yellow-500" />,
      accent: 'border-yellow-500/20 hover:border-yellow-400/80',
      badge: 'THE ERA',
    }
  ];

  return (
    <section id="story" className="relative py-24 px-4 bg-gradient-to-b from-bg-dark to-black z-20 overflow-hidden">
      {/* Decorative radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="px-3 py-1 bg-emerald-500/10 border border-primary/30 text-primary text-xs font-mono font-bold tracking-widest rounded-full uppercase">
              The Sacred Scrolls
            </span>
            <h2 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight uppercase">
              The Legend of <span className="text-gradient bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent text-glow-green">$CASHBULL</span>
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-gray-400 font-sans text-sm sm:text-base">
              The epic story of Solana's supreme wealth charger. While other memes sit pretty on wallpapers, $CASHBULL runs the streets charging real bags.
            </p>
          </motion.div>
        </div>

        {/* Vertical timeline or Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
          {chapters.map((ch, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className={`relative p-8 bg-bg-card border-2 ${ch.accent} rounded-2xl flex flex-col justify-between transition-all duration-300 shadow-xl group`}
            >
              {/* Highlight background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300 pointer-events-none" />

              <div>
                {/* Chapter metadata */}
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                      {ch.icon}
                    </div>
                    <span className="text-xs font-mono font-bold text-gray-500 tracking-wider">
                      {ch.badge}
                    </span>
                  </div>
                  <span className="text-5xl font-display font-black text-white/5 group-hover:text-primary/10 transition-colors duration-300">
                    {ch.num}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-display font-extrabold text-white mb-4 group-hover:text-primary transition-colors duration-300">
                  {ch.title}
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base font-sans">
                  {ch.text}
                </p>
              </div>

              {/* Card Footer decoration */}
              <div className="mt-8 pt-4 border-t border-white/5 flex justify-between items-center text-xs font-mono text-gray-500">
                <span>SOLANA BLOCKCHAIN</span>
                <span className="text-primary group-hover:translate-x-1 transition-transform duration-300">
                  CHARGING... →
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Centered quote banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-emerald-500/10 via-primary/5 to-green-500/10 border-2 border-primary/20 text-center relative overflow-hidden"
        >
          <div className="absolute -top-12 -left-12 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
          <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl" />
          <p className="text-xl sm:text-2xl md:text-3xl font-display font-bold italic text-white leading-snug">
            "While Cash Cat is busy taking selfies in the Robinhood wallet, Cash Bull is out here on Solana hunting real money and delivering it straight to the herd."
          </p>
          <div className="mt-4 text-primary font-mono text-xs uppercase tracking-widest font-black">
            — THE $CASHBULL CREED —
          </div>
        </motion.div>
      </div>
    </section>
  );
}
