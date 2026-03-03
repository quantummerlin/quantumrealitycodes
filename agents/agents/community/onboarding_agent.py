"""
Onboarding Agent — The Welcome Guide
Generates welcome sequences, FAQ content, onboarding flows, and
member spotlight templates to help new community members get started.

Content types:
  - Welcome message (pinned post / welcome bot message)
  - "Start Here" guide (3-step intro flow)
  - FAQ content (common questions about Reality Codes)
  - New Member Spotlight template (weekly feature post)
"""

import json
from datetime import datetime
from pathlib import Path

CONFIG_PATH = Path(__file__).parent.parent / "config" / "soul.json"


class OnboardingAgent:
    """Generates community onboarding and welcome content."""

    def __init__(self):
        self.soul = self._load_soul()

    def _load_soul(self):
        try:
            with open(CONFIG_PATH, "r") as f:
                return json.load(f)
        except Exception:
            return {}

    def run(self, platform="all"):
        """Generate the complete onboarding package.

        Args:
            platform: 'telegram' | 'facebook' | 'all'
        """
        site = self.soul.get("website", "quantumrealitycodes.com")

        welcome = self._welcome_content(site)
        start_here = self._start_here_guide(site)
        faq = self._faq_content(site)
        spotlight = self._spotlight_template(site)
        rules = self._community_rules()

        result = {
            "agent": "onboarding",
            "timestamp": datetime.now().isoformat(),
            "platform": platform,
            "welcome": welcome,
            "start_here": start_here,
            "faq": faq,
            "spotlight": spotlight,
            "rules": rules,
        }

        # Filter by platform if specified
        if platform != "all":
            for key in ["welcome", "start_here", "spotlight"]:
                if isinstance(result[key], dict) and platform in result[key]:
                    result[key] = result[key][platform]

        print(f"  Onboarding package generated for: {platform}")
        return result

    def _welcome_content(self, site):
        """Generate welcome messages for both platforms."""
        telegram = (
            f"🌟 *Welcome to Quantum Reality Codes!* 🌟\n"
            f"\n"
            f"You've joined a community of conscious creators who use structured intention and vibrational encoding to manifest their reality.\n"
            f"\n"
            f"━━━━━━━━━━━━━━━━━━━━━\n"
            f"\n"
            f"🚀 *Get started in 3 steps:*\n"
            f"\n"
            f"1️⃣ Visit {site} and create your first Reality Code\n"
            f"2️⃣ Share your code in this group\n"
            f"3️⃣ Meditate on today's collective code (posted daily)\n"
            f"\n"
            f"━━━━━━━━━━━━━━━━━━━━━\n"
            f"\n"
            f"📖 *What are Reality Codes?*\n"
            f"Every word has a vibrational value (A=1, B=2...Z=26). When you write a structured intention, the letters are encoded into a 6-digit code — your Reality Code. It's a numerical anchor for your manifestation.\n"
            f"\n"
            f"🔑 *Quick rules:*\n"
            f"  • Be supportive and respectful\n"
            f"  • Share codes, intentions, and wins\n"
            f"  • No spam, hate, or fear-based content\n"
            f"\n"
            f"Introduce yourself below! Tell us: what are you manifesting? ✨"
        )

        facebook = (
            f"WELCOME TO QUANTUM REALITY CODES\n"
            f"\n"
            f"━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n"
            f"\n"
            f"You just joined a group of people who are actively manifesting their reality "
            f"using structured intention and vibrational encoding.\n"
            f"\n"
            f"This isn't passive consumption — this is practice.\n"
            f"\n"
            f"HERE'S HOW TO GET STARTED:\n"
            f"\n"
            f"Step 1: Visit {site} and create your first Reality Code\n"
            f"   - Choose an intention category\n"
            f"   - Follow the guided structure\n"
            f"   - Generate your unique 6-digit code\n"
            f"\n"
            f"Step 2: Share your code in this group\n"
            f"   - Post your code and tell us what you're manifesting\n"
            f"   - When others see your code, they can meditate on it with you\n"
            f"\n"
            f"Step 3: Join the daily practice\n"
            f"   - Every day, we post a collective Reality Code\n"
            f"   - Meditate on it with the 37-73 Hz creation frequency\n"
            f"   - Share your experiences and insights\n"
            f"\n"
            f"WHAT IS A REALITY CODE?\n"
            f"\n"
            f"Every letter has a vibrational value (A=1, B=2, all the way to Z=26). "
            f"When you write a structured intention, each letter is encoded and totaled. "
            f"The result is your 6-digit Reality Code — a numerical anchor for your manifestation.\n"
            f"\n"
            f"It's completely free. No sign-up required. No ads. Just intention.\n"
            f"\n"
            f"━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n"
            f"\n"
            f"Introduce yourself in the comments! Tell us:\n"
            f"1. What's your name?\n"
            f"2. What brought you here?\n"
            f"3. What are you manifesting right now?\n"
            f"\n"
            f"#QuantumRealityCodes #Welcome #NewMember"
        )

        return {"telegram": telegram, "facebook": facebook}

    def _start_here_guide(self, site):
        """Generate a comprehensive 'Start Here' guide."""
        telegram = (
            f"📌 *START HERE — Complete Guide* 📌\n"
            f"\n"
            f"*What is Quantum Reality Codes?*\n"
            f"A free web app that converts your structured intentions into 6-digit vibrational codes. These codes serve as numerical anchors for meditation and manifestation.\n"
            f"\n"
            f"━━━━━━━━━━━━━━━━━━━━━\n"
            f"\n"
            f"*Step 1: Create Your Code* (2 minutes)\n"
            f"🔗 {site}\n"
            f"  • Choose from 12+ intention categories\n"
            f"  • Follow the guided structure (4-6 steps)\n"
            f"  • Each step includes a wisdom quote to inspire you\n"
            f"  • Your intention is encoded: A=1, B=2...Z=26\n"
            f"  • Result: your unique 6-digit Reality Code\n"
            f"\n"
            f"*Step 2: Amplify Your Code* (5-15 minutes)\n"
            f"  • Go to the Amplify page on the website\n"
            f"  • Play the 37-73 Hz creation frequency\n"
            f"  • Meditate on your code for 5-15 minutes\n"
            f"  • The frequency aligns your vibration with creative energy\n"
            f"\n"
            f"*Step 3: Share & Multiply* (1 minute)\n"
            f"  • Post your code in this group\n"
            f"  • When others meditate on your code, the effect amplifies\n"
            f"  • Join the daily collective code meditation\n"
            f"\n"
            f"━━━━━━━━━━━━━━━━━━━━━\n"
            f"\n"
            f"*Bonus features:*\n"
            f"  📓 Journal — track your manifestations (saved on your device)\n"
            f"  📚 Wisdom Library — searchable database of 150+ wisdom quotes\n"
            f"  🔬 Science Pages — research behind the method\n"
            f"  📱 Install as app — works offline on your phone\n"
            f"\n"
            f"Questions? Ask in the group — we're here to help! ✨"
        )

        facebook = (
            f"📌 START HERE — EVERYTHING YOU NEED TO KNOW 📌\n"
            f"\n"
            f"━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n"
            f"\n"
            f"WHAT IS QUANTUM REALITY CODES?\n"
            f"\n"
            f"A free web app that converts structured intentions into 6-digit vibrational codes. "
            f"These codes become numerical anchors for your meditation and manifestation practice.\n"
            f"\n"
            f"Website: {site}\n"
            f"\n"
            f"━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n"
            f"\n"
            f"HOW IT WORKS (3 STEPS)\n"
            f"\n"
            f"STEP 1: CREATE YOUR CODE\n"
            f"Visit {site} and:\n"
            f"- Choose an intention category (Abundance, Healing, Protection, etc.)\n"
            f"- Follow the guided structure (4-6 steps with wisdom quotes)\n"
            f"- Your intention gets encoded using Vibrational Encoding (A=1, B=2...Z=26)\n"
            f"- Generate your unique 6-digit Reality Code\n"
            f"\n"
            f"STEP 2: AMPLIFY YOUR CODE\n"
            f"- Go to the Amplify page on the website\n"
            f"- Play the 37-73 Hz creation frequency\n"
            f"- Set a 5-15 minute meditation timer\n"
            f"- Hold your code in your mind while listening\n"
            f"\n"
            f"STEP 3: SHARE & MULTIPLY\n"
            f"- Post your code in this group with your intention category\n"
            f"- When others meditate on your code, the effect amplifies\n"
            f"- Join our daily collective code sessions\n"
            f"\n"
            f"━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n"
            f"\n"
            f"BONUS FEATURES (ALL FREE)\n"
            f"\n"
            f"- Manifestation Journal — track your codes and progress\n"
            f"- Wisdom Library — 150+ searchable quotes\n"
            f"- Science Pages — the research behind the method\n"
            f"- Install as App — works offline on your phone\n"
            f"- 12+ Intention Categories — from abundance to energy protection\n"
            f"\n"
            f"━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n"
            f"\n"
            f"Everything is free. No accounts. No ads. No upsells. Just intention.\n"
            f"\n"
            f"#QuantumRealityCodes #StartHere #Guide"
        )

        return {"telegram": telegram, "facebook": facebook}

    def _faq_content(self, site):
        """Generate FAQ content for common questions."""
        return {
            "questions": [
                {
                    "q": "What is a Reality Code?",
                    "a": (
                        "A Reality Code is a 6-digit number generated from your written intention "
                        "using Vibrational Encoding. Each letter has a value (A=1, B=2...Z=26), "
                        "and the total is compressed into a 6-digit code. This code serves as a "
                        "numerical anchor — a concentrated symbol of your intention that you can "
                        "meditate on, share, and carry with you."
                    ),
                },
                {
                    "q": "What is the 37-73 Hz creation frequency?",
                    "a": (
                        "The 37-73 Hz range is called the 'Sound of Creation' — a frequency pattern "
                        "that resonates with fundamental creative energy. When you meditate on your Reality Code "
                        "while listening to this frequency, you align your intention with the creative fabric "
                        "of reality. You can access it on the Amplify page of the website."
                    ),
                },
                {
                    "q": "How does Vibrational Encoding work?",
                    "a": (
                        "Each letter of the English alphabet has a numeric value: A=1, B=2, C=3... Z=26. "
                        "Digits count at face value (0-9). When you write your intention, every character "
                        "is summed to create a total vibrational value. This total is then compressed into "
                        "a 6-digit Reality Code (total mod 1,000,000). The code is unique to your exact words."
                    ),
                },
                {
                    "q": "Is this app really free?",
                    "a": (
                        f"Yes. {site} is 100% free — no accounts, no ads, no premium tiers, "
                        "no paywalls. All data stays on your device. The creator sustains it through "
                        "voluntary donations (Buy Me a Coffee). The mission is to make structured "
                        "intention accessible to everyone."
                    ),
                },
                {
                    "q": "Does sharing my code with others actually do anything?",
                    "a": (
                        "Research on group intention — including the Circle of Eight studies — shows that "
                        "when multiple minds focus on the same intention, measurable effects occur. "
                        "When someone meditates on your code, they're adding their conscious energy "
                        "to your intention. This is why collective code days are our most powerful practice."
                    ),
                },
                {
                    "q": "What's the science behind this?",
                    "a": (
                        f"The website has a full science section at {site}/qrcodes-science/ covering "
                        "quantum physics (observer effect), neuroplasticity (brain rewiring through focus), "
                        "epigenetics (belief affects biology), NLP anchoring, morphic resonance, and more. "
                        "Each article references real peer-reviewed studies."
                    ),
                },
                {
                    "q": "How often should I create a new code?",
                    "a": (
                        "There's no fixed rule. Some people create a new code daily as a morning ritual. "
                        "Others hold onto one code for a week or even a month while focusing on a single intention. "
                        "The key is consistency — regular meditation on your code strengthens the vibrational pattern."
                    ),
                },
                {
                    "q": "Can I install the app on my phone?",
                    "a": (
                        f"Yes! Visit {site} in your browser, then use 'Add to Home Screen' (or 'Install App'). "
                        "It works offline as a Progressive Web App (PWA). No app store download needed."
                    ),
                },
            ],
            "formatted_telegram": self._format_faq_telegram(site),
            "formatted_facebook": self._format_faq_facebook(site),
        }

    def _format_faq_telegram(self, site):
        """Format FAQ for Telegram pinned message."""
        return (
            f"❓ *FREQUENTLY ASKED QUESTIONS* ❓\n"
            f"\n"
            f"━━━━━━━━━━━━━━━━━━━━━\n"
            f"\n"
            f"*Q: What is a Reality Code?*\n"
            f"A 6-digit number generated from your intention using Vibrational Encoding (A=1, B=2...Z=26). It's a numerical anchor for meditation.\n"
            f"\n"
            f"*Q: What is the 37-73 Hz frequency?*\n"
            f"The 'Sound of Creation' — a frequency that resonates with creative energy. Access it on the Amplify page.\n"
            f"\n"
            f"*Q: Is it really free?*\n"
            f"Yes. No accounts, no ads, no premium tiers. Ever.\n"
            f"\n"
            f"*Q: Does sharing codes actually help?*\n"
            f"Research on group intention shows measurable effects when multiple minds focus together.\n"
            f"\n"
            f"*Q: How do I install the app?*\n"
            f"Visit {site} → 'Add to Home Screen'. Works offline.\n"
            f"\n"
            f"*Q: Where's the science?*\n"
            f"🔗 {site}/qrcodes-science/\n"
            f"\n"
            f"More questions? Ask in the group! 🌟"
        )

    def _format_faq_facebook(self, site):
        """Format FAQ for Facebook pinned post."""
        return (
            f"FREQUENTLY ASKED QUESTIONS\n"
            f"\n"
            f"━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n"
            f"\n"
            f"Q: What is a Reality Code?\n"
            f"A: A 6-digit number generated from your intention using Vibrational Encoding "
            f"(A=1, B=2...Z=26). It's a numerical anchor for meditation and manifestation.\n"
            f"\n"
            f"Q: What is the 37-73 Hz creation frequency?\n"
            f"A: The 'Sound of Creation' — a frequency that aligns your vibration with creative energy. "
            f"Access it on the Amplify page at {site}.\n"
            f"\n"
            f"Q: Is this really free? What's the catch?\n"
            f"A: There is no catch. No accounts, no ads, no premium tiers, no data collection. "
            f"The creator sustains it through voluntary donations.\n"
            f"\n"
            f"Q: Does sharing my code with others actually do anything?\n"
            f"A: Research on group intention (Circle of Eight studies) shows measurable effects "
            f"when multiple minds focus on the same intention.\n"
            f"\n"
            f"Q: How do I install the app on my phone?\n"
            f"A: Visit {site} in your phone's browser → tap 'Add to Home Screen' or 'Install App'. "
            f"It works offline.\n"
            f"\n"
            f"Q: Where can I read the science?\n"
            f"A: Visit {site}/qrcodes-science/ for articles on quantum physics, neuroplasticity, "
            f"epigenetics, and more.\n"
            f"\n"
            f"Q: How often should I create a new code?\n"
            f"A: Whatever feels right. Some do it daily, others hold one code for a week or month. "
            f"Consistency matters more than frequency.\n"
            f"\n"
            f"━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n"
            f"\n"
            f"Have a question not listed here? Ask in the comments!\n"
            f"\n"
            f"#QuantumRealityCodes #FAQ"
        )

    def _spotlight_template(self, site):
        """Generate a 'New Member Spotlight' template."""
        telegram = (
            f"🌟 *MEMBER SPOTLIGHT* 🌟\n"
            f"\n"
            f"━━━━━━━━━━━━━━━━━━━━━\n"
            f"\n"
            f"👤 *Name:* [Member Name]\n"
            f"📅 *Joined:* [Join Date]\n"
            f"🔮 *Current Code:* [Their Reality Code]\n"
            f"🎯 *Manifesting:* [What they're working on]\n"
            f"\n"
            f"━━━━━━━━━━━━━━━━━━━━━\n"
            f"\n"
            f"📖 *Their story:*\n"
            f"[2-3 sentences about their journey and what brought them here]\n"
            f"\n"
            f"💬 *In their words:*\n"
            f"_[Direct quote from the member]_\n"
            f"\n"
            f"Send [Member Name] some energy! React with ✨ to amplify their intention.\n"
            f"\n"
            f"Want to be featured? DM us your story! 🌟"
        )

        facebook = (
            f"MEMBER SPOTLIGHT\n"
            f"\n"
            f"━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n"
            f"\n"
            f"Name: [Member Name]\n"
            f"Joined: [Join Date]\n"
            f"Current Reality Code: [Their Code]\n"
            f"Manifesting: [What they're working on]\n"
            f"\n"
            f"━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n"
            f"\n"
            f"THEIR STORY:\n"
            f"[2-3 sentences about their journey with Reality Codes]\n"
            f"\n"
            f"IN THEIR WORDS:\n"
            f"\"[Direct quote from the member about their experience]\"\n"
            f"\n"
            f"━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n"
            f"\n"
            f"Drop a comment to welcome them and amplify their intention!\n"
            f"\n"
            f"Want to be featured? Message us your story.\n"
            f"\n"
            f"#QuantumRealityCodes #MemberSpotlight"
        )

        return {"telegram": telegram, "facebook": facebook}

    def _community_rules(self):
        """Generate standardised community rules."""
        return {
            "rules": [
                {
                    "title": "Be Supportive",
                    "description": "This is a space for amplification, not criticism. Encourage each other's intentions.",
                },
                {
                    "title": "Share Authentically",
                    "description": "Post your Reality Codes, intentions, and experiences. Vulnerability strengthens the collective field.",
                },
                {
                    "title": "Respect Privacy",
                    "description": "What's shared in this group stays in this group. Never screenshot or share someone's intention without permission.",
                },
                {
                    "title": "No Spam or Self-Promotion",
                    "description": "No selling, no MLM, no affiliate links. This group exists for intention, not commerce.",
                },
                {
                    "title": "No Fear-Based Content",
                    "description": "We don't do doom, gloom, or fear. If you're struggling, share from a place of seeking growth, not spreading anxiety.",
                },
                {
                    "title": "Engage With the Practice",
                    "description": "Participate in daily codes, weekly challenges, and collective sessions. Lurking is fine, but contributing makes the field stronger.",
                },
                {
                    "title": "Keep It Legal & Kind",
                    "description": "No hate speech, no harassment, no illegal content. Treat every member as a fellow conscious creator.",
                },
            ],
            "summary_telegram": (
                "🔑 *Community Rules:*\n"
                "1. Be supportive\n"
                "2. Share authentically\n"
                "3. Respect privacy\n"
                "4. No spam/self-promotion\n"
                "5. No fear-based content\n"
                "6. Engage with the practice\n"
                "7. Keep it legal & kind"
            ),
            "summary_facebook": (
                "COMMUNITY RULES:\n"
                "1. Be Supportive — amplify, don't criticise\n"
                "2. Share Authentically — codes, intentions, wins\n"
                "3. Respect Privacy — what's here stays here\n"
                "4. No Spam — no selling, no MLM, no self-promotion\n"
                "5. No Fear-Based Content — growth mindset only\n"
                "6. Engage — join daily codes and weekly challenges\n"
                "7. Be Kind — every member is a fellow creator"
            ),
        }


if __name__ == "__main__":
    agent = OnboardingAgent()
    print("Onboarding Agent ready.")
    result = agent.run()
    print(f"Generated: welcome, start_here, faq ({len(result['faq']['questions'])} questions), spotlight, rules ({len(result['rules']['rules'])} rules)")
