"""
Challenge Agent — The 7-Day Architect
Generates structured 7-day community challenges with daily content
for both Telegram and Facebook, designed to drive engagement and growth.

Each challenge follows a proven engagement arc:
  Day 1: Set intention (activation)
  Day 2: Meditation practice (depth)
  Day 3: Science/education (credibility)
  Day 4: Share your story (social proof)
  Day 5: Collective code day (community)
  Day 6: Invite a friend (growth)
  Day 7: Reflection (retention)
"""

import json
import random
from datetime import datetime, date, timedelta
from pathlib import Path

CONFIG_PATH = Path(__file__).parent.parent / "config" / "soul.json"


class ChallengeAgent:
    """Generates 7-day community challenges for growth and engagement."""

    def __init__(self):
        self.soul = self._load_soul()

    def _load_soul(self):
        try:
            with open(CONFIG_PATH, "r") as f:
                return json.load(f)
        except Exception:
            return {}

    def run(self, theme=None, codes=None, wisdom_data=None, start_date=None):
        """Generate a complete 7-day challenge.

        Args:
            theme: Challenge theme (e.g., 'abundance activation')
            codes: List of 7 code_data dicts (one per day). If None, uses placeholders.
            wisdom_data: Output from WisdomAgent (for quotes)
            start_date: Start date of the challenge (defaults to next Monday)
        """
        theme = theme or "Quantum Alignment"
        site = self.soul.get("website", "quantumrealitycodes.com")

        if start_date is None:
            today = date.today()
            days_ahead = 7 - today.weekday()  # Next Monday
            if days_ahead <= 0:
                days_ahead += 7
            start_date = today + timedelta(days=days_ahead)

        # Science pages that link to qrcodes-science/
        science_links = {
            "abundance": "law-of-attraction.html",
            "healing": "biology-of-belief.html",
            "energy": "nlp-anchoring.html",
            "alignment": "quantum-mysteries.html",
            "gratitude": "neuroplasticity.html",
            "protection": "morphic-resonance.html",
            "purpose": "integrated-mechanism.html",
            "connection": "circle-of-eight.html",
            "default": "sacred-mathematics.html",
        }

        # Find most relevant science link
        science_page = science_links.get("default")
        for key, page in science_links.items():
            if key in theme.lower():
                science_page = page
                break

        # Extract quotes
        quote = wisdom_data.get("daily_quote", {}) if wisdom_data else {}
        quote_text = quote.get("text", "Every word carries frequency.")
        quote_ref = quote.get("ref", "Quantum Reality Codes")

        # Build 7-day challenge
        days = []
        for day_num in range(1, 8):
            day_date = start_date + timedelta(days=day_num - 1)
            code = "------"
            if codes and len(codes) >= day_num:
                code = codes[day_num - 1].get("reality_code", "------")

            day_content = self._build_day(
                day_num=day_num,
                theme=theme,
                code=code,
                date=day_date,
                science_page=science_page,
                quote_text=quote_text,
                quote_ref=quote_ref,
                site=site,
            )
            days.append(day_content)

        # Build the announcement post
        announcement = self._build_announcement(theme, start_date, site, quote_text, quote_ref)

        result = {
            "agent": "challenge",
            "timestamp": datetime.now().isoformat(),
            "theme": theme,
            "start_date": start_date.isoformat(),
            "days": days,
            "announcement": announcement,
            "hashtags": [
                "#QuantumRealityCodes",
                f"#{theme.replace(' ', '')}Challenge",
                "#7DayChallenge",
                "#ManifestWithIntention",
                "#ConsciousCreation",
            ],
        }

        print(f"  Challenge generated: '{theme}' — 7 days starting {start_date.isoformat()}")
        return result

    def _build_announcement(self, theme, start_date, site, quote_text, quote_ref):
        """Build the challenge announcement / launch post."""
        end_date = start_date + timedelta(days=6)

        telegram = (
            f"🔥 *7-DAY CHALLENGE: {theme.upper()}* 🔥\n"
            f"\n"
            f"📅 {start_date.strftime('%B %d')} — {end_date.strftime('%B %d, %Y')}\n"
            f"\n"
            f"━━━━━━━━━━━━━━━━━━━━━\n"
            f"\n"
            f"📖 _{quote_text}_\n"
            f"    — {quote_ref}\n"
            f"\n"
            f"━━━━━━━━━━━━━━━━━━━━━\n"
            f"\n"
            f"For 7 days, we'll focus our collective intention on *{theme.lower()}*.\n"
            f"\n"
            f"Each day brings:\n"
            f"  • A unique Reality Code to meditate on\n"
            f"  • A specific action to take\n"
            f"  • A prompt to share in the group\n"
            f"\n"
            f"*What you need:*\n"
            f"  ✅ Access to {site}\n"
            f"  ✅ 5-15 minutes per day\n"
            f"  ✅ An open mind and willing heart\n"
            f"\n"
            f"React with 🔥 if you're in!\n"
            f"Tag a friend who needs this challenge.\n"
            f"\n"
            f"#QuantumRealityCodes #{theme.replace(' ', '')}Challenge #7DayChallenge"
        )

        facebook = (
            f"7-DAY CHALLENGE: {theme.upper()}\n"
            f"{start_date.strftime('%B %d')} — {end_date.strftime('%B %d, %Y')}\n"
            f"\n"
            f"━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n"
            f"\n"
            f'"{quote_text}" — {quote_ref}\n'
            f"\n"
            f"━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n"
            f"\n"
            f"Here's what we're doing:\n"
            f"\n"
            f"For the next 7 days, this group is going ALL IN on {theme.lower()}. "
            f"Every single day, you'll get a unique Reality Code, a specific action, "
            f"and a prompt to share with the group.\n"
            f"\n"
            f"This isn't passive. This is practice.\n"
            f"\n"
            f"DAY 1: Set your intention — create your Reality Code\n"
            f"DAY 2: Meditation with the 37-73 Hz creation frequency\n"
            f"DAY 3: The science behind {theme.lower()}\n"
            f"DAY 4: Share your manifestation story\n"
            f"DAY 5: Collective code — we all meditate on the same code\n"
            f"DAY 6: Growth day — invite someone who needs this\n"
            f"DAY 7: Reflection and celebration\n"
            f"\n"
            f"WHAT YOU NEED:\n"
            f"- Access to {site} (free, no sign-up)\n"
            f"- 5-15 minutes per day\n"
            f"- Willingness to show up and share\n"
            f"\n"
            f"Comment \"I'M IN\" below and tag someone who should join this challenge.\n"
            f"\n"
            f"#QuantumRealityCodes #{theme.replace(' ', '')}Challenge #7DayChallenge"
        )

        return {"telegram": telegram, "facebook": facebook}

    def _build_day(self, day_num, theme, code, date, science_page, quote_text, quote_ref, site):
        """Build content for a single challenge day."""
        builders = {
            1: self._day_intention,
            2: self._day_meditation,
            3: self._day_science,
            4: self._day_story,
            5: self._day_collective,
            6: self._day_growth,
            7: self._day_reflection,
        }

        builder = builders.get(day_num, self._day_intention)
        return builder(
            day_num=day_num,
            theme=theme,
            code=code,
            date=date,
            science_page=science_page,
            quote_text=quote_text,
            quote_ref=quote_ref,
            site=site,
        )

    def _day_intention(self, day_num, theme, code, date, science_page, quote_text, quote_ref, site):
        """Day 1: Set Intention + Create Your Code."""
        telegram = (
            f"🌟 *DAY {day_num}/7 — SET YOUR INTENTION* 🌟\n"
            f"📅 {date.strftime('%A, %B %d')}\n"
            f"\n"
            f"Today we begin. Your first action:\n"
            f"\n"
            f"1️⃣ Go to {site}\n"
            f"2️⃣ Choose the category that aligns with *{theme.lower()}*\n"
            f"3️⃣ Build your structured intention\n"
            f"4️⃣ Generate your Reality Code\n"
            f"5️⃣ Post your code here with one sentence about what you're manifesting\n"
            f"\n"
            f"📖 _{quote_text}_ — {quote_ref}\n"
            f"\n"
            f"Your intention is the seed. This code is how you plant it.\n"
            f"\n"
            f"#Day{day_num} #{theme.replace(' ', '')}Challenge"
        )

        facebook = (
            f"DAY {day_num}/7: SET YOUR INTENTION\n"
            f"{date.strftime('%A, %B %d')}\n"
            f"\n"
            f"Today is Day 1 of our {theme} challenge. Here's your mission:\n"
            f"\n"
            f"1. Visit {site}\n"
            f"2. Build a structured intention focused on {theme.lower()}\n"
            f"3. Generate your Reality Code\n"
            f"4. Share it in the comments below\n"
            f"\n"
            f'"{quote_text}" — {quote_ref}\n'
            f"\n"
            f"When you share your code, include one sentence about what you're calling in. "
            f"Your declaration to the group becomes part of the collective field.\n"
            f"\n"
            f"I'll go first: [share your code here]\n"
            f"\n"
            f"#Day{day_num} #{theme.replace(' ', '')}Challenge"
        )

        return {
            "day": day_num,
            "title": "Set Your Intention",
            "date": date.isoformat(),
            "action": "Create a Reality Code and share it",
            "telegram": telegram,
            "facebook": facebook,
        }

    def _day_meditation(self, day_num, theme, code, date, science_page, quote_text, quote_ref, site):
        """Day 2: Meditation with Creation Frequency."""
        telegram = (
            f"🧘 *DAY {day_num}/7 — MEDITATION PRACTICE* 🧘\n"
            f"📅 {date.strftime('%A, %B %d')}\n"
            f"\n"
            f"Today's practice: *10-minute meditation with the 37-73 Hz creation frequency*\n"
            f"\n"
            f"1️⃣ Open {site} → go to the *Amplify* page\n"
            f"2️⃣ Set the timer to 10 minutes\n"
            f"3️⃣ Play the creation frequency\n"
            f"4️⃣ Hold your Reality Code from Day 1 in your mind\n"
            f"5️⃣ When the timer ends, write down anything you felt, saw, or realized\n"
            f"\n"
            f"The 37-73 Hz range is called the 'Sound of Creation' — a frequency that resonates with the fundamental creative energy of the cosmos.\n"
            f"\n"
            f"After your meditation, share what came through: a feeling, an image, a word, anything.\n"
            f"\n"
            f"#Day{day_num} #{theme.replace(' ', '')}Challenge"
        )

        facebook = (
            f"DAY {day_num}/7: MEDITATION WITH THE CREATION FREQUENCY\n"
            f"{date.strftime('%A, %B %d')}\n"
            f"\n"
            f"Yesterday you set your intention and created your code. Today, we go deeper.\n"
            f"\n"
            f"Your challenge today:\n"
            f"Meditate for 10 minutes while listening to the 37-73 Hz creation frequency.\n"
            f"\n"
            f"Here's how:\n"
            f"1. Visit {site} and go to the Amplify page\n"
            f"2. Set the meditation timer to 10 minutes\n"
            f"3. Play the creation frequency\n"
            f"4. Close your eyes and hold your Reality Code in your mind's eye\n"
            f"5. After the session, come back here and share what you experienced\n"
            f"\n"
            f"The 37-73 Hz frequency range has been called the 'Sound of Creation.' "
            f"When you meditate on your code while listening to this frequency, "
            f"you align your intention with the creative power of the universe.\n"
            f"\n"
            f"What did you feel? What came through? Share below.\n"
            f"\n"
            f"#Day{day_num} #{theme.replace(' ', '')}Challenge"
        )

        return {
            "day": day_num,
            "title": "Meditation with Creation Frequency",
            "date": date.isoformat(),
            "action": "10-minute meditation on the Amplify page",
            "telegram": telegram,
            "facebook": facebook,
        }

    def _day_science(self, day_num, theme, code, date, science_page, quote_text, quote_ref, site):
        """Day 3: Science Deep-Dive."""
        telegram = (
            f"🔬 *DAY {day_num}/7 — THE SCIENCE* 🔬\n"
            f"📅 {date.strftime('%A, %B %d')}\n"
            f"\n"
            f"Today we go beyond belief into evidence.\n"
            f"\n"
            f"Read today's science article:\n"
            f"🔗 {site}/qrcodes-science/{science_page}\n"
            f"\n"
            f"This isn't just metaphysics — real research from neuroscience, quantum physics, and epigenetics supports the mechanisms behind structured intention.\n"
            f"\n"
            f"After reading, share the one fact that surprised you most.\n"
            f"\n"
            f"Knowledge strengthens intention. When you understand *why* this works, your codes become more powerful.\n"
            f"\n"
            f"#Day{day_num} #{theme.replace(' ', '')}Challenge"
        )

        facebook = (
            f"DAY {day_num}/7: THE SCIENCE BEHIND {theme.upper()}\n"
            f"{date.strftime('%A, %B %d')}\n"
            f"\n"
            f"\"But does this actually work?\"\n"
            f"\n"
            f"Great question. Today's challenge is to read the science.\n"
            f"\n"
            f"Link: {site}/qrcodes-science/{science_page}\n"
            f"\n"
            f"From the observer effect in quantum physics to neuroplasticity research showing "
            f"how focused intention literally rewires your brain — the evidence is more compelling "
            f"than most people realize.\n"
            f"\n"
            f"Read the article and come back here to share:\n"
            f"What was the most surprising thing you learned?\n"
            f"\n"
            f"Knowledge doesn't weaken faith — it strengthens intention. When you understand the mechanism, "
            f"your meditation practice becomes exponentially more powerful.\n"
            f"\n"
            f"#Day{day_num} #{theme.replace(' ', '')}Challenge"
        )

        return {
            "day": day_num,
            "title": "The Science",
            "date": date.isoformat(),
            "action": f"Read the science article at qrcodes-science/{science_page}",
            "telegram": telegram,
            "facebook": facebook,
        }

    def _day_story(self, day_num, theme, code, date, science_page, quote_text, quote_ref, site):
        """Day 4: Share Your Story."""
        telegram = (
            f"📖 *DAY {day_num}/7 — SHARE YOUR STORY* 📖\n"
            f"📅 {date.strftime('%A, %B %d')}\n"
            f"\n"
            f"Today is about the group.\n"
            f"\n"
            f"Since you started this challenge, has anything shifted?\n"
            f"\n"
            f"  • A synchronicity you noticed\n"
            f"  • A feeling that changed\n"
            f"  • An opportunity that appeared\n"
            f"  • A thought pattern that dissolved\n"
            f"  • Even just a sense of peace\n"
            f"\n"
            f"Your story might be exactly what someone else needs to hear right now.\n"
            f"\n"
            f"Share below. Even one sentence is powerful.\n"
            f"\n"
            f"#Day{day_num} #{theme.replace(' ', '')}Challenge"
        )

        facebook = (
            f"DAY {day_num}/7: YOUR MANIFESTATION STORY\n"
            f"{date.strftime('%A, %B %d')}\n"
            f"\n"
            f"We're halfway through the challenge. Time for a check-in.\n"
            f"\n"
            f"What's shifted since Day 1?\n"
            f"\n"
            f"Maybe it's subtle — a recurring number, a random conversation that aligned perfectly, "
            f"a feeling of clarity you didn't have before.\n"
            f"\n"
            f"Or maybe it's big — a door opened, a call came, something you'd been manifesting arrived.\n"
            f"\n"
            f"Share your story in the comments. Your testimony has power — "
            f"it strengthens the collective field and gives others permission to believe.\n"
            f"\n"
            f"No story is too small. The universe doesn't distinguish between big and small — only aligned and misaligned.\n"
            f"\n"
            f"#Day{day_num} #{theme.replace(' ', '')}Challenge"
        )

        return {
            "day": day_num,
            "title": "Share Your Story",
            "date": date.isoformat(),
            "action": "Share a manifestation experience or synchronicity",
            "telegram": telegram,
            "facebook": facebook,
        }

    def _day_collective(self, day_num, theme, code, date, science_page, quote_text, quote_ref, site):
        """Day 5: Collective Code Day."""
        telegram = (
            f"🌀 *DAY {day_num}/7 — COLLECTIVE CODE DAY* 🌀\n"
            f"📅 {date.strftime('%A, %B %d')}\n"
            f"\n"
            f"Today, everyone meditates on the *same code*.\n"
            f"\n"
            f"━━━━━━━━━━━━━━━━━━━━━\n"
            f"     *COLLECTIVE CODE: {code}*\n"
            f"━━━━━━━━━━━━━━━━━━━━━\n"
            f"\n"
            f"Research on group intention (the Circle of Eight studies) shows that when multiple minds focus on a single intention, the effect is measurably stronger.\n"
            f"\n"
            f"*Your mission:*\n"
            f"1️⃣ At any point today, meditate on code *{code}* for at least 5 minutes\n"
            f"2️⃣ Play the 37-73 Hz frequency while you meditate\n"
            f"3️⃣ After your session, come back and comment: \"Done ✨\"\n"
            f"\n"
            f"Let's see how many of us can meditate on the same code today. The more minds aligned, the stronger the field.\n"
            f"\n"
            f"#Day{day_num} #{theme.replace(' ', '')}Challenge #CollectiveIntention"
        )

        facebook = (
            f"DAY {day_num}/7: COLLECTIVE CODE DAY\n"
            f"{date.strftime('%A, %B %d')}\n"
            f"\n"
            f"━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n"
            f"TODAY'S COLLECTIVE CODE: {code}\n"
            f"━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n"
            f"\n"
            f"This is the most powerful day of the challenge.\n"
            f"\n"
            f"Today, every person in this group meditates on the same code. "
            f"Not your personal code — the COLLECTIVE code above.\n"
            f"\n"
            f"Why? Because research on group intention shows that focused collective consciousness "
            f"produces measurable effects. When we align our frequencies, the quantum field responds differently.\n"
            f"\n"
            f"Here's what to do:\n"
            f"1. At any point today, sit quietly for 5-15 minutes\n"
            f"2. Go to {site} → Amplify → play the creation frequency\n"
            f"3. Hold the code {code} in your mind\n"
            f"4. Visualize the collective intention of this group radiating outward\n"
            f"5. Come back and comment \"Done\" when you've completed your session\n"
            f"\n"
            f"Let's see how many participants we can get today. React to this post, then come back after your session.\n"
            f"\n"
            f"#Day{day_num} #{theme.replace(' ', '')}Challenge #CollectiveIntention"
        )

        return {
            "day": day_num,
            "title": "Collective Code Day",
            "date": date.isoformat(),
            "code": code,
            "action": f"Meditate on collective code {code} for 5+ minutes",
            "telegram": telegram,
            "facebook": facebook,
        }

    def _day_growth(self, day_num, theme, code, date, science_page, quote_text, quote_ref, site):
        """Day 6: Invite a Friend (growth mechanism)."""
        telegram = (
            f"🚀 *DAY {day_num}/7 — GROWTH DAY* 🚀\n"
            f"📅 {date.strftime('%A, %B %d')}\n"
            f"\n"
            f"Today's action is simple but powerful:\n"
            f"\n"
            f"*Invite ONE person to this group.*\n"
            f"\n"
            f"Think of someone who:\n"
            f"  • Talks about manifesting or law of attraction\n"
            f"  • Is interested in meditation or mindfulness\n"
            f"  • Is going through a challenging time\n"
            f"  • Loves quantum physics or consciousness\n"
            f"  • Would benefit from a supportive community\n"
            f"\n"
            f"Send them the group link with a personal message. Tell them what this challenge has meant to you.\n"
            f"\n"
            f"The collective field grows stronger with every new mind that joins. Your invitation isn't just a favour — it's a vibrational gift.\n"
            f"\n"
            f"🌐 Share the website: {site}\n"
            f"\n"
            f"After you've invited someone, come back and comment: \"Invited ✨\"\n"
            f"\n"
            f"#Day{day_num} #{theme.replace(' ', '')}Challenge"
        )

        facebook = (
            f"DAY {day_num}/7: GROWTH DAY — INVITE SOMEONE\n"
            f"{date.strftime('%A, %B %d')}\n"
            f"\n"
            f"We're near the end of the challenge, and if you've made it this far, "
            f"something in this resonated with you.\n"
            f"\n"
            f"Today's mission: INVITE ONE PERSON to this group.\n"
            f"\n"
            f"Not a mass invite. Not a broadcast. ONE person, chosen intentionally.\n"
            f"\n"
            f"Think of someone who would genuinely benefit from:\n"
            f"• A structured manifestation practice\n"
            f"• A community of conscious creators\n"
            f"• Daily Reality Codes and collective intention sessions\n"
            f"• Free tools for their spiritual practice\n"
            f"\n"
            f"Send them a personal message. Tell them about your experience this week. "
            f"Share the website: {site}\n"
            f"\n"
            f"Every community starts small. Ours grows through genuine invitation, "
            f"not algorithms. Your invitation matters.\n"
            f"\n"
            f"Tag them in the comments below or comment \"Invited\" when you're done.\n"
            f"\n"
            f"#Day{day_num} #{theme.replace(' ', '')}Challenge"
        )

        return {
            "day": day_num,
            "title": "Growth Day — Invite Someone",
            "date": date.isoformat(),
            "action": "Invite one person to the community",
            "telegram": telegram,
            "facebook": facebook,
        }

    def _day_reflection(self, day_num, theme, code, date, science_page, quote_text, quote_ref, site):
        """Day 7: Reflection + Celebration."""
        telegram = (
            f"🏆 *DAY {day_num}/7 — REFLECTION & CELEBRATION* 🏆\n"
            f"📅 {date.strftime('%A, %B %d')}\n"
            f"\n"
            f"You made it. 7 days of focused intention on *{theme.lower()}*.\n"
            f"\n"
            f"Take a moment to reflect:\n"
            f"\n"
            f"📝 *Journal prompts:*\n"
            f"  1. What was my strongest moment this week?\n"
            f"  2. What surprised me most?\n"
            f"  3. What has already started to shift?\n"
            f"  4. What intention do I want to carry forward?\n"
            f"  5. What am I grateful for right now?\n"
            f"\n"
            f"Share your reflection below — even one sentence. Your words close this cycle and open the next.\n"
            f"\n"
            f"📖 _{quote_text}_ — {quote_ref}\n"
            f"\n"
            f"Next week brings a new challenge, a new theme, a new frequency. Stay tuned.\n"
            f"\n"
            f"Thank you for showing up. ✨\n"
            f"\n"
            f"#Day{day_num} #{theme.replace(' ', '')}Challenge #Reflection"
        )

        facebook = (
            f"DAY {day_num}/7: REFLECTION & CELEBRATION\n"
            f"{date.strftime('%A, %B %d')}\n"
            f"\n"
            f"That's 7 days. You showed up. You did the work.\n"
            f"\n"
            f'"{quote_text}" — {quote_ref}\n'
            f"\n"
            f"Before we close this cycle, take 10 minutes and reflect:\n"
            f"\n"
            f"1. What was your strongest moment this week?\n"
            f"2. What surprised you most?\n"
            f"3. What has already started to shift in your reality?\n"
            f"4. What intention do you want to carry forward?\n"
            f"5. What are you grateful for right now?\n"
            f"\n"
            f"Share your answers below. This isn't optional — the reflection is what seals the intention. "
            f"Writing it makes it real. Sharing it makes it powerful.\n"
            f"\n"
            f"Next week: New theme. New codes. New frequency.\n"
            f"\n"
            f"If this challenge meant something to you, share this post. "
            f"Someone out there needs to find this group.\n"
            f"\n"
            f"Thank you for being part of this collective.\n"
            f"\n"
            f"#Day{day_num} #{theme.replace(' ', '')}Challenge #Reflection #QuantumRealityCodes"
        )

        return {
            "day": day_num,
            "title": "Reflection & Celebration",
            "date": date.isoformat(),
            "action": "Reflect on the week and share your experience",
            "telegram": telegram,
            "facebook": facebook,
        }


if __name__ == "__main__":
    agent = ChallengeAgent()
    print("Challenge Agent ready.")
    result = agent.run(theme="abundance activation")
    print(f"Generated {len(result['days'])} days for '{result['theme']}'")
    print(f"Start date: {result['start_date']}")
    for day in result["days"]:
        print(f"  Day {day['day']}: {day['title']} — {day['action']}")
