import { motion } from 'motion/react';
import { Award, ShieldAlert, Sparkles, Trophy } from 'lucide-react';

export default function LegendStory() {
  const chapters = [
    {
      num: '01',
      title: 'The Vision of Alon',
      text: 'Deep inside the digital trenches of Solana, Alon (the ultimate pioneer and founder of pump.fun) watched the markets stagnate. Guided by raw determination, he fused his visionary genius with the cosmic spirit of a supreme bull, creating $alonbull to lead the final financial crusade.',
      icon: <Award className="w-6 h-6 text-primary" />,
      badge: "THE ARCHITECT'S PLAN",
    },
    {
      num: '02',
      title: 'Charging the Bonding Curve',
      text: 'To prove the absolute strength of his system, Alonbull took to the bonding curve. Paper-handed skeptics doubted, but Alon stood tall, deflecting their shorts and charging through resistance like a golden juggernaut. He didn\'t just fill the curve—he shattered it.',
      icon: <Trophy className="w-6 h-6 text-secondary" />,
      badge: 'UNSTOPPABLE MOMENTUM',
    },
    {
      num: '03',
      title: 'The Raydium Ascension',
      text: 'With 100% of the curve saturated, Alonbull completed the legendary graduation. Every ounce of liquidity was welded into Raydium. Contract burned, mint authorities revoked, and a path of pure green god candles was laid out for the entire community.',
      icon: <ShieldAlert className="w-6 h-6 text-primary" />,
      badge: 'GRADUATED SUPREMACY',
    },
    {
      num: '04',
      title: 'To the Absolute Climax',
      text: 'Alonbull now stands at the peak of the chart, horn raised, calling upon the global pack. This isn\'t just a memecoin—it is the official mascot of the ultimate bull run, steered by the founder of the trenches himself. Our destiny is the billions.',
      icon: <Sparkles className="w-6 h-6 text-primary" />,
      badge: 'THE GOLDEN PEAK',
    }
  ];

  return (
    <section id="story" className="relative py-24 px-4 bg-bg-dark z-20 overflow-hidden border-t border-slate-100">
      {/* Decorative subtle background grid */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[radial-gradient(#24c07e_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="px-4 py-1.5 bg-primary/10 border border-primary/30 text-primary text-xs font-mono font-bold tracking-widest rounded-lg uppercase inline-block cyber-glow-gold">
              The Legend
            </span>
            <h2 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-slate-900 tracking-tight uppercase">
              The Rise of <span className="text-gradient bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-glow-gold">$ALONBULL</span>
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-slate-600 font-sans text-sm sm:text-base">
              The epic story of Alon, the architect of Solana's trading revolution, charging forward to lead the market to its absolute zenith.
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
              className="relative p-8 rounded-2xl flex flex-col justify-between transition-all duration-300 cyber-card cyber-card-hover group"
            >
              <div>
                {/* Chapter metadata */}
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-150">
                      {ch.icon}
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-500 tracking-wider">
                      {ch.badge}
                    </span>
                  </div>
                  <span className="text-5xl font-display font-black text-slate-200 group-hover:text-primary/20 transition-colors duration-300">
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
              <div className="mt-8 pt-4 border-t border-slate-100 flex justify-between items-center text-xs font-mono text-slate-500">
                <span>FOUNDER SECRETS</span>
                <span className="text-primary font-bold group-hover:translate-x-1 transition-transform duration-300">
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
          className="mt-16 p-8 rounded-2xl bg-white border border-primary/20 text-center relative overflow-hidden shadow-sm"
        >
          <div className="absolute -top-12 -left-12 w-32 h-32 bg-primary/5 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-secondary/5 rounded-full blur-2xl pointer-events-none" />
          <p className="text-xl sm:text-2xl md:text-3xl font-display font-bold italic text-slate-800 leading-snug relative z-10">
            "They think they can stop the bull run, but I created the very ground they trade on. We charge forward until the entire chart turns golden."
          </p>
          <div className="mt-4 text-primary font-mono text-xs uppercase tracking-widest font-bold relative z-10">
            — THE ALONBULL CREED —
          </div>
        </motion.div>
      </div>
    </section>
  );
}
