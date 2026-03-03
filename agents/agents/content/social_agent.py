"""
Social Agent — The Broadcaster
Generates platform-specific social media content for Instagram, TikTok, Twitter/X, and YouTube.
"""

import json
from datetime import datetime, date
from pathlib import Path

CONFIG_PATH = Path(__file__).parent.parent / "config" / "soul.json"


class SocialAgent:
    """Generates social media content for all platforms."""

    def __init__(self):
        self.soul = self._load_soul()

    def _load_soul(self):
        try:
            with open(CONFIG_PATH, "r") as f:
                return json.load(f)
        except Exception:
            return {}

    def run(self, intention_data=None, code_data=None, wisdom_data=None, campaign_topic=None):
        if not intention_data or not code_data:
            return {"error": "Missing data"}

        code = code_data.get("reality_code", "000000")
        cat_name = intention_data.get("category_name", "Intention")
        steps = intention_data.get("steps", [])
        quote = wisdom_data.get("daily_quote", {}) if wisdom_data else {}
        quote_text = quote.get("text", "")
        quote_ref = quote.get("ref", "")
        analysis = code_data.get("analysis", {})
        root = analysis.get("root_number", 0)
        total = code_data.get("vibrational_total", 0)
        hashtags = " ".join(self.soul.get("hashtags", ["#QuantumRealityCodes"])[:6])
        site = self.soul.get("website", "quantumrealitycodes.com")
        topic_tag = ""
        if campaign_topic:
            topic_tag = f" #{campaign_topic.replace(' ', '').title()}"

        # Extract a powerful one-liner from the intention
        one_liner = steps[0]["text"].split(".")[0] + "." if steps else ""
        closing = steps[-1]["text"].split(".")[0] + "." if steps else ""

        platforms = {
            "instagram": {
                "caption": (
                    f"Today's Reality Code: {code}\n\n"
                    f"\"{quote_text}\"\n— {quote_ref}\n\n"
                    f"{one_liner}\n\n"
                    f"This code was generated through structured intention, "
                    f"encoded using Vibrational Encoding.\n\n"
                    f"Vibrational Value: {total} | Root Number: {root}\n\n"
                    f"Build your own reality code at {site}\n\n"
                    f"{hashtags}{topic_tag}"
                ),
                "story_text": f"Reality Code: {code}\n\n\"{quote_text}\"\n— {quote_ref}",
                "alt_text": f"Reality code {code} for {cat_name} intention with wisdom from {quote_ref}",
                "content_type": "carousel",
                "slides": [
                    f"\"{quote_text}\"\n— {quote_ref}",
                    one_liner,
                    f"Reality Code: {code}",
                    f"Build yours at {site}",
                ],
            },
            "tiktok": {
                "caption": (
                    f"Reality Code {code} — {cat_name}\n\n"
                    f"\"{quote_text}\" — {quote_ref}\n\n"
                    f"{one_liner}\n\n"
                    f"Your intention encoded through Vibrational Encoding.\n"
                    f"{hashtags}{topic_tag} #ManifestationTok #SpiritualTikTok"
                ),
                "hook": f"Your intention has a code. Here's today's: {code}",
                "script": (
                    f"[HOOK] Did you know your intention has a numeric code?\n\n"
                    f"[WISDOM] \"{quote_text}\" — {quote_ref}\n\n"
                    f"[INTENTION] {one_liner}\n\n"
                    f"[REVEAL] When we encode this intention through Vibrational Encoding, "
                    f"the code is {code}.\n\n"
                    f"[CTA] Build your own reality code — link in bio."
                ),
                "sounds": ["ambient meditation", "creation frequency 37-73", "soft piano"],
            },
            "twitter": {
                "thread": [
                    f"Today's Reality Code: {code}\n\n\"{quote_text}\" — {quote_ref}\n\n{hashtags}",
                    f"{one_liner}\n\n{closing}",
                    f"Vibrational Value: {total} | Root: {root}\n\nEvery word carries frequency. Your intention has been encoded.\n\nBuild yours: {site}",
                ],
                "single_tweet": (
                    f"Reality Code: {code}\n\n"
                    f"\"{quote_text}\" — {quote_ref}\n\n"
                    f"Build your own: {site}\n\n"
                    f"{hashtags}"
                ),
            },
            "youtube": {
                "title": f"Reality Code {code} — {cat_name} Intention | Quantum Reality Codes",
                "description": (
                    f"Today's structured intention for {cat_name.lower()}, encoded through Vibrational Encoding.\n\n"
                    f"Reality Code: {code}\n"
                    f"Vibrational Value: {total}\n\n"
                    f"Wisdom: \"{quote_text}\" — {quote_ref}\n\n"
                    f"Build your own reality code at {site}\n\n"
                    f"--- INTENTION ---\n"
                    + "\n\n".join(s["text"] for s in steps) + "\n\n"
                    f"--- END ---\n\n"
                    f"{hashtags}"
                ),
                "tags": self.soul.get("hashtags", []) + [cat_name, "vibrational encoding", "structured intention"],
                "shorts_script": (
                    f"[TEXT ON SCREEN] Reality Code: {code}\n"
                    f"[VOICEOVER] \"{quote_text}\"\n"
                    f"[TEXT] {one_liner}\n"
                    f"[REVEAL] Code: {code}\n"
                    f"[CTA] Build yours — link in description"
                ),
            },
        }

        result = {
            "agent": "social",
            "timestamp": datetime.now().isoformat(),
            "reality_code": code,
            "category": cat_name,
            "campaign_topic": campaign_topic,
            "platforms": platforms,
        }

        print(f"  Social content generated for: {', '.join(platforms.keys())}")
        return result


if __name__ == "__main__":
    agent = SocialAgent()
    print("Social Agent ready.")
