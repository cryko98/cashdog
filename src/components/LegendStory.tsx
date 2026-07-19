import { motion } from 'motion/react';
import { Award, ShieldAlert, Sparkles, Trophy } from 'lucide-react';

export default function LegendStory() {
  const chapters = [
    {
      num: '01',
      title: 'The Cash Cat Genesis',
      text: 'It all started in the viral streets of Solana. Cashcat conquered the internet, flooding everyone\'s feeds with hilarious green bills and pure financial hype. It was a legendary era of high-speed trading, internet-wide laughter, and raw meme power.',
      icon: <Award className="w-6 h-6 text-primary" />,
      badge: "THE MEME OF MEMES",
    },
    {
      num: '02',
      title: 'The Gilded Alchemy',
      text: 'But cash is just paper, and paper burns. The community demanded something indestructible. Under the high-speed cosmic rays of the Solana blockchain, Cash Cat went through a complete physical transmutation—emerging as pure, solid Gold Cat!',
      icon: <Trophy className="w-6 h-6 text-secondary" />,
      badge: 'PURE TRANSFORMATION',
    },
    {
      num: '03',
      title: 'Gold beats Cash',
      text: 'As everyone knows, gold is infinitely more valuable, scarce, and prestigious than simple paper money. By upgrading to $goldcat, the herd has transcended regular trading. Every single transaction is now coated in royal 24-karat luster.',
      icon: <ShieldAlert className="w-6 h-6 text-primary" />,
      badge: 'BETTER THAN CASH',
    },
    {
      num: '04',
      title: 'The Royal Peak',
      text: 'Now, Gold Cat reigns supreme as the ultimate feline standard of wealth. Free of tax, completely community-driven, and locked forever inside the golden vault. We aren\'t just trading anymore—we are building an empire of gold!',
      icon: <Sparkles className="w-6 h-6 text-primary" />,
      badge: 'THE GOLDEN STANDARD',
    }
  ];

  return (
    <section id="story" className="relative py-24 px-4 bg-bg-dark z-20 overflow-hidden border-t border-border-dark">
      {/* Decorative subtle background grid */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:24px_24px]" />

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
              The Evolution of <span className="text-gradient bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-glow-gold">GOLD CAT</span>
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-slate-300 font-sans text-sm sm:text-base">
              The epic transformation of Solana's most viral feline from cashcat into pure, high-value, indestructible 24k gold.
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
                <span>ROYAL SECRETS</span>
                <span className="text-primary font-bold group-hover:translate-x-1 transition-transform duration-300">
                  SHINING... →
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
            "Paper cash can be printed forever, but physical gold is eternal. Gold Cat is here to turn your standard paper gains into pure, immutable 24k gold."
          </p>
          <div className="mt-4 text-primary font-mono text-xs uppercase tracking-widest font-bold relative z-10">
            — THE GOLD CAT STANDARD —
          </div>
        </motion.div>
      </div>
    </section>
  );
}
