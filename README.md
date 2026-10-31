# Focus Lock for Firefox

A lightweight Firefox extension that helps reduce tab-switching distractions by returning you to a chosen focus tab.

## Features
- Lock the currently active tab with one click.
- Return to the locked tab when another tab is activated.
- Close newly created tabs and return to the focus tab.
- Store lock state locally.

## Install for testing
1. Download or clone this repository.
2. Open Firefox and visit `about:debugging`.
3. Select **This Firefox**.
4. Click **Load Temporary Add-on…**.
5. Select this project's `manifest.json`.

Temporary add-ons are removed when Firefox restarts. For public distribution, submit the packaged extension to Mozilla Add-ons (AMO) for signing/review.

## Project files
- `manifest.json` — extension metadata, permissions, icon references.
- `background.js` — tab monitoring and focus-lock behavior.
- `popup.html`, `popup.css`, `popup.js` — toolbar popup.
- `icons/` — extension icons.

## Limitations
Firefox does not let extensions disable its native new-tab button. A newly opened tab may appear briefly before the extension closes it and returns to the locked tab. This is a productivity aid, not a tamper-proof kiosk lock.

## License
MIT. See `LICENSE`.
