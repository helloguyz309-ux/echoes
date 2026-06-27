# Echoes

A living archive for endangered memory. Echoes is an interactive globe of
threatened species: spin the Earth, pick a region, and meet five endangered
animals from that part of the world (the project begins with the vaquita).

It runs as a desktop app via Electron, or you can simply open `index.html`
in a browser.

```bash
npm install
npm start
```

## AI feature

### Ask the Archive

Every species detail panel now has an **Ask the Archive** button. Press it and
the archive's "keeper" writes a short, moving 2–3 sentence **memory card** about
that creature, plus **one striking fact**, in a gentle archival tone. It is
meant to make a visitor feel why this life matters and what would be lost — the
emotional heart of Echoes, now able to speak.

It is powered by **OpenAI `gpt-5.4-nano`** through a tiny local backend so the
API key always stays server-side (never in the Electron/browser code).

**Files added for this feature**

- `ai_server.py` — small Flask backend exposing `POST /ask-archive` and `GET /health`.
- `openai_helper.py` — the server-side gpt-5.4-nano client (the prompt + archival voice).
- `requirements.txt` — Python dependencies.
- `.env` — holds `OPENAI_API_KEY` and `OPENAI_MODEL` (git-ignored; never commit it).

The frontend wiring lives in `app.js` (`askTheArchive(...)`, button in the
detail panel) and `styles.css` (the `.archive-card` styling).

**How to run the AI feature**

1. Create your `.env` in this folder:

   ```
   OPENAI_API_KEY=sk-...your key...
   OPENAI_MODEL=gpt-5.4-nano
   AI_PORT=5057
   ```

2. Install the Python deps and start the local keeper:

   ```bash
   pip install -r requirements.txt
   python ai_server.py
   ```

   It listens on `http://127.0.0.1:5057`.

3. Start Echoes as usual (`npm start`, or open `index.html`), open any species,
   and click **Ask the Archive**.

Quick check that the backend works on its own:

```bash
curl -s http://127.0.0.1:5057/ask-archive \
  -H "Content-Type: application/json" \
  -d '{"name":"Vaquita","scientific":"Phocoena sinus","context":"About 10 left in the Gulf of California."}'
```
