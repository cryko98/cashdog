import { motion } from 'motion/react';
import { Award, ShieldAlert, Sparkles, Trophy } from 'lucide-react';

export default function LegendStory() {
  const chapters = [
    {
      num: '01',
      title: 'The Bonding Curve Birth',
      text: 'Deep in the trenches of pump.fun, a cute, crying kitten wearing a signature green pill cap was minted. Armed with zero taxes and a dream, the community immediately fell in love with those big watery eyes.',
      icon: <Award className="w-6 h-6 text-black" />,
      accent: 'border-black',
      badge: 'BORN IN THE TRENCHES',
    },
    {
      num: '02',
      title: 'Surviving the Jeets',
      text: 'While paper hands tried to dump and scratch their way out, $PUMPCAT stood firm. The community formed an unbreakable support floor, driving the green candles up with absolute diamond-paw resolve.',
      icon: <Trophy className="w-6 h-6 text-black" />,
      accent: 'border-black',
      badge: 'DIAMOND PAWS',
    },
    {
      num: '03',
      title: 'Raydium Graduation!',
      text: '100% of the bonding curve filled in record time! With a glorious burst of green energy, liquidity migrated to Raydium, and the LP tokens were sent directly to the burn address. There is no looking back.',
      icon: <ShieldAlert className="w-6 h-6 text-black" />,
      accent: 'border-black',
      badge: 'RAYDIUM BOUND',
    },
    {
      num: '04',
      title: 'King of the Solana Cats',
      text: 'No longer just a crying trench kitten—Pump Cat is now the undisputed king of Solana, wearing the green pill cap of supreme wealth. Grab a bag and ride the ultimate green candle to glory.',
      icon: <Sparkles className="w-6 h-6 text-black" />,
      accent: 'border-black',
      badge: 'SUPREME MEME',
    }
  ];

  return (
    <section id="story" className="relative py-24 px-4 bg-[#fafafa] z-20 overflow-hidden border-t-2 border-black">
      {/* Decorative subtle background grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="px-4 py-1.5 bg-primary/20 border-2 border-black text-slate-900 text-xs font-mono font-black tracking-widest rounded-lg uppercase inline-block pump-shadow">
              The Legend
            </span>
            <h2 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-slate-900 tracking-tight uppercase">
              The Rise of <span className="text-gradient bg-gradient-to-r from-primary to-emerald-600 bg-clip-text text-transparent text-glow-green">$PUMPCAT</span>
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-slate-600 font-sans text-sm sm:text-base font-medium">
              The epic story of Solana's beloved crying cat who survived the trenches, conquered the bonding curve, and became a multi-million dollar legend.
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
              className="relative p-8 bg-white border-2 border-black rounded-2xl flex flex-col justify-between transition-all duration-300 pump-shadow hover:translate-y-[-4px] hover:translate-x-[-4px] hover:shadow-[8px_8px_0px_0px_#000000] group"
            >
              <div>
                {/* Chapter metadata */}
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-primary/10 rounded-xl border-2 border-black">
                      {ch.icon}
                    </div>
                    <span className="text-xs font-mono font-black text-slate-700 tracking-wider">
                      {ch.badge}
                    </span>
                  </div>
                  <span className="text-5xl font-display font-black text-slate-200 group-hover:text-primary/30 transition-colors duration-300">
                    {ch.num}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-display font-extrabold text-slate-900 mb-4 group-hover:text-primary transition-colors duration-300 uppercase">
                  {ch.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base font-sans">
                  {ch.text}
                </p>
              </div>

              {/* Card Footer decoration */}
              <div className="mt-8 pt-4 border-t-2 border-dashed border-slate-100 flex justify-between items-center text-xs font-mono text-slate-500">
                <span>PUMP.FUN ORIGINS</span>
                <span className="text-primary font-black group-hover:translate-x-1 transition-transform duration-300">
                  PUMPING... →
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
          className="mt-16 p-8 rounded-2xl bg-white border-2 border-black text-center relative overflow-hidden pump-shadow"
        >
          <div className="absolute -top-12 -left-12 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
          <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
          <p className="text-xl sm:text-2xl md:text-3xl font-display font-bold italic text-slate-800 leading-snug relative z-10">
            "Paper hands cry, but Pump Cat cries all the way to the bank. Survived the trenches, graduated Raydium, and launched to the stars."
          </p>
          <div className="mt-4 text-primary font-mono text-xs uppercase tracking-widest font-black relative z-10">
            — THE $PUMPCAT CREED —
          </div>
        </motion.div>
      </div>
    </section>
  );
}
