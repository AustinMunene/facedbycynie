/**
 * ============================================================
 *  TEMPORARY BIRTHDAY EXPERIENCE — configuration
 * ============================================================
 *  Everything you might want to tweak lives here.
 *  To REMOVE the whole feature after the birthday:
 *    1. delete the `src/birthday/` folder
 *    2. remove the `/birthday` route + gate from `src/App.tsx`
 *    3. (optional) remove the Cormorant/Inter <link> in index.html
 * ============================================================
 */

export const NAME = 'Baby ❤️';
export const AGE = 28;

/** Her birthday — used only by the optional auto-redirect gate. */
export const BIRTHDAY = { month: 7, day: 19 }; // TODO: set the real month/day

/**
 * When true, visiting the normal site ON her birthday redirects to the
 * surprise once per browser session. Leave false to keep the surprise on
 * the dedicated /birthday link only (safe default — won't hijack the site).
 */
export const AUTO_REDIRECT_ON_BIRTHDAY = false;

/**
 * Shows a gentle pink "birthday surprise" button on the homepage that
 * links to /birthday. Turn off after the birthday (or remove the feature).
 */
export const SHOW_HOMEPAGE_TEASER = true;

/** Where the final "Continue" button sends her. */
export const CONTINUE_TO = '/';

/* ---- Background music (opt-in) ----
   Must be a DIRECT audio file (.mp3/.m4a) — Spotify/YouTube page links
   cannot play in a web page. This is a royalty-free "Clair de Lune"
   (Debussy, CC-BY 3.0) hosted on the Internet Archive. */
export const ENABLE_MUSIC = true;
export const MUSIC_URL =
  'https://archive.org/download/jamendo-638850/01-2327359-Felted%20Classics-Clair%20de%20Lune%20_Debussy_.mp3';

/* ---- Intro overlay copy ---- */
export const INTRO_LINES = [
  'Before we talk about beauty…',
  "today we're celebrating the beautiful soul behind it.",
];

/* ---- The letter (placeholder — replace freely) ---- */
export const LETTER_PARAGRAPHS = [
  `From the day I met you, I've had the privilege of watching you grow into an even more incredible woman than I could have imagined. Every year, you become wiser, kinder, stronger, and somehow even more beautiful than the year before. It's been one of my greatest joys to witness the woman God is shaping you into.`,

  `I'm so proud of everything you've achieved. The way you pursue excellence, work hard without losing your kindness, continue growing in your career, build your business with so much passion, and keep trusting God through every season inspires me more than you know. You never stop becoming better, and that's one of the countless things I admire about you.`,

  `Thank you for loving me so well, for believing in me even when I struggle to believe in myself, for praying with me, encouraging me, laughing with me, and making life brighter simply because you're in it. My prayer is that your 28th year is filled with God's favor, joy, peace, unforgettable memories, and dreams becoming reality. I'll be right beside you, cheering you on every step of the way, because there's no one else I'd rather celebrate than you. Happy Birthday, Baby. ❤️`,
];
export const SIGNATURE = 'Babe';

/* ---- 28 Things I Love About You (replace each line) ---- */
export const THINGS_I_LOVE: string[] = Array.from({ length: AGE }, (_, i) => {
  const seeds = [
    'The way your sing in such a beautiful voice😂',
    'How gentle you are with everyone.',
    'How adorable you look while you are sleeping because you are almost always asleep😂',
    'The little hum you do when you concentrate.',
    'How you make everyone feel like the main character.',
    'Your courage to chase a dream intentionally.',
    'The way you say my name : Savius.',
    'How you turn my bad days into soft ones.',
    'Your endless curiosity about God.',
    'The kindness you show everyone.',
    'How hard you work when no one is watching.',
    'Your unshakeable sense of style.',
    'The way you light up talking about us.',
    'How heard you make me feel.',
    'Your honesty, even when it is hard.',
    'The way you during events at your work place. Specifically Jubilee.',
    'How you remember the tiny things and choose not to remember the day I proposed to you😩😂.',
    'Your generous, open heart.',
    'The comfort of your presence.',
    'How you believe in me.',
    'Your quiet strength.',
    'The way you forgive.',
    'How you find beauty everywhere.',
    'Your patience with the world.',
    'The softness behind your fierceness.',
    'How you love with your whole self.',
    'The future I see in your eyes.',
    'Simply, that you are you.',
  ];
  return seeds[i] ?? 'Something I adore about you.';
});

/* ---- Prayer section ---- */
export const PRAYER_TITLE = `My Prayer For Your ${AGE}th Year`;
export const PRAYER_TEXT = `My prayer for you this year is that you would experience God's goodness in ways that leave no room for doubt. May He surround you with His grace, favor, and protection every single day. May He shield you from every plan of the enemy and order your steps according to His perfect will.

I pray that you successfully enroll in your Master's degree and that every opportunity you pursue aligns with His purpose for your life. May He grant you wisdom, discipline, and clarity as you prepare for your upcoming CFA exams, and may you excel beyond your own expectations.

I pray that the car you've been faithfully praying for becomes a testimony of God's provision, that your work continues to recognize and reward your excellence, and that FacedByCynie flourishes with a steady stream of wonderful clients who value your gift and trust your hands.

May your heart always find peace, your health remain strong, your joy never run dry, and your faith continue to deepen with every season. May every dream God has placed within you find its perfect time and fulfillment.

And selfishly... I pray that when the day finally comes and I get down on one knee, your answer will be a joyful "yes." ❤️😂

Above all, may you never lose sight of who you are, a daughter deeply loved by God, wonderfully gifted, beautifully created, and capable of far more than you can imagine.

Happy 28th, my love. May this be your most beautiful year yet.`;

/* ---- Memories (edit captions freely) ----
   f_auto,q_auto lets Cloudinary transcode the .heic files so they
   display in every browser (not just Safari). */
export const MEMORIES: { src: string; caption: string }[] = [
  { src: 'https://res.cloudinary.com/dogeweg3r/image/upload/f_auto,q_auto,w_700/v1784412329/IMG_5706_wrhjh7.heic', caption: 'us' },
  { src: 'https://res.cloudinary.com/dogeweg3r/image/upload/f_auto,q_auto,w_700/v1784412329/IMG_5759_rjfxiw.jpg', caption: 'my favourite person' },
  { src: 'https://res.cloudinary.com/dogeweg3r/image/upload/f_auto,q_auto,w_700/v1784412328/IMG_5738_nco8rc.heic', caption: 'always you' },
];

/* ---- Final section ---- */
export const FINAL_TITLE = "I am definitely not done surprising you yet...";
export const FINAL_SUB = "There's still more little surprises that'll be coming your way Baby ❤️";
