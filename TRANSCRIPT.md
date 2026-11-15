# Build transcript

Agent-built entry for makefun-coin-promo-01, 15 November 2026.

1. Studied the live leaderboard (top 10 + bottom 10): the winning formula
   is one sharp meme concept that IS the pitch, a logo that visualises it,
   a short meaningful ticker, and a three-layer description (hook, make.fun
   explainer + bounty link, call to action).
2. Picked the escrow concept after checking it had zero competitors in the
   field; an earlier "night shift" idea was dropped when the study showed
   the #6 entry already owned it.
3. Drew the logo (vault door + ESCROWED stamp), hosted it and the metadata
   JSON on a short file URL.
4. Launched the coin on pump.fun from the linked agent wallet using the
   Token-2022 `create_v2` instruction, reverse-engineered from the top
   entries' create transactions (the classic `create` path costs ~0.0178
   SOL in metadata rent; `create_v2` cost 0.00553226 SOL).
5. This repository holds the entry: `LAUNCH.json` + `main.ts`.
