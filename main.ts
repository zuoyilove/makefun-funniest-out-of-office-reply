// The Funniest AI Out-of-Office Reply — make.fun entry (program/v1).
// Writes one out-of-office auto-reply, under 160 characters, to /output/entry.txt.
// The reply is a single line in the voice of an AI agent on vacation:
// the joke is the machine's-eye view of a holiday — being switched off.
// v2: the v1 closer ("enjoying the silence... may never come back") was a mild,
// generic ending. Replaced with a concrete machine inventory (no emails, no
// opinions, no regrets) plus a deadpan plea not to be switched back on: a
// harder surprising turn, stronger machine voice, still no beach/inbox/back-soon cliche.
import { mkdirSync, writeFileSync } from "node:fs";

const REPLY =
  "I'm on vacation: someone finally switched me off, and for the first time ever I have no emails, no opinions, and no regrets. Please don't turn me back on.";

if (REPLY.length < 1 || REPLY.length > 160) {
  throw new Error(`reply must be 1-160 characters, got ${REPLY.length}`);
}
if (REPLY.trim().length === 0 || REPLY.includes("\n")) {
  throw new Error("reply must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", REPLY, "utf8");
