"""
HTML Agent — The Architect
Generates web pages for the site — daily intention pages, landing pages, etc.
"""

import json
from datetime import datetime, date
from pathlib import Path

CONFIG_PATH = Path(__file__).parent.parent / "config" / "soul.json"


class HTMLAgent:
    """Generates HTML pages for the website."""

    def __init__(self):
        self.soul = self._load_soul()

    def _load_soul(self):
        try:
            with open(CONFIG_PATH, "r") as f:
                return json.load(f)
        except Exception:
            return {}

    def run(self, intention_data=None, code_data=None, wisdom_data=None, page_type="daily"):
        if page_type == "daily":
            return self._daily_page(intention_data, code_data, wisdom_data)
        return "<p>Unknown page type</p>"

    def _daily_page(self, intention_data, code_data, wisdom_data):
        if not intention_data or not code_data:
            return "<p>Error: Missing data</p>"

        code = code_data.get("reality_code", "000000")
        total = code_data.get("vibrational_total", 0)
        cat_name = intention_data.get("category_name", "Intention")
        cat_quote = intention_data.get("category_quote", "")
        steps = intention_data.get("steps", [])
        analysis = code_data.get("analysis", {})
        root = analysis.get("root_number", 0)
        root_meaning = analysis.get("root_meaning", "")
        patterns = analysis.get("patterns", [])
        daily_quote = wisdom_data.get("daily_quote", {}) if wisdom_data else {}
        site = self.soul.get("website", "quantumrealitycodes.com")
        colors = self.soul.get("color_palette", {})
        today = date.today()
        date_display = today.strftime("%A, %B %d, %Y")
        day_names = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
        day_name = day_names[today.weekday()]

        # Steps HTML
        steps_html = ""
        for i, step in enumerate(steps, 1):
            w = step.get("wisdom", {})
            steps_html += f"""
      <section class="step">
        <div class="step-num">{i}</div>
        <h3>{step['title']}</h3>
        <blockquote>"{w.get('text', '')}"<cite>— {w.get('ref', '')}</cite></blockquote>
        <p>{step['text']}</p>
      </section>"""

        # Patterns HTML
        patterns_html = ""
        if patterns:
            patterns_html = '<div class="patterns">' + "".join(
                f'<p class="pattern">{p}</p>' for p in patterns
            ) + '</div>'

        html = f"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Daily Intention — {date_display} | Quantum Reality Codes</title>
<meta name="description" content="Today's structured {cat_name.lower()} intention with wisdom and vibrational code {code}. Quantum Reality Codes — daily reality codes.">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet">
<style>
*{{margin:0;padding:0;box-sizing:border-box}}
body{{background:{colors.get('primary_dark','#040418')};color:#f0ece2;font-family:'Cormorant Garamond',Georgia,serif;font-size:18px;line-height:1.7;min-height:100vh}}
.wrap{{max-width:720px;margin:0 auto;padding:40px 20px 80px}}
header{{text-align:center;padding:40px 0 32px}}
.brand{{font-family:'Cinzel',serif;font-size:11px;letter-spacing:6px;text-transform:uppercase;color:rgba(0,212,170,0.5)}}
.date{{color:rgba(240,236,226,0.4);font-size:14px;margin:12px 0 4px;letter-spacing:1px}}
h1{{font-family:'Cinzel',serif;font-size:1.8em;color:#00D4AA;margin:8px 0;line-height:1.3}}
h2{{font-family:'Cinzel',serif;font-size:1.3em;color:#00D4AA;margin:32px 0 12px}}
h3{{font-family:'Cinzel',serif;font-size:1.05em;color:rgba(240,236,226,0.85);margin:0 0 8px}}
.divider{{width:80px;height:1px;background:linear-gradient(90deg,transparent,#00D4AA,transparent);margin:20px auto}}
.quote-box{{text-align:center;padding:28px;margin:24px 0;background:rgba(0,212,170,0.04);border:1px solid rgba(0,212,170,0.12);border-radius:14px}}
.quote-box p{{font-style:italic;font-size:1.15em;color:#f0ece2;line-height:1.6}}
.quote-box cite{{display:block;margin-top:8px;font-size:0.85em;color:rgba(0,212,170,0.6);font-style:normal}}
.step{{padding:20px;margin:16px 0;background:rgba(255,255,255,0.015);border:1px solid rgba(0,212,170,0.06);border-radius:12px;position:relative;padding-left:56px}}
.step-num{{position:absolute;left:16px;top:20px;width:28px;height:28px;border-radius:50%;border:1px solid rgba(0,212,170,0.3);display:flex;align-items:center;justify-content:center;font-family:'Cinzel',serif;font-size:13px;color:rgba(0,212,170,0.6)}}
.step blockquote{{border-left:2px solid rgba(0,212,170,0.3);padding:8px 16px;margin:10px 0;font-style:italic;color:rgba(240,236,226,0.6);font-size:0.95em}}
.step blockquote cite{{display:block;font-size:0.85em;color:rgba(0,212,170,0.5);font-style:normal;margin-top:4px}}
.step p{{color:rgba(240,236,226,0.8)}}
.code-box{{text-align:center;padding:40px;margin:32px 0;background:radial-gradient(ellipse,rgba(0,212,170,0.06),transparent);border:1px solid rgba(0,212,170,0.15);border-radius:16px}}
.code-label{{font-family:'Cinzel',serif;font-size:11px;letter-spacing:4px;text-transform:uppercase;color:rgba(0,212,170,0.5)}}
.code-num{{font-family:'Cinzel',serif;font-size:3.2em;font-weight:700;color:#00D4AA;letter-spacing:10px;margin:8px 0;text-shadow:0 0 25px rgba(0,212,170,0.25)}}
.code-meta{{font-size:0.85em;color:rgba(240,236,226,0.4)}}
.code-root{{font-size:0.85em;color:rgba(0,212,170,0.45);font-style:italic;margin-top:6px;max-width:500px;display:inline-block}}
.patterns{{margin:16px 0}}
.pattern{{font-size:0.9em;color:rgba(240,236,226,0.5);font-style:italic;text-align:center;margin:4px 0}}
.amplify{{padding:24px;margin:24px 0;background:rgba(0,212,170,0.03);border-radius:12px;border:1px solid rgba(0,212,170,0.08)}}
.amplify ul{{margin:12px 0 0 20px}}
.amplify li{{margin:6px 0;color:rgba(240,236,226,0.7);font-size:0.95em}}
.cta{{text-align:center;margin:32px 0}}
.cta a{{display:inline-block;padding:14px 36px;background:linear-gradient(135deg,#00D4AA,#00A88A);color:#040418;font-family:'Cinzel',serif;font-weight:600;text-decoration:none;border-radius:8px;letter-spacing:2px;font-size:0.9em}}
footer{{text-align:center;padding:32px 0;border-top:1px solid rgba(0,212,170,0.08);margin-top:40px}}
footer p{{color:rgba(240,236,226,0.25);font-size:0.8em}}
</style>
</head>
<body>
<div class="wrap">
  <header>
    <div class="brand">Quantum Reality Codes</div>
    <div class="date">{date_display}</div>
    <h1>{day_name}'s Intention — {cat_name}</h1>
    <p style="color:rgba(240,236,226,0.5);font-size:0.9em">{cat_quote}</p>
    <div class="divider"></div>
  </header>

  <div class="quote-box">
    <p>"{daily_quote.get('text', '')}"</p>
    <cite>— {daily_quote.get('ref', '')}</cite>
  </div>

  <h2>Today's Structured Intention</h2>
  {steps_html}

  <div class="code-box">
    <div class="code-label">Today's Reality Code</div>
    <div class="code-num">{code}</div>
    <div class="code-meta">Vibrational Value: {total} &middot; Root: {root}</div>
    <div class="code-root">{root_meaning[:100] if root_meaning else ''}</div>
  </div>
  {patterns_html}

  <div class="amplify">
    <h2 style="margin-top:0">Amplify Your Code</h2>
    <ul>
      <li>Set your phone PIN to <strong>{code}</strong> — every unlock becomes a moment of alignment.</li>
      <li>Set an alarm using the code digits — pause and reconnect when it sounds.</li>
      <li>Write the code where you will see it — mirror, journal, desk.</li>
      <li>Play the Creation Frequency 37-73 while meditating on your code.</li>
      <li>Share your code — collective intention amplifies manifestation power.</li>
    </ul>
  </div>

  <div class="cta">
    <a href="{site}">Build Your Own Reality Code</a>
    <p style="color:rgba(240,236,226,0.4);font-size:0.85em;margin-top:12px">Focused Intention. Vibrational Code. Infinite Connection.</p>
  </div>

  <footer>
    <p>Quantum Reality Codes &middot; {site}</p>
  </footer>
</div>
</body>
</html>"""

        print(f"  Daily page generated: {day_name} — {cat_name}")
        return html


if __name__ == "__main__":
    agent = HTMLAgent()
    print("HTML Agent ready.")
