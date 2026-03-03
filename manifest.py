#!/usr/bin/env python3
"""
manifest.py — Root launcher for the Quantum Reality Codes agent system.

Place this file at the project root for convenience.
Delegates to agents/agents/manifest.py with proper path setup.

Usage:
    python manifest.py daily                          # Full daily content pipeline
    python manifest.py campaign abundance             # Topic-focused campaign
    python manifest.py campaign "financial abundance"
    python manifest.py card energy_shield             # Single intention card
    python manifest.py social                         # Social media posts only
    python manifest.py blog "power of intention"      # Blog post only
    python manifest.py email                          # Email newsletter
    python manifest.py deploy                         # Deploy to site
"""

import sys
import os

# Point to the agents package
AGENTS_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), "agents", "agents")
sys.path.insert(0, AGENTS_DIR)

from core.master_agent import MasterAgent


def main():
    if len(sys.argv) < 2:
        print("""
╔══════════════════════════════════════════════════════════════╗
║           QUANTUM REALITY CODES — Agent System               ║
║   Focused Intention. Vibrational Code. Infinite Connection.  ║
╚══════════════════════════════════════════════════════════════╝

Usage:
    python manifest.py <command> [args]

Commands:
    daily                          Full daily content pipeline
    campaign <topic>               Topic-focused campaign
    card [category]                Single intention card
    social                         Social media posts only
    blog <topic>                   SEO blog post
    email                          Email newsletter
    deploy                         Deploy to site

Categories:
    core_alignment, energy_shield, quantum_healing,
    clarity_intuition, gratitude_amplification,
    abundance_activation, energy_warfare,
    collective_intention, forgiveness_release,
    reality_declaration, peace_presence, shadow_integration

Examples:
    python manifest.py daily
    python manifest.py campaign abundance
    python manifest.py campaign "quantum healing"
    python manifest.py card energy_shield
    python manifest.py blog "the power of focused intention"
        """)
        return

    command = sys.argv[1].lower()
    args = " ".join(sys.argv[2:]) if len(sys.argv) > 2 else None

    master = MasterAgent()
    result = master.route(command, args)

    if result and not result.get("error"):
        print("\n  Pipeline completed successfully.")
    elif result and result.get("error"):
        print(f"\n  Error: {result['error']}")


if __name__ == "__main__":
    main()
