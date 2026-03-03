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
        with open(filepath, "w") as f:
            json.dump(data, f, indent=2, default=str)
        print(f"  [saved] {filepath}")

    def _save_text(self, text, filepath):
        """Save text to file."""
        with open(filepath, "w") as f:
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

    def route(self, command, args=None):
        """Route a command to the appropriate pipeline."""
        cmd = command.lower().strip()

        if cmd == "daily":
            return self.run_daily()
        elif cmd == "campaign":
            topic = args if args else "abundance"
            return self.run_campaign(topic)
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
        elif cmd == "deploy":
            return self.run_deploy()
        else:
            print(f"\n  Unknown command: {cmd}")
            print("  Available: daily, campaign, card, social, blog, email, deploy")
            return {"error": f"Unknown command: {cmd}"}


if __name__ == "__main__":
    master = MasterAgent()
    if len(sys.argv) > 1:
        cmd = sys.argv[1]
        args = " ".join(sys.argv[2:]) if len(sys.argv) > 2 else None
        master.route(cmd, args)
    else:
        master.route("daily")
