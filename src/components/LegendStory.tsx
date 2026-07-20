import { motion } from 'motion/react';
import { Award, ShieldAlert, Sparkles, Trophy } from 'lucide-react';

export default function LegendStory() {
  const chapters = [
    {
      num: '01',
      title: 'The Classroom Legend',
      text: 'Legend says MathCat sat in the back of an MIT mathematics lecture room for decades, staring at complex blackboard equations. While humans struggled with basic calculus, MathCat was secretly formulating the absolute mathematical law of viral memes.',
      icon: <Award className="w-6 h-6 text-primary" />,
      badge: "THE MIT CHALKBOARD",
    },
    {
      num: '02',
      title: 'Solving Solana',
      text: 'Tired of watching humans buy random dog coins with negative expected value, MathCat stepped up to the keyboard. Using advanced algebraic topology and game theory, MathCat modeled the ultimate token launch where gains are mathematically guaranteed.',
      icon: <Trophy className="w-6 h-6 text-secondary" />,
      badge: 'SOLVED EQUATIONS',
    },
    {
      num: '03',
      title: 'The Formula of $mathcat',
      text: 'By dividing the speed of Solana by the density of cat memes, MathCat discovered the ultimate constant: $mathcat. It is a mathematical fact that 1 $mathcat = 1 $mathcat, but when calculated against the bonding curve, the price approaches infinity.',
      icon: <ShieldAlert className="w-6 h-6 text-primary" />,
      badge: 'E = MC^CAT',
    },
    {
      num: '04',
      title: 'Exponential Paradigm',
      text: 'Now, the MathCat equation is live! Zero taxes, locked liquidity, and a community of intellectual feline degens. Stop guessing the next trade—trust the numbers, execute the formula, and ride the exponential curve to the moon!',
      icon: <Sparkles className="w-6 h-6 text-primary" />,
      badge: 'EXPONENTIAL GROWTH',
    }
  ];

  return (
    <section id="story" className="relative py-24 px-4 bg-bg-dark z-20 overflow-hidden border-t border-border-dark">
      {/* Decorative subtle background grid */}
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px]" />

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
            <h2 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-slate-100 tracking-tight uppercase">
              The Evolution of <span className="text-gradient bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-glow-gold">MathCat</span>
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-slate-300 font-sans text-sm sm:text-base">
              The epic formulation of Solana's most calculated feline, cracking the meme code with 100% mathematical precision.
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
                    <div className="p-3 bg-white/5 rounded-xl border border-primary/20">
                      {ch.icon}
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400 tracking-wider">
                      {ch.badge}
                    </span>
                  </div>
                  <span className="text-5xl font-display font-black text-slate-100/10 group-hover:text-primary/20 transition-colors duration-300">
                    {ch.num}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-display font-extrabold text-slate-100 mb-4 group-hover:text-primary transition-colors duration-300 uppercase">
                  {ch.title}
                </h3>
                <p className="text-slate-300 leading-relaxed text-sm sm:text-base font-sans">
                  {ch.text}
                </p>
              </div>

              {/* Card Footer decoration */}
              <div className="mt-8 pt-4 border-t border-border-dark flex justify-between items-center text-xs font-mono text-slate-400">
                <span>MATHEMATICAL SECRETS</span>
                <span className="text-primary font-bold group-hover:translate-x-1 transition-transform duration-300">
                  CALCULATING... →
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
          className="mt-16 p-8 rounded-2xl cyber-card text-center relative overflow-hidden"
        >
          <div className="absolute -top-12 -left-12 w-32 h-32 bg-primary/5 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-secondary/5 rounded-full blur-2xl pointer-events-none" />
          <p className="text-xl sm:text-2xl md:text-3xl font-display font-bold italic text-slate-200 leading-snug relative z-10">
            "Why guess when you can calculate? Mathematics is the language of the universe, and $mathcat is the absolute proof of infinite gains."
          </p>
          <div className="mt-4 text-primary font-mono text-xs uppercase tracking-widest font-bold relative z-10">
            — THE MATHCAT ACADEMY —
          </div>
        </motion.div>
      </div>
    </section>
  );
}
