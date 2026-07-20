import { motion } from 'motion/react';

interface LiveMemeTickerProps {
  speed?: number;
  reverse?: boolean;
}

export default function LiveMemeTicker({ speed = 25, reverse = false }: LiveMemeTickerProps) {
  const items = [
    'MATHCAT IS CALCULATING 🐱🧮',
    'EXPONENTIAL GAINS ONLY 📈✨',
    'E = MC^CAT SOLVED! 🔬',
    '100% FORMULA PRECISION $mathcat 🧠',
    'BLACKBOARD ALGEBRA MASTERED 🎓',
    'THE CHALKBOARD ACADEMY OF SOLANA 🏫',
    'LIMIT APPROACHING INFINITY 💎',
    'MATHCAT RUN IS QUANTIFIABLE 🎯',
  ];

  // Repeat the array to guarantee no gaps during infinite scrolling
  const repeatedItems = [...items, ...items, ...items];

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-r from-accent via-primary to-secondary py-3.5 border-y border-primary/20 font-display font-extrabold text-black uppercase tracking-wider text-xs sm:text-sm md:text-base z-20 shadow-[0_4px_20px_rgba(16,185,129,0.25)]">
      <motion.div
        className="flex whitespace-nowrap gap-12 items-center"
        animate={{
          x: reverse ? [ '-50%', '0%' ] : [ '0%', '-50%' ],
        }}
        transition={{
          ease: 'linear',
          duration: speed,
          repeat: Infinity,
        }}
      >
        {repeatedItems.map((item, idx) => (
          <div key={idx} className="flex items-center gap-3 shrink-0 select-none">
            <span className="drop-shadow-sm">{item}</span>
            <span className="w-2 h-2 bg-white/85 rounded-full" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
