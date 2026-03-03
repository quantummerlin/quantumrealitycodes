"""
Master Agent — The Orchestrator
Routes trigger commands to the appropriate sub-agent pipeline.
Manages output directories and coordinates the full content generation flow.
"""

import json
import os
import sys
from datetime import datetime, date
from pathlib import Path

# Add parent to path for imports
sys.path.insert(0, str(Path(__file__).parent.parent))

from core.wisdom_agent import WisdomAgent
from core.intention_agent import IntentionAgent
from core.code_agent import CodeAgent
from content.card_agent import CardAgent
from content.social_agent import SocialAgent
from content.blog_agent import BlogAgent
from content.email_agent import EmailAgent
from distribution.html_agent import HTMLAgent
from distribution.deploy_agent import DeployAgent
from community.telegram_agent import TelegramAgent
from community.facebook_agent import FacebookAgent
from community.challenge_agent import ChallengeAgent
from community.onboarding_agent import OnboardingAgent

CONFIG_PATH = Path(__file__).parent.parent / "config" / "soul.json"
OUTPUT_BASE = Path(__file__).parent.parent / "output"


class MasterAgent:
    """Orchestrates the full content pipeline."""

    def __init__(self):
        self.soul = self._load_soul()
        self.wisdom = WisdomAgent()
        self.intention = IntentionAgent()
        self.code = CodeAgent()
        self.card = CardAgent()
        self.social = SocialAgent()
        self.blog = BlogAgent()
        self.email = EmailAgent()
        self.html = HTMLAgent()
        self.deploy = DeployAgent()
        self.telegram = TelegramAgent()
        self.facebook = FacebookAgent()
        self.challenge = ChallengeAgent()
        self.onboarding = OnboardingAgent()

    def _load_soul(self):
        try:
            with open(CONFIG_PATH, "r") as f:
                return json.load(f)
        except Exception:
            return {}

    def _ensure_dir(self, path):
        """Create directory if it doesn't exist."""
        os.makedirs(path, exist_ok=True)
        return path

    def _save_json(self, data, filepath):
        """Save data as JSON file."""
        with open(filepath, "w", encoding="utf-8") as f:
            json.dump(data, f, indent=2, default=str, ensure_ascii=False)
        print(f"  [saved] {filepath}")

    def _save_text(self, text, filepath):
        """Save text to file."""
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(text)
        print(f"  [saved] {filepath}")

    # ─── Pipeline: Daily ───

    def run_daily(self):
        """Full daily content generation pipeline."""
        today = date.today()
        day_str = today.isoformat()
        out_dir = self._ensure_dir(OUTPUT_BASE / "daily" / day_str)

        print(f"\n{'='*60}")
        print(f"  QUANTUM REALITY CODES — Daily Pipeline")
        print(f"  Date: {day_str}")
        print(f"{'='*60}\n")

        # Step 1: Wisdom
        print("[1/6] Wisdom Agent — Selecting daily wisdom...")
        wisdom_data = self.wisdom.run(target_date=today)
        self._save_json(wisdom_data, out_dir / "wisdom.json")
        print(f"  Category: {wisdom_data['category']}")
        print(f"  Daily Quote: {wisdom_data['daily_quote']['ref']}")

        # Step 2: Intention
        print("\n[2/6] Intention Agent — Building structured intention...")
        intention_data = self.intention.run(wisdom_data=wisdom_data)
        self._save_json(intention_data, out_dir / "intention.json")
        print(f"  Intention Category: {intention_data['category_name']}")
        print(f"  Steps: {len(intention_data['steps'])}")

        # Step 3: Code
        print("\n[3/6] Code Agent — Generating vibrational code...")
        code_data = self.code.run(intention_data=intention_data)
        self._save_json(code_data, out_dir / "code.json")
        print(f"  Reality Code: {code_data['reality_code']}")
        print(f"  Vibrational Total: {code_data['vibrational_total']}")
        print(f"  Root Number: {code_data['analysis']['root_number']}")

        # Step 4: Card
        print("\n[4/6] Card Agent — Creating shareable intention card...")
        card_html = self.card.run(
            intention_data=intention_data,
            code_data=code_data,
            wisdom_data=wisdom_data
        )
        self._save_text(card_html, out_dir / "card.html")

        # Step 5: Social
        print("\n[5/6] Social Agent — Generating social media content...")
        social_data = self.social.run(
            intention_data=intention_data,
            code_data=code_data,
            wisdom_data=wisdom_data
        )
        self._save_json(social_data, out_dir / "social.json")
        print(f"  Platforms: {', '.join(social_data['platforms'].keys())}")

        # Step 6: HTML Page
        print("\n[6/6] HTML Agent — Generating daily intention page...")
        html_content = self.html.run(
            intention_data=intention_data,
            code_data=code_data,
            wisdom_data=wisdom_data,
            page_type="daily"
        )
        self._save_text(html_content, out_dir / "daily_page.html")

        print(f"\n{'='*60}")
        print(f"  Daily pipeline complete!")
        print(f"  Output: {out_dir}")
        print(f"{'='*60}\n")

        return {
            "pipeline": "daily",
            "date": day_str,
            "output_dir": str(out_dir),
            "wisdom": wisdom_data,
            "intention": intention_data,
            "code": code_data,
            "social": social_data,
        }

    # ─── Pipeline: Campaign ───

    def run_campaign(self, topic):
        """Topic-focused campaign pipeline."""
        today = date.today()
        slug = topic.lower().replace(" ", "_").replace("/", "_")[:30]
        day_str = today.isoformat()
        out_dir = self._ensure_dir(OUTPUT_BASE / "campaigns" / f"{slug}_{day_str}")

        print(f"\n{'='*60}")
        print(f"  QUANTUM REALITY CODES — Campaign Pipeline")
        print(f"  Topic: {topic}")
        print(f"  Date: {day_str}")
        print(f"{'='*60}\n")

        # Step 1: Wisdom
        print("[1/7] Wisdom Agent — Finding topical wisdom...")
        wisdom_data = self.wisdom.run(topic=topic, target_date=today)
        self._save_json(wisdom_data, out_dir / "wisdom.json")

        # Step 2: Intention
        print("\n[2/7] Intention Agent — Building topical intention...")
        intention_data = self.intention.run(wisdom_data=wisdom_data, topic=topic)
        self._save_json(intention_data, out_dir / "intention.json")

        # Step 3: Code
        print("\n[3/7] Code Agent — Generating vibrational code...")
        code_data = self.code.run(intention_data=intention_data)
        self._save_json(code_data, out_dir / "code.json")
        print(f"  Reality Code: {code_data['reality_code']}")

        # Step 4: Card
        print("\n[4/7] Card Agent — Creating campaign card...")
        card_html = self.card.run(
            intention_data=intention_data,
            code_data=code_data,
            wisdom_data=wisdom_data,
            campaign_topic=topic
        )
        self._save_text(card_html, out_dir / "card.html")

        # Step 5: Social
        print("\n[5/7] Social Agent — Generating campaign social posts...")
        social_data = self.social.run(
            intention_data=intention_data,
            code_data=code_data,
            wisdom_data=wisdom_data,
            campaign_topic=topic
        )
        self._save_json(social_data, out_dir / "social.json")

        # Step 6: Blog
        print("\n[6/7] Blog Agent — Writing SEO blog post...")
        blog_html = self.blog.run(
            intention_data=intention_data,
            code_data=code_data,
            wisdom_data=wisdom_data,
            topic=topic
        )
        self._save_text(blog_html, out_dir / "blog.html")

        # Step 7: Email
        print("\n[7/7] Email Agent — Creating newsletter content...")
        email_html = self.email.run(
            intention_data=intention_data,
            code_data=code_data,
            wisdom_data=wisdom_data,
            topic=topic
        )
        self._save_text(email_html, out_dir / "email.html")

        print(f"\n{'='*60}")
        print(f"  Campaign pipeline complete!")
        print(f"  Topic: {topic}")
        print(f"  Output: {out_dir}")
        print(f"{'='*60}\n")

        return {
            "pipeline": "campaign",
            "topic": topic,
            "date": day_str,
            "output_dir": str(out_dir),
        }

    # ─── Pipeline: Card Only ───

    def run_card(self, category=None):
        """Generate a single intention card."""
        today = date.today()
        out_dir = self._ensure_dir(OUTPUT_BASE / "cards")

        print("\n  Generating intention card...")

        wisdom_data = self.wisdom.run(category=category, target_date=today)
        intention_data = self.intention.run(wisdom_data=wisdom_data)
        code_data = self.code.run(intention_data=intention_data)

        card_html = self.card.run(
            intention_data=intention_data,
            code_data=code_data,
            wisdom_data=wisdom_data
        )

        filename = f"card_{wisdom_data['category']}_{today.isoformat()}.html"
        self._save_text(card_html, out_dir / filename)

        print(f"  Reality Code: {code_data['reality_code']}")
        print(f"  Card saved: {out_dir / filename}\n")

        return {"pipeline": "card", "file": str(out_dir / filename)}

    # ─── Pipeline: Social Only ───

    def run_social(self):
        """Generate social media posts only."""
        today = date.today()
        out_dir = self._ensure_dir(OUTPUT_BASE / "social")

        print("\n  Generating social media content...")

        wisdom_data = self.wisdom.run(target_date=today)
        intention_data = self.intention.run(wisdom_data=wisdom_data)
        code_data = self.code.run(intention_data=intention_data)

        social_data = self.social.run(
            intention_data=intention_data,
            code_data=code_data,
            wisdom_data=wisdom_data
        )

        filename = f"social_{today.isoformat()}.json"
        self._save_json(social_data, out_dir / filename)

        print(f"  Platforms: {', '.join(social_data['platforms'].keys())}")
        print(f"  Saved: {out_dir / filename}\n")

        return {"pipeline": "social", "file": str(out_dir / filename)}

    # ─── Pipeline: Blog Only ───

    def run_blog(self, topic):
        """Generate a blog post only."""
        today = date.today()
        out_dir = self._ensure_dir(OUTPUT_BASE / "blog")

        print(f"\n  Generating blog post: {topic}...")

        wisdom_data = self.wisdom.run(topic=topic, target_date=today)
        intention_data = self.intention.run(wisdom_data=wisdom_data, topic=topic)
        code_data = self.code.run(intention_data=intention_data)

        blog_html = self.blog.run(
            intention_data=intention_data,
            code_data=code_data,
            wisdom_data=wisdom_data,
            topic=topic
        )

        slug = topic.lower().replace(" ", "-").replace("/", "-")[:40]
        filename = f"{slug}_{today.isoformat()}.html"
        self._save_text(blog_html, out_dir / filename)

        print(f"  Saved: {out_dir / filename}\n")

        return {"pipeline": "blog", "file": str(out_dir / filename)}

    # ─── Pipeline: Email Only ───

    def run_email(self):
        """Generate email newsletter content."""
        today = date.today()
        out_dir = self._ensure_dir(OUTPUT_BASE / "email")

        print("\n  Generating email newsletter...")

        wisdom_data = self.wisdom.run(target_date=today)
        intention_data = self.intention.run(wisdom_data=wisdom_data)
        code_data = self.code.run(intention_data=intention_data)

        email_html = self.email.run(
            intention_data=intention_data,
            code_data=code_data,
            wisdom_data=wisdom_data
        )

        filename = f"newsletter_{today.isoformat()}.html"
        self._save_text(email_html, out_dir / filename)

        print(f"  Saved: {out_dir / filename}\n")

        return {"pipeline": "email", "file": str(out_dir / filename)}

    # ─── Pipeline: Deploy ───

    def run_deploy(self):
        """Deploy latest site updates."""
        print("\n  Running deployment...")
        result = self.deploy.run()
        print(f"  Deploy result: {result.get('status', 'unknown')}\n")
        return result

    # ─── Router ───

    # ─── Pipeline: Weekly Campaign ───

    def run_weekly(self, theme=None):
        """Generate a full week of themed content for community posting."""
        from datetime import timedelta

        theme = theme or self._get_weekly_theme()
        today = date.today()
        slug = theme.lower().replace(" ", "_").replace("/", "_")[:30]
        out_dir = self._ensure_dir(OUTPUT_BASE / "weekly" / f"{slug}_{today.isoformat()}")

        print(f"\n{'='*60}")
        print(f"  QUANTUM REALITY CODES — Weekly Campaign Pipeline")
        print(f"  Theme: {theme}")
        print(f"  Date: {today.isoformat()}")
        print(f"{'='*60}\n")

        # Generate 7 days of core content
        daily_data = []
        codes_list = []
        print("[1/5] Generating 7 days of core content (Wisdom → Intention → Code)...")
        for day_num in range(7):
            day_date = today + timedelta(days=day_num)
            wisdom_data = self.wisdom.run(topic=theme, target_date=day_date)
            intention_data = self.intention.run(wisdom_data=wisdom_data, topic=theme)
            code_data = self.code.run(intention_data=intention_data)
            daily_data.append({
                "day": day_num + 1,
                "date": day_date.isoformat(),
                "wisdom": wisdom_data,
                "intention": intention_data,
                "code": code_data,
            })
            codes_list.append(code_data)
            print(f"  Day {day_num + 1}: Code {code_data['reality_code']} — {intention_data['category_name']}")

        # Save daily core data
        self._save_json(daily_data, out_dir / "daily_core.json")

        # Generate cards for each day
        print("\n[2/5] Generating 7 shareable cards...")
        cards_dir = self._ensure_dir(out_dir / "cards")
        for day in daily_data:
            card_html = self.card.run(
                intention_data=day["intention"],
                code_data=day["code"],
                wisdom_data=day["wisdom"],
                campaign_topic=theme
            )
            self._save_text(card_html, cards_dir / f"card_day{day['day']}.html")

        # Generate community content (Telegram + Facebook) for each day
        print("\n[3/5] Generating Telegram + Facebook posts for 7 days...")
        community_dir = self._ensure_dir(out_dir / "community")
        community_content = []
        for day in daily_data:
            tg = self.telegram.run(
                intention_data=day["intention"],
                code_data=day["code"],
                wisdom_data=day["wisdom"],
                campaign_topic=theme,
                content_type="daily"
            )
            fb = self.facebook.run(
                intention_data=day["intention"],
                code_data=day["code"],
                wisdom_data=day["wisdom"],
                campaign_topic=theme,
                content_type="daily"
            )
            community_content.append({
                "day": day["day"],
                "date": day["date"],
                "telegram": tg,
                "facebook": fb,
            })
        self._save_json(community_content, community_dir / "daily_posts.json")

        # Generate weekly intro posts
        tg_intro = self.telegram.run(
            wisdom_data=daily_data[0]["wisdom"],
            campaign_topic=theme,
            content_type="weekly_intro"
        )
        fb_intro = self.facebook.run(
            wisdom_data=daily_data[0]["wisdom"],
            campaign_topic=theme,
            content_type="weekly_theme"
        )
        self._save_json({"telegram": tg_intro, "facebook": fb_intro}, community_dir / "weekly_intro.json")

        # Generate engagement posts
        tg_engage = self.telegram.run(
            code_data=daily_data[4]["code"],
            campaign_topic=theme,
            content_type="collective"
        )
        fb_engage = self.facebook.run(
            campaign_topic=theme,
            content_type="engagement"
        )
        self._save_json({"telegram": tg_engage, "facebook": fb_engage}, community_dir / "engagement.json")

        # Generate 7-day challenge
        print("\n[4/5] Generating 7-day challenge pack...")
        challenge_data = self.challenge.run(
            theme=theme,
            codes=codes_list,
            wisdom_data=daily_data[0]["wisdom"],
            start_date=today
        )
        self._save_json(challenge_data, out_dir / "challenge.json")

        # Generate blog + email + social
        print("\n[5/5] Generating blog, email, and social content...")
        blog_html = self.blog.run(
            intention_data=daily_data[0]["intention"],
            code_data=daily_data[0]["code"],
            wisdom_data=daily_data[0]["wisdom"],
            topic=theme
        )
        self._save_text(blog_html, out_dir / "blog.html")

        email_html = self.email.run(
            intention_data=daily_data[0]["intention"],
            code_data=daily_data[0]["code"],
            wisdom_data=daily_data[0]["wisdom"],
            topic=theme
        )
        self._save_text(email_html, out_dir / "email.html")

        social_data = self.social.run(
            intention_data=daily_data[0]["intention"],
            code_data=daily_data[0]["code"],
            wisdom_data=daily_data[0]["wisdom"],
            campaign_topic=theme
        )
        self._save_json(social_data, out_dir / "social.json")

        # Save schedule summary
        schedule = {
            "theme": theme,
            "start_date": today.isoformat(),
            "days": [
                {
                    "day": d["day"],
                    "date": d["date"],
                    "code": d["code"]["reality_code"],
                    "category": d["intention"]["category_name"],
                    "content": [
                        "daily_code_telegram",
                        "daily_code_facebook",
                        "shareable_card",
                    ],
                }
                for d in daily_data
            ],
            "extras": [
                "weekly_intro (Telegram + Facebook)",
                "engagement_post (Telegram + Facebook)",
                "7-day_challenge (both platforms)",
                "blog_post",
                "email_newsletter",
                "social_media (IG, TikTok, X, YouTube)",
            ],
        }
        self._save_json(schedule, out_dir / "schedule.json")

        print(f"\n{'='*60}")
        print(f"  Weekly campaign complete!")
        print(f"  Theme: {theme}")
        print(f"  Output: {out_dir}")
        print(f"  Files: 7 daily posts, 7 cards, challenge, blog, email, social")
        print(f"{'='*60}\n")

        return {
            "pipeline": "weekly",
            "theme": theme,
            "start_date": today.isoformat(),
            "output_dir": str(out_dir),
            "days": len(daily_data),
        }

    def _get_weekly_theme(self):
        """Get the weekly theme from calendar config or default rotation."""
        try:
            calendar_path = Path(__file__).parent.parent / "config" / "calendar.json"
            with open(calendar_path, "r") as f:
                calendar = json.load(f)
            today = date.today()
            week_num = today.isocalendar()[1] % len(calendar.get("weekly_rotation", []))
            return calendar["weekly_rotation"][week_num]["theme"]
        except Exception:
            # Default rotation
            themes = [
                "Core Alignment", "Abundance Activation",
                "Energy Shield", "Healing Frequency",
            ]
            return themes[date.today().isocalendar()[1] % len(themes)]

    # ─── Pipeline: Onboarding ───

    def run_onboarding(self, platform="all"):
        """Generate the full onboarding package."""
        out_dir = self._ensure_dir(OUTPUT_BASE / "onboarding")

        print(f"\n{'='*60}")
        print(f"  QUANTUM REALITY CODES — Onboarding Package")
        print(f"  Platform: {platform}")
        print(f"{'='*60}\n")

        result = self.onboarding.run(platform=platform)
        self._save_json(result, out_dir / f"onboarding_{platform}.json")

        # Save individual text files for easy copy-paste
        if isinstance(result.get("welcome"), dict):
            for plat, text in result["welcome"].items():
                self._save_text(text, out_dir / f"welcome_{plat}.txt")
        elif isinstance(result.get("welcome"), str):
            self._save_text(result["welcome"], out_dir / f"welcome_{platform}.txt")

        if isinstance(result.get("start_here"), dict):
            for plat, text in result["start_here"].items():
                self._save_text(text, out_dir / f"start_here_{plat}.txt")
        elif isinstance(result.get("start_here"), str):
            self._save_text(result["start_here"], out_dir / f"start_here_{platform}.txt")

        faq = result.get("faq", {})
        if faq.get("formatted_telegram"):
            self._save_text(faq["formatted_telegram"], out_dir / "faq_telegram.txt")
        if faq.get("formatted_facebook"):
            self._save_text(faq["formatted_facebook"], out_dir / "faq_facebook.txt")

        print(f"\n  Onboarding package saved to: {out_dir}")
        print(f"{'='*60}\n")

        return result

    # ─── Router ───

    def route(self, command, args=None):
        """Route a command to the appropriate pipeline."""
        cmd = command.lower().strip()

        if cmd == "daily":
            return self.run_daily()
        elif cmd == "campaign":
            topic = args if args else "abundance"
            return self.run_campaign(topic)
        elif cmd == "weekly":
            theme = args if args else None
            return self.run_weekly(theme)
        elif cmd == "card":
            category = args if args else None
            return self.run_card(category)
        elif cmd == "social":
            return self.run_social()
        elif cmd == "blog":
            topic = args if args else "the power of focused intention"
            return self.run_blog(topic)
        elif cmd == "email":
            return self.run_email()
        elif cmd == "onboarding":
            platform = args if args else "all"
            return self.run_onboarding(platform)
        elif cmd == "deploy":
            return self.run_deploy()
        else:
            print(f"\n  Unknown command: {cmd}")
            print("  Available: daily, weekly, campaign, card, social, blog, email, onboarding, deploy")
            return {"error": f"Unknown command: {cmd}"}


if __name__ == "__main__":
    master = MasterAgent()
    if len(sys.argv) > 1:
        cmd = sys.argv[1]
        args = " ".join(sys.argv[2:]) if len(sys.argv) > 2 else None
        master.route(cmd, args)
    else:
        master.route("daily")
