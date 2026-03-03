"""
Email Agent — The Messenger
Creates email newsletter content with intention, code, and wisdom quotes.
"""

import json
from datetime import datetime, date
from pathlib import Path

CONFIG_PATH = Path(__file__).parent.parent / "config" / "soul.json"


class EmailAgent:
    """Generates email newsletter HTML."""

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

        code = code_data.get("reality_code", "000000")
        total = code_data.get("vibrational_total", 0)
        cat_name = intention_data.get("category_name", "Intention")
        steps = intention_data.get("steps", [])
        analysis = code_data.get("analysis", {})
        root = analysis.get("root_number", 0)
        root_meaning = analysis.get("root_meaning", "")
        daily_quote = wisdom_data.get("daily_quote", {}) if wisdom_data else {}
        site = self.soul.get("website", "quantumrealitycodes.com")
        today_str = date.today().strftime("%B %d, %Y")
        subject_topic = topic.title() if topic else cat_name

        # Build intention HTML
        intention_html = ""
        for step in steps:
            w = step.get("wisdom", {})
            intention_html += f"""
      <tr><td style="padding:16px 24px;background:rgba(26,26,94,0.15);border-radius:8px;margin-bottom:12px">
        <p style="font-family:'Cinzel',Georgia,serif;font-size:14px;color:#00D4AA;margin:0 0 6px;letter-spacing:1px">{step['title']}</p>
        <p style="font-style:italic;color:#999;font-size:14px;margin:0 0 8px">"{w.get('text','')}" — {w.get('ref','')}</p>
        <p style="color:#e0dcd2;font-size:16px;line-height:1.6;margin:0">{step['text']}</p>
      </td></tr>
      <tr><td style="height:12px"></td></tr>"""

        html = f"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Reality Code {code} — {subject_topic} | Quantum Reality Codes</title>
</head>
<body style="margin:0;padding:0;background:#040418;font-family:Georgia,'Cormorant Garamond',serif">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#040418">
<tr><td align="center" style="padding:20px">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%">

  <!-- Header -->
  <tr><td style="text-align:center;padding:40px 24px 20px">
    <p style="font-family:'Cinzel',Georgia,serif;font-size:12px;letter-spacing:6px;color:rgba(0,212,170,0.6);text-transform:uppercase;margin:0">Quantum Reality Codes</p>
    <div style="width:80px;height:1px;background:linear-gradient(90deg,transparent,#00D4AA,transparent);margin:16px auto"></div>
    <h1 style="font-family:'Cinzel',Georgia,serif;font-size:24px;color:#00D4AA;margin:0;line-height:1.4">Reality Code: {code}</h1>
    <p style="color:rgba(240,236,226,0.5);font-size:14px;margin:8px 0 0">{today_str} &middot; {cat_name}</p>
  </td></tr>

  <!-- Daily Wisdom -->
  <tr><td style="padding:16px 24px">
    <table width="100%" cellpadding="0" cellspacing="0" style="background:rgba(0,212,170,0.05);border:1px solid rgba(0,212,170,0.15);border-radius:12px">
    <tr><td style="padding:24px;text-align:center">
      <p style="font-style:italic;color:#f0ece2;font-size:18px;line-height:1.6;margin:0">"{daily_quote.get('text','')}"</p>
      <p style="color:rgba(0,212,170,0.7);font-size:14px;margin:8px 0 0">— {daily_quote.get('ref','')}</p>
    </td></tr>
    </table>
  </td></tr>

  <!-- Intro -->
  <tr><td style="padding:16px 24px">
    <p style="color:rgba(240,236,226,0.8);font-size:16px;line-height:1.7">
      Today's intention follows the universal pattern of <strong style="color:#00D4AA">{cat_name.lower()}</strong>.
      Each step is grounded in wisdom, and the complete intention has been encoded through
      Vibrational Encoding into a reality code. Set it, meditate on it, and carry it with you.
    </p>
  </td></tr>

  <!-- Intention Steps -->
  {intention_html}

  <!-- Code Reveal -->
  <tr><td style="padding:24px;text-align:center">
    <table width="100%" cellpadding="0" cellspacing="0" style="background:radial-gradient(ellipse,rgba(0,212,170,0.08),rgba(4,4,24,0.5));border:1px solid rgba(0,212,170,0.2);border-radius:16px">
    <tr><td style="padding:32px;text-align:center">
      <p style="font-family:'Cinzel',Georgia,serif;font-size:11px;letter-spacing:4px;color:rgba(0,212,170,0.6);text-transform:uppercase;margin:0 0 12px">Your Reality Code</p>
      <p style="font-family:'Cinzel',Georgia,serif;font-size:48px;font-weight:700;color:#00D4AA;letter-spacing:10px;margin:0;text-shadow:0 0 20px rgba(0,212,170,0.3)">{code}</p>
      <p style="color:rgba(240,236,226,0.5);font-size:13px;margin:12px 0 0">Vibrational: {total} &middot; Root: {root}</p>
      <p style="color:rgba(0,212,170,0.5);font-size:13px;font-style:italic;margin:8px 0 0;max-width:400px;display:inline-block">{root_meaning[:80] if root_meaning else ''}</p>
    </td></tr>
    </table>
  </td></tr>

  <!-- Amplify -->
  <tr><td style="padding:16px 24px">
    <p style="font-family:'Cinzel',Georgia,serif;font-size:16px;color:#00D4AA;margin:0 0 12px">Amplify Your Code</p>
    <p style="color:rgba(240,236,226,0.7);font-size:15px;line-height:1.7;margin:0">
      Set your phone PIN to <strong>{code}</strong>. Write it where you'll see it daily.
      Play the Creation Frequency 37-73 while meditating on your code.
      Share it on social media — collective intention amplifies manifestation power.
    </p>
  </td></tr>

  <!-- CTA -->
  <tr><td style="padding:24px;text-align:center">
    <a href="{site}" style="display:inline-block;padding:14px 36px;background:linear-gradient(135deg,#00D4AA,#00A88A);color:#040418;font-family:'Cinzel',Georgia,serif;font-weight:600;text-decoration:none;border-radius:8px;letter-spacing:2px;font-size:14px">Build Your Own Reality Code</a>
  </td></tr>

  <!-- Footer -->
  <tr><td style="padding:24px;text-align:center;border-top:1px solid rgba(0,212,170,0.1)">
    <p style="color:rgba(240,236,226,0.3);font-size:12px;margin:0">Quantum Reality Codes — Focused Intention. Vibrational Code. Infinite Connection.</p>
    <p style="color:rgba(240,236,226,0.2);font-size:11px;margin:8px 0 0">{site}</p>
  </td></tr>

</table>
</td></tr>
</table>
</body>
</html>"""

        print(f"  Email newsletter generated: Reality Code {code}")
        return html


if __name__ == "__main__":
    agent = EmailAgent()
    print("Email Agent ready.")
