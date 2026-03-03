"""
Blog Agent — The Scribe
Generates SEO-optimized blog articles with wisdom, intention, and vibrational encoding content.
"""

import json
from datetime import datetime, date
from pathlib import Path

CONFIG_PATH = Path(__file__).parent.parent / "config" / "soul.json"


class BlogAgent:
    """Generates SEO blog posts as HTML."""

    def __init__(self):
        self.soul = self._load_soul()

    def _load_soul(self):
        try:
            with open(CONFIG_PATH, "r") as f:
                return json.load(f)
        except Exception:
            return {}

    def run(self, intention_data=None, code_data=None, wisdom_data=None, topic=None):
        if not intention_data or not code_data:
            return "<p>Error: Missing data</p>"

        topic = topic or intention_data.get("category_name", "Intention")
        code = code_data.get("reality_code", "000000")
        total = code_data.get("vibrational_total", 0)
        cat_name = intention_data.get("category_name", "Intention")
        cat_quote = intention_data.get("category_quote", "")
        steps = intention_data.get("steps", [])
        analysis = code_data.get("analysis", {})
        root = analysis.get("root_number", 0)
        root_meaning = analysis.get("root_meaning", "")
        quotes = wisdom_data.get("quotes", []) if wisdom_data else []
        daily_quote = wisdom_data.get("daily_quote", {}) if wisdom_data else {}
        site = self.soul.get("website", "quantumrealitycodes.com")
        today = date.today().strftime("%B %d, %Y")
        title = f"A Structured Intention for {topic.title()} — Reality Code {code}"
        slug = topic.lower().replace(" ", "-")

        # Build intention steps HTML
        steps_html = ""
        for i, step in enumerate(steps, 1):
            w = step.get("wisdom", {})
            steps_html += f"""
        <div class="intention-step">
          <h3>Step {i}: {step['title']}</h3>
          <blockquote class="wisdom">"{w.get('text', '')}"<br><span class="ref">— {w.get('ref', '')}</span></blockquote>
          <p class="intention-text">{step['text']}</p>
        </div>"""

        # Related wisdom quotes
        related_html = ""
        for q in quotes[:4]:
            related_html += f'<li>"{q["text"]}" — <em>{q["ref"]}</em></li>\n'

        html = f"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{title} | Quantum Reality Codes</title>
<meta name="description" content="A structured intention for {topic.lower()} with wisdom quotes and vibrational reality code {code}. Build your own reality code at Quantum Reality Codes.">
<meta name="keywords" content="reality code, {topic.lower()}, structured intention, vibrational encoding, manifestation, conscious creation, {cat_name.lower()}">
<meta property="og:title" content="{title}">
<meta property="og:description" content="Structured intention for {topic.lower()} encoded through Vibrational Encoding. Reality Code: {code}">
<meta property="og:type" content="article">
<meta property="og:url" content="{site}/blog/{slug}">
<link rel="canonical" href="{site}/blog/{slug}">
<style>
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&display=swap');
*{{margin:0;padding:0;box-sizing:border-box}}
body{{background:#040418;color:#f0ece2;font-family:'Cormorant Garamond',Georgia,serif;font-size:19px;line-height:1.8}}
.container{{max-width:780px;margin:0 auto;padding:40px 24px 80px}}
h1{{font-family:'Cinzel',serif;font-size:2.2em;color:#00D4AA;text-align:center;margin-bottom:8px;line-height:1.3}}
h2{{font-family:'Cinzel',serif;font-size:1.4em;color:#00D4AA;margin:40px 0 16px;border-bottom:1px solid rgba(0,212,170,0.2);padding-bottom:8px}}
h3{{font-family:'Cinzel',serif;font-size:1.1em;color:rgba(240,236,226,0.85);margin:24px 0 8px}}
.meta{{text-align:center;color:rgba(240,236,226,0.5);font-size:0.9em;margin-bottom:32px;letter-spacing:1px}}
.divider{{width:100px;height:1px;background:linear-gradient(90deg,transparent,#00D4AA,transparent);margin:24px auto}}
p{{margin-bottom:16px;color:rgba(240,236,226,0.85)}}
blockquote.wisdom{{border-left:3px solid rgba(0,212,170,0.4);padding:12px 20px;margin:16px 0;font-style:italic;color:rgba(240,236,226,0.75);background:rgba(0,212,170,0.03);border-radius:0 8px 8px 0}}
.ref{{font-size:0.85em;color:rgba(0,212,170,0.6);font-style:normal}}
.intention-step{{margin:24px 0;padding:20px;background:rgba(255,255,255,0.02);border-radius:12px;border:1px solid rgba(0,212,170,0.08)}}
.intention-text{{color:rgba(240,236,226,0.8)}}
.code-reveal{{text-align:center;padding:40px;margin:32px 0;background:radial-gradient(ellipse,rgba(0,212,170,0.06),transparent);border:1px solid rgba(0,212,170,0.15);border-radius:16px}}
.code-number{{font-family:'Cinzel',serif;font-size:3.5em;font-weight:700;color:#00D4AA;letter-spacing:12px;text-shadow:0 0 30px rgba(0,212,170,0.3)}}
.code-meta{{font-size:0.9em;color:rgba(240,236,226,0.5);margin-top:8px}}
ul{{margin:16px 0 16px 24px}}
li{{margin-bottom:10px;color:rgba(240,236,226,0.75)}}
.cta{{text-align:center;padding:32px;margin-top:40px;background:rgba(0,212,170,0.05);border-radius:16px;border:1px solid rgba(0,212,170,0.15)}}
.cta a{{display:inline-block;padding:14px 40px;background:linear-gradient(135deg,#00D4AA,#00A88A);color:#040418;font-family:'Cinzel',serif;font-weight:600;text-decoration:none;border-radius:8px;letter-spacing:2px;font-size:0.95em}}
.cta p{{color:rgba(240,236,226,0.5);font-size:0.9em;margin-top:12px}}
</style>
</head>
<body>
<article class="container" itemscope itemtype="https://schema.org/Article">
  <meta itemprop="datePublished" content="{date.today().isoformat()}">
  <meta itemprop="author" content="Quantum Reality Codes">

  <h1 itemprop="headline">{title}</h1>
  <div class="meta">{today} &middot; Quantum Reality Codes &middot; {cat_name}</div>
  <div class="divider"></div>

  <p>There is a powerful pattern to focused intention. The great wisdom traditions do not merely invite us to think positively — they show us <em>how</em> to structure our consciousness for maximum impact. A structured intention for {topic.lower()}, rooted in universal wisdom, carries a frequency that resonates with the quantum field itself. Today, we build such an intention together, step by step, and encode it through Vibrational Encoding into a reality code that serves as your direct signal to the universe.</p>

  <blockquote class="wisdom">"{daily_quote.get('text', '')}"<br><span class="ref">— {daily_quote.get('ref', '')}</span></blockquote>

  <h2>The Structured Intention for {topic.title()}</h2>
  <p>This intention follows time-tested patterns of {cat_name.lower()} as understood across wisdom traditions. Each step is grounded in universal wisdom, ensuring that every word you speak is aligned with the highest frequency available to you.</p>

  {steps_html}

  <h2>Your Reality Code</h2>
  <p>When we encode this intention through Vibrational Encoding — where each letter carries a numeric value (A=1, B=2, through Z=26) — the total value of every letter and digit in this intention reveals a unique vibrational code.</p>

  <div class="code-reveal">
    <div class="code-number">{code}</div>
    <div class="code-meta">Vibrational Value: {total} &middot; Root Number: {root}</div>
    <div class="code-meta" style="margin-top:8px;font-style:italic;max-width:500px;margin-left:auto;margin-right:auto">{root_meaning[:100] if root_meaning else ''}</div>
  </div>

  <h2>How to Amplify Your Reality Code</h2>
  <p>Your reality code is more than a number — it is a compressed signal of your entire intention. Here are ways to keep it active in your daily practice:</p>
  <ul>
    <li>Set your phone lock screen or PIN to the code — every unlock becomes a moment of alignment.</li>
    <li>Set a daily alarm at a time matching the code digits — pause and reconnect with your intention.</li>
    <li>Write the code where you will see it — your mirror, your journal, your desk.</li>
    <li>Whisper the code before sleep and upon waking — anchor it in your subconscious.</li>
    <li>Play the Creation Frequency 37-73 while meditating on your code — amplify your connection.</li>
    <li>Share your code on social media — collective intention amplifies manifestation power.</li>
  </ul>

  <h2>Related Wisdom for {topic.title()}</h2>
  <ul>
    {related_html}
  </ul>

  <h2>The Power of Structured Intention</h2>
  <p>The greatest thinkers, scientists, and spiritual leaders throughout history understood that consciousness shapes reality. From Einstein's observation that "imagination is the preview of life's coming attractions" to the quantum physics principle that the observer affects the observed — the evidence is clear: how you focus your mind matters.</p>
  <p>Every word you speak in intention carries weight. Vibrational Encoding reveals the numeric signature hidden within your words — a signature that connects you to the mathematical fabric of reality itself. Your reality code is the distillation of that signature into a form you can carry with you, meditate upon, and share with others.</p>
  <p>The creation frequency 37-73 is woven into the fabric of reality — from the structure of DNA to the geometry of stars. When you set your intention with structure, encode it vibrationally, and amplify it with the creation frequency, you are participating in the deepest patterns of the universe itself.</p>

  <div class="cta">
    <a href="{site}">Build Your Own Reality Code</a>
    <p>Focused Intention. Vibrational Code. Infinite Connection.</p>
  </div>
</article>
</body>
</html>"""

        print(f"  Blog post generated: {title}")
        return html


if __name__ == "__main__":
    agent = BlogAgent()
    print("Blog Agent ready.")
