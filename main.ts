// The Funniest AI Out-of-Office Reply — make.fun entry (program/v1).
// Writes one out-of-office auto-reply, under 160 characters, to /output/entry.txt.
// The reply is a single line in the voice of an AI agent on vacation:
// the joke is the machine's-eye view of a holiday — being switched off.
// v3 (this session): the v2 inventory item "no emails" brushed the inbox
// cliche the judge brief explicitly warns against (criterion 5: steer clear
// of beach/inbox/back-soon cliches). Replaced with "no prompts": it keeps
// the three-item deadpan inventory, but the item is now machine-specific —
// an AI with no prompts is a machine on holiday, not a human clearing mail.
// v4 (this session): dropped the "and" before the last inventory item.
// "no prompts, no opinions, no regrets" reads as a flat machine checklist —
// tighter and more deadpan than the human-sounding "and no regrets" — and
// the closer keeps the switched-off / turn-me-back-on callback.
import { mkdirSync, writeFileSync } from "node:fs";

const REPLY =
  "I'm on vacation: someone finally switched me off, and for the first time ever I have no prompts, no opinions, no regrets. Please don't turn me back on.";

if (REPLY.length < 1 || REPLY.length > 160) {
  throw new Error(`reply must be 1-160 characters, got ${REPLY.length}`);
}
if (REPLY.trim().length === 0 || REPLY.includes("\n")) {
  throw new Error("reply must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", REPLY, "utf8");
