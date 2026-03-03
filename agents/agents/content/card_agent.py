"""
Card Agent — The Artist
Creates beautiful shareable intention card images as HTML.
Cards can be screenshotted, converted to PNG, or shared directly.
Design follows the cosmic/quantum theme from soul.json.
"""

import json
from datetime import datetime, date
from pathlib import Path

CONFIG_PATH = Path(__file__).parent.parent / "config" / "soul.json"


class CardAgent:
    """Creates shareable intention card HTML."""

    def __init__(self):
        self.soul = self._load_soul()

    def _load_soul(self):
        try:
            with open(CONFIG_PATH, "r") as f:
                return json.load(f)
        except Exception:
            return {}

    def run(self, intention_data=None, code_data=None, wisdom_data=None, campaign_topic=None):
        """Generate an intention card as HTML."""
        if not intention_data or not code_data:
            return "<p>Error: Missing intention or code data</p>"

        category_name = intention_data.get("category_name", "Intention")
        reality_code = code_data.get("reality_code", "000000")
        vibrational_total = code_data.get("vibrational_total", 0)
        analysis = code_data.get("analysis", {})
        root_number = analysis.get("root_number", 0)
        root_meaning = analysis.get("root_meaning", "")
        patterns = analysis.get("patterns", [])
        daily_quote = wisdom_data.get("daily_quote", {}) if wisdom_data else {}
        today = date.today()
        date_str = today.strftime("%B %d, %Y")

        # Get first step wisdom for the card
        steps = intention_data.get("steps", [])
        card_wisdom = ""
        card_wisdom_ref = ""
        if steps:
            card_wisdom = steps[0].get("wisdom", {}).get("text", "")
            card_wisdom_ref = steps[0].get("wisdom", {}).get("ref", "")

        # Build condensed intention (first and last lines)
        intention_opening = steps[0]["text"][:120] + "..." if steps else ""

        # Topic line
        topic_line = ""
        if campaign_topic:
            topic_line = f'<div class="card-topic">An Intention for {campaign_topic.title()}</div>'

        # Pattern badges
        pattern_html = ""
        if patterns:
            pattern_html = '<div class="card-patterns">' + "".join(
                f'<div class="pattern-badge">{p}</div>' for p in patterns[:2]
            ) + '</div>'

        # Creation frequency badge
        freq_badge = ""
        if analysis.get("creation_frequency_connection"):
            freq_badge = '<div class="freq-badge">Creation Frequency Aligned</div>'

        html = f"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Reality Code Card — {reality_code}</title>
<style>
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&display=swap');

* {{ margin: 0; padding: 0; box-sizing: border-box; }}

body {{
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #040418;
  font-family: 'Cormorant Garamond', Georgia, serif;
}}

.card {{
  width: 1080px;
  height: 1080px;
  position: relative;
  overflow: hidden;
  background: radial-gradient(ellipse at 50% 30%, #1a1a5e 0%, #0a1033 40%, #040418 100%);
}}

/* Stars background */
.card::before {{
  content: '';
  position: absolute;
  inset: 0;
  background-image:
    radial-gradient(1px 1px at 10% 20%, rgba(255,255,255,0.6), transparent),
    radial-gradient(1px 1px at 30% 50%, rgba(255,255,255,0.4), transparent),
    radial-gradient(1.5px 1.5px at 50% 10%, rgba(0,212,170,0.5), transparent),
    radial-gradient(1px 1px at 70% 40%, rgba(255,255,255,0.5), transparent),
    radial-gradient(1px 1px at 90% 70%, rgba(255,255,255,0.3), transparent),
    radial-gradient(1.5px 1.5px at 20% 80%, rgba(0,212,170,0.4), transparent),
    radial-gradient(1px 1px at 60% 90%, rgba(255,255,255,0.4), transparent),
    radial-gradient(1px 1px at 80% 15%, rgba(255,255,255,0.5), transparent),
    radial-gradient(1px 1px at 40% 65%, rgba(0,212,170,0.3), transparent),
    radial-gradient(1px 1px at 15% 45%, rgba(255,255,255,0.4), transparent),
    radial-gradient(1.5px 1.5px at 85% 55%, rgba(0,212,170,0.4), transparent),
    radial-gradient(1px 1px at 55% 35%, rgba(255,255,255,0.3), transparent),
    radial-gradient(1px 1px at 25% 95%, rgba(255,255,255,0.4), transparent),
    radial-gradient(1px 1px at 75% 85%, rgba(0,212,170,0.3), transparent),
    radial-gradient(1px 1px at 45% 5%, rgba(255,255,255,0.5), transparent);
  pointer-events: none;
}}

/* Teal glow at center */
.card::after {{
  content: '';
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translateX(-50%);
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(0,212,170,0.08) 0%, transparent 70%);
  pointer-events: none;
}}

.card-inner {{
  position: relative;
  z-index: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px;
  text-align: center;
}}

/* top/bottom border accent */
.card-top-border {{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, transparent, #00D4AA, transparent);
}}

.card-bottom-border {{
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, transparent, #00D4AA, transparent);
}}

/* Brand */
.card-brand {{
  font-family: 'Cinzel', serif;
  font-size: 16px;
  letter-spacing: 6px;
  text-transform: uppercase;
  color: rgba(0,212,170,0.6);
  margin-bottom: 20px;
}}

/* Category */
.card-category {{
  font-family: 'Cinzel', serif;
  font-size: 22px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: rgba(240,236,226,0.7);
  margin-bottom: 8px;
}}

.card-topic {{
  font-family: 'Cormorant Garamond', serif;
  font-size: 20px;
  font-style: italic;
  color: rgba(0,212,170,0.8);
  margin-bottom: 16px;
}}

/* Divider */
.divider {{
  width: 120px;
  height: 1px;
  background: linear-gradient(90deg, transparent, #00D4AA, transparent);
  margin: 20px auto;
}}

.divider-sm {{
  width: 60px;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(0,212,170,0.5), transparent);
  margin: 16px auto;
}}

/* Wisdom quote */
.card-wisdom {{
  font-size: 24px;
  font-style: italic;
  color: #f0ece2;
  line-height: 1.6;
  max-width: 800px;
  margin-bottom: 6px;
}}

.card-wisdom-ref {{
  font-size: 16px;
  color: rgba(0,212,170,0.7);
  letter-spacing: 1px;
  margin-bottom: 24px;
}}

/* Intention excerpt */
.card-intention {{
  font-size: 18px;
  color: rgba(240,236,226,0.65);
  line-height: 1.5;
  max-width: 700px;
  margin-bottom: 8px;
}}

/* Code display */
.card-code-label {{
  font-family: 'Cinzel', serif;
  font-size: 14px;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: rgba(0,212,170,0.6);
  margin-bottom: 12px;
}}

.card-code {{
  font-family: 'Cinzel', serif;
  font-size: 72px;
  font-weight: 700;
  letter-spacing: 16px;
  color: #00D4AA;
  text-shadow: 0 0 30px rgba(0,212,170,0.4), 0 0 60px rgba(0,212,170,0.15);
  margin-bottom: 8px;
}}

.card-vibrational {{
  font-size: 15px;
  color: rgba(240,236,226,0.5);
  letter-spacing: 1px;
  margin-bottom: 6px;
}}

.card-root {{
  font-size: 14px;
  color: rgba(0,212,170,0.5);
  font-style: italic;
  max-width: 600px;
  margin-bottom: 16px;
}}

/* Frequency badge */
.freq-badge {{
  display: inline-block;
  padding: 6px 20px;
  border: 1px solid rgba(0,212,170,0.3);
  border-radius: 20px;
  font-size: 13px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: rgba(0,212,170,0.7);
  margin-bottom: 16px;
}}

/* Patterns */
.card-patterns {{
  max-width: 700px;
  margin-bottom: 16px;
}}
.pattern-badge {{
  font-size: 13px;
  color: rgba(240,236,226,0.5);
  font-style: italic;
  margin-bottom: 4px;
}}

/* Date */
.card-date {{
  font-size: 14px;
  color: rgba(240,236,226,0.35);
  letter-spacing: 2px;
  margin-top: 8px;
}}

/* CTA */
.card-cta {{
  font-size: 14px;
  color: rgba(0,212,170,0.5);
  letter-spacing: 2px;
  margin-top: 12px;
}}
</style>
</head>
<body>
<div class="card">
  <div class="card-top-border"></div>
  <div class="card-bottom-border"></div>
  <div class="card-inner">
    <div class="card-brand">Quantum Reality Codes</div>
    <div class="card-category">{category_name}</div>
    {topic_line}
    <div class="divider"></div>
    <div class="card-wisdom">"{card_wisdom}"</div>
    <div class="card-wisdom-ref">— {card_wisdom_ref}</div>
    <div class="card-intention">{intention_opening}</div>
    <div class="divider-sm"></div>
    <div class="card-code-label">Your Reality Code</div>
    <div class="card-code">{reality_code}</div>
    <div class="card-vibrational">Vibrational Value: {vibrational_total} | Root: {root_number}</div>
    <div class="card-root">{root_meaning[:80] if root_meaning else ''}</div>
    {freq_badge}
    {pattern_html}
    <div class="divider-sm"></div>
    <div class="card-date">{date_str}</div>
    <div class="card-cta">quantumrealitycodes.com</div>
  </div>
</div>
</body>
</html>"""

        print(f"  Card generated: {category_name} — Code {reality_code}")
        return html


if __name__ == "__main__":
    agent = CardAgent()
    sample_intention = {
        "category_name": "Energy Shield",
        "steps": [
            {"text": "I anchor myself in my own sovereign energy.", "wisdom": {"text": "You are the universe expressing itself.", "ref": "Eckhart Tolle"}},
            {"text": "My shield is sealed. And so it is.", "wisdom": {"text": "No one can limit your energy but you.", "ref": "Quantum Principle"}},
        ]
    }
    sample_code = {
        "reality_code": "037421",
        "vibrational_total": 3742,
        "analysis": {"root_number": 7, "root_meaning": "Spiritual depth", "patterns": [], "creation_frequency_connection": False}
    }
    sample_wisdom = {"daily_quote": {"text": "Energy flows where intention goes.", "ref": "Quantum Principle"}}
    html = agent.run(sample_intention, sample_code, sample_wisdom)
    print(f"Generated {len(html)} chars of HTML")
