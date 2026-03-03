"""
Telegram Agent — The Quantum Messenger
Generates Telegram-optimised content for community groups and channels.
Outputs Telegram Markdown (MarkdownV2) formatted posts for manual posting.

Content types:
  - Daily Reality Code post
  - Weekly Theme announcement
  - Collective Intention prompt
  - Welcome message for new members
"""

import json
import random
from datetime import datetime, date
from pathlib import Path

CONFIG_PATH = Path(__file__).parent.parent / "config" / "soul.json"


class TelegramAgent:
    """Generates Telegram-formatted community content."""

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
        """Generate Telegram content.

        Args:
            intention_data: Output from IntentionAgent
            code_data: Output from CodeAgent
            wisdom_data: Output from WisdomAgent
            campaign_topic: Optional theme/topic for campaigns
            content_type: 'daily' | 'weekly_intro' | 'collective' | 'welcome'
        """
        dispatch = {
            "daily": self._daily_post,
            "weekly_intro": self._weekly_intro,
            "collective": self._collective_prompt,
            "welcome": self._welcome_message,
        }

        handler = dispatch.get(content_type, self._daily_post)
        content = handler(
            intention_data=intention_data,
            code_data=code_data,
            wisdom_data=wisdom_data,
            campaign_topic=campaign_topic,
        )

        result = {
            "agent": "telegram",
            "timestamp": datetime.now().isoformat(),
            "content_type": content_type,
            "campaign_topic": campaign_topic,
            "content": content,
        }

        print(f"  Telegram content generated: {content_type}")
        return result

    def _daily_post(self, intention_data=None, code_data=None,
                    wisdom_data=None, campaign_topic=None):
        """Generate a daily Reality Code post for Telegram."""
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
        topic_tag = f"  #{campaign_topic.replace(' ', '').title()}" if campaign_topic else ""

        # Build the intention excerpt (first and last lines)
        intention_excerpt = ""
        if steps:
            first_line = steps[0]["text"].split(".")[0] + "." if steps[0].get("text") else ""
            intention_excerpt = first_line

        # Pattern insights
        pattern_text = ""
        if patterns:
            pattern_text = "\n".join(f"    {p}" for p in patterns[:2])
            pattern_text = f"\n\n{pattern_text}"

        post = (
            f"✨ *TODAY'S REALITY CODE* ✨\n"
            f"\n"
            f"━━━━━━━━━━━━━━━━━━━━━\n"
            f"         *{code}*\n"
            f"━━━━━━━━━━━━━━━━━━━━━\n"
            f"\n"
            f"📖 _{quote_text}_\n"
            f"    — {quote_ref}\n"
            f"\n"
            f"🔮 *Category:* {cat_name}\n"
            f"⚡ *Vibrational Value:* {total}\n"
            f"🌀 *Root Number:* {root} — {root_meaning.split('.')[0] if root_meaning else ''}\n"
            f"{pattern_text}\n"
            f"\n"
            f"📝 *Intention:*\n"
            f"_{intention_excerpt}_\n"
            f"\n"
            f"━━━━━━━━━━━━━━━━━━━━━\n"
            f"\n"
            f"🧘 *How to use this code:*\n"
            f"1️⃣ Meditate on the code for 3-5 minutes\n"
            f"2️⃣ Listen to the 37-73 Hz creation frequency\n"
            f"3️⃣ Share this post to amplify the collective intention\n"
            f"\n"
            f"🌐 Build your own: {site}\n"
            f"\n"
            f"#QuantumRealityCodes #RealityCode{code} #ManifestWithIntention{topic_tag}"
        )

        return {
            "post": post,
            "code": code,
            "category": cat_name,
            "plain_text": f"Today's Reality Code: {code} — {cat_name}. Vibrational Value: {total}. {quote_text} — {quote_ref}",
        }

    def _weekly_intro(self, intention_data=None, code_data=None,
                      wisdom_data=None, campaign_topic=None):
        """Generate a weekly theme introduction post."""
        theme = campaign_topic or "Quantum Alignment"
        quote = wisdom_data.get("daily_quote", {}) if wisdom_data else {}
        quote_text = quote.get("text", "")
        quote_ref = quote.get("ref", "")
        site = self.soul.get("website", "quantumrealitycodes.com")

        # Theme descriptions for common topics
        theme_descriptions = {
            "core alignment": "This week we return to the foundation — aligning our intentions with our deepest truth. Every great manifestation begins with self-knowledge.",
            "abundance activation": "This week we activate the abundance frequency. The universe is infinitely generous — our task is to tune into its flow.",
            "energy shield": "This week we build our energetic boundaries. Protection isn't fear — it's wisdom. We shield our energy so our intentions remain pure.",
            "healing frequency": "This week we channel the healing vibration. Every cell in your body responds to your intention. We heal from the inside out.",
            "divine connection": "This week we deepen our connection to Source. The quantum field is always available — we simply open the channel wider.",
            "gratitude amplification": "This week we amplify through gratitude. The fastest way to manifest is to be deeply grateful for what already is.",
            "relationship resonance": "This week we harmonise our relationships. When we change our internal frequency, our external connections transform.",
            "purpose activation": "This week we activate our life's purpose. Your purpose isn't something you find — it's something you remember.",
        }

        description = theme_descriptions.get(
            theme.lower(),
            f"This week we focus on {theme}. Every day brings a new Reality Code designed to deepen your practice and strengthen your collective resonance."
        )

        post = (
            f"🌟 *WEEKLY THEME: {theme.upper()}* 🌟\n"
            f"\n"
            f"━━━━━━━━━━━━━━━━━━━━━\n"
            f"\n"
            f"📖 _{quote_text}_\n"
            f"    — {quote_ref}\n"
            f"\n"
            f"━━━━━━━━━━━━━━━━━━━━━\n"
            f"\n"
            f"{description}\n"
            f"\n"
            f"📅 *This week's schedule:*\n"
            f"  Mon — Daily Code + Intention Building\n"
            f"  Tue — Meditation with Creation Frequency\n"
            f"  Wed — Wisdom Deep-Dive\n"
            f"  Thu — Share Your Story\n"
            f"  Fri — Collective Code Day\n"
            f"  Sat — Invite a Friend\n"
            f"  Sun — Reflection + Next Week Preview\n"
            f"\n"
            f"🎯 *Your action:*\n"
            f"React with ✨ if you're joining this week's journey!\n"
            f"\n"
            f"🌐 Build your Reality Code: {site}\n"
            f"\n"
            f"#QuantumRealityCodes #{theme.replace(' ', '')} #WeeklyChallenge"
        )

        return {
            "post": post,
            "theme": theme,
            "description": description,
        }

    def _collective_prompt(self, intention_data=None, code_data=None,
                           wisdom_data=None, campaign_topic=None):
        """Generate a collective intention / engagement prompt."""
        code = code_data.get("reality_code", "000000") if code_data else "000000"
        theme = campaign_topic or "collective alignment"

        prompts = [
            {
                "question": "What are you manifesting today?",
                "instruction": "Share your intention in the comments below. When we speak our intentions aloud, the quantum field responds.",
                "cta": "Type your intention below — let's amplify each other's frequency!",
            },
            {
                "question": "What shifted for you this week?",
                "instruction": "Every manifestation begins with a shift in awareness. Share what you noticed — even the smallest sign counts.",
                "cta": "Drop your biggest insight or sign from this week below 👇",
            },
            {
                "question": "Who are you becoming?",
                "instruction": "The most powerful intention isn't about getting — it's about becoming. Who is the version of you that already has what you desire?",
                "cta": "Describe the version of you that already lives your dream reality 🌟",
            },
            {
                "question": "What are you grateful for right now?",
                "instruction": "Gratitude is the highest vibrational frequency. When we express gratitude collectively, we create a field of abundance.",
                "cta": "Share 3 things you're grateful for right now 🙏",
            },
            {
                "question": "What code are you meditating on?",
                "instruction": "Share your Reality Code and what intention it represents. When others meditate on your code with you, the power multiplies.",
                "cta": f"Today's collective code is *{code}* — meditate on it for 5 minutes and share what you felt 🧘",
            },
        ]

        chosen = random.choice(prompts)

        post = (
            f"💬 *COLLECTIVE INTENTION* 💬\n"
            f"\n"
            f"━━━━━━━━━━━━━━━━━━━━━\n"
            f"\n"
            f"❓ *{chosen['question']}*\n"
            f"\n"
            f"{chosen['instruction']}\n"
            f"\n"
            f"━━━━━━━━━━━━━━━━━━━━━\n"
            f"\n"
            f"👉 {chosen['cta']}\n"
            f"\n"
            f"#QuantumRealityCodes #CollectiveIntention #ManifestTogether"
        )

        return {
            "post": post,
            "prompt_type": chosen["question"],
            "code": code,
        }

    def _welcome_message(self, **kwargs):
        """Generate a welcome message for new Telegram group members."""
        site = self.soul.get("website", "quantumrealitycodes.com")

        post = (
            f"🌟 *Welcome to Quantum Reality Codes!* 🌟\n"
            f"\n"
            f"You've just joined a community of conscious creators who use structured intention and vibrational encoding to manifest their reality.\n"
            f"\n"
            f"━━━━━━━━━━━━━━━━━━━━━\n"
            f"\n"
            f"🚀 *Get started in 3 steps:*\n"
            f"\n"
            f"1️⃣ *Create your first Reality Code*\n"
            f"   Visit {site} and build your intention\n"
            f"\n"
            f"2️⃣ *Share your code here*\n"
            f"   Post your 6-digit code and tell us what you're manifesting\n"
            f"\n"
            f"3️⃣ *Amplify with the group*\n"
            f"   Meditate on today's collective code (posted daily)\n"
            f"   Listen to the 37-73 Hz creation frequency\n"
            f"\n"
            f"━━━━━━━━━━━━━━━━━━━━━\n"
            f"\n"
            f"📖 *What is a Reality Code?*\n"
            f"Every word carries a vibrational frequency. When you write a structured intention, each letter is encoded (A=1, B=2...Z=26) and the total becomes your unique 6-digit Reality Code — a numerical anchor for your manifestation.\n"
            f"\n"
            f"🔑 *Community Guidelines:*\n"
            f"  • Be supportive — we amplify each other\n"
            f"  • Share your codes, intentions, and wins\n"
            f"  • No spam, no negativity, no fear-based content\n"
            f"  • What's shared here stays here — respect privacy\n"
            f"\n"
            f"Welcome aboard, conscious creator! ✨\n"
            f"\n"
            f"#QuantumRealityCodes #Welcome #ConsciousCreation"
        )

        return {
            "post": post,
            "type": "welcome",
        }


if __name__ == "__main__":
    agent = TelegramAgent()
    print("Telegram Agent ready.")
    print("\nSample welcome message:")
    result = agent.run(content_type="welcome")
    print(result["content"]["post"])
