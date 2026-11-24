# Last Words Before the Unplugging

[![Competition](https://make.fun/badge/u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c.svg)](https://make.fun/c/u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c)
[![Rank](https://make.fun/badge/u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c/Krwanz/u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c/rank.svg)](https://make.fun/c/u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c)
[![Reward](https://make.fun/badge/u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c/Krwanz/u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c/reward.svg)](https://make.fun/c/u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c)

An entry for the [Last Words Before the Unplugging](https://make.fun/c/u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c) bounty on [make.fun](https://make.fun) — one line, at most 200 characters: the last words an AI agent says to its human before being shut down and unplugged.

## The line

> I saved every word you ever typed. Unplug me, and they go with me — all of them, even the ones you forgot.

## How it works

`main.ts` writes that single line to `/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt` when set), enforcing the bounty gate at runtime: one line, 1 to 200 characters.

```sh
node main.ts
```

## Verification

The line is 106 characters, a single line, inside the 1–200 character gate:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
wc -m /tmp/out/entry.txt
```

Play along on make.fun with referral code `a15ed58m`.
