"""
openai_helper.py — tiny server-side wrapper around OpenAI gpt-5.4-nano.

Keeps the API key on the server (never in the Electron/browser code).
Used by ai_server.py for the "Ask the Archive" feature in Echoes.
"""

import os
import json

from openai import OpenAI

# Load .env if python-dotenv is available (optional dependency).
try:
    from dotenv import load_dotenv

    load_dotenv()
except Exception:  # pragma: no cover - dotenv is optional
    pass

MODEL = os.environ.get("OPENAI_MODEL", "gpt-5.4-nano")

SYSTEM_PROMPT = (
    "You are the keeper of Echoes, a living archive for endangered memory. "
    "You write short, moving 'memory cards' for species and places that are "
    "almost gone. Your tone is gentle, reverent, and archival, like a quiet "
    "museum placard written by someone who loves what is being lost. "
    "You never invent extinction as already complete, never sensationalize, "
    "and never use exclamation marks. Honor the subject with dignity. "
    "Always reply with STRICT JSON only, no markdown, in this exact shape: "
    '{"card": "<2 to 3 sentence memory card>", "fact": "<one striking, '
    'true-feeling fact in a single sentence>"}'
)


def _build_user_prompt(name, scientific=None, context=None):
    parts = [f"Subject of remembrance: {name}."]
    if scientific:
        parts.append(f"Scientific name: {scientific}.")
    if context:
        parts.append(f"What the archive already knows: {context}")
    parts.append(
        "Write a 2 to 3 sentence memory card that helps a visitor feel why "
        "this matters and what would be lost. Then give one striking fact. "
        "Keep the whole reply under 90 words. Return STRICT JSON only."
    )
    return " ".join(parts)


def ask_archive(name, scientific=None, context=None, api_key=None):
    """Return {"card": str, "fact": str} from gpt-5.4-nano for a given subject."""
    key = api_key or os.environ.get("OPENAI_API_KEY")
    if not key:
        raise RuntimeError("OPENAI_API_KEY is not set (check your .env file).")

    client = OpenAI(api_key=key, timeout=30)

    response = client.responses.create(
        model=MODEL,
        input=[
            {"role": "system", "content": SYSTEM_PROMPT},
            {"role": "user", "content": _build_user_prompt(name, scientific, context)},
        ],
        reasoning={"effort": "low"},   # CRITICAL: keeps output_text from coming back empty
        text={"verbosity": "low"},     # keeps the JSON from being truncated
        max_output_tokens=600,
    )

    raw = (response.output_text or "").strip()

    # Be forgiving: strip any accidental code fences, then parse JSON.
    if raw.startswith("```"):
        raw = raw.strip("`")
        if raw.lower().startswith("json"):
            raw = raw[4:]
        raw = raw.strip()

    try:
        data = json.loads(raw)
        card = str(data.get("card", "")).strip()
        fact = str(data.get("fact", "")).strip()
        if card or fact:
            return {"card": card, "fact": fact}
    except json.JSONDecodeError:
        pass

    # Fallback: if the model didn't return clean JSON, surface the raw text
    # as the card so the archive still says something rather than nothing.
    return {"card": raw, "fact": ""}


if __name__ == "__main__":
    # Quick manual smoke test: python openai_helper.py
    result = ask_archive(
        "Vaquita",
        scientific="Phocoena sinus",
        context="Critically endangered. About 10 individuals remain in the "
        "northern Gulf of California. Illegal gillnets are the main threat.",
    )
    print(json.dumps(result, indent=2, ensure_ascii=False))
