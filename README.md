# Quantum Reality Codes

**Focused Intention. Vibrational Code. Infinite Connection.**

A Progressive Web App (PWA) for creating structured intentions, generating unique Reality Codes through Vibrational Encoding, and amplifying your connection to the quantum field with the 37-73 Hz creation frequency.

**Live at [quantumrealitycodes.com](https://quantumrealitycodes.com)**

---

## Features

- **Structured Intention Builder** — Follow universal intention patterns (Core Alignment, Energy Shield, Abundance Activation, Clarity & Intuition, Quantum Healing, and more)
- **Vibrational Code Generation** — Each intention is encoded into a unique numerical Reality Code using Vibrational Encoding (A=1, B=2, ... Z=26)
- **Creation Frequency** — 37-73 Hz audio frequency for intention meditation
- **Intention Journal** — Locally stored intention history with manifestation tracking
- **Wisdom Library** — Searchable universal wisdom database by category
- **Social Sharing** — Share your Reality Code via WhatsApp, Facebook, Twitter/X
- **Offline Support** — Full PWA with service worker for offline functionality
- **Installable** — Install as a native-like app on any device

## Intention Categories

| Category | Focus |
|----------|-------|
| Core Alignment | Foundation, grounding, connection to Source |
| Energy Shield | Protection, boundaries, sovereignty |
| Quantum Healing | Health, restoration, wholeness |
| Clarity & Intuition | Wisdom, guidance, inner knowing |
| Gratitude Amplification | Thankfulness, abundance mindset |
| Abundance Activation | Prosperity, receiving, wealth |
| Energy Warfare | Spiritual strength, transmutation |
| Collective Intention | Unity, community, service |
| Forgiveness & Release | Letting go, freedom |
| Reality Declaration | Manifestation, identity |
| Peace & Presence | Stillness, surrender, calm |
| Shadow Integration | Wholeness, self-acceptance |

## Technology

- Pure HTML5, CSS3, JavaScript (no frameworks, no build step)
- Progressive Web App (PWA) with offline-first service worker
- Local storage for the intention journal
- Responsive design for all screen sizes

## Deployment

This site is deployed automatically to GitHub Pages via GitHub Actions on every push to `main`.

### Custom Domain Setup

The site is configured for `quantumrealitycodes.com`. DNS should have a CNAME record pointing to the GitHub Pages host.

## Project Structure

```
├── index.html        ← Single-page application
├── manifest.json     ← PWA manifest
├── service-worker.js ← Offline caching
├── CNAME             ← Custom domain
├── css/style.css     ← Complete stylesheet
├── js/app.js         ← Complete application logic
├── images/           ← Background assets
├── audio/            ← Creation frequency audio
├── icons/            ← PWA icons (all sizes)
├── manifest.py       ← Agent system launcher
└── agents/           ← Content generation agent system
```

## Agent System

The `agents/` directory contains an automated content pipeline for generating daily intentions, shareable cards, social media posts, blog articles, and email newsletters. See `agents/agents/README.md` for details.

```bash
python manifest.py daily          # Full daily pipeline
python manifest.py campaign abundance   # Topic campaign
python manifest.py card energy_shield   # Single card
```

## License

Built for conscious creators everywhere.

Quantum Reality Codes © 2025
