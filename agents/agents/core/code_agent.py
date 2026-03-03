"""
Code Agent — The Encoder
Generates vibrational codes from intention text using Vibrational Encoding.
A=1, B=2, ... Z=26. Digits add face value. Code = total mod 1000000.
"""

import json
from datetime import datetime
from pathlib import Path

CONFIG_PATH = Path(__file__).parent.parent / "config" / "soul.json"


def vibrational_encoding(text):
    """Calculate Vibrational Encoding value of text.
    A=1, B=2, ... Z=26. Digits add their face value.
    All other characters are ignored.
    """
    total = 0
    for ch in text.upper():
        if 'A' <= ch <= 'Z':
            total += ord(ch) - 64  # A=1, B=2, ... Z=26
        elif '0' <= ch <= '9':
            total += int(ch)
    return total


def generate_code(text, length=6):
    """Generate a reality code from text using vibrational encoding."""
    total = vibrational_encoding(text)
    code = str(total % (10 ** length))
    return code, total


def reduce_to_single(n):
    """Reduce a number to a single digit (numerological reduction)."""
    while n > 9:
        n = sum(int(d) for d in str(n))
    return n


def analyze_code(code, total):
    """Provide vibrational analysis of the code."""
    # Check for significant patterns
    patterns = []

    # Check for 37/73 connection (creation frequency)
    if total % 37 == 0:
        patterns.append("Your code resonates with 37 — the creation frequency woven into the fabric of reality.")
    if total % 73 == 0:
        patterns.append("Your code aligns with 73 — the mirror of creation, the frequency of divine order.")
    if "37" in code or "73" in code:
        patterns.append("The creation frequency 37-73 appears within your code — a sign of deep alignment with Source energy.")

    # Check for repeating digits
    for d in "0123456789":
        if d * 3 in code:
            patterns.append(f"Triple {d} appears in your code — a mark of emphasis and energetic amplification.")

    # Check for palindrome
    if code == code[::-1]:
        patterns.append("Your code is a palindrome — reading the same forwards and backwards, a symbol of cosmic symmetry.")

    # Single digit reduction
    root = reduce_to_single(total)
    root_meanings = {
        1: "Unity — the oneness of consciousness. All things emerge from the One.",
        2: "Partnership — the power of connection. 'When two or more align in intention, the field responds exponentially.'",
        3: "Creative expression — the triangle of mind, body, and spirit. The fullness of creation.",
        4: "Foundation — the four elements, the four directions. Stability and structure in the quantum field.",
        5: "Transformation — the number of change, adventure, and dynamic movement. Evolution in action.",
        6: "Harmony — balance between the material and the spiritual. Responsibility and nurturing energy.",
        7: "Spiritual depth — the seeker's number. Inner wisdom, contemplation, and connection to Source.",
        8: "Abundance — the infinity loop. Unlimited potential, prosperity, and the flow of energy.",
        9: "Completion — the culmination of a cycle. Universal wisdom and the culmination of purpose.",
    }

    return {
        "vibrational_total": total,
        "code": code,
        "root_number": root,
        "root_meaning": root_meanings.get(root, ""),
        "patterns": patterns,
        "creation_frequency_connection": total % 37 == 0 or total % 73 == 0 or "37" in code or "73" in code,
    }


class CodeAgent:
    """Generates and analyzes vibrational reality codes."""

    def __init__(self):
        self.soul = self._load_soul()

    def _load_soul(self):
        try:
            with open(CONFIG_PATH, "r") as f:
                return json.load(f)
        except Exception:
            return {}

    def generate(self, intention_text):
        """Generate a reality code from intention text."""
        code, total = generate_code(intention_text)
        analysis = analyze_code(code, total)

        return {
            "agent": "code",
            "timestamp": datetime.now().isoformat(),
            "reality_code": code,
            "vibrational_total": total,
            "analysis": analysis,
        }

    def run(self, intention_data=None, intention_text=None):
        """Main entry point — generates code from intention agent output."""
        if intention_data:
            text = intention_data.get("full_intention", "")
        elif intention_text:
            text = intention_text
        else:
            text = ""

        if not text.strip():
            return {"agent": "code", "error": "No intention text provided"}

        result = self.generate(text)

        # Attach intention metadata if available
        if intention_data:
            result["category"] = intention_data.get("category")
            result["category_name"] = intention_data.get("category_name")

        return result

    def batch_generate(self, texts):
        """Generate codes for multiple intention texts."""
        results = []
        for text in texts:
            results.append(self.generate(text))
        return results


if __name__ == "__main__":
    agent = CodeAgent()

    # Test with a sample intention
    sample = (
        "I am aligned with my purpose. I am a conscious creator of my reality. "
        "Every thought I think is a seed planted in the quantum field. "
        "I choose thoughts of power, love, and clarity. "
        "I am grateful for this moment of alignment. And so it is."
    )

    result = agent.run(intention_text=sample)
    print(json.dumps(result, indent=2))
