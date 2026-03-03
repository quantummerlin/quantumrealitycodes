#!/usr/bin/env python3
"""
QUANTUM REALITY CODES — Master Pipeline Runner

Usage:
    python manifest.py [command] [args]

Commands:
    daily               Generate daily intention + code + card + social + page
    campaign <topic>    Full campaign: intention + code + card + social + blog + email
    card [category]     Generate a single shareable intention card
    social              Generate social media posts for all platforms
    blog <topic>        Generate an SEO blog post
    email               Generate email newsletter content
    deploy              Deploy latest content to the site

Examples:
    python manifest.py daily
    python manifest.py campaign abundance
    python manifest.py card energy_shield
    python manifest.py blog "the power of focused intention"
"""

import sys
from core.master_agent import MasterAgent


def main():
    print(f"\n{'='*60}")
    print("  QUANTUM REALITY CODES")
    print("  Focused Intention. Vibrational Code. Infinite Connection.")
    print(f"{'='*60}")

    master = MasterAgent()

    if len(sys.argv) > 1:
        cmd = sys.argv[1]
        args = " ".join(sys.argv[2:]) if len(sys.argv) > 2 else None
        master.route(cmd, args)
    else:
        # Default: run the daily pipeline
        master.route("daily")


if __name__ == "__main__":
    main()
