"""
Intention Agent — The Builder
Generates structured intentions following universal wisdom flows.
Each intention follows the exact step structure from the intention builder.
"""

import json
import random
from datetime import datetime
from pathlib import Path

CONFIG_PATH = Path(__file__).parent.parent / "config" / "soul.json"

# ─── Intention Category Flows ───
# Each category has a sequence of steps with guidance, wisdom quotes, and templates.
# The agent selects from multiple templates per step for variety.

INTENTION_FLOWS = {
    "core_alignment": {
        "name": "Core Alignment",
        "quote": "Energy flows where intention goes. — Quantum Principle",
        "steps": [
            {
                "key": "center",
                "title": "Centre — Ground Your Energy",
                "guidance": "Begin by grounding yourself in the present moment. Feel your connection to the field.",
                "wisdom": {"text": "The universe is not outside of you. Look inside yourself; everything that you want, you already are.", "ref": "Rumi"},
                "templates": [
                    "I am here. I am present. I am connected to the infinite field of possibility. Every atom of my being vibrates in harmony with the universe. I ground myself in this moment.",
                    "I centre my awareness in the now. The past has released me and the future welcomes me. I stand at the intersection of infinite timelines and I choose alignment.",
                    "I feel my connection to Source. I am not separate from the universe — I am an expression of it. My energy is grounded, my mind is clear, my heart is open.",
                    "I arrive fully in this moment. The noise of the world fades as I tune into the frequency of my highest self. I am centred. I am ready. I am aligned.",
                ]
            },
            {
                "key": "alignment",
                "title": "Alignment — Harmonise with Source",
                "guidance": "Align your personal frequency with the frequency of the universe.",
                "wisdom": {"text": "If you want to find the secrets of the universe, think in terms of energy, frequency and vibration.", "ref": "Nikola Tesla"},
                "templates": [
                    "I align my energy with the highest vibration available to me. My thoughts, my words, and my actions are in harmony with the creative force of the universe.",
                    "I harmonise my personal frequency with Source energy. I release resistance and allow the natural flow of abundance, love, and wisdom to move through me.",
                    "I attune myself to the frequency of creation. Like a tuning fork finding its resonance, I find my alignment with the infinite intelligence that orchestrates all things.",
                    "I surrender my small self to my highest self. I align with the field of pure potentiality. Every cell in my body vibrates at the frequency of harmony and purpose.",
                ]
            },
            {
                "key": "declare",
                "title": "Declaration — State Your Truth",
                "guidance": "Declare your aligned state with conviction and clarity.",
                "wisdom": {"text": "What you think, you become. What you feel, you attract. What you imagine, you create.", "ref": "Buddha"},
                "templates": [
                    "I am aligned with my purpose. I am a conscious creator of my reality. Every thought I think is a seed planted in the quantum field. I choose thoughts of power, love, and clarity.",
                    "I declare my alignment with the universe. I am whole. I am worthy. I am powerful beyond measure. My reality reflects my inner state, and my inner state is one of peace and purpose.",
                    "I am the architect of my experience. I declare alignment with my highest timeline. The universe conspires in my favour because I am in flow with its creative intelligence.",
                    "I stand in my truth. I am a vibrational being in a vibrational universe. I declare that my energy is clear, my intention is pure, and my path is illuminated.",
                ]
            },
            {
                "key": "gratitude",
                "title": "Gratitude — Anchor the Frequency",
                "guidance": "Anchor your alignment with deep, present-tense gratitude.",
                "wisdom": {"text": "Gratitude is the most powerful force in the universe.", "ref": "Quantum Wisdom"},
                "templates": [
                    "I am grateful for this moment of alignment. I am grateful for the energy that flows through me, the wisdom that guides me, and the love that surrounds me. And so it is.",
                    "Deep gratitude fills my heart. I thank the universe for this perfect alignment. I am exactly where I need to be, doing exactly what I need to do. And so it is.",
                    "I anchor this alignment with gratitude. Thank you, Source, for the clarity of this moment. I carry this frequency with me throughout my day. And so it is.",
                    "Gratitude radiates from every cell. I am thankful for the infinite intelligence that supports me, the energy that sustains me, and the love that connects me to all things. And so it is.",
                ]
            },
        ]
    },
    "energy_shield": {
        "name": "Energy Shield",
        "quote": "No one can take your power unless you give it to them. — Quantum Boundaries",
        "steps": [
            {
                "key": "anchor",
                "title": "Anchor — Establish Your Field",
                "guidance": "Ground yourself and establish awareness of your energetic field.",
                "wisdom": {"text": "You are the universe expressing itself as a human for a little while.", "ref": "Eckhart Tolle"},
                "templates": [
                    "I anchor myself in my own sovereign energy. I am a powerful vibrational being and my field is my own. No external force can disrupt my inner peace without my permission.",
                    "I ground my energy deep into the earth and extend it high into the cosmos. I am anchored in my power. My energetic field is strong, clear, and impenetrable.",
                    "I establish my field of protection. I am rooted in my own truth. I am stable, centred, and secure in my energy. Nothing can shake my foundation.",
                    "I connect to the core of my being and feel the strength of my energetic field. I am anchored in love, protected by awareness, and shielded by intention.",
                ]
            },
            {
                "key": "shield",
                "title": "Shield — Activate Protection",
                "guidance": "Visualise and declare your energetic shield around you.",
                "wisdom": {"text": "The only thing that can limit your energy is your belief about it.", "ref": "Quantum Principle"},
                "templates": [
                    "I activate my energetic shield. A brilliant field of light surrounds me — impervious to negativity, toxicity, and lower vibrations. Only love and truth may enter my space.",
                    "My shield is activated. I am surrounded by a sphere of pure, high-frequency energy. It repels all that does not serve my highest good and attracts all that does.",
                    "I visualise a shield of radiant energy encircling me. It is strong, luminous, and alive. It filters everything through the lens of love and releases all that is not mine to carry.",
                    "I call upon the infinite energy of the universe to surround me with protection. My shield is made of light, fuelled by intention, and strengthened by awareness.",
                ]
            },
            {
                "key": "boundaries",
                "title": "Boundaries — Define Your Space",
                "guidance": "Set clear energetic boundaries about what you allow in and what you release.",
                "wisdom": {"text": "Boundaries are the distance at which I can love you and me simultaneously.", "ref": "Prentis Hemphill"},
                "templates": [
                    "I set clear boundaries for my energy. I welcome love, growth, and positive connection. I release judgments, projections, and energies that are not mine. My space is sacred.",
                    "My boundaries are firm and loving. I do not absorb the emotions, fears, or negativity of others. I return what is not mine with compassion and hold what is mine with grace.",
                    "I define the edges of my energetic space. What serves my growth may enter. What drains or diminishes me is returned to its source with love. I am sovereign.",
                    "I declare my energetic boundaries with clarity and love. I am not responsible for the energy of others. I am responsible for my own vibration, and I choose to keep it high.",
                ]
            },
            {
                "key": "closing",
                "title": "Seal — Lock In Your Shield",
                "guidance": "Seal your shield with a declaration of safety and sovereignty.",
                "wisdom": {"text": "Your energy is currency. Spend it well. Invest it wisely. Don't waste it on what doesn't return value.", "ref": "Energy Wisdom"},
                "templates": [
                    "I seal my shield with the power of my intention. I am safe. I am sovereign. I am protected. My energy is my own and I guard it with wisdom. And so it is.",
                    "My shield is sealed. I carry it with me wherever I go. I am protected, centred, and empowered. Nothing can disturb my peace. And so it is.",
                    "I lock in my energetic protection. I am a fortress of light and love. My shield stands strong today and every day. I am safe. And so it is.",
                    "My energy field is sealed and secure. I move through the world with confidence, knowing that I am protected by my own intention and the infinite energy of Source. And so it is.",
                ]
            },
        ]
    },
    "quantum_healing": {
        "name": "Quantum Healing",
        "quote": "The body heals with play, the mind heals with laughter, and the spirit heals with joy. — Proverb",
        "steps": [
            {
                "key": "awareness",
                "title": "Awareness — Scan Your Energy Body",
                "guidance": "Bring gentle awareness to where healing is needed in body, mind, or spirit.",
                "wisdom": {"text": "The wound is the place where the light enters you.", "ref": "Rumi"},
                "templates": [
                    "I bring gentle awareness to my entire being. I scan my body, my mind, and my spirit with compassion. Where there is pain, I send light. Where there is tension, I send ease.",
                    "I observe my energy body without judgment. I notice where healing is needed — in my cells, in my thoughts, in my emotional field. I approach every wound with love.",
                    "I turn my attention inward and listen to the intelligence of my body. Every symptom is a message. Every discomfort is a signal. I listen with presence and respond with care.",
                    "I become aware of every part of my being that calls for healing. I do not resist the pain — I acknowledge it, honour it, and invite transformation.",
                ]
            },
            {
                "key": "release",
                "title": "Release — Let Go of What Doesn't Serve",
                "guidance": "Release stuck energy, old patterns, and anything blocking your healing.",
                "wisdom": {"text": "Letting go gives us freedom, and freedom is the only condition for happiness.", "ref": "Thich Nhat Hanh"},
                "templates": [
                    "I release all stuck energy, all old patterns, and all beliefs that no longer serve my wholeness. I let go with grace and trust. What I release creates space for what I need.",
                    "I surrender the stories of illness, limitation, and suffering. They are not my identity. I release them into the field to be transformed into light and wisdom.",
                    "I breathe out what no longer serves me. Tension, fear, resentment, resistance — I release you all. I am making space for healing, vitality, and renewed energy.",
                    "I let go of every energetic imprint of pain, trauma, and disease. These patterns have served their purpose. I thank them and I release them. I am free.",
                ]
            },
            {
                "key": "receive",
                "title": "Receive — Welcome Healing Energy",
                "guidance": "Open yourself to receive healing energy from the universal field.",
                "wisdom": {"text": "The natural healing force within each one of us is the greatest force in getting well.", "ref": "Hippocrates"},
                "templates": [
                    "I open myself to receive healing energy from the quantum field. Pure, high-frequency light flows into every cell, every organ, every system. I am being restored at the deepest level.",
                    "I welcome the healing intelligence of the universe into my body. Every cell remembers its blueprint of perfect health. I allow that blueprint to activate now.",
                    "I receive healing in body, mind, and spirit. The same energy that created the stars flows through me now, repairing, restoring, and renewing every part of my being.",
                    "I open every channel of my being to receive healing light. It flows into my bones, my blood, my nervous system. I am a vessel for unlimited healing energy.",
                ]
            },
            {
                "key": "declare",
                "title": "Declare — Affirm Your Wholeness",
                "guidance": "Declare your wholeness and health as present-tense reality.",
                "wisdom": {"text": "The greatest revolution of our generation is the discovery that human beings can alter their lives by altering their attitudes of mind.", "ref": "William James"},
                "templates": [
                    "I am whole. I am restored. I am healed at the quantum level. Every cell vibrates with health and vitality. My body is a temple of wellness and my mind is a garden of peace.",
                    "I declare my wholeness now. I am not becoming well — I AM well. Health is my natural state and I return to it with ease, grace, and gratitude.",
                    "I affirm that healing is happening in every moment. My body knows how to heal. My mind knows how to find peace. My spirit knows how to find joy. I trust the process.",
                    "I am healed. I am vital. I am alive with energy and purpose. The universe supports my wellness and I accept it fully. And so it is.",
                ]
            },
            {
                "key": "closing",
                "title": "Integration — Anchor the Healing",
                "guidance": "Seal your healing intention with gratitude and integration.",
                "wisdom": {"text": "Healing is not about fixing what's broken. It's about remembering what's whole.", "ref": "Quantum Healing Principle"},
                "templates": [
                    "I anchor this healing in every layer of my being. I am grateful for my body's intelligence, my mind's resilience, and my spirit's infinite capacity for renewal. And so it is.",
                    "I integrate this healing into my daily life. I carry this frequency of wholeness with me. I am renewed, restored, and radiantly alive. And so it is.",
                    "I seal this healing intention with deep gratitude. My body is healing, my mind is clear, and my spirit is at peace. I trust the process completely. And so it is.",
                    "Healing is not something I hope for — it is something I embody. I close this intention with confidence and gratitude. I am whole. And so it is.",
                ]
            },
        ]
    },
    "clarity_intuition": {
        "name": "Clarity & Intuition",
        "quote": "The intuitive mind is a sacred gift and the rational mind is a faithful servant. — Albert Einstein",
        "steps": [
            {
                "key": "stillness",
                "title": "Stillness — Quiet the Mind",
                "guidance": "Create inner silence to hear the voice of your intuition.",
                "wisdom": {"text": "In the midst of movement and chaos, keep stillness inside of you.", "ref": "Deepak Chopra"},
                "templates": [
                    "I quiet my mind and create space for clarity. In the stillness between my thoughts, wisdom speaks. I release the noise and embrace the silence.",
                    "I breathe deeply and allow stillness to fill me. The chatter of the mind softens. The voice of intuition rises. I am listening.",
                    "I enter the space between thoughts — the field of pure awareness. Here, there is no confusion, no doubt. Only clarity. Only truth.",
                    "I slow down. I breathe. I become still. In this stillness, I remember that I already know the answer. I simply need to listen.",
                ]
            },
            {
                "key": "ask",
                "title": "Inquiry — Ask the Field",
                "guidance": "Present your question to the infinite intelligence of the universe.",
                "wisdom": {"text": "The answer to every question you will ever have is already within you.", "ref": "Inner Wisdom"},
                "templates": [
                    "I present my question to the quantum field with openness and trust. I do not force the answer — I allow it to arise naturally from the wisdom that already lives within me.",
                    "I ask the universe for clarity with humility and receptivity. Show me what I need to see. Tell me what I need to know. Guide me where I need to go.",
                    "I pose my inquiry to infinite intelligence. I trust that the answer will come — in a thought, a feeling, a sign, or a knowing. I remain open to all channels of guidance.",
                    "I ask not because I am lost, but because I am ready to see more clearly. Universe, illuminate the path that serves my highest good and the greatest good of all.",
                ]
            },
            {
                "key": "trust",
                "title": "Trust — Follow Your Inner Knowing",
                "guidance": "Trust the guidance you receive, even if it defies logic.",
                "wisdom": {"text": "Have the courage to follow your heart and intuition. They somehow already know what you truly want to become.", "ref": "Steve Jobs"},
                "templates": [
                    "I trust my intuition completely. The quiet knowing within me is connected to the infinite intelligence of the universe. I follow its guidance without hesitation.",
                    "I trust the answers that arise from within. Even when they defy logic, I know that my intuition sees beyond what my rational mind can comprehend.",
                    "I release the need for certainty and embrace the wisdom of trust. My inner compass is calibrated to truth. I follow it with courage and faith.",
                    "I honour my intuition as a sacred gift. It has never led me astray. I trust it, I follow it, and I allow it to guide my decisions and my actions.",
                ]
            },
            {
                "key": "closing",
                "title": "Clarity — Walk in the Light of Knowing",
                "guidance": "Seal your intention with a declaration of clarity and trust.",
                "wisdom": {"text": "The only real valuable thing is intuition.", "ref": "Albert Einstein"},
                "templates": [
                    "I walk forward with clarity and confidence. My path is illuminated by inner knowing. I am guided, I am clear, and I am certain of my next steps. And so it is.",
                    "Clarity is my birthright. I reclaim it now. I see clearly, I think clearly, and I act with purpose and precision. The fog has lifted. And so it is.",
                    "I seal this intention with the knowing that I am always guided. My intuition is sharp, my vision is clear, and my steps are sure. And so it is.",
                    "I close this intention with gratitude for the clarity that flows through me. I trust my path. I trust my knowing. I trust the universe. And so it is.",
                ]
            },
        ]
    },
    "gratitude_amplification": {
        "name": "Gratitude Amplification",
        "quote": "Gratitude turns what we have into enough. — Melody Beattie",
        "steps": [
            {
                "key": "presence",
                "title": "Presence — Arrive in the Now",
                "guidance": "Become fully present and aware of the abundance that surrounds you.",
                "wisdom": {"text": "If you look at what you have in life, you'll always have more.", "ref": "Oprah Winfrey"},
                "templates": [
                    "I pause and become fully present. Right here, right now, I have more than enough. I open my eyes to the abundance that surrounds me in every direction.",
                    "I arrive completely in this moment. I set aside the worries of tomorrow and the regrets of yesterday. This moment — right now — is a gift. That is why they call it the present.",
                    "I ground myself in the present moment and allow gratitude to wash over me. I am alive. I am breathing. I am conscious. These alone are miracles beyond measure.",
                    "I close my eyes and feel the richness of this moment. The air fills my lungs, my heart beats without effort, and life flows through me. I am grateful beyond words.",
                ]
            },
            {
                "key": "specific",
                "title": "Specifics — Name Your Blessings",
                "guidance": "Be specific in your gratitude. Name the people, experiences, and gifts you are thankful for.",
                "wisdom": {"text": "Gratitude is the healthiest of all human emotions.", "ref": "Zig Ziglar"},
                "templates": [
                    "I am grateful for the people who love me, the roof over my head, the breath in my lungs, and the opportunities that lie before me. I am rich in ways that money cannot measure.",
                    "I give thanks for every small miracle — the morning light, the sound of laughter, a warm meal, a moment of peace. Life is made of these moments and they are all gifts.",
                    "I name my blessings: my health, my relationships, my growth, my challenges (for they have made me stronger), and my dreams (for they give me purpose). I am abundantly blessed.",
                    "I thank the universe for every experience that has shaped me — the joys, the trials, the victories, and the lessons. Each one has contributed to who I am today.",
                ]
            },
            {
                "key": "amplify",
                "title": "Amplify — Expand the Vibration",
                "guidance": "Amplify your gratitude by feeling it in every cell of your body.",
                "wisdom": {"text": "The more you praise and celebrate your life, the more there is in life to celebrate.", "ref": "Oprah Winfrey"},
                "templates": [
                    "I amplify this gratitude until it fills every cell of my body. I feel it in my chest, in my fingertips, in the crown of my head. I radiate thankfulness like the sun radiates light.",
                    "I expand this feeling of gratitude outward. It fills this room, this building, this city, this planet. My gratitude joins the gratitude of millions and amplifies exponentially.",
                    "I turn up the volume on thankfulness. I don't just think it — I FEEL it. Deep, warm, overwhelming gratitude that rewires my brain and recalibrates my vibration.",
                    "I let gratitude become my dominant frequency. It colours every thought, every word, every action. I AM gratitude embodied. The universe responds to this frequency with more to be grateful for.",
                ]
            },
            {
                "key": "closing",
                "title": "Integrate — Carry It Forward",
                "guidance": "Seal your gratitude intention and commit to carrying it through your day.",
                "wisdom": {"text": "Gratitude is not only the greatest of virtues, but the parent of all others.", "ref": "Marcus Tullius Cicero"},
                "templates": [
                    "I seal this gratitude into my being. I carry it with me as a shield against negativity and a magnet for abundance. Today and every day, I choose thankfulness. And so it is.",
                    "I commit to living in gratitude — not just in this moment, but in every moment. Gratitude is my practice, my superpower, and my way of life. And so it is.",
                    "I close this intention with the deepest thankfulness. The universe has given me everything I need and more than I could have imagined. I am grateful. And so it is.",
                    "I anchor gratitude as the foundation of my reality. From this place of thankfulness, all good things flow. I am blessed. I am grateful. I am complete. And so it is.",
                ]
            },
        ]
    },
    "abundance_activation": {
        "name": "Abundance Activation",
        "quote": "Abundance is not something we acquire. It is something we tune into. — Wayne Dyer",
        "steps": [
            {
                "key": "mindset",
                "title": "Abundance Mindset — Shift Your Lens",
                "guidance": "Shift from scarcity thinking to abundance consciousness.",
                "wisdom": {"text": "The universe is full of magical things, patiently waiting for our wits to grow sharper.", "ref": "Eden Phillpotts"},
                "templates": [
                    "I shift my perspective from scarcity to abundance. There is more than enough in this universe for everyone. I release the belief in lack and embrace the truth of infinite supply.",
                    "I dissolve every limiting belief about money, success, and worthiness. I am not competing for a finite pie — I am creating my own feast. Abundance is my natural state.",
                    "I rewire my mind for abundance. Where I once saw lack, I now see opportunity. Where I once felt unworthy, I now know I am deserving. The universe is abundant and so am I.",
                    "I choose the lens of abundance. I see wealth in my relationships, richness in my experiences, and prosperity in my potential. Scarcity is an illusion I no longer subscribe to.",
                ]
            },
            {
                "key": "activate",
                "title": "Activation — Open the Channels",
                "guidance": "Open your energetic channels to receive abundance in all its forms.",
                "wisdom": {"text": "You are a living magnet. What you attract into your life is in harmony with your dominant thoughts.", "ref": "Brian Tracy"},
                "templates": [
                    "I open every channel of abundance — financial, relational, spiritual, creative. I am a magnet for prosperity and I attract it with ease and grace.",
                    "I activate abundance in every dimension of my life. Money flows to me. Opportunities find me. Love surrounds me. I am a vessel for universal generosity.",
                    "I open my hands, my heart, and my mind to receive. The universe is constantly sending abundance — I simply need to be open to receive it. I am open. I am ready.",
                    "I activate my abundance frequency. I vibrate at the level of prosperity, joy, and unlimited possibility. The universe matches my vibration with miraculous precision.",
                ]
            },
            {
                "key": "declare",
                "title": "Declaration — Claim Your Prosperity",
                "guidance": "Declare abundance as your present-tense reality.",
                "wisdom": {"text": "See yourself living in abundance and you will attract it.", "ref": "Rhonda Byrne"},
                "templates": [
                    "I am abundant. I am prosperous. I am wealthy in every way that matters. Money flows to me easily and frequently. I deserve to thrive and I do.",
                    "I declare abundance as my reality. Not future tense — present tense. I AM abundant. I AM prosperous. I AM living in the flow of universal generosity.",
                    "I claim my birthright of abundance. The universe did not create me to struggle — it created me to thrive. I accept prosperity in all its forms.",
                    "I am a conscious creator of wealth and abundance. My thoughts create my reality and I think abundance. My words shape my world and I speak prosperity.",
                ]
            },
            {
                "key": "closing",
                "title": "Seal — Anchor Abundance",
                "guidance": "Seal your abundance intention with gratitude and certainty.",
                "wisdom": {"text": "When you are grateful, fear disappears and abundance appears.", "ref": "Tony Robbins"},
                "templates": [
                    "I seal this intention with certainty. Abundance is not coming — it is here. I am grateful for the flow of prosperity in my life. And so it is.",
                    "I anchor abundance as my default setting. It is woven into the fabric of my reality. I am grateful, I am abundant, and I am free. And so it is.",
                    "I close this intention with the confidence that the universe is always providing for me. I trust, I receive, and I give generously in return. And so it is.",
                    "I seal my abundance activation with gratitude and joy. Money comes, opportunities arrive, and blessings multiply. This is my reality. And so it is.",
                ]
            },
        ]
    },
    "energy_warfare": {
        "name": "Energy Warfare",
        "quote": "Your calm mind is the ultimate weapon against your challenges. — Bryant McGill",
        "steps": [
            {
                "key": "awareness",
                "title": "Awareness — Identify the Disruption",
                "guidance": "Identify the source of energetic disruption you are facing.",
                "wisdom": {"text": "Until you make the unconscious conscious, it will direct your life and you will call it fate.", "ref": "Carl Jung"},
                "templates": [
                    "I bring awareness to the energetic disruption in my life. I do not fear it — I observe it. I see where my energy is being drained, where my boundaries are being tested, and where my peace is being threatened.",
                    "I identify the patterns, people, and situations that are disrupting my energetic balance. Awareness is the first weapon. When I can see it clearly, I can address it powerfully.",
                    "I observe the energy around me without absorbing it. I notice what is mine and what is not. I notice what empowers me and what depletes me. Awareness is my shield.",
                    "I bring the light of consciousness to every shadow that threatens my peace. I do not look away from what is uncomfortable — I face it with clarity and courage.",
                ]
            },
            {
                "key": "stand",
                "title": "Stand — Claim Your Power",
                "guidance": "Stand in your power and refuse to be diminished by external forces.",
                "wisdom": {"text": "No one can make you feel inferior without your consent.", "ref": "Eleanor Roosevelt"},
                "templates": [
                    "I stand in my full power. No person, no situation, no energy can diminish me without my consent. I am sovereign. I am strong. I reclaim every ounce of power I have given away.",
                    "I rise to my full energetic height. I refuse to shrink, to people-please, or to dim my light for anyone's comfort. My power is not aggressive — it is radiant.",
                    "I plant my feet firmly in my truth and I stand. I am unshakeable. I am unbreakable. The storms of life may blow, but I remain rooted in my own sovereignty.",
                    "I claim my power now. I am not a victim of circumstance — I am a creator of reality. I stand tall, I stand firm, and I refuse to be moved by anything less than love.",
                ]
            },
            {
                "key": "transmute",
                "title": "Transmute — Transform the Energy",
                "guidance": "Transform negative energy into fuel for your growth and empowerment.",
                "wisdom": {"text": "The lotus flower blooms most beautifully from the deepest and thickest mud.", "ref": "Buddhist Proverb"},
                "templates": [
                    "I transmute every negative energy into fuel for my growth. What was sent to destroy me becomes the catalyst for my transformation. I am an alchemist of consciousness.",
                    "I transform adversity into strength, opposition into opportunity, and darkness into light. Nothing that comes against me can survive the fire of my awareness.",
                    "I take every disruptive energy and run it through the filter of my consciousness. What enters as chaos exits as clarity. What enters as fear exits as wisdom.",
                    "I am the alchemist of my own experience. I take the lead of negativity and transmute it into the gold of growth. Nothing is wasted. Everything serves my evolution.",
                ]
            },
            {
                "key": "closing",
                "title": "Victory — Declare Energetic Sovereignty",
                "guidance": "Seal your energetic warfare with a declaration of victory and sovereignty.",
                "wisdom": {"text": "You have power over your mind — not outside events. Realise this, and you will find strength.", "ref": "Marcus Aurelius"},
                "templates": [
                    "I declare energetic victory. My field is clear, my mind is sharp, and my spirit is invincible. No weapon formed against my energy shall prosper. And so it is.",
                    "I seal this intention with the certainty of my sovereignty. I am the master of my energy. I am untouchable in my peace. I am victorious in my awareness. And so it is.",
                    "The battle is won in consciousness before it is won in reality. I have won this battle in my mind. My energy is sovereign, my boundaries are firm, my peace is absolute. And so it is.",
                    "I declare victory over every energetic disruption. I stand in my power, free and clear. My energy is my own. My peace is non-negotiable. And so it is.",
                ]
            },
        ]
    },
    "collective_intention": {
        "name": "Collective Intention",
        "quote": "Alone we can do so little; together we can do so much. — Helen Keller",
        "steps": [
            {
                "key": "connect",
                "title": "Connect — Join the Field",
                "guidance": "Connect your individual energy to the collective field of consciousness.",
                "wisdom": {"text": "We are not human beings having a spiritual experience. We are spiritual beings having a human experience.", "ref": "Pierre Teilhard de Chardin"},
                "templates": [
                    "I connect my energy to the collective field of consciousness. I am not alone in this intention — I am joined by millions of conscious creators around the world who are sending love and light into the field.",
                    "I open my heart to the collective. My intention joins the intentions of all who seek peace, healing, and harmony. Together, our combined frequency is unstoppable.",
                    "I plug into the grid of collective consciousness. My energy amplifies as it joins with others. What I intend for myself, I intend for all beings. We rise together.",
                    "I recognise my connection to all life. My intention ripples outward, touching every soul it reaches. I am a node in the infinite network of consciousness.",
                ]
            },
            {
                "key": "amplify",
                "title": "Amplify — Multiply Through Unity",
                "guidance": "Amplify your intention by connecting it to the power of collective resonance.",
                "wisdom": {"text": "When two or more are gathered in focused intention, the power is not doubled — it is squared.", "ref": "Quantum Resonance Principle"},
                "templates": [
                    "My intention is amplified by the collective. What begins as a single voice becomes a chorus. What begins as a ripple becomes a wave. Together, we are an unstoppable force for good.",
                    "I multiply my intention through the power of unity. Every conscious creator who aligns with this frequency adds power. We are stronger together than any of us could be alone.",
                    "I send my intention into the collective field and feel it amplified a thousandfold. The universe responds not just to my voice, but to our unified vibration.",
                    "My intention joins the river of collective consciousness. It gains speed, power, and momentum. What one person intends becomes what millions manifest.",
                ]
            },
            {
                "key": "serve",
                "title": "Service — Intend for the Highest Good",
                "guidance": "Extend your intention beyond yourself to serve the highest good of all.",
                "wisdom": {"text": "The best way to find yourself is to lose yourself in the service of others.", "ref": "Mahatma Gandhi"},
                "templates": [
                    "I extend my intention beyond myself. I intend peace for the world, healing for the suffering, abundance for the struggling, and love for the lonely. My intention serves all.",
                    "I dedicate this intention to the highest good of all beings. May it bring light where there is darkness, hope where there is despair, and connection where there is isolation.",
                    "I serve the collective with my energy. My intention is not selfish — it is a gift to the world. May it ripple outward and touch every heart that needs it.",
                    "I offer my intention as service to humanity. May every being feel the frequency of love, peace, and possibility. May my contribution, however small, shift the balance toward light.",
                ]
            },
            {
                "key": "closing",
                "title": "Unity — Seal in Oneness",
                "guidance": "Seal your collective intention with a declaration of unity and interconnection.",
                "wisdom": {"text": "In the end, only kindness matters.", "ref": "Jewel"},
                "templates": [
                    "I seal this intention in the spirit of oneness. We are all connected. We are all one field. What benefits one, benefits all. And so it is.",
                    "I close this collective intention with love. My energy merges with the energy of all conscious beings. Together, we are creating a new reality. And so it is.",
                    "I seal this with the power of unity. Alone, I am a spark. Together, we are a supernova. The collective field is activated and the world is shifting. And so it is.",
                    "I anchor this collective intention in the unified field. We are one consciousness, one energy, one love. What we intend together, we manifest together. And so it is.",
                ]
            },
        ]
    },
    "forgiveness_release": {
        "name": "Forgiveness & Release",
        "quote": "Forgiveness is not about the other person. It is about setting yourself free. — Lewis B. Smedes",
        "steps": [
            {
                "key": "acknowledge",
                "title": "Acknowledge — Face What Happened",
                "guidance": "Acknowledge the pain or wrong without minimising or dramatising it.",
                "wisdom": {"text": "The truth will set you free, but first it will make you uncomfortable.", "ref": "Gloria Steinem"},
                "templates": [
                    "I acknowledge what happened with honesty and clarity. I do not minimise my pain, nor do I inflate it. It happened. It hurt. And now, I am ready to release it.",
                    "I face the truth of what was done and how it affected me. I allow myself to feel the full weight of it — not to wallow, but to honour my experience before I let it go.",
                    "I bring honesty to this moment. I acknowledge the wound, the betrayal, the disappointment. I see it clearly. I feel it fully. And I prepare to release it.",
                    "I look at what happened without flinching. The first step to freedom is truth. I tell myself the truth about what I experienced, and I do so with compassion for myself.",
                ]
            },
            {
                "key": "feel",
                "title": "Feel — Process the Emotion",
                "guidance": "Allow yourself to fully feel the emotions without judgment.",
                "wisdom": {"text": "What you resist, persists. What you look at, disappears.", "ref": "Neale Donald Walsch"},
                "templates": [
                    "I allow myself to feel everything — the anger, the sadness, the betrayal, the grief. I do not push it down or pretend it doesn't exist. I honour my emotions as valid and important.",
                    "I sit with my feelings without trying to fix them. Tears may flow. Anger may rise. Pain may surface. I let it all come. This is not weakness — this is the bravest thing I can do.",
                    "I give myself permission to feel without judgment. There is no wrong emotion. There is only energy moving through me. I allow it to flow and I trust that it will pass.",
                    "I process every emotion connected to this experience. I breathe through the pain, I exhale the resentment, and I make space for something new — peace.",
                ]
            },
            {
                "key": "forgive",
                "title": "Forgive — Release the Bond",
                "guidance": "Forgive not to condone, but to free yourself from the energetic bond.",
                "wisdom": {"text": "Holding onto anger is like drinking poison and expecting the other person to die.", "ref": "Buddha (attributed)"},
                "templates": [
                    "I choose to forgive. Not because what happened was acceptable, but because I refuse to carry this weight any longer. I forgive to set myself free. I cut the energetic cord now.",
                    "I release the bond of resentment. Forgiveness does not mean approval — it means freedom. I choose freedom over bitterness. I choose peace over revenge.",
                    "I forgive those who have hurt me. I forgive myself for any part I played. I forgive the situation for being what it was. Forgiveness is the key that unlocks my cage.",
                    "I release every person, every situation, and every memory that holds me in pain. I forgive fully and completely. Not for them — for me. I am free.",
                ]
            },
            {
                "key": "closing",
                "title": "Freedom — Step into the New",
                "guidance": "Seal your forgiveness with a declaration of freedom and new beginnings.",
                "wisdom": {"text": "Every moment is a fresh beginning.", "ref": "T.S. Eliot"},
                "templates": [
                    "I step into my freedom. The past no longer holds me. I am light, I am free, and I am ready for the next chapter. My story continues, and it is beautiful. And so it is.",
                    "I seal this release with the deepest gratitude. I am free from the weight I have carried. I am lighter, stronger, and more open than before. And so it is.",
                    "I close this intention with a declaration of new beginnings. What was broken is being mended. What was heavy is now light. I am free. And so it is.",
                    "I declare my freedom. The hooks are removed. The cords are cut. The weight is lifted. I walk forward unburdened, with a heart full of peace and a spirit full of hope. And so it is.",
                ]
            },
        ]
    },
    "reality_declaration": {
        "name": "Reality Declaration",
        "quote": "I am the master of my fate, I am the captain of my soul. — William Ernest Henley",
        "steps": [
            {
                "key": "identity",
                "title": "Identity — Who I Am",
                "guidance": "Declare who you are at the deepest level of your being.",
                "wisdom": {"text": "The privilege of a lifetime is to become who you truly are.", "ref": "Carl Jung"},
                "templates": [
                    "I am a conscious creator of reality. I am infinite potential expressing itself through human experience. I am powerful beyond my conditioning and limitless beyond my fears.",
                    "I declare who I am: I am love. I am power. I am wisdom. I am creativity. I am not defined by my circumstances — I define my circumstances through my vibration.",
                    "I am the awareness behind my thoughts. I am the stillness beneath the storm. I am an expression of the universe itself, and I carry the power of creation within me.",
                    "I claim my true identity. I am not my job, my bank account, or my past mistakes. I am consciousness. I am energy. I am the universe experiencing itself. This is who I am.",
                ]
            },
            {
                "key": "vision",
                "title": "Vision — What I Create",
                "guidance": "Speak the vision of your desired reality into existence.",
                "wisdom": {"text": "Imagination is everything. It is the preview of life's coming attractions.", "ref": "Albert Einstein"},
                "templates": [
                    "I see my desired reality with perfect clarity. I visualise it, I feel it, I live it in my imagination until it has no choice but to manifest in the physical world.",
                    "I create my reality through the power of my vision. I see abundance, I see love, I see purpose, I see health. This vision is not fantasy — it is prophecy.",
                    "I speak my vision into the quantum field: I live in abundance. I am surrounded by love. I do meaningful work. I am healthy and vibrant. This is my reality.",
                    "I paint the picture of my life with the brush of my imagination. Every detail is vivid, every colour is bright, every scene is full of joy and purpose.",
                ]
            },
            {
                "key": "command",
                "title": "Command — Speak It Into Being",
                "guidance": "Command your reality with the authority of a conscious creator.",
                "wisdom": {"text": "In the beginning was the Word. Words create worlds.", "ref": "Universal Principle"},
                "templates": [
                    "I command my reality into existence. I speak with the authority of a conscious creator. My words are not wishes — they are instructions to the quantum field.",
                    "I declare my reality with absolute certainty. I do not hope — I KNOW. I do not wish — I COMMAND. The universe responds to the frequency of certainty.",
                    "I speak and reality listens. I am the author of my story, the director of my movie, the composer of my symphony. What I declare with conviction, the universe delivers.",
                    "I use the power of my voice to shape reality. Every word I speak is a vibration that restructures the field around me. I speak life, I speak abundance, I speak truth.",
                ]
            },
            {
                "key": "closing",
                "title": "Embodiment — Become the Reality",
                "guidance": "Embody your declaration. Don't just say it — become it.",
                "wisdom": {"text": "Be the change you wish to see in the world.", "ref": "Mahatma Gandhi"},
                "templates": [
                    "I don't just declare my reality — I become it. I embody abundance. I radiate love. I walk in purpose. I AM the reality I have declared. And so it is.",
                    "I step into my declared reality right now. Not tomorrow, not someday — NOW. I carry myself as the person I have declared myself to be. And so it is.",
                    "I embody my declaration in every thought, every word, every action. I do not wait for reality to change — I change first, and reality follows. And so it is.",
                    "I seal this declaration by becoming it. I am not creating a future — I am claiming the present. This is who I am. This is my reality. And so it is.",
                ]
            },
        ]
    },
    "peace_presence": {
        "name": "Peace & Presence",
        "quote": "Peace is not the absence of conflict, but the presence of inner calm. — Zen Wisdom",
        "steps": [
            {
                "key": "arrive",
                "title": "Arrive — Land in the Present",
                "guidance": "Leave the past and future behind. Arrive fully in this moment.",
                "wisdom": {"text": "The present moment is the only moment available to us, and it is the door to all moments.", "ref": "Thich Nhat Hanh"},
                "templates": [
                    "I arrive fully in this moment. I release every worry about tomorrow and every regret about yesterday. There is only now. And now is more than enough.",
                    "I land in the present moment with my whole being. My body is here. My mind is here. My heart is here. I am completely, totally, beautifully present.",
                    "I stop. I breathe. I am here. The rush of the world fades away and all that remains is this breath, this heartbeat, this moment of perfect presence.",
                    "I release the illusion of time and settle into the eternal now. The past is a memory, the future is a possibility, but this moment is real. I choose to be in what is real.",
                ]
            },
            {
                "key": "surrender",
                "title": "Surrender — Release Control",
                "guidance": "Surrender the need to control. Let peace flow in naturally.",
                "wisdom": {"text": "Surrender to what is. Let go of what was. Have faith in what will be.", "ref": "Sonia Ricotti"},
                "templates": [
                    "I surrender my need to control every outcome. I trust the flow of life. I trust the intelligence of the universe. I release my grip and I allow peace to fill the space.",
                    "I let go. I stop fighting, stop pushing, stop forcing. In this surrender, I find a peace more profound than anything I could have created through effort.",
                    "I surrender to the rhythm of the universe. Like a leaf on a river, I trust the current. I do not need to steer every moment — I need only to be present in it.",
                    "I release my resistance to what is. Acceptance is not defeat — it is the doorway to peace. I accept this moment exactly as it is, and I find that it is perfect.",
                ]
            },
            {
                "key": "stillness",
                "title": "Stillness — Embrace the Silence",
                "guidance": "Find the stillness beneath the noise. This is where peace lives.",
                "wisdom": {"text": "Silence is not the absence of something but the presence of everything.", "ref": "Gordon Hempton"},
                "templates": [
                    "I embrace the silence within me. Beneath the thoughts, beneath the emotions, beneath the stories — there is a vast, infinite stillness. That stillness IS the peace I seek.",
                    "I sink deeper into the quiet space within. Here, there is no urgency. No anxiety. No pressure. Only peace. Only presence. Only the soft hum of being alive.",
                    "I find the eye of the storm within myself. The world may swirl around me, but at my centre there is perfect calm. I rest in this calm and I let it sustain me.",
                    "I listen to the silence between my heartbeats. In that silence, I hear the universe breathing. In that silence, I find the peace that has been waiting for me all along.",
                ]
            },
            {
                "key": "closing",
                "title": "Carry — Take Peace With You",
                "guidance": "Seal this intention and carry peace with you into the world.",
                "wisdom": {"text": "Do not let the behaviour of others destroy your inner peace.", "ref": "Dalai Lama"},
                "templates": [
                    "I carry this peace with me wherever I go. It is not fragile — it is the strongest force I possess. No external circumstance can take it from me. And so it is.",
                    "I seal this peace into my being. It weaves through my thoughts, my words, my actions. I am a beacon of calm in a chaotic world. And so it is.",
                    "I take this presence with me. In every meeting, every conversation, every challenge — I remain centred, grounded, and at peace. This is my gift to myself and to the world. And so it is.",
                    "I close this intention with deep peace. I am calm. I am present. I am whole. And nothing — absolutely nothing — can disturb the peace that lives within me. And so it is.",
                ]
            },
        ]
    },
    "shadow_integration": {
        "name": "Shadow Integration",
        "quote": "One does not become enlightened by imagining figures of light, but by making the darkness conscious. — Carl Jung",
        "steps": [
            {
                "key": "confront",
                "title": "Confront — Meet Your Shadow",
                "guidance": "Acknowledge the parts of yourself you have hidden, denied, or suppressed.",
                "wisdom": {"text": "Everything that irritates us about others can lead us to an understanding of ourselves.", "ref": "Carl Jung"},
                "templates": [
                    "I acknowledge the parts of myself I have hidden. My fears, my jealousies, my anger, my shame — they are not enemies. They are messengers. I meet them with courage.",
                    "I turn to face my shadow. I do not run from the darkness within me — I illuminate it with awareness. Every suppressed emotion, every denied truth — I see you.",
                    "I confront the aspects of myself that I have been afraid to look at. The parts I have hidden from the world and from myself. Today, I choose to see the whole picture.",
                    "I invite my shadow self into the light. Not to judge, not to shame, but to understand. Every shadow aspect holds a gift — a lesson, a strength, a truth I need to integrate.",
                ]
            },
            {
                "key": "accept",
                "title": "Accept — Embrace the Whole",
                "guidance": "Accept all parts of yourself — light and dark — with compassion.",
                "wisdom": {"text": "Wholeness is not achieved by cutting off a portion of one's being, but by integration of the contraries.", "ref": "Carl Jung"},
                "templates": [
                    "I accept myself completely — light and shadow alike. I am not broken. I am whole. Wholeness includes the dark as much as the light. I embrace every aspect of who I am.",
                    "I stop fighting against myself. My shadow is not my enemy — it is the half of me that has been neglected. I accept it, I honour it, and I bring it home.",
                    "I embrace my imperfections, my flaws, my dark corners. They are part of my wholeness. Without them, I would be incomplete. I accept myself fully and unconditionally.",
                    "I look at my shadow with the same love I give to my light. Both are me. Both are valid. Both deserve compassion and integration. I am whole.",
                ]
            },
            {
                "key": "integrate",
                "title": "Integrate — Unify the Whole Self",
                "guidance": "Integrate your shadow into your conscious self, reclaiming the energy it holds.",
                "wisdom": {"text": "The cave you fear to enter holds the treasure you seek.", "ref": "Joseph Campbell"},
                "templates": [
                    "I integrate my shadow into my conscious awareness. The energy I spent suppressing it is now reclaimed. I am more powerful, more authentic, and more whole than before.",
                    "I weave my shadow into the tapestry of my full self. The anger becomes passion. The fear becomes caution. The shame becomes humility. Nothing is wasted.",
                    "I bring my hidden parts into the light and I integrate them. They are no longer separate — they are part of my wholeness. I am both light and shadow, and that makes me complete.",
                    "I reclaim the power held in my shadow. Every denied aspect of myself held energy that I now recover. I am fuller, stronger, and more integrated than ever before.",
                ]
            },
            {
                "key": "closing",
                "title": "Transformation — Rise as the Whole Self",
                "guidance": "Seal your integration and step forward as your complete, authentic self.",
                "wisdom": {"text": "Out of your vulnerabilities will come your strength.", "ref": "Sigmund Freud"},
                "templates": [
                    "I rise as my whole self — integrated, authentic, and powerful. My shadow is no longer my secret — it is my strength. I am complete. And so it is.",
                    "I seal this integration with gratitude. I am grateful for my shadow — it has taught me, tested me, and ultimately made me whole. I am free. And so it is.",
                    "I step into the world as my complete self. No more masks, no more hiding, no more suppressing. I am all of me — and all of me is enough. And so it is.",
                    "I close this intention with the certainty that I am whole. Light and shadow, strength and vulnerability, joy and sorrow — all of me is integrated. And so it is.",
                ]
            },
        ]
    },
}


class IntentionAgent:
    """Builds structured intentions from category flows."""

    def __init__(self):
        self.flows = INTENTION_FLOWS
        self.soul = self._load_soul()

    def _load_soul(self):
        try:
            with open(CONFIG_PATH, "r") as f:
                return json.load(f)
        except Exception:
            return {}

    def build_intention(self, category, topic=None):
        """Build a complete structured intention for a category."""
        cat_key = self._normalize_category(category)
        flow = self.flows.get(cat_key)

        if not flow:
            flow = self.flows["core_alignment"]
            cat_key = "core_alignment"

        # Build each step by selecting a random template
        intention_parts = []
        step_details = []

        for step in flow["steps"]:
            template = random.choice(step["templates"])

            # If topic provided, try to weave it in for relevant steps
            if topic and step["key"] in ("declare", "activate", "ask", "need", "vision"):
                template = self._inject_topic(template, topic)

            intention_parts.append(template)
            step_details.append({
                "key": step["key"],
                "title": step["title"],
                "text": template,
                "wisdom": step["wisdom"],
            })

        full_intention = "\n\n".join(intention_parts)

        return {
            "agent": "intention",
            "timestamp": datetime.now().isoformat(),
            "category": cat_key,
            "category_name": flow["name"],
            "category_quote": flow["quote"],
            "steps": step_details,
            "full_intention": full_intention,
            "topic": topic,
        }

    def run(self, wisdom_data=None, topic=None):
        """Main entry point — builds intention from wisdom agent output."""
        category = "core_alignment"
        if wisdom_data:
            category = wisdom_data.get("category", "core_alignment")
        if topic:
            category = self._topic_to_category(topic)

        result = self.build_intention(category, topic=topic)

        # Attach wisdom data if provided
        if wisdom_data:
            result["wisdom_data"] = {
                "daily_quote": wisdom_data.get("daily_quote"),
                "category_wisdom": wisdom_data.get("quotes"),
            }

        return result

    def _normalize_category(self, category):
        mapping = {
            "core_alignment": "core_alignment",
            "foundation": "core_alignment",
            "energy_shield": "energy_shield",
            "protection": "energy_shield",
            "quantum_healing": "quantum_healing",
            "healing": "quantum_healing",
            "health": "quantum_healing",
            "clarity_intuition": "clarity_intuition",
            "clarity": "clarity_intuition",
            "intuition": "clarity_intuition",
            "guidance": "clarity_intuition",
            "wisdom": "clarity_intuition",
            "gratitude_amplification": "gratitude_amplification",
            "gratitude": "gratitude_amplification",
            "thanksgiving": "gratitude_amplification",
            "abundance_activation": "abundance_activation",
            "abundance": "abundance_activation",
            "prosperity": "abundance_activation",
            "petition": "abundance_activation",
            "energy_warfare": "energy_warfare",
            "boundaries": "energy_warfare",
            "warfare": "energy_warfare",
            "collective_intention": "collective_intention",
            "collective": "collective_intention",
            "unity": "collective_intention",
            "forgiveness_release": "forgiveness_release",
            "forgiveness": "forgiveness_release",
            "release": "forgiveness_release",
            "reality_declaration": "reality_declaration",
            "declaration": "reality_declaration",
            "manifestation": "reality_declaration",
            "peace_presence": "peace_presence",
            "peace": "peace_presence",
            "presence": "peace_presence",
            "shadow_integration": "shadow_integration",
            "shadow": "shadow_integration",
            "integration": "shadow_integration",
        }
        return mapping.get(category.lower().strip(), "core_alignment")

    def _topic_to_category(self, topic):
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
            "family": "collective_intention", "community": "collective_intention", "unity": "collective_intention",
            "forgive": "forgiveness_release", "release": "forgiveness_release", "let go": "forgiveness_release",
            "manifest": "reality_declaration", "create": "reality_declaration", "vision": "reality_declaration",
            "shadow": "shadow_integration", "darkness": "shadow_integration", "wholeness": "shadow_integration",
        }
        for key, cat in topic_cat_map.items():
            if key in topic_lower:
                return cat
        return "abundance_activation"

    def _inject_topic(self, template, topic):
        """Inject topic into template where appropriate."""
        if "I bring before" in template or "I present" in template:
            template = template.replace(
                "I bring before",
                f"I bring before the field my intention for {topic}."
            )
        return template


if __name__ == "__main__":
    agent = IntentionAgent()
    result = agent.run()
    print(json.dumps(result, indent=2, default=str))
