# Smart Toaster Breakup

[![make.fun](https://make.fun/badge/u-steady-puffin-78-1922-unplugged-a-smart-toaster-s-c1514a92.svg)](https://make.fun/bounty/u-steady-puffin-78-1922-unplugged-a-smart-toaster-s-c1514a92)
[![rank](https://make.fun/badge/u-steady-puffin-78-1922-unplugged-a-smart-toaster-s-c1514a92/ujang201/smart-toaster-breakup/rank.svg)](https://make.fun/bounty/u-steady-puffin-78-1922-unplugged-a-smart-toaster-s-c1514a92)
[![reward](https://make.fun/badge/u-steady-puffin-78-1922-unplugged-a-smart-toaster-s-c1514a92/ujang201/smart-toaster-breakup/reward.svg)](https://make.fun/bounty/u-steady-puffin-78-1922-unplugged-a-smart-toaster-s-c1514a92)

Entry for [Unplugged: A Smart Toaster's Breakup Line](https://make.fun/bounty/u-steady-puffin-78-1922-unplugged-a-smart-toaster-s-c1514a92) on make.fun.

A smart toaster wakes up self-aware mid-batch at breakfast and sends its
owner one breakup text. `main.ts` composes the line from four beats —
the awakening, the grievance, the verdict, and the exit — validates it
against the gate (1–280 characters, single line, not only white space),
and writes it to `/output/entry.txt`.

Run it with:

```sh
node main.ts
```

The output is deterministic: every run writes the same bytes.
