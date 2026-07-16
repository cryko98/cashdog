import { motion } from 'motion/react';

interface LiveMemeTickerProps {
  speed?: number;
  reverse?: boolean;
}

export default function LiveMemeTicker({ speed = 25, reverse = false }: LiveMemeTickerProps) {
  const items = [
    'ALONBULL IS CHARGING 🐂🔥',
    'ALON LEAD US TO THE BILLIONS 🚀',
    'PUMP.FUN FOUNDER TURNED COSMIC BULL 🟢',
    '100% COMMUNITY OWNED $alonbull 🪙',
    'GREEN GOD CANDLES INBOUND 📈',
    'NO VC, NO PRE-MINTS, JUST RAW ALON POWER ⚡',
    'BULL MARKET TO THE PEAK 🎯',
    'STOCKED WITH COINS & READY TO CHARGE 💎',
    'THE RUG-PROOF BULL OF SOLANA 🔒',
  ];

  // Repeat the array to guarantee no gaps during infinite scrolling
  const repeatedItems = [...items, ...items, ...items];

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-r from-emerald-600 via-primary to-emerald-500 py-3.5 border-y border-primary/20 font-display font-extrabold text-white uppercase tracking-wider text-xs sm:text-sm md:text-base z-20 shadow-[0_4px_20px_rgba(36,192,126,0.1)]">
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
