import { useEffect, useRef, useState, useMemo } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { ENABLE_MUSIC, MUSIC_URL } from './config';

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

/* -------------------------------------------------------------- */
/*  Confetti — lightweight canvas, no dependencies                 */
/* -------------------------------------------------------------- */
const CONFETTI_COLORS = ['#f7a8bc', '#e5507a', '#c4617a', '#ce7690', '#fde8ed', '#fffdfb'];

export function Confetti({ run }: { run: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!run || prefersReducedMotion()) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let raf = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const resize = () => {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener('resize', resize);

    const W = () => window.innerWidth;
    const H = () => window.innerHeight;
    type P = { x: number; y: number; w: number; h: number; vy: number; vx: number; rot: number; vr: number; color: string; sway: number; };
    const pieces: P[] = Array.from({ length: 150 }, () => ({
      x: Math.random() * W(),
      y: Math.random() * -H(),
      w: 6 + Math.random() * 7,
      h: 8 + Math.random() * 9,
      vy: 1 + Math.random() * 2,
      vx: -0.5 + Math.random(),
      rot: Math.random() * Math.PI,
      vr: -0.05 + Math.random() * 0.1,
      color: CONFETTI_COLORS[(Math.random() * CONFETTI_COLORS.length) | 0],
      sway: Math.random() * Math.PI * 2,
    }));

    const start = performance.now();
    const DURATION = 7000;

    const tick = (now: number) => {
      const elapsed = now - start;
      const fade = Math.max(0, 1 - Math.max(0, elapsed - DURATION * 0.6) / (DURATION * 0.4));
      ctx.clearRect(0, 0, W(), H());
      for (const p of pieces) {
        p.sway += 0.02;
        p.x += p.vx + Math.sin(p.sway) * 0.6;
        p.y += p.vy;
        p.rot += p.vr;
        if (p.y > H() + 20) { p.y = -20; p.x = Math.random() * W(); }
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.globalAlpha = fade;
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        ctx.restore();
      }
      if (elapsed < DURATION) {
        raf = requestAnimationFrame(tick);
      } else {
        ctx.clearRect(0, 0, W(), H());
      }
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, [run]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[60]"
    />
  );
}

/* -------------------------------------------------------------- */
/*  Floating petals                                                */
/* -------------------------------------------------------------- */
export function Petals({ count = 14 }: { count?: number }) {
  const petals = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 10 + Math.random() * 12,
        duration: 12 + Math.random() * 12,
        delay: -Math.random() * 20,
        drift: `${(-60 + Math.random() * 140).toFixed(0)}px`,
        opacity: 0.5 + Math.random() * 0.4,
      })),
    [count]
  );

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 overflow-hidden z-[2]">
      {petals.map((p) => (
        <span
          key={p.id}
          className="bday-petal"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            // @ts-expect-error custom property
            '--drift': p.drift,
          }}
        />
      ))}
    </div>
  );
}

/* -------------------------------------------------------------- */
/*  Twinkling sparkles                                             */
/* -------------------------------------------------------------- */
export function Sparkles({ count = 26 }: { count?: number }) {
  const sparkles = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: 3 + Math.random() * 5,
        duration: 2 + Math.random() * 3,
        delay: Math.random() * 4,
      })),
    [count]
  );

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 overflow-hidden z-[1]">
      {sparkles.map((s) => (
        <span
          key={s.id}
          className="bday-sparkle"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: s.size,
            height: s.size,
            animationDuration: `${s.duration}s`,
            animationDelay: `${s.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

/* -------------------------------------------------------------- */
/*  Background music toggle (opt-in, silent by default)            */
/* -------------------------------------------------------------- */
export function MusicToggle() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  if (!ENABLE_MUSIC || !MUSIC_URL) return null;

  const toggle = () => {
    const a = audioRef.current;
    if (!a) return;
    if (playing) {
      a.pause();
      setPlaying(false);
    } else {
      a.volume = 0.4;
      a.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    }
  };

  return (
    <>
      <audio ref={audioRef} src={MUSIC_URL} loop preload="none" />
      <button
        onClick={toggle}
        aria-label={playing ? 'Mute music' : 'Play music'}
        className="fixed bottom-6 left-6 z-[70] w-12 h-12 rounded-full bday-glass flex items-center justify-center text-[color:var(--bday-rose-deep)] transition-transform hover:scale-105 active:scale-95"
      >
        {playing ? <Volume2 size={18} strokeWidth={1.6} /> : <VolumeX size={18} strokeWidth={1.6} />}
      </button>
    </>
  );
}
