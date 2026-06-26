# June 26 Recovery Log

Branch: `recovery/june-26-work`

Start point: `54b06af Recover realistic globe texture path`

## Commit Policy

Always commit local project changes before ending a recovery or implementation session.

Use:

```powershell
$env:SKIP_AUTO_PUSH='1'
git -c safe.directory='C:/Users/Administrator/Downloads/Genwise camp/final project' status --short
git -c safe.directory='C:/Users/Administrator/Downloads/Genwise camp/final project' add <files>
git -c safe.directory='C:/Users/Administrator/Downloads/Genwise camp/final project' commit -m "<message>"
```

Reason: `.git/hooks/post-commit` auto-pushes branches that have an upstream. Setting `SKIP_AUTO_PUSH=1` keeps recovery commits local unless the user explicitly asks to push.

## Recovery Sources

Primary Codex session with lost June 26 patches:

`C:/Users/Administrator/.codex/sessions/2026/06/26/rollout-2026-06-26T09-31-26-019f0216-e76b-78c1-8845-dace8aa77348.jsonl`

Secondary approval-review transcript that quotes large chunks:

`C:/Users/Administrator/.codex/sessions/2026/06/26/rollout-2026-06-26T09-33-55-019f0219-259c-7273-89f3-c902a0c25289.jsonl`

User pasted diff attachment:

`C:/Users/Administrator/.codex/attachments/df0ee4e8-b28a-46ce-92fb-63eac2c64604/pasted-text.txt`

Likely recoverable temp PNG assets:

`C:/Users/ADMINI~1/AppData/Local/Temp/codex-clipboard-*.png`

## Known Recoverable Work

- `index.html` patches for controls and logo/preconnect changes.
- `app.js` patches for region dropdown, animal search/dropdown behavior, current record state, localized animal names, safer image loading, and video fallback behavior.
- `styles.css` patches for light/dark theme attempt and habitat visual layers.
- PNG habitat assets for water, grass, forest, and cloud layers, at least partly recoverable from temp clipboard files.

## Recovery Method

1. Keep all work on `recovery/june-26-work`.
2. Extract exact `apply_patch` inputs from the primary Codex JSONL where possible.
3. Apply one coherent patch group at a time.
4. Restore asset files from temp clipboard sources where exact file sizes match prior logs.
5. Commit after each group with `SKIP_AUTO_PUSH=1`.
6. Verify with static browser/local checks before merging or pushing.

## Progress

- Created this recovery branch.
- Added this recovery log and commit policy note.
- Restored habitat PNG assets into `assets/`.
- Restored the June 26 UI controls and behavior in `index.html`, `app.js`, and `styles.css`:
  - language and theme controls share the topbar preference area,
  - region dropdown is back and stays synced with the region grid,
  - animal search datalist suggestions are back,
  - dark/light theme preference is saved in `localStorage`,
  - animal card/detail images use the recovered local habitat PNGs for fast offline loading.
- Preserved the realistic Three.js globe texture path and existing pin marker code from `54b06af`.
- Verification for this step:
  - `git diff --check` passed, with only normal CRLF warnings,
  - `app.js` parsed successfully through Node `vm.Script`,
  - static checks confirmed the recovered controls exist and all four referenced PNG assets are present.
- Browser caveat: Playwright is installed but its Chromium executable is missing at `C:/Users/Administrator/AppData/Local/ms-playwright/...`; no browser download was performed during recovery.
- Restored a smaller June 25 localization layer:
  - source links have `data-source-key` attributes again,
  - `sourceLinkCopy` was restored for source-link labels,
  - empty search/video loading/motion preview strings now use translation keys instead of hard-coded English.
- Deliberately not reapplied yet: the very large June 25 animal-name/type translation patches around lines `672`, `801`, `815`, `821`, `858`, `891`, `904`, and `910` in `rollout-2026-06-25T09-52-08-019efd03-8cb9-7713-bc39-52b90993b8ec.jsonl`. They are recoverable, but they are broad and mojibake-heavy, so they should be restored in a dedicated pass with browser visual checks.
- Follow-up fix: restored real animal-photo loading as the primary path in `loadAnimalImages()`. The recovered forest/grass/water/cloud assets remain available only as fallback images when curated/Wikimedia animal photos cannot be found.
- Follow-up UI change: replaced the native region `<select>` with a custom dropdown button whose opened panel contains the existing region grid buttons.

## Asset Recovery Map

Exact matches by byte size from the deletion log:

- `assets/forest-realistic-original.png` from `C:/Users/ADMINI~1/AppData/Local/Temp/codex-clipboard-6020f5b0-8e8a-44d1-a684-67f9a7d2a94d.png` (`294750` bytes).
- `assets/water-surface.png` from `C:/Users/ADMINI~1/AppData/Local/Temp/codex-clipboard-2a4076cb-926f-4bac-94c9-815c294b1c68.png` (`716060` bytes).
- `assets/cloud-realistic-original.png` from `C:/Users/ADMINI~1/AppData/Local/Temp/codex-clipboard-7f5cb149-6658-43ed-be15-0a15ed52a689.png` (`200183` bytes).

Best-match recoveries from the same temp batches:

- `assets/forest-realistic.png` from `C:/Users/ADMINI~1/AppData/Local/Temp/codex-clipboard-d63e468d-20b1-447e-b0ce-db5570226ae4.png`.
- `assets/grass-realistic.png` from `C:/Users/ADMINI~1/AppData/Local/Temp/codex-clipboard-49960175-3b58-48d7-9e42-3f3f5166475c.png`.
- `assets/cloud-realistic.png` from `C:/Users/ADMINI~1/AppData/Local/Temp/codex-clipboard-e286f621-c3bd-434f-8482-b19f346c393c.png`.

Note: the exact deleted byte sizes for `forest-realistic.png`, `grass-realistic.png`, and `cloud-realistic.png` were not found under `C:/Users/Administrator` during the read-only search, so those three should be visually verified.
