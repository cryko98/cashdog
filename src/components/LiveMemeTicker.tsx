import { motion } from 'motion/react';

interface LiveMemeTickerProps {
  speed?: number;
  reverse?: boolean;
}

export default function LiveMemeTicker({ speed = 25, reverse = false }: LiveMemeTickerProps) {
  const items = [
    'GOLD CAT IS REIGNING 🐱👑',
    'MORE VALUABLE THAN CASH 💰✨',
    'FROM CASHCAT TO GILDED SUPREMACY 🌟',
    '100% IMMUTABLE GOLD $goldcat 🪙',
    'GOLD STANDARD INBOUND 📈',
    'THE ROYAL VAULT OF SOLANA 🔒',
    'PURE 24K MEME POWER 💎',
    'GOLD CAT RUN IS HERE 🎯',
  ];

  // Repeat the array to guarantee no gaps during infinite scrolling
  const repeatedItems = [...items, ...items, ...items];

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-r from-accent via-primary to-secondary py-3.5 border-y border-primary/20 font-display font-extrabold text-black uppercase tracking-wider text-xs sm:text-sm md:text-base z-20 shadow-[0_4px_20px_rgba(212,175,55,0.2)]">
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
