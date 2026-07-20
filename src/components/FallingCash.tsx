import { useState, useEffect, useCallback } from 'react';
import { AnimatePresence } from 'motion/react';

interface MathParticle {
  id: number;
  x: number;
  y: number;
  rotation: number;
  scale: number;
  type: 'integral' | 'sigma' | 'pi' | 'infinity' | 'root' | 'equation' | 'theta' | 'delta';
  speed: number;
  rotationSpeed: number;
}

export default function FallingCash() {
  const [particles, setParticles] = useState<MathParticle[]>([]);

  // Helper to spawn a new particle
  const createParticle = useCallback((
    x: number, 
    y: number, 
    type?: 'integral' | 'sigma' | 'pi' | 'infinity' | 'root' | 'equation' | 'theta' | 'delta'
  ): MathParticle => {
    const types: ('integral' | 'sigma' | 'pi' | 'infinity' | 'root' | 'equation' | 'theta' | 'delta')[] = 
      ['integral', 'sigma', 'pi', 'infinity', 'root', 'equation', 'theta', 'delta'];
    const selectedType = type || types[Math.floor(Math.random() * types.length)];
    
    return {
      id: Math.random() + Date.now(),
      x,
      y,
      rotation: Math.random() * 360,
      scale: 0.6 + Math.random() * 0.8,
      type: selectedType,
      speed: 1.5 + Math.random() * 2.5,
      rotationSpeed: (Math.random() - 0.5) * 4,
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
    }, 400);

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

      const burstCount = 8;
      const newBurst: MathParticle[] = [];
      for (let i = 0; i < burstCount; i++) {
        const particle = createParticle(e.clientX, e.clientY);
        particle.speed = 2.5 + Math.random() * 4;
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
          let renderText = 'π';
          let textColor = 'text-primary/40';

          if (p.type === 'integral') {
            renderText = '∫';
            textColor = 'text-secondary/40';
          } else if (p.type === 'sigma') {
            renderText = 'Σ';
            textColor = 'text-primary/40';
          } else if (p.type === 'infinity') {
            renderText = '∞';
            textColor = 'text-accent/40';
          } else if (p.type === 'root') {
            renderText = '√x';
            textColor = 'text-emerald-500/30';
          } else if (p.type === 'equation') {
            const eqOptions = ['E=mc²', 'f(x)', 'dy/dx', 'lim→∞', 'x+y=1', 'log(n)'];
            renderText = eqOptions[Math.floor((p.id * 10) % eqOptions.length)];
            textColor = 'text-slate-300/35';
          } else if (p.type === 'theta') {
            renderText = 'θ';
            textColor = 'text-primary/30';
          } else if (p.type === 'delta') {
            renderText = 'Δ';
            textColor = 'text-secondary/35';
          }

          return (
            <div
              key={p.id}
              className={`absolute select-none font-mono font-bold text-sm sm:text-base filter drop-shadow-sm ${textColor}`}
              style={{
                left: p.x,
                top: p.y,
                transform: `rotate(${p.rotation}deg) scale(${p.scale})`,
                opacity: 0.65,
              }}
            >
              {renderText}
            </div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}

