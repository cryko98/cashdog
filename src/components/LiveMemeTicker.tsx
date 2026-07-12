import { motion } from 'motion/react';

interface LiveMemeTickerProps {
  speed?: number;
  reverse?: boolean;
}

export default function LiveMemeTicker({ speed = 25, reverse = false }: LiveMemeTickerProps) {
  const items = [
    '$PUMPCAT TO THE MOON 🚀',
    'SURVIVED THE BONDING CURVE 📈',
    'GRADUATED TO RAYDIUM 🎓',
    'PUMP CATS ONLY 🐱💊',
    'GREEN CANDLES ONLY 🟢👒',
    'CRYING BUT PUMPING HARD 😿',
    '100% SAFU BONDING CURVE 🔒',
    'JOIN THE PUMP CAT REVOLUTION 💚',
    'MINT REVOKED & LP BURNT 🔥',
  ];

  // Repeat the array to guarantee no gaps during infinite scrolling
  const repeatedItems = [...items, ...items, ...items];

  return (
    <div className="relative w-full overflow-hidden bg-primary py-3 border-y-2 border-black font-display font-bold text-black uppercase tracking-wider text-sm sm:text-base md:text-lg shadow-[0_4px_0_0_#000000] z-20">
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
