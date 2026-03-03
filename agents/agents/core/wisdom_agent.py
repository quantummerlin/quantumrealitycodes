"""
Wisdom Agent — The Foundation
Selects daily and topical wisdom quotes for the pipeline.
Maintains a comprehensive wisdom database organized by category,
drawing from quantum physics, philosophy, and ancient traditions.
"""

import json
import random
from datetime import datetime, date
from pathlib import Path

CONFIG_PATH = Path(__file__).parent.parent / "config" / "soul.json"

# ─── Comprehensive Wisdom Quote Database ───

WISDOM_DB = {
    "core_alignment": [
        {"text": "Energy flows where intention goes.", "ref": "Quantum Principle"},
        {"text": "The universe is not outside of you. Look inside yourself; everything that you want, you already are.", "ref": "Rumi"},
        {"text": "If you want to find the secrets of the universe, think in terms of energy, frequency and vibration.", "ref": "Nikola Tesla"},
        {"text": "What you think, you become. What you feel, you attract. What you imagine, you create.", "ref": "Buddha"},
        {"text": "You are not a drop in the ocean. You are the entire ocean in a drop.", "ref": "Rumi"},
        {"text": "The field is the sole governing agency of the particle.", "ref": "Albert Einstein"},
        {"text": "We are all connected to each other biologically, to the earth chemically, and to the rest of the universe atomically.", "ref": "Neil deGrasse Tyson"},
    ],
    "energy_shield": [
        {"text": "You are the universe expressing itself as a human for a little while.", "ref": "Eckhart Tolle"},
        {"text": "No one can make you feel inferior without your consent.", "ref": "Eleanor Roosevelt"},
        {"text": "The only thing that can limit your energy is your belief about it.", "ref": "Quantum Principle"},
        {"text": "Boundaries are the distance at which I can love you and me simultaneously.", "ref": "Prentis Hemphill"},
        {"text": "Your energy is currency. Spend it well.", "ref": "Energy Wisdom"},
        {"text": "What other people think of you is none of your business.", "ref": "Wayne Dyer"},
        {"text": "Protect your peace. It is the most valuable thing you can achieve.", "ref": "Quantum Wisdom"},
        {"text": "You have power over your mind — not outside events. Realise this, and you will find strength.", "ref": "Marcus Aurelius"},
    ],
    "gratitude_amplification": [
        {"text": "Gratitude turns what we have into enough.", "ref": "Melody Beattie"},
        {"text": "If you look at what you have in life, you'll always have more.", "ref": "Oprah Winfrey"},
        {"text": "Gratitude is the healthiest of all human emotions.", "ref": "Zig Ziglar"},
        {"text": "The more you praise and celebrate your life, the more there is in life to celebrate.", "ref": "Oprah Winfrey"},
        {"text": "Gratitude is not only the greatest of virtues, but the parent of all others.", "ref": "Marcus Tullius Cicero"},
        {"text": "When you are grateful, fear disappears and abundance appears.", "ref": "Tony Robbins"},
        {"text": "Gratitude is the most powerful force in the universe.", "ref": "Quantum Wisdom"},
        {"text": "Enjoy the little things, for one day you may look back and realise they were the big things.", "ref": "Robert Brault"},
    ],
    "abundance_activation": [
        {"text": "Abundance is not something we acquire. It is something we tune into.", "ref": "Wayne Dyer"},
        {"text": "The universe is full of magical things, patiently waiting for our wits to grow sharper.", "ref": "Eden Phillpotts"},
        {"text": "You are a living magnet. What you attract into your life is in harmony with your dominant thoughts.", "ref": "Brian Tracy"},
        {"text": "See yourself living in abundance and you will attract it.", "ref": "Rhonda Byrne"},
        {"text": "Wealth is the ability to fully experience life.", "ref": "Henry David Thoreau"},
        {"text": "The only limit to our realisation of tomorrow will be our doubts of today.", "ref": "Franklin D. Roosevelt"},
        {"text": "You were born to be a winner, but to be a winner you must plan to win, prepare to win, and expect to win.", "ref": "Zig Ziglar"},
    ],
    "clarity_intuition": [
        {"text": "The intuitive mind is a sacred gift and the rational mind is a faithful servant.", "ref": "Albert Einstein"},
        {"text": "In the midst of movement and chaos, keep stillness inside of you.", "ref": "Deepak Chopra"},
        {"text": "Have the courage to follow your heart and intuition.", "ref": "Steve Jobs"},
        {"text": "The only real valuable thing is intuition.", "ref": "Albert Einstein"},
        {"text": "Trust yourself. You know more than you think you do.", "ref": "Benjamin Spock"},
        {"text": "The soul always knows what to do to heal itself. The challenge is to silence the mind.", "ref": "Caroline Myss"},
        {"text": "Your vision will become clear only when you can look into your own heart.", "ref": "Carl Jung"},
    ],
    "quantum_healing": [
        {"text": "The wound is the place where the light enters you.", "ref": "Rumi"},
        {"text": "Letting go gives us freedom, and freedom is the only condition for happiness.", "ref": "Thich Nhat Hanh"},
        {"text": "The natural healing force within each one of us is the greatest force in getting well.", "ref": "Hippocrates"},
        {"text": "The greatest revolution of our generation is the discovery that human beings can alter their lives by altering their attitudes of mind.", "ref": "William James"},
        {"text": "Healing is not about fixing what's broken. It's about remembering what's whole.", "ref": "Quantum Healing Principle"},
        {"text": "The body heals with play, the mind heals with laughter, and the spirit heals with joy.", "ref": "Proverb"},
        {"text": "Your body hears everything your mind says.", "ref": "Naomi Judd"},
        {"text": "The doctor of the future will give no medicine, but will interest his patients in the care of the human frame.", "ref": "Thomas Edison"},
    ],
    "energy_warfare": [
        {"text": "Your calm mind is the ultimate weapon against your challenges.", "ref": "Bryant McGill"},
        {"text": "Until you make the unconscious conscious, it will direct your life and you will call it fate.", "ref": "Carl Jung"},
        {"text": "No one can make you feel inferior without your consent.", "ref": "Eleanor Roosevelt"},
        {"text": "The lotus flower blooms most beautifully from the deepest and thickest mud.", "ref": "Buddhist Proverb"},
        {"text": "You have power over your mind — not outside events. Realise this, and you will find strength.", "ref": "Marcus Aurelius"},
        {"text": "When you react, you let others control you. When you respond, you are in control.", "ref": "Bohdi Sanders"},
        {"text": "The best fighter is never angry.", "ref": "Lao Tzu"},
    ],
    "collective_intention": [
        {"text": "Alone we can do so little; together we can do so much.", "ref": "Helen Keller"},
        {"text": "We are not human beings having a spiritual experience. We are spiritual beings having a human experience.", "ref": "Pierre Teilhard de Chardin"},
        {"text": "When two or more are gathered in focused intention, the power is not doubled — it is squared.", "ref": "Quantum Resonance Principle"},
        {"text": "The best way to find yourself is to lose yourself in the service of others.", "ref": "Mahatma Gandhi"},
        {"text": "In the end, only kindness matters.", "ref": "Jewel"},
        {"text": "We are all just walking each other home.", "ref": "Ram Dass"},
        {"text": "I am because we are.", "ref": "Ubuntu Philosophy"},
    ],
    "forgiveness_release": [
        {"text": "Forgiveness is not about the other person. It is about setting yourself free.", "ref": "Lewis B. Smedes"},
        {"text": "The truth will set you free, but first it will make you uncomfortable.", "ref": "Gloria Steinem"},
        {"text": "What you resist, persists. What you look at, disappears.", "ref": "Neale Donald Walsch"},
        {"text": "Holding onto anger is like drinking poison and expecting the other person to die.", "ref": "Buddha (attributed)"},
        {"text": "Every moment is a fresh beginning.", "ref": "T.S. Eliot"},
        {"text": "The weak can never forgive. Forgiveness is the attribute of the strong.", "ref": "Mahatma Gandhi"},
        {"text": "Forgiveness does not change the past, but it does enlarge the future.", "ref": "Paul Boese"},
    ],
    "reality_declaration": [
        {"text": "I am the master of my fate, I am the captain of my soul.", "ref": "William Ernest Henley"},
        {"text": "The privilege of a lifetime is to become who you truly are.", "ref": "Carl Jung"},
        {"text": "Imagination is everything. It is the preview of life's coming attractions.", "ref": "Albert Einstein"},
        {"text": "In the beginning was the Word. Words create worlds.", "ref": "Universal Principle"},
        {"text": "Be the change you wish to see in the world.", "ref": "Mahatma Gandhi"},
        {"text": "Whether you think you can, or you think you can't — you're right.", "ref": "Henry Ford"},
        {"text": "The only way to do great work is to love what you do.", "ref": "Steve Jobs"},
    ],
    "peace_presence": [
        {"text": "Peace is not the absence of conflict, but the presence of inner calm.", "ref": "Zen Wisdom"},
        {"text": "The present moment is the only moment available to us, and it is the door to all moments.", "ref": "Thich Nhat Hanh"},
        {"text": "Surrender to what is. Let go of what was. Have faith in what will be.", "ref": "Sonia Ricotti"},
        {"text": "Silence is not the absence of something but the presence of everything.", "ref": "Gordon Hempton"},
        {"text": "Do not let the behaviour of others destroy your inner peace.", "ref": "Dalai Lama"},
        {"text": "Be still, and know.", "ref": "Universal Wisdom"},
        {"text": "The quieter you become, the more you can hear.", "ref": "Ram Dass"},
    ],
    "shadow_integration": [
        {"text": "One does not become enlightened by imagining figures of light, but by making the darkness conscious.", "ref": "Carl Jung"},
        {"text": "Everything that irritates us about others can lead us to an understanding of ourselves.", "ref": "Carl Jung"},
        {"text": "Wholeness is not achieved by cutting off a portion of one's being, but by integration of the contraries.", "ref": "Carl Jung"},
        {"text": "The cave you fear to enter holds the treasure you seek.", "ref": "Joseph Campbell"},
        {"text": "Out of your vulnerabilities will come your strength.", "ref": "Sigmund Freud"},
        {"text": "What lies behind us and what lies before us are tiny matters compared to what lies within us.", "ref": "Ralph Waldo Emerson"},
        {"text": "The privilege of a lifetime is being who you are.", "ref": "Joseph Campbell"},
    ],
    "consciousness": [
        {"text": "Consciousness is the fundamental thing in existence.", "ref": "Max Planck"},
        {"text": "The observer effect tells us that reality does not exist independent of the observer.", "ref": "Quantum Physics"},
        {"text": "We are what we repeatedly do. Excellence, then, is not an act, but a habit.", "ref": "Aristotle"},
        {"text": "The unexamined life is not worth living.", "ref": "Socrates"},
        {"text": "Knowing yourself is the beginning of all wisdom.", "ref": "Aristotle"},
        {"text": "Reality is merely an illusion, albeit a very persistent one.", "ref": "Albert Einstein"},
    ],
    "manifestation": [
        {"text": "Whatever the mind of man can conceive and believe, it can achieve.", "ref": "Napoleon Hill"},
        {"text": "Act as if what you do makes a difference. It does.", "ref": "William James"},
        {"text": "The universe doesn't give you what you ask for with your thoughts; it gives you what you demand with your actions.", "ref": "Steve Maraboli"},
        {"text": "Your thoughts are the architects of your destiny.", "ref": "David O. McKay"},
        {"text": "Everything you want is on the other side of fear.", "ref": "Jack Canfield"},
        {"text": "What we think, we become.", "ref": "Buddha"},
    ],
    "purpose": [
        {"text": "The two most important days in your life are the day you are born and the day you find out why.", "ref": "Mark Twain"},
        {"text": "Your time is limited, don't waste it living someone else's life.", "ref": "Steve Jobs"},
        {"text": "The meaning of life is to find your gift. The purpose of life is to give it away.", "ref": "Pablo Picasso"},
        {"text": "He who has a why to live can bear almost any how.", "ref": "Friedrich Nietzsche"},
        {"text": "Don't ask what the world needs. Ask what makes you come alive.", "ref": "Howard Thurman"},
    ],
    "strength": [
        {"text": "Strength does not come from physical capacity. It comes from an indomitable will.", "ref": "Mahatma Gandhi"},
        {"text": "The bamboo that bends is stronger than the oak that resists.", "ref": "Japanese Proverb"},
        {"text": "Fall seven times, stand up eight.", "ref": "Japanese Proverb"},
        {"text": "What does not kill me makes me stronger.", "ref": "Friedrich Nietzsche"},
        {"text": "The strongest people are not those who show strength in front of us, but those who win battles we know nothing about.", "ref": "Jonathan Harnisch"},
    ],
}

# Daily quotes — one for each day of the month (31 entries)
DAILY_QUOTES = [
    {"text": "Energy flows where intention goes.", "ref": "Quantum Principle"},
    {"text": "The universe is not outside of you. Look inside yourself.", "ref": "Rumi"},
    {"text": "If you want to find the secrets of the universe, think in terms of energy, frequency and vibration.", "ref": "Nikola Tesla"},
    {"text": "What you think, you become. What you feel, you attract. What you imagine, you create.", "ref": "Buddha"},
    {"text": "Abundance is not something we acquire. It is something we tune into.", "ref": "Wayne Dyer"},
    {"text": "The intuitive mind is a sacred gift and the rational mind is a faithful servant.", "ref": "Albert Einstein"},
    {"text": "You are a living magnet. What you attract is in harmony with your dominant thoughts.", "ref": "Brian Tracy"},
    {"text": "The wound is the place where the light enters you.", "ref": "Rumi"},
    {"text": "Be still, and know.", "ref": "Universal Wisdom"},
    {"text": "Gratitude turns what we have into enough.", "ref": "Melody Beattie"},
    {"text": "I am the master of my fate, I am the captain of my soul.", "ref": "William Ernest Henley"},
    {"text": "The present moment is the only moment available to us.", "ref": "Thich Nhat Hanh"},
    {"text": "The natural healing force within each one of us is the greatest force in getting well.", "ref": "Hippocrates"},
    {"text": "No one can make you feel inferior without your consent.", "ref": "Eleanor Roosevelt"},
    {"text": "Whatever the mind of man can conceive and believe, it can achieve.", "ref": "Napoleon Hill"},
    {"text": "Imagination is everything. It is the preview of life's coming attractions.", "ref": "Albert Einstein"},
    {"text": "Alone we can do so little; together we can do so much.", "ref": "Helen Keller"},
    {"text": "Every moment is a fresh beginning.", "ref": "T.S. Eliot"},
    {"text": "One does not become enlightened by imagining figures of light, but by making the darkness conscious.", "ref": "Carl Jung"},
    {"text": "Your calm mind is the ultimate weapon against your challenges.", "ref": "Bryant McGill"},
    {"text": "The more you praise and celebrate your life, the more there is in life to celebrate.", "ref": "Oprah Winfrey"},
    {"text": "Consciousness is the fundamental thing in existence.", "ref": "Max Planck"},
    {"text": "We are not human beings having a spiritual experience. We are spiritual beings having a human experience.", "ref": "Pierre Teilhard de Chardin"},
    {"text": "Have the courage to follow your heart and intuition.", "ref": "Steve Jobs"},
    {"text": "Forgiveness is not about the other person. It is about setting yourself free.", "ref": "Lewis B. Smedes"},
    {"text": "Do not let the behaviour of others destroy your inner peace.", "ref": "Dalai Lama"},
    {"text": "The two most important days in your life are the day you are born and the day you find out why.", "ref": "Mark Twain"},
    {"text": "Strength does not come from physical capacity. It comes from an indomitable will.", "ref": "Mahatma Gandhi"},
    {"text": "Be the change you wish to see in the world.", "ref": "Mahatma Gandhi"},
    {"text": "You are not a drop in the ocean. You are the entire ocean in a drop.", "ref": "Rumi"},
    {"text": "Reality is merely an illusion, albeit a very persistent one.", "ref": "Albert Einstein"},
]

# Category rotation for daily pipeline (cycles through the week)
CATEGORY_ROTATION = [
    "core_alignment",         # Sunday
    "energy_shield",          # Monday
    "abundance_activation",   # Tuesday
    "clarity_intuition",      # Wednesday
    "quantum_healing",        # Thursday
    "gratitude_amplification",# Friday
    "energy_warfare",         # Saturday
]


class WisdomAgent:
    """Selects wisdom quotes for the pipeline based on context."""

    def __init__(self):
        self.db = WISDOM_DB
        self.daily_quotes = DAILY_QUOTES
        self.soul = self._load_soul()

    def _load_soul(self):
        try:
            with open(CONFIG_PATH, "r") as f:
                return json.load(f)
        except Exception:
            return {}

    def get_daily_quote(self, target_date=None):
        """Get the quote of the day based on date."""
        d = target_date or date.today()
        idx = (d.day - 1) % len(self.daily_quotes)
        quote = self.daily_quotes[idx]
        return {
            "type": "daily_quote",
            "date": d.isoformat(),
            "quote": quote,
        }

    def get_daily_category(self, target_date=None):
        """Get today's intention category based on day of week."""
        d = target_date or date.today()
        idx = d.weekday()  # 0=Monday ... 6=Sunday
        # Remap: Sunday=0 in our rotation
        rotation_idx = (idx + 1) % 7  # shift so Sunday=0
        return CATEGORY_ROTATION[rotation_idx]

    def get_category_quotes(self, category, count=3):
        """Get random quotes for a specific category."""
        cat_key = self._normalize_category(category)
        quotes = self.db.get(cat_key, self.db.get("consciousness", []))
        selected = random.sample(quotes, min(count, len(quotes)))
        return selected

    def get_topical_quotes(self, topic, count=5):
        """Find quotes matching a topic across all categories."""
        topic_lower = topic.lower().strip()

        # Map common topics to categories
        topic_map = {
            "protection": ["energy_shield", "strength", "consciousness"],
            "healing": ["quantum_healing", "consciousness", "peace_presence"],
            "health": ["quantum_healing", "consciousness", "peace_presence"],
            "wisdom": ["clarity_intuition", "consciousness"],
            "guidance": ["clarity_intuition", "consciousness"],
            "money": ["abundance_activation", "manifestation", "consciousness"],
            "financial": ["abundance_activation", "manifestation", "consciousness"],
            "abundance": ["abundance_activation", "manifestation", "gratitude_amplification"],
            "prosperity": ["abundance_activation", "manifestation"],
            "peace": ["peace_presence", "consciousness", "gratitude_amplification"],
            "anxiety": ["peace_presence", "consciousness", "strength"],
            "fear": ["energy_shield", "consciousness", "strength", "peace_presence"],
            "strength": ["strength", "consciousness", "energy_shield"],
            "courage": ["strength", "consciousness", "energy_shield"],
            "forgiveness": ["forgiveness_release", "quantum_healing", "peace_presence"],
            "gratitude": ["gratitude_amplification"],
            "manifestation": ["manifestation", "reality_declaration", "abundance_activation"],
            "shadow": ["shadow_integration", "consciousness"],
            "purpose": ["purpose", "consciousness", "reality_declaration"],
            "family": ["collective_intention", "peace_presence"],
            "community": ["collective_intention"],
        }

        # Find matching categories
        matched_cats = []
        for key, cats in topic_map.items():
            if key in topic_lower:
                matched_cats.extend(cats)
                break

        if not matched_cats:
            # Search all quotes for keyword match
            all_quotes = []
            for cat, quotes in self.db.items():
                for q in quotes:
                    if topic_lower in q["text"].lower() or topic_lower in q["ref"].lower():
                        all_quotes.append({**q, "category": cat})
            if all_quotes:
                return random.sample(all_quotes, min(count, len(all_quotes)))
            # Fallback to consciousness + manifestation
            matched_cats = ["consciousness", "manifestation", "abundance_activation"]

        # Collect from matched categories
        pool = []
        for cat in set(matched_cats):
            for q in self.db.get(cat, []):
                pool.append({**q, "category": cat})

        return random.sample(pool, min(count, len(pool)))

    def run(self, category=None, topic=None, target_date=None):
        """Main entry point — returns a complete wisdom package."""
        d = target_date or date.today()

        if topic:
            cat = self._topic_to_category(topic)
            quotes = self.get_topical_quotes(topic, count=5)
        elif category:
            cat = self._normalize_category(category)
            quotes = self.get_category_quotes(cat, count=4)
        else:
            cat = self.get_daily_category(d)
            quotes = self.get_category_quotes(cat, count=4)

        daily_quote = self.get_daily_quote(d)

        result = {
            "agent": "wisdom",
            "timestamp": datetime.now().isoformat(),
            "date": d.isoformat(),
            "category": cat,
            "daily_quote": daily_quote["quote"],
            "quotes": quotes,
            "topic": topic,
        }

        return result

    def _normalize_category(self, category):
        """Normalize category name to database key."""
        mapping = {
            "core_alignment": "core_alignment",
            "foundation": "core_alignment",
            "energy_shield": "energy_shield",
            "protection": "energy_shield",
            "gratitude_amplification": "gratitude_amplification",
            "gratitude": "gratitude_amplification",
            "thanksgiving": "gratitude_amplification",
            "abundance_activation": "abundance_activation",
            "abundance": "abundance_activation",
            "petition": "abundance_activation",
            "clarity_intuition": "clarity_intuition",
            "clarity": "clarity_intuition",
            "guidance": "clarity_intuition",
            "wisdom": "clarity_intuition",
            "quantum_healing": "quantum_healing",
            "healing": "quantum_healing",
            "health": "quantum_healing",
            "energy_warfare": "energy_warfare",
            "warfare": "energy_warfare",
            "boundaries": "energy_warfare",
            "collective_intention": "collective_intention",
            "collective": "collective_intention",
            "forgiveness_release": "forgiveness_release",
            "forgiveness": "forgiveness_release",
            "reality_declaration": "reality_declaration",
            "declaration": "reality_declaration",
            "peace_presence": "peace_presence",
            "peace": "peace_presence",
            "shadow_integration": "shadow_integration",
            "shadow": "shadow_integration",
        }
        return mapping.get(category.lower().strip(), category.lower().strip())

    def _topic_to_category(self, topic):
        """Map a topic to the best intention category."""
        topic_lower = topic.lower().strip()
        topic_cat_map = {
            "protection": "energy_shield", "safety": "energy_shield", "fear": "energy_shield",
            "healing": "quantum_healing", "health": "quantum_healing", "wellness": "quantum_healing",
            "wisdom": "clarity_intuition", "guidance": "clarity_intuition", "clarity": "clarity_intuition",
            "money": "abundance_activation", "financial": "abundance_activation", "abundance": "abundance_activation",
            "job": "abundance_activation", "work": "abundance_activation", "prosperity": "abundance_activation",
            "gratitude": "gratitude_amplification", "thankful": "gratitude_amplification",
            "peace": "peace_presence", "anxiety": "peace_presence", "calm": "peace_presence",
            "strength": "energy_warfare", "courage": "energy_warfare", "boundaries": "energy_warfare",
            "family": "collective_intention", "community": "collective_intention",
            "forgive": "forgiveness_release", "release": "forgiveness_release",
            "manifest": "reality_declaration", "create": "reality_declaration",
            "shadow": "shadow_integration", "darkness": "shadow_integration",
        }
        for key, cat in topic_cat_map.items():
            if key in topic_lower:
                return cat
        return "abundance_activation"


if __name__ == "__main__":
    agent = WisdomAgent()
    result = agent.run()
    print(json.dumps(result, indent=2))
