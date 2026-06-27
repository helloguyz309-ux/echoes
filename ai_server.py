"""
ai_server.py — tiny local backend for the Echoes "Ask the Archive" feature.

It holds the OpenAI API key server-side and exposes one endpoint that the
Echoes frontend (Electron / index.html) calls. The key never reaches the
browser. Powered by gpt-5.4-nano.

Run:
    python ai_server.py
Then open Echoes (npm start, or open index.html) and use the
"Ask the Archive" button on any species.
"""

import os

from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS

try:
    from dotenv import load_dotenv

    load_dotenv()
except Exception:  # pragma: no cover
    pass

from openai_helper import ask_archive, MODEL

HERE = os.path.dirname(os.path.abspath(__file__))
app = Flask(__name__, static_folder=None)
# Allow the Electron renderer / file:// pages to call this local server.
CORS(app)


@app.get("/")
def index():
    # Serve the Echoes web UI so the whole app runs in a browser on one URL
    # (no Electron needed). The page calls /ask-archive on this same origin.
    return send_from_directory(HERE, "index.html")


@app.get("/<path:path>")
def static_files(path):
    return send_from_directory(HERE, path)


@app.get("/health")
def health():
    has_key = bool(os.environ.get("OPENAI_API_KEY"))
    return jsonify({"ok": True, "model": MODEL, "key_loaded": has_key})


@app.post("/ask-archive")
def ask_archive_endpoint():
    data = request.get_json(silent=True) or {}
    name = (data.get("name") or "").strip()
    scientific = (data.get("scientific") or "").strip() or None
    context = (data.get("context") or "").strip() or None

    if not name:
        return jsonify({"error": "Please name a species or memory to remember."}), 400

    try:
        result = ask_archive(name, scientific=scientific, context=context)
    except Exception as exc:  # surface a gentle error to the UI
        return jsonify({"error": f"The archive could not answer right now: {exc}"}), 502

    return jsonify(
        {
            "name": name,
            "scientific": scientific,
            "card": result.get("card", ""),
            "fact": result.get("fact", ""),
            "model": MODEL,
        }
    )


if __name__ == "__main__":
    port = int(os.environ.get("AI_PORT", "5057"))
    print(f"Echoes archive keeper listening on http://127.0.0.1:{port}  (model: {MODEL})")
    app.run(host="127.0.0.1", port=port, debug=False)
