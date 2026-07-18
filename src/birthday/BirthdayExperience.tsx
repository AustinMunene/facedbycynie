import { useState, useEffect, ReactNode } from 'react';
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  Variants,
} from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart, ArrowRight, Sparkles as SparkleIcon } from 'lucide-react';
import './birthday.css';
import { Confetti, Petals, Sparkles, MusicToggle } from './effects';
import { BackToTop } from '../components/ui/BackToTop';
import * as C from './config';

const EASE = [0.23, 1, 0.32, 1] as const;

/* ---------- small helpers ---------- */
function Reveal({
  children,
  delay = 0,
  y = 30,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

function Flower({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 100 100" className={className} style={style} aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="1.4" opacity="0.9">
        {[0, 60, 120, 180, 240, 300].map((r) => (
          <ellipse key={r} cx="50" cy="30" rx="11" ry="20" transform={`rotate(${r} 50 50)`} />
        ))}
        <circle cx="50" cy="50" r="6" fill="currentColor" stroke="none" opacity="0.5" />
      </g>
    </svg>
  );
}

/* ============================================================ */
/*  INTRO OVERLAY                                                */
/* ============================================================ */
function Intro({ onOpen, showButton }: { onOpen: () => void; showButton: boolean }) {
  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.5, delayChildren: 0.5 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 1, ease: EASE } },
  };

  return (
    <motion.section
      exit={{ opacity: 0, filter: 'blur(8px)', scale: 1.02 }}
      transition={{ duration: 0.9, ease: EASE }}
      className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-6"
    >
      <Flower
        className="bday-floaty absolute top-[14%] left-[12%] w-16 h-16 text-[color:var(--bday-gold-soft)] opacity-60"
      />
      <Flower
        className="bday-floaty absolute bottom-[16%] right-[12%] w-20 h-20 text-[color:var(--bday-blush-deep)] opacity-60"
        style={{ animationDelay: '2s' }}
      />

      <motion.div variants={container} initial="hidden" animate="show" className="max-w-2xl">
        <motion.p variants={item} className="bday-eyebrow mb-8">
          A moment, just for you
        </motion.p>

        <motion.h2
          variants={item}
          className="bday-serif text-[clamp(1.8rem,4vw,3rem)] leading-[1.25] text-[color:var(--bday-ink)] mb-10 italic"
        >
          {C.INTRO_LINES[0]}
          <br />
          <span className="text-[color:var(--bday-rose-deep)]">{C.INTRO_LINES[1]}</span>
        </motion.h2>

        <motion.p
          variants={item}
          className="bday-serif text-[clamp(2rem,5vw,3.4rem)] leading-tight bday-gold-text"
        >
          Happy {C.AGE}th Birthday, {C.NAME} <span className="align-middle">❤️</span>
        </motion.p>
      </motion.div>

      <div className="h-24 mt-12 flex items-center justify-center">
        <AnimatePresence>
          {showButton && (
            <motion.button
              initial={{ opacity: 0, y: 20, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: EASE }}
              onClick={onOpen}
              className="bday-btn"
            >
              <SparkleIcon size={16} strokeWidth={1.6} />
              Open Your Birthday Surprise
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
}

/* ============================================================ */
/*  BIRTHDAY PAGE                                                */
/* ============================================================ */
function BirthdayPage() {
  const { scrollY } = useScroll();
  const yUp = useTransform(scrollY, [0, 700], [0, -110]);
  const yDown = useTransform(scrollY, [0, 700], [0, 90]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: EASE }}
      className="relative z-10"
    >
      {/* ---------------- HERO ---------------- */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        <motion.div style={{ y: yUp }} className="absolute -top-10 -left-10 w-72 h-72 rounded-full blur-3xl" >
          <div className="w-full h-full rounded-full bg-[color:var(--bday-blush-deep)] opacity-40" />
        </motion.div>
        <motion.div style={{ y: yDown }} className="absolute bottom-0 right-0 w-80 h-80 rounded-full blur-3xl">
          <div className="w-full h-full rounded-full bg-[color:var(--bday-gold-soft)] opacity-30" />
        </motion.div>

        <Flower className="bday-floaty absolute top-[18%] right-[16%] w-14 h-14 text-[color:var(--bday-gold)] opacity-50" />
        <Flower className="bday-floaty absolute bottom-[20%] left-[14%] w-24 h-24 text-[color:var(--bday-blush-deep)] opacity-50" style={{ animationDelay: '1.5s' }} />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE, delay: 0.2 }}
          className="relative"
        >
          <p className="bday-eyebrow mb-6">IT'S YOUR SPECIAL DAY</p>
          <h1 className="bday-serif text-[clamp(2.6rem,8vw,6rem)] leading-[1.02] text-[color:var(--bday-ink)]">
            Happy {C.AGE}th Birthday,
            <span className="block italic bday-gold-text mt-2">{C.NAME}</span>
          </h1>
          <p className="bday-sans text-[clamp(0.95rem,1.8vw,1.15rem)] text-[color:var(--bday-ink-soft)] max-w-2xl mx-auto mt-8 leading-relaxed">
            My Baby finally turns 20 😂😂
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="absolute bottom-10 flex flex-col items-center gap-2"
        >
          <span className="bday-eyebrow text-[9px]">Scroll</span>
          <span className="w-px h-8 bg-[color:var(--bday-gold)] opacity-50" />
        </motion.div>
      </section>

      {/* ---------------- LETTER ---------------- */}
      <section className="relative px-6 py-16 md:py-24 lg:py-32">
        <div className="max-w-3xl mx-auto">
          <Reveal className="text-center mb-12">
            <p className="bday-eyebrow mb-4">From my heart to yours</p>
            <h2 className="bday-serif text-[clamp(2rem,5vw,3.2rem)] italic text-[color:var(--bday-ink)]">
              A Letter For You
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="bday-glass p-6 sm:p-8 md:p-14">
              {C.LETTER_PARAGRAPHS.map((p, i) => (
                <p
                  key={i}
                  className="bday-sans text-[clamp(1rem,1.7vw,1.2rem)] leading-[1.8] text-[color:var(--bday-ink)] mb-6 last:mb-0"
                >
                  {p}
                </p>
              ))}
              <div className="mt-10 text-right">
                <span className="bday-serif italic text-[clamp(1.15rem,2.4vw,1.5rem)] font-semibold text-[color:var(--bday-rose-deep)]">
                  — {C.SIGNATURE} ❤️
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- 28 THINGS ---------------- */}
      <section className="relative px-6 py-16 md:py-24 lg:py-28">
        <Reveal className="text-center mb-10 md:mb-14">
          <p className="bday-eyebrow mb-4">Never-ending list</p>
          <h2 className="bday-serif text-[clamp(2rem,5vw,3.2rem)] italic text-[color:var(--bday-ink)]">
            {C.AGE} Things I Love About You
          </h2>
        </Reveal>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
          {C.THINGS_I_LOVE.map((thing, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, ease: EASE, delay: (i % 4) * 0.05 }}
              whileHover={{ y: -6 }}
              className="bday-card group p-5 sm:p-6 transition-shadow duration-300 hover:shadow-[0_28px_60px_-28px_rgba(168,95,120,0.55)]"
            >
              <span className="bday-num text-[color:var(--bday-gold)] text-2xl block mb-3 transition-transform duration-300 group-hover:scale-110 origin-left">
                {String(i + 1).padStart(2, '0')}
              </span>
              <p className="bday-sans text-[14px] leading-[1.7] text-[color:var(--bday-ink)]">
                {thing}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ---------------- PRAYER ---------------- */}
      <section className="relative px-6 py-16 md:py-24 lg:py-32 overflow-hidden">
        <div
          aria-hidden
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(247,168,188,0.55), transparent 65%)', animation: 'bday-glow-pulse 6s ease-in-out infinite' }}
        />
        {/* soft glowing star */}
        <svg aria-hidden viewBox="0 0 100 100" className="absolute left-1/2 -translate-x-1/2 top-[16%] w-16 h-16 text-[color:var(--bday-gold)]" style={{ animation: 'bday-glow-pulse 5s ease-in-out infinite', filter: 'drop-shadow(0 0 12px rgba(247,168,188,0.8))' }}>
          <path d="M50 8 L58 42 L92 50 L58 58 L50 92 L42 58 L8 50 L42 42 Z" fill="currentColor" opacity="0.85" />
        </svg>

        <div className="relative max-w-3xl mx-auto">
          <Reveal>
            <div className="bday-glass p-6 sm:p-8 md:p-14 text-center">
              <p className="bday-eyebrow mb-4">Held in prayer</p>
              <h2 className="bday-serif text-[clamp(1.8rem,4.5vw,2.8rem)] italic text-[color:var(--bday-ink)] mb-8">
                {C.PRAYER_TITLE}
              </h2>
              <p className="bday-sans text-[clamp(1rem,1.7vw,1.2rem)] leading-[1.9] text-[color:var(--bday-ink)]">
                {C.PRAYER_TEXT}
              </p>
            </div>
          </Reveal>
        </div>
      </section>Today

      {/* ---------------- MEMORIES ---------------- */}
      <section className="relative px-6 py-16 md:py-24 lg:py-28">
        <Reveal className="text-center mb-12 md:mb-16">
          <p className="bday-eyebrow mb-4">Moments I hold onto</p>
          <h2 className="bday-serif text-[clamp(2rem,5vw,3.2rem)] italic text-[color:var(--bday-ink)]">
            A Few Of Our Memories
          </h2>
        </Reveal>
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-10">
          {C.MEMORIES.map((m, i) => {
            const rot = [-6, 4, -3, 5][i % 4];
            return (
              <motion.figure
                key={i}
                initial={{ opacity: 0, y: 30, rotate: rot }}
                whileInView={{ opacity: 1, y: 0, rotate: rot }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, ease: EASE, delay: i * 0.08 }}
                whileHover={{ rotate: 0, scale: 1.04, zIndex: 5 }}
                className="bday-polaroid w-[230px] cursor-pointer"
              >
                <div className="w-full aspect-square overflow-hidden rounded-[3px] bg-[color:var(--bday-blush)]">
                  <img
                    src={m.src}
                    alt={m.caption}
                    loading="lazy"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // HEIC derivatives can 404 on the very first hit while
                      // Cloudinary generates them — retry once before giving up.
                      const img = e.currentTarget;
                      if (!img.dataset.retried) {
                        img.dataset.retried = '1';
                        const base = m.src;
                        setTimeout(() => {
                          img.src = base + (base.includes('?') ? '&' : '?') + 'r=' + Date.now();
                        }, 1800);
                      }
                    }}
                  />
                </div>
                <figcaption className="bday-script text-center text-[color:var(--bday-rose-deep)] text-2xl mt-3">
                  {m.caption}
                </figcaption>
              </motion.figure>
            );
          })}
        </div>
      </section>

      {/* ---------------- FINAL ---------------- */}
      <section className="relative px-6 py-20 md:py-28 lg:py-36 text-center overflow-hidden">
        <Reveal>
          <motion.div
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
            className="inline-flex mb-8"
          >
            <Heart size={64} strokeWidth={1.2} className="text-[color:var(--bday-rose)] fill-[color:var(--bday-blush-deep)]" />
          </motion.div>
          <h2 className="bday-serif text-[clamp(1.8rem,4.5vw,3rem)] italic text-[color:var(--bday-ink)] max-w-2xl mx-auto leading-tight">
            {C.FINAL_TITLE}
          </h2>
          <p className="bday-sans text-[15px] md:text-[16px] text-[color:var(--bday-ink-soft)] mt-6 mb-10">
            {C.FINAL_SUB}
          </p>
          <Link to={C.CONTINUE_TO} className="bday-btn">
            Continue to Faced by Cynie
            <ArrowRight size={16} strokeWidth={1.6} />
          </Link>
        </Reveal>
      </section>
    </motion.div>
  );
}

/* ============================================================ */
/*  ORCHESTRATOR                                                 */
/* ============================================================ */
export default function BirthdayExperience() {
  // ?skip=1 jumps straight to the birthday page (handy for previewing).
  const skipIntro =
    typeof window !== 'undefined' &&
    new URLSearchParams(window.location.search).get('skip') === '1';

  const [opened, setOpened] = useState(skipIntro);
  const [showButton, setShowButton] = useState(false);
  const [runConfetti, setRunConfetti] = useState(false);

  useEffect(() => {
    // Confetti only once per visit (per browser session).
    if (sessionStorage.getItem('bday_confetti') !== '1') {
      sessionStorage.setItem('bday_confetti', '1');
      setRunConfetti(true);
    }
    const t = setTimeout(() => setShowButton(true), 2000);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="bday relative overflow-x-hidden">
      {/* white → blush reveal on load */}
      {!skipIntro && (
        <motion.div
          aria-hidden
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 1.6, ease: EASE }}
          className="fixed inset-0 bg-white z-[65] pointer-events-none"
        />
      )}

      <Sparkles />
      <Petals />
      <Confetti run={runConfetti} />
      <MusicToggle />
      {opened && <BackToTop />}

      <AnimatePresence mode="wait">
        {!opened ? (
          <Intro key="intro" onOpen={() => setOpened(true)} showButton={showButton} />
        ) : (
          <BirthdayPage key="page" />
        )}
      </AnimatePresence>
    </div>
  );
}

/** True if today matches the configured birthday. */
export function isBirthdayToday(): boolean {
  const now = new Date();
  return now.getMonth() + 1 === C.BIRTHDAY.month && now.getDate() === C.BIRTHDAY.day;
}
