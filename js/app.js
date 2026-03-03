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
   NAVIGATION
   ───────────────────────────────────────────── */
function navigate(pageName) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const target = document.getElementById('page-' + pageName);
  if (target) target.classList.add('active');

  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-page') === pageName);
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });

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
  '"Whatever the mind can conceive and believe, it can achieve." \u2014 Napoleon Hill',
  '"If you want to find the secrets of the universe, think in terms of energy, frequency and vibration." \u2014 Nikola Tesla',
  '"Imagination is more important than knowledge." \u2014 Albert Einstein',
  '"The All is Mind; the Universe is Mental." \u2014 Hermetic Principle',
];

/* ─────────────────────────────────────────────
   1. DATA — Categories, Wisdoms, Daily Verses
   ───────────────────────────────────────────── */

const CATEGORIES = [
  {
    id:'core_alignment', icon:'pray', name:'Core Alignment', color:'#00D4AA',
    description:'The foundational alignment practice — attune your frequency to Source energy and calibrate your quantum field.',
    steps:[
      { key:'gratitude', title:'Gratitude — Open the Channel', icon:'heart',
        guidance:'Begin by entering a state of deep gratitude. Gratitude is the highest vibrational frequency and opens the channel between you and Source.',
        quote:{text:'Gratitude is the magnetic force that attracts more of what you appreciate into your life.',ref:'Abraham-Hicks'},
        placeholder:'I am deeply grateful for this moment of alignment. I feel appreciation flowing through every cell of my being. I am thankful for the breath in my lungs, the energy in my field, the infinite potential before me…'},
      { key:'alignment', title:'Alignment — Attune to Source', icon:'light',
        guidance:'Bring your thoughts, emotions, and energy into coherence with Source. Feel yourself becoming one with the unified field of infinite intelligence.',
        quote:{text:'The field is the sole governing agency of the particle.',ref:'Albert Einstein'},
        placeholder:'I align my mind, body, and spirit with the infinite intelligence of Source. I attune my frequency to the quantum field where all possibilities exist. I am one with the unified field…'},
      { key:'intention', title:'Intention — Set Your Frequency', icon:'star',
        guidance:'Clearly state your intention for this session. Intention collapses the wave function and begins the process of manifestation.',
        quote:{text:'An assumption, though false, if persisted in, will harden into fact.',ref:'Neville Goddard'},
        placeholder:'My intention today is [your specific intention]. I set this frequency clearly and deliberately. I feel this reality as already present in my field…'},
      { key:'release', title:'Release — Let Go of Resistance', icon:'flame',
        guidance:'Release any resistance, doubt, or limiting beliefs that block your alignment. Resistance is the only barrier between you and your desired reality.',
        quote:{text:'The only thing that can ever keep you from your desire is your own vibrational frequency.',ref:'Abraham-Hicks'},
        placeholder:'I release all resistance, all doubt, all fear. I let go of the need to control the how or the when. I surrender my attachment to outcomes and trust the process of creation…'},
      { key:'surrender', title:'Surrender — Trust the Process', icon:'dove',
        guidance:'Surrender completely to the intelligence of Source. Trust that the Universe is rearranging itself to match your new frequency.',
        quote:{text:'Surrender is the simple but profound wisdom of yielding to rather than opposing the flow of life.',ref:'Eckhart Tolle'},
        placeholder:'I surrender my will to the greater intelligence of the Universe. I trust that everything is unfolding in perfect divine timing. I allow Source to move through me and orchestrate the details…'},
      { key:'closing', title:'Closing — Seal the Frequency', icon:'cross',
        guidance:'Seal your alignment session by affirming the reality of what you have declared. Feel the certainty in every fiber of your being.',
        quote:{text:'Live in the feeling of the wish fulfilled.',ref:'Neville Goddard'},
        placeholder:'I seal this frequency into my quantum field. What I have declared is already done in the realm of infinite possibility. I carry this vibration with me into every moment. And so it is.'}
    ]
  },
  {
    id:'energy_shield', icon:'shield', name:'Energy Shield', color:'#64B5F6',
    description:'Activate an energetic shield of protection around your field — deflect low-frequency interference and maintain your vibration.',
    steps:[
      { key:'center', title:'Center Your Energy', icon:'pray',
        guidance:'Begin by centering your awareness in your core. Ground your energy into the Earth and draw Source light down through your crown.',
        quote:{text:'If you want to find the secrets of the universe, think in terms of energy, frequency and vibration.',ref:'Nikola Tesla'},
        placeholder:'I center my awareness in the core of my being. I ground my energy deep into the Earth and draw pure Source light down through my crown. I am anchored and present…'},
      { key:'activate', title:'Activate the Shield', icon:'shield',
        guidance:'Visualize a sphere of brilliant, impenetrable light surrounding your entire energy field. This shield operates at a frequency that only allows love and truth to pass through.',
        quote:{text:'The universe is not outside of you. Look inside yourself; everything that you want, you already are.',ref:'Rumi'},
        placeholder:'I now activate my energy shield. I visualize a sphere of brilliant light surrounding my entire being. This shield vibrates at the frequency of unconditional love and only allows energies aligned with my highest good to enter…'},
      { key:'declare', title:'Declare Your Sovereignty', icon:'bolt',
        guidance:'Declare your energetic sovereignty with authority. You are the sole operator of your field. No external energy may override your frequency without your consent.',
        quote:{text:'No one can create in your experience, for no one can control where you direct your thoughts.',ref:'Abraham-Hicks'},
        placeholder:'I declare my energetic sovereignty. I am the sole authority over my quantum field. No low-frequency energy, no negative projection, no external interference may penetrate this shield. I am sovereign…'},
      { key:'extend', title:'Extend Protection', icon:'hand',
        guidance:'Extend your protective shield to encompass those you love — your family, your home, your sacred spaces.',
        quote:{text:'Where attention goes, energy flows.',ref:'Joe Dispenza'},
        placeholder:'I extend this shield of protection to those I hold dear. I surround my family, my home, and my sacred spaces with this same impenetrable light. They are safe, they are held, they are shielded…'},
      { key:'closing', title:'Seal the Shield', icon:'cross',
        guidance:'Seal your energy shield with a final declaration. Know that it operates continuously, maintaining your vibration even while you sleep.',
        quote:{text:'Energy cannot be created or destroyed, it can only be changed from one form to another.',ref:'Albert Einstein'},
        placeholder:'I seal this energy shield into my field permanently. It operates at all times, in all places, through all dimensions. I am protected, I am sovereign, I am safe. And so it is.'}
    ]
  },
  {
    id:'quantum_healing', icon:'heart', name:'Quantum Healing', color:'#66BB6A',
    description:'Direct healing frequency into your body, mind, and spirit — activate cellular regeneration and restore energetic wholeness.',
    steps:[
      { key:'awareness', title:'Body Awareness — Scan Your Field', icon:'light',
        guidance:'Begin by scanning your entire body with your awareness. Notice where energy is blocked, stagnant, or out of alignment. Your body is an intelligent system that communicates through sensation.',
        quote:{text:'The body is the servant of the mind. It obeys the operations of the mind, whether they be deliberately chosen or automatically expressed.',ref:'James Allen'},
        placeholder:'I bring my full awareness to my body now. I scan from the crown of my head to the soles of my feet. I notice where energy flows freely and where it feels blocked or heavy…'},
      { key:'release', title:'Release — Clear Stored Trauma', icon:'flame',
        guidance:'Release any stored trauma, pain, or emotional residue from your cells. Your body stores the memories of every experience. Give it permission to let go of what no longer serves.',
        quote:{text:'The emotion you feel is always about the vibrational variance between where you want to be and where you are.',ref:'Abraham-Hicks'},
        placeholder:'I give my body permission to release all stored trauma, pain, and energetic residue. Every cell is free to let go of what no longer serves my healing. I release it now — from my tissues, my organs, my DNA…'},
      { key:'activate', title:'Activate Healing Frequency', icon:'heart',
        guidance:'Direct pure healing frequency into every area that needs restoration. Visualize Source energy as liquid light flowing into every cell, rewriting the code of your biology.',
        quote:{text:'The moment you change your perception is the moment you rewrite the chemistry of your body.',ref:'Bruce Lipton'},
        placeholder:'I activate the healing frequency of Source within me now. Liquid light flows into every cell, every organ, every system. My DNA is being restored to its original blueprint of perfect health…'},
      { key:'declare', title:'Declare Wholeness', icon:'star',
        guidance:'Declare your wholeness and perfect health as a present-tense reality. In the quantum field, your healed self already exists. Collapse the wave function into that timeline.',
        quote:{text:'Your body is merely a reflection of your thoughts and beliefs. Change your thoughts, change your body.',ref:'Joe Dispenza'},
        placeholder:'I am whole. I am healed. I am vibrating at the frequency of perfect health. Every cell in my body knows its purpose and fulfills it with precision. Healing is my natural state…'},
      { key:'closing', title:'Seal the Healing Code', icon:'cross',
        guidance:'Seal this healing frequency into your field. Trust that your body\'s innate intelligence will continue the work of restoration around the clock.',
        quote:{text:'The natural healing force within each of us is the greatest force in getting well.',ref:'Hippocrates'},
        placeholder:'I seal this healing frequency into my quantum field. My body continues to heal, regenerate, and restore itself in every moment. I trust the intelligence within me. And so it is.'}
    ]
  },
  {
    id:'clarity_intuition', icon:'light', name:'Clarity & Intuition', color:'#CE93D8',
    description:'Activate your inner knowing — sharpen intuition, dissolve confusion, and access the infinite intelligence within.',
    steps:[
      { key:'still', title:'Still the Mind', icon:'dove',
        guidance:'Begin by quieting the noise of the conscious mind. In stillness, the voice of intuition becomes clear. Let your thoughts settle like sediment in still water.',
        quote:{text:'To the mind that is still, the whole universe surrenders.',ref:'Lao Tzu'},
        placeholder:'I quiet my conscious mind now. I release the noise, the chatter, the overthinking. Like still water, my mind becomes clear and transparent. In this stillness, I can hear my inner truth…'},
      { key:'open', title:'Open the Channel', icon:'light',
        guidance:'Open the channel between your conscious awareness and infinite intelligence. Your higher self has access to information beyond the limits of your five senses.',
        quote:{text:'The intuitive mind is a sacred gift and the rational mind is a faithful servant. We have created a society that honors the servant and has forgotten the gift.',ref:'Albert Einstein'},
        placeholder:'I open the channel between my conscious mind and infinite intelligence. I allow insights, visions, and knowing to flow through me without judgment. My intuition is a direct line to Source…'},
      { key:'ask', title:'Ask for Clarity', icon:'star',
        guidance:'Present your question or situation to the Universe with specificity. The clearer your question, the clearer the answer. Ask and then listen — do not force the response.',
        quote:{text:'When you want something, all the universe conspires in helping you to achieve it.',ref:'Paulo Coelho'},
        placeholder:'I ask the Universe for clarity regarding [your specific question]. I present this openly and trust that the answer is already making its way to me. I am ready to receive…'},
      { key:'trust', title:'Trust Your Inner Knowing', icon:'shield',
        guidance:'Trust the impressions, feelings, and subtle nudges that arise. Intuition rarely shouts — it whispers. Honor the first impulse before the rational mind edits it.',
        quote:{text:'Have the courage to follow your heart and intuition. They somehow already know what you truly want to become.',ref:'Steve Jobs'},
        placeholder:'I trust my inner knowing completely. I honour the whispers, the nudges, the subtle feelings that arise. My intuition is accurate and reliable. I follow its guidance with confidence…'},
      { key:'closing', title:'Seal the Clarity', icon:'cross',
        guidance:'Seal this clarity into your awareness. Carry this heightened intuition into every decision, every conversation, every choice.',
        quote:{text:'The only real valuable thing is intuition.',ref:'Albert Einstein'},
        placeholder:'I seal this clarity into my field. My intuition remains sharp and active in every moment. I trust the intelligence within me to guide my path. And so it is.'}
    ]
  },
  {
    id:'gratitude_amplification', icon:'star', name:'Gratitude Amplification', color:'#FFB74D',
    description:'Magnify your gratitude frequency to attract more abundance, joy, and synchronicity into your reality.',
    steps:[
      { key:'enter', title:'Enter the Frequency of Appreciation', icon:'heart',
        guidance:'Begin by feeling — not just thinking — deep appreciation. Move from your head to your heart. Let gratitude become a full-body vibration.',
        quote:{text:'When you are grateful, fear disappears and abundance appears.',ref:'Tony Robbins'},
        placeholder:'I enter the frequency of deep appreciation now. I feel gratitude not just as a thought but as a vibration in every cell. My heart is open and radiating thankfulness…'},
      { key:'specific', title:'Name Your Blessings', icon:'light',
        guidance:'Be specific. Name the people, experiences, and synchronicities you are grateful for. Specificity amplifies the frequency.',
        quote:{text:'Acknowledging the good that you already have in your life is the foundation for all abundance.',ref:'Eckhart Tolle'},
        placeholder:'I am grateful for [specific blessings]. I give thanks for the people who enrich my life, the opportunities that flow to me, the synchronicities that guide my path…'},
      { key:'future', title:'Gratitude for What Is Coming', icon:'star',
        guidance:'Give thanks for what is on its way to you — as if it has already arrived. This is the quantum leap: thanking the Universe in advance collapses future possibilities into present reality.',
        quote:{text:'The thankful receiver bears a plentiful harvest.',ref:'William Blake'},
        placeholder:'I give thanks for what is already on its way to me. I am grateful for the abundance flowing into my life right now. I feel the joy of receiving before it arrives. It is already done…'},
      { key:'amplify', title:'Amplify the Signal', icon:'bolt',
        guidance:'Intensify the feeling. Let gratitude overflow from your heart into your entire energy field. The stronger the signal, the faster the manifestation.',
        quote:{text:'Whatever you think about and thank about, you bring about.',ref:'John Demartini'},
        placeholder:'I amplify this gratitude signal to its highest intensity. Every cell vibrates with appreciation. My entire field is broadcasting thankfulness. The Universe receives this signal and responds in kind…'},
      { key:'closing', title:'Seal the Gratitude Frequency', icon:'cross',
        guidance:'Seal this amplified gratitude into your field. Carry this vibration throughout your day — it is the master frequency.',
        quote:{text:'Gratitude is not only the greatest of virtues, but the parent of all others.',ref:'Marcus Tullius Cicero'},
        placeholder:'I seal this amplified gratitude frequency into my quantum field. I carry this vibration of appreciation into every moment of my day. I am a magnet for blessings. And so it is.'}
    ]
  },
  {
    id:'abundance_activation', icon:'crown', name:'Abundance Activation', color:'#FFD54F',
    description:'Activate the frequency of unlimited abundance — reprogram your subconscious for wealth, prosperity, and overflow.',
    steps:[
      { key:'acknowledge', title:'Acknowledge Infinite Supply', icon:'light',
        guidance:'Begin by acknowledging that the Universe is infinitely abundant. Scarcity is an illusion of the conditioned mind. There is more than enough for everyone.',
        quote:{text:'There is a supply for every demand.',ref:'Florence Scovel Shinn'},
        placeholder:'I acknowledge that the Universe is infinitely abundant. There is no lack in Source energy. Scarcity is a programmed illusion that I now dissolve. There is more than enough for everyone, including me…'},
      { key:'clear', title:'Clear Scarcity Programming', icon:'flame',
        guidance:'Identify and release any subconscious beliefs around lack, unworthiness, or limitation. These programs are not yours — they were inherited. Release them now.',
        quote:{text:'Whether you think you can, or you think you can\'t — you\'re right.',ref:'Henry Ford'},
        placeholder:'I identify and release all subconscious programming around scarcity, lack, and unworthiness. These beliefs were inherited, not chosen. I delete them from my field now. I am worthy of unlimited abundance…'},
      { key:'activate', title:'Activate the Abundance Code', icon:'crown',
        guidance:'Activate the frequency of abundance within your quantum field. Feel the energy of wealth, overflow, and prosperity as if it is already your reality.',
        quote:{text:'Whatever the mind can conceive and believe, it can achieve.',ref:'Napoleon Hill'},
        placeholder:'I activate the abundance code within my DNA. I feel the frequency of wealth and prosperity flowing through my veins. Money flows to me easily and effortlessly from expected and unexpected sources…'},
      { key:'declare', title:'Declare Your Prosperity', icon:'star',
        guidance:'Make bold declarations of your abundant reality. Speak them with certainty, as though reading from the record of what already is.',
        quote:{text:'Assume the feeling of the wish fulfilled and observe the route that your attention travels.',ref:'Neville Goddard'},
        placeholder:'I am prosperous. I am wealthy. I am a conduit for unlimited financial abundance. Opportunities flow to me with ease. I am always in the right place at the right time for my highest financial good…'},
      { key:'closing', title:'Seal the Abundance Frequency', icon:'cross',
        guidance:'Seal this abundance frequency into your subconscious. From this moment, you operate from overflow, not lack.',
        quote:{text:'The world is full of abundance and opportunity, but far too many people come to the fountain of life with a sieve instead of a tank.',ref:'Ben Sweetland'},
        placeholder:'I seal this abundance frequency permanently into my quantum field and subconscious mind. I am now programmed for prosperity. Wealth is my natural state. And so it is.'}
    ]
  },
  {
    id:'energy_warfare', icon:'bolt', name:'Energy Warfare', color:'#EF5350',
    description:'Clear negative energy, dissolve toxic attachments, and reclaim your sovereign frequency from all interference.',
    steps:[
      { key:'authority', title:'Declare Your Authority', icon:'bolt',
        guidance:'Declare your sovereign authority over your own energy field. You are the sole operator of your reality. Claim your power with absolute certainty.',
        quote:{text:'You are the master of your fate, you are the captain of your soul.',ref:'William Ernest Henley'},
        placeholder:'I declare my absolute authority over my energy field. I am the sole operator of my frequency. I am the master of my reality. No force, no entity, no energy may override my sovereign will…'},
      { key:'identify', title:'Identify the Interference', icon:'search',
        guidance:'Name the source of energetic interference. Whether it is a toxic relationship, a negative environment, a limiting pattern, or an energetic cord — identify it clearly.',
        quote:{text:'Until you make the unconscious conscious, it will direct your life and you will call it fate.',ref:'Carl Jung'},
        placeholder:'I identify the source of energetic interference in my field. I see clearly the patterns, cords, and attachments that drain my energy. I name them: [specific interference]. They no longer have power over me…'},
      { key:'sever', title:'Sever Toxic Cords', icon:'flame',
        guidance:'Sever all energetic cords that bind you to people, places, and situations that lower your frequency. This is not about anger — it is about sovereignty.',
        quote:{text:'Letting go gives us freedom, and freedom is the only condition for happiness.',ref:'Thich Nhat Hanh'},
        placeholder:'I sever all toxic energetic cords now. Every cord that drains me, manipulates me, or lowers my vibration is cut and cauterized with Source light. I am free from these attachments…'},
      { key:'transmute', title:'Transmute Negative Energy', icon:'star',
        guidance:'Transmute all negative energy into pure Source light. Do not fight darkness — transform it. What was poison becomes medicine.',
        quote:{text:'Everything is energy and that\'s all there is to it. Match the frequency of the reality you want.',ref:'Bashar (Darryl Anka)'},
        placeholder:'I transmute all negative energy in my field into pure Source light. Darkness becomes illumination. Fear becomes power. What was used against me now fuels my evolution. I transform everything into light…'},
      { key:'fortify', title:'Fortify Your Field', icon:'shield',
        guidance:'Fortify your energy field so that it cannot be penetrated by the same frequencies again. Raise your baseline vibration above the reach of interference.',
        quote:{text:'No problem can be solved from the same level of consciousness that created it.',ref:'Albert Einstein'},
        placeholder:'I fortify my energy field with the highest frequency of Source light. My vibration is elevated beyond the reach of any interference. I am impenetrable, I am sovereign, I am fortified…'},
      { key:'closing', title:'Victory Declaration', icon:'cross',
        guidance:'Declare your victory over all interference. The battle is won before it is fought — your frequency has already shifted.',
        quote:{text:'The wound is the place where the Light enters you.',ref:'Rumi'},
        placeholder:'The interference is cleared. My field is sovereign. My frequency is reclaimed. I stand in my full power, free from all that sought to diminish me. Victory is mine. And so it is.'}
    ]
  },
  {
    id:'collective_intention', icon:'hand', name:'Collective Intention', color:'#AB47BC',
    description:'Set powerful intentions for others — amplify healing, abundance, and alignment for those in your energetic circle.',
    steps:[
      { key:'connect', title:'Connect to the Collective Field', icon:'heart',
        guidance:'Begin by connecting to the collective field of consciousness. Recognize that we are all nodes in the same quantum field. What you send out ripples through the entire web.',
        quote:{text:'A human being is a part of the whole, called by us "Universe," a part limited in time and space.',ref:'Albert Einstein'},
        placeholder:'I connect my awareness to the collective field of consciousness. I recognize that we are all connected — all part of one infinite field. What I send out touches everyone, and what I intend for others amplifies my own field…'},
      { key:'name', title:'Name Those You Hold in Intention', icon:'hand',
        guidance:'Name the individuals, communities, or aspects of the world you wish to send energy to. Be specific — specificity focuses the beam.',
        quote:{text:'The best way to find yourself is to lose yourself in the service of others.',ref:'Mahatma Gandhi'},
        placeholder:'I hold in my field the following beings: [names or groups]. I see them clearly. I feel their energy. I send the highest frequency of love and intention toward their healing and expansion…'},
      { key:'send', title:'Send the Frequency', icon:'bolt',
        guidance:'Direct healing, abundance, or alignment energy to those you have named. Visualize the energy leaving your field and arriving in theirs — instantly, as quantum entanglement has no distance.',
        quote:{text:'We are all connected; To each other, biologically. To the earth, chemically. To the rest of the universe atomically.',ref:'Neil deGrasse Tyson'},
        placeholder:'I send the frequency of [healing/love/abundance/clarity] to each person I have named. Distance is an illusion — my intention reaches them instantly. I see them whole, I see them thriving, I see them aligned…'},
      { key:'protect', title:'Shield Them in Light', icon:'shield',
        guidance:'Surround those you love with a protective field of Source light. Intend that they be shielded from low-frequency interference and guided toward their highest timeline.',
        quote:{text:'Where there is love there is life.',ref:'Mahatma Gandhi'},
        placeholder:'I surround them in an impenetrable shield of Source light. They are protected from all low-frequency interference. They are guided toward their highest timeline. They are safe, they are loved, they are held…'},
      { key:'closing', title:'Seal the Collective Intention', icon:'cross',
        guidance:'Seal your intention for others into the quantum field. Release attachment to how it manifests. Trust the intelligence of Source to deliver it in the perfect way and time.',
        quote:{text:'When you visualize, then you materialize. If you\'ve been there in the mind, you\'ll go there in the body.',ref:'Denis Waitley'},
        placeholder:'I seal this collective intention into the field. I release attachment to the how and the when. Source intelligence delivers this energy in the perfect way and time. And so it is.'}
    ]
  },
  {
    id:'forgiveness_release', icon:'flame', name:'Forgiveness Release', color:'#4FC3F7',
    description:'Release resentment and energetic debt — free yourself from the vibrational prison of unforgiveness.',
    steps:[
      { key:'acknowledge', title:'Acknowledge the Weight', icon:'heart',
        guidance:'Begin by honestly acknowledging what you are carrying. Resentment is a frequency anchor — it locks you into a lower vibrational state. Name the hurt without suppression.',
        quote:{text:'Holding onto anger is like drinking poison and expecting the other person to die.',ref:'Buddhist Proverb'},
        placeholder:'I honestly acknowledge the resentment I carry. I have been hurt by [person or situation]. I do not suppress this truth — I bring it fully into the light of my awareness…'},
      { key:'understand', title:'Understand the Energetics', icon:'light',
        guidance:'Understand that forgiveness is not about condoning harm — it is about freeing your own energy. Resentment keeps you entangled with the very frequency you want to escape.',
        quote:{text:'Resentment is like a glass of poison that a man drinks; then he sits down and waits for his enemy to die.',ref:'Nelson Mandela'},
        placeholder:'I understand that forgiveness is not about them — it is about my freedom. Every moment I hold resentment, I volunteer for energetic imprisonment. I choose to free myself now…'},
      { key:'release', title:'Release the Cord', icon:'flame',
        guidance:'Cut the energetic cord of resentment. Let it dissolve in Source light. Feel the weight lift as you reclaim the energy you have been investing in pain.',
        quote:{text:'When I let go of what I am, I become what I might be.',ref:'Lao Tzu'},
        placeholder:'I release the cord of resentment now. I cut every energetic tie to this pain. I feel the weight dissolving. The energy I was investing in anger is now reclaimed and redirected toward my highest good…'},
      { key:'bless', title:'Send Light to the Source', icon:'star',
        guidance:'Send neutral or compassionate energy toward the person or situation. This is not weakness — it is the ultimate act of sovereignty. You are free because you choose to be.',
        quote:{text:'Forgiveness is the fragrance that the violet sheds on the heel that has crushed it.',ref:'Mark Twain'},
        placeholder:'I send light to those who hurt me. Not because they deserve it, but because I deserve peace. I release them from my energetic field. I wish them their own healing and evolution…'},
      { key:'closing', title:'Declare Your Freedom', icon:'cross',
        guidance:'Declare your energetic freedom. The cord is cut. The debt is dissolved. You are no longer vibrationally entangled with the past.',
        quote:{text:'The truth is, unless you let go, unless you forgive yourself, unless you forgive the situation, unless you realize that the situation is over, you cannot move forward.',ref:'Steve Maraboli'},
        placeholder:'I am free. The cord is cut. The energetic debt is dissolved. I am no longer entangled with the past. My field is clear, my vibration is rising, and I move forward in sovereignty. And so it is.'}
    ]
  },
  {
    id:'reality_declaration', icon:'cross', name:'Reality Declaration', color:'#FF7043',
    description:'Declare your desired reality with absolute authority — speak your future into existence through the power of conscious language.',
    steps:[
      { key:'presence', title:'Enter the Present Moment', icon:'light',
        guidance:'Ground yourself fully in the present moment. All creation happens in the now. Release the past, release the future — become fully present in this moment of pure potential.',
        quote:{text:'The secret of change is to focus all of your energy not on fighting the old, but on building the new.',ref:'Socrates (via Dan Millman)'},
        placeholder:'I ground myself fully in the present moment. The past is released. The future is a canvas. This moment — right here, right now — is the point of all creation. I am fully present and ready to declare…'},
      { key:'vision', title:'Clarify Your Vision', icon:'star',
        guidance:'See your desired reality in vivid detail. Engage all your senses. In the quantum field, observation collapses possibility into reality. See it, feel it, know it.',
        quote:{text:'Imagination is everything. It is the preview of life\'s coming attractions.',ref:'Albert Einstein'},
        placeholder:'I see my desired reality in vivid detail now. I see [your vision]. I feel it in my body. I hear it. I taste the sweetness of this life. It is real. It is happening. It is mine…'},
      { key:'declare', title:'Declare with Authority', icon:'bolt',
        guidance:'Speak your reality into existence with the full authority of your being. These are not wishes — they are declarations of what is. Your words carry creative force.',
        quote:{text:'Your word is your wand. The words you speak create your reality.',ref:'Florence Scovel Shinn'},
        placeholder:'I declare with absolute authority: I am [your declaration]. This is not a wish — it is a fact in the quantum field. My words carry the creative force of Source itself. What I declare, I create…'},
      { key:'embody', title:'Embody the New Reality', icon:'crown',
        guidance:'Step into the version of yourself that already lives this reality. Walk, speak, think, and feel as the person who already has what you have declared. This is the bridge between worlds.',
        quote:{text:'To be empowered — to be free, to be unlimited, to be creative, to be genius, to be divine — that is who you are.',ref:'Joe Dispenza'},
        placeholder:'I step into my new reality now. I embody the version of myself who already lives this truth. I walk as that person, I speak as that person, I vibrate at the frequency of that person. I am already there…'},
      { key:'closing', title:'Seal the Declaration', icon:'cross',
        guidance:'Seal your reality declaration into the quantum field. It is done. It cannot be undone. Walk forward knowing that your declared reality is already manifesting.',
        quote:{text:'Whatever you can do, or dream you can, begin it. Boldness has genius, power and magic in it.',ref:'Johann Wolfgang von Goethe'},
        placeholder:'This declaration is sealed into the quantum field. It is done. It is irreversible. My reality is shifting to match what I have spoken. I walk forward in total certainty. And so it is.'}
    ]
  },
  {
    id:'peace_presence', icon:'dove', name:'Peace & Presence', color:'#80CBC4',
    description:'Dissolve anxiety and turbulence — return to the still point within where infinite peace and clarity reside.',
    steps:[
      { key:'breathe', title:'Breathe — Return to Center', icon:'pray',
        guidance:'Begin with conscious breathing. Each breath is a return to the present moment. Inhale peace, exhale tension. Let the breath be your anchor in the now.',
        quote:{text:'Feelings come and go like clouds in a windy sky. Conscious breathing is my anchor.',ref:'Thich Nhat Hanh'},
        placeholder:'I return to my breath now. I breathe in deeply — drawing peace into every cell. I breathe out slowly — releasing all tension, all worry, all turbulence. My breath is my anchor in this present moment…'},
      { key:'release_anxiety', title:'Release the Turbulence', icon:'flame',
        guidance:'Acknowledge the anxiety without identifying with it. It is energy moving through you — not who you are. Observe it with detachment and let it pass like a wave.',
        quote:{text:'You are the sky. Everything else — it\'s just the weather.',ref:'Pema Chödrön'},
        placeholder:'I acknowledge the turbulence I feel without becoming it. This anxiety is not who I am — it is energy passing through. I observe it with detachment and give it permission to dissolve. It is only weather; I am the sky…'},
      { key:'stillness', title:'Enter the Still Point', icon:'dove',
        guidance:'Drop beneath the surface noise into the still point at your center. This is the eye of the storm — perfectly calm, perfectly clear, perfectly present.',
        quote:{text:'Within you there is a stillness and a sanctuary to which you can retreat at any time.',ref:'Hermann Hesse'},
        placeholder:'I drop beneath the noise of my mind into the still point within. Here there is only peace. Here there is only clarity. I rest in this sanctuary — the eye of the storm where all is calm…'},
      { key:'affirm', title:'Affirm Your Peace', icon:'star',
        guidance:'Affirm that peace is your natural state. Anxiety is the deviation — peace is the baseline. You are returning to what you already are.',
        quote:{text:'Peace comes from within. Do not seek it without.',ref:'Siddhartha Gautama'},
        placeholder:'Peace is my natural state. Anxiety is a temporary deviation, not my truth. I am returning to what I have always been — still, centered, sovereign. Peace flows through me like a river with no end…'},
      { key:'closing', title:'Carry the Stillness', icon:'cross',
        guidance:'Seal this peace into your nervous system. Carry this stillness into every interaction, every challenge, every moment of your day.',
        quote:{text:'The greatest weapon against stress is our ability to choose one thought over another.',ref:'William James'},
        placeholder:'I seal this deep peace into my nervous system. I carry this stillness with me into every moment. No external circumstance can disturb the peace at my center. I am calm. I am clear. And so it is.'}
    ]
  },
  {
    id:'shadow_integration', icon:'scroll', name:'Shadow Integration', color:'#B39DDB',
    description:'Acknowledge and integrate the shadow self — transform suppressed aspects into sources of authentic power and wholeness.',
    steps:[
      { key:'courage', title:'Summon the Courage to Look Within', icon:'bolt',
        guidance:'Begin by summoning the courage to face what you have hidden from yourself. The shadow is not your enemy — it is the part of you that was exiled. It holds immense power.',
        quote:{text:'One does not become enlightened by imagining figures of light, but by making the darkness conscious.',ref:'Carl Jung'},
        placeholder:'I summon the courage to look within. I am ready to face the parts of myself I have hidden, denied, or suppressed. I do this not from fear but from a desire to become whole…'},
      { key:'identify', title:'Identify the Shadow', icon:'search',
        guidance:'Name the aspects of yourself you have rejected — the anger, the jealousy, the fear, the shame. These are not flaws — they are fragments of self that need integration, not elimination.',
        quote:{text:'Everything that irritates us about others can lead us to an understanding of ourselves.',ref:'Carl Jung'},
        placeholder:'I name my shadow now. I acknowledge the [anger/jealousy/fear/shame/need] that I have suppressed. I do not judge these aspects — I simply acknowledge them. They are part of my story…'},
      { key:'accept', title:'Accept Without Judgment', icon:'heart',
        guidance:'Accept these shadow aspects with compassion. They developed as survival mechanisms. They protected you when you could not protect yourself. Thank them for their service.',
        quote:{text:'The curious paradox is that when I accept myself just as I am, then I can change.',ref:'Carl Rogers'},
        placeholder:'I accept these aspects of myself without judgment. They developed for a reason — they were my survival mechanisms, my shields, my coping strategies. I thank them for protecting me when I could not protect myself…'},
      { key:'integrate', title:'Integrate — Reclaim Your Power', icon:'star',
        guidance:'Integrate the shadow by welcoming it home. When you embrace what you have denied, you reclaim the energy that was spent keeping it hidden. Shadow work is power reclamation.',
        quote:{text:'I am not what happened to me. I am what I choose to become.',ref:'Carl Jung'},
        placeholder:'I welcome my shadow home. I integrate every fragment, every exiled part, every suppressed emotion. The energy I spent hiding from myself is now reclaimed. I feel my wholeness expanding. I am becoming complete…'},
      { key:'closing', title:'Declare Wholeness', icon:'cross',
        guidance:'Declare your wholeness. You are not broken — you were fragmented. Now you are reassembled. The shadow has been integrated, and you are more powerful for it.',
        quote:{text:'Your task is not to seek for love, but merely to seek and find all the barriers within yourself that you have built against it.',ref:'Rumi'},
        placeholder:'I am whole. I am integrated. The shadow has been welcomed home and transformed into power. There is nothing left to hide from, nothing left to fear within myself. I am complete. And so it is.'}
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
   A=1, B=2, ... Z=26. Digits add face value.
   Code = total mod 1,000,000, zero-padded to 6 digits.
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
  const code = String(total % 1000000).padStart(6, '0');
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
        <span class="wisdom-ref">— ${step.quote.ref} </span>
      </div>
      <button class="use-wisdom-btn" onclick="useWisdom()">${icon('scroll','btn-icon')} Use This Wisdom</button>
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
    toast('Wisdom added to your intention');
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

function getFavorites() {
  try { return JSON.parse(localStorage.getItem('wisdomFavorites') || '[]'); } catch { return []; }
}
function saveFavorites(favs) { localStorage.setItem('wisdomFavorites', JSON.stringify(favs)); }
function isFavorite(ref) { return getFavorites().includes(ref); }
function toggleFavorite(ref, event) {
  if (event) event.stopPropagation();
  let favs = getFavorites();
  if (favs.includes(ref)) favs = favs.filter(f => f !== ref);
  else favs.push(ref);
  saveFavorites(favs);
  renderWisdoms(document.getElementById('wisdom-search')?.value.trim().toLowerCase() || '');
  toast(favs.includes(ref) ? 'Added to favorites' : 'Removed from favorites');
}

function filterWisdoms(tag) {
  activeTag = tag;
  document.querySelectorAll('.tag').forEach(t => t.classList.toggle('active', t.dataset.tag === tag));
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
    for (const cat in WISDOM_DB) WISDOM_DB[cat].forEach(s => results.push({ ...s, cat }));
  } else if (activeTag === 'favorites') {
    const favs = getFavorites();
    for (const cat in WISDOM_DB) WISDOM_DB[cat].forEach(s => { if (favs.includes(s.ref)) results.push({ ...s, cat }); });
  } else if (WISDOM_DB[activeTag]) {
    results = WISDOM_DB[activeTag].map(s => ({ ...s, cat: activeTag }));
  }

  if (query) {
    results = results.filter(s => s.text.toLowerCase().includes(query) || s.ref.toLowerCase().includes(query));
  }

  if (results.length === 0) {
    container.innerHTML = '<p class="text-center text-dim mt-2">No wisdoms found. Try another search.</p>';
    return;
  }

  results.forEach(s => {
    const fav = isFavorite(s.ref);
    const div = document.createElement('div');
    div.className = 'wisdom-card';
    div.onclick = () => { navigator.clipboard.writeText(`"${s.text}" — ${s.ref} `); toast('Wisdom copied'); };
    div.innerHTML = `
      <div class="wisdom-card-top">
        <div class="wisdom-card-text">"${s.text}"</div>
        <button class="fav-btn ${fav ? 'active' : ''}" onclick="toggleFavorite('${s.ref}', event)" aria-label="${fav ? 'Remove from favorites' : 'Add to favorites'}" title="${fav ? 'Remove from favorites' : 'Add to favorites'}">${fav ? '★' : '☆'}</button>
      </div>
      <div class="wisdom-card-ref">— ${s.ref} </div>
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
      if (modal && modal.classList.contains('open')) { closeIntentionModal(); return; }
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
