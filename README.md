# Battle of Talingchan Simulator

A lightweight mobile-first prototype for a rules-driven Battle of Talingchan TCG simulator.

## Overview

This repository currently contains a playable front-end foundation for the game concept:

- mobile-first battle UI
- card hand, deck, discard, and board zones
- turn management and mana tracking
- basic combat and game log
- easy starting point for expanding with full card rules, abilities, and deck-building

## Run locally

Because this is a simple static app, you can open `index.html` directly in a browser.

If you prefer a local web server:

```bash
python -m http.server 8000
```

Then open:

- http://localhost:8000

## Project structure

- `index.html` — markup for the battle screen
- `styles.css` — mobile-first UI styling
- `app.js` — card data, game state, turn flow, and basic combat logic

## Next ideas

- add full card definitions and card effects
- implement a proper board/slot system
- add zone logic for hand, discard, deck, and summon timing
- introduce AI or duel flow for PvE
- add rules validation for game actions

## Notes

This is intentionally a foundation rather than a complete game implementation, making it easy to evolve into a full simulator without introducing a heavy framework.
