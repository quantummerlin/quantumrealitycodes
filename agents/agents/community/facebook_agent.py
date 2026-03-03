"""
Facebook Agent — The Community Builder
Generates Facebook Group-optimised content for engagement and growth.
Outputs longer-form, storytelling-style posts that perform well on Facebook.

Content types:
  - Daily Reality Code post (story-driven, comment-friendly)
  - Weekly Theme post (engagement hooks, question-driven)
  - Engagement prompt (discussion starters, testimonial requests)
  - Facebook Event description (collective intention sessions)
"""

import json
import random
from datetime import datetime, date
from pathlib import Path

CONFIG_PATH = Path(__file__).parent.parent / "config" / "soul.json"


class FacebookAgent:
    """Generates Facebook-optimised community content."""

    def __init__(self):
        self.soul = self._load_soul()

    def _load_soul(self):
        try:
            with open(CONFIG_PATH, "r") as f:
                return json.load(f)
        except Exception:
            return {}

    def run(self, intention_data=None, code_data=None, wisdom_data=None,
            campaign_topic=None, content_type="daily"):
        """Generate Facebook content.

        Args:
            intention_data: Output from IntentionAgent
            code_data: Output from CodeAgent
            wisdom_data: Output from WisdomAgent
            campaign_topic: Optional theme/topic for campaigns
            content_type: 'daily' | 'weekly_theme' | 'engagement' | 'event'
        """
        dispatch = {
            "daily": self._daily_post,
            "weekly_theme": self._weekly_theme,
            "engagement": self._engagement_post,
            "event": self._event_description,
        }

        handler = dispatch.get(content_type, self._daily_post)
        content = handler(
            intention_data=intention_data,
            code_data=code_data,
            wisdom_data=wisdom_data,
            campaign_topic=campaign_topic,
        )

        result = {
            "agent": "facebook",
            "timestamp": datetime.now().isoformat(),
            "content_type": content_type,
            "campaign_topic": campaign_topic,
            "content": content,
        }

        print(f"  Facebook content generated: {content_type}")
        return result

    def _daily_post(self, intention_data=None, code_data=None,
                    wisdom_data=None, campaign_topic=None):
        """Generate a daily Reality Code post for Facebook Group."""
        code = code_data.get("reality_code", "000000") if code_data else "000000"
        total = code_data.get("vibrational_total", 0) if code_data else 0
        analysis = code_data.get("analysis", {}) if code_data else {}
        root = analysis.get("root_number", 0)
        root_meaning = analysis.get("root_meaning", "")
        patterns = analysis.get("patterns", [])

        cat_name = intention_data.get("category_name", "Intention") if intention_data else "Intention"
        steps = intention_data.get("steps", []) if intention_data else []

        quote = wisdom_data.get("daily_quote", {}) if wisdom_data else {}
        quote_text = quote.get("text", "")
        quote_ref = quote.get("ref", "")

        site = self.soul.get("website", "quantumrealitycodes.com")

        # Build intention narrative
        intention_narrative = ""
        if steps:
            intention_narrative = steps[0]["text"].split(".")[0] + "."
            if len(steps) > 1:
                intention_narrative += " " + steps[-1]["text"].split(".")[0] + "."

        # Pattern insight for story
        pattern_narrative = ""
        if patterns:
            pattern_narrative = f"\n\nSomething beautiful showed up in today's code: {patterns[0]}"

        # Opening hooks — Facebook favours strong first lines
        hooks = [
            f"Today's Reality Code just dropped, and the patterns in this one are remarkable.",
            f"I just generated today's code and had to share this with the group immediately.",
            f"Here's what happens when you encode a structured intention for {cat_name.lower()}.",
            f"The universe is speaking through numbers today. Here's what came through.",
            f"Every word carries frequency. Today, {total:,} vibrational units condensed into 6 digits.",
        ]

        hook = random.choice(hooks)

        post = (
            f"{hook}\n"
            f"\n"
            f"━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n"
            f"\n"
            f"TODAY'S REALITY CODE: {code}\n"
            f"Category: {cat_name}\n"
            f"Vibrational Value: {total:,}\n"
            f"Root Number: {root}\n"
            f"\n"
            f"━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n"
            f"\n"
            f'"{quote_text}"\n'
            f"— {quote_ref}\n"
            f"\n"
            f"{intention_narrative}"
            f"{pattern_narrative}\n"
            f"\n"
            f"Root Number {root} represents: {root_meaning.split('.')[0] if root_meaning else 'deep alignment'}.\n"
            f"\n"
            f"━━━━ HOW TO USE THIS CODE ━━━━\n"
            f"\n"
            f"1. Close your eyes and breathe deeply 3 times\n"
            f"2. Repeat the code silently: {code}\n"
            f"3. Hold the intention in your heart for 3-5 minutes\n"
            f"4. If you have the app, listen to the 37-73 Hz creation frequency while you meditate\n"
            f"5. Share this post to amplify the collective intention\n"
            f"\n"
            f"Drop a {self._random_emoji()} in the comments if you meditated on this code today.\n"
            f"\n"
            f"Build your own Reality Code (free, forever): {site}\n"
            f"\n"
            f"#QuantumRealityCodes #RealityCode #ManifestWithIntention #ConsciousCreation"
        )

        return {
            "post": post,
            "code": code,
            "category": cat_name,
            "card_overlay_text": f"REALITY CODE: {code}\n{cat_name}\n\"{quote_text}\" — {quote_ref}",
        }

    def _weekly_theme(self, intention_data=None, code_data=None,
                      wisdom_data=None, campaign_topic=None):
        """Generate a weekly theme announcement post."""
        theme = campaign_topic or "Quantum Alignment"
        quote = wisdom_data.get("daily_quote", {}) if wisdom_data else {}
        quote_text = quote.get("text", "")
        quote_ref = quote.get("ref", "")
        site = self.soul.get("website", "quantumrealitycodes.com")

        # Theme deep-dives
        theme_stories = {
            "core alignment": (
                "Before you can manifest anything external, you need to align with who you truly are. "
                "This week, every Reality Code is designed to help you strip away the layers of conditioning "
                "and reconnect with your authentic self.\n\n"
                "The quantum field doesn't respond to who you pretend to be. It responds to who you ARE."
            ),
            "abundance activation": (
                "Abundance isn't something you attract — it's something you stop blocking. "
                "This week, we're using structured intention to dissolve the scarcity patterns "
                "that keep us separate from the infinite flow.\n\n"
                "The universe doesn't know lack. Only your beliefs do."
            ),
            "energy shield": (
                "Your energy is your most precious resource. Without boundaries, even the strongest intention "
                "gets diluted by the noise around you. This week, we build our energetic infrastructure.\n\n"
                "Protection isn't fear. It's wisdom in action."
            ),
            "healing frequency": (
                "Your body is listening to every thought you think. Every cell is eavesdropping on your intentions. "
                "This week, we direct our vibrational encoding toward healing — not just physical, but emotional, "
                "mental, and energetic.\n\n"
                "Healing doesn't happen to you. It happens through you."
            ),
        }

        story = theme_stories.get(
            theme.lower(),
            f"This week, we dive deep into {theme}. Each day's Reality Code is calibrated to this theme, "
            f"building momentum through structured intention. By the end of the week, your vibrational "
            f"signature will have shifted.\n\nConsistency is the secret to manifestation."
        )

        post = (
            f"NEW WEEK. NEW FREQUENCY. NEW REALITY.\n"
            f"\n"
            f"This week's theme: {theme.upper()}\n"
            f"\n"
            f"━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n"
            f"\n"
            f'"{quote_text}"\n'
            f"— {quote_ref}\n"
            f"\n"
            f"━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n"
            f"\n"
            f"{story}\n"
            f"\n"
            f"HERE'S THE PLAN:\n"
            f"\n"
            f"Mon — New Reality Code + intention setting\n"
            f"Tue — Meditation challenge (37-73 Hz frequency)\n"
            f"Wed — Science behind {theme.lower()}\n"
            f"Thu — Share your manifestation story\n"
            f"Fri — Group intention session (we all meditate on the same code)\n"
            f"Sat — Invite someone new to the group\n"
            f"Sun — Weekly reflection + results\n"
            f"\n"
            f"Are you in for this week? Comment \"I'M IN\" below and tag someone who needs this.\n"
            f"\n"
            f"Build your Reality Code: {site}\n"
            f"\n"
            f"#QuantumRealityCodes #{theme.replace(' ', '')} #WeeklyChallenge #Manifestation"
        )

        return {
            "post": post,
            "theme": theme,
            "story": story,
        }

    def _engagement_post(self, intention_data=None, code_data=None,
                         wisdom_data=None, campaign_topic=None):
        """Generate an engagement / discussion post."""
        theme = campaign_topic or "manifestation"
        site = self.soul.get("website", "quantumrealitycodes.com")

        prompts = [
            {
                "hook": "Be honest — what's the biggest block you're facing in your manifestation practice right now?",
                "body": (
                    "Sometimes the most powerful thing we can do is name the resistance.\n\n"
                    "When you speak your block out loud (or type it), you begin to dissolve its power over you. "
                    "The quantum field can't shift what you won't acknowledge.\n\n"
                    "Share your biggest block below. No judgement here — only amplification of your courage to be honest."
                ),
                "cta": "Drop your answer below. Let's support each other through it.",
            },
            {
                "hook": "MANIFESTATION CHECK-IN: What has shown up for you since joining this group?",
                "body": (
                    "Signs, synchronicities, unexpected opportunities, shifted perspectives, "
                    "answered intentions, new connections...\n\n"
                    "The universe communicates in whispers before it shouts. Have you been paying attention?\n\n"
                    "Share what's been showing up. Your testimony becomes fuel for someone else's faith."
                ),
                "cta": "Tell us: what manifested? Even the small signs count.",
            },
            {
                "hook": "YOUR REALITY CODE STORY: Share your most powerful code experience.",
                "body": (
                    "A Reality Code is more than just numbers. It's the compressed vibrational signature "
                    "of your deepest intention.\n\n"
                    "Some of you have been meditating on your codes daily. Some have been sharing them "
                    "with friends. Some have seen real shifts.\n\n"
                    "We want to hear your story. How has Reality Codes impacted your practice?"
                ),
                "cta": "Share your code and your story below. Let's celebrate the wins together.",
            },
            {
                "hook": f"If you could manifest ONE thing this week with absolute certainty, what would it be?",
                "body": (
                    "Don't filter yourself. Don't negotiate with the universe. "
                    "Don't say what you think you should want.\n\n"
                    "What do you ACTUALLY want?\n\n"
                    "Write it below as a declaration. Not a wish. Not a hope. A statement of fact.\n\n"
                    "\"I am...\" — not \"I want...\" or \"I hope...\""
                ),
                "cta": "Write your declaration below. We'll amplify it together.",
            },
            {
                "hook": "THREE WORDS to describe your ideal reality. Go.",
                "body": (
                    "Don't overthink it. The first three words that come to mind.\n\n"
                    "These three words carry your vibrational signature. "
                    "They reveal what your soul is yearning for right now.\n\n"
                    "After you post yours, go encode them at quantumrealitycodes.com "
                    "and share the Reality Code that comes back."
                ),
                "cta": "Three words. That's it. Drop them below.",
            },
        ]

        chosen = random.choice(prompts)

        post = (
            f"{chosen['hook']}\n"
            f"\n"
            f"━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n"
            f"\n"
            f"{chosen['body']}\n"
            f"\n"
            f"━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n"
            f"\n"
            f"{chosen['cta']}\n"
            f"\n"
            f"#QuantumRealityCodes #ConsciousCreation #Manifestation"
        )

        return {
            "post": post,
            "prompt_type": chosen["hook"][:50],
        }

    def _event_description(self, intention_data=None, code_data=None,
                           wisdom_data=None, campaign_topic=None):
        """Generate a Facebook Event description for collective intention sessions."""
        code = code_data.get("reality_code", "000000") if code_data else "000000"
        theme = campaign_topic or "Collective Reality Code Session"
        site = self.soul.get("website", "quantumrealitycodes.com")

        quote = wisdom_data.get("daily_quote", {}) if wisdom_data else {}
        quote_text = quote.get("text", "When two or more minds focus on the same intention, the vibrational power multiplies exponentially.")
        quote_ref = quote.get("ref", "Quantum Resonance Principle")

        description = (
            f"COLLECTIVE REALITY CODE SESSION\n"
            f"Theme: {theme}\n"
            f"\n"
            f"━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n"
            f"\n"
            f'"{quote_text}"\n'
            f"— {quote_ref}\n"
            f"\n"
            f"━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n"
            f"\n"
            f"WHAT IS THIS?\n"
            f"\n"
            f"A collective intention session where everyone in the group meditates "
            f"on the same Reality Code at the same time. Research on group intention "
            f"(the 'Circle of Eight' studies) shows that focused group consciousness "
            f"produces measurable effects.\n"
            f"\n"
            f"TODAY'S COLLECTIVE CODE: {code}\n"
            f"\n"
            f"HOW IT WORKS:\n"
            f"\n"
            f"1. At the scheduled time, find a quiet space\n"
            f"2. Open quantumrealitycodes.com and go to the Amplify page\n"
            f"3. Play the 37-73 Hz creation frequency\n"
            f"4. Close your eyes and hold the code {code} in your mind\n"
            f"5. Meditate for 15 minutes\n"
            f"6. After the session, come back and share what you experienced\n"
            f"\n"
            f"The more people who join, the more powerful the collective field becomes.\n"
            f"\n"
            f"Free to join. No account needed. Just intention.\n"
            f"\n"
            f"{site}\n"
            f"\n"
            f"#QuantumRealityCodes #CollectiveIntention #GroupMeditation"
        )

        return {
            "description": description,
            "title": f"Collective Reality Code Session — {theme}",
            "code": code,
        }

    def _random_emoji(self):
        """Return a random engagement emoji."""
        emojis = ["✨", "🔮", "🌟", "⚡", "🧘", "🙏", "💫", "🌀"]
        return random.choice(emojis)


if __name__ == "__main__":
    agent = FacebookAgent()
    print("Facebook Agent ready.")
    result = agent.run(content_type="engagement")
    print(result["content"]["post"])
