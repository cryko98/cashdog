import { motion } from 'motion/react';

interface LiveMemeTickerProps {
  speed?: number;
  reverse?: boolean;
}

export default function LiveMemeTicker({ speed = 25, reverse = false }: LiveMemeTickerProps) {
  const items = [
    '$CASHBULL TO THE MOON 🚀',
    'CATS SCRATCH 🐱 DOGS FETCH 🐶 BULLS CHARGE 🐂',
    'SOLANA BULL MARKET FORCE 💚',
    'NO UTILITY JUST GAINS 🔥',
    'GREEN CANDLES ONLY 📈',
    'CHARGING THE CASH 💸',
    '100% LOYALTY AND BAGS 💼',
    'SMASH THE BEARS 🐻❌',
    'LP BURNT 🔒',
    'JOIN THE HERD 🐂',
  ];

  // Repeat the array to guarantee no gaps during infinite scrolling
  const repeatedItems = [...items, ...items, ...items];

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-r from-emerald-500 via-primary to-green-400 py-3 border-y-2 border-black font-display font-bold text-black uppercase tracking-wider text-sm sm:text-base md:text-lg shadow-lg z-20">
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
            <span>{item}</span>
            <span className="w-2.5 h-2.5 bg-black rounded-full" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
