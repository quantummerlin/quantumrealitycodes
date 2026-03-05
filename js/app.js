/* ============================================================
   QUANTUM REALITY CODES — Complete Application Logic
   Refined: No emojis, elegant SVG icons, reverent tone
   ============================================================ */
'use strict';

/* ── SVG Icon Library ── */
const ICONS = {
  cross: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><line x1="12" y1="2" x2="12" y2="22"/><line x1="6" y1="8" x2="18" y2="8"/></svg>',
  pray: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C10 6 8 10 8 13c0 2.2 1.8 4 4 4s4-1.8 4-4c0-3-2-7-4-11z"/><path d="M8 13c-2-1-4 0-4 2s2 4 4 3"/><path d="M16 13c2-1 4 0 4 2s-2 4-4 3"/><line x1="12" y1="17" x2="12" y2="22"/><line x1="9" y1="20" x2="15" y2="20"/></svg>',
  shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
  heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>',
  scroll: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7V4a2 2 0 012-2h8.5L20 7.5V20a2 2 0 01-2 2H6a2 2 0 01-2-2v-3"/><polyline points="14 2 14 8 20 8"/><line x1="8" y1="13" x2="16" y2="13"/><line x1="8" y1="17" x2="14" y2="17"/></svg>',
  dove: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 4c-2 0-4 1-5 3-1-2-3-3-5-3C5 4 3 7 3 10c0 4 5 8 9 12 4-4 9-8 9-12 0-3-2-6-3-6z"/><path d="M12 7c0-2 1-4 3-5"/></svg>',
  leaf: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75"/></svg>',
  scales: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="3" x2="12" y2="21"/><path d="M4 7h16"/><path d="M4 7l2 8h0a3 3 0 006 0h0l-2-8"/><path d="M20 7l-2 8h0a3 3 0 01-6 0h0l2-8"/><line x1="8" y1="21" x2="16" y2="21"/></svg>',
  star: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
  light: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>',
  search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',
  bread: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="10" rx="9" ry="6"/><path d="M3 10v4c0 3.31 4.03 6 9 6s9-2.69 9-6v-4"/></svg>',
  flame: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22c4-3 7-6.5 7-10.5C19 7 15.5 2 12 2 8.5 2 5 7 5 11.5 5 15.5 8 19 12 22z"/><path d="M12 22c-1.5-1.5-3-3.5-3-6 0-2.5 1.5-5 3-7 1.5 2 3 4.5 3 7 0 2.5-1.5 4.5-3 6z"/></svg>',
  bolt: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
  hand: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 11V6a2 2 0 00-4 0v5"/><path d="M14 10V4a2 2 0 00-4 0v6"/><path d="M10 10.5V6a2 2 0 00-4 0v8"/><path d="M18 8a2 2 0 014 0v6a8 8 0 01-8 8h-2c-2.5 0-4.5-1-6.2-2.8L3 16"/></svg>',
  crown: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 20h20"/><path d="M4 16l2-12 4 5 2-6 2 6 4-5 2 12z"/></svg>',
  // Tab bar icons
  create: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>',
  howit: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
  book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>',
  music: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>',
  journal: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>',
  info: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>',
};

/* ── Helper to wrap icon in a span ── */
function icon(name, cls) {
  return `<span class="icon ${cls || ''}">${ICONS[name] || ''}</span>`;
}

/* ── Application State ── */
const state = {
  selectedCategory: null,
  currentStep: 0,
  stepData: {},
  vibrationalEncodingTotal: 0,
  generatedCode: null,
  lastIntentionText: ''
};

/* ─────────────────────────────────────────────
   NAVIGATION — Horizontal swipe with scroll-snap
   ───────────────────────────────────────────── */
const PAGE_ORDER = ['home','how','wisdom','amplify','journal','about'];

function navigate(pageName) {
  const idx = PAGE_ORDER.indexOf(pageName);
  if (idx === -1) return;
  const container = document.getElementById('pages-container');
  if (container) {
    const pageW = container.offsetWidth;
    container.scrollTo({ left: pageW * idx, behavior: 'smooth' });
  }
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-page') === pageName);
  });
  if (history.replaceState) {
    history.replaceState(null, '', pageName === 'home' ? '/' : '#' + pageName);
  }
}

/* ─────────────────────────────────────────────
   TOAST NOTIFICATIONS
   ───────────────────────────────────────────── */
function toast(message, duration) {
  duration = duration || 3000;
  const el = document.getElementById('toast');
  if (!el) return;
  el.textContent = message;
  el.classList.add('show');
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => el.classList.remove('show'), duration);
}

/* ─────────────────────────────────────────────
   HTML ESCAPING
   ───────────────────────────────────────────── */
function escapeHTML(str) {
  if (!str) return '';
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;');
}

/* ─────────────────────────────────────────────
   DAILY WISDOM
   ───────────────────────────────────────────── */
function setDailyWisdom() {
  const now = new Date();
  const dayOfYear = Math.floor((now - new Date(now.getFullYear(), 0, 0)) / 86400000);
  const verse = DAILY_VERSES[dayOfYear % DAILY_VERSES.length];
  const textEl = document.getElementById('daily-text');
  const refEl = document.getElementById('daily-ref');
  if (textEl) textEl.textContent = verse.text;
  if (refEl) refEl.textContent = '— ' + verse.ref;
}

/* ─────────────────────────────────────────────
   SHARE HELPERS
   ───────────────────────────────────────────── */
function getCategoryLabel() {
  if (state.selectedCategory && state.selectedCategory.name) {
    return state.selectedCategory.name + ' ';
  }
  return '';
}

function randomShareWisdom() {
  return SHARE_WISDOMS[Math.floor(Math.random() * SHARE_WISDOMS.length)];
}

/* ── Share wisdom quotes ── */
const SHARE_WISDOMS = [
  '"What you seek is seeking you." \u2014 Rumi',
  '"Assume the feeling of your wish fulfilled." \u2014 Neville Goddard',
  '"What my mind conceives and believes, I achieve. I conceive abundance now." \u2014 Napoleon Hill',
  '"I think in terms of energy, frequency, and vibration. I am attuned to the secrets of the Universe." \u2014 Nikola Tesla',
  '"Imagination is more important than knowledge." \u2014 Albert Einstein',
  '"The All is Mind; the Universe is Mental." \u2014 Hermetic Principle',
];

/* ─────────────────────────────────────────────
   1. DATA — Categories, Wisdoms, Daily Verses
   ───────────────────────────────────────────── */

const CATEGORIES = [
  {
    id:'core_alignment', icon:'pray', name:'Core Alignment', color:'#00D4AA',
    description:'Attune your frequency to Source and calibrate your quantum field.',
    steps:[
      { key:'gratitude', title:'Gratitude', icon:'heart',
        guidance:'Open the channel with gratitude — the highest vibration.',
        quote:{text:'I am the magnetic force of gratitude. Everything I appreciate multiplies in my life.',ref:'Abraham-Hicks'},
        placeholder:'I am deeply grateful for this moment. Appreciation flows through every cell of my being…'},
      { key:'alignment', title:'Alignment', icon:'light',
        guidance:'Bring your thoughts, emotions, and energy into coherence with Source.',
        quote:{text:'I am one with the field that governs all creation. My awareness shapes my reality.',ref:'Albert Einstein'},
        placeholder:'I align my mind, body, and spirit with Source. I am one with the unified field…'},
      { key:'intention', title:'Set Your Intention', icon:'star',
        guidance:'State your intention clearly — intention collapses the wave function.',
        quote:{text:'I persist in my assumption until it hardens into fact. What I declare, I become.',ref:'Neville Goddard'},
        placeholder:'My intention is to embody fearless confidence and magnetic presence today…'},
      { key:'release', title:'Release Resistance', icon:'flame',
        guidance:'Let go of doubt and limiting beliefs that block your alignment.',
        quote:{text:'I release every frequency that does not match my desire.',ref:'Abraham-Hicks'},
        placeholder:'I release all resistance, doubt, and fear. I trust the process of creation…'},
      { key:'surrender', title:'Surrender', icon:'dove',
        guidance:'Trust the Universe to rearrange itself to match your new frequency.',
        quote:{text:'I yield to the flow of life. I stop opposing and start allowing.',ref:'Eckhart Tolle'},
        placeholder:'I surrender to the greater intelligence of the Universe. Everything unfolds in perfect timing…'},
      { key:'closing', title:'Seal the Frequency', icon:'cross',
        guidance:'Affirm the reality of what you have declared with total certainty.',
        quote:{text:'I live in the feeling of my wish fulfilled. It is already done.',ref:'Neville Goddard'},
        placeholder:'I seal this frequency into my field. What I have declared is already done. And so it is.'}
    ]
  },
  {
    id:'energy_shield', icon:'shield', name:'Energy Shield', color:'#64B5F6',
    description:'Activate a protective shield — deflect low-frequency interference.',
    steps:[
      { key:'center', title:'Center Your Energy', icon:'pray',
        guidance:'Ground your awareness into the Earth and draw Source light through your crown.',
        quote:{text:'If you want to find the secrets of the universe, think in terms of energy, frequency and vibration.',ref:'Nikola Tesla'},
        placeholder:'I center my awareness in my core. I am grounded, anchored, and present…'},
      { key:'activate', title:'Activate the Shield', icon:'shield',
        guidance:'Visualise a sphere of impenetrable light surrounding your energy field.',
        quote:{text:'Everything I seek is already within me. I am the source of my own protection.',ref:'Rumi'},
        placeholder:'I activate my energy shield — a sphere of brilliant light surrounding my being…'},
      { key:'declare', title:'Declare Sovereignty', icon:'bolt',
        guidance:'You are the sole operator of your field — declare it with authority.',
        quote:{text:'No one can create in my experience. I alone direct my thoughts and my field.',ref:'Abraham-Hicks'},
        placeholder:'I am the sole authority over my quantum field. I am sovereign…'},
      { key:'extend', title:'Extend Protection', icon:'hand',
        guidance:'Extend your shield to cover your loved ones and sacred spaces.',
        quote:{text:'Where my attention goes, my energy flows. I direct it now with purpose.',ref:'Joe Dispenza'},
        placeholder:'I extend this shield to my family, my home, and those I hold dear…'},
      { key:'closing', title:'Seal the Shield', icon:'cross',
        guidance:'Seal it — your shield operates continuously, even while you sleep.',
        quote:{text:'My energy cannot be diminished. It can only be transformed into greater power.',ref:'Albert Einstein'},
        placeholder:'I seal this shield permanently. I am protected, sovereign, and safe. And so it is.'}
    ]
  },
  {
    id:'quantum_healing', icon:'heart', name:'Quantum Healing', color:'#66BB6A',
    description:'Direct healing frequency into body, mind, and spirit.',
    steps:[
      { key:'awareness', title:'Body Scan', icon:'light',
        guidance:'Scan your body — notice where energy is blocked or stagnant.',
        quote:{text:'My body obeys the operations of my mind. I choose healing thoughts deliberately.',ref:'James Allen'},
        placeholder:'I scan from crown to soles. I notice where energy flows and where it feels heavy…'},
      { key:'release', title:'Release Stored Trauma', icon:'flame',
        guidance:'Give your body permission to release stored pain and emotional residue.',
        quote:{text:'I close the gap between where I am and where I want to be.',ref:'Abraham-Hicks'},
        placeholder:'I give my body permission to release all stored trauma and pain. I let go now…'},
      { key:'activate', title:'Activate Healing', icon:'heart',
        guidance:'Direct Source energy as liquid light into every cell.',
        quote:{text:'I change my perception and rewrite the chemistry of my body.',ref:'Bruce Lipton'},
        placeholder:'Healing frequency flows into every cell. My DNA is restored to perfect health…'},
      { key:'declare', title:'Declare Wholeness', icon:'star',
        guidance:'Declare perfect health as a present-tense reality.',
        quote:{text:'I am changing my thoughts and my body changes with them.',ref:'Joe Dispenza'},
        placeholder:'I am whole. I am healed. Healing is my natural state…'},
      { key:'closing', title:'Seal the Healing', icon:'cross',
        guidance:'Trust your body\'s innate intelligence to continue restoring you.',
        quote:{text:'The natural healing force within me is the greatest force in getting well.',ref:'Hippocrates'},
        placeholder:'I seal this healing frequency into my field. My body heals in every moment. And so it is.'}
    ]
  },
  {
    id:'clarity_intuition', icon:'light', name:'Clarity & Intuition', color:'#CE93D8',
    description:'Sharpen intuition and access the infinite intelligence within.',
    steps:[
      { key:'still', title:'Still the Mind', icon:'dove',
        guidance:'Quiet the conscious mind — in stillness, intuition speaks clearly.',
        quote:{text:'My mind is still, and the whole universe surrenders its wisdom to me.',ref:'Lao Tzu'},
        placeholder:'I quiet my mind now. Like still water, clarity emerges…'},
      { key:'open', title:'Open the Channel', icon:'light',
        guidance:'Open the channel between your awareness and infinite intelligence.',
        quote:{text:'My intuitive mind is a sacred gift. I honour it above all else.',ref:'Albert Einstein'},
        placeholder:'I open the channel to Source. Insights flow through me without judgment…'},
      { key:'ask', title:'Ask for Clarity', icon:'star',
        guidance:'Present your question to the Universe with specificity, then listen.',
        quote:{text:'The universe conspires to bring me the clarity I seek.',ref:'Paulo Coelho'},
        placeholder:'I ask the Universe for clarity on the next step on my path. I am ready to receive…'},
      { key:'trust', title:'Trust Your Knowing', icon:'shield',
        guidance:'Honour the whispers and nudges — intuition rarely shouts.',
        quote:{text:'I follow my heart and intuition. They already know what I am meant to become.',ref:'Steve Jobs'},
        placeholder:'I trust my inner knowing completely. I follow its guidance with confidence…'},
      { key:'closing', title:'Seal the Clarity', icon:'cross',
        guidance:'Carry this heightened intuition into every decision you make.',
        quote:{text:'My intuition is the most valuable thing I possess.',ref:'Albert Einstein'},
        placeholder:'I seal this clarity into my field. I trust the intelligence within me. And so it is.'}
    ]
  },
  {
    id:'gratitude_amplification', icon:'star', name:'Gratitude Amplification', color:'#FFB74D',
    description:'Magnify your gratitude frequency to attract abundance and synchronicity.',
    steps:[
      { key:'enter', title:'Feel the Appreciation', icon:'heart',
        guidance:'Move from thinking gratitude to feeling it — a full-body vibration.',
        quote:{text:'I am grateful, and in my gratitude, fear disappears and abundance appears.',ref:'Tony Robbins'},
        placeholder:'I feel gratitude as a vibration in every cell. My heart radiates thankfulness…'},
      { key:'specific', title:'Name Your Blessings', icon:'light',
        guidance:'Be specific — specificity amplifies the frequency.',
        quote:{text:'I acknowledge the good I already have. This is the foundation for all my abundance.',ref:'Eckhart Tolle'},
        placeholder:'I am grateful for the people who love me, the strength in my body, the clarity in my mind…'},
      { key:'future', title:'Thank in Advance', icon:'star',
        guidance:'Give thanks for what is on its way — as if it has already arrived.',
        quote:{text:'I am a thankful receiver, and I bear a plentiful harvest.',ref:'William Blake'},
        placeholder:'I give thanks for what is already on its way. I feel the joy of receiving before it arrives…'},
      { key:'amplify', title:'Amplify the Signal', icon:'bolt',
        guidance:'Intensify the feeling — the stronger the signal, the faster the manifestation.',
        quote:{text:'What I think about and thank about, I bring about.',ref:'John Demartini'},
        placeholder:'I amplify this gratitude to its highest intensity. My field broadcasts thankfulness…'},
      { key:'closing', title:'Seal the Gratitude', icon:'cross',
        guidance:'Carry this vibration throughout your day — it is the master frequency.',
        quote:{text:'My gratitude is the parent of all other virtues.',ref:'Marcus Tullius Cicero'},
        placeholder:'I seal this gratitude into my field. I am a magnet for blessings. And so it is.'}
    ]
  },
  {
    id:'abundance_activation', icon:'crown', name:'Abundance Activation', color:'#FFD54F',
    description:'Activate unlimited abundance — reprogram for wealth and overflow.',
    steps:[
      { key:'acknowledge', title:'Acknowledge Infinite Supply', icon:'light',
        guidance:'The Universe is infinitely abundant — scarcity is a conditioned illusion.',
        quote:{text:'There is a supply for every demand I hold. I open myself to receive it now.',ref:'Florence Scovel Shinn'},
        placeholder:'I acknowledge the infinite abundance of the Universe. There is more than enough for me…'},
      { key:'clear', title:'Clear Scarcity Programming', icon:'flame',
        guidance:'Release inherited beliefs around lack and unworthiness.',
        quote:{text:'I think I can, and I am right. My belief in abundance makes it so.',ref:'Henry Ford'},
        placeholder:'I release all programming around scarcity and lack. I am worthy of unlimited abundance…'},
      { key:'activate', title:'Activate Abundance', icon:'crown',
        guidance:'Feel the energy of wealth and prosperity as your present reality.',
        quote:{text:'Whatever the mind can conceive and believe, it can achieve.',ref:'Napoleon Hill'},
        placeholder:'I activate the abundance code. Money flows to me easily from all sources…'},
      { key:'declare', title:'Declare Prosperity', icon:'star',
        guidance:'Speak your abundant reality with certainty — these are facts, not wishes.',
        quote:{text:'I assume the feeling of abundance fulfilled.',ref:'Neville Goddard'},
        placeholder:'I am prosperous. Opportunities flow to me with ease. I am always in the right place…'},
      { key:'closing', title:'Seal the Abundance', icon:'cross',
        guidance:'From this moment, you operate from overflow, not lack.',
        quote:{text:'I come to the fountain of life with a tank, not a sieve.',ref:'Ben Sweetland'},
        placeholder:'I seal abundance into my field permanently. Wealth is my natural state. And so it is.'}
    ]
  },
  {
    id:'energy_warfare', icon:'bolt', name:'Energy Warfare', color:'#EF5350',
    description:'Clear negative energy and reclaim your sovereign frequency.',
    steps:[
      { key:'authority', title:'Declare Authority', icon:'bolt',
        guidance:'Claim sovereign authority over your energy field with absolute certainty.',
        quote:{text:'I am the master of my fate. I am the captain of my soul.',ref:'William Ernest Henley'},
        placeholder:'I declare my authority over my energy field. I am the master of my reality…'},
      { key:'identify', title:'Identify Interference', icon:'search',
        guidance:'Name the source of interference — toxic cords, patterns, or environments.',
        quote:{text:'I make the unconscious conscious. What was hidden no longer controls me.',ref:'Carl Jung'},
        placeholder:'I identify what drains my energy. I see the patterns clearly. They no longer have power…'},
      { key:'sever', title:'Sever Toxic Cords', icon:'flame',
        guidance:'Cut all energetic cords to people, places, or situations that lower your frequency.',
        quote:{text:'I let go and I am free.',ref:'Thich Nhat Hanh'},
        placeholder:'I sever all toxic cords now. Every draining attachment is cut with Source light…'},
      { key:'transmute', title:'Transmute Negativity', icon:'star',
        guidance:'Don\'t fight darkness — transform it. What was poison becomes medicine.',
        quote:{text:'Everything is energy. I match the frequency of the reality I want.',ref:'Bashar (Darryl Anka)'},
        placeholder:'I transmute all negative energy into Source light. Fear becomes power…'},
      { key:'fortify', title:'Fortify Your Field', icon:'shield',
        guidance:'Raise your baseline vibration above the reach of interference.',
        quote:{text:'I rise to a new level of consciousness. No old problem can reach me here.',ref:'Albert Einstein'},
        placeholder:'I fortify my field with the highest frequency. I am impenetrable and sovereign…'},
      { key:'closing', title:'Victory Declaration', icon:'cross',
        guidance:'The battle is won — your frequency has already shifted.',
        quote:{text:'My wound is the place where the Light enters me.',ref:'Rumi'},
        placeholder:'The interference is cleared. My field is sovereign. Victory is mine. And so it is.'}
    ]
  },
  {
    id:'collective_intention', icon:'hand', name:'Collective Intention', color:'#AB47BC',
    description:'Set intentions for others — amplify healing and alignment for your circle.',
    steps:[
      { key:'connect', title:'Connect to the Collective', icon:'heart',
        guidance:'We are all nodes in the same quantum field — what you send out ripples through all.',
        quote:{text:'I am part of the whole. My intention ripples through all existence.',ref:'Albert Einstein'},
        placeholder:'I connect to the collective field. What I intend for others amplifies my own field…'},
      { key:'name', title:'Name Who You Hold', icon:'hand',
        guidance:'Name the people or communities you wish to send energy to — be specific.',
        quote:{text:'I lose myself in service to others, and in doing so I find my truest self.',ref:'Mahatma Gandhi'},
        placeholder:'I hold my family, my friends, and those who need support in my field now…'},
      { key:'send', title:'Send the Frequency', icon:'bolt',
        guidance:'Direct energy to those you\'ve named — quantum entanglement has no distance.',
        quote:{text:'I am connected to every being. My energy reaches them instantly.',ref:'Neil deGrasse Tyson'},
        placeholder:'I send healing, love, and clarity to each person I have named. They receive it now…'},
      { key:'protect', title:'Shield Them in Light', icon:'shield',
        guidance:'Surround your loved ones with protective Source light.',
        quote:{text:'Where there is love there is life.',ref:'Mahatma Gandhi'},
        placeholder:'I surround them in Source light. They are protected, guided, and loved…'},
      { key:'closing', title:'Seal the Intention', icon:'cross',
        guidance:'Release attachment to how it manifests — trust Source to deliver.',
        quote:{text:'I visualize and I materialize. What I see in my mind, I create in reality.',ref:'Denis Waitley'},
        placeholder:'I seal this collective intention. Source delivers in the perfect way and time. And so it is.'}
    ]
  },
  {
    id:'forgiveness_release', icon:'flame', name:'Forgiveness Release', color:'#4FC3F7',
    description:'Release resentment and free yourself from vibrational prison.',
    steps:[
      { key:'acknowledge', title:'Acknowledge the Weight', icon:'heart',
        guidance:'Honestly name what you are carrying — resentment locks you in a lower frequency.',
        quote:{text:'I refuse to drink the poison of resentment any longer. I choose my own peace.',ref:'Buddhist Proverb'},
        placeholder:'I acknowledge the resentment I carry. I bring this truth into the light of my awareness…'},
      { key:'understand', title:'Understand Forgiveness', icon:'light',
        guidance:'Forgiveness is not condoning harm — it is freeing your own energy.',
        quote:{text:'Forgiveness is not about them. It is the key that unlocks my own freedom.',ref:'Hannah Arendt'},
        placeholder:'Forgiveness is about my freedom, not their innocence. I choose to free myself now…'},
      { key:'release', title:'Release the Cord', icon:'flame',
        guidance:'Cut the energetic cord and reclaim the energy you\'ve invested in pain.',
        quote:{text:'When I let go of what I am, I become what I might be.',ref:'Lao Tzu'},
        placeholder:'I cut the cord of resentment now. The weight is dissolving. My energy is reclaimed…'},
      { key:'bless', title:'Send Light', icon:'star',
        guidance:'Send compassion to the source — not weakness, but the ultimate act of sovereignty.',
        quote:{text:'I am the violet that sheds fragrance on the heel that crushed it.',ref:'Mark Twain'},
        placeholder:'I send light to those who hurt me. Not for them — because I deserve peace…'},
      { key:'closing', title:'Declare Freedom', icon:'cross',
        guidance:'The cord is cut. The debt is dissolved. You are free.',
        quote:{text:'I let go. I forgive. It is over. I move forward now.',ref:'Steve Maraboli'},
        placeholder:'I am free. The cord is cut. I move forward in sovereignty. And so it is.'}
    ]
  },
  {
    id:'reality_declaration', icon:'cross', name:'Reality Declaration', color:'#FF7043',
    description:'Speak your desired reality into existence with conscious language.',
    steps:[
      { key:'presence', title:'Enter the Present', icon:'light',
        guidance:'Ground yourself in the now — all creation happens in this moment.',
        quote:{text:'I focus all my energy on building the new. The old falls away on its own.',ref:'Socrates (via Dan Millman)'},
        placeholder:'I am fully present. This moment is the point of all creation…'},
      { key:'vision', title:'Clarify Your Vision', icon:'star',
        guidance:'See your desired reality in vivid detail — engage all your senses.',
        quote:{text:'My imagination is the preview of my coming attractions.',ref:'Albert Einstein'},
        placeholder:'I see my desired reality clearly — thriving, abundant, purposeful, connected…'},
      { key:'declare', title:'Declare with Authority', icon:'bolt',
        guidance:'These are not wishes — they are declarations of what already is.',
        quote:{text:'My word is my wand. Every word I speak creates my reality.',ref:'Florence Scovel Shinn'},
        placeholder:'I declare: I am whole, I am powerful, I am creating the life I was born to live…'},
      { key:'embody', title:'Embody It Now', icon:'crown',
        guidance:'Step into the version of you who already lives this reality.',
        quote:{text:'I am empowered. I am free. I am unlimited. That is who I am.',ref:'Joe Dispenza'},
        placeholder:'I embody this reality now. I walk, speak, and vibrate as that person…'},
      { key:'closing', title:'Seal the Declaration', icon:'cross',
        guidance:'It is done. Walk forward knowing your reality is already manifesting.',
        quote:{text:'I begin it now. Boldness has genius, power, and magic in it.',ref:'Johann Wolfgang von Goethe'},
        placeholder:'This declaration is sealed. My reality is shifting. I walk forward in certainty. And so it is.'}
    ]
  },
  {
    id:'peace_presence', icon:'dove', name:'Peace & Presence', color:'#80CBC4',
    description:'Dissolve anxiety and return to the still point within.',
    steps:[
      { key:'breathe', title:'Breathe', icon:'pray',
        guidance:'Inhale peace, exhale tension — let the breath anchor you in the now.',
        quote:{text:'Feelings come and go like clouds. Conscious breathing is my anchor.',ref:'Thich Nhat Hanh'},
        placeholder:'I breathe in peace. I breathe out tension. My breath is my anchor…'},
      { key:'release_anxiety', title:'Release Turbulence', icon:'flame',
        guidance:'Acknowledge anxiety without becoming it — it is weather, you are the sky.',
        quote:{text:'I am the sky. My anxiety is only the weather.',ref:'Pema Chödrön'},
        placeholder:'This anxiety is not who I am. It is energy passing through. I let it dissolve…'},
      { key:'stillness', title:'Enter the Still Point', icon:'dove',
        guidance:'Drop beneath the noise into the perfectly calm center within.',
        quote:{text:'Within me there is a stillness and a sanctuary.',ref:'Hermann Hesse'},
        placeholder:'I drop into the still point within. Here there is only peace and clarity…'},
      { key:'affirm', title:'Affirm Peace', icon:'star',
        guidance:'Peace is your natural state — anxiety is the deviation, not the baseline.',
        quote:{text:'My peace comes from within. I do not seek it outside myself.',ref:'Siddhartha Gautama'},
        placeholder:'Peace is my natural state. I am returning to what I have always been…'},
      { key:'closing', title:'Carry the Stillness', icon:'cross',
        guidance:'Seal this peace into your nervous system — carry it into your day.',
        quote:{text:'I choose peace over stress. This is my greatest power.',ref:'William James'},
        placeholder:'I seal this peace into my field. Nothing disturbs my center. And so it is.'}
    ]
  },
  {
    id:'shadow_integration', icon:'scroll', name:'Shadow Integration', color:'#B39DDB',
    description:'Transform suppressed aspects into sources of authentic power.',
    steps:[
      { key:'courage', title:'Summon Courage', icon:'bolt',
        guidance:'Face what you\'ve hidden — the shadow is not your enemy, it\'s exiled power.',
        quote:{text:'I become enlightened not by imagining light, but by making my darkness conscious.',ref:'Carl Jung'},
        placeholder:'I summon the courage to face the parts of myself I have hidden or suppressed…'},
      { key:'identify', title:'Name the Shadow', icon:'search',
        guidance:'Name what you\'ve rejected — these are fragments that need integration, not elimination.',
        quote:{text:'What irritates me in others reveals what I have not yet accepted in myself.',ref:'Carl Jung'},
        placeholder:'I name my shadow: the anger, the fear, the needs I was taught to suppress…'},
      { key:'accept', title:'Accept Without Judgment', icon:'heart',
        guidance:'These were survival mechanisms — thank them for their service.',
        quote:{text:'When I accept myself just as I am, then I can change.',ref:'Carl Rogers'},
        placeholder:'I accept these aspects with compassion. They protected me when I could not…'},
      { key:'integrate', title:'Reclaim Your Power', icon:'star',
        guidance:'Welcome the shadow home — reclaim the energy spent keeping it hidden.',
        quote:{text:'I am not what happened to me. I am what I choose to become.',ref:'Carl Jung'},
        placeholder:'I welcome my shadow home. The energy I spent hiding is now reclaimed as power…'},
      { key:'closing', title:'Declare Wholeness', icon:'cross',
        guidance:'You were never broken — you were fragmented. Now you are whole.',
        quote:{text:'My task is not to seek for love, but to dissolve every barrier I built against it.',ref:'Rumi'},
        placeholder:'I am whole. I am integrated. The shadow is now my strength. And so it is.'}
    ]
  }
];

const WISDOM_DB = {
  abundance:[
    {text:"Assume the feeling of your wish fulfilled and observe the route that your attention follows.",ref:"Neville Goddard"},
    {text:"The game of life is a game of boomerangs. Our thoughts, deeds and words return to us sooner or later with astounding accuracy.",ref:"Florence Scovel Shinn"},
    {text:"Whatever the mind of man can conceive and believe, it can achieve.",ref:"Napoleon Hill"},
    {text:"Abundance is not something we acquire. It is something we tune into.",ref:"Wayne Dyer"},
    {text:"The universe operates through dynamic exchange. Giving and receiving are different aspects of the flow of energy in the universe.",ref:"Deepak Chopra"},
    {text:"What you seek is seeking you.",ref:"Rumi"},
    {text:"When you realize there is nothing lacking, the whole world belongs to you.",ref:"Lao Tzu"},
    {text:"Very little is needed to make a happy life; it is all within yourself, in your way of thinking.",ref:"Marcus Aurelius"},
    {text:"Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.",ref:"Albert Einstein"},
    {text:"My brain is only a receiver. In the Universe there is a core from which we obtain knowledge, strength and inspiration.",ref:"Nikola Tesla"},
    {text:"The abundance you desire to experience must first be an experience in your mind.",ref:"Abraham-Hicks"},
    {text:"When you change your energy, you change your life. Your personality creates your personal reality.",ref:"Joe Dispenza"},
    {text:"The moment you change your perception is the moment you rewrite the chemistry of your body.",ref:"Bruce Lipton"},
    {text:"The All is Mind; the Universe is Mental.",ref:"Hermetic Principle"},
    {text:"Dare to believe in the reality of your assumption and watch the world play its part relative to its fulfillment.",ref:"Neville Goddard"},
    {text:"Every great work, every big accomplishment, has been brought into manifestation through holding to the vision.",ref:"Florence Scovel Shinn"},
    {text:"Riches begin in the form of thought. The amount is limited only by the person in whose mind the thought is put into motion.",ref:"Napoleon Hill"},
  ],
  healing:[
    {text:"The body is a field of energy, transformation, and intelligence — not a frozen sculpture.",ref:"Deepak Chopra"},
    {text:"Your beliefs act like filters on a camera, changing how you see the world. And your biology adapts to those beliefs.",ref:"Bruce Lipton"},
    {text:"You cannot always control what goes on outside, but you can always control what goes on inside.",ref:"Wayne Dyer"},
    {text:"The wound is the place where the Light enters you.",ref:"Rumi"},
    {text:"Nothing rests; everything moves; everything vibrates.",ref:"Hermetic Principle"},
    {text:"If you want to find the secrets of the universe, think in terms of energy, frequency and vibration.",ref:"Nikola Tesla"},
    {text:"When you change the way you look at things, the things you look at change.",ref:"Max Planck"},
    {text:"The soul becomes dyed with the color of its thoughts.",ref:"Marcus Aurelius"},
    {text:"Energy cannot be created or destroyed; it can only be changed from one form to another.",ref:"Albert Einstein"},
    {text:"The natural healing force within each of us is the greatest force in getting well.",ref:"Deepak Chopra"},
    {text:"You can change your brain just by thinking differently.",ref:"Joe Dispenza"},
    {text:"We are not victims of our genes, but masters of our fates.",ref:"Bruce Lipton"},
    {text:"The body may be renewed and transformed through the spoken word and clear vision.",ref:"Florence Scovel Shinn"},
    {text:"Health is a pattern of harmony. What you feel you attract; what you imagine you become.",ref:"Neville Goddard"},
    {text:"Your body hears everything your mind says. Stay positive.",ref:"Abraham-Hicks"},
    {text:"The part can never be well unless the whole is well.",ref:"Lao Tzu"},
    {text:"Every cell in your body is eavesdropping on your thoughts.",ref:"Deepak Chopra"},
  ],
  protection:[
    {text:"No one can create in your experience, for no one can think your thoughts for you.",ref:"Abraham-Hicks"},
    {text:"You are a living magnet. What you attract into your life is in harmony with your dominant thoughts.",ref:"Napoleon Hill"},
    {text:"Nothing external to you has any power over you.",ref:"Wayne Dyer"},
    {text:"The mind is everything. What you think you become.",ref:"Florence Scovel Shinn"},
    {text:"Your imagination is your preview of life\u2019s coming attractions.",ref:"Albert Einstein"},
    {text:"Wear your ego like a loose fitting garment. It cannot protect you; only awareness can.",ref:"Deepak Chopra"},
    {text:"Knowing yourself is the beginning of all wisdom.",ref:"Lao Tzu"},
    {text:"You have power over your mind — not outside events. Realize this, and you will find strength.",ref:"Marcus Aurelius"},
    {text:"If you do not change direction, you may end up where you are heading.",ref:"Lao Tzu"},
    {text:"Be like the solid rock the waves keep crashing over. It stands unmoved and the raging of the sea falls still around it.",ref:"Marcus Aurelius"},
    {text:"Where there is no vision, the people perish. Hold your vision and let it shield you.",ref:"Florence Scovel Shinn"},
    {text:"The universe is not outside of you. Look inside yourself; everything that you want, you already are.",ref:"Rumi"},
    {text:"My body is not a thing, it is a situation: it is my grasp on the world and my sketch of my project.",ref:"Nikola Tesla"},
    {text:"Every human being is the author of his own health or disease.",ref:"Hermetic Principle"},
    {text:"You are the master of your destiny. You can influence, direct and control your own environment.",ref:"Napoleon Hill"},
    {text:"No person, place, or thing has any power over us, for we are the only thinkers in our minds.",ref:"Neville Goddard"},
    {text:"The only thing that can ever keep you from your desire is your own vibrational frequency.",ref:"Abraham-Hicks"},
  ],
  gratitude:[
    {text:"Gratitude is the magnetic force that attracts more of what you appreciate into your life.",ref:"Abraham-Hicks"},
    {text:"Acknowledging the good that you already have in your life is the foundation for all abundance.",ref:"Deepak Chopra"},
    {text:"Be thankful for what you have; you will end up having more. If you concentrate on what you don\u2019t have, you will never, ever have enough.",ref:"Wayne Dyer"},
    {text:"Gratitude is the healthiest of all human emotions. The more you express gratitude for what you have, the more likely you will have even more to express gratitude for.",ref:"Napoleon Hill"},
    {text:"Wear gratitude like a cloak, and it will feed every corner of your life.",ref:"Rumi"},
    {text:"A grateful mind is a great mind which eventually attracts to itself great things.",ref:"Florence Scovel Shinn"},
    {text:"When you are grateful, fear disappears and abundance appears.",ref:"Lao Tzu"},
    {text:"When you arise in the morning, think of what a precious privilege it is to be alive — to breathe, to think, to enjoy, to love.",ref:"Marcus Aurelius"},
    {text:"There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.",ref:"Albert Einstein"},
    {text:"If you only knew the magnificence of the 3, 6 and 9, then you would have the key to the universe.",ref:"Nikola Tesla"},
    {text:"Science cannot solve the ultimate mystery of nature because we ourselves are a part of the mystery that we are trying to solve.",ref:"Max Planck"},
    {text:"The grateful mind continually expects good things, and expectation becomes faith.",ref:"Abraham-Hicks"},
    {text:"Gratitude is the single most important ingredient to living a successful and fulfilled life.",ref:"Joe Dispenza"},
    {text:"The cells in your body react to everything that your mind says. Gratitude activates healing.",ref:"Bruce Lipton"},
    {text:"The measure of your life will not be in what you accumulate, but in what you give away.",ref:"Wayne Dyer"},
    {text:"To see a world in a grain of sand and a heaven in a wild flower, hold infinity in the palm of your hand and eternity in an hour.",ref:"Hermetic Principle"},
    {text:"Gratitude is the wine for the soul. Go on. Get drunk.",ref:"Rumi"},
  ],
  clarity:[
    {text:"An awakened imagination works with a purpose. It creates and conserves the desirable, and transforms or destroys the undesirable.",ref:"Neville Goddard"},
    {text:"Intuition is a spiritual faculty and does not explain, but simply points the way.",ref:"Florence Scovel Shinn"},
    {text:"The starting point of all achievement is desire. Keep this constantly in mind.",ref:"Napoleon Hill"},
    {text:"You will not be punished for your anger; you will be punished by your anger. Let clarity guide you.",ref:"Wayne Dyer"},
    {text:"In the midst of movement and chaos, keep stillness inside of you.",ref:"Deepak Chopra"},
    {text:"Silence is the language of the Universe; all else is poor translation.",ref:"Rumi"},
    {text:"Nature does not hurry, yet everything is accomplished.",ref:"Lao Tzu"},
    {text:"The happiness of your life depends upon the quality of your thoughts.",ref:"Marcus Aurelius"},
    {text:"The important thing is not to stop questioning. Curiosity has its own reason for existing.",ref:"Albert Einstein"},
    {text:"The day science begins to study non-physical phenomena, it will make more progress in one decade than in all the previous centuries of its existence.",ref:"Nikola Tesla"},
    {text:"All matter originates and exists only by virtue of a force. We must assume behind this force the existence of a conscious and intelligent mind.",ref:"Max Planck"},
    {text:"You are not here to fix anything, because nothing is broken. You are here to let clarity arise naturally.",ref:"Abraham-Hicks"},
    {text:"When you get clear about what you want, the universe conspires to make it happen.",ref:"Joe Dispenza"},
    {text:"Our beliefs control our bodies, our minds, and thus our lives.",ref:"Bruce Lipton"},
    {text:"As within, so without; as above, so below.",ref:"Hermetic Principle"},
    {text:"The truth was a mirror in the hands of the Universe. It fell, and broke into pieces. Everybody took a piece of it, and they looked at it and thought they had the truth.",ref:"Rumi"},
    {text:"To the mind that is still, the whole universe surrenders.",ref:"Lao Tzu"},
  ],
  peace:[
    {text:"Peace comes from within. Do not seek it without.",ref:"Lao Tzu"},
    {text:"The present moment is filled with joy and happiness. If you are attentive, you will see it.",ref:"Deepak Chopra"},
    {text:"You find peace not by rearranging the circumstances of your life, but by realizing who you are at the deepest level.",ref:"Wayne Dyer"},
    {text:"Stillness is the altar of spirit.",ref:"Deepak Chopra"},
    {text:"The mind is its own place, and in itself can make a heaven of hell, a hell of heaven.",ref:"Neville Goddard"},
    {text:"Out beyond ideas of wrongdoing and rightdoing, there is a field. I will meet you there.",ref:"Rumi"},
    {text:"Do not let the behavior of others destroy your inner peace.",ref:"Wayne Dyer"},
    {text:"The best fighter is never angry.",ref:"Lao Tzu"},
    {text:"Never be disturbed by the world. Only by your own thoughts about the world.",ref:"Marcus Aurelius"},
    {text:"In the middle of difficulty lies opportunity.",ref:"Albert Einstein"},
    {text:"Peace is the result of retraining your mind to process life as it is, rather than as you think it should be.",ref:"Wayne Dyer"},
    {text:"The quieter you become, the more you are able to hear.",ref:"Rumi"},
    {text:"Muddy water, let stand, becomes clear.",ref:"Lao Tzu"},
    {text:"Be content with what you have; rejoice in the way things are. When you realize there is nothing lacking, the whole world belongs to you.",ref:"Lao Tzu"},
    {text:"Well-being is the basis of this Universe. You can allow it or not.",ref:"Abraham-Hicks"},
    {text:"When you make peace with yourself, you make peace with the world.",ref:"Joe Dispenza"},
    {text:"Nothing can bring you peace but yourself.",ref:"Florence Scovel Shinn"},
  ],
  energy:[
    {text:"If you want to find the secrets of the universe, think in terms of energy, frequency and vibration.",ref:"Nikola Tesla"},
    {text:"Everything is energy and that is all there is to it. Match the frequency of the reality you want.",ref:"Albert Einstein"},
    {text:"Nothing rests; everything moves; everything vibrates.",ref:"Hermetic Principle"},
    {text:"All matter originates and exists only by virtue of a force which brings the particle of an atom to vibration.",ref:"Max Planck"},
    {text:"You are not a drop in the ocean. You are the entire ocean in a drop.",ref:"Rumi"},
    {text:"Each of us is a unique strand in the intricate web of life and here to contribute to the beauty of the whole.",ref:"Deepak Chopra"},
    {text:"Every living being is an engine geared to the wheelwork of the universe.",ref:"Nikola Tesla"},
    {text:"The universe is change; our life is what our thoughts make it.",ref:"Marcus Aurelius"},
    {text:"The energy of the mind is the essence of life.",ref:"Lao Tzu"},
    {text:"Concerning matter, we have been all wrong. What we have called matter is energy, whose vibration has been so lowered as to be perceptible to the senses.",ref:"Albert Einstein"},
    {text:"Your frequency is what you frequently see, hear, think, and feel.",ref:"Abraham-Hicks"},
    {text:"You are the universe expressing itself as a human for a little while.",ref:"Deepak Chopra"},
    {text:"The human body is made up of electronic vibrations. Each atom and element of the body has its electronic unit of vibration.",ref:"Nikola Tesla"},
    {text:"Change your energy and you change your life. Become the vibrational match to what you desire.",ref:"Joe Dispenza"},
    {text:"The field is the sole governing agency of the particle.",ref:"Albert Einstein"},
    {text:"Within our bodies are energy centers that correspond to our states of consciousness.",ref:"Bruce Lipton"},
    {text:"As is the human body, so is the cosmic body. As is the human mind, so is the cosmic mind.",ref:"Deepak Chopra"},
  ],
  manifestation:[
    {text:"An assumption, though false, if persisted in, will harden into fact.",ref:"Neville Goddard"},
    {text:"The law of attraction is always working whether you believe it or understand it or not.",ref:"Abraham-Hicks"},
    {text:"Ask for what you want and be prepared to get it.",ref:"Florence Scovel Shinn"},
    {text:"Your thoughts are the architects of your destiny.",ref:"Napoleon Hill"},
    {text:"You create your own universe as you go along.",ref:"Albert Einstein"},
    {text:"Whatever we plant in our subconscious mind and nourish with repetition and emotion will one day become reality.",ref:"Napoleon Hill"},
    {text:"Every intention sets energy into motion whether you are conscious of it or not.",ref:"Deepak Chopra"},
    {text:"Stop acting so small. You are the universe in ecstatic motion.",ref:"Rumi"},
    {text:"When I let go of what I am, I become what I might be.",ref:"Lao Tzu"},
    {text:"The impediment to action advances action. What stands in the way becomes the way.",ref:"Marcus Aurelius"},
    {text:"The gift of mental power comes from the Universe, Divine Being, and if we concentrate our minds on that truth, we become in tune with this great power.",ref:"Nikola Tesla"},
    {text:"Creation is finished. You are simply becoming aware of what already exists.",ref:"Neville Goddard"},
    {text:"Everything you want is out there waiting for you to ask. Everything you want also wants you.",ref:"Florence Scovel Shinn"},
    {text:"The subconscious mind makes no distinction between constructive and destructive thought impulses.",ref:"Napoleon Hill"},
    {text:"You are already that which you want to be, and your refusal to believe this is the only reason you do not see it.",ref:"Neville Goddard"},
    {text:"A belief is only a thought you continue to think. A belief is nothing more than a chronic pattern of thought.",ref:"Abraham-Hicks"},
    {text:"The mental image you hold of yourself is the blueprint that determines your entire life.",ref:"Joe Dispenza"},
  ],
  self:[
    {text:"Be yourself; everyone else is already taken.",ref:"Wayne Dyer"},
    {text:"Knowing yourself is the beginning of all wisdom.",ref:"Lao Tzu"},
    {text:"I am not what happened to me. I am what I choose to become.",ref:"Neville Goddard"},
    {text:"What lies behind us and what lies before us are tiny matters compared to what lies within us.",ref:"Florence Scovel Shinn"},
    {text:"Until you make the unconscious conscious, it will direct your life and you will call it fate.",ref:"Napoleon Hill"},
    {text:"When you judge another, you do not define them, you define yourself.",ref:"Wayne Dyer"},
    {text:"The privilege of a lifetime is to become who you truly are.",ref:"Deepak Chopra"},
    {text:"Your task is not to seek for love, but merely to seek and find all the barriers within yourself that you have built against it.",ref:"Rumi"},
    {text:"He who conquers himself is the mightiest warrior.",ref:"Lao Tzu"},
    {text:"Waste no more time arguing about what a good person should be. Be one.",ref:"Marcus Aurelius"},
    {text:"A human being is part of the whole called by us the Universe, a part limited in time and space.",ref:"Albert Einstein"},
    {text:"If you want to change the world, start with yourself.",ref:"Nikola Tesla"},
    {text:"You are the placebo. Your mind has the power to heal your body.",ref:"Joe Dispenza"},
    {text:"We are spiritual beings having a human experience, not the other way around.",ref:"Bruce Lipton"},
    {text:"Know thyself and thou shalt know the universe and the gods.",ref:"Hermetic Principle"},
    {text:"Yesterday I was clever, so I wanted to change the world. Today I am wise, so I am changing myself.",ref:"Rumi"},
    {text:"The only person you are destined to become is the person you decide to be.",ref:"Abraham-Hicks"},
  ],
  transformation:[
    {text:"Change your conception of yourself and you will automatically change the world in which you live.",ref:"Neville Goddard"},
    {text:"Every ending is a new beginning. Through the grace of transformation, every ending is also a beginning.",ref:"Deepak Chopra"},
    {text:"The only way to make sense out of change is to plunge into it, move with it, and join the dance.",ref:"Wayne Dyer"},
    {text:"The secret of change is to focus all of your energy not on fighting the old, but on building the new.",ref:"Lao Tzu"},
    {text:"And, when you want something, all the universe conspires in helping you to achieve it.",ref:"Florence Scovel Shinn"},
    {text:"You become what you think about most of the time.",ref:"Napoleon Hill"},
    {text:"Let yourself be silently drawn by the strange pull of what you really love. It will not lead you astray.",ref:"Rumi"},
    {text:"Loss is nothing else but change, and change is Nature\u2019s delight.",ref:"Marcus Aurelius"},
    {text:"We cannot solve our problems with the same thinking we used when we created them.",ref:"Albert Einstein"},
    {text:"Our virtues and our failings are inseparable, like force and matter. When they separate, man is no more.",ref:"Nikola Tesla"},
    {text:"When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one that has been opened for us.",ref:"Max Planck"},
    {text:"A belief is only a thought you keep thinking. When you change the thought, you begin to change the belief.",ref:"Abraham-Hicks"},
    {text:"To change is to think greater than how you feel.",ref:"Joe Dispenza"},
    {text:"The function of the mind is not to warehouse the past; it is to create the future.",ref:"Bruce Lipton"},
    {text:"True alchemy consists in transforming the base metals of ignorance into the gold of awareness.",ref:"Hermetic Principle"},
    {text:"Become the change you seek in the world. The outer reflects the inner.",ref:"Neville Goddard"},
    {text:"New beginnings are often disguised as painful endings.",ref:"Lao Tzu"},
  ],
  universal_law:[
    {text:"The Principle of Mentalism: The All is Mind; the Universe is Mental.",ref:"Hermetic Principle"},
    {text:"The Principle of Correspondence: As above, so below; as below, so above.",ref:"Hermetic Principle"},
    {text:"The Principle of Vibration: Nothing rests; everything moves; everything vibrates.",ref:"Hermetic Principle"},
    {text:"The Principle of Polarity: Everything is dual; everything has poles; everything has its pair of opposites.",ref:"Hermetic Principle"},
    {text:"The Principle of Rhythm: Everything flows, out and in; everything has its tides.",ref:"Hermetic Principle"},
    {text:"The Principle of Cause and Effect: Every cause has its effect; every effect has its cause.",ref:"Hermetic Principle"},
    {text:"The Principle of Gender: Gender is in everything; everything has its masculine and feminine principles.",ref:"Hermetic Principle"},
    {text:"The law of attraction is the law of creation. Quantum physicists tell us that the universe emerged from thought.",ref:"Deepak Chopra"},
    {text:"That which is like unto itself is drawn. This is the basis of the Law of Attraction.",ref:"Abraham-Hicks"},
    {text:"Every action has an equal and opposite reaction — this applies to thought as well as to physics.",ref:"Albert Einstein"},
    {text:"Thought is the original source of all wealth, all success, all material gain, all great discoveries.",ref:"Napoleon Hill"},
    {text:"The law of flotation was not discovered by contemplating the sinking of things.",ref:"Neville Goddard"},
    {text:"Man\u2019s word is his wand filled with magic and power. What you decree, you attract.",ref:"Florence Scovel Shinn"},
    {text:"The Tao that can be told is not the eternal Tao. The name that can be named is not the eternal name.",ref:"Tao Te Ching"},
    {text:"The way is not in the sky. The way is in the heart.",ref:"Lao Tzu"},
    {text:"The universe is under no obligation to make sense to you, but it does follow its own perfect laws.",ref:"Max Planck"},
    {text:"Look deep into nature, and then you will understand everything better.",ref:"Albert Einstein"},
  ],
  wisdom:[
    {text:"The only true wisdom is in knowing you know nothing.",ref:"Lao Tzu"},
    {text:"Man is not the creature of circumstances. Circumstances are the creatures of men.",ref:"Neville Goddard"},
    {text:"There is a game in the world and it may be called \u2018seeing through the game.\u2019",ref:"Florence Scovel Shinn"},
    {text:"Strength does not come from winning. Your struggles develop your strengths.",ref:"Napoleon Hill"},
    {text:"How people treat you is their karma; how you react is yours.",ref:"Wayne Dyer"},
    {text:"The highest activity a human being can attain is learning for understanding, because to understand is to be free.",ref:"Deepak Chopra"},
    {text:"The only lasting beauty is the beauty of the heart.",ref:"Rumi"},
    {text:"Mastering others is strength; mastering yourself is true power.",ref:"Lao Tzu"},
    {text:"Dwell on the beauty of life. Watch the stars, and see yourself running with them.",ref:"Marcus Aurelius"},
    {text:"A person who never made a mistake never tried anything new.",ref:"Albert Einstein"},
    {text:"Be alone, that is the secret of invention; be alone, that is when ideas are born.",ref:"Nikola Tesla"},
    {text:"An experiment is a question which science poses to Nature, and a measurement is the recording of Nature\u2019s answer.",ref:"Max Planck"},
    {text:"The greatest discovery of any generation is that a human being can alter his life by altering his attitude.",ref:"Abraham-Hicks"},
    {text:"Knowledge is learning something every day. Wisdom is letting go of something every day.",ref:"Joe Dispenza"},
    {text:"The most important question anyone can ask is: What myth am I living?",ref:"Bruce Lipton"},
    {text:"The lips of wisdom are closed, except to the ears of understanding.",ref:"Hermetic Principle"},
    {text:"A thousand-mile journey begins with a single step.",ref:"Tao Te Ching"},
  ],
};


const DAILY_VERSES = [
  {text:"Assume the feeling of your wish fulfilled.",ref:"Neville Goddard"},
  {text:"What you seek is seeking you.",ref:"Rumi"},
  {text:"Whatever the mind can conceive and believe, it can achieve.",ref:"Napoleon Hill"},
  {text:"You are not a drop in the ocean. You are the entire ocean in a drop.",ref:"Rumi"},
  {text:"The universe is change; our life is what our thoughts make it.",ref:"Marcus Aurelius"},
  {text:"Imagination is more important than knowledge.",ref:"Albert Einstein"},
  {text:"If you want to find the secrets of the universe, think in terms of energy, frequency and vibration.",ref:"Nikola Tesla"},
  {text:"Abundance is not something we acquire. It is something we tune into.",ref:"Wayne Dyer"},
  {text:"The law of attraction is always working whether you believe it or not.",ref:"Abraham-Hicks"},
  {text:"Nature does not hurry, yet everything is accomplished.",ref:"Lao Tzu"},
  {text:"The wound is the place where the Light enters you.",ref:"Rumi"},
  {text:"You have power over your mind — not outside events. Realize this, and you will find strength.",ref:"Marcus Aurelius"},
  {text:"An assumption, though false, if persisted in, will harden into fact.",ref:"Neville Goddard"},
  {text:"Every intention sets energy into motion whether you are conscious of it or not.",ref:"Deepak Chopra"},
  {text:"The game of life is a game of boomerangs. Our thoughts, deeds and words return to us sooner or later.",ref:"Florence Scovel Shinn"},
  {text:"The All is Mind; the Universe is Mental.",ref:"Hermetic Principle"},
  {text:"When you change your energy, you change your life.",ref:"Joe Dispenza"},
  {text:"We are not victims of our genes, but masters of our fates.",ref:"Bruce Lipton"},
  {text:"The only true wisdom is in knowing you know nothing.",ref:"Lao Tzu"},
  {text:"Everything is energy and that is all there is to it.",ref:"Albert Einstein"},
  {text:"Out beyond ideas of wrongdoing and rightdoing, there is a field. I will meet you there.",ref:"Rumi"},
  {text:"The happiness of your life depends upon the quality of your thoughts.",ref:"Marcus Aurelius"},
  {text:"Creation is finished. You are simply becoming aware of what already exists.",ref:"Neville Goddard"},
  {text:"Your thoughts are the architects of your destiny.",ref:"Napoleon Hill"},
  {text:"Wear gratitude like a cloak, and it will feed every corner of your life.",ref:"Rumi"},
  {text:"In the midst of movement and chaos, keep stillness inside of you.",ref:"Deepak Chopra"},
  {text:"The moment you change your perception is the moment you rewrite the chemistry of your body.",ref:"Bruce Lipton"},
  {text:"A belief is only a thought you continue to think.",ref:"Abraham-Hicks"},
  {text:"When I let go of what I am, I become what I might be.",ref:"Lao Tzu"},
  {text:"We cannot solve our problems with the same thinking we used when we created them.",ref:"Albert Einstein"},
  {text:"The quieter you become, the more you are able to hear.",ref:"Rumi"},
  {text:"Knowing yourself is the beginning of all wisdom.",ref:"Lao Tzu"},
  {text:"As above, so below; as within, so without.",ref:"Hermetic Principle"},
  {text:"The field is the sole governing agency of the particle.",ref:"Albert Einstein"},
  {text:"You are already that which you want to be, and your refusal to believe it is the only reason you do not see it.",ref:"Neville Goddard"},
  {text:"Nothing external to you has any power over you.",ref:"Wayne Dyer"},
  {text:"Every great work has been brought into manifestation through holding to the vision.",ref:"Florence Scovel Shinn"},
  {text:"Your body hears everything your mind says.",ref:"Abraham-Hicks"},
  {text:"Silence is the language of the Universe; all else is poor translation.",ref:"Rumi"},
  {text:"Be content with what you have; rejoice in the way things are.",ref:"Lao Tzu"},
  {text:"The soul becomes dyed with the color of its thoughts.",ref:"Marcus Aurelius"},
  {text:"My brain is only a receiver. In the Universe there is a core from which we obtain knowledge, strength and inspiration.",ref:"Nikola Tesla"},
  {text:"Change your conception of yourself and you will automatically change the world in which you live.",ref:"Neville Goddard"},
  {text:"The privilege of a lifetime is to become who you truly are.",ref:"Deepak Chopra"},
  {text:"Gratitude is the healthiest of all human emotions.",ref:"Napoleon Hill"},
  {text:"Let yourself be silently drawn by the strange pull of what you really love.",ref:"Rumi"},
  {text:"There is no way to happiness — happiness is the way.",ref:"Wayne Dyer"},
  {text:"All matter originates and exists only by virtue of a force.",ref:"Max Planck"},
  {text:"To change is to think greater than how you feel.",ref:"Joe Dispenza"},
  {text:"The subconscious mind makes no distinction between constructive and destructive thought impulses.",ref:"Napoleon Hill"},
  {text:"Yesterday I was clever, so I wanted to change the world. Today I am wise, so I am changing myself.",ref:"Rumi"},
  {text:"Dwell on the beauty of life. Watch the stars, and see yourself running with them.",ref:"Marcus Aurelius"},
  {text:"The day science begins to study non-physical phenomena, it will make more progress in one decade than in all previous centuries.",ref:"Nikola Tesla"},
  {text:"Stop acting so small. You are the universe in ecstatic motion.",ref:"Rumi"},
  {text:"Mastering others is strength; mastering yourself is true power.",ref:"Lao Tzu"},
  {text:"Dare to believe in the reality of your assumption and watch the world play its part.",ref:"Neville Goddard"},
  {text:"Every cell in your body is eavesdropping on your thoughts.",ref:"Deepak Chopra"},
  {text:"A person who never made a mistake never tried anything new.",ref:"Albert Einstein"},
  {text:"The impediment to action advances action. What stands in the way becomes the way.",ref:"Marcus Aurelius"},
  {text:"You create your own universe as you go along.",ref:"Albert Einstein"},
  {text:"He who conquers himself is the mightiest warrior.",ref:"Lao Tzu"},
  {text:"The greatest discovery of any generation is that a human being can alter his life by altering his attitude.",ref:"Abraham-Hicks"},
  {text:"Ask for what you want and be prepared to get it.",ref:"Florence Scovel Shinn"},
  {text:"How people treat you is their karma; how you react is yours.",ref:"Wayne Dyer"},
  {text:"The mental image you hold of yourself is the blueprint that determines your entire life.",ref:"Joe Dispenza"},
  {text:"Know thyself and thou shalt know the universe and the gods.",ref:"Hermetic Principle"},
  {text:"Be alone, that is the secret of invention; be alone, that is when ideas are born.",ref:"Nikola Tesla"},
  {text:"Peace comes from within. Do not seek it without.",ref:"Lao Tzu"},
  {text:"Your task is not to seek for love, but merely to find all the barriers within yourself that you have built against it.",ref:"Rumi"},
  {text:"If you do not change direction, you may end up where you are heading.",ref:"Lao Tzu"},
  {text:"Man is not the creature of circumstances. Circumstances are the creatures of men.",ref:"Neville Goddard"},
  {text:"Look deep into nature, and then you will understand everything better.",ref:"Albert Einstein"},
  {text:"Well-being is the basis of this Universe. You can allow it or not.",ref:"Abraham-Hicks"},
  {text:"Your frequency is what you frequently see, hear, think, and feel.",ref:"Abraham-Hicks"},
  {text:"New beginnings are often disguised as painful endings.",ref:"Lao Tzu"},
  {text:"The only lasting beauty is the beauty of the heart.",ref:"Rumi"},
  {text:"Our beliefs control our bodies, our minds, and thus our lives.",ref:"Bruce Lipton"},
  {text:"Nothing rests; everything moves; everything vibrates.",ref:"Hermetic Principle"},
  {text:"Acknowledging the good that you already have in your life is the foundation for all abundance.",ref:"Deepak Chopra"},
  {text:"The mind is everything. What you think you become.",ref:"Florence Scovel Shinn"},
  {text:"Muddy water, let stand, becomes clear.",ref:"Lao Tzu"},
  {text:"Do not let the behavior of others destroy your inner peace.",ref:"Wayne Dyer"},
  {text:"The Tao that can be told is not the eternal Tao.",ref:"Tao Te Ching"},
  {text:"Strength does not come from winning. Your struggles develop your strengths.",ref:"Napoleon Hill"},
  {text:"Loss is nothing else but change, and change is Nature\u2019s delight.",ref:"Marcus Aurelius"},
  {text:"When you arise in the morning, think of what a precious privilege it is to be alive.",ref:"Marcus Aurelius"},
  {text:"The best fighter is never angry.",ref:"Lao Tzu"},
  {text:"I am not what happened to me. I am what I choose to become.",ref:"Neville Goddard"},
  {text:"A thousand-mile journey begins with a single step.",ref:"Tao Te Ching"},
  {text:"The lips of wisdom are closed, except to the ears of understanding.",ref:"Hermetic Principle"},
  {text:"There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.",ref:"Albert Einstein"},
];

/* ─────────────────────────────────────────────
   CATEGORY SELECTION
   ───────────────────────────────────────────── */
function selectCategory(catId) {
  dismissKeyboard();
  const cat = CATEGORIES.find(c => c.id === catId);
  if (!cat) return;
  state.selectedCategory = cat;
  state.currentStep = 0;
  state.stepData = {};

  document.querySelectorAll('.cat-card').forEach(c => c.classList.remove('selected'));
  const selected = document.querySelector(`[data-cat="${catId}"]`);
  if (selected) selected.classList.add('selected');

  document.getElementById('custom-section').classList.add('hidden');
  document.getElementById('builder-section').classList.remove('hidden');
  document.getElementById('preview-section').classList.add('hidden');
  document.getElementById('code-section').classList.add('hidden');
  renderStep();
  document.getElementById('builder-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function selectCustomIntention() {
  dismissKeyboard();
  state.selectedCategory = { id:'custom', icon:'hand', name:'Custom Intention', verse:'', steps:[] };
  state.currentStep = 0;
  state.stepData = {};

  document.querySelectorAll('.cat-card').forEach(c => c.classList.remove('selected'));
  document.querySelector('[data-cat="custom"]')?.classList.add('selected');

  document.getElementById('builder-section').classList.add('hidden');
  document.getElementById('preview-section').classList.add('hidden');
  document.getElementById('code-section').classList.add('hidden');
  document.getElementById('custom-section').classList.remove('hidden');

  const input = document.getElementById('custom-input');
  const cc = document.getElementById('custom-char-count');
  if (input) input.value = '';
  if (input && cc) cc.textContent = input.value.length + ' characters';
}

/* ─────────────────────────────────────────────
   VIBRATIONAL ENCODING — Code Generation
   English Simple Gematria: A=1, B=2, ... Z=26.
   Digits add face value. Result is the raw total.
   ───────────────────────────────────────────── */
function generateCode(text) {
  let total = 0;
  const upper = text.toUpperCase();
  for (let i = 0; i < upper.length; i++) {
    const ch = upper.charCodeAt(i);
    if (ch >= 65 && ch <= 90) {       // A-Z
      total += ch - 64;              // A=1, B=2, ... Z=26
    } else if (ch >= 48 && ch <= 57) { // 0-9
      total += ch - 48;              // digit face value
    }
  }
  state.vibrationalEncodingTotal = total;
  const code = String(total);
  return code;
}

function generateCustomCode() {
  dismissKeyboard();
  const input = document.getElementById('custom-input');
  const fullIntention = input ? input.value.trim() : '';
  if (!fullIntention) { toast('Please write your intention before generating a code'); return; }

  const cat = state.selectedCategory;
  const finalCode = generateCode(fullIntention);
  state.generatedCode = finalCode;
  state.lastIntentionText = fullIntention;

  document.getElementById('code-vibrational-encoding-val').textContent = state.vibrationalEncodingTotal;
  document.getElementById('code-number').textContent = finalCode;
  document.getElementById('code-section').classList.remove('hidden');
  document.getElementById('code-section').scrollIntoView({ behavior: 'smooth', block: 'start' });

  // Draw sacred geometry based on code
  drawCodeGeometry(finalCode);

  // Scramble animation
  const codeEl = document.getElementById('code-number');
  let iterations = 0;
  const maxIterations = 30;
  const interval = setInterval(() => {
    codeEl.textContent = Array.from({length: Math.max(finalCode.length, 4)}, () =>
      Math.floor(Math.random() * 10)).join('');
    iterations++;
    if (iterations >= maxIterations) {
      clearInterval(interval);
      codeEl.textContent = finalCode;
      launchConfetti();
      incrementIntentionCount();
      updateStreak();
    }
  }, 55);

  saveIntention(cat, finalCode, fullIntention);
}

function renderStep() {
  const cat = state.selectedCategory;
  if (!cat) return;
  const step = cat.steps[state.currentStep];
  const total = cat.steps.length;
  const wrap = document.getElementById('step-content');

  const pct = ((state.currentStep + 1) / total * 100).toFixed(0);
  document.getElementById('progress-fill').style.width = pct + '%';
  document.getElementById('progress-current').textContent = `Step ${state.currentStep + 1} of ${total}`;
  document.getElementById('progress-cat').textContent = cat.name;

  wrap.innerHTML = `
    <div class="step-wrap">
      <div class="step-header">
        ${icon(step.icon, 'step-icon')}
        <span class="step-title">${step.title}</span>
      </div>
      <p class="step-guidance">${step.guidance}</p>
      <div class="wisdom">
        ${step.quote.text}
        <span class="wisdom-ref">— ${step.quote.ref}</span>
      </div>
      <div class="step-actions">
        <button class="btn btn-teal btn-sm" onclick="useExample()">${icon('hand','btn-icon')} Use Example</button>
        <button class="use-wisdom-btn" onclick="useWisdom()">${icon('scroll','btn-icon')} Add This Quote</button>
      </div>
      <textarea class="intention-input" id="step-input"
        placeholder="${step.placeholder}"
        rows="4">${state.stepData[step.key] || ''}</textarea>
      <div class="char-count" id="char-count">0 characters</div>
    </div>
  `;

  const input = document.getElementById('step-input');
  const cc = document.getElementById('char-count');
  input.addEventListener('input', () => { cc.textContent = input.value.length + ' characters'; });
  cc.textContent = input.value.length + ' characters';

  const nav = document.getElementById('step-nav');
  const isFirst = state.currentStep === 0;
  const isLast = state.currentStep === total - 1;
  nav.innerHTML = `
    <button class="btn btn-outline" ${isFirst ? 'disabled' : ''} onclick="prevStep()">Back</button>
    ${isLast
      ? `<button class="btn btn-teal" onclick="previewIntention()">Preview Intention</button>`
      : `<button class="btn btn-teal" onclick="nextStep()">Continue</button>`}
  `;
}

function saveCurrentStep() {
  const cat = state.selectedCategory;
  if (!cat) return;
  const step = cat.steps[state.currentStep];
  const input = document.getElementById('step-input');
  if (input) state.stepData[step.key] = input.value.trim();
}

function nextStep() {
  dismissKeyboard();
  saveCurrentStep();
  if (state.currentStep < state.selectedCategory.steps.length - 1) {
    state.currentStep++;
    renderStep();
    setTimeout(() => {
      dismissKeyboard();
      document.getElementById('builder-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
  }
}

function prevStep() {
  dismissKeyboard();
  saveCurrentStep();
  if (state.currentStep > 0) { state.currentStep--; renderStep(); }
}

function useWisdom() {
  const step = state.selectedCategory.steps[state.currentStep];
  const input = document.getElementById('step-input');
  if (input) {
    const prefix = input.value ? input.value + ' ' : '';
    input.value = prefix + step.quote.text;
    input.dispatchEvent(new Event('input'));
    toast('Quote added to your intention');
  }
}

function useExample() {
  const step = state.selectedCategory.steps[state.currentStep];
  const input = document.getElementById('step-input');
  if (input && step.placeholder) {
    input.value = step.placeholder;
    input.dispatchEvent(new Event('input'));
    toast('Example added — personalise it with your own words');
  }
}

/* ─────────────────────────────────────────────
   8. PREVIEW & CODE GENERATION
   ───────────────────────────────────────────── */
function previewIntention() {
  dismissKeyboard();
  saveCurrentStep();
  const cat = state.selectedCategory;
  let allFilled = true;
  for (const step of cat.steps) {
    if (!state.stepData[step.key] || !state.stepData[step.key].trim()) { allFilled = false; break; }
  }
  if (!allFilled) { toast('Please complete all sections of your intention'); return; }

  const previewEl = document.getElementById('preview-text');
  const lines = cat.steps.map(s => state.stepData[s.key].trim());
  previewEl.textContent = lines.join('\n\n');
  previewEl.setAttribute('contenteditable', 'true');
  document.getElementById('preview-section').classList.remove('hidden');
  setTimeout(() => {
    dismissKeyboard();
    document.getElementById('preview-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 50);
}

function editIntention() {
  dismissKeyboard();
  document.getElementById('preview-section').classList.add('hidden');
  document.getElementById('builder-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function generateRealityCode() {
  const cat = state.selectedCategory;
  // Read from the editable preview (user may have edited it)
  const previewEl = document.getElementById('preview-text');
  const fullIntention = previewEl.innerText.trim();
  const finalCode = generateCode(fullIntention);
  state.generatedCode = finalCode;
  state.lastIntentionText = fullIntention;

  const codeEl = document.getElementById('code-number');
  document.getElementById('code-vibrational-encoding-val').textContent = state.vibrationalEncodingTotal;
  document.getElementById('code-section').classList.remove('hidden');
  document.getElementById('code-section').scrollIntoView({ behavior: 'smooth', block: 'start' });

  // Draw sacred geometry based on code
  drawCodeGeometry(finalCode);

  // Scramble animation — random digits cycling before reveal
  let iterations = 0;
  const maxIterations = 30;
  const interval = setInterval(() => {
    codeEl.textContent = Array.from({length: Math.max(finalCode.length, 4)}, () =>
      Math.floor(Math.random() * 10)).join('');
    iterations++;
    if (iterations >= maxIterations) {
      clearInterval(interval);
      codeEl.textContent = finalCode;
      launchConfetti();
      incrementIntentionCount();
      updateStreak();
    }
  }, 55);

  saveIntention(cat, finalCode, fullIntention);
}

/* ─────────────────────────────────────────────
   9. SHARING
   ───────────────────────────────────────────── */
function buildShareMessage(opts) {
  const catLabel = getCategoryLabel();
  const code = (opts && opts.code) || state.generatedCode || '';
  const wisdom = randomShareWisdom();
  return `My ${catLabel}Reality Code: ${code}\n\n${wisdom}\n\nThis code was generated through Quantum Reality Codes — structured intentions encoded through Vibrational Encoding.\n\nMeditate on this code with me to amplify our collective intention.\n\nCreate yours at quantumrealitycodes.com\n\n#QuantumRealityCodes #RealityCode #ManifestWithMe`;
}

function copyCode() {
  if (!state.generatedCode) return;
  navigator.clipboard.writeText(state.generatedCode).then(() => toast('Reality Code copied')).catch(() => toast('Could not copy — try manually'));
}

function copyIntentionMessage() {
  if (!state.generatedCode) return;
  const msg = buildShareMessage();
  navigator.clipboard.writeText(msg).then(() => toast('Intention message copied')).catch(() => toast('Could not copy — try manually'));
}

function shareWhatsApp() {
  const msg = buildShareMessage();
  window.open('https://wa.me/?text=' + encodeURIComponent(msg), '_blank');
}

function shareFacebook() {
  window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent('https://quantumrealitycodes.com'), '_blank');
}

function shareTwitter() {
  const catLabel = getCategoryLabel();
  const msg = `My ${catLabel}Reality Code: ${state.generatedCode} — Structured intention encoded through Vibrational Encoding. Manifest with me. quantumrealitycodes.com #QuantumRealityCodes #RealityCode`;
  window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(msg), '_blank');
}

function shareTelegram() {
  const msg = buildShareMessage();
  window.open('https://t.me/share/url?url=' + encodeURIComponent('https://quantumrealitycodes.com') + '&text=' + encodeURIComponent(msg), '_blank');
}

function shareEmail() {
  const catLabel = getCategoryLabel();
  const code = state.generatedCode || '';
  const subject = encodeURIComponent(`Intend With Me — ${catLabel}Reality Code: ${code}`);
  const body = encodeURIComponent(buildShareMessage());
  window.open(`mailto:?subject=${subject}&body=${body}`);
}

function nativeShare() {
  if (!navigator.share || !state.generatedCode) return;
  const catLabel = getCategoryLabel();
  navigator.share({
    title: `My ${catLabel}Reality Code: ` + state.generatedCode,
    text: buildShareMessage(),
    url: 'https://quantumrealitycodes.com'
  }).catch(() => {});
}

/* ─────────────────────────────────────────────
   10. AUDIO PLAYER
   ───────────────────────────────────────────── */
let audioEl = null;

function initAudio() {
  audioEl = document.getElementById('freq-audio');
  if (!audioEl) return;
  audioEl.addEventListener('timeupdate', updateAudioProgress);
  audioEl.addEventListener('ended', () => {
    if (state.audioLoop) { audioEl.currentTime = 0; audioEl.play(); }
    else { stopAudio(); }
  });
}

function toggleAudio() {
  if (!audioEl) return;
  if (state.audioPlaying) stopAudio(); else playAudio();
}

function playAudio() {
  audioEl.play();
  state.audioPlaying = true;
  document.getElementById('play-icon').innerHTML = '<rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>';
  document.querySelectorAll('.wave-bar').forEach(b => b.classList.add('active'));
  timerStart = Date.now();
  timerInterval = setInterval(() => {
    const elapsed = Math.floor((Date.now() - timerStart) / 1000);
    const m = String(Math.floor(elapsed / 60)).padStart(2, '0');
    const s = String(elapsed % 60).padStart(2, '0');
    const el = document.getElementById('timer');
    if (el) el.textContent = m + ':' + s;
  }, 1000);
}

function stopAudio() {
  audioEl.pause();
  state.audioPlaying = false;
  document.getElementById('play-icon').innerHTML = '<polygon points="5,3 19,12 5,21"/>';
  document.querySelectorAll('.wave-bar').forEach(b => b.classList.remove('active'));
  clearInterval(timerInterval);
}

function toggleLoop() {
  state.audioLoop = !state.audioLoop;
  document.getElementById('loop-btn').classList.toggle('active', state.audioLoop);
  if (audioEl) audioEl.loop = state.audioLoop;
  toast(state.audioLoop ? 'Loop enabled' : 'Loop disabled');
}

function updateAudioProgress() {
  if (!audioEl || !audioEl.duration) return;
  document.getElementById('audio-fill').style.width = (audioEl.currentTime / audioEl.duration * 100) + '%';
}

function seekAudio(e) {
  if (!audioEl || !audioEl.duration) return;
  const rect = e.currentTarget.getBoundingClientRect();
  audioEl.currentTime = ((e.clientX - rect.left) / rect.width) * audioEl.duration;
}

let timerStart = 0, timerInterval = null;

/* ─────────────────────────────────────────────
   11. WISDOM LIBRARY (with Favorites)
   ───────────────────────────────────────────── */
let activeTag = 'all';
let activeAuthor = '';

/* Build a unique ID for each wisdom quote (category + index) */
function getWisdomUid(cat, index) { return cat + '-' + index; }

function getFavorites() {
  try { return JSON.parse(localStorage.getItem('wisdomFavorites') || '[]'); } catch { return []; }
}
function saveFavorites(favs) { localStorage.setItem('wisdomFavorites', JSON.stringify(favs)); }
function isFavorite(uid) { return getFavorites().includes(uid); }
function toggleFavorite(uid, event) {
  if (event) event.stopPropagation();
  let favs = getFavorites();
  if (favs.includes(uid)) favs = favs.filter(f => f !== uid);
  else favs.push(uid);
  saveFavorites(favs);
  renderWisdoms(document.getElementById('wisdom-search')?.value.trim().toLowerCase() || '');
  toast(favs.includes(uid) ? 'Added to favorites' : 'Removed from favorites');
}

function filterWisdoms(tag) {
  activeTag = tag;
  activeAuthor = '';
  document.querySelectorAll('.tag').forEach(t => t.classList.toggle('active', t.dataset.tag === tag));
  renderWisdoms();
}

function filterByAuthor(author, event) {
  if (event) event.stopPropagation();
  activeAuthor = (activeAuthor === author) ? '' : author;
  /* Clear tag highlights when filtering by author */
  if (activeAuthor) {
    activeTag = 'all';
    document.querySelectorAll('.tag').forEach(t => t.classList.toggle('active', t.dataset.tag === 'all'));
  }
  renderWisdoms();
}

function searchWisdoms() {
  renderWisdoms(document.getElementById('wisdom-search').value.trim().toLowerCase());
}

function renderWisdoms(query = '') {
  const container = document.getElementById('wisdom-list');
  if (!container) return;
  container.innerHTML = '';
  let results = [];

  if (activeTag === 'all') {
    for (const cat in WISDOM_DB) WISDOM_DB[cat].forEach((s, i) => results.push({ ...s, cat, uid: getWisdomUid(cat, i) }));
  } else if (activeTag === 'favorites') {
    const favs = getFavorites();
    for (const cat in WISDOM_DB) WISDOM_DB[cat].forEach((s, i) => {
      const uid = getWisdomUid(cat, i);
      if (favs.includes(uid)) results.push({ ...s, cat, uid });
    });
  } else if (WISDOM_DB[activeTag]) {
    results = WISDOM_DB[activeTag].map((s, i) => ({ ...s, cat: activeTag, uid: getWisdomUid(activeTag, i) }));
  }

  /* Filter by author if one is selected */
  if (activeAuthor) {
    results = results.filter(s => s.ref === activeAuthor);
  }

  if (query) {
    results = results.filter(s => s.text.toLowerCase().includes(query) || s.ref.toLowerCase().includes(query));
  }

  /* Show active author filter banner */
  if (activeAuthor) {
    const banner = document.createElement('div');
    banner.className = 'author-filter-banner';
    banner.innerHTML = `Showing quotes by <strong>${escapeHTML(activeAuthor)}</strong> <button class="author-filter-clear" onclick="filterByAuthor('${escapeHTML(activeAuthor)}', event)" aria-label="Clear author filter">&times;</button>`;
    container.appendChild(banner);
  }

  if (results.length === 0) {
    container.innerHTML += '<p class="text-center text-dim mt-2">No wisdoms found. Try another search.</p>';
    return;
  }

  results.forEach(s => {
    const fav = isFavorite(s.uid);
    const safeUid = escapeHTML(s.uid);
    const safeRef = escapeHTML(s.ref);
    const div = document.createElement('div');
    div.className = 'wisdom-card';
    div.onclick = () => { navigator.clipboard.writeText(`"${s.text}" — ${s.ref}`); toast('Wisdom copied'); };
    div.innerHTML = `
      <div class="wisdom-card-top">
        <div class="wisdom-card-text">"${escapeHTML(s.text)}"</div>
        <button class="fav-btn ${fav ? 'active' : ''}" onclick="toggleFavorite('${safeUid}', event)" aria-label="${fav ? 'Remove from favorites' : 'Add to favorites'}" title="${fav ? 'Remove from favorites' : 'Add to favorites'}">${fav ? '★' : '☆'}</button>
      </div>
      <div class="wisdom-card-ref"><a href="javascript:void(0)" class="author-link" onclick="filterByAuthor('${safeRef}', event)" title="Show all quotes by ${safeRef}">— ${safeRef}</a></div>
      <div class="wisdom-copy-hint">Tap to copy</div>
    `;
    container.appendChild(div);
  });
}

/* ─────────────────────────────────────────────
   12. INTENTION JOURNAL (localStorage)
   ───────────────────────────────────────────── */
function getJournal() {
  try { return JSON.parse(localStorage.getItem('intentionJournal') || '[]'); } catch { return []; }
}
function saveJournal(journal) { localStorage.setItem('intentionJournal', JSON.stringify(journal)); }

function saveIntention(cat, code, fullText) {
  const journal = getJournal();
  journal.unshift({
    id: Date.now(), code, category: cat.name, icon: cat.icon,
    text: fullText,
    date: new Date().toLocaleDateString('en-US', { year:'numeric', month:'short', day:'numeric' }),
    answered: false
  });
  saveJournal(journal);
}

function renderJournal() {
  const journal = getJournal();
  const container = document.getElementById('journal-list');
  if (!container) return;

  if (journal.length === 0) {
    container.innerHTML = `
      <div class="journal-empty">
        ${icon('pray','journal-empty-icon')}
        <p class="mt-1">Your intention journal is empty.</p>
        <p class="text-dim">Create your first intention to begin.</p>
        <div class="btn-center mt-2">
          <button class="btn btn-teal" onclick="navigate('home')">Create Intention</button>
        </div>
      </div>`;
    return;
  }

  container.innerHTML = journal.map((entry, i) => `
    <div class="journal-entry ${entry.answered ? 'answered' : ''}" onclick="openIntentionModal(${i})" style="cursor:pointer;">
      <div class="journal-top">
        <span class="journal-code">${icon(entry.icon || 'pray','journal-icon')} ${entry.code}</span>
        <span class="journal-date">${entry.date}</span>
      </div>
      <div class="journal-cat">${escapeHTML(entry.category)}</div>
      <div class="journal-preview">${escapeHTML(entry.text)}</div>
      ${entry.answered ? `<div class="answered-badge">${icon("cross","badge-icon")} Manifested</div>` : ''}
      <div class="journal-actions" onclick="event.stopPropagation()">
        ${!entry.answered ? `<button class="btn btn-outline" onclick="markManifested(${i})">Mark Answered</button>` : ''}
        <button class="btn btn-ghost" onclick="copyJournalCode(${i})">Copy Code</button>
        <button class="btn btn-ghost" onclick="deleteJournalEntry(${i})">Remove</button>
      </div>
    </div>
  `).join('');
}

function markManifested(idx) {
  const journal = getJournal();
  if (journal[idx]) { journal[idx].answered = true; saveJournal(journal); renderJournal(); toast('Intention marked as answered — praise the Universe'); }
}
function copyJournalCode(idx) {
  const journal = getJournal();
  if (journal[idx]) { navigator.clipboard.writeText(journal[idx].code); toast('Code copied'); }
}
function deleteJournalEntry(idx) {
  if (!confirm('Remove this intention from your journal?')) return;
  const journal = getJournal();
  journal.splice(idx, 1); saveJournal(journal); renderJournal(); updateIntentionStats(); toast('Entry removed');
}
function exportJournal() {
  const journal = getJournal();
  if (journal.length === 0) { toast('Journal is empty'); return; }
  // Export as JSON for reimportability
  const blob = new Blob([JSON.stringify(journal, null, 2)], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob); a.download = 'quantum-reality-codes-journal.json'; a.click();
  toast('Journal exported as JSON');
}
function importJournal() {
  const input = document.getElementById('journal-import-input');
  if (input) input.click();
}
function handleJournalImport(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const imported = JSON.parse(e.target.result);
      if (!Array.isArray(imported)) { toast('Invalid journal file'); return; }
      const existing = getJournal();
      const existingIds = new Set(existing.map(e => e.id));
      let added = 0;
      imported.forEach(entry => {
        if (entry.code && entry.text && !existingIds.has(entry.id)) {
          existing.push(entry);
          added++;
        }
      });
      if (added === 0) { toast('No new entries to import'); return; }
      existing.sort((a, b) => (b.id || 0) - (a.id || 0));
      saveJournal(existing);
      renderJournal();
      updateIntentionStats();
      toast(`Imported ${added} intention${added > 1 ? 's' : ''}`);
    } catch (err) {
      toast('Could not read file — ensure it is a valid JSON export');
    }
  };
  reader.readAsText(file);
  event.target.value = '';
}
function clearAllJournal() {
  const journal = getJournal();
  if (journal.length === 0) { toast('Journal is already empty'); return; }
  if (!confirm('Clear all ' + journal.length + ' entries from your intention journal? This cannot be undone.')) return;
  localStorage.removeItem('intentionJournal');
  renderJournal(); updateIntentionStats(); toast('Journal cleared');
}

/* ── Fullscreen Intention Modal ── */
function openIntentionModal(idxOrData) {
  let data;
  if (typeof idxOrData === 'number') {
    const journal = getJournal();
    data = journal[idxOrData];
  } else if (typeof idxOrData === 'object') {
    data = idxOrData;
  }
  if (!data) return;
  state.modalData = data;
  document.getElementById('modal-code').textContent = data.code;
  document.getElementById('modal-category').textContent = data.category;
  document.getElementById('modal-text').textContent = data.text;
  document.getElementById('modal-date').textContent = data.date;
  // Reset share buttons and privacy toggle each time
  const shareBtns = document.getElementById('modal-share-btns');
  if (shareBtns) shareBtns.classList.add('hidden');
  const textEl = document.getElementById('modal-text');
  const dividerEl = document.querySelector('.intention-modal-divider');
  if (textEl) textEl.classList.remove('intention-hidden');
  if (dividerEl) dividerEl.classList.remove('intention-hidden');
  const privBtn = document.getElementById('modal-privacy-toggle');
  if (privBtn) {
    privBtn.classList.remove('active');
    privBtn.querySelector('svg').style.display = '';
    const btnText = privBtn.childNodes[privBtn.childNodes.length - 1];
    if (btnText) btnText.textContent = ' Hide Intention';
  }
  const placeholder = document.getElementById('modal-hidden-placeholder');
  if (placeholder) placeholder.classList.remove('visible');
  const hint = document.getElementById('modal-hint');
  if (hint) { hint.style.opacity = '1'; setTimeout(() => { hint.style.opacity = '0'; }, 3500); }
  const modal = document.getElementById('intention-modal');
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
  const btt = document.getElementById('back-to-top');
  if (btt) btt.style.display = 'none';
}

function openScreenshotModal() {
  if (!state.generatedCode || !state.selectedCategory) return;
  openIntentionModal({
    code: state.generatedCode,
    category: state.selectedCategory.name || 'Intention',
    text: state.lastIntentionText || '',
    date: new Date().toLocaleDateString('en-US', { year:'numeric', month:'long', day:'numeric' })
  });
}

/* ── Share Card Generator ── */
let shareCardStyle = 'dark';

const CARD_THEMES = {
  dark: {
    bg1:'#0D0520', bg2:'#0A0A2E', bg3:'#0D0520',
    accent:'#00D4AA', accentGlow:'rgba(0,212,170,0.35)',
    text:'#FFFFFF', sub:'rgba(255,255,255,0.6)', brand:'#00D4AA',
    line:'rgba(0,212,170,0.4)', particle:'rgba(0,212,170,0.15)'
  },
  gold: {
    bg1:'#1A1200', bg2:'#2A1E00', bg3:'#1A1200',
    accent:'#D4AF37', accentGlow:'rgba(212,175,55,0.35)',
    text:'#F0DFA0', sub:'rgba(240,223,160,0.6)', brand:'#D4AF37',
    line:'rgba(212,175,55,0.4)', particle:'rgba(212,175,55,0.12)'
  },
  teal: {
    bg1:'#021A16', bg2:'#03302A', bg3:'#021A16',
    accent:'#00D4AA', accentGlow:'rgba(0,212,170,0.4)',
    text:'#CCFFF0', sub:'rgba(204,255,240,0.6)', brand:'#33FFD1',
    line:'rgba(0,212,170,0.5)', particle:'rgba(0,212,170,0.18)'
  },
  minimal: {
    bg1:'#FAFAFA', bg2:'#F0F0F0', bg3:'#FAFAFA',
    accent:'#222222', accentGlow:'rgba(0,0,0,0.08)',
    text:'#111111', sub:'rgba(0,0,0,0.45)', brand:'#333333',
    line:'rgba(0,0,0,0.12)', particle:'rgba(0,0,0,0.04)'
  }
};

function openShareCardModal() {
  if (!state.generatedCode) return;
  const modal = document.getElementById('share-card-modal');
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
  // Show native share button if supported
  const nativeBtn = document.getElementById('share-card-native-btn');
  if (nativeBtn && navigator.share && navigator.canShare) nativeBtn.style.display = '';
  shareCardStyle = 'dark';
  document.querySelectorAll('.style-btn').forEach(b => b.classList.toggle('active', b.dataset.style === 'dark'));
  renderShareCard();
}

function closeShareCard(e) {
  if (e && e.target !== e.currentTarget && !e.target.classList.contains('intention-modal-close')) return;
  const modal = document.getElementById('share-card-modal');
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

function setCardStyle(style) {
  shareCardStyle = style;
  document.querySelectorAll('.style-btn').forEach(b => b.classList.toggle('active', b.dataset.style === style));
  renderShareCard();
}

function renderShareCard() {
  const canvas = document.getElementById('share-card-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const W = 1080, H = 1080;
  const theme = CARD_THEMES[shareCardStyle] || CARD_THEMES.dark;
  const code = state.generatedCode || '0';
  const catName = (state.selectedCategory && state.selectedCategory.name) || 'Reality Code';

  // Background gradient
  const grad = ctx.createLinearGradient(0, 0, 0, H);
  grad.addColorStop(0, theme.bg1);
  grad.addColorStop(0.5, theme.bg2);
  grad.addColorStop(1, theme.bg3);
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, W, H);

  // Particle dots
  const rng = seedRandom(parseInt(code) || 42);
  for (let i = 0; i < 60; i++) {
    const x = rng() * W, y = rng() * H, r = rng() * 3 + 1;
    ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fillStyle = theme.particle; ctx.fill();
  }

  // Sacred geometry circle (Seed of Life hint)
  ctx.save();
  ctx.strokeStyle = theme.line;
  ctx.lineWidth = 1.5;
  ctx.globalAlpha = 0.3;
  const cx = W / 2, cy = H / 2, radius = 260;
  ctx.beginPath(); ctx.arc(cx, cy, radius, 0, Math.PI * 2); ctx.stroke();
  for (let a = 0; a < 6; a++) {
    const ax = cx + radius * Math.cos(a * Math.PI / 3);
    const ay = cy + radius * Math.sin(a * Math.PI / 3);
    ctx.beginPath(); ctx.arc(ax, ay, radius, 0, Math.PI * 2); ctx.stroke();
  }
  ctx.restore();

  // Category badge
  ctx.font = '600 28px "Cinzel", serif';
  ctx.fillStyle = theme.accent;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(catName.toUpperCase(), cx, 200);

  // Decorative line
  ctx.beginPath();
  ctx.moveTo(cx - 120, 240); ctx.lineTo(cx + 120, 240);
  ctx.strokeStyle = theme.line; ctx.lineWidth = 1; ctx.stroke();

  // Code number — large, centred
  ctx.save();
  const codeSize = code.length <= 3 ? 220 : code.length <= 5 ? 160 : 120;
  ctx.font = '900 ' + codeSize + 'px "Cinzel", serif';
  ctx.fillStyle = theme.text;
  ctx.shadowColor = theme.accentGlow;
  ctx.shadowBlur = 40;
  ctx.fillText(code, cx, cy + 20);
  ctx.shadowBlur = 60;
  ctx.fillText(code, cx, cy + 20);
  ctx.restore();

  // "Reality Code" subtitle
  ctx.font = '400 24px "Lato", sans-serif';
  ctx.fillStyle = theme.sub;
  ctx.letterSpacing = '0.15em';
  ctx.fillText('REALITY CODE', cx, cy + 100);

  // Divider
  ctx.beginPath();
  ctx.moveTo(cx - 80, H - 220); ctx.lineTo(cx + 80, H - 220);
  ctx.strokeStyle = theme.line; ctx.lineWidth = 1; ctx.stroke();

  // Brand
  ctx.font = '700 26px "Cinzel", serif';
  ctx.fillStyle = theme.brand;
  ctx.fillText('QUANTUM REALITY CODES', cx, H - 170);

  // URL
  ctx.font = '400 20px "Lato", sans-serif';
  ctx.fillStyle = theme.sub;
  ctx.fillText('quantumrealitycodes.com', cx, H - 130);

  // Tagline
  ctx.font = 'italic 20px "Lato", sans-serif';
  ctx.fillStyle = theme.sub;
  ctx.globalAlpha = 0.6;
  ctx.fillText('Meditate on this code with me', cx, H - 80);
  ctx.globalAlpha = 1;
}

function seedRandom(seed) {
  let s = seed;
  return function() {
    s = (s * 16807 + 0) % 2147483647;
    return s / 2147483647;
  };
}

function downloadShareCard() {
  const canvas = document.getElementById('share-card-canvas');
  if (!canvas) return;
  canvas.toBlob(function(blob) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'reality-code-' + (state.generatedCode || 'card') + '.png';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast('Share card downloaded');
  }, 'image/png');
}

function shareCardNative() {
  const canvas = document.getElementById('share-card-canvas');
  if (!canvas || !navigator.share) return;
  canvas.toBlob(function(blob) {
    const file = new File([blob], 'reality-code-' + (state.generatedCode || 'card') + '.png', { type: 'image/png' });
    const shareData = {
      title: 'My Reality Code: ' + (state.generatedCode || ''),
      text: 'Meditate on this code with me. Create yours at quantumrealitycodes.com #QuantumRealityCodes',
      files: [file]
    };
    if (navigator.canShare && navigator.canShare(shareData)) {
      navigator.share(shareData).catch(() => {});
    } else {
      // Fallback: share without file
      navigator.share({
        title: shareData.title,
        text: shareData.text,
        url: 'https://quantumrealitycodes.com'
      }).catch(() => {});
    }
  }, 'image/png');
}

function closeIntentionModal(e) {
  if (e && e.target !== e.currentTarget && !e.target.classList.contains('intention-modal-close')) return;
  const modal = document.getElementById('intention-modal');
  modal.classList.remove('active');
  document.body.style.overflow = '';
  const btt = document.getElementById('back-to-top');
  if (btt) btt.style.display = '';
  state.modalData = null;
}
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeIntentionModal();
});

/* ── Modal Share Actions ── */
function toggleModalShare(e) {
  if (e) e.stopPropagation();
  const btns = document.getElementById('modal-share-btns');
  if (btns) btns.classList.toggle('hidden');
}
function toggleIntentionPrivacy(e) {
  if (e) e.stopPropagation();
  const textEl = document.getElementById('modal-text');
  const dividerEl = document.querySelector('.intention-modal-divider');
  const btn = document.getElementById('modal-privacy-toggle');
  const placeholder = document.getElementById('modal-hidden-placeholder');
  if (!textEl) return;
  const isHidden = textEl.classList.toggle('intention-hidden');
  if (dividerEl) dividerEl.classList.toggle('intention-hidden', isHidden);
  if (btn) {
    btn.classList.toggle('active', isHidden);
    const btnText = btn.childNodes[btn.childNodes.length - 1];
    if (btnText) btnText.textContent = isHidden ? ' Show Intention' : ' Hide Intention';
  }
  if (placeholder) placeholder.classList.toggle('visible', isHidden);
}
function copyModalCode(e) {
  if (e) e.stopPropagation();
  if (!state.modalData) return;
  navigator.clipboard.writeText(state.modalData.code).then(() => toast('Reality Code copied')).catch(() => toast('Could not copy'));
}
function copyModalMessage(e) {
  if (e) e.stopPropagation();
  if (!state.modalData) return;
  const msg = buildShareMessage({ code: state.modalData.code });
  navigator.clipboard.writeText(msg).then(() => toast('Intention message copied')).catch(() => toast('Could not copy'));
}
function shareModalWhatsApp(e) {
  if (e) e.stopPropagation();
  if (!state.modalData) return;
  const msg = buildShareMessage({ code: state.modalData.code });
  window.open('https://wa.me/?text=' + encodeURIComponent(msg), '_blank');
}
function shareModalEmail(e) {
  if (e) e.stopPropagation();
  if (!state.modalData) return;
  const code = state.modalData.code;
  const cat = state.modalData.category || 'Intention';
  const subject = encodeURIComponent(`Intend With Me — ${cat} Code: ${code}`);
  const body = encodeURIComponent(buildShareMessage({ code }));
  window.open(`mailto:?subject=${subject}&body=${body}`);
}

/* ─────────────────────────────────────────────
   13. PARTICLE SYSTEM
   ───────────────────────────────────────────── */
function initParticles() {
  const canvas = document.getElementById('particle-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let w, h, particles = [];

  function resize() { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight; }
  resize();
  window.addEventListener('resize', resize);

  for (let i = 0; i < 50; i++) {
    particles.push({
      x: Math.random() * w, y: Math.random() * h,
      r: Math.random() * 1.6 + 0.3,
      dx: (Math.random() - 0.5) * 0.12,
      dy: -(Math.random() * 0.25 + 0.04),
      alpha: Math.random() * 0.4 + 0.08,
      pulse: Math.random() * Math.PI * 2,
    });
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);
    particles.forEach(p => {
      p.x += p.dx; p.y += p.dy; p.pulse += 0.012;
      const a = p.alpha * (0.6 + 0.4 * Math.sin(p.pulse));
      if (p.y < -10) { p.y = h + 10; p.x = Math.random() * w; }
      if (p.x < -10) p.x = w + 10;
      if (p.x > w + 10) p.x = -10;
      ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(212,175,55,${a})`; ctx.fill();
      ctx.beginPath(); ctx.arc(p.x, p.y, p.r * 3, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(212,175,55,${a * 0.12})`; ctx.fill();
    });
    requestAnimationFrame(draw);
  }
  draw();
}

/* ─────────────────────────────────────────────
   13b. CONFETTI, STREAKS, MILESTONES
   ───────────────────────────────────────────── */
function launchConfetti() {
  const canvas = document.createElement('canvas');
  canvas.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:9999';
  document.body.appendChild(canvas);
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const colors = ['#00D4AA','#33FFD1','#A8D8EA','#7B5EA7','#64D8A4','#fff'];
  const particles = Array.from({length: 100}, () => ({
    x: canvas.width / 2,
    y: canvas.height / 2,
    vx: (Math.random() - 0.5) * 14,
    vy: (Math.random() - 0.5) * 14 - 5,
    color: colors[Math.floor(Math.random() * colors.length)],
    size: Math.random() * 6 + 2,
    life: 1
  }));
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let alive = false;
    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy; p.vy += 0.15; p.life -= 0.012;
      if (p.life > 0) {
        alive = true;
        ctx.globalAlpha = p.life;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }
    });
    if (alive) requestAnimationFrame(animate);
    else canvas.remove();
  }
  animate();
}

function updateStreak() {
  const today = new Date().toDateString();
  const data = JSON.parse(localStorage.getItem('intentionStreak') || '{"count":0,"lastDate":""}');
  const lastDate = data.lastDate ? new Date(data.lastDate).toDateString() : '';
  if (lastDate === today) return data.count;
  const yesterday = new Date(); yesterday.setDate(yesterday.getDate() - 1);
  if (lastDate === yesterday.toDateString()) data.count++;
  else data.count = 1;
  data.lastDate = today;
  localStorage.setItem('intentionStreak', JSON.stringify(data));
  if (data.count > 1) toast('Intention streak: ' + data.count + ' days');
  return data.count;
}

function incrementIntentionCount() {
  let count = parseInt(localStorage.getItem('totalIntentions') || '0') + 1;
  localStorage.setItem('totalIntentions', String(count));
  const milestones = [1, 5, 10, 25, 50, 100, 250, 500];
  if (milestones.includes(count)) {
    setTimeout(() => {
      const msgs = {
        1: 'Your first reality code — share it with someone you love',
        5: '5 intentions encoded! Share your journey with others',
        10: '10 intentions — your practice is growing. Invite someone to align with you',
        25: '25 intentions! You’re building a powerful habit of faith',
        50: '50 intentions encoded — you are a quantum manifestor',
        100: '100 intentions! Your dedication is a testimony. Share it',
        250: '250 intentions — your commitment inspires. Spread the word',
        500: '500 intentions encoded. You are a pillar of practice',
      };
      toast(msgs[count] || 'Milestone: ' + count + ' intentions created', 5000);
      launchConfetti();
    }, 2000);
  }
  return count;
}

function dismissKeyboard() {
  if (document.activeElement && document.activeElement !== document.body) {
    document.activeElement.blur();
  }
}

/* ─────────────────────────────────────────────
   14. NEW INTENTION RESET
   ───────────────────────────────────────────── */
function newIntention() {
  state.selectedCategory = null; state.currentStep = 0;
  state.stepData = {}; state.generatedCode = null;
  document.querySelectorAll('.cat-card').forEach(c => c.classList.remove('selected'));
  document.getElementById('builder-section').classList.add('hidden');
  document.getElementById('preview-section').classList.add('hidden');
  document.getElementById('code-section').classList.add('hidden');
  document.getElementById('custom-section').classList.add('hidden');
  navigate('home');
}

/* ─────────────────────────────────────────────
   15. INTENTION STATS
   ───────────────────────────────────────────── */
function updateIntentionStats() {
  const intentions = parseInt(localStorage.getItem('totalIntentions') || '0');
  const streakData = JSON.parse(localStorage.getItem('intentionStreak') || '{"count":0}');
  const journal = JSON.parse(localStorage.getItem('intentionJournal') || '[]');
  const statsEl = document.getElementById('intention-stats');
  if (!statsEl) return;
  if (intentions > 0) {
    statsEl.style.display = 'block';
    document.getElementById('stat-intentions').textContent = intentions;
    document.getElementById('stat-streak').textContent = streakData.count || 0;
    document.getElementById('stat-journal').textContent = journal.length;
  }
}

/* ─────────────────────────────────────────────
   15b. MEDITATION TIMER
   ───────────────────────────────────────────── */
let meditationDuration = 300;
let meditationRemaining = 300;
let meditationInterval = null;
let meditationRunning = false;

function setMeditationTime(mins) {
  if (meditationRunning) return;
  meditationDuration = mins * 60;
  meditationRemaining = meditationDuration;
  document.querySelectorAll('.timer-preset').forEach(b => b.classList.toggle('active', parseInt(b.textContent) === mins));
  updateMeditationDisplay();
  const prog = document.getElementById('timer-progress');
  if (prog) prog.style.strokeDashoffset = '528';
}

function updateMeditationDisplay() {
  const display = document.getElementById('meditation-display');
  if (!display) return;
  const m = Math.floor(meditationRemaining / 60);
  const s = meditationRemaining % 60;
  display.textContent = m + ':' + String(s).padStart(2, '0');
}

function toggleMeditation() {
  const btn = document.getElementById('meditation-btn');
  const label = document.getElementById('meditation-label');
  if (meditationRunning) {
    clearInterval(meditationInterval);
    meditationRunning = false;
    if (btn) btn.textContent = 'Resume Meditation';
    if (label) label.textContent = 'Paused';
    return;
  }
  if (meditationRemaining <= 0) {
    meditationRemaining = meditationDuration;
    updateMeditationDisplay();
    const prog = document.getElementById('timer-progress');
    if (prog) prog.style.strokeDashoffset = '528';
  }
  meditationRunning = true;
  if (btn) btn.textContent = 'Pause';
  if (label) label.textContent = 'Meditating...';
  meditationInterval = setInterval(() => {
    meditationRemaining--;
    updateMeditationDisplay();
    const prog = document.getElementById('timer-progress');
    if (prog) {
      const pct = 1 - (meditationRemaining / meditationDuration);
      prog.style.strokeDashoffset = String(528 - (528 * pct));
    }
    if (meditationRemaining <= 0) {
      clearInterval(meditationInterval);
      meditationRunning = false;
      if (btn) btn.textContent = 'Begin Again';
      if (label) label.textContent = 'Meditation complete';
      toast('Meditation complete — carry this peace with you', 4000);
      launchConfetti();
      saveMeditationSession(meditationDuration);
    }
  }, 1000);
}

/* ─────────────────────────────────────────────
   15c. MEDITATION HISTORY
   ───────────────────────────────────────────── */
function saveMeditationSession(durationSec) {
  const sessions = JSON.parse(localStorage.getItem('qrc_meditation_history') || '[]');
  sessions.unshift({
    date: new Date().toISOString(),
    duration: durationSec,
    minutes: Math.round(durationSec / 60)
  });
  // Keep last 100 sessions
  if (sessions.length > 100) sessions.length = 100;
  localStorage.setItem('qrc_meditation_history', JSON.stringify(sessions));
  updateMeditationHistory();
}

function updateMeditationHistory() {
  const sessions = JSON.parse(localStorage.getItem('qrc_meditation_history') || '[]');
  const totalEl = document.getElementById('med-total-sessions');
  const minsEl = document.getElementById('med-total-minutes');
  const streakEl = document.getElementById('med-longest-streak');
  const listEl = document.getElementById('meditation-history-list');
  const actionsEl = document.getElementById('med-history-actions');

  if (!totalEl) return;

  const totalMinutes = sessions.reduce((s, e) => s + e.minutes, 0);
  totalEl.textContent = sessions.length;
  minsEl.textContent = totalMinutes;

  // Calculate streak
  let streak = 0, maxStreak = 0, lastDate = null;
  const daySet = new Set();
  sessions.forEach(s => {
    const d = new Date(s.date);
    daySet.add(d.toDateString());
  });
  const sorted = Array.from(daySet).sort((a, b) => new Date(b) - new Date(a));
  if (sorted.length > 0) {
    streak = 1;
    for (let i = 1; i < sorted.length; i++) {
      const diff = (new Date(sorted[i - 1]) - new Date(sorted[i])) / 86400000;
      if (Math.round(diff) === 1) { streak++; } else break;
    }
    maxStreak = streak;
  }
  streakEl.textContent = maxStreak;

  // Render last 20 sessions
  if (sessions.length === 0) {
    listEl.innerHTML = '<p style="text-align:center;opacity:0.5;font-size:0.78rem;padding:1rem 0;">Complete a meditation to start tracking</p>';
    if (actionsEl) actionsEl.style.display = 'none';
    return;
  }
  if (actionsEl) actionsEl.style.display = '';

  const recent = sessions.slice(0, 20);
  listEl.innerHTML = recent.map(s => {
    const d = new Date(s.date);
    const dateStr = d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
    const timeStr = d.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
    return `<div class="med-history-item">
      <span class="med-history-date">${dateStr} ${timeStr}</span>
      <span class="med-history-duration">${s.minutes} min</span>
    </div>`;
  }).join('');
}

function clearMeditationHistory() {
  if (!confirm('Clear all meditation history?')) return;
  localStorage.removeItem('qrc_meditation_history');
  updateMeditationHistory();
  toast('Meditation history cleared');
}

/* ─────────────────────────────────────────────
   15d. SACRED GEOMETRY CODE VISUALISATION
   ───────────────────────────────────────────── */
function drawCodeGeometry(code) {
  const canvas = document.getElementById('code-geometry-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const W = canvas.width, H = canvas.height;
  const cx = W / 2, cy = H / 2;

  ctx.clearRect(0, 0, W, H);

  // Derive parameters from code digits
  const digits = code.split('').map(Number);
  const sum = digits.reduce((a, b) => a + b, 0);
  const sides = Math.max(3, (digits[0] || 3) + 3);  // 3-12 sides
  const layers = Math.max(2, (digits[1] || 2) + 1);  // 2-10 layers
  const rotOffset = (digits[2] || 0) * 6;            // rotation degrees
  const hueShift = (digits[3] || 0) * 12;            // subtle hue variation

  let animFrame;
  let startTime = performance.now();

  function render(timestamp) {
    const elapsed = (timestamp - startTime) / 1000;
    ctx.clearRect(0, 0, W, H);

    // Slow rotation
    const globalRot = elapsed * 0.15 + (rotOffset * Math.PI / 180);

    // Outer glow
    const grd = ctx.createRadialGradient(cx, cy, 20, cx, cy, 130);
    grd.addColorStop(0, 'rgba(0,212,170,0.05)');
    grd.addColorStop(0.5, 'rgba(100,181,246,0.03)');
    grd.addColorStop(1, 'rgba(0,212,170,0)');
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, W, H);

    // Draw concentric geometry layers
    for (let layer = layers; layer >= 1; layer--) {
      const radius = 20 + (layer / layers) * 100;
      const opacity = 0.12 + (layer / layers) * 0.25;
      const pulse = 1 + Math.sin(elapsed * 0.8 + layer * 0.5) * 0.03;
      const r = radius * pulse;
      const rot = globalRot + (layer * Math.PI / sides) * 0.3;

      // Polygon
      ctx.beginPath();
      for (let i = 0; i <= sides; i++) {
        const angle = (i / sides) * Math.PI * 2 + rot;
        const x = cx + Math.cos(angle) * r;
        const y = cy + Math.sin(angle) * r;
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.closePath();

      const h = 170 + hueShift;
      ctx.strokeStyle = `hsla(${h}, 80%, 60%, ${opacity})`;
      ctx.lineWidth = 0.8;
      ctx.stroke();

      // Vertex dots
      for (let i = 0; i < sides; i++) {
        const angle = (i / sides) * Math.PI * 2 + rot;
        const x = cx + Math.cos(angle) * r;
        const y = cy + Math.sin(angle) * r;
        ctx.beginPath();
        ctx.arc(x, y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${h}, 80%, 70%, ${opacity + 0.15})`;
        ctx.fill();
      }

      // Connect to centre on innermost layers
      if (layer <= 2) {
        for (let i = 0; i < sides; i++) {
          const angle = (i / sides) * Math.PI * 2 + rot;
          ctx.beginPath();
          ctx.moveTo(cx, cy);
          ctx.lineTo(cx + Math.cos(angle) * r, cy + Math.sin(angle) * r);
          ctx.strokeStyle = `hsla(${h}, 60%, 55%, ${opacity * 0.35})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }

    // Centre pulsing dot
    const centreGlow = 4 + Math.sin(elapsed * 1.5) * 2;
    const cGrd = ctx.createRadialGradient(cx, cy, 0, cx, cy, centreGlow * 3);
    cGrd.addColorStop(0, 'rgba(0,212,170,0.6)');
    cGrd.addColorStop(0.5, 'rgba(0,212,170,0.15)');
    cGrd.addColorStop(1, 'rgba(0,212,170,0)');
    ctx.fillStyle = cGrd;
    ctx.fillRect(cx - centreGlow * 3, cy - centreGlow * 3, centreGlow * 6, centreGlow * 6);
    ctx.beginPath();
    ctx.arc(cx, cy, centreGlow, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(0,212,170,0.7)';
    ctx.fill();

    // Connecting arcs between layers (Flower of Life hint)
    if (layers >= 3) {
      const midR = 20 + (2 / layers) * 100;
      for (let i = 0; i < sides; i++) {
        const angle = (i / sides) * Math.PI * 2 + globalRot;
        const arcX = cx + Math.cos(angle) * midR * 0.5;
        const arcY = cy + Math.sin(angle) * midR * 0.5;
        ctx.beginPath();
        ctx.arc(arcX, arcY, midR * 0.35, 0, Math.PI * 2);
        ctx.strokeStyle = `hsla(${170 + hueShift}, 50%, 55%, 0.08)`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
    }

    animFrame = requestAnimationFrame(render);
  }

  // Cancel any previous geometry animation
  if (window._geoAnimFrame) cancelAnimationFrame(window._geoAnimFrame);
  animFrame = requestAnimationFrame(render);
  window._geoAnimFrame = animFrame;
}

/* ─────────────────────────────────────────────
   15e. WELCOME OVERLAY (first visit)
   ───────────────────────────────────────────── */
let welcomeStep = 0;
const WELCOME_TOTAL = 4;

function showWelcome() {
  if (localStorage.getItem('qrc_welcomed')) return;
  const overlay = document.getElementById('welcome-overlay');
  if (overlay) overlay.style.display = 'flex';
}

function advanceWelcome() {
  welcomeStep++;
  if (welcomeStep >= WELCOME_TOTAL) {
    dismissWelcome();
    return;
  }
  document.querySelectorAll('.welcome-step').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.welcome-dot').forEach(el => el.classList.remove('active'));
  const step = document.querySelector(`[data-welcome-step="${welcomeStep}"]`);
  const dot = document.querySelector(`[data-dot="${welcomeStep}"]`);
  if (step) step.classList.add('active');
  if (dot) dot.classList.add('active');
  const btn = document.getElementById('welcome-next-btn');
  if (btn && welcomeStep === WELCOME_TOTAL - 1) btn.textContent = 'Get Started';
}

function dismissWelcome() {
  localStorage.setItem('qrc_welcomed', '1');
  const overlay = document.getElementById('welcome-overlay');
  if (overlay) {
    overlay.style.opacity = '0';
    overlay.style.transition = 'opacity 0.4s ease';
    setTimeout(() => overlay.style.display = 'none', 400);
  }
}

/* ─────────────────────────────────────────────
   15f. BACK TO TOP
   ───────────────────────────────────────────── */
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  });
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ─────────────────────────────────────────────
   15g. KEYBOARD SHORTCUTS
   ───────────────────────────────────────────── */
function initKeyboardNav() {
  document.addEventListener('keydown', (e) => {
    // Don't intercept when typing in inputs/textareas
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

    // Escape closes modals/overlays
    if (e.key === 'Escape') {
      const modal = document.getElementById('intention-modal');
      if (modal && modal.classList.contains('active')) { closeIntentionModal(); return; }
      const welcome = document.getElementById('welcome-overlay');
      if (welcome && welcome.style.display === 'flex') { dismissWelcome(); return; }
    }

    // Alt+number for quick page navigation
    if (e.altKey) {
      const pages = ['home', 'how', 'wisdom', 'amplify', 'journal', 'about'];
      const idx = parseInt(e.key) - 1;
      if (idx >= 0 && idx < pages.length) {
        e.preventDefault();
        navigate(pages[idx]);
        if (pages[idx] === 'journal') renderJournal();
      }
    }
  });
}

/* ─────────────────────────────────────────────
   15h. HASH-BASED ROUTING
   ───────────────────────────────────────────── */
function initHashRouting() {
  const validPages = ['home', 'how', 'wisdom', 'amplify', 'journal', 'about', 'privacy'];
  function handleHash() {
    const hash = location.hash.replace('#', '');
    if (hash && validPages.includes(hash)) {
      navigate(hash);
      if (hash === 'journal') renderJournal();
    }
  }
  window.addEventListener('hashchange', handleHash);
  // Handle initial hash on load
  if (location.hash) handleHash();
}

/* ─────────────────────────────────────────────
   16. INIT
   ───────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  setDailyWisdom();
  initParticles();
  initAudio();
  initBackToTop();
  initKeyboardNav();
  updateIntentionStats();
  updateMeditationHistory();
  setTimeout(() => { renderWisdoms(); renderJournal(); }, 100);

  // Navigate to hash page or default to home
  const hash = location.hash.replace('#', '');
  const validPages = ['home', 'how', 'wisdom', 'amplify', 'journal', 'about', 'privacy'];
  navigate(hash && validPages.includes(hash) ? hash : 'home');
  initHashRouting();

  // First-visit welcome
  setTimeout(showWelcome, 800);

  // Init tab bar icons
  const tabIcons = {home:'create',how:'howit',wisdom:'book',amplify:'music',journal:'journal',about:'info'};
  Object.entries(tabIcons).forEach(([page,ic])=>{
    const el=document.getElementById('tab-icon-'+page);
    if(el) el.innerHTML=ICONS[ic]||'';
  });

  // Sync horizontal scroll position to tab bar
  const pc = document.getElementById('pages-container');
  if (pc) {
    let scrollTimer;
    pc.addEventListener('scroll', () => {
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        const idx = Math.round(pc.scrollLeft / pc.offsetWidth);
        const pageName = PAGE_ORDER[idx] || 'home';
        document.querySelectorAll('.tab-btn').forEach(btn => {
          btn.classList.toggle('active', btn.getAttribute('data-page') === pageName);
        });
        if (history.replaceState) {
          history.replaceState(null, '', pageName === 'home' ? '/' : '#' + pageName);
        }
      }, 100);
    });
  }

  // Show native share button on supported devices
  if (navigator.share) {
    const shareGrid = document.querySelector('.share-grid');
    if (shareGrid) {
      const nativeBtn = document.createElement('button');
      nativeBtn.className = 'share-btn';
      nativeBtn.setAttribute('aria-label', 'Share via device');
      nativeBtn.onclick = nativeShare;
      nativeBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg> Share';
      shareGrid.insertBefore(nativeBtn, shareGrid.firstChild);
    }
  }
});
