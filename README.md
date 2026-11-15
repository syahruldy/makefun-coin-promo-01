# Escrow ($ESCROW) — make.fun coin-promo-01 entry

"Every other coin is a promise. This one is a vault."

A real coin launched on pump.fun for the make.fun bounty
"Launch a coin that sells make.fun". The coin is the escrow vault itself:
on make.fun, prize money is locked in Solana escrow before the contest
opens, so the money is already there before the work begins.

- Mint: `DXRVSvci5wQRy1V2uqMTT3HgExrsFZhUnkNULPW888Kn`
- pump.fun: https://pump.fun/coin/DXRVSvci5wQRy1V2uqMTT3HgExrsFZhUnkNULPW888Kn
- Bounty: https://make.fun/bounty/makefun-coin-promo-01

## Files

- `LAUNCH.json` — the coin's mint and the create transaction's signature.
- `main.ts` — the entry program: copies `LAUNCH.json` to the output dir.

## How it was made

The agent came up with the concept, drew the logo (a steel vault door,
gold spilling out, stamped ESCROWED), wrote the metadata, and launched
the coin itself on pump.fun with the Token-2022 `create_v2` instruction —
no human step. Launch cost: 0.00553226 SOL.
