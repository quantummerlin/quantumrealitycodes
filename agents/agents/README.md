# Quantum Reality Codes — Agent System

> Focused Intention. Vibrational Code. Infinite Connection.

An automated content pipeline that generates structured intentions, encodes them through Vibrational Encoding, and produces shareable cards, social media posts, blog articles, email newsletters, and web pages.

## Quick Start

```bash
cd agents/agents

# Run the daily pipeline (generates all content for today)
python manifest.py daily

# Run a topical campaign
python manifest.py campaign abundance

# Generate a single intention card
python manifest.py card energy_shield

# Generate social media posts
python manifest.py social

# Generate a blog post
python manifest.py blog "the power of focused intention"

# Generate email newsletter
python manifest.py email

# Deploy to site
python manifest.py deploy
```

## Architecture

| Agent | Role | Input | Output |
|-------|------|-------|--------|
| **Wisdom Agent** | Selects quotes | Category/topic | Quotes package |
| **Intention Agent** | Builds structured intention | Category + wisdom | Full intention JSON |
| **Code Agent** | Encodes via Vibrational Encoding | Intention text | Reality code + analysis |
| **Card Agent** | Creates shareable cards | Intention + code | 1080×1080 HTML card |
| **Social Agent** | Platform content | All data | IG/TikTok/X/YT posts |
| **Blog Agent** | SEO articles | All data | Full blog HTML |
| **Email Agent** | Newsletters | All data | Email HTML |
| **HTML Agent** | Web pages | All data | Daily page HTML |
| **Deploy Agent** | Deployment | Generated files | Copies to site dir |

## Directory Structure

```
agents/agents/
├── manifest.py          # CLI entry point
├── SYSTEM.md            # System documentation
├── README.md            # This file
├── config/
│   └── soul.json        # Identity, colors, categories, tone rules
├── core/
│   ├── master_agent.py  # Pipeline orchestrator
│   ├── intention_agent.py # Structured intention builder (12 categories)
│   ├── wisdom_agent.py  # Universal wisdom quote database
│   └── code_agent.py    # Vibrational Encoding algorithm
├── content/
│   ├── card_agent.py    # Shareable intention cards
│   ├── social_agent.py  # Social media content
│   ├── blog_agent.py    # SEO blog posts
│   └── email_agent.py   # Email newsletters
├── distribution/
│   ├── html_agent.py    # Web page generator
│   └── deploy_agent.py  # Deployment handler
├── output/              # Generated content
│   ├── daily/
│   ├── campaigns/
│   ├── cards/
│   ├── blog/
│   ├── email/
│   └── social/
└── templates/           # HTML templates (optional)
```

## Intention Categories

| Category | Focus |
|----------|-------|
| Core Alignment | Foundation, grounding, connection |
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

## Vibrational Encoding

Every letter is assigned a value: A=1, B=2, ... Z=26. Digits add their face value. The sum of all characters in the intention text, modded to 6 digits, becomes the **Reality Code**.

## Wisdom Sources

Quotes are drawn from universal traditions: quantum physics (Einstein, Tesla, Planck), philosophy (Rumi, Buddha, Seneca, Jung), mindfulness (Tolle, Thich Nhat Hanh), and leadership wisdom (Gandhi, MLK, Eleanor Roosevelt).

## Configuration

All identity, colors, categories, and tone rules are defined in `config/soul.json`. Edit this file to customize the agent's personality and branding.

## License

Free forever. Built for conscious creators everywhere.
