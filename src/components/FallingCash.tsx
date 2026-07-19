import { useState, useEffect, useCallback } from 'react';
import { AnimatePresence } from 'motion/react';

interface CashParticle {
  id: number;
  x: number;
  y: number;
  rotation: number;
  scale: number;
  type: 'coin' | 'cat' | 'bag' | 'sparkle';
  speed: number;
  rotationSpeed: number;
}

export default function FallingCash() {
  const [particles, setParticles] = useState<CashParticle[]>([]);

  // Helper to spawn a new particle
  const createParticle = useCallback((
    x: number, 
    y: number, 
    type?: 'coin' | 'cat' | 'bag' | 'sparkle'
  ): CashParticle => {
    const types: ('coin' | 'cat' | 'bag' | 'sparkle')[] = ['coin', 'cat', 'bag', 'sparkle'];
    const selectedType = type || types[Math.floor(Math.random() * types.length)];
    
    return {
      id: Math.random() + Date.now(),
      x,
      y,
      rotation: Math.random() * 360,
      scale: 0.5 + Math.random() * 0.8,
      type: selectedType,
      speed: 2 + Math.random() * 3,
      rotationSpeed: (Math.random() - 0.5) * 8,
    };
  }, []);

  // Spawn initial falling ambient items
  useEffect(() => {
    const interval = setInterval(() => {
      setParticles((prev) => {
        const active = prev.filter((p) => p.y < window.innerHeight + 100);
        if (active.length < 35) {
          const startX = Math.random() * window.innerWidth;
          return [...active, createParticle(startX, -50)];
        }
        return active;
      });
    }, 450);

    return () => clearInterval(interval);
  }, [createParticle]);

  // Click handler to burst items at cursor
  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'BUTTON' || 
        target.tagName === 'A' || 
        target.tagName === 'INPUT' ||
        target.closest('button') ||
        target.closest('a')
      ) {
        return;
      }

      const burstCount = 6;
      const newBurst: CashParticle[] = [];
      for (let i = 0; i < burstCount; i++) {
        const particle = createParticle(e.clientX, e.clientY);
        particle.speed = 3 + Math.random() * 5;
        newBurst.push(particle);
      }

      setParticles((prev) => [...prev, ...newBurst]);
    };

    window.addEventListener('click', handleGlobalClick);
    return () => window.removeEventListener('click', handleGlobalClick);
  }, [createParticle]);

  // Update loop for particles falling down
  useEffect(() => {
    let animationFrameId: number;

    const updateParticles = () => {
      setParticles((prev) =>
        prev
          .map((p) => ({
            ...p,
            y: p.y + p.speed,
            rotation: p.rotation + p.rotationSpeed,
          }))
          .filter((p) => p.y < window.innerHeight + 100)
      );
      animationFrameId = requestAnimationFrame(updateParticles);
    };

    animationFrameId = requestAnimationFrame(updateParticles);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      <AnimatePresence>
        {particles.map((p) => {
          let renderEmoji = '🪙';
          if (p.type === 'cat') renderEmoji = '🐱';
          if (p.type === 'bag') renderEmoji = '💰';
          if (p.type === 'sparkle') renderEmoji = '✨';

          return (
            <div
              key={p.id}
              className="absolute select-none text-xl sm:text-2xl filter drop-shadow-md"
              style={{
                left: p.x,
                top: p.y,
                transform: `rotate(${p.rotation}deg) scale(${p.scale})`,
                opacity: 0.5,
              }}
            >
              {renderEmoji}
            </div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
